/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

  let props = path.split('.');

  return (obj) => {
    for (const value of props) {
      if (obj.hasOwnProperty(value) && obj[value] !== undefined) {
        obj = obj[value];
      }
      else {
        return;
      }
    }
    return obj;
  };
}
