import { Movies } from '../../../modules/movies/movies';
import { HttpClient } from '../../../modules/httpClient';

jest.mock('../../../modules/httpClient');

const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
const moviesApi = new Movies(httpClient);
const movieId = 550;
const response = [{ name: 'foo' }];

beforeEach(() => {
  jest.clearAllMocks();
});

test('Test Movies getVersion returns v3', () => {
  expect(moviesApi.getVersion()).toBe('3');
});

test('Test details constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.details(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}`, null);
});

test('Test details constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    append_to_response: 'watch/providers',
  };
  moviesApi.details(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}`, params);
});

test('Test accountStates constructs correct path with session_id and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    session_id: 'test_session_id',
  };
  moviesApi.accountStates(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/account_states`, params);
});

test('Test accountStates constructs correct path with guest_session_id and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    guest_session_id: 'test_session_id',
  };
  moviesApi.accountStates(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/account_states`, params);
});

test('Test alternativeTitles constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.alternativeTitles(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/alternative_titles`, null);
});

test('Test alternativeTitles constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    country: 'US',
  };
  moviesApi.alternativeTitles(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/alternative_titles`, params);
});

test('Test changes constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.changes(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/changes`, null);
});

test('Test changes constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    start_date: '',
    end_date: '',
    page: 3,
  };
  moviesApi.changes(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/changes`, params);
});

test('Test credits constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.credits(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/credits`, null);
});

test('Test credits constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
  };
  moviesApi.credits(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/credits`, params);
});

test('Test externalIds constructs correct path and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.externalIds(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/external_ids`, null);
});

test('Test images constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.images(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/images`, null);
});

test('Test images constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    include_image_language: false,
  };
  moviesApi.images(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/images`, params);
});

test('Test keywords constructs correct path and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.keywords(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/keywords`, null);
});

test('Test lists constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.lists(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/lists`, null);
});

test('Test lists constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
  };
  moviesApi.lists(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/lists`, params);
});

test('Test recommendations constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.recommendations(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/recommendations`, null);
});

test('Test recommendations constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
  };
  moviesApi.recommendations(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/recommendations`, params);
});

test('Test releaseDates constructs correct path and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.releaseDates(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/release_dates`, null);
});

test('Test reviews constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.reviews(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/reviews`, null);
});

test('Test reviews constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
  };
  moviesApi.reviews(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/reviews`, params);
});

test('Test similar constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.similar(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/similar`, null);
});

test('Test similar constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
  };
  moviesApi.similar(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/similar`, params);
});

test('Test translations constructs correct path and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.translations(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/translations`, null);
});

test('Test videos constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.videos(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/videos`, null);
});

test('Test videos constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
  };
  moviesApi.videos(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/videos`, params);
});

test('Test watchProviders constructs correct path and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.watchProviders(movieId).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/${movieId}/watch/providers`, null);
});

test('Test rate constructs correct path with session_id params and returns correct data', () => {
  const mockHttpClientPost = jest.spyOn(httpClient, 'post');
  mockHttpClientPost.mockResolvedValue(response);
  const params = {
    session_id: 'test_session_id',
  };
  moviesApi.rate(movieId, 10, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientPost).toHaveBeenCalledTimes(1);
  expect(mockHttpClientPost).toHaveBeenCalledWith(`/3/movie/${movieId}/rating`, { value: 10 }, params);
});

test('Test rate constructs correct path with guest_session_id params and returns correct data', () => {
  const mockHttpClientPost = jest.spyOn(httpClient, 'post');
  mockHttpClientPost.mockResolvedValue(response);
  const params = {
    guest_session_id: 'test_session_id',
  };
  moviesApi.rate(movieId, 10, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientPost).toHaveBeenCalledTimes(1);
  expect(mockHttpClientPost).toHaveBeenCalledWith(`/3/movie/${movieId}/rating`, { value: 10 }, params);
});

test('Test deleteRating constructs correct path with session_id params and returns correct data', () => {
  const mockHttpClientDelete = jest.spyOn(httpClient, 'delete');
  mockHttpClientDelete.mockResolvedValue(response);
  const params = {
    session_id: 'test_session_id',
  };
  moviesApi.deleteRating(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientDelete).toHaveBeenCalledTimes(1);
  expect(mockHttpClientDelete).toHaveBeenCalledWith(`/3/movie/${movieId}/rating`, params);
});

test('Test deleteRating constructs correct path with guest_session_id params and returns correct data', () => {
  const mockHttpClientDelete = jest.spyOn(httpClient, 'delete');
  mockHttpClientDelete.mockResolvedValue(response);
  const params = {
    guest_session_id: 'test_session_id',
  };
  moviesApi.deleteRating(movieId, params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientDelete).toHaveBeenCalledTimes(1);
  expect(mockHttpClientDelete).toHaveBeenCalledWith(`/3/movie/${movieId}/rating`, params);
});

test('Test latest constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.latest().then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/latest`, null);
});

test('Test latest constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
  };
  moviesApi.latest(params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/latest`, params);
});

test('Test nowPlaying constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.nowPlaying().then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/now_playing`, null);
});

test('Test nowPlaying constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
    region: 'US',
  };
  moviesApi.nowPlaying(params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/now_playing`, params);
});

test('Test popular constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.popular().then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/popular`, null);
});

test('Test popular constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
    region: 'US',
  };
  moviesApi.popular(params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/popular`, params);
});

test('Test topRated constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.topRated().then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/top_rated`, null);
});

test('Test topRated constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
    region: 'US',
  };
  moviesApi.topRated(params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/top_rated`, params);
});

test('Test upcoming constructs correct path with no params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  moviesApi.upcoming().then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/upcoming`, null);
});

test('Test upcoming constructs correct path with correct params and returns correct data', () => {
  const mockHttpClientGet = jest.spyOn(httpClient, 'get');
  mockHttpClientGet.mockResolvedValue(response);
  const params = {
    language: 'en-US',
    page: 3,
    region: 'US',
  };
  moviesApi.upcoming(params).then((data) => expect(data).toEqual(response));
  expect(mockHttpClientGet).toHaveBeenCalledTimes(1);
  expect(mockHttpClientGet).toHaveBeenCalledWith(`/3/movie/upcoming`, params);
});
