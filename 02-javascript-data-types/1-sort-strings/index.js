/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortedArray = [...arr];

  const compareFn = (a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});

  if (param === 'asc') {
    return sortedArray.sort((a, b) => compareFn(a, b));
  } else {
    return sortedArray.sort((a, b) => compareFn(b, a));
  }
}
