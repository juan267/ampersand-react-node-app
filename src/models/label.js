import Model from "ampersand-model"
import githubMixin from '../helpers/githubMixin'

export default Model.extend(githubMixin,{
  idAttribute: "name",
  props: {
    url: "string",
    name:"string",
    color: "string"
  },
  session: {
    isEditing:{
      type: "boolean",
      default: false
    }
  }
})
