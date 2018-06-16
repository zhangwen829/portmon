import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {withStyles} from '@material-ui/core/styles';
import React from 'react';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
    portfolio: '',
  };

  handleChange = event => {
    this.setState({portfolio: event.target.value});
  };

  render() {
    const {classes} = this.props;

    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='portfolio-simple'>My Portfolios</InputLabel>
          <Select
            value={this.state.portfolio}
            onChange={this.handleChange}
            inputProps={{
              name: 'portfolio',
              id: 'portfolio-simple',
            }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={1}>Portfolio #1</MenuItem>
            <MenuItem value={2}>Portfolio #2</MenuItem>
            <MenuItem value={3}>Portfolio #3</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(PortfolioSelector);
