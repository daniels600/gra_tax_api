const { calculatePAYE, calculatePensionContributions } = require('./utils/helper');

describe('Salary Calculations', () => {
  test('PAYE calculation', () => {
    expect(calculatePAYE(400)).toBe(0);
    expect(calculatePAYE(500)).toBe(4.9);
    
  });

  test('Pension contributions calculation', () => {
    const contributions = calculatePensionContributions(1000);
    expect(contributions.tier1Employer).toBe(130);
    expect(contributions.tier2Employee).toBe(55);
    
  });
});