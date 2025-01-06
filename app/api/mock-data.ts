export const mockDatasets = [
  {
    id: '1',
    title: 'NBA Player Statistics 2022-2023',
    description: 'Comprehensive statistics for all NBA players from the 2022-2023 season.',
    price: 9.99,
    uploader: 'stats@example.com',
    fileName: 'nba_player_stats_2022_2023.csv',
  },
  {
    id: '2',
    title: 'Historical MVP Voting Data',
    description: 'MVP voting results and player statistics for the past 20 seasons.',
    price: 14.99,
    uploader: 'mvp@example.com',
    fileName: 'historical_mvp_data.csv',
  },
  {
    id: '3',
    title: 'Team Performance Metrics',
    description: 'Advanced team performance metrics for all NBA teams over the last 5 seasons.',
    price: 19.99,
    uploader: 'analytics@example.com',
    fileName: 'team_performance_metrics.csv',
  },
  {
    id: '4',
    title: 'Rookie Performance Tracker',
    description: 'Detailed statistics and performance indicators for NBA rookies in the last 3 seasons.',
    price: 7.99,
    uploader: 'rookie@example.com',
    fileName: 'rookie_performance_tracker.csv',
  },
  {
    id: '5',
    title: 'NBA Shot Charts',
    description: 'Visualized shot charts for top 50 NBA players in the current season.',
    price: 24.99,
    uploader: 'shotcharts@example.com',
    fileName: 'nba_shot_charts.csv',
  },
]

// Initialize the datasets with mock data
export function initializeMockData() {
  datasets = [...mockDatasets]
}

// Call this function when your application starts
initializeMockData()

