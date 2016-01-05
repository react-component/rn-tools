#!/usr/bin/env node

require('colorful').colorful();

var program = require('commander');

program.on('--help', function help() {
  console.log('  Usage:'.to.bold.blue.color);
  console.log();
  console.log('    $', 'rn-tools run lint'.to.magenta.color, 'lint source within lib');
  console.log('    $', 'rn-tools run tag'.to.magenta.color, 'git tag current version');
  console.log('    $', 'rn-tools run history'.to.magenta.color, 'generate HISTORY.md');
  console.log();
});

program.parse(process.argv);

var task = program.args[0];

if (!task) {
  program.help();
} else {
  var gulp = require('gulp');
  require('./gulpfile');
  gulp.start(task);
}
