import styled from "styled-components";
import theme from "../../../global/theme";

import { Typography } from "antd";

const { Paragraph } = Typography;

export const StyleTexts = styled(Paragraph)`
    color: ${theme.colors.white};
    font-size: 17px;
    font-weight: 800;
    margin-top: 2vh;
    margin-bottom: 2vh !important;  
    text-align: justify;
`;
