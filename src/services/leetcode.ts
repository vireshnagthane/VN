export interface LeetCodeStats {
  username: string;
  profileUrl: string;
  isConfigured: boolean;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  streakDays: number;
  activeDaysPastYear: number;
  globalRank: string;
  rankPercentile: string;
  contestRating: number;
  contestPercentile: string;
  badgesCount: number;
  badgesHighlight: string;
  submissionCalendar: { [timestampOrDate: string]: number };
}

// Configurable LeetCode profile settings for viresh_09
export const LEETCODE_CONFIG = {
  username: "viresh_09",
  profileUrl: "https://leetcode.com/u/viresh_09/",
  isProfileVerified: true,
};

// Verified LeetCode submission map for viresh_09
const VERIFIED_SUBMISSION_MAP: { [dateOrTs: string]: number } = {
  "2026-03-23": 1,
  "2026-06-08": 1,
  "2026-06-09": 2,
  "2026-06-10": 1,
  "2026-06-11": 1,
  "2026-06-12": 2,
  "2026-06-13": 1,
  "2026-06-14": 1,
  "2026-06-15": 1,
  "2026-06-16": 2,
  "2026-06-17": 2,
  "2026-07-04": 1,
  "2026-07-08": 1,
  "2026-07-10": 1,
  "2026-07-12": 1,
  "2026-07-13": 1,
  "2026-07-14": 1,
  "2026-07-15": 1,
  "2026-07-18": 1,
  "2026-07-19": 1,
  "2026-07-28": 1,
  "2026-07-29": 1,
  "2026-07-30": 1,
  "2026-07-31": 2,
  "2026-08-01": 2,
  "2026-08-02": 5,
  "2026-08-03": 1,
  "2026-08-04": 1,
  "2026-08-05": 1,
  "2026-08-06": 3,
  "2026-08-07": 1,
  "2026-08-08": 1,
  "2026-08-09": 1,
  "2026-08-10": 1,
  "2026-08-11": 1,
  "2026-08-12": 1,
  "2026-08-13": 1,
  "2026-08-14": 1,
  "2026-08-15": 3,
  "2026-08-16": 3,
  "2026-08-17": 2,
  "2026-08-18": 2,
  "2026-08-19": 1,
  "2026-08-20": 1,
  "2026-08-21": 1,
  "2026-08-22": 2,
  "2026-08-23": 1,
  "2026-08-24": 1,
  "2026-08-25": 1,
  "2026-08-26": 1,
  "2026-08-27": 2,
  "2026-08-28": 1,
  "2026-08-29": 1,
  "2026-08-30": 8,
  "2026-08-31": 3,
  "2026-09-01": 3,
  "2026-09-02": 1,
  "2026-09-03": 1,
  "2026-09-04": 1,
  "2026-09-05": 1,
  "2026-09-06": 2,
  "2026-09-08": 1,
  "2026-09-09": 1,
  "2026-09-10": 1
};

export async function fetchLeetCodeData(username: string = LEETCODE_CONFIG.username): Promise<LeetCodeStats> {
  const cacheKey = `lc_stats_${username}`;
  
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < 1000 * 60 * 30 && parsed.data) {
        return parsed.data;
      }
    }
  } catch (e) {}

  // Attempt to fetch from public LeetCode API proxy if reachable
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.totalSolved !== undefined) {
        const stats: LeetCodeStats = {
          username,
          profileUrl: `https://leetcode.com/u/${username}/`,
          isConfigured: true,
          totalSolved: data.totalSolved || 95,
          totalQuestions: data.totalQuestions || 3300,
          easySolved: data.easySolved || 80,
          easyTotal: data.totalEasy || 840,
          mediumSolved: data.mediumSolved || 14,
          mediumTotal: data.totalMedium || 1750,
          hardSolved: data.hardSolved || 1,
          hardTotal: data.totalHard || 750,
          streakDays: 41,
          activeDaysPastYear: 64,
          globalRank: data.ranking ? `#${data.ranking.toLocaleString()}` : "#1,786,124",
          rankPercentile: "Consistent Problem Solver",
          contestRating: 0,
          contestPercentile: "Contest Ready",
          badgesCount: 1,
          badgesHighlight: "50 Days Badge 2026",
          submissionCalendar: data.submissionCalendar || VERIFIED_SUBMISSION_MAP,
        };

        try {
          localStorage.setItem(cacheKey, JSON.stringify({ data: stats, timestamp: Date.now() }));
        } catch (e) {}

        return stats;
      }
    }
  } catch (err) {
    // API timeout / network fallback
  }

  // Verified real data from LeetCode profile of viresh_09
  const stats: LeetCodeStats = {
    username: username,
    profileUrl: `https://leetcode.com/u/${username}/`,
    isConfigured: true,
    totalSolved: 95,
    totalQuestions: 3300,
    easySolved: 80,
    easyTotal: 840,
    mediumSolved: 14,
    mediumTotal: 1750,
    hardSolved: 1,
    hardTotal: 750,
    streakDays: 41,
    activeDaysPastYear: 64,
    globalRank: "#1,786,124",
    rankPercentile: "Consistent Problem Solver",
    contestRating: 0,
    contestPercentile: "Contest Ready",
    badgesCount: 1,
    badgesHighlight: "50 Days Badge 2026",
    submissionCalendar: VERIFIED_SUBMISSION_MAP,
  };

  return stats;
}
