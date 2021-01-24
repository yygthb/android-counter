import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './src/redux/reducer'
import { styles } from './App_stiles'
import Counter from './src/components/Counter/Counter'
import { Header } from './src/components/Header/Header'

const store = createStore(mainReducer)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Counter />
      </View>
    </Provider>
  );
}