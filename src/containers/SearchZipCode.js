import SearchZipCode from '../components/SearchZipCode';
import { connect } from 'react-redux';
import { changeZipCode, changeIsLoading, fullAddressFetchRequested } from '../actions';

const mapStateToProps = (state) => {
  return {
    zipCode: state.SearchZipCode.zipCode,
    errText: state.SearchZipCode.errText,
    fullAddress: state.SearchZipCode.fullAddress,
    isLoading: state.SearchZipCode.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  searchZipCode: () => {
    dispatch(changeIsLoading(true));
    dispatch(fullAddressFetchRequested());
  },
  changeFormText: (e) => {
    dispatch(changeZipCode(e.target.value))
  }
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(SearchZipCode);
