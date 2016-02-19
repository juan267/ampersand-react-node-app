import Collection from 'ampersand-rest-collection'
import githubMixin from '../helpers/githubMixin.js'
import Repo from './repo.js'

export default Collection.extend(githubMixin,{
  url: "https://api.github.com/user/repos",

  model: Repo,

  getByFullName(full_name){
    let model = this.findWhere({full_name: full_name})

    if (!model) {
      model = new Repo({full_name: full_name})
    }


    model.fetch()

    return model
  }
})
