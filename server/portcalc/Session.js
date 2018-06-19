const schedule = require('node-schedule');

class Session {
  constructor(socket, sessionPortfolio) {
    this.socket = socket;
    this.sessionPortfolio = sessionPortfolio;
  }

  /**
   * Schedule the session to run every 2 seconds.
   * Industry standard is 5-seconds interval between each price publish.
   * Set it 2 seconds for demo purpose.
   */
  startToRun() {
    this.runOneIteration();
    this.scheduleJob = schedule.scheduleJob('*/2 * * * * *', () => {
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
   * Represents the work needs to be done in one run iteration
   *
   * @private
   */
  runOneIteration() {
    this.sessionPortfolio.refresh();
    this.socket.emit('data_update', this.sessionPortfolio.publishDiff());
  }
}

module.exports = Session;
