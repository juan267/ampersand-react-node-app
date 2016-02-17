import Model from 'ampersand-model'
import githubMixin from '../helpers/githubMixin.js'

export default Model.extend(githubMixin,{
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
  }
})
