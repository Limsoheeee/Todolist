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
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  text-shadow: 1px 1px 1px #605555;
`;

export default Header;
