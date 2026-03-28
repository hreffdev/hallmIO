import { configDefault } from "fumadocs-core/highlight/config"
import type { ResolvedShikiConfig } from 'fumadocs-core/highlight/shiki'

export const shikiConfig: ResolvedShikiConfig = {
  ...configDefault,
  defaultThemes: {
    themes: {
      light: 'github-light',
      dark: 'tokyonight',
    },
  },
}
