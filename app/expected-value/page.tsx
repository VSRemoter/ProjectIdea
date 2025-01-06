'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function ExpectedValueCalculatorPage() {
  const [probability, setProbability] = useState('')
  const [winAmount, setWinAmount] = useState('')
  const [betAmount, setBetAmount] = useState('')
  const [expectedValue, setExpectedValue] = useState<number | null>(null)

  const calculateEV = () => {
    const prob = parseFloat(probability) / 100
    const win = parseFloat(winAmount)
    const bet = parseFloat(betAmount)

    if (isNaN(prob) || isNaN(win) || isNaN(bet)) {
      alert('Please enter valid numbers for all fields')
      return
    }

    const ev = (prob * win) - ((1 - prob) * bet)
    setExpectedValue(ev)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Expected Value Calculator</h1>
      <p className="text-xl">Calculate the expected value of your bets to make informed decisions.</p>

      <Card>
        <CardHeader>
          <CardTitle>Enter Bet Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="probability">Probability of Winning (%)</Label>
            <Input
              id="probability"
              value={probability}
              onChange={(e) => setProbability(e.target.value)}
              placeholder="e.g. 60"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="winAmount">Potential Win Amount ($)</Label>
            <Input
              id="winAmount"
              value={winAmount}
              onChange={(e) => setWinAmount(e.target.value)}
              placeholder="e.g. 100"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="betAmount">Bet Amount ($)</Label>
            <Input
              id="betAmount"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              placeholder="e.g. 50"
            />
          </div>
          <Button onClick={calculateEV}>Calculate Expected Value</Button>
        </CardContent>
      </Card>

      {expectedValue !== null && (
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Expected Value: ${expectedValue.toFixed(2)}
            </p>
            <p className="mt-2">
              {expectedValue > 0
                ? "This bet has a positive expected value. It may be worth considering."
                : "This bet has a negative expected value. It might be better to avoid it."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

