import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CheckboxInGroup, CheckboxSingle } from './subCheckbox'

class Checkbox extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ]),
    inGroup: PropTypes.bool.isRequired,
    checked: PropTypes.bool
  }

  static defaultProps = {
    inGroup: true
  }

  render(){
    const { inGroup, ...props } = this.props

    if(inGroup){
      return(
        <CheckboxInGroup
          {...props}
        />
      )
    }
    return(
      <CheckboxSingle
        {...props}
      />
    )
  }
}

export default Checkbox