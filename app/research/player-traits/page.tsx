import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const traitCategories = [
  {
    title: "Best Shooters",
    players: ["Stephen Curry", "Klay Thompson", "Damian Lillard", "Kevin Durant", "Devin Booker"]
  },
  {
    title: "Best Rebounders",
    players: ["Andre Drummond", "Rudy Gobert", "Clint Capela", "Nikola Jokic", "Giannis Antetokounmpo"]
  },
  {
    title: "Best Passers",
    players: ["Chris Paul", "Nikola Jokic", "Trae Young", "LeBron James", "Luka Doncic"]
  },
  {
    title: "Best Defenders",
    players: ["Rudy Gobert", "Giannis Antetokounmpo", "Anthony Davis", "Kawhi Leonard", "Draymond Green"]
  },
]

export default function PlayerTraitsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Player Traits</h1>
      <p className="text-xl">Discover the top players in various skill categories.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {traitCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside">
                {category.players.map((player, playerIndex) => (
                  <li key={playerIndex}>{player}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

