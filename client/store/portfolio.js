import axios from 'axios';

const GET_PORTFOLIOS = 'GET_PORTFOLIOS';
const ADD_PORTFOLIO = 'ADD_PORTFOLIO';


const getPortfolios = myPortfolios => ({type: GET_PORTFOLIOS, myPortfolios});
const addPortfolio = newPortfolio => ({type: ADD_PORTFOLIO, newPortfolio});

export const gotPortfolios = (userId) => {
  console.log('got portfolio');
  return async dispatch => {
    console.log('got portfolio 2');
    const {data} = await axios.get(`/api/user/${userId}`);
    console.log(data);
    dispatch(getPortfolios(data));
  };
};

export const addedPortfolio = (userId) => {
  return async dispatch => {
    const {data} = await axios.post(`/api/user/${userId}`);
    dispatch(addPortfolio(data));
  };
};

const portfolioReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case GET_PORTFOLIOS:
      return action.myPortfolios;
    case ADD_PORTFOLIO:
      return [...state, action.newPortfolio];
    default:
      return state;
  }
};

export default portfolioReducer;
