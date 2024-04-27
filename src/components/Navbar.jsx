// import { SearchRounded } from "@mui/icons-material"
import { useSearchContext } from "../contexts/SearchContext"

const Navbar = () => {
  const {search, setSearch} = useSearchContext() 

  return (
    <div>
        <input type="text" name="search" id="search" placeholder="search" onInput={(e) => 
        setSearch(e.target.value)} />
        {/* <button type="button" >
            <SearchRounded></SearchRounded>
        </button> */}
    </div>
  )
}

export default Navbar
