import { ExtensionContext, window } from "vscode";
import { RegexrockProvider } from "./panels/regexrock-provider";

export function activate(context: ExtensionContext) {
  const provider = new RegexrockProvider(context.extensionUri);
  const regexrockViewDisposable = window.registerWebviewViewProvider(
    RegexrockProvider.viewType,
    provider
  );

  context.subscriptions.push(regexrockViewDisposable);
}
