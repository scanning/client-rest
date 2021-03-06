import { Request, RequestFile, RequestOptions, Response, Route } from 'detritus-rest';

import { RestRequest } from './request';


export namespace RestClientEvents {
  export interface RequestPayload {
    request: Request,
    restRequest: RestRequest,
  }

  export interface ResponsePayload {
    response: Response,
    restRequest: RestRequest,
  }
}

export namespace RequestTypes {
  export interface File extends RequestFile {

  }

  export interface Options extends RequestOptions {
    dataOnly?: boolean,
    errorOnRatelimit?: boolean,
    fingerprint?: string,
    skipRatelimitCheck?: boolean,
    token?: string,
    useAuth?: boolean,
  }


  /* Option Interfaces */

  export interface AcceptTemplate {
    icon?: Buffer | string,
    name: string,
  }

  export interface ActivateOauth2ApplicationLicense {
    code?: string,
    guildId: string,
  }

  export interface AddConnection {
    name: string,
    friendSync?: boolean,
  }

  export interface AddGuildMember {
    accessToken: string,
    deaf?: boolean,
    mute?: boolean,
    nick?: string,
    roles?: Array<string>,
  }

  export interface AddGuildMemberRole {
    reason?: string,
  }

  export interface AddTeamMember {
    discriminator: string,
    username: string,
  }

  export interface AddOauth2ApplicationWhitelistUser {
    branchIds?: Array<string>,
    discriminator: string,
    username: string,
  }

  export interface AuthorizeIpAddress {
    token: string,
  }

  export interface BeginGuildPrune {
    computePruneCount?: boolean,
    days?: number,
    reason?: string,
  }

  export interface ConnectionCallback {
    code: string,
    friendSync: boolean,
    fromContinuation: boolean,
    insecure?: boolean,
    openIdParams: object,
    state: string,
  }

  export interface CreateApplicationNews {
    applicationId: string,
    channelId: string,
    description?: string,
    messageId: string,
    thumbnailOverride?: Buffer | string,
    title?: string,
    url?: string,
  }

  export interface CreateChannelInvite {
    maxAge?: number,
    maxUses?: number,
    temporary?: boolean,
    unique?: boolean,
  }

  export interface CreateChannelMessageEmbed {
    author?: {
      iconUrl?: string,
      name?: string,
      url?: string,
    },
    color?: number,
    description?: string,
    fields?: Array<{
      inline?: boolean,
      name: string,
      value: string,
    }>,
    footer?: {
      iconUrl?: string,
      text: string,
    },
    image?: {
      url?: string,
    },
    provider?: {
      name?: string,
      url?: string,
    },
    thumbnail?: {
      url?: string,
    },
    timestamp?: string,
    title?: string,
    type?: string,
    url?: string,
    video?: {
      url?: string,
    },
  }

  export interface CreateChannelMessageEmbedFunction {
    toJSON: () => RawChannelMessageEmbed,
  }

  export interface CreateChannelOverwrite {
    id: string,
    type: 'role' | 'member',
    allow: number,
    deny: number,
  }

  export interface CreateDm {
    recipientId?: string,
    recipients?: Array<string>,
  }

  export interface CreateGuild {
    channels?: Array<CreateGuildChannel>,
    defaultMessageNotifications?: number,
    explicitContentFilter?: number,
    icon?: Buffer | string,
    name: string,
    region: string,
    roles?: Array<CreateGuildRole>,
    verificationLevel?: number,
  }

  export interface CreateGuildBan {
    deleteMessageDays?: string,
    reason?: string,
  }

  export interface CreateGuildChannel {
    branchId?: string,
    bitrate?: number,
    name: string,
    nsfw?: boolean,
    parentId?: string,
    permissionOverwrites?: Array<CreateChannelOverwrite>,
    reason?: string,
    skuId?: string,
    topic?: string,
    type: number,
    userLimit?: number,
  }

  export interface CreateGuildEmoji {
    name: string,
    image: Buffer | string,
    reason?: string,
    roles?: Array<string>,
  }

  export interface CreateGuildIntegration {
    id: string,
    reason?: string,
    type: string,
  }

  export interface CreateGuildRole {
    color?: number,
    hoist?: boolean,
    mentionable?: boolean,
    name?: string,
    permissions?: number,
    reason?: string,
  }

  export interface CreateGuildTemplate {
    description?: string,
    name: string,
  }

  export interface CreateLobby {
    capacity?: number,
    locked?: boolean,
    metadata?: any,
    ownerId?: string,
    type?: number,
  }

  export interface CreateMeBillingPaymentSource {
    billingAddress: {
      city: string,
      country: string,
      line1: string,
      line2: string,
      name: string,
      postalCode: string,
      state: string,
    },
    paymentGateway: string,
    token: string,
  }

  export interface CreateMeBillingSubscription {
    paymentGatewayPlanId: string,
    paymentSourceId: string,
    trialId?: string,
  }

  export interface CreateMessage {
    activity?: {
      partyId?: string,
      sessionId?: string,
      type?: number,
    },
    allowedMentions?: {
      parse?: Array<string>,
      repliedUser?: boolean,
      roles?: Array<string>,
      users?: Array<string>,
    },
    applicationId?: string,
    content?: string,
    embed?: CreateChannelMessageEmbed | CreateChannelMessageEmbedFunction | null,
    file?: RequestFile,
    files?: Array<RequestFile>,
    hasSpoiler?: boolean,
    messageReference?: {
      channelId: string,
      guildId?: string,
      messageId: string,
    },
    nonce?: string,
    stickerIds?: Array<string>,
    tts?: boolean,
  }

  export interface CreateOauth2Application {
    name: string,
    teamId?: string,
  }

  export interface CreateOauth2ApplicationAsset {
    image: Buffer | string,
    name: string,
    type: string,
  }

  export interface CreateStoreApplicationAsset {
    file?: RequestFile,
    files?: Array<RequestFile>,
  }

  export interface CreateTeam {
    icon?: Buffer | string | null,
    name?: string,
  }

  export interface CreateWebhook {
    avatar?: string,
    name: string,
  }

  export interface DeleteAccount {
    code?: string,
    password: string,
  }

  export interface DeleteChannel {
    reason?: string,
  }

  export interface DeleteChannelOverwrite {
    reason?: string,
  }

  export interface DeleteGuild {
    code?: string,
  }

  export interface DeleteGuildEmoji {
    reason?: string,
  }

  export interface DeleteGuildIntegration {
    reason?: string,
  }

  export interface DeleteGuildRole {
    reason?: string,
  }

  export interface DeleteInvite {
    reason?: string,
  }

  export interface DeleteMessage {
    reason?: string,
  }

  export interface DeleteOauth2Application {
    code?: string,
  }

  export interface DeleteTeam {
    code?: string,
  }

  export interface DeleteWebhook {
    reason?: string,
  }

  export interface DisableAccount {
    code?: string,
    password: string,
  }

  export interface EditApplicationNews {
    channelId?: string,
    description?: string,
    messageId?: string,
    thumbnail?: Buffer | string,
    title?: string,
  }

  export interface EditChannel {
    bitrate?: number,
    icon?: Buffer | string,
    name?: string,
    nsfw?: boolean,
    parentId?: string,
    permissionOverwrites?: Array<CreateChannelOverwrite>,
    position?: string,
    rateLimitPerUser?: number,
    reason?: string,
    topic?: string,
    type?: number,
    userLimit?: number,
  }

  export interface EditChannelOverwrite {
    allow?: number,
    deny?: number,
    reason?: string,
    type?: string,
  }

  export interface EditConnection {
    friendSync?: boolean,
    visibility?: boolean,
  }

  export interface EditGuild {
    afkChannelId?: null | string,
    afkTimeout?: number,
    banner?: Buffer | string,
    code?: string,
    defaultMessageNotifications?: string,
    description?: string,
    discoverySplash?: Buffer | string | null,
    explicitContentFilter?: number,
    features?: Array<string>,
    icon?: Buffer | string | null,
    name?: string,
    ownerId?: string,
    preferredLocale?: string,
    reason?: string,
    region?: string,
    rulesChannelId?: null | string,
    splash?: Buffer | string | null,
    systemChannelFlags?: number,
    systemChannelId?: null | string,
    verificationLevel?: number,
  }

  export interface EditGuildChannel {
    id: string,
    lockPermissions?: boolean,
    parentId?: string,
    position?: number,
  }

  export interface EditGuildChannels extends Array<EditGuildChannel> {
    
  }

  export interface EditGuildChannelsExtra {
    reason?: string,
  }

  export interface EditGuildEmbed {
    channelId?: string,
    enabled: boolean,
    reason?: string,
  }

  export interface EditGuildEmoji {
    name?: string,
    reason?: string,
    roles?: Array<string>,
  }

  export interface EditGuildIntegration {
    enableEmoticons?: boolean,
    expireBehavior?: number,
    expireGracePeriod?: number,
    reason?: string,
  }

  export interface EditGuildMember {
    channelId?: string | null,
    deaf?: boolean,
    mute?: boolean,
    nick?: string,
    reason?: string,
    roles?: Array<string>,
  }

  export interface EditGuildMfaLevel {
    code: string,
    level: number,
    reason?: string,
  }

  export interface EditGuildNick {
    reason?: string,
  }

  export interface EditGuildRole {
    color?: number,
    hoist?: boolean,
    mentionable?: boolean,
    name?: string,
    permissions?: number,
    reason?: string,
  }

  export interface EditGuildRolePosition {
    id: string,
    position?: number,
  }

  export interface EditGuildRolePositions extends Array<EditGuildRolePosition> {

  }

  export interface EditGuildRolePositionsExtra {
    reason?: string,
  }

  export interface EditGuildVanity {
    reason?: string,
  }

  export interface EditLobby {
    capacity?: number,
    locked?: boolean,
    metadata?: any,
    ownerId?: string,
    type?: number,
  }

  export interface EditLobbyMember {
    metadata?: any,
  }

  export interface EditMe {
    avatar?: Buffer | null | string,
    code?: string,
    customStatus?: {
      emojiId?: string,
      emojiName?: string,
      expiresAt?: Date | string,
      text?: string,
    },
    discriminator?: number | string,
    email?: string,
    flags?: number,
    newPassword?: string,
    password?: string,
    username?: string,
  }

  export interface EditMeBillingPaymentSource {
    billingAddress?: {
      city: string,
      country: string,
      line1: string,
      line2: string,
      name: string,
      postalCode: string,
      state: string,
    },
    default?: boolean,
  }

  export interface EditMeBillingSubscription {
    paymentGatewayPlanId?: string,
    paymentSourceId?: string,
    status?: string,
  }

  export interface EditMessage {
    allowedMentions?: {
      parse?: Array<string>,
      roles?: Array<string>,
      users?: Array<string>,
    },
    content?: string,
    embed?: CreateChannelMessageEmbed | CreateChannelMessageEmbedFunction | null,
    flags?: number,
  }

  export interface EditOauth2Application {
    description?: string,
    icon?: Buffer | string,
    name?: string,
    redirectUris?: Array<string>,
  }

  export interface EditSettings {
    [key: string]: any,
  }

  export interface EditTeam {
    code?: string,
    icon?: Buffer | string | null,
    name?: string,
    ownerUserId?: string,
  }

  export interface EditWebhook {
    avatar?: Buffer | string | null,
    channelId?: string,
    name?: string,
    reason?: string,
  }

  export interface ExecuteWebhook {
    allowedMentions?: {
      parse?: Array<string>,
      roles?: Array<string>,
      users?: Array<string>,
    },
    avatarUrl?: string,
    content?: string,
    embed?: CreateChannelMessageEmbed | CreateChannelMessageEmbedFunction,
    embeds?: Array<CreateChannelMessageEmbed | CreateChannelMessageEmbedFunction>,
    file?: RequestFile,
    files?: Array<RequestFile>,
    tts?: boolean,
    username?: string,
    wait?: boolean,
  }

  export interface FetchGiftCode {
    countryCode?: string,
    withApplication?: boolean,
    withSubscriptionPlan?: boolean,
  }

  export interface FetchGuildAuditLogs {
    actionType?: number,
    before?: string,
    limit?: number,
    userId?: string,
  }

  export interface FetchGuildMembers {
    after?: string,
    limit?: number,
  }

  export interface FetchGuildMembersSearch {
    limit?: number,
    query: string,
  }

  export interface FetchGuildPruneCount {
    days?: number,
  }

  export interface FetchGuildWidgetPng {
    style?: string,
  }

  export interface FetchInvite {
    withCounts?: boolean,
  }

  export interface FetchMe {
    withAnalyticsToken?: boolean,
  }

  export interface FetchMeBillingPayments {
    beforeId?: string,
    limit?: number,
  }

  export interface FetchMeFeedSettings {
    includeAutosubscribedGames?: boolean,
  }

  export interface FetchMeGuilds {
    after?: string,
    before?: string,
    limit?: number,
  }

  export interface FetchMentions {
    after?: string,
    around?: string,
    before?: string,
    everyone?: boolean,
    limit?: number,
    roles?: boolean,
  }

  export interface FetchMessages {
    after?: string,
    around?: string,
    before?: string,
    limit?: number,
  }

  export interface FetchOauth2Applications {
    withTeamApplications?: boolean,
  }

  export interface FetchOauth2Authorize {
    clientId?: string,
    responseType?: string,
    scope?: string,
  }

  export interface FetchReactions {
    after?: string,
    before?: string,
    limit?: number,
  }

  export interface FetchTeamPayouts {
    limit?: number,
  }

  export interface ForgotPassword {
    email: string,
  }

  export interface JoinGuild {
    lurker?: boolean,
    sessionId?: string,
  }

  export interface Login {
    captchaKey?: string,
    email: string,
    giftCodeSKUId?: string,
    loginSource?: string,
    password: string,
    undelete?: boolean,
  }

  export interface LoginMfaSms {
    code: string,
    giftCodeSKUId?: string,
    loginSource?: string,
    ticket: string,
  }

  export interface LoginMfaSmsSend {
    ticket: string,
  }

  export interface LoginMfaTotp {
    code: string,
    giftCodeSKUId?: string,
    loginSource?: string,
    ticket: string,
  }

  export interface Logout {
    provider?: string,
    token?: string,
    voipProvider?: string,
    voipToken?: string,
  }

  export interface MessageSuppressEmbeds {
    suppress?: boolean,
  }

  export interface Oauth2Authorize {
    authorize?: boolean,
    botGuildId?: string,
    captchaKey?: string,
    clientId?: string,
    permissions?: number,
    prompt?: string,
    redirectUri?: string,
    responseType?: string,
    scope?: string,
    webhookChannelId?: string,
    webhookGuildId?: string,
  }

  export interface RedeemGiftCode {
    channelId?: string,
  }

  export interface Register {
    captchaKey?: string,
    consent: boolean,
    email: string,
    fingerprint?: string,
    giftCodeSKUId?: string,
    invite?: string,
    password: string,
    username: string,
  }

  export interface RemoveGuildBan {
    reason?: string,
  }

  export interface RemoveGuildMember {
    reason?: string,
  }

  export interface RemoveGuildMemberRole {
    reason?: string,
  }

  export interface ResetPassword {
    password: string,
    pushProvider?: string,
    pushToken?: string,
    pushVoipProvider?: string,
    pushVoipToken?: string,
    token: string,
  }

  export interface ResetPasswordMfa {
    code: string,
    password: string,
    ticket: string,
    token: string,
  }

  export interface SearchLobbies {
    filter?: Array<{key: string, comparison: number, cast: number, value: string}>,
    sort?: Array<{key: string, cast: number, near_value: string}>,
    limit?: number,
    distance?: number,
  }

  export interface SearchOptions {
    attachmentFilename?: string | Array<string>,
    attachmentExtensions?: string | Array<string>,
    authorId?: string | Array<string>,
    channelId?: string,
    content?: string,
    has?: string | Array<string>,
    includeNSFW?: boolean,
    limit?: number,
    maxId?: string,
    mentions?: string | Array<string>,
    minId?: string,
    offset?: number,
  }

  export interface SendFriendRequest {
    discriminator: string,
    username: string,
  }

  export interface StartChannelCallRinging {
    recipients?: Array<string>,
  }

  export interface StopChannelCallRinging {
    recipients?: Array<string>,
  }

  export interface TransferOauth2Application {
    code?: string,
    teamId: string,
  }

  export interface Verify {
    captchaKey: string,
    token?: string,
  }

  export interface VerifyCaptcha {
    captchaKey: string,
  }

  /* Raw Types */
  export interface RawChannelMessageEmbed {
    author?: {
      icon_url?: string,
      name?: string,
      url?: string,
    },
    color?: number,
    description?: string,
    fields?: Array<{
      inline?: boolean,
      name: string,
      value: string,
    }>,
    footer?: {
      icon_url?: string,
      text: string,
    },
    image?: {
      url?: string,
    },
    provider?: {
      name?: string,
      url?: string,
    },
    thumbnail?: {
      url?: string,
    },
    timestamp?: string,
    title?: string,
    type?: string,
    url?: string,
    video?: {
      url?: string,
    },
  }

  /* Route Types */

  export interface RouteInvite {
    username?: string,
  }

  export interface RouteWidget {
    id?: string,
    theme?: string,
    username?: string,
  }
}

export namespace ResponseTypes {
  export type CreateMessage = DiscordTypes.Message;
  export type EditMessage = DiscordTypes.Message;
}


export namespace DiscordTypes {
  export interface ChannelPartial {
    id: string,
    name: string,
  }

  export interface Message {
    activity?: {
      cover_image?: string,
      name?: string,
      party_id: string,
      type: number,
    },
    application?: {
      cover_image: null | string,
      description: string,
      icon: null | string,
      id: string,
      name: string,
      primary_sku_id: string,
    },
    attachments?: Array<MessageAttachment>,
    author: User,
    call?: {
      ended_timestamp: null | string,
      participiants: Array<string>,
    },
    channel_id: string,
    content: string,
    edited_timestamp?: string,
    embeds?: Array<MessageEmbed>,
    guild_id?: string,
    id: string,
    mention_channels?: Array<ChannelPartial>,
    mention_everyone: boolean,
    mention_roles: Array<string>,
    mentions: Array<{
      bot: boolean,
      discriminator: string,
      id: string,
      username: string,
    }>,
    message_reference?: {
      channel_id: string,
      guild_id?: string,
      message_id: string,
    },
    nonce: null | string,
    pinned: boolean,
    timestamp: string,
    tts: boolean,
    type: number,
    webhook_id?: string,
  }

  export interface MessageAttachment {
    filename: string,
    height: number,
    id: string,
    proxy_url: string,
    size: number,
    url: string,
    width: number,
  }

  export interface MessageEmbed {
    author?: {
      icon_url?: string,
      name?: string,
      proxy_icon_url?: string,
      url?: string,
    },
    color?: number,
    description?: string,
    fields?: Array<{
      inline?: boolean,
      name: string,
      value: string,
    }>,
    footer?: {
      icon_url?: string,
      proxy_icon_url?: string,
      text: string,
    },
    image?: {
      height?: number,
      proxy_url?: string,
      url?: string,
      width?: number,
    },
    provider?: {
      name?: string,
      url?: string,
    },
    reference_id?: string,
    thumbnail?: {
      height?: number,
      proxy_url?: string,
      url?: string,
      width?: number,
    },
    timestamp?: string,
    title?: string,
    type?: string,
    url?: string,
    video?: {
      height?: number,
      url?: string,
      width?: number,
    },
  }

  export interface User {
    avatar: null | string,
    bot: boolean,
    discriminator: string,
    id: string,
    username: string,
  }
}
