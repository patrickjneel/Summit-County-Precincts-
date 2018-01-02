import React, { Component} from 'react';
import { connect } from 'react-redux';
import Helper from '../../helper/HelperFunctions';
import parsedData from '../../helper/precinct8';
import { addData } from '../../actions/Actions';

 

const helper = new Helper(parsedData)

class Data extends Component {


componentDidMount() {
  // console.log(helper.countyData(parsedData))
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
  console.log(store)
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
