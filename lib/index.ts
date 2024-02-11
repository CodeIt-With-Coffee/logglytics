import axios from "axios";
import { Config, EVENT, LEVEL, Logger } from "./types";

const BASE = "https://logglytics-backend.onrender.com";

const headers = () => {
  return {
    "Content-Type": "application/json",
  };
};

const postRequest = async (
  url: string,
  data?: any
): Promise<{
  status: boolean;
  data?: any | null;
  error?: string;
}> => {
  try {
    const response = await axios({
      method: "POST",
      data,
      headers: headers(),
      url,
    });
    return response.data as any;
  } catch (e) {
    console.error(e);
    return {
      status: false,
    };
  }
};

function logger(config: Config): Logger {
  const log = (type: LEVEL, message: string) => {
    postRequest(`${BASE}/api/log`, {
      ...config,
      type,
      message,
    })
      .then(console.log)
      .catch(console.error);
  };
  const event = (key: string | EVENT) => {
    postRequest(`${BASE}/api/event`, {
      ...config,
      key,
    })
      .then(console.log)
      .catch(console.error);
  };
  const t = (message: string) => log(LEVEL.TRACE, message);
  const d = (message: string) => log(LEVEL.DEBUG, message);
  const i = (message: string) => log(LEVEL.INFO, message);
  const w = (message: string) => log(LEVEL.WARN, message);
  const e = (message: string) => log(LEVEL.ERROR, message);
  const f = (message: string) => log(LEVEL.FATAL, message);
  const loginEvent = () => event(EVENT.LOGIN);
  const logoutEvent = () => event(EVENT.LOGOUT);
  return {
    log,
    event,
    t,
    d,
    i,
    w,
    e,
    f,
    loginEvent,
    logoutEvent,
    EVENT,
    LEVEL,
  };
}

export default logger;
