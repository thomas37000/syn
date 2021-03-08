/* eslint-disable no-console */
import axios from 'axios';

const API_URL = 'http://slideyour.net/api.php';

const getApi = async (onSuccess, onError) => {
  await axios.get(`${API_URL}`).then(
    (response) => {
      onSuccess(response.data);
      console.log(response.data);
    },
    (error) => onError(error)
  );
};

export default getApi;
