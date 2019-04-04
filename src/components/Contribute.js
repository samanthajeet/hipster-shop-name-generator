import React from 'react'


function Contribute() {

  return (
    <>
      <h1>Contribute</h1>
      <button onClick={() => this.props.history.push('/')} >back to generator</button>
    </>
  )

}

export default Contribute;