const Session = require('../portcalc/Session');
const SessionPortfolio = require('../portcalc/SessionPortfolio');
module.exports = (io) => {
  io.on('connection', async (socket) => {
    const sessionPortfolio =
        await SessionPortfolio.create(socket.handshake.query.portfolioId);
    const session = new Session(socket, sessionPortfolio);
    session.startToRun();

    socket.on('disconnect', () => {
      session.stopRunning();
    });
  });
};
