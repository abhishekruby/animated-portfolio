import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'

type NotificationType = 'success' | 'error' | 'info'

interface PopupNotificationProps {
  type: NotificationType
  message: string
  duration?: number
  onClose: () => void
}

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
}

const bgColorMap = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
}

const PopupNotification: React.FC<PopupNotificationProps> = ({ type='success', message='hii', duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)
  const Icon = iconMap[type]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  const handleClose = () => {
    setIsVisible(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -50, x: 50 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          className={`fixed top-4 right-4 w-72 ${bgColorMap[type]} text-white p-4 rounded-lg shadow-lg z-50 flex items-start`}
        >
          <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
          <div className="flex-grow">
            <p className="font-semibold">{message}</p>
          </div>
          <button
            onClick={handleClose}
            className="ml-2 text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopupNotification