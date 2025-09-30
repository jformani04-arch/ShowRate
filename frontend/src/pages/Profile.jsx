import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <div className="flex flex-col justify-center text-white items-center mt-15">
        <div className="mt-5">
          <img
            src={`http://localhost:3000${
              user?.profilePhoto || "/uploads/default-avatar.png"
            }`}
            alt={user ? `${user.username}'s profile` : "Default profile"}
            className="w-40 h-40 rounded-full object-cover border-4 shadow-md"
          />
        </div>
        <h1 className="bg-[#697565] text-xl mt-5 rounded-xl py-4 px-8">
          {user?.username}
        </h1>
        <div>last active</div>
        <div>bio</div>
      </div>
    </>
  );
}
