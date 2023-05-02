import styled from "@emotion/styled";

export const LoaderSC = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 34px;
    height: 34px;
    margin: 8px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.theme.color.secondary} transparent
      transparent transparent;
  }

  div:nth-of-type(1) {
    animation-delay: -0.45s;
  }

  div:nth-of-type(2) {
    animation-delay: -0.3s;
  }

  div:nth-of-type(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
