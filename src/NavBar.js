import React, { useState } from "react";
import styled from "styled-components";
import landscape from "./media/landscape.jpg";
import cat from "./media/two-cats.jpg";

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: black;
`;

const NavElement = styled.div`
  width: 10%;
  background-color: green;
  min-width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border-style: ridge;
`;

const HeaderImage = styled.img`
  height: auto;
  max-width: 100%;
`;

const NavBar = () => {
  const [navHeader, setNavHeader] = useState(landscape);

  const handleHoverNavCat = (event) => {
    setNavHeader(cat);
  };
  const handleHoverNavLandscape = (event) => {
    setNavHeader(landscape);
  };

  return (
    <Vertical>
      <HeaderImage src={navHeader} width="3000" />
      <Horizontal>
        <NavElement onMouseOver={handleHoverNavCat}>Cat</NavElement>
        <NavElement onMouseOver={handleHoverNavLandscape}>Landscape</NavElement>
      </Horizontal>
    </Vertical>
  );
};

export { NavBar };
