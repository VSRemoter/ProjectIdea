'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface NoVigResult {
  probabilities: [number, number]
  odds: [string, string]
}

const calculateNoVig = (odds1: number, odds2: number): NoVigResult => {
  const probability1 = odds1 > 0 ? 100 / (odds1 + 100) : Math.abs(odds1) / (Math.abs(odds1) + 100)
  const probability2 = odds2 > 0 ? 100 / (odds2 + 100) : Math.abs(odds2) / (Math.abs(odds2) + 100)
  
  const totalProbability = probability1 + probability2
  const noVigProb1 = probability1 / totalProbability
  const noVigProb2 = probability2 / totalProbability

  const noVigOdds1 = noVigProb1 < 0.5 ? (100 / noVigProb1) - 100 : -100 / (1 - noVigProb1)
  const noVigOdds2 = noVigProb2 < 0.5 ? (100 / noVigProb2) - 100 : -100 / (1 - noVigProb2)

  return {
    probabilities: [noVigProb1, noVigProb2],
    odds: [
      noVigOdds1 > 0 ? `+${Math.round(noVigOdds1)}` : Math.round(noVigOdds1).toString(),
      noVigOdds2 > 0 ? `+${Math.round(noVigOdds2)}` : Math.round(noVigOdds2).toString()
    ]
  }
}

export default function NoViggsPage() {
  const [odds1, setOdds1] = useState('')
  const [odds2, setOdds2] = useState('')
  const [result, setResult] = useState<NoVigResult | null>(null)

  const handleCalculate = () => {
    const parsedOdds1 = parseInt(odds1)
    const parsedOdds2 = parseInt(odds2)
    if (!isNaN(parsedOdds1) && !isNaN(parsedOdds2)) {
      setResult(calculateNoVig(parsedOdds1, parsedOdds2))
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">No-Viggs Calculator</h1>
      <p className="text-xl">Calculate No-Vig probabilities and odds from money lines.</p>

      <Card>
        <CardHeader>
          <CardTitle>Input Money Lines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Label htmlFor="odds1">Odds 1:</Label>
            <Input
              id="odds1"
              value={odds1}
              onChange={(e) => setOdds1(e.target.value)}
              placeholder="e.g. +110 or -200"
              className="w-32"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="odds2">Odds 2:</Label>
            <Input
              id="odds2"
              value={odds2}
              onChange={(e) => setOdds2(e.target.value)}
              placeholder="e.g. +110 or -200"
              className="w-32"
            />
          </div>
          <Button onClick={handleCalculate}>Calculate</Button>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>No-Vig Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">No-Vig Probabilities:</h3>
              <p>Outcome 1: {(result.probabilities[0] * 100).toFixed(2)}%</p>
              <p>Outcome 2: {(result.probabilities[1] * 100).toFixed(2)}%</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">No-Vig Odds:</h3>
              <p>Outcome 1: {result.odds[0]}</p>
              <p>Outcome 2: {result.odds[1]}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

