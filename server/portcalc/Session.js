const schedule = require('node-schedule');

class Session {
  constructor(socket, sessionPortfolio) {
    this.socket = socket;
    this.sessionPortfolio = sessionPortfolio;
  }

  /**
   * Schedule the session to run every 5 seconds.
   */
  startToRun() {
    this.runOneIteration();
    this.scheduleJob = schedule.scheduleJob('*/5 * * * * *', () => {
      this.runOneIteration();
    });
  }

  /**
   * Stop the session by canceling the schedule job.
   */
  stopRunning() {
    this.scheduleJob.cancel();
  }

  /**
   * Represents the work needs to be done in one run iteration (i.e. every 5
   * second).
   *
   * @private
   */
  runOneIteration() {
    this.sessionPortfolio.refresh();
    this.socket.emit('data_update', this.sessionPortfolio.publishDiff());
  }
}

module.exports = Session;
