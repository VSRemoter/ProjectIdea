'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/projections', label: 'Projections', subItems: [
      { href: '/mvp', label: 'MVP' },
      { href: '/dpoy', label: 'DPOY' },
      { href: '/sixth-man', label: '6MAN' },
      { href: '/projections/best-teams', label: 'Best Teams' },
      { href: '/projections/best-players', label: 'Best Players' },
      { href: '/projections/compare-betting-odds', label: 'Compare Betting Odds' },
    ]},
    { href: '/betting', label: 'Betting', subItems: [
      { href: '/betting/live-injury-report', label: 'Live Injury Report' },
      { href: '/betting/arbitrage-calculator', label: 'Arbitrage Calculator' },
      { href: '/betting/no-viggs', label: 'No-Viggs Calculator' },
      { href: '/betting/expected-value', label: 'Expected Value' },
      { href: '/betting/kelly-formula', label: 'Kelly Formula' },
      { href: '/betting/ai-picker', label: 'AI Picker' },
      { href: '/betting/recent-trends', label: 'Recent Trends' },
      { href: '/betting/line-tracker', label: 'Betting Line Tracker' },
      { href: '/betting/odds-converter', label: 'Odds Converter Calculator' },
      { href: '/betting/payout-calculator', label: 'Payout Calculator' },
      { href: '/betting/parlay-payout-calculator', label: 'Parlay Payout Calculator' },
      { href: '/betting/bet-tracking', label: 'Bet Tracking & Performance' },
    ]},
    { href: '/live-games', label: 'Live Games' },
    { href: '/masbos', label: 'MASBOS', subItems: [
      { href: '/masbos', label: 'About' },
      { href: '/masbos/leaders', label: 'MASBOS Leaders' },
      { href: '/masbos/alltime', label: 'MASBOS Alltime' },
    ]},
    { href: '/guides', label: 'Guides', subItems: [
      { href: '/guides/how-to-bet', label: 'How to Bet' },
      { href: '/guides/parlays', label: 'Parlays' },
      { href: '/guides/expected-value', label: 'What is EV' },
      { href: '/guides/over-under-betting', label: 'Over/Under Betting' },
      { href: '/guides/middling', label: 'Middling' },
      { href: '/guides/futures', label: 'Futures' },
      { href: '/guides/best-betting-exchanges', label: 'Best Betting Exchanges' },
      { href: '/guides/strategies', label: 'Strategies' },
      { href: '/guides/glossary-faqs', label: 'Glossary & FAQs' },
    ]},
    { href: '/research', label: 'Research', subItems: [
      { href: '/research/blog', label: 'Blog' },
      { href: '/research/file-sharing', label: 'File Sharing' },
      { href: '/research/player-traits', label: 'Player Traits' },
      { href: '/research/sports-news', label: 'Sports News' },
    ]},
    { href: '/ask-him', label: 'Ask Him' },
    { href: '/about', label: 'About Me' },
    { href: '/signup', label: 'Sign Up' },
    { href: '/login', label: 'Login' },
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-primary-foreground shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Who's Him NBA Logo" 
              width={32} 
              height={32} 
              className="dark:invert"
              priority
            />
            <span className="text-xl font-bold">Who's Him NBA</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 font-normal text-base hover:text-secondary">
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <AnimatePresence>
                    <DropdownMenuContent>
                      {item.subItems.map((subItem) => (
                        <motion.div
                          key={subItem.href}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <DropdownMenuItem>
                            <Link href={subItem.href} className="w-full">
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        </motion.div>
                      ))}
                    </DropdownMenuContent>
                  </AnimatePresence>
                </DropdownMenu>
              ) : (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-secondary text-base"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-primary-foreground">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              {navItems.map((item) => (
                item.subItems ? (
                  <div key={item.href}>
                    <span className="block py-2 font-bold">{item.label}</span>
                    {item.subItems.map((subItem) => (
                      <motion.div
                        key={subItem.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={subItem.href}
                          className="block py-2 pl-4 hover:text-secondary"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-2 ${
                        pathname === item.href ? 'font-bold' : ''
                      } hover:text-secondary`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation

