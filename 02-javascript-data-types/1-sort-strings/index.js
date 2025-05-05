/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortedArray = [...arr];

  const compareFn = (caseFirst) => (a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: caseFirst});

  if (param === 'asc') {
    return sortedArray.sort(compareFn('upper'));
  } else {
    return sortedArray.sort(compareFn('lower')).reverse();
  }
}
