import { TextBasedChannel, TextChannel } from 'discord.js';

/**
 * `channel instanceof TextChannel` の wrapper
 * @param channel 正体不明のチャンネルオブジェクト. `reaction.message.channel` から取る
 */
export const isTextChannel = (
  channel: TextBasedChannel
): channel is TextChannel => channel instanceof TextChannel;
