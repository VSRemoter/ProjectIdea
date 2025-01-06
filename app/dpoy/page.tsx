import Leaderboard from '../components/leaderboard'
import { PageTransition } from '../components/page-transition'

const dpoyData = [
  { rank: 1, name: "Rudy Gobert", team: "MIN", score: 9.2 },
  { rank: 2, name: "Anthony Davis", team: "LAL", score: 8.9 },
  { rank: 3, name: "Giannis Antetokounmpo", team: "MIL", score: 8.7 },
  { rank: 4, name: "Bam Adebayo", team: "MIA", score: 8.5 },
  { rank: 5, name: "Draymond Green", team: "GSW", score: 8.3 },
]

export default function DPOYPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">DPOY Race</h1>
        <p className="text-xl">Current standings for the Defensive Player of the Year award.</p>
        <Leaderboard title="DPOY Leaderboard" players={dpoyData} />
      </div>
    </PageTransition>
  )
}

