import "../styles/globals.css"

export const metadata = {
  title: 'Ai Image Generator',
  description: 'Generate images with AI, Made with Next.js 13.2 and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
