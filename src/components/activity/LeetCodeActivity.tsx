import React, { useState, useEffect } from 'react';
import { Flame, Trophy, Award, ExternalLink, Code2 } from 'lucide-react';
import { fetchLeetCodeData, LeetCodeStats, LEETCODE_CONFIG } from '../../services/leetcode';
import { ActivityCalendar, CalendarDay } from './ActivityCalendar';

interface LeetCodeActivityProps {
  username?: string;
}

export const LeetCodeActivity: React.FC<LeetCodeActivityProps> = ({ username = LEETCODE_CONFIG.username }) => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string>('2026');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchLeetCodeData(username)
      .then((data) => {
        if (isMounted) {
          setStats(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  // Generate calendar days for LeetCode based on selected year (2026 by default)
  const calendarDays: CalendarDay[] = React.useMemo(() => {
    const days: CalendarDay[] = [];
    const start = new Date(`${selectedYear}-01-01`);
    const end = new Date(`${selectedYear}-12-31`);

    const current = new Date(start);
    while (current <= end) {
      const dateStr = current.toISOString().split('T')[0];
      let count = 0;
      let level: 0 | 1 | 2 | 3 | 4 = 0;

      if (stats?.submissionCalendar) {
        if (stats.submissionCalendar[dateStr]) {
          count = stats.submissionCalendar[dateStr];
        } else {
          // Check epoch timestamp fallback
          const timestamp = Math.floor(current.getTime() / 1000).toString();
          if (stats.submissionCalendar[timestamp]) {
            count = stats.submissionCalendar[timestamp];
          }
        }

        if (count > 0) {
          level = count >= 4 ? 4 : count >= 3 ? 3 : count >= 2 ? 2 : 1;
        }
      }

      days.push({ date: dateStr, count, level });
      current.setDate(current.getDate() + 1);
    }
    return days;
  }, [stats, selectedYear]);

  const yearTabs = ['2026', '2025'];

  const totalSolved = stats?.totalSolved ?? 95;
  const easySolved = stats?.easySolved ?? 80;
  const mediumSolved = stats?.mediumSolved ?? 14;
  const hardSolved = stats?.hardSolved ?? 1;
  const streakDays = stats?.streakDays ?? 41;
  const activeDays = stats?.activeDaysPastYear ?? 64;
  const globalRank = stats?.globalRank ?? '#1,786,124';
  const badgesCount = stats?.badgesCount ?? 1;
  const badgeName = stats?.badgesHighlight ?? '50 Days Badge 2026';

  return (
    <div className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-8 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-500">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="size-4 text-amber-500">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
          <h2 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">
            LeetCode Activity
          </h2>
          <a
            href={`https://leetcode.com/u/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors px-2 py-0.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
          >
            <span>@{username}</span>
            <ExternalLink className="size-3" />
          </a>
        </div>

        {/* Year Controls */}
        <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl border border-black/5 dark:border-white/5 text-xs font-medium">
          {yearTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedYear(tab)}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all ${
                selectedYear === tab
                  ? 'bg-white text-black dark:bg-zinc-800 dark:text-white shadow-xs font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Stat Cards Grid (Faithfully Matching Reference) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
        {/* Box 1: Solved */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] p-2.5 sm:p-3 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
            <Code2 className="size-3.5 text-emerald-500" />
            <span>Solved</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-bold font-space-grotesk text-foreground">
              {totalSolved}
            </span>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground">/ 3300+</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5 flex gap-1 sm:gap-1.5 font-mono flex-wrap">
            <span className="text-emerald-500 font-medium">E:{easySolved}</span>
            <span className="text-amber-500 font-medium">M:{mediumSolved}</span>
            <span className="text-rose-500 font-medium">H:{hardSolved}</span>
          </p>
        </div>

        {/* Box 2: Streak */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] p-2.5 sm:p-3 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
            <Flame className="size-3.5 text-orange-500 fill-orange-500" />
            <span>Streak</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-bold font-space-grotesk text-foreground">
              {streakDays}
            </span>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground">Days</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5 font-mono truncate">
            {activeDays} days active in year
          </p>
        </div>

        {/* Box 3: Global Rank */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] p-2.5 sm:p-3 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
            <Trophy className="size-3.5 text-amber-500" />
            <span>Global Rank</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-xl font-bold font-space-grotesk text-foreground truncate">
              {globalRank}
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5 truncate">Active Problem Solver</p>
        </div>

        {/* Box 4: Badges */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] p-2.5 sm:p-3 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
            <Award className="size-3.5 text-purple-500" />
            <span>Badges</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-bold font-space-grotesk text-foreground">
              {badgesCount}
            </span>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground">Earned</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5 truncate" title={badgeName}>
            {badgeName}
          </p>
        </div>
      </div>

      {/* Heatmap with Verified Submissions */}
      <div className="p-3 sm:p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
        <ActivityCalendar
          days={calendarDays}
          colorScheme="green"
          emptyLabel="Problem solving session"
        />
        <div className="mt-2 text-center">
          <a
            href={`https://leetcode.com/u/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-emerald-500 transition-colors pt-2 font-medium"
          >
            <span>Visit @{username} on LeetCode</span>
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
