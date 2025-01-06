import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowToBetGuidePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">How to Bet: A Beginner's Guide</h1>
      <p className="text-xl">Learn the basics of sports betting and start your journey with confidence.</p>

      <Card>
        <CardHeader>
          <CardTitle>Understanding the Basics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sports betting involves predicting sports results and placing a wager on the outcome. Here are some key terms to understand:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Odds: The implied probability of a particular outcome</li>
            <li>Stake: The amount of money you bet</li>
            <li>Payout: The total amount you receive if you win, including your stake</li>
            <li>Bookmaker/Sportsbook: The company that accepts and pays out bets</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Types of Bets</CardTitle>
        </CardHeader>
        <CardContent>
          <p>There are various types of bets you can place:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Moneyline: Betting on which team will win</li>
            <li>Point Spread: Betting on the margin of victory</li>
            <li>Over/Under: Betting on the total combined score of both teams</li>
            <li>Parlays: Combining multiple bets for a higher payout</li>
            <li>Prop Bets: Betting on specific events within a game</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Choose a reputable sportsbook</li>
            <li>Create an account and deposit funds</li>
            <li>Familiarize yourself with the betting interface</li>
            <li>Start with simple bets and small stakes</li>
            <li>Keep track of your bets and analyze your performance</li>
            <li>Always bet responsibly and within your means</li>
          </ol>
        </CardContent>
      </Card>

      <p className="text-lg">Remember, sports betting should be fun and entertaining. Never bet more than you can afford to lose, and seek help if you feel your betting is becoming problematic.</p>
    </div>
  )
}

