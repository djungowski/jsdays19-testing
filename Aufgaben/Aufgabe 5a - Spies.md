# Aufgabe 5a - Spies 🕵️‍♀️🕵🏽‍♂️

Schreibe eine Funktion `async()`, die eine Funktion nach 400ms mit einem bestimmten Wert aufruft.

Teste, ob die Callbackfunktion mit dem übergebenen Wert aufgerufen wird

**Tipp**: `jasmine.createSpy()` erzeugt eine leere Spy-Funktion

### Signatur

```javascript
async(
	callback,
	callbackParam = 'Hallo Welt',
	timeout = 400
);
```

## Bonus für besonders fleißige Bienen 🐝🐝

Prüfe, dass die callback-Funktion nach 200ms noch nicht ausgeführt wurde, nach 400ms aber schon.