import React from 'react'
import LabelsPage from './labels'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  render() {
    const {repo} = this.props
    // const {labels} = this.props
    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <LabelsPage labels={repo.labels}/>
      </div>
    );
  }
})
