import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchPortfolios } from '../store/portfolio';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 5
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
  state = {
    currentPortfolio: '',
  }
  componentDidMount() {
    this.props.fetchPortfolios(1);
  }

  handleChange = event => {
    this.setState({ currentPortfolio: event.target.value });
  };

  render() {
    const { classes, myPortfolioMetadata } = this.props;

    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel>My Portfolios</InputLabel>
          <Select
            value={this.state.currentPortfolio}
            onChange={this.handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
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
  myPortfolioMetadata: state.portfolios,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolios: (userId) => dispatch(fetchPortfolios(userId)),
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PortfolioSelector));
