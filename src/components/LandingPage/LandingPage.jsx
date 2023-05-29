import { useDebounce } from "../../Hooks/useDebounce";
import { useQuery } from "../../Hooks/useQuery";
import { MoviesGrid } from "../MoviesGrid/MoviesGrid";
import { SearchBar } from "../SearchBar/SearchBar";


export function LandingPage(){
    const query = useQuery()
    const search = query.get("search")
    const debouncedSearch = useDebounce(search,300)

    return (<div>
        <SearchBar />
        <MoviesGrid key={debouncedSearch} search={debouncedSearch}  />
             </div> 
    )
}