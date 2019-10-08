const User = require('../user');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('User', () => {
    it('can be created', () => {
      const user = new User();
      expect(user).toBeInstanceOf(User);
    });

    describe('fetchAll()', () => {
        it('fetches all the users', async () => {
            const mock = new MockAdapter(axios);
            const user = new User();
            const usersOnServer = [
                {id: 1, name: 'Sebastian'},
                {id: 2, name: 'Dominik'}
            ];
            mock.onGet('/users').reply(200,usersOnServer);
            
            const {data: result} = await user.fetchAll();

            expect(result).toEqual(usersOnServer);
        });

        it('rejects the promise if http 500', async () => {
            const mock = new MockAdapter(axios);
            const user = new User();
            mock.onGet('/users').reply(500);

            try {
              await user.fetchAll();
            } catch(e) {
              expect(e.message).toBe('Request failed with status code 500');
            }
        });
    });
});