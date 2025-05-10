// src/utils/terminalLink.ts
export function createTerminalLink(text: string, url: string): string {
  return `\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`
}
