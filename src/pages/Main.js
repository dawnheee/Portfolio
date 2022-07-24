import Render from "../component/Render";
import styled from "styled-components";
const Main = () => {
  return (
    <MainWrapper id="main">
      <Render />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
