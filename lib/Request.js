import TypeCheck from './TypeCheck';

export default class Request{

  static TYPES() {
    return {
      'string' : 1,
      'json' : 2,
      'form' : 3
    };
  }

  constructor(url) {
    this.setUrl(url);
    this.headers = {};
  }

  setUrl(url) {
    if (!TypeCheck.isString(url) || TypeCheck.isEmpty(url)) {
      throw new Error("Invalid url string");
    }else if(!TypeCheck.isValidUrl(url)){
      throw new Error("Invalid url string");
    }
    this.url = url;
  }

  getUrl() {    
    return this.url;
  }

  addHeader(key, value) {
    if (TypeCheck.isObject(key) || TypeCheck.isArray(key)) {
      throw new Error("Invalid header key type");
    }
    if (TypeCheck.isObject(value) || TypeCheck.isArray(value)) {
      throw new Error("Invalid header value type");
    }
    this.headers[key] = value;
  }

  addHeaders(headersObj) {
    if (!TypeCheck.isObject(headersObj)) {
      throw new Error("Invalid header object type");
    }
    for (var property in headersObj) {
      this.headers[property] = headersObj[property];
    }
  }

  getHeaders() {
    return this.headers;
  }

  setStringData(stringData) {
    if (TypeCheck.isObject(stringData) || TypeCheck.isArray(stringData)) {
      throw new Error("Invalid string data");
    }
    this.stringData = stringData;
    this.type = Request.TYPES().string;
    this.data = stringData;
  }

  getStringData() {
    return this.stringData;
  }

  setFormData(fromData) {
    if (TypeCheck.isObject(fromData)) {
      this.fromData = fromData;
      this.type = Request.TYPES().form;
      this.data = Request.generateFormBody(this.formData);
    }else{
      throw new Error("Invalid form data params");
    }
  }

  getFormData() {
    return this.fromData;
  }

  setJsonData(jsonData) {
    if (TypeCheck.isObject(jsonData) || TypeCheck.isArray(jsonData)) {
      this.jsonData = jsonData;
      this.type = Request.TYPES().json;
      this.data = JSON.stringify(this.jsonData);
    }else{
      throw new Error("Invalid json data");
    }
  }
  getJsonData() {
    return this.jsonData;
  }

  getData() {
    return this.data;
  }

  getType() {
    return this.type;
  }

  static generateFormBody(requestObj) {
    let formBody = [];
    for (let property in requestObj) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(requestObj[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;
  }

  setQueryParams(queryParams) {
    if (TypeCheck.isObject(queryParams)) {
      this.queryParams = "?" + Request.generateFormBody(queryParams);
    }else{
      throw new Error("Invalid query params");
    }
  }

  getQueryParams() {
    return this.queryParams;
  }

}
