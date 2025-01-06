import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OverUnderBettingGuidePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Over/Under Betting Guide</h1>
      <p className="text-xl">Learn how to bet on total scores in sports events.</p>

      <Card>
        <CardHeader>
          <CardTitle>What is Over/Under Betting?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Over/Under betting, also known as totals betting, is a wager on whether the total score of a game will be over or under a predetermined number set by oddsmakers.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Bookmakers set a total score for the game</li>
            <li>Bettors wager on whether the actual total will be over or under that number</li>
            <li>If the total matches the set number exactly, it's called a "push" and bets are refunded</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategies for Over/Under Betting</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Research team scoring trends and defensive capabilities</li>
            <li>Consider factors like weather, injuries, and recent form</li>
            <li>Look for value in less popular markets or sports</li>
            <li>Be aware of how public perception can influence the lines</li>
          </ul>
        </CardContent>
      </Card>

      <p className="text-lg">Remember to always bet responsibly and within your means. Over/Under betting can be an exciting way to engage with sports, but it's important to approach it with a solid understanding and strategy.</p>
    </div>
  )
}

