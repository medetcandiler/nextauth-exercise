'use client'
import UserCard from "../components/UserCard"
import { redirect } from 'next/navigation'
// cannot be uset getServerSession on client components or pages because async/await is not yer supported in client components instead we should use something called useSession 
// import { getServerSession } from "next-auth"
import { useSession } from 'next-auth/react'

const ClientSidePage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/singin?callbackUrl=/client');
    }
  })



  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} pagetype={"Client"} />
    </section>
  )
}

export default ClientSidePage
