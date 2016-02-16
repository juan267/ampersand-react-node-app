import Router from 'ampersand-router'
import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import LocalLinks from './localLinks.js'
import Layout from './layout.js'
import PublicPage from './pages/public.js'
import ReposPage from './pages/repos.js'

export default Router.extend({
  routes: {
    "": "public",
    "repos": "repos",
    'login': 'login',
    'auth/callback?:query': 'authCallback'
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
  },
  login(){
    window.location = "https://github.com/login/oauth/authorize?" + qs.stringify({
      client_id: "4df08905fc825f000f49",
      redirect_uri: window.location.origin + "/auth/callback",
      scope: "user, repo"
    })
  },
  authCallback(query){
    const response = qs.parse(query)
    console.log(response)
  }
})


