export enum WhitelistStatus {
  NONE = "NONE",
  SUBMITTED = "SUBMITTED",
  REQUEST_FOR_INFO = "REQUEST_FOR_INFO",
  DENIED = "DENIED",
  ACCEPTED = "ACCEPTED",
}

export default interface User {
  id: string;
  email: string;
  display: string;
  whitelist: { status: WhitelistStatus; feedback: string };
}
