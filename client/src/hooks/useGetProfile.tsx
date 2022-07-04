import axios from 'axios';
import { useDispatch } from 'react-redux';

const useGetProfile = () => {
  const dispatch = useDispatch();

  const profile = async (accessToken: string | null) => {
    await axios
      .get('/profile', {
        headers: {
          Authorization: `Bearer  ${accessToken}`,
        },
      })
      .then((response) => {
        const data = { id: response.data.id, username: response.data.username };
        dispatch({ type: 'SET_LOGIN_USER', payload: data });
      });
  };
  return profile;
};
export default useGetProfile;
