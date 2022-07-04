const status = {
  ONGOING: "ONGOING",
  DONE: "DONE",
  PENDING: "PENDING",
};

export default {
  STATUS: status,
  ALL_STATUS: Object.keys(status).map(key => status[key]),
};
