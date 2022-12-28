import core from './configs/core'
import esnext from './configs/esnext'
import react from './configs/react'
import next from './configs/next'
import json from './configs/json'
import vue from './configs/vue'
import yml from './configs/yml'
import markdown from './configs/markdown'
import typescript from './configs/typescript'
import typescriptTypeChecking from './configs/typescript-type-checking'
import { definePlugin } from './utils'

const { rules, configs } = definePlugin({
  rules: {},
  configs: {
    core,
    esnext,
    vue,
    react,
    next,
    typescript,
    typescriptTypeChecking,
    yml,
    json,
    markdown
  }
})

export { rules, configs }
