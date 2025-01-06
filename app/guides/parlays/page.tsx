import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ParlaysGuidePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Understanding Parlays</h1>
      <p className="text-xl">Learn about parlay bets, their potential rewards, and the risks involved.</p>

      <Card>
        <CardHeader>
          <CardTitle>What is a Parlay?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>A parlay is a single bet that links together two or more individual wagers. To win a parlay bet, all of the wagers must win or push (tie). If any of the bets in the parlay lose, the entire parlay loses. The main appeal of parlays is that they offer much higher payouts than individual bets.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advantages of Parlays</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li>Higher potential payouts</li>
            <li>Excitement of having multiple stakes in different games</li>
            <li>Ability to win a large amount from a small stake</li>
            <li>Can be used to hedge bets in certain situations</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risks and Disadvantages</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li>Higher risk as all bets must win</li>
            <li>Often favors the bookmaker due to compound probability</li>
            <li>Can encourage overconfident or reckless betting</li>
            <li>Difficult to maintain long-term profitability</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Parlay Betting Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Use parlays sparingly and as part of a broader betting strategy</li>
            <li>Stick to 2-3 team parlays for better odds of winning</li>
            <li>Consider using parlays for correlated bets (e.g., team to win and under total points)</li>
            <li>Always shop for the best odds across different sportsbooks</li>
            <li>Set a budget for parlay bets and stick to it</li>
          </ol>
        </CardContent>
      </Card>

      <p className="text-lg">While parlays can be exciting and potentially lucrative, they should be approached with caution. They're best used as occasional "fun bets" rather than a primary betting strategy. Always bet responsibly and within your means.</p>
    </div>
  )
}

