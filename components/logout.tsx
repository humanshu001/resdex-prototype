import React, { useState } from 'react'
import { Button } from '@heroui/button'

type LogoutProps = {
  label?: string
  className?: string
  onSuccess?: () => void
  onError?: (err: Error) => void
}

export default function Logout({ label = 'Logout', className, onSuccess, onError }: LogoutProps) {
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    if (loading) return
    setLoading(true)
    try {
      // call the auth logout API which clears the HttpOnly cookie server-side
      const res = await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })

      // Best-effort client cleanup
      try { localStorage.removeItem('user') } catch (e) { /* ignore */ }

      if (res.ok) {
        onSuccess?.()
        window.location.href = '/login'
      } else {
        const text = await res.text()
        const err = new Error(`Logout failed: ${res.status} ${text}`)
        onError?.(err)
        console.error(err)
        setLoading(false)
      }
    } catch (err: any) {
      onError?.(err)
      console.error('Logout error', err)
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleLogout} disabled={loading} className={className} size='sm' color='danger' variant='flat'>
      {loading ? 'Logging out...' : label}
    </Button>
  )
}
