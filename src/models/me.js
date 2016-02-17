import Model from 'ampersand-model'
import RepoCollection from './repo_collection.js'
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
  collections: {
    repos: RepoCollection
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
      console.log(this)
      this.fetch()
      this.repos.fetch()
    }
  }
})
