import { People } from '../../../modules/people/people';
import { HttpClient } from '../../../modules/httpClient';

jest.mock('../../../modules/httpClient');

const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
const peopleApi = new People(httpClient);
const personId = 550;
const response = [{ name: 'foo' }];

beforeEach(() => {
  jest.clearAllMocks();
});

test('Test People getVersion returns v3', () => {
  expect(peopleApi.getVersion()).toBe('3');
});

test('Test details constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.details(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}`, null);
});

test('Test details constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    append_to_response: 'watch/providers',
  };
  peopleApi.details(personId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}`, params);
});

test('Test changes constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.changes(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/changes`, null);
});

test('Test changes constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    start_date: '',
    end_date: '',
    page: 3,
  };
  peopleApi.changes(personId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/changes`, params);
});

test('Test movieCredits constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.movieCredits(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/movie_credits`, null);
});

test('Test movieCredits constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
  };
  peopleApi.movieCredits(personId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/movie_credits`, params);
});

test('Test tvCredits constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.tvCredits(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/tv_credits`, null);
});

test('Test tvCredits constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
  };
  peopleApi.tvCredits(personId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/tv_credits`, params);
});

test('Test combinedCredits constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.combinedCredits(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/combined_credits`, null);
});

test('Test combinedCredits constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
  };
  peopleApi.combinedCredits(personId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/combined_credits`, params);
});

test('Test externalIds constructs correct path and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.externalIds(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/external_ids`, null);
});

test('Test images constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.images(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/images`, null);
});

test('Test taggedImages constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.taggedImages(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/tagged_images`, null);
});

test('Test taggedImages constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
  };
  peopleApi.taggedImages(personId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/tagged_images`, params);
});

test('Test translations constructs correct path and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.translations(personId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/${personId}/translations`, null);
});

test('Test latest constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.latest().then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/latest`, null);
});

test('Test latest constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
  };
  peopleApi.latest(params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/latest`, params);
});

test('Test popular constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  peopleApi.popular().then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/popular`, null);
});

test('Test popular constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
  };
  peopleApi.popular(params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/person/popular`, params);
});
