import { Account } from '../../../modules/account/account';
import { HttpClient } from '../../../modules/httpClient';

jest.mock('../../../modules/httpClient');

const httpClient = new HttpClient({ v4AccessToken: 'test.token' });
const accountApi = new Account(httpClient);
const response = [{ name: 'foo' }];

beforeEach(() => {
  jest.clearAllMocks();
});

test('Test Account getVersion returns v4', () => {
  expect(accountApi.getVersion()).toBe('4');
});
