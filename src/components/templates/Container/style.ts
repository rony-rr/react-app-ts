import styled from "styled-components";
import theme from "../../../global/theme";

import { Layout } from "antd";

const { Content } = Layout;

export const StyleContainer = styled(Content)`
  height: 100vh;
  padding: 5vh 10vw;
  background-color: ${theme.colors.grayOpaque};
`;
