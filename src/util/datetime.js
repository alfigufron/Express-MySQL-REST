import moment from "moment";

function getWithFormat(format) {
  return moment().format(format);
}

function datetimeLog() {
  return getWithFormat("DD MMM YYYY HH:mm:ss");
}

export { getWithFormat, datetimeLog };
