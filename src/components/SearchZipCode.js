import { changeFullAddress, changeIsLoading, changeZipCode, changeErrText } from '../actions';
import { connect } from 'react-redux';
import React from 'react';
import Form from './Form';
import { bindActionCreators } from 'redux'
import Axios from 'axios';

const SearchZipCode = (state) => {
  const { zipCode, errText, fullAddress, isLoading, changeZipCode, changeFullAddress, changeIsLoading, changeErrText } = state;

  const changeFormText = (e) => {
    changeZipCode(e.target.value)
  }

  const searchZipCode = () => {
    changeIsLoading(true)
    Axios({
      method: 'GET',
      url: 'https://api.zipaddress.net/',
      params: { zipcode: zipCode }
    }).then((response) => {
      response.data.code === 200 ?
        changeFullAddress(response.data.data.fullAddress) : changeErrText(response.data.message)
    })
  }


  return (
    <div>
      {errText}
      <Form
        value={zipCode}
        onChange={changeFormText}
        onClick={searchZipCode}
        text='search' />
      {isLoading ? 'Now Loading...' : fullAddress}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    zipCode: state.SearchZipCode.zipCode,
    errText: state.SearchZipCode.errText,
    fullAddress: state.SearchZipCode.fullAddress,
    isLoading: state.SearchZipCode.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { changeFullAddress, changeIsLoading, changeZipCode, changeErrText }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SearchZipCode);
