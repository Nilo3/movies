import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css"
import {BiSearchAlt} from "react-icons/bi"
import {  useNavigate } from "react-router-dom";
import { useQuery } from "../../Hooks/useQuery";



export function SearchBar() {
    const query = useQuery();
    const search = query.get("search")
    

    const navigate = useNavigate();

//Si hay un cambio en el texto de nuestra searchbar, seteo el search en vacio

   
    const handleSubmit= (e) => {
        e.preventDefault();
       
    }
    
    
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit} >
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" value={search} placeholder="Title" aria-label="Search Movies" onChange={(event)=>{
                    const value = event.target.value;
                    navigate("/?search=" + value)
                }}/>
                <BiSearchAlt size={20} className={styles.searchButton} />
           
            </div>
        </form>
    )
}

