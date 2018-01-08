import React, { Component} from 'react';
import { connect } from 'react-redux';
import Helper from '../../helper/HelperFunctions';
import parsedData from '../../helper/precinct8';
import { addData } from '../../actions/Actions';
import PropTypes from 'prop-types';
import Papaparse from 'papaparse';
import csv from '../../helper/precinct8.csv';

 

const helper = new Helper(parsedData)

export class Data extends Component {

componentDidMount() {

  this.props.addData(helper.countyData(parsedData))
}

render() {
  return (
    <div>
    </div>
  )
}

}

export const mapStateToProps = (store) => {
  return {
    data: store.data
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addData: (data) => {  
      dispatch(addData(data))

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);

Data.propTypes = {
  data: PropTypes.array,
  addData: PropTypes.func
};
