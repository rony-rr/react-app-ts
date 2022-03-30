import styled from "styled-components";
import theme from "../../../global/theme";

import { Button } from "antd";

export const StyleButton = styled(Button)`
  background: ${theme.colors.greenTheme};
  border-color: ${theme.colors.greenTheme};
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 700;
  height: auto;
  width: auto;

  &:hover {
    background: ${theme.colors.purpleTheme};
    border-color: ${theme.colors.purpleTheme};
  }
`;
