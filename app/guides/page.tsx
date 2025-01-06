import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const guides = [
  { href: '/guides/how-to-bet', title: 'How to Bet', description: 'A beginner\'s guide to sports betting' },
  { href: '/guides/parlays', title: 'Parlays', description: 'Understanding parlay bets and their risks/rewards' },
  { href: '/guides/expected-value', title: 'Expected Value', description: 'Calculating and using expected value in betting' },
  { href: '/guides/over-under-betting', title: 'Over/Under Betting', description: 'Mastering totals betting in sports' },
  { href: '/guides/middling', title: 'Middling', description: 'Advanced strategy for profiting from line movements' },
  { href: '/guides/futures', title: 'Futures', description: 'Long-term betting on season outcomes' },
  { href: '/guides/best-betting-exchanges', title: 'Best Betting Exchanges', description: 'Top platforms for peer-to-peer betting' },
  { href: '/guides/strategies', title: 'Strategies', description: 'Various betting strategies to improve your odds' },
]

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Sports Betting Guides</h1>
      <p className="text-xl">Explore our comprehensive guides to enhance your sports betting knowledge and skills.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Card key={guide.href}>
            <CardHeader>
              <CardTitle>{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={guide.href}>
                <Button className="w-full">Read Guide</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

