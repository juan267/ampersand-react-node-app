import Collection from 'ampersand-rest-collection'
import Label from './label'
// import
import githubMixin from '../helpers/githubMixin'

export default Collection.extend(githubMixin,{
  url(){
    console.log(this.parent.url())
    return `https://api.github.com/repos/${this.parent.full_name}/labels`
  },


  model: Label
})
