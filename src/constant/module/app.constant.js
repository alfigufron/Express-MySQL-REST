const status = {
  ONGOING: "ONGOING",
  DONE: "DONE",
  PENDING: "PENDING",
};

const http_messages = {
  VALIDATION_ERROR: "Validation Error",
  SERVER_ERROR: "Internal Server Error",
};

const http_statuses = {
  SUCCESS: "Success",
  REDIRECTED: "Redirected",
  CLIENT_ERROR: "Client Error",
  SERVER_ERROR: "Server Error",
  UNKNOWN_ERROR: "Unknown Error",
};

export default {
  STATUS: status,
  ALL_STATUS: Object.keys(status).map(key => status[key]),
  HTTP: {
    MESSAGE: http_messages,
    STATUS: http_statuses,
  },
};
