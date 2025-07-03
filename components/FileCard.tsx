'use client'

import React from 'react'
import Link from 'next/link'
import { isVideo, isImage, isAudio } from '@/lib/utils'

type Props = {
  file: {
    slug: string
    driveUrl: string
    name: string
    mime: string
  }
}

export const FileCard: React.FC<Props> = ({ file }) => {
  const { slug, name, mime } = file

  const typeIcon = isVideo(mime)
    ? '🎬'
    : isImage(mime)
    ? '🖼️'
    : isAudio(mime)
    ? '🎵'
    : '📄'

  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold">
        {typeIcon
