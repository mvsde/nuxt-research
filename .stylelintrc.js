module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'comment-word-blacklist': [
      ['/^TODO:/i', '/^FIX:/i', '/^FIXME:/i'],
      { severity: 'warning' }
    ],
    'declaration-empty-line-before': null,
    'declaration-no-important': true,
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'no-unknown-animations': true,
    'selector-max-id': 0,
    'selector-class-pattern': [
      '^[a-z0-9\\_-]+$',
      { message: 'Selector should be written in lowercase with hyphens' }
    ],
    'string-quotes': 'double'
  }
}
