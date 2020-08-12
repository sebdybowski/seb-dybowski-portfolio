import { throwError } from './throwError';

export const fetcher = async (url, options = {}) => {
  if (url) {
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  throwError('No url provided to the fetcher method.');
};