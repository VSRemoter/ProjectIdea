import { NextResponse } from 'next/server'

// This should match the users array in the signup route
declare const users: { name: string; email: string; password: string }[]

export async function POST(request: Request) {
  const { email, password } = await request.json()

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing email or password' }, { status: 400 })
  }

  const user = users.find(u => u.email === email && u.password === password)

  if (!user) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  // In a real application, you'd create a session or JWT here
  return NextResponse.json({ message: 'Login successful', user: { name: user.name, email: user.email } }, { status: 200 })
}

