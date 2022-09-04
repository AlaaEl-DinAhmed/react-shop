import React, { Ref } from "react";
import { IInput } from "./IInput";

const FormInput = React.forwardRef(
  (inputInfo: IInput, ref: Ref<HTMLInputElement>) => {
    return (
      <div>
        <label htmlFor={inputInfo.id}>{inputInfo.label}</label>
        <input id={inputInfo.id} type={inputInfo.type} ref={ref} />
      </div>
    );
  }
);

export default FormInput;
