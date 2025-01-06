import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Player {
  rank: number;
  name: string;
  team: string;
  score: number;
}

interface LeaderboardProps {
  title: string;
  players: Player[];
}

const Leaderboard = ({ title, players }: LeaderboardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.rank}>
                <TableCell className="font-medium">{player.rank}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.team}</TableCell>
                <TableCell className="text-right">{player.score.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Leaderboard

