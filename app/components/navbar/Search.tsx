
const Search = () => {
  return (
    <div className=" hidden md:flex bg-orange-700  flex-1  rounded-3xl">
      <input className="py-2 px-3  outline-none rounded-3xl flex flex-1 " type="text" placeholder="Arama Yap..." />
      <button className="p-2 w-15 bg-orange-800  text-sm border border-transparent cursor-pointer rounded-3xl">Ara</button>
    </div>
  )
}

export default Search