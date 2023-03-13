import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Navbar, Footer } from "../components";
import axios from "axios";


function List({addre}) {

  const [getAll, setGetAll] = useState([])
  const [searchData, setSearchData] = useState([]);

  

  async function listAllBeers() {
    try {
      const res = await axios.get(addre + `/all`);
      setGetAll(res.data);
      setSearchData(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }


  const handleSearch = (typing) => {  
    if(typing === '') {
      setSearchData(getAll)
    } else {
      const filteredData = getAll.filter(app =>  app.name.toUpperCase().includes(typing.toUpperCase()))
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
        <Footer 
          count={searchData.length}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`

`;

export default List;
