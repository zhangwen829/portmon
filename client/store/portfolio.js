import axios from 'axios';

const GET_PORTFOLIOS = 'GET_PORTFOLIOS';

const portfoliosByUser = [];

const getPortfolios = portfolios => ({type: GET_PORTFOLIOS, portfolios});

export const gotPortfolios = (userId) => {
  return async dispatch => {
    const {data} = await axios.get(`/api/user/${userId}`);
    dispatch(getPortfolios(data));
  };
};

const portfolioReducer = (state = portfoliosByUser, action) => {
  switch (action.type) {
    case GET_PORTFOLIOS:
      return action.portfolios;
    default:
      return state;
  }
};

export default portfolioReducer;
