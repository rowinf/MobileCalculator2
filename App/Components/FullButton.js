import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/FullButtonStyle'

export default class FullButton extends React.Component {

  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}
