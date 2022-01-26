import { EventEmitter } from "events";
import path from "path";
import { Worker } from "worker_threads";
import WorkerPoolTaskInfo from "./task-info";

const STATUS = {
  IDLE: Symbol("idle"),
  BUSY: Symbol("busy"),
};

class WorkerPool extends EventEmitter {
  constructor(num_threads, worker_file) {
    super();

    this.num_threads = num_threads;
    this.workers_file = worker_file;
    this.workers = [];
    this.free_workers = [];
  }

  addNewWorker() {
    const worker = new Worker(path.resolve(this.workers_file));

    worker.on("message", res => {
      worker[STATUS.BUSY].done(null, res);
      worker[STATUS.BUSY] = null;

      this.free_workers.push(worker);
      this.emit(STATUS.IDLE);
    });

    worker.on("error", err => {
      if (worker[STATUS.BUSY]) worker[STATUS.BUSY].done(err, null);
      else this.emit("error", err);

      this.workers.splice(this.workers.indexOf(worker), 1);
      this.addNewWorker();
    });

    this.workers.push(worker);
    this.free_workers.push(worker);
    this.emit(STATUS.IDLE);
  }

  runTask(task, callback) {
    if (this.free_workers.length === 0) {
      this.once(STATUS.IDLE, () => this.runTask(task.callback));
      return;
    }

    const worker = this.free_workers.pop();
    worker[STATUS.BUSY] = new WorkerPoolTaskInfo(callback);
    worker.postMessage(task);
  }

  close() {
    for (let i = 0; i < this.workers.length; i++) {
      this.workers[i].terminate();
    }
  }
}

export default WorkerPool;
