import { google } from 'googleapis'
import { Readable } from 'stream'

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
)

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
})

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
})

export async function uploadToDrive(
  buffer: Buffer,
  fileName: string,
  mimeType: string
): Promise<{ id: string; webViewLink: string }> {
  const fileMetadata = {
