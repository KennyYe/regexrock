import React from "react";
import { vscode } from "./utilities/vscode";
import { RegexItem } from "./components/regex-item";
import { Header } from "./components/header";

const exampleData = [
  {
    name: "Search external imports",
    regex: "^(?d{3})?[-.s]?d{3}[-.s]?d{4}$",
  },
  {
    name: "Find prop name",
    regex: "^(?d{3})?[-.s]?d{3}[-.s]?d{4}$",
  },
];

const App = () => {
  const handleHowdyClick = () => {
    vscode.postMessage({
      command: "hello",
      text: "Hey there partner! 🤠",
    });
  };

  return (
    <main>
      <Header />
      {exampleData.map((data) => (
        <RegexItem {...data} />
      ))}
    </main>
  );
};

export default App;
