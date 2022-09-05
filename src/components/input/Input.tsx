import React, { Ref } from "react";
import { IInput } from "./IInput";

export const FormInput = React.forwardRef(
  (inputInfo: IInput, ref: Ref<HTMLInputElement>) => {
    return (
      <div>
        <input
          id={inputInfo.id}
          type={inputInfo.type}
          ref={ref}
          placeholder={inputInfo.label}
        />
      </div>
    );
  }
);
