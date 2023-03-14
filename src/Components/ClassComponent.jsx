import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Viviana'
        }
        console.log('Se creó el constructor')
    }

    componentDidMount(){
        console.log('Se ha montado el componente de clase')   
        setTimeout(() => {
            this.setState({name: 'Andrea'})     
        }, 2000)
    }

    componentDidUpdate(){
        console.log('Se actualizó el componente de clase')
    }

    componentWillUnmount(){
        console.log('Se desmontó el componente de clase')
    }

  render() {
      console.log('Se ejecutó el render del componente')
    return (
      <div>
          <h1>{this.props.titulo}</h1>
          <h3>{this.state.name}</h3>
      </div>
    )
  }
}
