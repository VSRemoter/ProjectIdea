import Leaderboard from '../components/leaderboard'
import { PageTransition } from '../components/page-transition'

const sixthManData = [
  { rank: 1, name: "Tyler Herro", team: "MIA", score: 20.1 },
  { rank: 2, name: "Jordan Clarkson", team: "UTA", score: 19.8 },
  { rank: 3, name: "Malcolm Brogdon", team: "BOS", score: 19.3 },
  { rank: 4, name: "Christian Wood", team: "DAL", score: 18.9 },
  { rank: 5, name: "Russell Westbrook", team: "LAC", score: 18.5 },
]

export default function SixthManPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">6th Man Race</h1>
        <p className="text-xl">Current standings for the Sixth Man of the Year award.</p>
        <Leaderboard title="6th Man Leaderboard" players={sixthManData} />
      </div>
    </PageTransition>
  )
}

