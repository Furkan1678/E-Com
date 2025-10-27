
const Search = () => {
  return (
    <div className=" hidden md:flex flex-1 border border-amber-500 rounded-3xl">
      <input className="py-2 px-3 bg-orange-500 outline-none rounded-3xl flex flex-1 " type="text" placeholder="Arama Yap..." />
      <button className="p-2 w-15 bg-orange-600 text-sm border border-transparent cursor-pointer rounded-3xl">Ara</button>
    </div>
  )
}

export default Search