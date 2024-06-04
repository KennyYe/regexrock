"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const regexrock_provider_1 = require("./panels/regexrock-provider");
function activate(context) {
    const provider = new regexrock_provider_1.RegexrockProvider(context.extensionUri);
    const regexrockViewDisposable = vscode_1.window.registerWebviewViewProvider(regexrock_provider_1.RegexrockProvider.viewType, provider);
    context.subscriptions.push(regexrockViewDisposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map