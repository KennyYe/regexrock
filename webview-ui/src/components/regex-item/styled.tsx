import styled from "styled-components";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const Title = styled.div({
  fontSize: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  userSelect: "none",
});

export const TitleName = styled.div({});

export const ChevronContainer = styled.div<{ isExpanded: boolean }>((props) => ({
  transform: props.isExpanded ? "rotate(90deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease-out",
}));

export const Content = styled.div<{ isExpanded: boolean; maxHeight: number }>((props) => ({
  maxHeight: props.isExpanded ? `${props.maxHeight}px` : "0",
  transition: "all 0.2s ease-out",
  overflow: "hidden",
}));

export const ContentInner = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const RegexDisplay = styled.div({
  fontSize: "20px",
});

export const ButtonContainer = styled.div({
  display: "flex",
  gap: "5px",
});
