import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PlayerStats {
  rank: number
  name: string
  team: string
  mpg: number
  usg: number
  ppg: number
  rpg: number
  apg: number
  spg: number
  bpg: number
  fgPercentage: number
  threePtPercentage: number
  ftPercentage: number
  tsPercentage: number
  efgPercentage: number
}

const playerStats: PlayerStats[] = [
  {
    rank: 1,
    name: "Joel Embiid",
    team: "PHI",
    mpg: 34.2,
    usg: 37.5,
    ppg: 35.3,
    rpg: 11.3,
    apg: 5.7,
    spg: 1.1,
    bpg: 1.8,
    fgPercentage: 53.7,
    threePtPercentage: 35.1,
    ftPercentage: 85.7,
    tsPercentage: 64.2,
    efgPercentage: 57.5
  },
  {
    rank: 2,
    name: "Nikola Jokic",
    team: "DEN",
    mpg: 33.8,
    usg: 32.1,
    ppg: 26.1,
    rpg: 12.0,
    apg: 9.0,
    spg: 1.3,
    bpg: 0.8,
    fgPercentage: 58.3,
    threePtPercentage: 37.5,
    ftPercentage: 82.1,
    tsPercentage: 65.1,
    efgPercentage: 62.0
  },
  {
    rank: 3,
    name: "Giannis Antetokounmpo",
    team: "MIL",
    mpg: 33.5,
    usg: 35.8,
    ppg: 31.8,
    rpg: 11.2,
    apg: 5.3,
    spg: 0.8,
    bpg: 1.0,
    fgPercentage: 59.1,
    threePtPercentage: 27.5,
    ftPercentage: 66.5,
    tsPercentage: 62.8,
    efgPercentage: 60.5
  },
  {
    rank: 4,
    name: "Shai Gilgeous-Alexander",
    team: "OKC",
    mpg: 33.9,
    usg: 33.2,
    ppg: 31.3,
    rpg: 5.5,
    apg: 6.4,
    spg: 2.1,
    bpg: 0.8,
    fgPercentage: 54.6,
    threePtPercentage: 32.8,
    ftPercentage: 90.2,
    tsPercentage: 63.1,
    efgPercentage: 57.2
  },
  {
    rank: 5,
    name: "Luka Doncic",
    team: "DAL",
    mpg: 36.2,
    usg: 38.5,
    ppg: 34.3,
    rpg: 8.8,
    apg: 9.5,
    spg: 1.4,
    bpg: 0.5,
    fgPercentage: 49.8,
    threePtPercentage: 38.2,
    ftPercentage: 75.8,
    tsPercentage: 61.0,
    efgPercentage: 56.5
  },
  {
    rank: 6,
    name: "Damian Lillard",
    team: "MIL",
    mpg: 35.6,
    usg: 31.8,
    ppg: 28.0,
    rpg: 4.4,
    apg: 7.0,
    spg: 0.9,
    bpg: 0.3,
    fgPercentage: 43.4,
    threePtPercentage: 37.1,
    ftPercentage: 92.7,
    tsPercentage: 61.2,
    efgPercentage: 52.8
  },
  {
    rank: 7,
    name: "Jayson Tatum",
    team: "BOS",
    mpg: 36.3,
    usg: 31.5,
    ppg: 27.1,
    rpg: 8.6,
    apg: 4.7,
    spg: 1.0,
    bpg: 0.7,
    fgPercentage: 47.8,
    threePtPercentage: 36.2,
    ftPercentage: 82.8,
    tsPercentage: 59.5,
    efgPercentage: 54.2
  },
  {
    rank: 8,
    name: "Kevin Durant",
    team: "PHX",
    mpg: 35.5,
    usg: 30.8,
    ppg: 28.3,
    rpg: 6.6,
    apg: 5.6,
    spg: 0.7,
    bpg: 1.2,
    fgPercentage: 52.5,
    threePtPercentage: 41.8,
    ftPercentage: 87.5,
    tsPercentage: 63.8,
    efgPercentage: 58.2
  },
  {
    rank: 9,
    name: "Stephen Curry",
    team: "GSW",
    mpg: 32.8,
    usg: 31.2,
    ppg: 28.1,
    rpg: 4.4,
    apg: 5.0,
    spg: 0.8,
    bpg: 0.2,
    fgPercentage: 46.2,
    threePtPercentage: 41.9,
    ftPercentage: 92.4,
    tsPercentage: 63.5,
    efgPercentage: 58.1
  },
  {
    rank: 10,
    name: "Devin Booker",
    team: "PHX",
    mpg: 34.5,
    usg: 32.5,
    ppg: 27.5,
    rpg: 4.6,
    apg: 7.0,
    spg: 0.8,
    bpg: 0.4,
    fgPercentage: 49.8,
    threePtPercentage: 37.8,
    ftPercentage: 86.5,
    tsPercentage: 60.8,
    efgPercentage: 55.2
  },
  // Add more players here...
]

export default function BestPlayersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">NBA Player Rankings</h1>
      <p className="text-xl">Current NBA player rankings based on advanced statistics.</p>
      <Card>
        <CardHeader>
          <CardTitle>Player Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Rank</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>MPG</TableHead>
                  <TableHead>USG%</TableHead>
                  <TableHead>PPG</TableHead>
                  <TableHead>RPG</TableHead>
                  <TableHead>APG</TableHead>
                  <TableHead>SPG</TableHead>
                  <TableHead>BPG</TableHead>
                  <TableHead>FG%</TableHead>
                  <TableHead>3P%</TableHead>
                  <TableHead>FT%</TableHead>
                  <TableHead>TS%</TableHead>
                  <TableHead>eFG%</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playerStats.map((player) => (
                  <TableRow key={player.rank}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell>{player.name}</TableCell>
                    <TableCell>{player.team}</TableCell>
                    <TableCell>{player.mpg.toFixed(1)}</TableCell>
                    <TableCell>{player.usg.toFixed(1)}</TableCell>
                    <TableCell>{player.ppg.toFixed(1)}</TableCell>
                    <TableCell>{player.rpg.toFixed(1)}</TableCell>
                    <TableCell>{player.apg.toFixed(1)}</TableCell>
                    <TableCell>{player.spg.toFixed(1)}</TableCell>
                    <TableCell>{player.bpg.toFixed(1)}</TableCell>
                    <TableCell>{player.fgPercentage.toFixed(1)}</TableCell>
                    <TableCell>{player.threePtPercentage.toFixed(1)}</TableCell>
                    <TableCell>{player.ftPercentage.toFixed(1)}</TableCell>
                    <TableCell>{player.tsPercentage.toFixed(1)}</TableCell>
                    <TableCell>{player.efgPercentage.toFixed(1)}</TableCell>
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

