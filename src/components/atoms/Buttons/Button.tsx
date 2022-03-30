import React, { FC } from "react";

import { StyleButton } from "./style";

const ButtonComponent: FC<{
  children: JSX.Element | string | number | HTMLElement;
}> = ({ children }) => {
  return <StyleButton type="primary">{children}</StyleButton>;
};

export default ButtonComponent;
