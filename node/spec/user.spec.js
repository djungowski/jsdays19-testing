const User = require('../user');

describe('User', () => {
    it('can be created', () => {
      const user = new User();
      expect(user).toBeInstanceOf(User);
    });
});