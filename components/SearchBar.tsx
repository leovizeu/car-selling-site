"use client"

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Manufacturer from './SearchManufacturer';
import { manufacturers } from '../constants/index';

const SearchBar = () => {
    const [manufacturers, setManufacturer] = useState('')

    const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturers} setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar