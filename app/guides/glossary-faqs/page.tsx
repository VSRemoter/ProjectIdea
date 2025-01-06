'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PageTransition } from '../../components/page-transition'

interface GlossaryItem {
  term: string
  definition: string
}

interface FAQ {
  question: string
  answer: string
}

const glossaryItems: GlossaryItem[] = [
  { term: "Juice", definition: "Also known as 'vig' or 'vigorish', it's the commission charged by a sportsbook for taking a bet." },
  { term: "Vig", definition: "Short for 'vigorish', it's the same as 'juice' - the bookmaker's commission on bets." },
  { term: "Odds Movement", definition: "The change in odds for a particular bet over time, often in response to betting activity or new information." },
  { term: "Sharp Money", definition: "Bets placed by professional or highly skilled bettors, often causing significant odds movements." },
  { term: "Moneyline", definition: "A straight-up bet on which team will win a game, without any point spread." },
  { term: "Point Spread", definition: "A margin of victory set by oddsmakers to create balanced betting on both sides of a game." },
  { term: "Over/Under", definition: "A bet on whether the total combined score of a game will be over or under a predetermined number." },
  { term: "Parlay", definition: "A single bet that links together two or more individual wagers for a higher payout." },
  { term: "Prop Bet", definition: "A bet on a specific event or statistic within a game, not directly tied to the final outcome." },
  { term: "Futures", definition: "Bets on events that will be decided in the future, such as championship winners or season awards." },
]

const faqs: FAQ[] = [
  {
    question: "How do I read betting odds?",
    answer: "Betting odds can be displayed in different formats. American odds use plus (+) and minus (-) signs. A plus sign indicates the potential profit on a $100 bet, while a minus sign shows how much you need to bet to win $100. For example, +150 means a $100 bet would win $150, while -200 means you need to bet $200 to win $100."
  },
  {
    question: "What's the difference between a moneyline bet and a point spread bet?",
    answer: "A moneyline bet is simply picking which team will win the game outright. A point spread bet involves a margin of victory. The favorite team must win by more than the spread, while the underdog can lose by less than the spread or win outright for the bet to pay out."
  },
  {
    question: "What is a parlay bet?",
    answer: "A parlay bet combines multiple individual bets into one wager. All selections must win for the parlay to pay out. Parlays offer higher potential payouts but are riskier because all bets must win."
  },
  {
    question: "How does live betting work?",
    answer: "Live betting, also known as in-play betting, allows you to place bets on a game that's already in progress. Odds are constantly updated based on the current state of the game."
  },
  {
    question: "What is hedging a bet?",
    answer: "Hedging a bet involves placing a wager on the opposite side of an existing bet to guarantee a profit or minimize potential losses. It's often used in futures bets or the final leg of a parlay."
  },
]

export default function GlossaryFAQsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGlossary = glossaryItems.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Glossary & FAQs</h1>
        <p className="text-xl">Explore common betting terms and find answers to frequently asked questions.</p>

        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Search glossary and FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={() => setSearchTerm('')}>Clear</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Betting Glossary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredGlossary.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{item.term}</h3>
                  <p>{item.definition}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}

