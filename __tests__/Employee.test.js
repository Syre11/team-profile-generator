const Employee = require('../lib/Employee');

describe('', () => {
  it("creates Employee object", () => {
    // Arrange/Act
    const employee = new Employee();
    // Assert
    expect(typeof(employee)).toBe("object");
  });

  it("Properly uses name input", () => {
    // Arrange/Act
    const employee = new Employee('Rigby');
    // Assert
    expect(employee.name).toBe('Rigby');
  });

  it("Properly uses id input", () => {
    // Arrange/Act
    const employee = new Employee('Rigby', 42);
    // Assert
    expect(employee.id).toBe(42);
  });

  it("Properly uses Email input", () => {
    // Arrange/Act
    const employee = new Employee('Rigby', 42, 'therealtrashboat@hotmail.com');
    // Assert
    expect(employee.email).toBe('therealtrashboat@hotmail.com');
  });

  it("Gets Employee name", () => {
    // Arrange/Act
    const employee = new Employee('Rigby');
    // Assert
    expect(employee.getName()).toBe('Rigby')
  });

  it("Gets Employee ID", () => {
    // Arrange/Act
    const employee = new Employee('Rigby', 42);
    // Assert
    expect(employee.getId()).toBe(42)
  });

  it("Gets Employee Email", () => {
    // Arrange/Act
    const employee = new Employee('Rigby', 42, 'therealtrashboat@hotmail.com');
    // Assert
    expect(employee.getEmail()).toBe('therealtrashboat@hotmail.com')
  });

  it("Gets Employee role", () => {
    // Arrange/Act
    const employee = new Employee('Rigby', 42, 'therealtrashboat@hotmail.com');
    // Assert
    expect(employee.getRole()).toBe('Employee')
  });
});