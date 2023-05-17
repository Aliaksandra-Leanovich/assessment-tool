import Logo from "../../assets/logoSmall.png";
import { routes } from "../../routes";
import {
  ContainerSC,
  LogoContainerSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";

export const HeaderAdmin = () => {
  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <LogoContainerSC to={routes.HOME}>
            <img src={Logo} alt="SOFTTECO" />
          </LogoContainerSC>
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
