export default class ALiENEmoji extends Object {
  [x: string]: any;
  constructor(client: any) {
    super();
    this.tick = "<:tick:1206111660658659398>";
    this.cross = "<:cross:1206111657143566396>";
    this.playing = "<:loop:1206126517277433856>";
    this.exclamation = "<:help:1206111690996056125> ";
    this.queue = "<:loop:1206126517277433856>";
    this.info = "<:info:1206111699887849612>";
    this.defSearch = "<:search:1206111681768460318>";
    this.premium = "<:fire:1206111676399755304>";
    this.invite = "<:invite:1206111688248660019>";
    this.support = "<:Support:1130724620757127189>";
    this.spotiSearch = "<a:spotify:1129816498853138502>";
    this.deezSearch = "<:Deezer_avon:1065634451603861545>";
    this.vote = "<:vote_avon:1064932747400982588>";
    this.soundSearch = "<:search:1206111681768460318>";
    this.badges = {
      named: "<:owner:1206111674034159646>",
      owner: "<:owner:1206111674034159646>",
      dev: "<:avondev:1129738531527458856>",
      admin: "<:avonadmin:1129738535952449628>",
      codev: "<:avoncodev:1129738585713692682>",
      author: "<:author_avon:1129990460128108554>",
      friend: "<:fire:1206111676399755304>",
      vip: "<:fire:1206111676399755304>",
      premiumUser: "<:fire:1206111676399755304>",
      mod: "<:support:1206112648693940234>",
      staff: "<:moderator:1206111855383154698>",
      supporter: "<:moderator:1206111855383154698>",
      user: "<:moderator:1206111855383154698>",
    };
    this.helpMenu = {
      music: "<:undeaf:1206111837398241340>",
      home: "<:home:1206168909447958558>",
      filters: "<:leaves:1206111849079377950>",
      info: "<:info:1206111699887849612>",
      utility: "<:stars:1206111663703457845>",
      allCommands: "<:apps:1206111685082087464>",
    };
    this.setup = {
      pause: "<:pause:1206126307642183700>",
      resume: "<:NEXT1:1206116693781254184>",
      skip: "<:NEXT1:1206116693781254184>",
      previous: "<:avonright:1129738558660423680>",
      shuffle: "<:avonsuffle:1129751417138196623>",
      author: "<:bot:1206143418280190012>",
      nowPlaying: "<:loop:1206126517277433856>",
      requester: "<:bot:1206143418280190012>",
      duration: "<:clock:1206111679373647932>",
      stop: "<:pause:1206126307642183700>",
      loop: "<:loop:1206126517277433856>",
      volLow: "<:avonvolminus:1129744510814011543>",
      volHigh: "<:avonvol:1129738595603857489>",
      fav: "<:avonfav:1129751420099375144>",
      autoplay: "<:loop:1206126517277433856>",
      filters: "<:leaves:1206111849079377950>",
    };
    this.alienNew = {
      emote: "<a:botplaying:1129819082343063664>",
      nowPlaying: "<:loop:1206126517277433856>",
      requester: "<:bot:1206143418280190012>",
      duration: "<:clock:1206111679373647932>",
      author: "<:bot:1206143418280190012>",
      pause: "<:pause:1206126307642183700>",
      resume: "<:NEXT1:1206116693781254184>",
      skip: "<:NEXT1:1206116693781254184>",
      fav: "",
      previous: "<:Avon_Previous:1137298056283430982>",
      stop: "<:pause:1206126307642183700>",
    };
    this.spotify = {
      emote: "<a:spotify:1129816498853138502>",
      filters: "<:filter:1100222067938435152>",
      nowPlaying: "<:loop:1206126517277433856>",
      requester: "<:bot:1206143418280190012>",
      duration: "<:clock:1206111679373647932>",
      pause: "<:pause:1206126307642183700>",
      author: "<:author_avon:1066716583365447720>",
      resume: "<:NEXT1:1206116693781254184>",
      stop: "<:pause:1206126307642183700>",
      loop: "<:loop:1206126517277433856>",
      shuffle: "<:shuffle:1139766210213462066>",
      forward: "<:backward:1129823401175949322>",
      backward: "<:forward10:1129823372008759327>",
      volLow: "<:lower_vol:1139766602527690902>",
      volHigh: "<:higher_vol:1139766719917854751>",
      previous: "<:Avon_Previous:1137298056283430982>",
      skip: "<:NEXT1:1206116693781254184>",
    };
    this.special = {
      emote: "<a:premium_avon:1064927294730272939>",
      nowPlaying: "<:loop:1206126517277433856>",
      requester: "<:bot:1206143418280190012>",
      duration: "<:clock:1206111679373647932>",
      pause: "<:pause:1206126307642183700>",
      author: "<:author_avon:1066716583365447720>",
      resume: "<:resume:1099927448734408744>",
      stop: "<:pause:1206126307642183700>",
      loop: "<:loop:1206126517277433856>",
      shuffle: "<:shuffle:1139766210213462066>",
      forward: "<:backward:1129823401175949322>",
      backward: "<:forward10:1129823372008759327>",
      volLow: "<:lower_vol:1139766602527690902>",
      volHigh: "<:higher_vol:1139766719917854751>",
      previous: "<:Avon_Previous:1137298056283430982>",
      skip: "<:NEXT1:1206116693781254184>",
    };
    this.noButtons = {
      emote: "<a:botplaying:1129819082343063664>",
      nowPlaying: "<:loop:1206126517277433856>",
      author: "<:bot:1206143418280190012>",
      requester: "<:bot:1206143418280190012>",
      duration: "<:clock:1206111679373647932>",
      filters: "<:filter:1100222067938435152>",
    };
    this.simple = {
      emote: "<a:nowplaying:1129817857727942738>",
      nowPlaying: "<:loop:1206126517277433856>",
      requester: "<:bot:1206143418280190012>",
      author: "<:bot:1206143418280190012>",
      duration: "<:clock:1206111679373647932>",
      filters: "<:filter:1100222067938435152>",
      pause: "<:pause:1206126307642183700>",
      resume: "<:NEXT1:1206116693781254184>",
      stop: "<:pause:1206126307642183700>",
      skip: "<:NEXT1:1206116693781254184>",
      loop: "<:loop:1129823572991426651>",
    };
    this.oldStyle = {
      emote: "<a:nowplaying:1129817857727942738>",
      nowPlaying: "<:loop:1206126517277433856>",
      author: "<:bot:1206143418280190012>",
      requester: "<:bot:1206143418280190012>",
      duration: "<:clock:1206111679373647932>",
    };
  }
}
