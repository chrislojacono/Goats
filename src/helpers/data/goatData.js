import axios from 'axios';

const baseUrl = 'https://fir-cows-958ae.firebaseio.com/react-goats';

const getGoats = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`)
    .then((resp) => {
      resolve(Object.values(resp.data));
    }).catch((error) => reject(error));
});

const addGoat = (goatObj) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}.json`, goatObj).then((response) => {
    axios.patch(`${baseUrl}/${response.data.name}.json`, { id: response.data.name }).then((patchResponse) => {
      resolve(patchResponse);
    }).catch((error) => reject(error));
  });
});

export default { getGoats, addGoat };
