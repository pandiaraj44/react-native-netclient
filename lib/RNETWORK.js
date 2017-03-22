import Request from './Request';
import TypeCheck from './TypeCheck';
import LOGGER from './LOGGER';
import Response from './Response';

export default class RNETWORK{

  static DEBUG_ENABLED = false ;

  static get(request: Request, preExecuteCallback, postExecuteCallback){
    if (preExecuteCallback) {
      preExecuteCallback();
    }
    let url = request.getUrl();
    if(!TypeCheck.isEmpty(request.getQueryParams())){
      url = url + request.getQueryParams();
    }
    let response = new Response();
    try{
      fetch(url, {
        method: 'GET',
        headers: request.getHeaders(),
      }).then((apiResponse) => {
        LOGGER.log("URL----" + url +"/n Response----"+JSON.stringify(apiResponse));
        response.setStatus(apiResponse.status);
        response.setHeaders(apiResponse.headers.map);
        response.setUrl(apiResponse.url);
        response.setBody(apiResponse._bodyText);
        postExecuteCallback(response);
      }).catch((error) => {
        LOGGER.log("Error", error);
        response.setError("Network Connection Failed", error);
        postExecuteCallback(response);
      });
    }catch(error) {
      LOGGER.log("Error", error);
      response.setError("Request Failed. Please check the request details.", error);
      postExecuteCallback(response);
    }
  }

  static post(request: Request, preExecuteCallback, postExecuteCallback){
    if (preExecuteCallback) {
      preExecuteCallback();
    }
    let url = request.getUrl();
    if(!TypeCheck.isEmpty(request.getQueryParams())){
      url = url + request.getQueryParams();
    }
    let response = new Response();
    try{
      fetch(url, {
        method: 'POST',
        headers: request.getHeaders(),
        body: request.getData()
      }).then((apiResponse) => {
        LOGGER.log("URL----" + url +"/n Response----"+JSON.stringify(apiResponse));
        response.setStatus(apiResponse.status);
        response.setHeaders(apiResponse.headers.map);
        response.setUrl(apiResponse.url);
        response.setBody(apiResponse._bodyText);
        postExecuteCallback(response);
      }).catch((error) => {
        LOGGER.log("Error", error);
        response.setError("Network Connection Failed", error);
        postExecuteCallback(response);
      });
    }catch(error) {
      LOGGER.log("Error", error);
      response.setError("Request Failed. Please check the request details.", error);
      postExecuteCallback(response);
    }
  }

}
