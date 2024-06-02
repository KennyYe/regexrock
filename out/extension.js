"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const HelloWorldPanel_1 = require("./panels/HelloWorldPanel");
function activate(context) {
    const provider = new HelloWorldPanel_1.RegexrockProvider(context.extensionUri);
    const weatherViewDisposable = vscode_1.window.registerWebviewViewProvider(HelloWorldPanel_1.RegexrockProvider.viewType, provider);
    context.subscriptions.push(weatherViewDisposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map