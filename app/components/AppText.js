import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const StyledText = styled(Text)`

  font-family:   ${(props) => {
    if (props.variant === "heading") return "Manrope_600SemiBold";
    else if (props.variant === "heading2") return "Manrope_400Regular";
    else if (props.variant === "paragraph") return "Manrope_400Regular";
    else if (props.variant === "caption") return "Manrope_400Regular";
  }}
  font-size:${(props) => {
    if (props.variant === "heading") return 20;
    else if (props.variant === "heading2") return 17;
    else if (props.variant === "paragraph") return 15;
    else if (props.variant === "caption") return 12;
  }}
  color:${(props) => {
    if (props.variant === "heading") return "#001010";
    else if (props.variant === "heading2") return "#001010";
    else if (props.variant === "paragraph") return "#001111";
    else if (props.variant === "caption") return "#9999";
  }}

`;

//VARIANT available  => heading,heading2,paragraph,caption,

const AppText = ({
  variant = "paragraph",
  children,
  style,
  onPress,
  ...rest
}) => {
  return (
    <StyledText variant={variant} style={style} onPress={onPress} {...rest}>
      {children}
    </StyledText>
  );
};

export default AppText;
