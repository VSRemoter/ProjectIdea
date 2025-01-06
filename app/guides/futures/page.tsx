import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FuturesGuidePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Futures Betting Guide</h1>
      <p className="text-xl">Understanding long-term bets on season outcomes and major events.</p>

      <Card>
        <CardHeader>
          <CardTitle>What are Futures Bets?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Futures bets are wagers placed on events that will be decided in the future, typically at the end of a season or after a major tournament. These can include bets on championship winners, individual awards, or season win totals.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Types of Futures Bets</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Championship winners (e.g., NBA Finals, World Series)</li>
            <li>Division or conference winners</li>
            <li>Individual player awards (e.g., MVP, Rookie of the Year)</li>
            <li>Team win totals for a season</li>
            <li>Player statistical achievements (e.g., leading scorer)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advantages of Futures Betting</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Potential for high payouts with small stakes</li>
            <li>Adds excitement throughout the entire season</li>
            <li>Opportunity to capitalize on your long-term predictions</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risks and Considerations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Long wait time for results and payouts</li>
            <li>Money is tied up for an extended period</li>
            <li>Injuries or unexpected events can impact outcomes</li>
            <li>Odds can change significantly over time</li>
          </ul>
        </CardContent>
      </Card>

      <p className="text-lg">Futures betting can be an exciting way to engage with sports over a longer period, but it requires patience and careful consideration of various factors. Always bet responsibly and within your means.</p>
    </div>
  )
}

