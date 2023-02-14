import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Navbar } from "../components";
import axios from "axios";

function List() {
  const [searchData, setSearchData] = useState([]);

  async function listAllBeers() {
    try {
      const res = await axios.get(`http://localhost:8080/api/beers/all`);
      setSearchData(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    listAllBeers("");
  }, []);

  return (
    <Wrapper>
      <div className="">
        <Navbar />
        <div className="grup" id="list">
          <div className="parent-flex">
            {searchData.length > 0 &&
              searchData.map((breja) => {
                return (
                  <div className="flex-item" key={breja.id}>
                    <Card
                      id={breja.id}
                      title={breja.name}
                      image={breja.image}
                      note={breja.note}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .grup {
    padding-top: 4vw;
  }

  .parent-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1vh;
  }

  .flex-item {
  }
`;

export default List;
