'use client'

type Props = {
  src: string
  subtitle?: string
}

export const VideoPlayer: React.FC<Props> = ({ src, subtitle }) => {
  return (
    <video controls className="w-full max-w-full rounded-xl shadow">
      <source src={src} type="video/mp4" />
      {subtitle && <track src={subtitle} kind="subtitles" srcLang="en" default />}
      Your browser does not support the video tag.
    </video>
  )
}
