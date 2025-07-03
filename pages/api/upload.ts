import type { NextApiRequest, NextApiResponse } from 'next'
import { uploadToDrive } from '@/lib/google'
import { generateSlug, getMimeType } from '@/lib/utils'
import { IncomingForm } from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

type Data = {
  slug?: string
  driveUrl?:
