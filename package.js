Package.describe({
  name: 'd2t:dribbble',
  summary: ' Connect to Dribbble package ',
  version: '1.0.0',
  git: 'https://github.com/d2tstudio/dribbble.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('d2t:dribbble.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('d2t:dribbble');
  api.addFiles('d2t:dribbble-tests.js');
});
