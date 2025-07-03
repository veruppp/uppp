import { customAlphabet } from 'nanoid'
import mime from 'mime-types'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 8)

export function generateSlug(): string {
  return nanoid()
}

export function getMimeType(fileName: string): string {
  return mime.lookup(fileName) || 'application/octet-stream'
}

export function isVideo(mimeType: string): boolean {
  return mimeType.startsWith('video/')
}

export function isAudio(mimeType: string): boolean {
  return mimeType.startsWith('audio/')
}

export function isImage(mimeType: string): boolean {
  return mimeType.startsWith('image/')
}

export function isSubtitle(fileName: string): boolean {
  return fileName.endsWith('.vtt') || fileName.endsWith('.srt')
}
