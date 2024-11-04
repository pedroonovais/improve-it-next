"use client"
import { FormProvider } from '@/contexts/FormContext/FormContext';
import './globals.css'
import { Sora } from 'next/font/google';
import { LoginContextProvider } from '@/contexts/LoginContext/LoginContext';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LoginContextProvider>
      <FormProvider>
        <html lang="pt-br" className={sora.className}>
          <body>{children}</body>
        </html>
      </FormProvider>
    </LoginContextProvider>
  )
}
