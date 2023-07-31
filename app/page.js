import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  console.log(session)
  return (
    <main>
      { session ? (
        <UserCard user={session?.user} pagetype={'Home'} />
      ):(
        <h1>You shall not pass!</h1>
      )}
    </main>
  )
}
