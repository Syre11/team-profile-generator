const Engineer = require('../lib/Engineer');

describe('', () => {
  it("Creates Engineer object", () => {
    // Arrange/Act
    const engineer = new Engineer();
    // Assert
    expect(typeof(engineer)).toBe("object");
  });

  it("Properly uses github input", () => {
    // Arrange/Act
    const engineer = new Engineer('Rigby', 42, 'therealtrashboat@hotmail.com', 'TrashBoat');
    // Assert
    expect(engineer.github).toBe('TrashBoat');
  });

  it("Gets Engineer GitHub", () => {
    // Arrange/Act
    const engineer = new Engineer('Rigby', 42, 'therealtrashboat@hotmail.com', 'TrashBoat');
    // Assert
    expect(engineer.getGithub()).toBe('TrashBoat');
  });
  
  it("Gets Employee role", () => {
    // Arrange/Act
    const engineer = new Engineer('Rigby', 42, 'therealtrashboat@hotmail.com', 'TrashBoat');
    // Assert
    expect(engineer.getRole()).toBe('Engineer');
  });
});