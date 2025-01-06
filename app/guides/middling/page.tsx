import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MiddlingGuidePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Middling: An Advanced Betting Strategy</h1>
      <p className="text-xl">Learn how to potentially profit from line movements in sports betting.</p>

      <Card>
        <CardHeader>
          <CardTitle>What is Middling?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Middling is an advanced betting strategy where a bettor places wagers on both sides of a bet at different lines, attempting to win both bets if the final result falls between the two lines.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How Middling Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Place an initial bet on one side of a point spread or total</li>
            <li>Wait for the line to move significantly</li>
            <li>Place a second bet on the opposite side at the new line</li>
            <li>If the final result falls between the two lines, both bets win</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risks and Considerations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Requires a larger bankroll to place multiple bets</li>
            <li>Not all line movements will create middling opportunities</li>
            <li>If the result doesn't fall in the middle, you may lose one or both bets</li>
            <li>Sportsbooks are aware of this strategy and may adjust accordingly</li>
          </ul>
        </CardContent>
      </Card>

      <p className="text-lg">Middling can be a powerful tool in a bettor's arsenal, but it requires careful timing, a good understanding of line movements, and a willingness to accept the associated risks. Always bet responsibly and within your means.</p>
    </div>
  )
}

