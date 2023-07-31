'use client'
import Link from "next/link"
import { signIn, signOut } from "next-auth/react"

const Navbar = () => {
  return (
    <header className='container mx-auto flex justify-between text-2xl'>
      <Link href='/'>Home</Link>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()} >Sign out</button>
      <Link href='/server'>Server</Link>
      <Link href='/client'>Client</Link>
      <Link href='/extra'>Extra</Link>
    </header>
  )
}

export default Navbar
