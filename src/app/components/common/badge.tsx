import React, { forwardRef } from 'react'

const Badge = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function B({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ${className}`}
      {...props}
    />
  )
})

export default Badge
