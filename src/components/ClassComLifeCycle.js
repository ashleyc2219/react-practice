import React from 'react'

class ClassComLifeCycle extends React.Component {
  constructor() {
    super()
    this.state = { total: 0 }
    console.log('consturctor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default ClassComLifeCycle
