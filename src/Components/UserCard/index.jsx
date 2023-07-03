const UserCard = () => {
    return (
        <>
            <div className="w-full max-w-[350px] h-[300px] rounded-xl border-2 border-[#AB4E69] flex flex-col justify-start items-center">
                <img alt="bg-pic" src="/female-bg-pic.png" className="w-full h-[152px] relative z-20" />
                <img alt="avatar" src={`/avatars/female/4.png`} className="w-[178px] h-[180px] ml-1 translate-y-[-62%] relative z-10" />
                <div className="mt-[-30%]">
                    <p className="text-3xl font-bold">Sarah Smith</p>
                </div>
            </div>
        </>
    )
}

export default UserCard