import axios from 'axios';

const useRefreshToken = () => {
  const refresh = async () => {
    await axios
      .get('/auth/refresh')
      .then((response) => {
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
      })
      .catch((error) => {
        console.log(error, 'accessToken 재발급 실패');
      });
  };
  return refresh;
};

export default useRefreshToken;
