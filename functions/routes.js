const express = require("express")
const { calculatePensionContributions, calculatePAYE, calculateNetSalary } = require("./utils/helper")
const logger = require("firebase-functions/logger");
const{ payloadSchema } = require("./utils/validations");

const router = express.Router()


router.get("/", async (req, res) => {
  return res.status(200).json("Welcome to the GRA Tax Calculator");
})

router.post("/calculate-gross", async (req, res) => {
  const { error, value } = payloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { desiredNetSalary, allowances } = value;

  try {
    let grossSalary = desiredNetSalary + allowances; // Initial guess
    let netSalary = calculateNetSalary(grossSalary, allowances);

    while (Math.abs(netSalary - desiredNetSalary) > 0.01) {
      grossSalary += (desiredNetSalary - netSalary) * 1.1; // Adjust gross salary
      netSalary = calculateNetSalary(grossSalary, allowances);
    }
  
    const basicSalary = grossSalary - allowances;
    const pensionContributions = calculatePensionContributions(basicSalary);
    const taxableIncome = grossSalary - pensionContributions.tier2Employee - pensionContributions.tier3Employee;
    const paye = calculatePAYE(taxableIncome);
  
    res.status(200).json({
      grossSalary: grossSalary.toFixed(2),
      basicSalary: basicSalary.toFixed(2),
      allowances: allowances.toFixed(2),
      paye: paye.toFixed(2),
      pensionContributions: {
        tier1Employee: pensionContributions.tier1Employee.toFixed(2),
        tier1Employer: pensionContributions.tier1Employer.toFixed(2),
        tier2Employee: pensionContributions.tier2Employee.toFixed(2),
        tier2Employer: pensionContributions.tier2Employer.toFixed(2),
        tier3Employee: pensionContributions.tier3Employee.toFixed(2),
        tier3Employer: pensionContributions.tier3Employer.toFixed(2),
      },
      netSalary: netSalary.toFixed(2),
    });

  } catch (error) {
    logger.error(error)

    return res.status(400).json({
      msg: "Something went wrong. Try again!"
    })
  }
})


module.exports = router;