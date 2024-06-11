import React from 'react'
import CounterProvider from './Context/counterContext';
import Counter from './Components/Counter'
import ColorContext from './Context/ColorContext';
import Color from './Components/Color';
function App() {
  return (
    <>
    <CounterProvider>
      <Counter />
    </CounterProvider>
    <ColorContext>
    <Color/>
    </ColorContext>
    </>
  )
}

export default App