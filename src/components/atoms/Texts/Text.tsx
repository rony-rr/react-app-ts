import React, { FC } from "react";

import { StyleTexts } from "./style";

const TextComponent: FC<{ children: JSX.Element | string | HTMLElement }> = ({
  children,
}) => {
  return <StyleTexts>{children}</StyleTexts>;
};

export default TextComponent;
