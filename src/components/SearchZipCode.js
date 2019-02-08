import React from 'react';
import Form from './Form';
import PropTypes from 'prop-types'

const SearchZipCode = ({ errText, zipCode, isLoading, fullAddress, changeFormText, searchZipCode }) => {
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

SearchZipCode.propTypes = {
  errText: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fullAddress: PropTypes.string.isRequired,
  changeFormText: PropTypes.func.isRequired,
  searchZipCode: PropTypes.func.isRequired,
}

export default SearchZipCode;