const { Plugin } = require('powercord/entities');

module.exports = class b64 extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'encode',
      description: 'name',
      usage: '{c} usage',
      executor: (args) => ({
        send: true,
        result: btoa(args)
      })
    });
    powercord.api.commands.registerCommand({
        command: 'decode',
        description: 'name',
        usage: '{c} usage',
        executor: (args) => ({
          send: true,
          result: atob(args)
        })
      });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('encode', 'decode');
  }
};
