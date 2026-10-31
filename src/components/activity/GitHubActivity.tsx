import React, { useEffect, useState, useMemo } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';
import { GitHubIcon } from '../icons/SocialIcons';
import { fetchGitHubContributions, GitHubActivityData, ContributionDay } from '../../services/github';
import { ActivityCalendar } from './ActivityCalendar';

interface GitHubActivityProps {
  username?: string;
}

export const GitHubActivity: React.FC<GitHubActivityProps> = ({ username = 'vireshnagthane' }) => {
  const [data, setData] = useState<GitHubActivityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string>('Last 12 Mos');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchGitHubContributions(username)
      .then((res) => {
        if (isMounted) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load GitHub activity', err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  // Filter contributions by selected year
  const filteredDays = useMemo<ContributionDay[]>(() => {
    if (!data || !data.contributions.length) return [];

    if (selectedYear === 'Last 12 Mos') {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      const cutoff = oneYearAgo.toISOString().split('T')[0];
      return data.contributions.filter((d) => d.date >= cutoff);
    }

    return data.contributions.filter((d) => d.date.startsWith(selectedYear));
  }, [data, selectedYear]);

  // Compute total contributions for current selection
  const currentTotal = useMemo(() => {
    if (!data) return 0;
    if (selectedYear === 'Last 12 Mos') {
      return filteredDays.reduce((acc, curr) => acc + curr.count, 0);
    }
    return data.total[selectedYear] || filteredDays.reduce((acc, curr) => acc + curr.count, 0);
  }, [data, selectedYear, filteredDays]);

  const yearTabs = ['Last 12 Mos', '2026', '2025', '2024'];

  return (
    <div className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-8 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <GitHubIcon className="size-5 text-foreground" />
          <h2 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">
            Github Activity
          </h2>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors px-2 py-0.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
          >
            <span>@{username}</span>
            <ExternalLink className="size-3" />
          </a>
        </div>

        {/* Year Filter Controls */}
        <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl border border-black/5 dark:border-white/5 text-xs font-medium overflow-x-auto max-w-full">
          {yearTabs.map((year) => {
            const isActive = selectedYear === year;
            return (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-2 sm:px-3 py-1 rounded-lg transition-all whitespace-nowrap text-[11px] sm:text-xs ${
                  isActive
                    ? 'bg-white text-black dark:bg-zinc-800 dark:text-white shadow-xs font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contribution Metric Overview */}
      <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          <strong className="text-foreground font-semibold">{currentTotal}</strong> contributions in{' '}
          {selectedYear === 'Last 12 Mos' ? 'the past 12 months' : selectedYear}
        </span>
        <span className="text-[11px] font-mono">Live API Synced</span>
      </div>

      {/* Heatmap or Loading State */}
      {loading ? (
        <div className="py-12 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground border rounded-xl border-border/40 animate-pulse">
          <Loader2 className="size-5 animate-spin text-emerald-500" />
          <span>Loading live GitHub activity…</span>
        </div>
      ) : (
        <div className="p-3 sm:p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
          <ActivityCalendar days={filteredDays} colorScheme="green" />
        </div>
      )}
    </div>
  );
};
