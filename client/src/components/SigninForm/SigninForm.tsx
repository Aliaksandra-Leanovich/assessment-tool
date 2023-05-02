import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonVariants } from "../../enums";
import { levels, validationSchema } from "../../helper";
import { useSignIn } from "../../hooks";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledFormSC } from "./styles";
import { IProps, IUserForm } from "./types";

export const SigninForm = ({ selected, setSelected }: IProps) => {
  const { t } = useTranslation();
  const valueEmail = t("input.value.email");
  const valuePassword = t("input.value.password");
  const {
    register,
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const { error, onSubmit } = useSignIn(clearErrors, selected);

  return (
    <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="level"
        control={control}
        render={() => (
          <Select
            options={levels}
            name="level"
            register={register}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        rules={{
          required: false,
        }}
      />

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            type="email"
            label="email"
            value={value}
            onChange={onChange}
            errors={(errors.email && errors.email.message) || error}
            register={register}
            placeholder={valueEmail}
          />
        )}
        rules={{
          required: false,
        }}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            type="password"
            label="password"
            value={value}
            onChange={onChange}
            errors={errors.password?.message}
            register={register}
            placeholder={valuePassword}
          />
        )}
        rules={{
          required: false,
        }}
      />
      <Button
        variant={ButtonVariants.signin}
        type="submit"
        disabled={!selected}
      >
        {t("button.signin")}
      </Button>
    </StyledFormSC>
  );
};
