let MY = require('./myModule_scripts')

describe ('測試 double, triple', function () {
  test('2 * 2 = 4', function () {
    expect(MY.double(2)).toBe(4);
  });
  
  test('10 * 2 = 20', function () {
    expect(MY.double(10)).toBe(20);
  });
  
  test('0 * 2 = 4', function () {
    expect(MY.double(0)).toBe(0);
  });

  test('5 * 3 = 15', function () {
    expect(MY.triple(5)).toBe(15);
  });

  test('19 * 3 = 57', function () {
    expect(MY.triple(19)).toBe(57);
  });
}) ;
