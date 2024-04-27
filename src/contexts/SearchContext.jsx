import { createContext, useContext, useState } from 'react'

const SearchContxt = createContext();

function SearchProvider({children}) {
    const [search, setSearch] = useState('')
    const searchProps = {
        search,
        setSearch
    }
    return (
        <SearchContxt.Provider value={searchProps}>
            {children}
        </SearchContxt.Provider>
    )
}

export default SearchProvider

export const useSearchContext = () => {
    return useContext(SearchContxt)
}
