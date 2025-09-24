import { useAuth } from '../context/AuthContext.jsx'

export default function Profile() {

    const { user } = useAuth();

    return(
        <>
        <div className="flex flex-col justify-center text-white items-center mt-15">
            <a className="mt-5">Profile Photo</a>
            <h1 className="bg-[#697565] text-xl mt-5 rounded-xl py-4 px-8">{user?.username}</h1>
        </div>
        </>
    )
}