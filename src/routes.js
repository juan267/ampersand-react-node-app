import Router from 'ampersand-router'
import React from 'react'
import LocalLinks from './localLinks.js'
import Layout from './layout.js'
import PublicPage from './pages/public.js'
import ReposPage from './pages/repos.js'

export default Router.extend({
  routes: {
    "": "public",
    "repos": "repos"
  },
  renderPage(page, opts={layout: true}){
    if (opts.layout) {
        page = (
          <Layout>
            {page}
          </Layout>
      )
    }
    page = (
      <LocalLinks>
        {page}
      </LocalLinks>
    )
    React.render(page, document.body)
  },
  public(){
    this.renderPage(<PublicPage/>, {layout: false})
  },

  repos(){
    this.renderPage(<ReposPage/>)
  }
})


