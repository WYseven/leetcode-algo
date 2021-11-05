/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {

    if(n <= 1) return isBadVersion(n)

    let start = 0, end = n;

    while(start < end) {
      let middle = Math.floor((start + end)/2)
      // 为错误版本，则往前推进
      if(isBadVersion(middle)) {
        end = middle
      }else {
        start = middle + 1
      }
    }
    return end
  };
};