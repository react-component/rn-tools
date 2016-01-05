var cwd = process.cwd();

function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: 'inherit',
  });
  runner.on('close', function close(code) {
    if (fn) {
      fn(code);
    }
  });
}

module.exports = {
  runCmd: runCmd,
};
