

export default function SearchBar() {
    return (<>
    <div className='flex bg-[#ECDFCC] h-10 m-10 rounded-lg justify-evenly items-center'> 
        <button>PlaceHolder</button>
        <input type='text-box' placeholder='Search Movies' className='border-1 bg-white h-5 rounded-lg text-center'></input>
        <button>Filter</button>
    </div>
    </>)
}