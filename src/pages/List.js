import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../components";
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
      <div className="grup">
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
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .grup {
    
  }

  .parent-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1vh;
  }
`;

export default List;
