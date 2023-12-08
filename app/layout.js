import './globals.css'


export const metadata = {
  title: 'Business store',
  description: 'Business store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
