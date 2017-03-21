export default class Response{
  constructor(){
    this.status = 0;
    this.headers = {};
    this.url = '';
    this.body = '';
    this.error = null;
  }

  setStatus(status) {
    this.status = status;
  }
  getStatus() {
    return this.status;
  }

  setUrl(url) {
    this.url = url;
  }
  getUrl() {
    return this.url;
  }

  setHeaders(headers) {
    this.headers = headers;
  }
  getHeaders() {
    return this.headers;
  }

  setBody(body) {
    this.body = body;
  }

  getBodyString() {
    return this.body;
  }

  getBodyJson() {
    return JSON.parse(this.body);
  }

  setError(errorMessage, error){
    this.error = {
      message: errorMessage,
      error: error
    }
  }

  getError() {
    return this.error;
  }

  toString() {
    return JSON.stringify({
      status: this.status,
      headers: this.headers,
      url: this.url,
      body: this.body,
      error: this.error,
    });
  }

}
