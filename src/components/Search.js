import React from 'react'

export default function Search({handleSearch}) {

console.log(handleSearch);

  const handleChange = (event) => {
    
    if(handleSearch !== null) {
      handleSearch(event.target.value);
    }

    // if(event.target.value === '') {
    //   setSearchData(listAllBeers)
    // } else {
    //   const filteredData = listAllBeers.filter(app => app.name.toUpperCase().includes(event.target.value.toUpperCase()))
    //   setSearchData(filteredData);
    // }
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
