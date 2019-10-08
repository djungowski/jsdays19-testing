describe('Calc', () => {
  let calc;
  beforeEach(() => {
    // Arrange
    calc = new Calc();
    console.log('first beforeEach');
  });
  beforeEach(() => {
    console.log('second beforeEach');
  });

  afterEach(() => {console.log('afterEach')});
  beforeAll(() => {console.log('beforeAll')});
  afterAll(() => {console.log('afterAll')});

  describe('add', () => {
    beforeEach(() => {
      console.log('inner beforeEach');
    });

    afterEach(() => {
      console.log('inner afterEach');
    });

    it('should add 1 and 1 and return 2', () => {
      
      // Act
      const result = calc.add(1, 1);
      // Assert
      expect(result).toBe(2);
    });
    
    it('should add 42 and 23 and return 65', () => {
      const result = calc.add(42, 23);
      expect(result).toBe(65);
    });
    
    it('should not return a string', () => {
      const result = calc.add(42, 23);
      expect(result).not.toEqual(jasmine.any(String));
    });
    
    // NO! 😩
    it('should add 1 and 1 and return 2', () => {
      expect((new Calc()).add(1, 1)).toBe(2);
    });
  })
});