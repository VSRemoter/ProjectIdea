'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const players = [
  { id: 1, name: "LeBron James" },
  { id: 2, name: "Kevin Durant" },
  { id: 3, name: "Stephen Curry" },
  { id: 4, name: "Giannis Antetokounmpo" },
  { id: 5, name: "Nikola Jokic" },
]

export default function ComparisonsPage() {
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [comparison, setComparison] = useState(null)

  const handleCompare = () => {
    // In a real application, you would fetch the comparison data from an API
    setComparison({
      player1: { name: player1, points: 27.5, rebounds: 7.2, assists: 8.1 },
      player2: { name: player2, points: 25.8, rebounds: 8.5, assists: 5.3 },
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Player Comparisons</h1>
      <p className="text-xl">Compare stats between two NBA players.</p>
      <div className="flex space-x-4">
        <Select onValueChange={setPlayer1}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select player 1" />
          </SelectTrigger>
          <SelectContent>
            {players.map((player) => (
              <SelectItem key={player.id} value={player.name}>{player.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setPlayer2}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select player 2" />
          </SelectTrigger>
          <SelectContent>
            {players.map((player) => (
              <SelectItem key={player.id} value={player.name}>{player.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleCompare}>Compare</Button>
      </div>
      {comparison && (
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{comparison.player1.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Points: {comparison.player1.points}</p>
              <p>Rebounds: {comparison.player1.rebounds}</p>
              <p>Assists: {comparison.player1.assists}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{comparison.player2.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Points: {comparison.player2.points}</p>
              <p>Rebounds: {comparison.player2.rebounds}</p>
              <p>Assists: {comparison.player2.assists}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

