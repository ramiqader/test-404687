export const metadata = {
  title: 'test',
  description: 'Generated from drag-and-drop components',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}