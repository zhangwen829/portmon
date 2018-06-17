import axios from 'axios';

const GET_PORTFOLIOS = 'GET_PORTFOLIOS';
const CREATE_PORTFOLIO = 'CREATE_PORTFOLIO';


const getPortfolios = myPortfolios => ({type: GET_PORTFOLIOS, myPortfolios});
const createPortfolio = newPortfolio =>
    ({type: CREATE_PORTFOLIO, newPortfolio});

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

const portfolioReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PORTFOLIOS:
      return action.myPortfolios;
    case CREATE_PORTFOLIO:
      return [...state, action.newPortfolio];
    default:
      return state;
  }
};

export default portfolioReducer;
