'use client'

import { useUser } from '../contexts/user-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuth(props: P) {
    const { user } = useUser()
    const router = useRouter()

    useEffect(() => {
      if (!user) {
        router.push('/login')
      }
    }, [user, router])

    if (!user) {
      return null // or a loading spinner
    }

    return <WrappedComponent {...props} />
  }
}

