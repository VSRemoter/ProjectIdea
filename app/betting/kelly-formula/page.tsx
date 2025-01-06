'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function KellyFormulaCalculatorPage() {
  const [probability, setProbability] = useState('')
  const [odds, setOdds] = useState('')
  const [kellyPercentage, setKellyPercentage] = useState<number | null>(null)

  const calculateKelly = () => {
    const prob = parseFloat(probability) / 100
    const decimalOdds = parseFloat(odds)

    if (isNaN(prob) || isNaN(decimalOdds)) {
      alert('Please enter valid numbers for all fields')
      return
    }

    const kelly = ((prob * decimalOdds) - (1 - prob)) / (decimalOdds - 1)
    setKellyPercentage(kelly * 100)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Kelly Formula Calculator</h1>
      <p className="text-xl">Determine the optimal bet size using the Kelly Criterion.</p>

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
            <Label htmlFor="odds">Decimal Odds</Label>
            <Input
              id="odds"
              value={odds}
              onChange={(e) => setOdds(e.target.value)}
              placeholder="e.g. 2.0"
            />
          </div>
          <Button onClick={calculateKelly}>Calculate Kelly Criterion</Button>
        </CardContent>
      </Card>

      {kellyPercentage !== null && (
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Kelly Percentage: {kellyPercentage.toFixed(2)}%
            </p>
            <p className="mt-2">
              This suggests betting {kellyPercentage.toFixed(2)}% of your bankroll on this bet.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Note: Many bettors use a fraction of the Kelly Criterion (e.g., Half Kelly) to reduce volatility.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

