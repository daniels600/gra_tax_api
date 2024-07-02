#  Gross Salary Calculator API

## Overview

This document provides instructions on how to use the Gross Salary Calculator API, designed to assist individuals in understanding the implications of their desired net salary and allowances on their gross salary, including detailed breakdowns such as Basic Salary, Total PAYE Tax, Employee Pension Contribution Amount, and Employer Pension amount.

## Getting Started

Before you begin, ensure you have access to the internet and a tool capable of sending HTTP requests, such as Postman, curl, or any HTTP client library in your preferred programming language.

### Prerequisites

- An active internet connection.
- Knowledge of HTTP and RESTful APIs.
- Access to a tool for sending HTTP requests.

### Installing

No installation is required to use this API. Simply follow the instructions below to start making requests.

## How to Use the API

The API endpoint is accessible at `https://api-4cff6j7esq-uc.a.run.app/v1/calculate-gross`. To use it, you need to send a POST request with a JSON payload containing your desired net salary and allowances.

### Request Payload Structure

The request payload should be structured as follows:

```json
{
    "desiredNetSalary": 400,
    "allowances": 90
}
```

- `desiredNetSalary`: The amount you wish to receive after all deductions (taxes, pension contributions, etc.). This value is used to calculate the necessary gross salary to achieve this net salary.
- `allowances`: Additional amounts that are added to the basic salary for taxation purposes. These could represent various allowances such as housing, transport, etc.

### Making the Request

Using curl, the command to make the request would look something like this:

```bash
curl -X POST https://api-4cff6j7esq-uc.a.run.app/v1/calculate-gross \
-H "Content-Type: application/json" \
-d '{"desiredNetSalary": 400, "allowances": 90}'
```

Or, if you're using Postman:

1. Open Postman and create a new request.
2. Set the request type to `POST`.
3. Enter the URL `https://api-4cff6j7esq-uc.a.run.app/v1/calculate-gross`.
4. Go to the `Body` tab, select `raw`, and choose `JSON` from the dropdown menu.
5. Paste the following JSON into the body field:

```json
{
    "desiredNetSalary": 400,
    "allowances": 90
}
```

6. Click `Send` to make the request.

## Response

Upon successful submission of the request, the API will return a JSON object containing the calculated gross salary and additional details, including:

- Basic Salary
- Total PAYE Tax
- Employee Pension Contribution Amount
- Employer Pension Amount

An example response might look like this:

```json
{
    "grossSalary": "5075.92",
    "basicSalary": "4985.92",
    "allowances": "90.00",
    "paye": "552.40",
    "pensionContributions": {
        "tier1Employee": "0.00",
        "tier1Employer": "648.17",
        "tier2Employee": "274.23",
        "tier2Employer": "0.00",
        "tier3Employee": "249.30",
        "tier3Employer": "249.30"
    },
    "netSalary": "4000.00"
}
```

## Troubleshooting

If you encounter a `403 Forbidden` error, it indicates that your request lacks the necessary permissions. Ensure you're using the correct URL and that your request is properly formatted. If the issue persists, contact the API provider for assistance.

## Contributing

Contributions to this project are welcome. Please feel free to reach out with any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Please note, the actual API endpoint (`https://api-4cff6j7esq-uc.a.run.app/v1/calculate-gross`) mentioned in the question seems to be inaccessible or incorrect based on the provided search results. Ensure you have the correct and up-to-date URL for the API you intend to use.

Citations:
