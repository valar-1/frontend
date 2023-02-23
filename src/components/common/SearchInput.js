import React from 'react'
import  { FiSearch } from 'react-icons/fi'
import SelectCountry from "./SelectCountry";
import Select from "react-select";
import { BsPeople, BsSearch } from 'react-icons/bs';
import { MdPeopleOutline } from 'react-icons/md';


const state = {
    selectedCatOp: null,
    categories: [
        {
            value: 0,
            label: 'Stays'
        },
        {
            value: 1,
            label: 'Co-Work'
        },
        {
            value: 2,
            label: 'Retreats'
        },
    ]
}
export default function SearchInput() {
    return (
        <>
            
             <div className="searchContainer">
                <div className="searchLocationField">
                    <SelectCountry />
                </div>

                <div className="main-search-input-item">
                    <div className="contact-form-action">
                        <form action="#">
                            <div className="form-group mb-0">
                            <span className="form-icon">
                                <MdPeopleOutline/>
                            </span>
                                <input className="form-control" type="text"
                                       placeholder="People"/>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="searchDateField">
                    <Select
                        placeholder="Category"
                        options={state.categories}
                    />
                </div>

                <div>
                    <button className="searchInputBtn" type="submit"><BsSearch /></button>
                </div>
             </div>
                        
        </>
    )
}
