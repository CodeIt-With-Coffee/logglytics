export enum LEVEL {
  TRACE = "TRACE",
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  FATAL = "FATAL",
}

export enum EVENT {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export interface Config {
  apiKey: string;
  projectId: string;
}

export type Logger = {
  log: (type: LEVEL, message: string) => void;
  event: (key: string | EVENT) => void;
  t: (message: string) => void;
  d: (message: string) => void;
  i: (message: string) => void;
  w: (message: string) => void;
  e: (message: string) => void;
  f: (message: string) => void;
  loginEvent: () => void;
  logoutEvent: () => void;
  EVENT: typeof EVENT;
  LEVEL: typeof LEVEL;
};
