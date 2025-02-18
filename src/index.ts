import { defineExtension, useCommand } from 'reactive-vscode'
import { window } from 'vscode'

const { activate, deactivate } = defineExtension(() => {
  useCommand('reactive-vscode-demo.helloWorld', () => {
    window.showInformationMessage('Hello World!')
  })
})

export { activate, deactivate }
