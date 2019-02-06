import SearchZipCode from '../components/SearchZipCode';
import Axios from 'axios';
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
    {
      // changeFullAddress,
      // changeIsLoading,
      // changeZipCode,
      // changeErrText,
      searchZipCode: searchZipCode,
      changeFormText: changeFormText
    }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SearchZipCode);
