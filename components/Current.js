import React from 'react'
import ReactDOM from 'react-dom'
import classAutoBind from 'react-helpers/dist/classAutoBind'

class Current extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = {
            city: 'Indianapolis',
            temp: 0,
            condition: 0
        }
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis,us&APPID=3e08b0b896513b4c58f1888a8e07ccbe')
        .then(response => response.json())
        .then((data) => {
            this.setState({
                temp: Math.round(data.main.temp * (9/5) - 459.67),
                cond: data.weather[0].description
            })
            console.log(data)
        })
    }

    render() {
        var date = moment().format("LLLL");

        return <div>
        <div className="container containerMargin">
        <div className="row">
          <div className="col-sm-12 text-center txtMain">
            <h1>{this.state.city}</h1>
            <h4>{date}</h4>
          </div>
        </div>
        <br/>
        <div className="row row2Margin">
          <div className="col-sm-12 text-center">
            <h1 className="txtMain degreesSize">{this.state.temp}&deg;</h1>
            <h4 className="txtWeather cloudySize">{this.state.cond}</h4>
          </div>
        </div>
      </div>
        </div>
    }
}

export default Current
