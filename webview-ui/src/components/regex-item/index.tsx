import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ButtonContainer,
  ChevronContainer,
  Container,
  Content,
  ContentInner,
  RegexDisplay,
  Title,
  TitleName,
} from "./styled";
import { VSCodeTextField, VSCodeDivider, VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import { FaChevronRight } from "react-icons/fa";

type RegexItemProps = {
  name: string;
  regex: string;
};

export const RegexItem = ({ name, regex }: RegexItemProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onTitleClick = useCallback(() => {
    setIsExpanded((currentIsExpanded) => !currentIsExpanded);
  }, []);

  const contentHeight = contentRef.current?.clientHeight || 0;

  console.log({ contentHeight });

  return (
    <Container>
      <Title onClick={onTitleClick}>
        <TitleName>{name}</TitleName>
        <ChevronContainer isExpanded={isExpanded}>
          <FaChevronRight />
        </ChevronContainer>
      </Title>
      <Content isExpanded={isExpanded} maxHeight={contentHeight}>
        <ContentInner ref={contentRef}>
          <RegexDisplay>{regex}</RegexDisplay>
          <VSCodeTextField placeholder={"filename"} />
          <VSCodeTextField placeholder={"pathname"} />
          <ButtonContainer>
            <VSCodeButton appearance={"secondary"}>File search</VSCodeButton>
            <VSCodeButton appearance={"primary"}>Global search</VSCodeButton>
          </ButtonContainer>
        </ContentInner>
      </Content>
      <VSCodeDivider />
    </Container>
  );
};
