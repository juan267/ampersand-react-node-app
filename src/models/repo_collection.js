import Collection from 'ampersand-rest-collection'
import githubMixin from '../helpers/githubMixin.js'
import Repo from './repo.js'

export default Collection.extend(githubMixin,{
  url: "https://api.github.com/user/repos",

  model: Repo
})
