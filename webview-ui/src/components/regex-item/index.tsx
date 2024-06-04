import React from "react";
import { ButtonContainer, Chevron, Container, RegexDisplay, Title, TitleName } from "./styled";
import { VSCodeTextField, VSCodeDivider, VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import {} from "material-icons";

type RegexItemProps = {
  name: string;
  regex: string;
};

export const RegexItem = ({ name, regex }: RegexItemProps) => {
  return (
    <Container>
      <Title>
        <TitleName>{name}</TitleName>
        <Chevron>{">"}</Chevron>
      </Title>
      <RegexDisplay>{regex}</RegexDisplay>
      <VSCodeTextField placeholder={"filename"} />
      <VSCodeTextField placeholder={"pathname"} />
      <ButtonContainer>
        <VSCodeButton appearance={"secondary"}>File search</VSCodeButton>
        <VSCodeButton appearance={"primary"}>Global search</VSCodeButton>
      </ButtonContainer>
      <VSCodeDivider />
    </Container>
  );
};
