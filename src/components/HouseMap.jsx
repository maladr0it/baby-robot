import React from "react";
import styled from "styled-components";

import MapImage from "../assets/test_map3.png";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: turquoise;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const HouseMap = () => (
  <Container>
    <StyledImg src={MapImage} />
  </Container>
);

export default HouseMap;
