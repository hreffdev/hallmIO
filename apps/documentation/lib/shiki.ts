import * as highlight from 'fumadocs-core/highlight'
import type { ResolvedShikiConfig } from 'fumadocs-core/highlight/shiki'

// fumadocs-core may export the default config under different names depending on build
// (named export `configDefault`, `config`, default export, etc). Normalize to a single value.
const _configDefault: any =
  (highlight as any).configDefault ??
  (highlight as any).config ??
  (highlight as any).default ??
  highlight

export const shikiConfig: ResolvedShikiConfig = {
  ..._configDefault,
  defaultThemes: {
    themes: {
      light: 'github-light',
      dark: 'tokyonight',
    },
  },
}
