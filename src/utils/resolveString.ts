import ms from "ms";

export function ResolveSpotifyURL(id: string | undefined): string {
  return id ? "https://i.scdn.co/image/" + id : "";
}

export function ResolveActivity(activity: string) {
  switch(activity){
    case "PLAYING":
      return "Is playing"
    case "STREAMING":
      return "Is streaming"
    case "LISTENING":
      return "Is listening"
    case "WATCHING":
      return "Is watching"
    case "COMPETING":
      return "Is competing"
  }
}

export function ResolveTimestamp(time: number) {
  const date = new Date().getTime();
  return ms(date - time, {long: true});
}
