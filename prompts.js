module.exports = [
  {
    type: 'confirm',
    name: 'dockerIgnore',
    message: 'Do you wish to overwrite dockerignore?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'envAlpha',
    message: 'Do you wish to overwrite env.alpha?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'customTheme',
    message: 'Do you wish to overwrite Element\'s SCSS variables?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'envDevelopment',
    message: 'Do you wish to overwrite env.development?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'eslintIgnore',
    message: 'Do you wish to overwrite .eslintignore?',
    default: false,
  },
]
