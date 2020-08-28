module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  'plugins': [
    [
      'babel-plugin-root-import',
      {
        'rootPathPrefix': '~',
        'rootPathSuffix': 'app',
      },
    ],
  ],
  // env: {
  //   production: {
  //     plugins: [
  //       'babel-plugin-root-import',
  //       {
  //         rootPathPrefix: '~',
  //         rootPathSuffix: 'app',
  //       },
  //     ],
  //   },
  // },
};
