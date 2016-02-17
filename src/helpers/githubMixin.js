import App from 'ampersand-app'
import Model from 'ampersand-model'

export default{
  ajaxConfig(){
    return {
      headers: {
        Authorization: `token ${app.me.token}`
      }
    }
  }
}
