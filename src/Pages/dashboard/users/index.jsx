import { useEffect, useState } from "react"
import UserCard from "../../../Components/UserCard"
import { http } from "../../../libs/fetcher"
import './index.css'

const Users = () => {

    const [pageNumber, setPageNumber] = useState(1)

    const [usersData, setUsersData] = useState()

    const renderButtons = () => {
        const buttons = []

        for (let i = 0; i < usersData?.length / 10; i++) {
            buttons.push(
                <button
                    key={i}
                    className="w-10 h-10 text-white text-lg font-bold border p-2 rounded-md border-l-[#AB4E69] border-t-[#AB4E69] border-b-[#049C9D] border-r-[#049C9D] flex justify-center items-center"
                    onClick={() => setPageNumber(i + 1)}
                >
                    {i + 1}
                </button>
            )
        }

        return buttons
    }

    const getUsersData = () => {
        http.get('http://localhost:3000/users')
            .then((data) => setUsersData(data.data))
    }

    useEffect(() => {
        getUsersData()
    }, [])

    return (
        <>
            <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
                <div className="w-full h-full flex gap-4 flex-wrap justify-center items-center">
                    {
                        usersData && usersData.map((item, index) => {
                            const counter = index + 1
                            if ((counter >= (10 * (pageNumber - 1)) + 1) && (counter <= 10 * pageNumber)) {
                                return <UserCard
                                    key={item.id}
                                    firstName={item.firstName}
                                    lastName={item.lastName}
                                    gender={item.gender}
                                    avatarNumber={item.avatar}
                                />
                            }
                        })
                    }
                </div>

                <div className="flex justify-center items-center gap-2">
                    <button
                        className={`${usersData ? 'flex' : 'hidden'} w-14 h-10 text-white text-lg font-bold border p-2 rounded-md border-l-[#AB4E69] border-t-[#AB4E69] border-b-[#049C9D] border-r-[#049C9D] justify-center items-center`}
                        onClick={() => setPageNumber(1)}
                    >
                        first
                    </button>
                    {renderButtons().map((item, index) => {
                        if ((pageNumber === 1)) {
                            if ((index + 1 === pageNumber) || (index + 1 === pageNumber + 1) || (index + 1 === pageNumber + 2)) {
                                return item
                            }
                        } else if (pageNumber === usersData.length / 10) {
                            if ((index + 1 === pageNumber) || (index + 1 === pageNumber - 1) || (index + 1 === pageNumber - 2)) {
                                return item
                            }
                        } else {
                            if ((index + 1 === pageNumber - 1) || (index + 1 === pageNumber) || (index + 1 === pageNumber + 1)) {
                                return item
                            }
                        }
                    })}
                    <button
                        className={`${usersData ? 'flex' : 'hidden'} w-14 h-10 text-white text-lg font-bold border p-2 rounded-md border-l-[#AB4E69] border-t-[#AB4E69] border-b-[#049C9D] border-r-[#049C9D] justify-center items-center`}
                        onClick={() => setPageNumber(usersData.length / 10)}
                    >
                        last
                    </button>
                </div>
            </div>
        </>
    )
}

export default Users