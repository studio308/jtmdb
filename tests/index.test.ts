import {Jtmdb} from '../src';

const jtmdb = new Jtmdb({v4AccessToken: 'test_token'})

test('Test Jtmdb has version 3 search service', () => {
    expect(jtmdb.search.getVersion()).toBe('3')
})

test('Test Jtmdb has version 3 movies service', () => {
    expect(jtmdb.movies.getVersion()).toBe('3')
})
