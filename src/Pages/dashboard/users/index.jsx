import UserCard from "../../../Components/UserCard"

const Users = () => {
    return(
        <>
            <div className="w-full h-full flex gap-4 flex-wrap justify-center items-center">
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
            </div>
        </>
    )
}

export default Users