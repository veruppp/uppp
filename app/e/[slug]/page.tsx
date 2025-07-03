'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { isVideo, isAudio, isImage } from '@/lib/utils'
import { VideoPlayer } from '@/components/VideoPlayer'

export default function EmbedPage() {
  const searchParams = useSearchParams()
  const [fileUrl, setFileUrl] = useState('')
  const [mime, setMime] = useState('')
  const [name, setName] = useState('')
  const slug = decodeURIComponent(searchParams.get('slug') || '')

  useEffect(() => {
    // Simulasi fetch dari slug
    const stored = localStorage.getItem('vcloud_files')
    if (stored) {
      const files = JSON.parse(stored)
      const file = files.find((f: any) => f.slug === slug)
      if (file) {
        setFileUrl(file.driveUrl)
        setMime(file.mime)
        setName(file.name)
      }
    }
  }, [slug])

  if (!fileUrl) {
    return <p className="p-4">File not found or not available.</p>
  }

  return (
    <main className="p-4 max-w-2xl mx-auto text-center">
      <h1 className="text-xl font-semibold mb-2">{name}</h1>

      {isVideo(mime) && <VideoPlayer src={fileUrl} />}
      {isImage(mime) && <img src={fileUrl} className="max-w-full" />}
      {isAudio(mime) && (
        <audio controls className="w-full mt-2">
          <source src={fileUrl} type={mime} />
          Your browser does not support audio playback.
        </audio>
      )}

      {!isVideo(mime) && !isImage(mime) && !isAudio(mime) && (
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Download file
        </a>
      )}
    </main>
  )
}
