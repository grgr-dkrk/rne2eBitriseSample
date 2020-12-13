module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(jest-)?react-native|react-native|react-native-vector-icons|react-native-get-random-values|react-navigation|@react-navigation|@react-native-community)',
  ],
  setupFiles: ['<rootDir>/jest/setup.js'],
}
