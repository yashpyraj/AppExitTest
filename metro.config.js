const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const packageRoot = path.resolve(__dirname, '../react-native-app-exit');

const config = {
  watchFolders: [packageRoot],
  resolver: {
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(packageRoot, 'node_modules'),
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
