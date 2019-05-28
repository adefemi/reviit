import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./DatePicker.css";
class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      calendarFocused: false
    };
  }

  onDateChange = newDate => {
    this.setState({ date: newDate });
    this.props.getDate(this.state.date.format("YYYY-MM-DD"));
  };

  onFocusChange = () => {
    this.setState(state => ({
      calendarFocused: !state.calendarFocused
    }));
  };

  render() {
    return (
      <div className="DatePicker">
        <SingleDatePicker
          date={this.state.date}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={this.props.numberOfMonths}
        />
      </div>
    );
  }
}

DatePicker.propTypes = {
  date: PropTypes.object,
  getDate: PropTypes.func.isRequired,
  numberOfMonths: PropTypes.number
};

DatePicker.defaultProps = {
  date: moment(),
  focused: false,
  numberOfMonths: 1
};

export default DatePicker;
