export enum ServerStatuses {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UNKNOWN = "UNKNOWN",
}

export default interface ServerStatus {
  id: string;
  name: string;
  version: string;
  playercount: number;
  status: ServerStatuses;
}
