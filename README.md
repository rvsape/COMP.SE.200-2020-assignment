# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

# Info
Travis: https://travis-ci.com/github/rvsape/COMP.SE.200-2020-assignment
Coveralls: https://coveralls.io/github/rvsape/COMP.SE.200-2020-assignment

[![Coverage Status](https://coveralls.io/repos/github/rvsape/COMP.SE.200-2020-assignment/badge.svg?branch=main)](https://coveralls.io/github/rvsape/COMP.SE.200-2020-assignment?branch=main)

# Usage
Setup: npm i

Run mocha tests: npm test

Run mocha tests with mochawesome-reporting: 
1. npm run test-with-report
2. npm run open-report

Run tests and get Istanbul-coverage report:
- npm run travis-test
