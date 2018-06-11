const schedule = require('node-schedule');

class Session {
  constructor(portfolio, socket) {
    this.portfolio = portfolio;
    this.socket = socket;
    this.scheduleJob = null;
  }

  startToRun() {
    this.scheduleJob = schedule.scheduleJob(
        '/30 * * * * *', () => { this.runOneIteration(); });
  }

  stopRunning() { this.scheduleJob.cancel(); }

  runOneIteration() {
    this.reCalc();
    this.publish();
  }

  reCalc() {}

  publish() { this.socket.emit(); }
}