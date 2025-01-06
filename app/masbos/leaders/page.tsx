import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PlayerStats {
  rank: number
  name: string
  team: string
  masbosScore: number
  gamesPlayed: number
  pointsPerGame: number
  reboundsPerGame: number
  assistsPerGame: number
}

const playerStats: PlayerStats[] = [
  {
    rank: 1,
    name: "Nikola Jokic",
    team: "DEN",
    masbosScore: 98.7,
    gamesPlayed: 69,
    pointsPerGame: 24.8,
    reboundsPerGame: 11.8,
    assistsPerGame: 9.8
  },
  {
    rank: 2,
    name: "Joel Embiid",
    team: "PHI",
    masbosScore: 97.2,
    gamesPlayed: 66,
    pointsPerGame: 33.1,
    reboundsPerGame: 10.2,
    assistsPerGame: 4.2
  },
  {
    rank: 3,
    name: "Giannis Antetokounmpo",
    team: "MIL",
    masbosScore: 96.5,
    gamesPlayed: 63,
    pointsPerGame: 31.1,
    reboundsPerGame: 11.8,
    assistsPerGame: 5.7
  },
  {
    rank: 4,
    name: "Luka Doncic",
    team: "DAL",
    masbosScore: 95.8,
    gamesPlayed: 66,
    pointsPerGame: 32.4,
    reboundsPerGame: 8.6,
    assistsPerGame: 8.0
  },
  {
    rank: 5,
    name: "Jayson Tatum",
    team: "BOS",
    masbosScore: 94.3,
    gamesPlayed: 74,
    pointsPerGame: 30.1,
    reboundsPerGame: 8.8,
    assistsPerGame: 4.6
  },
  // Add more players as needed
]

export default function MASBOSLeadersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">MASBOS Leaders</h1>
      <p className="text-xl">Current NBA player rankings based on MASBOS (Mixture of Advanced Stats and Betting Odds Score).</p>
      <Card>
        <CardHeader>
          <CardTitle>MASBOS Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Rank</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>MASBOS Score</TableHead>
                  <TableHead>GP</TableHead>
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
                    <TableCell>{player.masbosScore.toFixed(1)}</TableCell>
                    <TableCell>{player.gamesPlayed}</TableCell>
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

