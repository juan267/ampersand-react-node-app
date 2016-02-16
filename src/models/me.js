import Model from 'ampersand-model'

export default Model.extend({
  initialize(){
    this.token = window.localStorage.token

    this.on("change:token", this.changeToken)
  },
  props: {
    id: "number",
    login: "string",
    avatar_url: "string"
  },
  session: {
    token: "string"
  },
  changeToken(){
    window.localStorage.token = this.token
  }
})
