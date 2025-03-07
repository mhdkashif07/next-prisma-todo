"use client";

import { formProps } from "@/types";
import { useRef } from "react";

const Form = ({ action, onSubmit, children, className }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      onSubmit={onSubmit}
      className={className}
    >
      {children}
    </form>
  );
};

export default Form;
