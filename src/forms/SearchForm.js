import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ search }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <>
            <form className="SearchForm form-inline mt-4 shadow-sm p-3 mb-5 rounded" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="search"
                        className="SearchForm-input form-control rounded"
                        placeholder="Where are we off to today?"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        name="searchTerm"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-dark">
                        Let's Go!
                    </button>
                </div>
            </form>
        </>
    );
}

export default SearchForm;