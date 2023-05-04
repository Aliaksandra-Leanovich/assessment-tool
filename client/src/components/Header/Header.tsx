import { useCallback, useEffect, useState } from "react";
import Logo from "../../assets/logoSmall.png";
import { Statuses } from "../../enums";
import { useLogout } from "../../hooks";
import { Timer } from "../Timer/Timer";
import {
  ContainerSC,
  LogoContainerSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";
import { IProps } from "./types";

export const Header = ({ setStatus, status, test, setAnswersToDb }: IProps) => {
  const { handleLogout } = useLogout(status);
  const [disabled, isDisabled] = useState(false);

  const setDisabled = useCallback(() => {
    if (status === Statuses.Test) {
      isDisabled(true);
    } else {
      isDisabled(false);
    }
  }, [status]);

  useEffect(() => {
    setDisabled();
  }, [setDisabled]);

  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <LogoContainerSC disabled={disabled} onClick={handleLogout}>
            <img src={Logo} alt="SOFTTECO" />
          </LogoContainerSC>
          <Timer
            setStatus={setStatus}
            status={status}
            test={test}
            setAnswersToDb={setAnswersToDb}
          />
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
