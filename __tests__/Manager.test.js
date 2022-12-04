const Manager = require('../lib/Manager');

describe('', () => {
  it("Creates Manager object", () => {
    // Arrange/Act
    const manager = new Manager();
    // Assert
    expect(typeof(manager)).toBe("object");
  });

  it("Properly uses github input", () => {
    // Arrange/Act
    const manager = new Manager('Rigby', 42, 'therealtrashboat@hotmail.com', 12);
    // Assert
    expect(manager.officeNumber).toBe(12);
  });

  it("Gets Employee role", () => {
    // Arrange/Act
    const intern = new Manager('Rigby', 42, 'therealtrashboat@hotmail.com', 12);
    // Assert
    expect(intern.getRole()).toBe('Manager');
  });
});