import Leaderboard from '../components/leaderboard'
import { PageTransition } from '../components/page-transition'

const mvpData = [
  { rank: 1, name: "Nikola Jokic", team: "DEN", score: 28.5 },
  { rank: 2, name: "Joel Embiid", team: "PHI", score: 27.8 },
  { rank: 3, name: "Giannis Antetokounmpo", team: "MIL", score: 27.2 },
  { rank: 4, name: "Luka Doncic", team: "DAL", score: 26.9 },
  { rank: 5, name: "Stephen Curry", team: "GSW", score: 26.1 },
]

export default function MVPPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">MVP Race</h1>
        <p className="text-xl">Current standings for the Most Valuable Player award.</p>
        <Leaderboard title="MVP Leaderboard" players={mvpData} />
      </div>
    </PageTransition>
  )
}

