export default interface DiscordUser {
  id: string;
  avatar_url: string;
  avatar_url_jpg: string;
  name: string;
  playing: string | null;
  status: string;
}
