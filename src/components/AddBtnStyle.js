import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   padding-top: 2px;
   border-radius: 4px;
   bottom: 4px;
   color: antiquewhite;   
   display: flex;
   flex-direction: column;
   position: fixed; 
   width: 70px;
   left: 75%;
   height: 100px;
   font-size: 1.5rem;
   z-index: 1;
   cursor: pointer;
   background-color: #a9a9a9c7;
   display: flex;
   justify-content: center;
   align-items: center;
`