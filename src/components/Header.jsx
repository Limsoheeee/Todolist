import React from "react";
import styled from "styled-components";

function Header() {
  return (
 <header>
    <StBox>TODO LIST</StBox>
 </header>
  );
}

const StBox = styled.div` 
display: flex;
 width: 800px; 
background-color : black;
color: white;
text-align: left;
padding: 20px 0;
padding-left: 20px;
font-size: large;
font-weight: 700;
text-shadow: 1px 1px 1px #605555;
`; 

export default Header;
