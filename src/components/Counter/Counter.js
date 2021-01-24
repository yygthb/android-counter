import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { decCount, incCount } from '../../redux/actions'
import { styles } from './Counter_stiles'

const Counter = props => {

  const incCountHandler = () => {
    props.increment()
  }

  const decCountHandler = () => {
    props.decrement()
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Text style={styles.count}>{props.count}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={incCountHandler}
        >
          <Text style={styles.button__text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={decCountHandler}
        >
          <Text style={styles.button__text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incCount()),
    decrement: () => dispatch(decCount()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)