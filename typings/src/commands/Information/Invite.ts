import ALiENCommand from "../../base/ALiENCommand.js";

export default class Invite extends ALiENCommand {
  constructor(client: any) {
    super(client);
    this.name = "invite";
    this.aliases = ["inv"];
    this.desc = "Provides you with the Invite link of the bot";
    this.usage = "invite";
    this.cat = "info";
    this.exec = async (message: any, args: any, prefix: any) => {
      return message.reply({
        content: `Here You Go!`,
        components: [
          this.client.utils.actionRow([
            this.client.utils.button(
              `link`,
              `Invite Me`,
              null,
              null,
              `https://discord.com/api/oauth2/authorize?client_id=1149253305873207340&permissions=8&scope=applications.commands%20bot`,
              this.client.emoji.invite
            ),
            this.client.utils.button(
              `link`,
              `Support Server`,
              null,
              null,
              `${this.client.config.server}`,
              this.client.emoji.support
            ),
          ]),
        ],
      });
    };
  }
}
