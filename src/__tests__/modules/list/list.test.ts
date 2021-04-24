import { List } from '../../../modules/list/list';
import { HttpClient } from '../../../modules/httpClient';

jest.mock('../../../modules/httpClient');

const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
const listApi = new List(httpClient);
const listId = 55;
const response = [{ name: 'foo' }];

beforeEach(() => {
  jest.clearAllMocks();
});

test('Test List getVersion returns v4', () => {
  expect(listApi.getVersion()).toBe('4');
});

test('Test get constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  listApi.get(listId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/4/list/${listId}`, null);
});

test('Test get constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    append_to_response: 'watch/providers',
  };
  listApi.get(listId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/4/list/${listId}`, params);
});

test('Test create constructs correct path with no params and returns correct data', () => {
  const mockHttpClientPost = jest.spyOn(httpClient, 'post');
  mockHttpClientPost.mockResolvedValue(response);
  const body = {
    name: 'Test List',
  };
  listApi.create(body).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientPost).toHaveBeenCalledTimes(1);
  expect(mockHttpClientPost).toHaveBeenCalledWith(`/4/list`, body, null);
});

test('Test update constructs correct path with no params and returns correct data', () => {
  const mockHttpClientPut = jest.spyOn(httpClient, 'put');
  mockHttpClientPut.mockResolvedValue(response);
  const body = {
    name: 'Test List',
  };
  listApi.update(listId, body).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientPut).toHaveBeenCalledTimes(1);
  expect(mockHttpClientPut).toHaveBeenCalledWith(`/4/list/${listId}`, body, null);
});

test('Test clear constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  listApi.clear(listId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/4/list/${listId}/clear`, null);
});

test('Test delete constructs correct path with no params and returns correct data', () => {
  const mockHttpClientDelete = jest.spyOn(httpClient, 'delete');
  mockHttpClientDelete.mockResolvedValue(response);
  listApi.delete(listId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientDelete).toHaveBeenCalledTimes(1);
  expect(mockHttpClientDelete).toHaveBeenCalledWith(`/4/list/${listId}`, null, null);
});

test('Test addItems constructs correct path with no params and returns correct data', () => {
  const mockHttpClientPost = jest.spyOn(httpClient, 'post');
  mockHttpClientPost.mockResolvedValue(response);
  const body = {
    items: [
      {
        media_type: 'movie',
        media_id: 550,
      },
    ],
  };
  listApi.addItems(listId, body).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientPost).toHaveBeenCalledTimes(1);
  expect(mockHttpClientPost).toHaveBeenCalledWith(`/4/list/${listId}/items`, body, null);
});

test('Test updateItems constructs correct path with no params and returns correct data', () => {
  const mockHttpClientPut = jest.spyOn(httpClient, 'put');
  mockHttpClientPut.mockResolvedValue(response);
  const body = {
    media_type: 'movie',
    media_id: 550,
    comment: "Don't talk about it.",
  };
  listApi.updateItems(listId, body).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientPut).toHaveBeenCalledTimes(1);
  expect(mockHttpClientPut).toHaveBeenCalledWith(`/4/list/${listId}/items`, body, null);
});

test('Test removeItems constructs correct path with no params and returns correct data', () => {
  const mockHttpClientDelete = jest.spyOn(httpClient, 'delete');
  mockHttpClientDelete.mockResolvedValue(response);
  const body = {
    items: [
      {
        media_type: 'movie',
        media_id: 550,
      },
    ],
  };
  listApi.removeItems(listId, body).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientDelete).toHaveBeenCalledTimes(1);
  expect(mockHttpClientDelete).toHaveBeenCalledWith(`/4/list/${listId}/items`, body, null);
});

test('Test checkItemStatus constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    media_type: 'movie',
    media_id: 550,
  };
  listApi.checkItemStatus(listId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/4/list/${listId}/item_status`, params);
});
