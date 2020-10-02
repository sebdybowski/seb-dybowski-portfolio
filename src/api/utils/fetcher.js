import { throwError } from './throwError';

export async function fetcher(url, options = {}) {
  if (url) {
    try {
      const response = await (await fetch(url, options)).json();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  throwError('No url provided to the fetcher method.');
  return false;
}
