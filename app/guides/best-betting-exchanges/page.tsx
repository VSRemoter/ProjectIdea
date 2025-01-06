import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BestBettingExchangesGuidePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Best Betting Exchanges Guide</h1>
      <p className="text-xl">Explore the top platforms for peer-to-peer sports betting.</p>

      <Card>
        <CardHeader>
          <CardTitle>What are Betting Exchanges?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Betting exchanges are platforms that allow users to bet against each other rather than against a bookmaker. They act as a marketplace where users can both back (bet for) and lay (bet against) various outcomes.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Betting Exchanges</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Betfair: The largest and most well-known betting exchange</li>
            <li>Smarkets: Known for low commission rates</li>
            <li>Matchbook: Popular for its user-friendly interface</li>
            <li>Betdaq: Offers a wide range of markets</li>
            <li>Prophet Exchange: A newer platform gaining popularity in the US</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advantages of Betting Exchanges</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Better odds compared to traditional bookmakers</li>
            <li>Ability to lay bets (bet against an outcome)</li>
            <li>More control over your bets with options to trade in-play</li>
            <li>Lower margins due to peer-to-peer nature</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Considerations When Choosing an Exchange</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Liquidity: Ensure there's enough activity in your preferred markets</li>
            <li>Commission rates: Compare the fees charged by different exchanges</li>
            <li>Available markets: Check if the exchange offers the sports and events you're interested in</li>
            <li>User interface: Look for a platform that's easy to navigate and use</li>
            <li>Regulatory compliance: Verify that the exchange is licensed in your jurisdiction</li>
          </ul>
        </CardContent>
      </Card>

      <p className="text-lg">Betting exchanges can offer more value and flexibility compared to traditional sportsbooks, but they also require a good understanding of how they work. Always bet responsibly and within your means.</p>
    </div>
  )
}

