import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context';
import { Types } from '../reducers';

function useFetch(query: any, page: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>('');
  const { dispatch } = useContext(AppContext);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      await axios
        .get('https://randomuser.me/api/?results=10')
        .then((res: any) =>
          dispatch({ type: Types.Add, payload: res.data.results })
        );
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [dispatch]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, page]);

  return { loading, error };
}

export default useFetch;
