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

test('Test Jtmdb has version 3 search service', () => {
  expect(jtmdb.search.getVersion()).toBe('3');
});

test('Test Jtmdb has version 3 movies service', () => {
  expect(jtmdb.movies.getVersion()).toBe('3');
});
