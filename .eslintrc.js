module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'app',
      },
    },
  },
};
