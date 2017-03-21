export default class TypeCheck{

  static isObject(obj) {
    return (Object.prototype.toString.call(obj) === '[object Object]');
  }

  static isArray(arr) {
    return (Object.prototype.toString.call(arr) === '[object Array]');
  }

  static isString(str) {
    return (Object.prototype.toString.call(str) === '[object String]');
  }

  static isEmpty(value) {
    return (value === undefined || value === null || value.trim() === '');
  }

  static isEmptyObject(value) {
    return (value === undefined || value === null);
  }

  static isValidUrl(url) {
    let regx = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return regx.test(url)
  }

}
