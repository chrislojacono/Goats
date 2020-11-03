import axios from 'axios';

const getGoats = () => new Promise((resolve, reject) => {
  axios.get('https://fir-cows-958ae.firebaseio.com/react-goats.json').then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default getGoats;
