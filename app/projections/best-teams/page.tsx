import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamStats {
  rank: number
  name: string
  record: string
  winPercentage: number
  pointsPerGame: number
  pointsAllowed: number
  netRating: number
  offensiveRating: number
  defensiveRating: number
}

const teamStats: TeamStats[] = [
  {
    rank: 1,
    name: "Boston Celtics",
    record: "45-12",
    winPercentage: 0.789,
    pointsPerGame: 120.8,
    pointsAllowed: 109.2,
    netRating: 11.6,
    offensiveRating: 121.5,
    defensiveRating: 109.9
  },
  {
    rank: 2,
    name: "Denver Nuggets",
    record: "42-15",
    winPercentage: 0.737,
    pointsPerGame: 118.5,
    pointsAllowed: 110.8,
    netRating: 7.7,
    offensiveRating: 119.2,
    defensiveRating: 111.5
  },
  {
    rank: 3,
    name: "Minnesota Timberwolves",
    record: "39-16",
    winPercentage: 0.709,
    pointsPerGame: 113.2,
    pointsAllowed: 107.4,
    netRating: 5.8,
    offensiveRating: 114.1,
    defensiveRating: 108.3
  },
  {
    rank: 4,
    name: "Milwaukee Bucks",
    record: "37-21",
    winPercentage: 0.638,
    pointsPerGame: 119.4,
    pointsAllowed: 116.2,
    netRating: 3.2,
    offensiveRating: 118.9,
    defensiveRating: 115.7
  },
  {
    rank: 5,
    name: "Los Angeles Clippers",
    record: "36-20",
    winPercentage: 0.643,
    pointsPerGame: 116.8,
    pointsAllowed: 112.9,
    netRating: 3.9,
    offensiveRating: 117.5,
    defensiveRating: 113.6
  },
  {
    rank: 6,
    name: "Oklahoma City Thunder",
    record: "37-20",
    winPercentage: 0.649,
    pointsPerGame: 120.2,
    pointsAllowed: 114.8,
    netRating: 5.4,
    offensiveRating: 119.8,
    defensiveRating: 114.4
  },
  {
    rank: 7,
    name: "Cleveland Cavaliers",
    record: "36-19",
    winPercentage: 0.655,
    pointsPerGame: 114.6,
    pointsAllowed: 109.8,
    netRating: 4.8,
    offensiveRating: 115.2,
    defensiveRating: 110.4
  },
  {
    rank: 8,
    name: "New York Knicks",
    record: "34-23",
    winPercentage: 0.596,
    pointsPerGame: 115.2,
    pointsAllowed: 111.4,
    netRating: 3.8,
    offensiveRating: 116.1,
    defensiveRating: 112.3
  },
  {
    rank: 9,
    name: "Phoenix Suns",
    record: "33-24",
    winPercentage: 0.579,
    pointsPerGame: 116.9,
    pointsAllowed: 113.8,
    netRating: 3.1,
    offensiveRating: 117.4,
    defensiveRating: 114.3
  },
  {
    rank: 10,
    name: "New Orleans Pelicans",
    record: "33-24",
    winPercentage: 0.579,
    pointsPerGame: 115.8,
    pointsAllowed: 112.9,
    netRating: 2.9,
    offensiveRating: 116.5,
    defensiveRating: 113.6
  },
  {
    rank: 11,
    name: "Sacramento Kings",
    record: "32-25",
    winPercentage: 0.561,
    pointsPerGame: 118.2,
    pointsAllowed: 117.1,
    netRating: 1.1,
    offensiveRating: 118.8,
    defensiveRating: 117.7
  },
  {
    rank: 12,
    name: "Indiana Pacers",
    record: "31-26",
    winPercentage: 0.544,
    pointsPerGame: 123.4,
    pointsAllowed: 122.8,
    netRating: 0.6,
    offensiveRating: 124.1,
    defensiveRating: 123.5
  },
  {
    rank: 13,
    name: "Miami Heat",
    record: "30-27",
    winPercentage: 0.526,
    pointsPerGame: 109.8,
    pointsAllowed: 109.4,
    netRating: 0.4,
    offensiveRating: 110.5,
    defensiveRating: 110.1
  },
  {
    rank: 14,
    name: "Dallas Mavericks",
    record: "32-25",
    winPercentage: 0.561,
    pointsPerGame: 118.6,
    pointsAllowed: 117.9,
    netRating: 0.7,
    offensiveRating: 119.2,
    defensiveRating: 118.5
  },
  {
    rank: 15,
    name: "Los Angeles Lakers",
    record: "30-27",
    winPercentage: 0.526,
    pointsPerGame: 117.2,
    pointsAllowed: 116.8,
    netRating: 0.4,
    offensiveRating: 117.9,
    defensiveRating: 117.5
  },
  {
    rank: 16,
    name: "Philadelphia 76ers",
    record: "32-25",
    winPercentage: 0.561,
    pointsPerGame: 115.9,
    pointsAllowed: 112.8,
    netRating: 3.1,
    offensiveRating: 116.6,
    defensiveRating: 113.5
  },
  {
    rank: 17,
    name: "Orlando Magic",
    record: "30-27",
    winPercentage: 0.526,
    pointsPerGame: 112.4,
    pointsAllowed: 111.8,
    netRating: 0.6,
    offensiveRating: 113.1,
    defensiveRating: 112.5
  },
  {
    rank: 18,
    name: "Golden State Warriors",
    record: "27-28",
    winPercentage: 0.491,
    pointsPerGame: 118.8,
    pointsAllowed: 118.4,
    netRating: 0.4,
    offensiveRating: 119.5,
    defensiveRating: 119.1
  },
  {
    rank: 19,
    name: "Houston Rockets",
    record: "24-33",
    winPercentage: 0.421,
    pointsPerGame: 113.8,
    pointsAllowed: 116.2,
    netRating: -2.4,
    offensiveRating: 114.5,
    defensiveRating: 116.9
  },
  {
    rank: 20,
    name: "Brooklyn Nets",
    record: "21-36",
    winPercentage: 0.368,
    pointsPerGame: 112.4,
    pointsAllowed: 115.9,
    netRating: -3.5,
    offensiveRating: 113.1,
    defensiveRating: 116.6
  },
  {
    rank: 21,
    name: "Toronto Raptors",
    record: "21-36",
    winPercentage: 0.368,
    pointsPerGame: 112.8,
    pointsAllowed: 116.5,
    netRating: -3.7,
    offensiveRating: 113.5,
    defensiveRating: 117.2
  },
  {
    rank: 22,
    name: "Memphis Grizzlies",
    record: "20-37",
    winPercentage: 0.351,
    pointsPerGame: 106.8,
    pointsAllowed: 112.9,
    netRating: -6.1,
    offensiveRating: 107.5,
    defensiveRating: 113.6
  },
  {
    rank: 23,
    name: "Atlanta Hawks",
    record: "24-33",
    winPercentage: 0.421,
    pointsPerGame: 118.2,
    pointsAllowed: 120.8,
    netRating: -2.6,
    offensiveRating: 118.9,
    defensiveRating: 121.5
  },
  {
    rank: 24,
    name: "Utah Jazz",
    record: "26-31",
    winPercentage: 0.456,
    pointsPerGame: 117.2,
    pointsAllowed: 119.4,
    netRating: -2.2,
    offensiveRating: 117.9,
    defensiveRating: 120.1
  },
  {
    rank: 25,
    name: "Chicago Bulls",
    record: "26-31",
    winPercentage: 0.456,
    pointsPerGame: 110.2,
    pointsAllowed: 112.8,
    netRating: -2.6,
    offensiveRating: 110.9,
    defensiveRating: 113.5
  },
  {
    rank: 26,
    name: "Portland Trail Blazers",
    record: "15-41",
    winPercentage: 0.268,
    pointsPerGame: 109.2,
    pointsAllowed: 116.8,
    netRating: -7.6,
    offensiveRating: 109.9,
    defensiveRating: 117.5
  },
  {
    rank: 27,
    name: "Charlotte Hornets",
    record: "13-43",
    winPercentage: 0.232,
    pointsPerGame: 107.2,
    pointsAllowed: 117.9,
    netRating: -10.7,
    offensiveRating: 107.9,
    defensiveRating: 118.6
  },
  {
    rank: 28,
    name: "San Antonio Spurs",
    record: "11-46",
    winPercentage: 0.193,
    pointsPerGame: 110.8,
    pointsAllowed: 120.2,
    netRating: -9.4,
    offensiveRating: 111.5,
    defensiveRating: 120.9
  },
  {
    rank: 29,
    name: "Washington Wizards",
    record: "9-47",
    winPercentage: 0.161,
    pointsPerGame: 111.4,
    pointsAllowed: 122.4,
    netRating: -11.0,
    offensiveRating: 112.1,
    defensiveRating: 123.1
  },
  {
    rank: 30,
    name: "Detroit Pistons",
    record: "8-48",
    winPercentage: 0.143,
    pointsPerGame: 110.2,
    pointsAllowed: 121.8,
    netRating: -11.6,
    offensiveRating: 110.9,
    defensiveRating: 122.5
  }
]

export default function BestTeamsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">NBA Team Rankings</h1>
      <p className="text-xl">Current NBA team rankings based on advanced statistics.</p>
      <Card>
        <CardHeader>
          <CardTitle>Team Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Rank</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Record</TableHead>
                  <TableHead>Win %</TableHead>
                  <TableHead>PPG</TableHead>
                  <TableHead>OPP PPG</TableHead>
                  <TableHead>Net RTG</TableHead>
                  <TableHead>OFF RTG</TableHead>
                  <TableHead>DEF RTG</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamStats.map((team) => (
                  <TableRow key={team.rank}>
                    <TableCell className="font-medium">{team.rank}</TableCell>
                    <TableCell>{team.name}</TableCell>
                    <TableCell>{team.record}</TableCell>
                    <TableCell>{team.winPercentage.toFixed(3)}</TableCell>
                    <TableCell>{team.pointsPerGame.toFixed(1)}</TableCell>
                    <TableCell>{team.pointsAllowed.toFixed(1)}</TableCell>
                    <TableCell>{team.netRating.toFixed(1)}</TableCell>
                    <TableCell>{team.offensiveRating.toFixed(1)}</TableCell>
                    <TableCell>{team.defensiveRating.toFixed(1)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

