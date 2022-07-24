import React from "react";
import styled from "styled-components";
function Home() {
  return (
    //래퍼에 id 값 넣어줌 (nav에서 해시링크로 연결해줄 것)
    <HomeWrapper id="home">
      <PictureArea>
        <img src="" />
      </PictureArea>
      <Describe>
        <MainTitle>
          프론트엔드 개발자를 희망하는 <i>" 박서희 "</i> 입니다
        </MainTitle>
        <Paragraph>
          문장들 !~ 난 대단해~! 문장들 !~ 난 대단해~!문장들 !~ 난 대단해~!문장들
          !~ 난 대단해~!문장들 !~ 난 대단해~!문장들 !~ 난 대단해~!문장들 !~ 난
          대단해~!
        </Paragraph>
      </Describe>
      <HomeButton>난 멋져 !</HomeButton>
    </HomeWrapper>
  );
}

export default Home;

const media = {
  //미디어 객체. 필요한 경우에 쓸 수 있음
  desktop: "@media(min-width: 601px)",
  mobile: "@media(max-width: 600px)",
};

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;
`;

const PictureArea = styled.div`
  height: 40%;
  margin: 80px 10px 40px 10px;
`;

const Describe = styled.section`
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const MainTitle = styled.h1`
  color: white;
  font-size: 45px;
  font-weight: 500;
  text-align: center;
  ${media.mobile} {
    font-size: 30px;
  }
`;
const Paragraph = styled.p`
  margin: 20px;
  width: 50%;
  color: white;
`;

const HomeButton = styled.button`
  margin: 30px;
  width: 150px;
  height: 40px;
  border-radius: 7px;
  border: none;
  background-color: #fff;
  color: black;
`;
