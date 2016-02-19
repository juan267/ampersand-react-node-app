import Model from 'ampersand-model'
import LabelCollection from './label_collection'
import githubMixin from '../helpers/githubMixin.js'

export default Model.extend(githubMixin, {
  url(){
    return `https://api.github.com/repos/${this.full_name}`
  },
  props: {
    id: "number",
    name: "string",
    full_name: "string",
  },
  collections: {
    labels: LabelCollection
  },
  fetch(){
    Model.prototype.fetch.apply(this, arguments)
    this.labels.fetch()
  },
  derived: {
    fullUrl: {
      deps: ['full_name'],
      fn(){
        return `/repos/${this.full_name}`
      }
    }
  }
})
