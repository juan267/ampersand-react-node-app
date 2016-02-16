import app from 'ampersand-app'
import Me from './models/me.js'
import React from 'react'
import Router from './routes'
require('./styles/main.styl')


app.extend({
  init(){
    this.me = new Me()
    this.router = new Router()
    this.router.history.start()
  }
})

window.app = app
app.init()









// Basic react component
// const Hello = React.createClass({
//   render (){
//     return <div><h1>Hola como estas :{this.props.name}</h1></div>
//   }
// })

// React.render(<Hello name="juan"/>, document.body)
