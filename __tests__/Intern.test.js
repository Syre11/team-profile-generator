const Intern = require('../lib/Intern');

describe('', () => {
  it("Creates Intern object", () => {
    // Arrange/Act
    const intern = new Intern();
    // Assert
    expect(typeof(intern)).toBe("object");
  });

  it("Properly uses school input", () => {
    // Arrange/Act
    const intern = new Intern('Rigby', 42, 'therealtrashboat@hotmail.com', 'High School University');
    // Assert
    expect(intern.school).toBe('High School University');
  });

  it("Gets Intern School", () => {
    // Arrange/Act
    const intern = new Intern('Rigby', 42, 'therealtrashboat@hotmail.com', 'High School University');
    // Assert
    expect(intern.school).toBe('High School University')
  });

  it("Gets Employee role", () => {
    // Arrange/Act
    const intern = new Intern('Rigby', 42, 'therealtrashboat@hotmail.com', 'High School University');
    // Assert
    expect(intern.getRole()).toBe('Intern');
  });
});