import { useState } from "react";
import Background from "../assets/background.png";
import Logo from "../assets/logoLarge.png";
import { SigninForm } from "../components/SigninForm";
import { SigninMethods } from "../components/SigninMethods";
import {
  ContainerSC,
  FormContainerSC,
  ImageContainerSC,
  ImageSC,
  LogoSC,
  WrappperFormSC,
} from "../styles/styles";

export const SignIn = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ContainerSC>
      <ImageContainerSC>
        <ImageSC src={Background} alt="SOFTTECO" />
      </ImageContainerSC>
      <WrappperFormSC>
        <FormContainerSC>
          <SigninForm selected={selected} setSelected={setSelected} />
          <SigninMethods selected={selected} />
        </FormContainerSC>
        <LogoSC src={Logo} alt="SOFTTECO" />
      </WrappperFormSC>
    </ContainerSC>
  );
};
