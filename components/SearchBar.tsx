"use client"

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Manofacturer from './SearchManufacturer';
import { manufacturer } from '../constants/index';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')

    const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar