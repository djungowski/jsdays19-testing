## Mocking mit Axios

Installation

```bash
npm init -y
npm install axios
npm install -D jasmine axios-mock-adapter
npx jasmine init
```

package.json

```javascript
"scripts": {
  "test": "jasmine"
},
```

node/user.js

```javascript
const axios = require('axios');

module.exports = class User {
  fetchAll() {
    return axios.get('/users');
  }
};
```

node/spec/user.spec.js

```javascript
const User = require('../user');

describe('User', () => {
    it('can be created', () => {
      const user = new User();
      expect(user).toBeInstanceOf(User);
    });
});
```

Tests ausführen

```bash
npm test
```

