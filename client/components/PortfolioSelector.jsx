import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchPortfolios, clearSessionSecurities, setCurrentPortfolio, subscribePortfolio } from '../store/portfolio';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing.unit * 5
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class PortfolioSelector extends React.Component {

  componentDidMount() {
    this.props.fetchPortfolios('c2df3660-d8c7-11e8-8705-9dfef989021f');
  }

  handleChange = event => {
    this.props.setCurrentPortfolio(event.target.value);
    this.props.clearSessionSecurities();
    this.props.subscribePortfolio(event.target.value);
  };

  render() {
    const { classes, myPortfolioMetadata, currentPortfolioId } = this.props;
    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel>My Portfolios</InputLabel>
          <Select
            value={currentPortfolioId}
            onChange={this.handleChange}
          >
            <MenuItem value={-1}><em>None</em></MenuItem>
            {
              myPortfolioMetadata.map(portfolioMetdata =>
                <MenuItem key={portfolioMetdata.id} value={portfolioMetdata.id}>{portfolioMetdata.name}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  myPortfolioMetadata: state.portfolios.myPortfolios,
  currentPortfolioId: state.portfolios.currentPortfolioId
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolios: (userId) => dispatch(fetchPortfolios(userId)),
    setCurrentPortfolio: (currentPortfolioId) => dispatch(setCurrentPortfolio(currentPortfolioId)),
    subscribePortfolio: (currentPortfolioId) => dispatch(subscribePortfolio(currentPortfolioId)),
    clearSessionSecurities: () => dispatch(clearSessionSecurities())
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PortfolioSelector));
