import React from 'react'

export default function Search({handleSearch}) {

  const handleChange = (event) => {
    
    if(handleSearch !== null) {
      handleSearch(event.target.value);
    }

  };

  return (
    <>
       <div className="search col-6">
            <input
              className="form-control mr-sm-2"
              style={{ fontSize: "1.5em" }}
              id="parameter"
              type="text"
              onChange={handleChange}
              placeholder="Search"
            ></input>
          </div>
    </>
  )
}
