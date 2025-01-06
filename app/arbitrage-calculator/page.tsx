'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface BetInput {
  odds: string
  stake: number
}

interface ArbitrageResult {
  totalStake: number
  potentialProfit: number
  roi: number
}

const calculateArbitrage = (bets: BetInput[], totalDeposit: number): ArbitrageResult | null => {
  const impliedProbabilities = bets.map(bet => {
    const odds = parseFloat(bet.odds)
    return odds > 0 ? 100 / (odds + 100) : (Math.abs(odds) / (Math.abs(odds) + 100))
  })

  const totalImpliedProbability = impliedProbabilities.reduce((sum, prob) => sum + prob, 0)

  if (totalImpliedProbability >= 1) {
    return null // No arbitrage opportunity
  }

  const stakes = impliedProbabilities.map(prob => (prob / totalImpliedProbability) * totalDeposit)
  const potentialProfit = (totalDeposit / totalImpliedProbability) - totalDeposit
  const roi = (potentialProfit / totalDeposit) * 100

  return {
    totalStake: totalDeposit,
    potentialProfit,
    roi
  }
}

export default function ArbitrageCalculatorPage() {
  const [numBets, setNumBets] = useState(2)
  const [totalDeposit, setTotalDeposit] = useState(1000)
  const [bets, setBets] = useState<BetInput[]>([
    { odds: '+300', stake: 0 },
    { odds: '-100', stake: 0 }
  ])
  const [result, setResult] = useState<ArbitrageResult | null>(null)

  const handleNumBetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumBets = parseInt(e.target.value)
    setNumBets(newNumBets)
    setBets(prevBets => {
      if (newNumBets > prevBets.length) {
        return [...prevBets, ...Array(newNumBets - prevBets.length).fill({ odds: '', stake: 0 })]
      } else {
        return prevBets.slice(0, newNumBets)
      }
    })
  }

  const handleBetChange = (index: number, field: keyof BetInput, value: string) => {
    setBets(prevBets => {
      const newBets = [...prevBets]
      newBets[index] = { ...newBets[index], [field]: value }
      return newBets
    })
  }

  const handleCalculate = () => {
    const arbitrageResult = calculateArbitrage(bets, totalDeposit)
    setResult(arbitrageResult)

    if (arbitrageResult) {
      setBets(prevBets => prevBets.map((bet, index) => ({
        ...bet,
        stake: arbitrageResult.totalStake * (parseFloat(bet.odds) > 0 
          ? 100 / (parseFloat(bet.odds) + 100) 
          : (Math.abs(parseFloat(bet.odds)) / (Math.abs(parseFloat(bet.odds)) + 100)))
      })))
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Arbitrage Calculator</h1>
      <p className="text-xl">Calculate potential arbitrage opportunities and optimize your bets.</p>

      <Card>
        <CardHeader>
          <CardTitle>Bet Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Label htmlFor="numBets">Number of Bets:</Label>
            <Input
              id="numBets"
              type="number"
              min="2"
              max="5"
              value={numBets}
              onChange={handleNumBetsChange}
              className="w-20"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="totalDeposit">Total Deposit ($):</Label>
            <Input
              id="totalDeposit"
              type="number"
              min="1"
              value={totalDeposit}
              onChange={(e) => setTotalDeposit(parseFloat(e.target.value))}
              className="w-32"
            />
          </div>
          {bets.map((bet, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Label htmlFor={`odds${index}`}>Odds {index + 1}:</Label>
              <Input
                id={`odds${index}`}
                value={bet.odds}
                onChange={(e) => handleBetChange(index, 'odds', e.target.value)}
                placeholder="e.g. +300 or -100"
                className="w-32"
              />
              <Label htmlFor={`stake${index}`}>Stake {index + 1}:</Label>
              <Input
                id={`stake${index}`}
                type="number"
                value={bet.stake}
                onChange={(e) => handleBetChange(index, 'stake', e.target.value)}
                className="w-32"
                disabled
              />
            </div>
          ))}
          <Button onClick={handleCalculate}>Calculate</Button>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Arbitrage Result</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Stake: ${result.totalStake.toFixed(2)}</p>
            <p>Potential Profit: ${result.potentialProfit.toFixed(2)}</p>
            <p>ROI: {result.roi.toFixed(2)}%</p>
          </CardContent>
        </Card>
      )}

      {result === null && (
        <Card>
          <CardContent>
            <p className="text-red-500">No arbitrage opportunity found. The total implied probability is greater than or equal to 1.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

