import Background from "../assets/background.png";
import Logo from "../assets/logoLarge.png";
import { SigninForm } from "../components/SigninForm";
import { SigninMethods } from "../components/SigninMethods";
import { useSetLevel } from "../hooks";
import {
  ContainerSC,
  FormContainerSC,
  ImageContainerSC,
  ImageSC,
  LogoSC,
  WrappperFormSC,
} from "../styles/styles";

export const SignIn = () => {
  const { level } = useSetLevel();

  return (
    <ContainerSC>
      <ImageContainerSC>
        <ImageSC src={Background} alt="SOFTTECO" />
      </ImageContainerSC>
      <WrappperFormSC>
        <FormContainerSC>
          <SigninForm level={level} />
          <SigninMethods level={level} />
        </FormContainerSC>
        <LogoSC src={Logo} alt="SOFTTECO" />
      </WrappperFormSC>
    </ContainerSC>
  );
};
