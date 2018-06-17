import axios from 'axios';
import io from 'socket.io-client';

const GET_PORTFOLIOS = 'GET_PORTFOLIOS';
const CREATE_PORTFOLIO = 'CREATE_PORTFOLIO';
const SET_CURRENT_PORTFOLIO = 'SET_CURRENT_PORTFOLIO';
const UPSERT_SESSION_SECURITIES = 'UPSERT_SESSION_SECURITIES';
const CLEAR_SESSION_SECURITIES = 'CLEAR_SESSION_SECURITIES';
const SET_SOCKET = 'SET_SOCKET';

const getPortfolios = myPortfolios => ({type: GET_PORTFOLIOS, myPortfolios});
const createPortfolio = newPortfolio =>
    ({type: CREATE_PORTFOLIO, newPortfolio});
export const setCurrentPortfolio = currentPortfolioId =>
    ({type: SET_CURRENT_PORTFOLIO, currentPortfolioId});

const upsertSessionSecurities = sessionSecurities =>
    ({type: UPSERT_SESSION_SECURITIES, sessionSecurities});

export const clearSessionSecurities = () => ({type: CLEAR_SESSION_SECURITIES});
const setSocket = (socket) => ({type: SET_SOCKET, socket});

export const fetchPortfolios = (userId) => {
  return async dispatch => {
    const {data} = await axios.get(`/api/portfolios/user/${userId}`);
    dispatch(getPortfolios(data));
  };
};

export const subscribePortfolio = (portfolioId) => {
  return dispatch => {
    const socket =
        io(window.location.origin, {query: {portfolioId: portfolioId}});
    dispatch(setSocket(socket));
    socket.on('data_update', sessionSecurities => {
      dispatch(upsertSessionSecurities(sessionSecurities));
    });
  };
};

export const addPortfolio = (userId) => {
  return async dispatch => {
    const {data} = await axios.post(`/api/user/${userId}`);
    dispatch(createPortfolio(data));
  };
};

const initialState = {
  myPortfolios: [],
  currentPortfolioId: -1,
  sessionSecurities: new Map(),
  socket: null
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PORTFOLIOS:
      return {...state, myPortfolios: action.myPortfolios};
    case CREATE_PORTFOLIO:
      return {
        ...state,
        myportfolios: [...state.myfortfolios, action.newPortfolio]
      };
    case SET_CURRENT_PORTFOLIO:
      return {...state, currentPortfolioId: action.currentPortfolioId};
    case UPSERT_SESSION_SECURITIES: {
      const oldSessionSecurities = state.sessionSecurities;
      const newSessionSecurities = new Map();
      oldSessionSecurities.forEach((value, key) => {
        newSessionSecurities.set(key, value);
      });

      action.sessionSecurities.forEach(sessionSecurity => {
        if (newSessionSecurities.has(sessionSecurity.id)) {
          newSessionSecurities.set(
              sessionSecurity.id,
              Object.assign(
                  {}, newSessionSecurities.get(sessionSecurity.id),
                  sessionSecurity));
        } else {
          newSessionSecurities.set(sessionSecurity.id, sessionSecurity);
        }
      });
      return {...state, sessionSecurities: newSessionSecurities};
    }
    case CLEAR_SESSION_SECURITIES: {
      if (state.socket) {
        state.socket.close();
      }
      return {...state, sessionSecurities: new Map(), socket: null};
    }
    case SET_SOCKET:
      return {...state, socket: action.socket};
    default:
      return state;
  }
};

export default portfolioReducer;
