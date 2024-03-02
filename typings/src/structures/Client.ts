import { Client, Partials } from "discord.js";
import ALiENConfig from "../config/Config.js";
import ALiENEmoji from "../config/Emoji.js";
import ALiENShoukaku from "../api/Shoukaku.js";
import ALiENApi from "../api/Api.js";
import ALiENEvents from "./Events.js";
import ALiENCommands from "./Commands.js";
import { ClusterClient, getInfo } from "discord-hybrid-sharding";
import ALiENUtils from "./Utils.js";
import ALiENLogger from "./Logger.js";
import ALiENSpotify from "../api/Spotify.js";
import ALiENKazagumo from "../api/Kazagumo.js";

export default class ALiEN extends Client {
  [x: string]: any;
  constructor() {
    super({
      intents: [
        "Guilds",
        "GuildMembers",
        "GuildMessages",
        "GuildInvites",
        "GuildVoiceStates",
        "MessageContent",
      ],
      partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.User,
        Partials.Reaction,
      ],
      allowedMentions: {
        repliedUser: false,
        parse: ["everyone", "roles", "users"],
      },
      failIfNotExists: true,
      shards: getInfo().SHARD_LIST,
      shardCount: getInfo().TOTAL_SHARDS,
    });
    this.config = new ALiENConfig();
    this.emoji = new ALiENEmoji(this);
    this.shoukaku = new ALiENShoukaku(this);
    this.kazagumo = new ALiENKazagumo(this);
    this.spotify = new ALiENSpotify(this);
    this.cluster = new ClusterClient(this);
    this.logger = new ALiENLogger(this);
    this.utils = new ALiENUtils(this);
    this.api = new ALiENApi(this);
    this.events = new ALiENEvents(this).loadEvents();
    this.commands = new ALiENCommands(this).loadCommands();
  }
  start() {
    return super.login(this.config.token);
  }
}
