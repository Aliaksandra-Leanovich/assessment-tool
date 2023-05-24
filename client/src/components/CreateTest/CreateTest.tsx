import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonVariants } from "../../enums";
import { durations, levels } from "../../helper";
import { useSetTest } from "../../hooks";
import { Button } from "../Button";
import { Select } from "../Select";
import { IProps } from "./types";

export const CreateTest = ({
  total,
  handleClose,
  checked,
  questions,
}: IProps) => {
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
    <div>
      <p>Total questions: {total}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Please select test level</p>
        <Select
          options={levels}
          name="Level"
          selected={level}
          placeholder="Level"
          setSelected={setLevel}
        />
        <p>Please select duration in minutes</p>
        <Select
          options={durations}
          placeholder="Duration"
          name="Duration"
          selected={duration}
          setSelected={setDuartion}
        />
        <Button
          type="submit"
          variant={ButtonVariants.primary}
          children="Create"
          disabled={!level && !duration}
        />
      </form>
    </div>
  );
};
