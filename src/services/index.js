import Axios from 'axios';

const getFullAddress = (zipCode) => {
  return Axios({
    method: 'GET',
    url: 'https://api.zipaddress.net/',
    params: { zipcode: zipCode }
  }).then((response) => {
    return response.data.code === 200 ? { fullAddress: response.data.data.fullAddress } : { errText: response.data.message }
  })
}

export default getFullAddress;