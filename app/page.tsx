'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { FileCard } from '@/components/FileCard'

type UploadedFile = {
  slug: string
  driveUrl: string
  name: string
  mime: string
}

export default function HomePage() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      const mime = file.type
      setFiles([
        {
          slug: res.data.slug,
          driveUrl: res.data.driveUrl,
          name: file.name,
          mime,
        },
        ...files,
      ])
    } catch (err) {
