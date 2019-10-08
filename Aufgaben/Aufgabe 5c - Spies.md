# Aufgabe 5c - Spies 🕵️‍♀️🕵🏽‍♂️

Erweitere `getRandomNumber()` dahingehend, dass nur noch ganze Zahlen zwischen 1 und 10 zurückgegeben werden. Teste die expliziten Rückgabewerte sowie die tatsächlichen Zahlen, die in `Math.floor()` reingereicht werden

**Tipp**: `spyOn(Math, 'floor').and.callThrough();` ruft die Originalfunktionalität auf

## Berechnung

```javascript
Math.floor(Math.random() * 10);
```

