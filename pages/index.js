"use Client"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut   } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

// const {data:session, status} = useSession();
// console.log('error',session);


export default function Home() {
  return (
    <>
      <div>
        
        <h1>Hello</h1>
      </div>
    </>
  )
}
