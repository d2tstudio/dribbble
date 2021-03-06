Package.describe({
  name: 'd2tstudio:dribbble',
  summary: ' Connect to Dribbble package ',
  version: '1.0.0',
  git: 'https://github.com/d2tstudio/dribbble.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // Deps
  api.use([
    'coffeescript@1.0.4',
    'mquandalle:jade@0.2.8',
    'mquandalle:stylus@1.0.7',
    'templating@1.0.0'])

  // Clientside
  api.addFiles([
    'client/components/dribbble.jade',
    'client/components/dribbble_config.jade',
    'client/components/dribbble_shots.jade',
    'client/components/dribbble.coffee',
    'client/stylesheets/dribbble.styl'
  ], 'client');

  // server
  api.addFiles(
    'server/dribbble.coffee'
    ,'server');


});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('d2t:dribbble');
  api.addFiles('tests.js');
});
