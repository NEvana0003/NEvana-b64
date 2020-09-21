const { Plugin } = require('powercord/entities');
module.exports = class b64 extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'encode',
      description: 'Base64 Encoder',
      usage: '{c} <ASCII String>',
      executor: (args) => ({
        send: true,
        result: btoa(args)
      })
    });
    powercord.api.commands.registerCommand({
        command: 'decode',
        description: 'Base64 Decoder',
        usage: '{c} <Base64 String>',
        executor: (args) => ({
          send: true,
          result: atob(args).replace(/,/g,' ')
        })
      });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('encode');
    powercord.api.commands.unregisterCommand('decode');
  }
};
