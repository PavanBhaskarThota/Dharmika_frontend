import styled from "styled-components"
import { Navbar } from "./Components/Navbar"
import { AllRoutes } from "./Routes/AllRoutes"
import spicesBg from "./assets/spices_bg.png"
import spicesMobileBg from "./assets/spices_mobile_bg2.png"


export const App = ()=>{

  return (
    <DIV>
     <Navbar />
     <AllRoutes/>
    </DIV>
  )
}

const DIV = styled.div`
  min-height: 200vh;
  background-color: #F5FBE6;
  /* background-image: url(${spicesBg}); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: #1F3D2B;
  &::before {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(47, 82, 73, 0.9); /* soft overlay */
    z-index: -1;
  }

  @media (max-width: 768px) {
  /* background-image: url(${spicesMobileBg}); */
    &::before {
      background: rgba(47, 82, 73, 0.7); /* soft overlay */
    }
  }
`;

