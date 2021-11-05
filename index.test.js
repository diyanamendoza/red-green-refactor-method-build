const getMethod = require('./index.js');

describe('getMethod', () => {
    it('returns the method from a request', () => {
        const rawRequest = `DELETE / HTTP/1.1
Host: example.com
Accept-Language: us-en`;

        const method = getMethod(rawRequest);

        expect(method).toEqual('DELETE');
    })
})