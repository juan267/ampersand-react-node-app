import React from 'react'
import Router from './routes'
require('./styles/main.styl')


window.app = {
  init(){
    this.router = new Router()
    this.router.history.start()
  }
}

app.init()









// Basic react component
// const Hello = React.createClass({
//   render (){
//     return <div><h1>Hola como estas :{this.props.name}</h1></div>
//   }
// })

// React.render(<Hello name="juan"/>, document.body)
