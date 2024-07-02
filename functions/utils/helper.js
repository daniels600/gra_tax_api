
const calculatePensionContributions = (basicSalary) => {
  return {
    tier1Employee: 0,
    tier1Employer: basicSalary * 0.13,
    tier2Employee: basicSalary * 0.055,
    tier2Employer: 0,
    tier3Employee: basicSalary * 0.05,
    tier3Employer: basicSalary * 0.05,
  };
};

const calculatePAYE = (taxableIncome) => {
  if (taxableIncome <= 402) return 0;
  if (taxableIncome <= 512) return (taxableIncome - 402) * 0.05;
  if (taxableIncome <= 2984) return (512 - 402) * 0.05 + (taxableIncome - 512) * 0.10;
  if (taxableIncome <= 4216) return (512 - 402) * 0.05 + (2984 - 512) * 0.10 + (taxableIncome - 2984) * 0.175;
  if (taxableIncome <= 22752) return (512 - 402) * 0.05 + (2984 - 512) * 0.10 + (4216 - 2984) * 0.175 + (taxableIncome - 4216) * 0.25;
  return (512 - 402) * 0.05 + (2984 - 512) * 0.10 + (4216 - 2984) * 0.175 + (22752 - 4216) * 0.25 + (taxableIncome - 22752) * 0.30;
};


const calculateNetSalary = (grossSalary, allowances) => {
  let basicSalary = grossSalary - allowances;
  let pensionContributions = calculatePensionContributions(basicSalary);
  let taxableIncome = grossSalary - pensionContributions.tier2Employee - pensionContributions.tier3Employee;
  let paye = calculatePAYE(taxableIncome);
  return grossSalary - paye - pensionContributions.tier2Employee - pensionContributions.tier3Employee;
};


module.exports = {calculatePensionContributions, calculatePAYE, calculateNetSalary}