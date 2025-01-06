import { NextResponse } from 'next/server'

// This is a simple in-memory storage. In a real application, you'd use a database.
let users: { name: string; email: string; password: string }[] = []

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (users.some(user => user.email === email)) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
  }

  users.push({ name, email, password })

  return NextResponse.json({ message: 'User created successfully' }, { status: 201 })
}

