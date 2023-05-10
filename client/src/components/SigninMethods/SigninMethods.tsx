import GithubImage from "../../assets/github.png";
import GoogleImage from "../../assets/google.png";
import { ButtonVariants } from "../../enums";
import { useSignInGoogle, useSignInWithGithub } from "../../hooks";
import { Button } from "../Button";
import { ContainerSC, ImageSC } from "./style";
import { IProps } from "./types";

export const SigninMethods = ({ level }: IProps) => {
  const { signInWithGoogle } = useSignInGoogle(level);
  const { signInWithGithub } = useSignInWithGithub(level);

  return (
    <ContainerSC>
      <Button
        variant={ButtonVariants.secondary}
        type="submit"
        handleClick={signInWithGoogle}
      >
        <ImageSC src={GoogleImage} alt="Google" />
      </Button>
      <Button
        variant={ButtonVariants.secondary}
        type="submit"
        handleClick={signInWithGithub}
      >
        <ImageSC src={GithubImage} alt="Github" />
      </Button>
    </ContainerSC>
  );
};
