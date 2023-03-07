import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   bottom: 4px;
   color: antiquewhite;   
   display: flex;
   flex-direction: column;
   position: fixed; 
   width: 31%;
   left: 75%;
   height: 100px;
   font-size: 1.5rem;
   z-index: 1;
   cursor: pointer;
   padding-right: 10%;
   display: flex;
   justify-content: center;
   align-items: center;
`