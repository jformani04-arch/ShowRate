import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user } = useAuth();

  const handleBio = async (e) => {
    try {
      await fetch(`http://localhost:3000/api/users/${user._id}/bio`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bio: e.target.value }),
      });
    } catch (err) {
      console.error("Error updating bio:", err);
    }
  };

  return (
    <>
      <div
        id="container"
        className="flex flex-col bg-black mt-10 mx-auto max-w-6xl border border-white mt-15"
      >
        <div
          id="profileHeader"
          className="relative flex w-full h-48 sm:h-60 md:h-72 py-15 px-2"
        >
          <img
            src="/image.png"
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt="Banner"
            style={{ zIndex: 0 }}
          />

          <div id="profileImage" className="absolute flex gap-4 sm:gap-8 items-center" style={{ zIndex: 1 }}>
            <img
              src={`http://localhost:3000${
                user?.profilePhoto || "/uploads/default-avatar.png"
              }`}
              alt={user ? `${user.username}'s profile` : "Default profile"}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 object-cover object-center rounded-full border-4 border-white shadow-md"
            />
            <div id='userInfo'>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg text-[#ECDFCC]">
                {user?.username}
              </h1>
              <h2>
                <input type='text' className='border-1 border-white text-white text-center text-center mt-5'></input>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
