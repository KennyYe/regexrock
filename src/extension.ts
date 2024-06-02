import { ExtensionContext, window } from "vscode";
import { RegexrockProvider } from "./panels/HelloWorldPanel";

export function activate(context: ExtensionContext) {
  const provider = new RegexrockProvider(context.extensionUri);
  const weatherViewDisposable = window.registerWebviewViewProvider(
    RegexrockProvider.viewType,
    provider
  );

  context.subscriptions.push(weatherViewDisposable);
}
