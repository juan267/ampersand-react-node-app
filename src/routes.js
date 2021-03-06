import Router from 'ampersand-router'
import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import LocalLinks from './localLinks.js'
import Layout from './layout.js'
import PublicPage from './pages/public.js'
import ReposPage from './pages/repos.js'
import RepoDetail from './pages/repo-detail.js'

export default Router.extend({
  routes: {
    "": "public",
    "repos": "repos",
    'login': 'login',
    'auth/callback?:query': 'authCallback',
    'logout': 'logout',
    'repos/:owner/:name': 'repoDetail',
    'repos/:owner/:name/labels': 'repoLabels'
  },
  renderPage(page, opts={layout: true}){
    if (opts.layout) {
        page = (
          <Layout me={app.me}>
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
    this.renderPage(<ReposPage repos={app.me.repos}/>)
  },
  repoDetail(owner, name){
    const model = app.me.repos.getByFullName(`${owner}/${name}`)
    this.renderPage(<RepoDetail repo={model} labels={model.labels}/>)
  },
  repoLabels(owner, name){
    this.renderPage(<LabelsPage labels={app.me.repos.getByFullName(`${owner}/${name}`).labels}/>)
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
    xhr({
      url: `http://gatekeeper.herokuapp.com/authenticate/${response.code}`,
      json: true
    },(err, req, body) =>{
      console.log(body)
      app.me.token = body.token
      this.redirectTo('/repos')
    })
  },
  logout(){
    window.localStorage.clear()
    window.location = '/'
  }
})


