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
  submissionCalendar: { [timestamp: string]: number };
}

// Configurable LeetCode profile settings
export const LEETCODE_CONFIG = {
  username: "vireshnagthane",
  profileUrl: "https://leetcode.com/u/vireshnagthane/",
  // Set to true when the user connects their verified profile
  isProfileVerified: false,
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

  // Attempt to fetch from public LeetCode API proxies if available
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.status === 'success' || data.totalSolved !== undefined) {
        const stats: LeetCodeStats = {
          username,
          profileUrl: `https://leetcode.com/u/${username}/`,
          isConfigured: true,
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 3300,
          easySolved: data.easySolved || 0,
          easyTotal: data.totalEasy || 840,
          mediumSolved: data.mediumSolved || 0,
          mediumTotal: data.totalMedium || 1750,
          hardSolved: data.hardSolved || 0,
          hardTotal: data.totalHard || 750,
          streakDays: 0,
          activeDaysPastYear: 0,
          globalRank: data.ranking ? `#${data.ranking.toLocaleString()}` : "Unranked",
          rankPercentile: data.ranking ? "Active Solver" : "Profile Active",
          contestRating: 0,
          contestPercentile: "Top 50%",
          badgesCount: 0,
          badgesHighlight: "Solving Problem Sets",
          submissionCalendar: data.submissionCalendar || {},
        };

        try {
          localStorage.setItem(cacheKey, JSON.stringify({ data: stats, timestamp: Date.now() }));
        } catch (e) {}

        return stats;
      }
    }
  } catch (err) {
    // API not reachable or timed out
  }

  // Graceful state: Honest representation of student problem-solving journey
  return {
    username: username,
    profileUrl: `https://leetcode.com/u/${username}/`,
    isConfigured: LEETCODE_CONFIG.isProfileVerified,
    totalSolved: 0,
    totalQuestions: 3300,
    easySolved: 0,
    easyTotal: 840,
    mediumSolved: 0,
    mediumTotal: 1750,
    hardSolved: 0,
    hardTotal: 750,
    streakDays: 0,
    activeDaysPastYear: 0,
    globalRank: "Active Learner",
    rankPercentile: "Problem Solver in Progress",
    contestRating: 0,
    contestPercentile: "Active Competitor",
    badgesCount: 0,
    badgesHighlight: "Daily DSA Practice",
    submissionCalendar: {},
  };
}
