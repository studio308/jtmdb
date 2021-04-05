import axios from 'axios';
import { HttpClient } from '../../modules/httpClient';

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

test('Test error is throw if token is an empty string', () => {
  expect(() => {
    const httpclient = new HttpClient({ v4AccessToken: '' });
  }).toThrow();
});

test('Test get with params constructs correct url and calls axios request', () => {
  const mockAxiosRequest = jest.spyOn(axios, 'request');
  mockAxiosRequest.mockResolvedValue({});
  const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
  httpClient.get('/test/endpoint', { foo: 'bar', baz: 'wat' });
  expect(mockAxiosRequest).toHaveBeenCalledTimes(1);
  expect(mockAxiosRequest).toHaveBeenCalledWith({
    method: 'get',
    url: 'https://api.themoviedb.org/test/endpoint?foo=bar&baz=wat',
    headers: {
      Authorization: `Bearer test.token`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
});

test('Test get with no params constructs correct url and calls axios request', () => {
  const mockAxiosRequest = jest.spyOn(axios, 'request');
  mockAxiosRequest.mockResolvedValue({});
  const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
  httpClient.get('/test/endpoint');
  expect(mockAxiosRequest).toHaveBeenCalledTimes(1);
  expect(mockAxiosRequest).toHaveBeenCalledWith({
    method: 'get',
    url: 'https://api.themoviedb.org/test/endpoint',
    headers: {
      Authorization: `Bearer test.token`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
});

test('Test post with params constructs correct url and calls axios request', () => {
  const mockAxiosRequest = jest.spyOn(axios, 'request');
  mockAxiosRequest.mockResolvedValue({});
  const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
  httpClient.post('/test/endpoint', { value: 9 }, { foo: 'bar', baz: 'wat' });
  expect(mockAxiosRequest).toHaveBeenCalledTimes(1);
  expect(mockAxiosRequest).toHaveBeenCalledWith({
    method: 'post',
    url: 'https://api.themoviedb.org/test/endpoint?foo=bar&baz=wat',
    headers: {
      Authorization: `Bearer test.token`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    data: {
      value: 9,
    },
  });
});

test('Test post with no params constructs correct url and calls axios request', () => {
  const mockAxiosRequest = jest.spyOn(axios, 'request');
  mockAxiosRequest.mockResolvedValue({});
  const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
  httpClient.post('/test/endpoint', { value: 9 });
  expect(mockAxiosRequest).toHaveBeenCalledTimes(1);
  expect(mockAxiosRequest).toHaveBeenCalledWith({
    method: 'post',
    url: 'https://api.themoviedb.org/test/endpoint',
    headers: {
      Authorization: `Bearer test.token`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    data: {
      value: 9,
    },
  });
});

test('Test delete with params constructs correct url and calls axios request', () => {
  const mockAxiosRequest = jest.spyOn(axios, 'request');
  mockAxiosRequest.mockResolvedValue({});
  const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
  httpClient.delete('/test/endpoint', { foo: 'bar', baz: 'wat' });
  expect(mockAxiosRequest).toHaveBeenCalledTimes(1);
  expect(mockAxiosRequest).toHaveBeenCalledWith({
    method: 'delete',
    url: 'https://api.themoviedb.org/test/endpoint?foo=bar&baz=wat',
    headers: {
      Authorization: `Bearer test.token`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
});

test('Test get with no params constructs correct url and calls axios request', () => {
  const mockAxiosRequest = jest.spyOn(axios, 'request');
  mockAxiosRequest.mockResolvedValue({});
  const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
  httpClient.delete('/test/endpoint');
  expect(mockAxiosRequest).toHaveBeenCalledTimes(1);
  expect(mockAxiosRequest).toHaveBeenCalledWith({
    method: 'delete',
    url: 'https://api.themoviedb.org/test/endpoint',
    headers: {
      Authorization: `Bearer test.token`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
});
