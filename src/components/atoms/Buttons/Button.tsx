import React, { FC } from "react";

import { StyleButton } from "./style";

const ButtonComponent: FC<{ text: string }> = ({ text }) => {
  return (
    <StyleButton type="primary">
      {text}
    </StyleButton>
  );
};

export default ButtonComponent;
