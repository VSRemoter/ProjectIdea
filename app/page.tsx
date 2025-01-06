'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { PageTransition } from './components/page-transition'
import { motion } from 'framer-motion'

const DynamicCard = dynamic(() => import("@/components/ui/card").then(mod => mod.Card), { ssr: true })
const DynamicCardHeader = dynamic(() => import("@/components/ui/card").then(mod => mod.CardHeader), { ssr: true })
const DynamicCardTitle = dynamic(() => import("@/components/ui/card").then(mod => mod.CardTitle), { ssr: true })
const DynamicCardDescription = dynamic(() => import("@/components/ui/card").then(mod => mod.CardDescription), { ssr: true })
const DynamicCardContent = dynamic(() => import("@/components/ui/card").then(mod => mod.CardContent), { ssr: true })


export default function Home() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to Who's Him NBA</h1>
          <p className="text-xl mb-6">Creating The Best Algorithms, Statistics & Analytics Website For The Best Sport</p>
          <p className="text-lg mb-8">
            Who's Him NBA is your ultimate destination for in-depth NBA analytics, cutting-edge statistics, and expert insights. 
            We combine advanced data analysis with a passion for basketball to bring you unparalleled perspectives on player performance, 
            team strategies, and league trends.
          </p>
        </motion.section>

      <Link href="/masbos">
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-primary text-primary-foreground rounded-lg p-6 hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <h2 className="text-2xl font-bold mb-4">Introducing MASBOS</h2>
          <p className="text-lg">
            Our proprietary advanced statistic: <strong>Mixture of Advanced Stats and Betting Odds Score (MASBOS)</strong>. 
            MASBOS combines traditional advanced stats with real-time betting odds to provide a unique and comprehensive 
            player evaluation metric. Stay ahead of the game with our innovative approach to NBA analytics.
          </p>
        </motion.section>
      </Link>


      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>MVP Race</DynamicCardTitle>
              <DynamicCardDescription>Track the top contenders for the Most Valuable Player award.</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/mvp">
                <Button className="w-full">View MVP Race</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>DPOY Race</DynamicCardTitle>
              <DynamicCardDescription>Follow the best defenders competing for Defensive Player of the Year.</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/dpoy">
                <Button className="w-full">View DPOY Race</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>6th Man Race</DynamicCardTitle>
              <DynamicCardDescription>Discover the top bench players making a big impact this season.</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/sixth-man">
                <Button className="w-full">View 6th Man Race</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>MASBOS Leaders</DynamicCardTitle>
              <DynamicCardDescription>See who's leading in our advanced MASBOS metric.</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Button className="w-full">Coming Soon</Button>
            </DynamicCardContent>
          </DynamicCard>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">Additional Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>File Sharing</DynamicCardTitle>
              <DynamicCardDescription>Share and access NBA datasets</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Upload your own NBA datasets or purchase datasets from other users. Collaborate and enhance your analysis with shared data.</p>
              <Link href="/file-sharing">
                <Button className="w-full">Explore Datasets</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>

          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Research</DynamicCardTitle>
              <DynamicCardDescription>Deep dive into NBA analytics</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Access in-depth research articles and analytical pieces on various NBA topics. Stay updated with the latest trends and insights.</p>
              <Link href="/research">
                <Button className="w-full">Read Research</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>

          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Player Traits</DynamicCardTitle>
              <DynamicCardDescription>Discover player specialties</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Explore detailed breakdowns of player skills and traits. Find out who excels in specific areas of the game.</p>
              <Link href="/player-traits">
                <Button className="w-full">View Player Traits</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>

          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Comparisons</DynamicCardTitle>
              <DynamicCardDescription>Head-to-head player analysis</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Compare any two NBA players across various statistical categories. Settle debates with data-driven insights.</p>
              <Link href="/comparisons">
                <Button className="w-full">Compare Players</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">Betting Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Live Injury Report</DynamicCardTitle>
              <DynamicCardDescription>Stay updated on player injuries</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Get real-time updates on NBA player injuries and status changes. Make informed betting decisions with the latest information.</p>
              <Link href="/betting/live-injury-report">
                <Button className="w-full">View Injury Report</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>

          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Arbitrage Calculator</DynamicCardTitle>
              <DynamicCardDescription>Maximize your betting profits</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Calculate potential arbitrage opportunities across different bookmakers. Optimize your bets for guaranteed profits.</p>
              <Link href="/betting/arbitrage-calculator">
                <Button className="w-full">Use Calculator</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>

          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>No-Viggs Calculator</DynamicCardTitle>
              <DynamicCardDescription>Remove the bookmaker's edge</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Convert standard odds to no-vig probabilities and fair odds. Understand the true implied probabilities of betting markets.</p>
              <Link href="/betting/no-viggs">
                <Button className="w-full">Calculate No-Vig Odds</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>

          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Expected Value Calculator</DynamicCardTitle>
              <DynamicCardDescription>Evaluate bet profitability</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Calculate the expected value of your bets based on probabilities and potential payouts. Make smarter betting decisions.</p>
              <Link href="/betting/expected-value">
                <Button className="w-full">Calculate EV</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>

          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Kelly Formula Calculator</DynamicCardTitle>
              <DynamicCardDescription>Optimize your bet sizing</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <p className="mb-4">Use the Kelly Criterion to determine the optimal size of your bets. Maximize long-term growth while managing risk.</p>
              <Link href="/betting/kelly-formula">
                <Button className="w-full">Calculate Kelly Criterion</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">Betting Guides</h2>
        <p className="text-xl mb-6">Enhance your sports betting knowledge with our comprehensive guides.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>How to Bet</DynamicCardTitle>
              <DynamicCardDescription>Learn the basics of sports betting</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/guides/how-to-bet">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Parlays</DynamicCardTitle>
              <DynamicCardDescription>Understand parlay bets and their risks/rewards</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/guides/parlays">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Expected Value</DynamicCardTitle>
              <DynamicCardDescription>Learn to calculate and use expected value in betting</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/guides/expected-value">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Over/Under Betting</DynamicCardTitle>
              <DynamicCardDescription>Master totals betting in sports</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/guides/over-under-betting">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Middling</DynamicCardTitle>
              <DynamicCardDescription>Explore this advanced strategy for line movements</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/guides/middling">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Futures</DynamicCardTitle>
              <DynamicCardDescription>Understand long-term betting on season outcomes</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/guides/futures">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Best Betting Exchanges</DynamicCardTitle>
              <DynamicCardDescription>Discover top platforms for peer-to-peer betting</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/guides/best-betting-exchanges">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
          <DynamicCard>
            <DynamicCardHeader>
              <DynamicCardTitle>Strategies</DynamicCardTitle>
              <DynamicCardDescription>Learn various betting strategies to improve your odds</DynamicCardDescription>
            </DynamicCardHeader>
            <DynamicCardContent>
              <Link href="/guides/strategies">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </DynamicCardContent>
          </DynamicCard>
        </div>
      </motion.section>
      </div>
    </PageTransition>
  )
}

