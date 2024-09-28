import React, { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Info, X } from 'lucide-react'

type NotificationType = 'success' | 'error' | 'info'

interface NotificationProps {
  type?: NotificationType
  title?: string
  description?: string
  duration?: number
}

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
}

const colorMap = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
}

const defaultTitles = {
  success: 'Success',
  error: 'Error',
  info: 'Information',
}

const defaultDescriptions = {
  success: 'The operation was completed successfully.',
  error: 'An error occurred. Please try again.',
  info: 'Here\'s some information you might find useful.',
}

export default function Notification({
  type = 'success',
  title,
  description,
  duration = 5000,
}: NotificationProps) {
  const [progress, setProgress] = useState(100)
  const [displayNotification, setDisplayNotification] = useState(true)
  const Icon = iconMap[type]

  const finalTitle = title || defaultTitles[type]
  const finalDescription = description || defaultDescriptions[type]

  useEffect(() => {
    let timer: number | undefined
    if (duration > 0) {
      timer = window.setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 0) {
            clearInterval(timer!)
            return 0
          }
          const newProgress = oldProgress - 100 / (duration / 100)
          return newProgress > 0 ? newProgress : 0
        })
      }, 100)
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [duration])

  useEffect(() => {
    if (progress === 0) {
      setDisplayNotification(false)
    }
  }, [progress])

  return displayNotification && (
    <div className="fixed top-5 right-5 z-50 w-full max-w-sm overflow-hidden rounded-lg bg-gray-800 shadow-lg">
      <div
        className={`absolute -bottom-2 -left-2 -right-2 -z-10 h-4 rounded-lg ${colorMap[type]} opacity-30`}
      ></div>
      <div className="flex items-start space-x-4 p-4">
        <div className={`rounded-full p-1 ${colorMap[type]}`}>
          <Icon className="h-5 w-5 text-gray-900" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-100">{finalTitle}</h3>
          <p className="mt-1 text-sm text-gray-300">{finalDescription}</p>
        </div>
        <button
          onClick={()=>setDisplayNotification(false)}
          className="text-gray-400 hover:text-gray-200 focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`h-1 ${colorMap[type]}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}