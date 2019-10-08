# Setup weiteres Tooling

## DOM-Testing

Installlation

```bash
npm install jquery
npm install -D jasmine-jquery
mkdir test/fixtures
```

karma.conf.js

```javascript
files: [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
  'spec/support/karma-fixtures.js',
  ...
  'src/fixtures/*.html'
]
```

spec/support/karma-fixtures.js

```javascript
jasmine.getFixtures().fixturesPath = 'base/test/fixtures';
```

Verwendung:

```javascript
jasmine.getFixtures().set('<p id="hello"></p>');
```

oder

```javascript
jasmine.getFixtures().load('form.html');
```

## Headless Chrome

karma.conf.js

```javascript
browsers: ['HeadlessChrome'],
...
customLaunchers: {
  HeadlessChrome: {
    base: 'Chrome',
    flags: ['--headless', '--remote-debugging-port=9222'],
  },
},
```

## junit-reporter

Installation

```bash
karma-junit-reporter
```

karma.conf.js

```javascript
reporters: ['progress', 'junit'],
...
junitReporter: {
  outputDir: 'reports',
},
```

## karma-mocha-reporter (Schönere Ausgabe)

Installation

```bash
npm install -D karma-mocha-reporter
```

karma.conf.js

```javascript
reporters: ['mocha'],
```

