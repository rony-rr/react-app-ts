import React, { FC, ReactNode } from "react";

import { StyleContainer } from "./style";

const Container: FC<{
  children: JSX.Element | ReactNode | string | HTMLElement;
}> = ({ children }) => {
  return <StyleContainer>{children}</StyleContainer>;
};

export default Container;
