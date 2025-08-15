
import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/CalculatorTouchableStyle'

export default class CalculatorTouchable extends React.Component {

  constructor (props) {
    super(props)
    this.whenPressed = this.whenPressed.bind(this)
  }

  static defaultProps = {
    growth: 'normal'
  }

  whenPressed () {
    this.props.onPress(this.props.value)
  }

  render () {
    const {children, onPress, value, growth, touchableStyles, disabled} = this.props

    return (
      <TouchableHighlight style={[
        styles.container,
        styles[growth]
      ]} disabled={disabled} onPress={this.whenPressed}>
        <View style={[styles.inner, touchableStyles]}>
          <Text style={styles.innerText}>{value}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
