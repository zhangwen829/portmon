import axios from 'axios';

const GET_PORTFOLIOS = 'GET_PORTFOLIOS';
const CREATE_PORTFOLIO = 'CREATE_PORTFOLIO';
const SET_CURRENT_PORTFOLIO = 'SET_CURRENT_PORTFOLIO';

const getPortfolios = myPortfolios => ({type: GET_PORTFOLIOS, myPortfolios});
const createPortfolio = newPortfolio =>
    ({type: CREATE_PORTFOLIO, newPortfolio});
export const setCurrentPortfolio = currentPortfolioId =>
    ({type: SET_CURRENT_PORTFOLIO, currentPortfolioId});

export const fetchPortfolios = (userId) => {
  return async dispatch => {
    const {data} = await axios.get(`/api/portfolios/user/${userId}`);
    dispatch(getPortfolios(data));
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
  currentPortfolioId: -1
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
    default:
      return state;
  }
};

export default portfolioReducer;
