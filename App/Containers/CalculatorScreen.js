
import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Metrics, Images } from '../Themes'
import Calculator from '../Components/Calculator'

import styles from './Styles/CalculatorScreenStyle'

class CalculatorScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <Calculator {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator
  }
}

export default connect(mapStateToProps)(CalculatorScreen)
