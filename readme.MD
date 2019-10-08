# Installation

```bash
npm install
```

Step by step (Bei neuem Projekt)

```bash
npm init -y
npm install -D karma
npm install -D karma-jasmine karma-chrome-launcher jasmine-core
```

# Initialisierung

```bash
npx karma init
```

# Ausführung

Server starten:

```bash
npx karma start
```

Test ausführen: 

```bash
npx karma run
```

# schönere Ausgabe

```bash
npm install -D karma-mocha-reporter
```

in der karma.conf.js unter reporters: den Wert `['mocha']` eintragen.

# Links (weitere)

- https://github.com/sspringer82/programmingChallenges
- https://getsandbox.com/