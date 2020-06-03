import axios from 'axios';
import apiCalls from './apiCalls';

const axiosGetMock = jest.fn(() => Promise.resolve( {data : 'Hello'}));
axios.get = axiosGetMock;

test('testing getData function', async () => {
   const data = await apiCalls.getData();
    expect(axiosGetMock.mock.calls.length).toBe(1);
    expect(data).toBe('Hello')
})
