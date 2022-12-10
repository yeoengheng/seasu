import '../styles/globals.css'
import supabase from '../config/supabase'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return   <Component {...pageProps} />
}

export default MyApp