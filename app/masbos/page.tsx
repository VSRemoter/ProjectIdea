import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MASBOSPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About MASBOS</h1>
        <p className="text-xl mb-6">Understanding the Mixture of Advanced Stats and Betting Odds Score</p>
      </section>
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">MASBOS: Mixture of Advanced Stats and Betting Odds Score</h1>
        <p className="text-xl mb-6">Revolutionizing NBA player evaluation with our proprietary advanced statistic</p>
      </section>

      <section className="bg-primary text-primary-foreground rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">What is MASBOS?</h2>
        <p className="text-lg mb-4">
          MASBOS (Mixture of Advanced Stats and Betting Odds Score) is our innovative approach to player evaluation in the NBA. 
          It combines traditional advanced statistics with real-time betting odds to provide a comprehensive and dynamic 
          assessment of a player's impact and value.
        </p>
        <p className="text-lg">
          By incorporating betting odds, MASBOS captures the collective wisdom of the market and adjusts for factors 
          that might not be reflected in traditional stats alone, such as injuries, matchups, and recent form.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Explore MASBOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>MASBOS Leaders</CardTitle>
              <CardDescription>See who's leading the league in MASBOS this season</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/masbos/leaders">
                <Button className="w-full">View MASBOS Leaders</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>MASBOS Alltime</CardTitle>
              <CardDescription>Explore the highest MASBOS scores in NBA history</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/masbos/alltime">
                <Button className="w-full">View MASBOS Alltime</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">How MASBOS Works</h2>
        <p className="text-lg">
          MASBOS uses a proprietary algorithm that weighs various factors, including:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Traditional box score statistics (points, rebounds, assists, etc.)</li>
          <li>Advanced metrics (PER, True Shooting %, Win Shares, etc.)</li>
          <li>Real-time betting odds for player props and MVP races</li>
          <li>Team performance and win-loss records</li>
          <li>Strength of schedule and quality of opposition</li>
        </ul>
        <p className="text-lg mt-4">
          The result is a single, comprehensive score that provides a holistic view of a player's contributions and value.
        </p>
      </section>
    </div>
  )
}

