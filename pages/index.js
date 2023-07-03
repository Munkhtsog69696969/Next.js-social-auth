import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const {data:session}=useSession();

  console.log(session)

  return (
    <>
      <div>
        <button
          onClick={()=>signIn()}
        >
          Sign in with google
        </button>
      </div>
    </>
  )
}
