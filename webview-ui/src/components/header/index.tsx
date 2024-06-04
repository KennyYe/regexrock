import React from "react";
import { Container, Subtitle, Title } from "./styled";
import { VSCodeDivider } from "@vscode/webview-ui-toolkit/react";

export const Header = () => {
  const titleText = "Regexrock";
  const subtitleText = "Save and reuse your regexes to super-power your searching capabilities!";

  return (
    <Container>
      <Title>{titleText}</Title>
      <Subtitle>{subtitleText}</Subtitle>
      <VSCodeDivider />
    </Container>
  );
};
