'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { isVideo, isAudio, isImage } from '@/lib/utils'
import { Video
