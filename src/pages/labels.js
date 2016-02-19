import React from 'react'
import LabelItem from '../components/label-item'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
  mixins: [ampersandMixin],
  render() {
    const {labels} = this.props
    return (
      <div>
      <h1>Repo Labels</h1>
      <ul>
        {labels.map((label)=> {
          return <LabelItem key={label.name} label={label}/>
        })}
      </ul>
      </div>
    );
  }
})
