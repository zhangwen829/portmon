import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import gotPortfolios from '../store/portfolio';

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
    console.log('component did mount');
    console.log('PROP', this.props);
    this.props.gotPortfolios(1);
    console.log('_______');
  }

  handleChange = event => {
    this.setState({ currentPortfolio: event.target.value });
  };

  render() {
    const { classes, allPortfolioMetadata } = this.props;

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
              allPortfolioMetadata.map(portfolioMetdata =>
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
  allPortfolioMetadata: state.portfolios,
});

const mapDispatchToProps = dispatch => {
  return {
    gotPortfolios: (userId) => dispatch(gotPortfolios(1)),
  }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PortfolioSelector));
