export default class ALiENConfig extends Object {
  token: string;
  prefix: string;
  nodes: object[];
  spotiId: string;
  owners: string[];
  spotiSecret: string;
  spotiNodes: object[];
  webhooks: object;
  supportId: string;
  color: string;
  server: string;
  voteUrl: string;
  voteApi: string;
  setupBgLink: string;
  constructor() {
    super();
    this.token =
      "";
    this.prefix = "-";
    this.nodes = [
      {
        name: `ALiEN`,
        url: `lavalink.techpoint.world:80`,
        auth: `techpoint`,
        secure: false,
      },
    ];
    this.voteApi =
      "";
    this.webhooks = {
      guildCreate:
        "",
      guildDelete:
        "",
      Cmds: "",
    };
    this.server = "https://discord.gg/VjjJ24BFyH";
    this.spotiId = "";
    this.spotiSecret = "";
    this.owners = [""];
    this.color = "#ff0000";
    this.supportId = "";
    this.spotiNodes = [
      {
        id: `ALiEN`,
        host: `lavalink.techpoint.world`,
        port: 80,
        password: `techpoint`,
        secure: false,
      },
    ];
    this.voteUrl = "https://top.gg/bot/";
    this.setupBgLink =
      "https://cdn.discordapp.com/attachments/1174969112808656916/1212873973768130580/20230805_160228.png";
  }
}
