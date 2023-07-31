import Image from "next/image"

const UserCard = ({ user, pagetype }) => {

  if(!user){
    return(
      <div>
        no user are founded
      </div>
    )
  }
  return (
    <div className="">
      <div className="flex items-center space-x-3 justify-center mt-10">
        <h1>{user.name}</h1>
        <Image
          src={user.image}
          width={38}
          height={38}
          alt="asdf"
          className="rounded-full"
        />
        <h2>{pagetype}</h2>
      </div>
    </div>
  )
}

export default UserCard
