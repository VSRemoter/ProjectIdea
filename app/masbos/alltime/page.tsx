import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PlayerStats {
  rank: number
  name: string
  team: string
  season: string
  masbosScore: number
  pointsPerGame: number
  reboundsPerGame: number
  assistsPerGame: number
}

const playerStats: PlayerStats[] = [
  {
    rank: 1,
    name: "Michael Jordan",
    team: "CHI",
    season: "1995-96",
    masbosScore: 99.8,
    pointsPerGame: 30.4,
    reboundsPerGame: 6.6,
    assistsPerGame: 4.3
  },
  {
    rank: 2,
    name: "LeBron James",
    team: "MIA",
    season: "2012-13",
    masbosScore: 99.3,
    pointsPerGame: 26.8,
    reboundsPerGame: 8.0,
    assistsPerGame: 7.3
  },
  {
    rank: 3,
    name: "Kareem Abdul-Jabbar",
    team: "LAL",
    season: "1971-72",
    masbosScore: 98.9,
    pointsPerGame: 34.8,
    reboundsPerGame: 16.6,
    assistsPerGame: 4.6
  },
  {
    rank: 4,
    name: "Wilt Chamberlain",
    team: "PHI",
    season: "1966-67",
    masbosScore: 98.7,
    pointsPerGame: 24.1,
    reboundsPerGame: 24.2,
    assistsPerGame: 7.8
  },
  {
    rank: 5,
    name: "Magic Johnson",
    team: "LAL",
    season: "1986-87",
    masbosScore: 98.2,
    pointsPerGame: 23.9,
    reboundsPerGame: 6.3,
    assistsPerGame: 12.2
  },
  // Add more players as needed
]

export default function MASBOSAlltimePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">MASBOS Alltime Leaders</h1>
      <p className="text-xl">The highest MASBOS (Mixture of Advanced Stats and Betting Odds Score) scores in NBA history.</p>
      <Card>
        <CardHeader>
          <CardTitle>MASBOS Alltime Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Rank</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Season</TableHead>
                  <TableHead>MASBOS Score</TableHead>
                  <TableHead>PPG</TableHead>
                  <TableHead>RPG</TableHead>
                  <TableHead>APG</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playerStats.map((player) => (
                  <TableRow key={player.rank}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell>{player.name}</TableCell>
                    <TableCell>{player.team}</TableCell>
                    <TableCell>{player.season}</TableCell>
                    <TableCell>{player.masbosScore.toFixed(1)}</TableCell>
                    <TableCell>{player.pointsPerGame.toFixed(1)}</TableCell>
                    <TableCell>{player.reboundsPerGame.toFixed(1)}</TableCell>
                    <TableCell>{player.assistsPerGame.toFixed(1)}</TableCell>
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

