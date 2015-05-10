Package.describe({
  name: 'jrudio:electron',
  version: '0.0.5',
  // TODO: Need to revise this
  summary: 'Run your Meteor app in Electron',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jrudio/meteor-electron',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
});

Npm.depends({
  'shelljs': '0.4.0',
  'electron-prebuilt': '0.25.3',
  'electron-packager': '3.3.0',
  'request': '2.55.0',
  "minimist": "1.1.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('electron-plugin.js', 'server');
  api.export('Electron');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jrudio:electron');
  api.addFiles('electron-plugin-tests.js', 'server');
});
