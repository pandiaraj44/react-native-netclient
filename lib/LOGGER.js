import RNETWORK from './RNETWORK';

export default class LOGGER {

  static log(message, error){
    if(RNETWORK.DEBUG_ENABLED == true){
      if(error){
        console.log(message, error);
      }else{
        console.log(message);
      }
    }
  }

}
