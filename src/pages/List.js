import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Navbar, AddBtnBeer } from "../components";
import axios from "axios";


function List({addre}) {

  const [searchData, setSearchData] = useState([]);

  

  async function listAllBeers() {
    try {
      const res = await axios.get(addre + `/all`);
      setSearchData(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleSearch = (typing) => {
    if(typing === '') {
      setSearchData(listAllBeers)
    } else {
      const filteredData = searchData.filter(app =>  app.name.toUpperCase().includes(typing.toUpperCase()))
      setSearchData(filteredData);
    }
  }
 
  
  useEffect(() => {
    listAllBeers("");
  }, []);

  return (
    <Wrapper>
      <div className="">
        <Navbar 
          handleSearch={handleSearch}
        />

        <AddBtnBeer />
          <div className="container containerCard mb-4 " >
            <div className="row cardRow">
            {searchData.length > 0 &&
              searchData.map((breja) => {
                return (
                    <Card
                      key={breja.id}
                      id={breja.id}
                      title={breja.name}
                      image={breja.image}
                      note={breja.note}
                      star={breja.star}
                      addre={addre}
                    />
                 
                    );
                  })}
            </div>
          </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`

`;

export default List;
