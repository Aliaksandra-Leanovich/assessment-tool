import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonVariants } from "../../enums";
import { durations, levels } from "../../helper";
import { useSetTest } from "../../hooks";
import { Button } from "../Button";
import { Select } from "../Select";
import { IProps } from "./types";
import { useTranslation } from "react-i18next";
import {
  BottomSC,
  ContainerSC,
  FormSC,
  SelectContainerSC,
  SelectTitleSC,
  TitlelSC,
  TotalSC,
} from "./style";

export const CreateTest = ({
  total,
  handleClose,
  checked,
  questions,
}: IProps) => {
  const { t } = useTranslation();
  const { handleSubmit } = useForm();
  const [level, setLevel] = useState("");
  const [duration, setDuartion] = useState("");
  const { onSubmit } = useSetTest(
    checked,
    duration,
    handleClose,
    level,
    questions,
    total
  );

  return (
    <ContainerSC>
      <TitlelSC>Create Test</TitlelSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <SelectContainerSC>
          <SelectTitleSC>{t("modal.duration")}</SelectTitleSC>
          <Select
            options={durations}
            placeholder="Duration"
            name="Duration"
            selected={duration}
            setSelected={setDuartion}
          />
          <SelectTitleSC>{t("modal.level")}</SelectTitleSC>
          <Select
            options={levels}
            name="Level"
            selected={level}
            placeholder="Level"
            setSelected={setLevel}
          />
        </SelectContainerSC>
        <BottomSC>
          <TotalSC>
            {t("modal.title")} {total}
          </TotalSC>
          <Button
            type="submit"
            variant={ButtonVariants.primary}
            children="Create"
            disabled={!duration || !level}
          />
        </BottomSC>
      </FormSC>
    </ContainerSC>
  );
};
