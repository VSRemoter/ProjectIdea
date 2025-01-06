'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  text: string
  sender: 'user' | 'bot'
}

const initialMessages: Message[] = [
  { text: "Hello! I'm the 'Ask Him' ChatBot. How can I help you with sports betting or analysis today?", sender: 'bot' },
]

export default function AskHimPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')
      // Simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: getBotResponse(input), sender: 'bot' }])
      }, 1000)
    }
  }

  const getBotResponse = (userInput: string): string => {
    // This is a simple example. In a real application, you'd use a more sophisticated
    // natural language processing system or integrate with an AI service.
    const lowercaseInput = userInput.toLowerCase()
    if (lowercaseInput.includes('odds')) {
      return "Odds represent the likelihood of an outcome and determine the payout of a winning bet. They can be displayed in different formats such as American, Decimal, or Fractional."
    } else if (lowercaseInput.includes('parlay')) {
      return "A parlay is a single bet that links together two or more individual wagers. To win a parlay bet, all of the wagers must win. Parlays offer higher payouts but are riskier than individual bets."
    } else if (lowercaseInput.includes('spread')) {
      return "The point spread is a number oddsmakers use to give a handicap to the favorite team and an advantage to the underdog. The favorite must win by more than the spread to cover, while the underdog can lose by less than the spread or win outright to cover."
    } else {
      return "I'm not sure about that specific topic. Could you try rephrasing your question or ask about odds, parlays, point spreads, or other common sports betting concepts?"
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Ask Him ChatBot</h1>
      <p className="text-xl">Get quick answers to your sports betting and analysis questions.</p>

      <Card className="h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle>Chat with Ask Him</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <ScrollArea className="flex-grow mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question here..."
              className="flex-grow"
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

