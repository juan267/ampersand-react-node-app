import Model from 'ampersand-model'

export default Model.extend({
  url: "https://api.github.com/user",

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
    this.fetchInitialData()
  },
  fetchInitialData(){
    if (this.token) {
      this.fetch()
    }
  },
  ajaxConfig(){
    console.log(this.token)
    return {
      headers: {
        Authorization: `token ${this.token}`
      }
    }
  }
})
