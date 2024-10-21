"use client";
import { ACTIONS } from "@/app/_constants";
import Input from "../UI/Input";
import classes from "./AddGuide.module.css";
import { createGuide } from "@/app/_actions/create-data";
import { useActionState, useEffect, useRef } from "react";
import Button from "../UI/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addGuideSchema } from "@/app/_validation-schemas";
import { z } from "zod";
import { createToast } from "../UI/Toast";
import ServerErrors from "../UI/ServerErrors";

const AddNewGuide = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [actionState, action, isPending] = useActionState(createGuide, null);
  const { success, toast, errors: serverErrors } = actionState || {};
  const { register, formState, handleSubmit } = useForm<
    z.infer<typeof addGuideSchema>
  >({
    mode: "all",
    resolver: zodResolver(addGuideSchema),
  });

  // handle toast messages
  useEffect(() => {
    success && createToast({ ...toast! });
    success && formRef.current?.reset();
  }, [success, toast]);

  return (
    <form
      action={action}
      onSubmit={(ev) => {
        ev.preventDefault();
        handleSubmit(() => {
          action(new FormData(formRef.current!));
        })(ev);
      }}
      ref={formRef}
      className={classes.addGuide}
    >
      <div className={classes.addGuideInputElements}>
        <Input
          placeholder="Ime"
          errors={formState.errors}
          {...register("firstName")}
        />
        <Input
          placeholder="Prezime"
          errors={formState.errors}
          {...register("lastName")}
        />
        {serverErrors && <ServerErrors errors={serverErrors} />}
      </div>
      <Button isPending={isPending}>{ACTIONS.ADD}</Button>
    </form>
  );
};

export default AddNewGuide;
