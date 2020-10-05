import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.scss";
import { connect } from "react-redux";
import filterAction from "../../Redux/Actions/filter";

const Filter = ({ onChange, value }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={onChange}
        value={value}
        name="filter"
      ></input>
    </div>
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterAction(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
