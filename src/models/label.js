import Model from "ampersand-model"

export default Model.extend({
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
