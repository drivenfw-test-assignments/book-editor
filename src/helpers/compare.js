import { ASC } from 'def'


export const createCompareNumbers = (direction, field) =>
  direction === ASC
    ? (a, b) => a[field] - b[field]
    : (a, b) => b[field] - a[field]

export const createCompareStrings = (direction, field) =>
  direction === ASC
    ? (a, b) => {
        if (a[field] > b[field]) return 1
        if (a[field] < b[field]) return -1
        return 0
      }
    : (a, b) => {
        if (a[field] < b[field]) return 1
        if (a[field] > b[field]) return -1
        return 0
      }

