'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Bet {
  id: string
  type: string
  description: string
  odds: string
  confidence: number
}

const mockBets: Bet[] = [
  { id: '1', type: 'Moneyline', description: 'Lakers to win vs Celtics', odds: '+150', confidence: 0.68 },
  { id: '2', type: 'Spread', description: 'Warriors -5.5 vs Suns', odds: '-110', confidence: 0.72 },
  { id: '3', type: 'Over/Under', description: 'Total points over 220.5 in Bucks vs 76ers', odds: '-105', confidence: 0.65 },
  { id: '4', type: 'Parlay', description: 'Nuggets ML + Jokic over 24.5 points', odds: '+230', confidence: 0.59 },
  { id: '5', type: 'Prop', description: 'Luka Doncic over 8.5 assists', odds: '-120', confidence: 0.70 },
]

export default function AIPickerPage() {
  const [selectedBets, setSelectedBets] = useState<string[]>([])
  const [stake, setStake] = useState('')

  const handleBetSelection = (betId: string) => {
    setSelectedBets(prev => 
      prev.includes(betId) ? prev.filter(id => id !== betId) : [...prev, betId]
    )
  }

  const handleSubmit = () => {
    // In a real application, this would send the selected bets and stake to an API
    console.log('Selected bets:', selectedBets)
    console.log('Stake:', stake)
    alert('Bets submitted! Check the console for details.')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">AI Picker</h1>
      <p className="text-xl">Our advanced machine learning algorithm analyzes various betting options to recommend the best picks.</p>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The AI Picker uses a sophisticated machine learning model trained on historical betting data, player statistics, team performance, and current odds from multiple sportsbooks. It considers factors such as:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Recent team and player performance</li>
            <li>Head-to-head records</li>
            <li>Injury reports and lineup changes</li>
            <li>Home/away advantages</li>
            <li>Public betting trends</li>
            <li>Weather conditions (for outdoor sports)</li>
          </ul>
          <p className="mt-2">The algorithm then calculates a confidence score for each bet, helping you make more informed decisions.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Today's Top Picks</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Select</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Odds</TableHead>
                <TableHead>AI Confidence</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBets.map((bet) => (
                <TableRow key={bet.id}>
                  <TableCell>
                    <Input
                      type="checkbox"
                      checked={selectedBets.includes(bet.id)}
                      onChange={() => handleBetSelection(bet.id)}
                    />
                  </TableCell>
                  <TableCell>{bet.type}</TableCell>
                  <TableCell>{bet.description}</TableCell>
                  <TableCell>{bet.odds}</TableCell>
                  <TableCell>{(bet.confidence * 100).toFixed(1)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Place Your Bet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Label htmlFor="stake">Stake Amount ($)</Label>
              <Input
                id="stake"
                type="number"
                min="1"
                step="0.01"
                value={stake}
                onChange={(e) => setStake(e.target.value)}
                placeholder="Enter your stake"
              />
            </div>
            <Button onClick={handleSubmit} disabled={selectedBets.length === 0 || !stake}>
              Submit Bets
            </Button>
          </div>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground">
        Disclaimer: The AI Picker is a tool to assist in your betting decisions. Always gamble responsibly and within your means. Past performance does not guarantee future results.
      </p>
    </div>
  )
}

