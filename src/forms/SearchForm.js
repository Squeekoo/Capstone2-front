import React, { useState } from "react";

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
        <div className="SearchForm-div">
            <form className="SearchForm form-inline" onSubmit={handleSubmit}>
                <input
                    className="SearchForm-input form-control form-control-md"
                    placeholder="Where are we off to today?"
                    name="searchTerm"
                    value={searchTerm}
                    onChange={handleChange}
                />

                <button type="submit" className="btn btn-primary btn-md">Let's Go!</button>
            </form>
        </div>
    )

}

export default SearchForm;