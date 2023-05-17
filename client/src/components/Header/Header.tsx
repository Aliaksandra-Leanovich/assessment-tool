import { useCallback, useEffect, useState } from "react";
import Logo from "../../assets/logoSmall.png";
import { Statuses } from "../../enums";
import { useLogout } from "../../hooks";
import { routes } from "../../routes";
import { Timer } from "../Timer/Timer";
import {
  ContainerSC,
  LinkSC,
  LogoContainerSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";
import { IProps } from "./types";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks";
import { getUserInfo } from "../../store/selectors";

export const Header = ({ setStatus, status, test, setAnswersToDb }: IProps) => {
  const { handleLogout } = useLogout(status);
  const [disabled, isDisabled] = useState(false);
  const { isAdmin } = useAppSelector(getUserInfo);
  const { t } = useTranslation();

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
          {!!isAdmin && <LinkSC to={routes.Admin}> {t("admin.link")}</LinkSC>}
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
