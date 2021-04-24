import { Jtmdb } from '../index';
import { HttpClient } from '../modules/httpClient';

jest.mock('../modules/httpClient');

const jtmdb = new Jtmdb({ v4AccessToken: 'test_token' });

test('Test generic get method send correct parameters to http client and returns correct data', () => {
  expect(HttpClient).toHaveBeenCalledTimes(1);
  const response = [{ name: 'foo' }];
  const path = '/4/gimme/data';
  const params = {
    query: 'wat',
    page: 4,
  };
  const mockHttpClientGet = jest.spyOn(jtmdb.httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  jtmdb.get(path, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(path, params);
});

test('Test generic post method send correct parameters to http client and returns correct data', () => {
  expect(HttpClient).toHaveBeenCalledTimes(1);
  const response = [{ name: 'foo' }];
  const path = '/4/update/data';
  const postData = {
    value: 9,
  };
  const params = {
    session_id: 'test.session',
  };
  const mockHttpClientPost = jest.spyOn(jtmdb.httpClient, 'post');
  mockHttpClientPost.mockResolvedValue(response);
  jtmdb.post(path, postData, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientPost).toHaveBeenCalledTimes(1);
  expect(mockHttpClientPost).toHaveBeenCalledWith(path, postData, params);
});

test('Test generic put method send correct parameters to http client and returns correct data', () => {
  expect(HttpClient).toHaveBeenCalledTimes(1);
  const response = [{ name: 'foo' }];
  const path = '/4/update/data';
  const postData = {
    value: 9,
  };
  const params = {
    session_id: 'test.session',
  };
  const mockHttpClientPut = jest.spyOn(jtmdb.httpClient, 'put');
  mockHttpClientPut.mockResolvedValue(response);
  jtmdb.put(path, postData, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientPut).toHaveBeenCalledTimes(1);
  expect(mockHttpClientPut).toHaveBeenCalledWith(path, postData, params);
});

test('Test generic delete method send correct parameters to http client and returns correct data', () => {
  expect(HttpClient).toHaveBeenCalledTimes(1);
  const response = [{ name: 'foo' }];
  const path = '/4/delete/data';
  const params = {
    session_id: 'test.session',
  };
  const mockHttpClientDelete = jest.spyOn(jtmdb.httpClient, 'delete');
  mockHttpClientDelete.mockResolvedValue(response);
  jtmdb.delete(path, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientDelete).toHaveBeenCalledTimes(1);
  expect(mockHttpClientDelete).toHaveBeenCalledWith(path, params);
});

test('Test Jtmdb has version 4 list service', () => {
  expect(jtmdb.list.getVersion()).toBe('4');
});

test('Test Jtmdb has version 3 movies service', () => {
  expect(jtmdb.movies.getVersion()).toBe('3');
});

test('Test Jtmdb has version 3 people service', () => {
  expect(jtmdb.people.getVersion()).toBe('3');
});

test('Test Jtmdb has version 3 search service', () => {
  expect(jtmdb.search.getVersion()).toBe('3');
});
