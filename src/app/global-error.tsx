'use client'

import { useEffect, useState } from 'react'
import { AlertCircle } from 'lucide-react'

interface ErrorPageProps {
    error:any
}

export default function GlobalErrorPage({ error }: ErrorPageProps) {
    const [errorCode, setErrorCode] = useState(500)
    const [errorName, setErrorName] = useState('Server Error')
    const [errorMessage, setErrorMessage] = useState('Oops! Something went wrong.')
    useEffect(() => {
        if (error) {
            setErrorName(error.name)
            setErrorCode(error.status)
            setErrorMessage(error.message)
        }
    }, [error])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
            <div className="w-full max-w-md">
                <div className="text-center">
                    <AlertCircle className="mx-auto h-16 w-16 text-red-500 animate-pulse" />
                    <h1 className="mt-6 text-3xl font-extrabold text-white">
                        {errorCode} {errorName}
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">{errorMessage}</p>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">
                        If the problem persists, please contact me.
                    </p>
                </div>

                <div className="mt-10 flex justify-center space-x-3">
                    {[1, 2, 3].map((num) => (
                        <div
                            key={num}
                            className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"
                            style={{ animationDelay: `${num * 0.1}s` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}