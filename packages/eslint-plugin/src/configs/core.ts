import { defineConfig } from '../utils'
import bestPracticeRules from './rules/best-practice'
import eslintComments from './rules/eslint-comments'

const ignorePatterns = [
  '*.min.*',
  'CHANGELOG.md',
  'dist',
  'LICENSE*',
  'output',
  'coverage',
  'public',
  'temp',
  'packages-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  '__snapshots__',
  '!.github',
  '!.vitepress',
  '!.vscode',
]

export default defineConfig({
  plugins: ['@zheqi', 'html', 'eslint-comments'],
  extends: ['standard'],
  ignorePatterns,
  rules: {
    // Common
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-console': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-return-await': 'error',
    'operator-linebreak': ['error', 'before'],
    'space-before-function-paren': 'off',
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: true,
    }],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    // formatting
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['/', '#'],
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true,
      },
    }],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    ...eslintComments,
    ...bestPracticeRules,
  },
})
