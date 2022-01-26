import { AsyncResource } from "async_hooks";

class WorkerPoolTaskInfo extends AsyncResource {
  constructor(callback) {
    super("WorkerPoolTaskInfo");
    this.callback = callback;
  }

  done(err, res) {
    this.runInAsyncScope(this.callback, null, err, res);
    this.emitDestroy();
  }
}

export default WorkerPoolTaskInfo;
