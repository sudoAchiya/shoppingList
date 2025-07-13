import axios, { AxiosRequestConfig } from 'axios';
import { configuration } from '@/config';

const DEFAULT_TIMEOUT = 10000;

console.log('API Base URL:', import.meta.env.VITE_ENV);

export const AXIOS_INSTANCE = axios.create({
  baseURL: configuration.VITE_API_BASE_URL,
  timeout: +(configuration.VITE_API_TIMEOUT ?? DEFAULT_TIMEOUT),
  headers: {
    'Content-Type': 'application/json',
    environment: configuration.VITE_ENV,
  },
  withCredentials: true,
});

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then(({ data }) => data);

  return promise;
};
