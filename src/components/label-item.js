import React from 'react';
import AmpersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [AmpersandMixin],
  onEditClick(){
    this.props.label.isEditing = true
  },
  onCancelClick(){
    this.props.label.isEditing = false
  },
  destroyLabel(){
    this.props.label.destroy()
  },
  onEditChange(event){
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
  },
  getInitialState(){
    const {name, color} = this.props.label
    return {
      name,
      color
    }
  },
  render() {
    const {label} = this.props
    let content
    if(label.isEditing){
      content = (<form className='label'>
                  <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
                  <input name='name' value={this.state.name} onChange={this.onEditChange}/>
                  <input name='color'/>
                  <button type='submit' className='button button-small'>Save</button>
                  <button type='button' className='button button-small button-unstyled' onClick={this.onCancelClick}>cancel</button>
                </form>
                )
      }else {
        content = (<div className='label'>
                  <span className='label-color' style={{backgroundColor: `#${label.color}`}}>&nbsp;</span>
                  <span>{label.name}</span>
                  <span className='octicon octicon-pencil' onClick={this.onEditClick}></span>
                  <span className='octicon octicon-x' onClick={this.destroyLabel}></span>
                </div>
                  )
      }
    return (
      <div>{content}</div>
    );
  }
});
