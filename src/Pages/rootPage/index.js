import { useNavigate } from "react-router-dom"

const RootPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <button
                    className="w-60 h-20 text-white text-lg font-bold border p-2 rounded-md border-l-[#AB4E69] border-t-[#AB4E69] border-b-[#049C9D] border-r-[#049C9D] flex justify-center items-center"                    
                    onClick={() => navigate('/dashboard/users')}
                >
                    Go to Users Page
                </button>
            </div>
        </>
    )
}

export default RootPage