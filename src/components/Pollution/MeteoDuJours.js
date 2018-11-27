import React, { Component } from 'react';
import {connect} from 'react-redux';
import {GetMeteoPollution} from '../../actions/meteoActions'
import './IndiceDuJours.css'
import IndiceMeteoSolo from './IndiceMeteoSolo'
import IconMeteo from './IconMeteo'
import ButtonMeteo from './ButtonMeteo'


class MeteoDuJours extends Component {


    componentDidMount(){


        //console.log(this.props.datCity);
       // this.props.GetMeteoPollution(this.props.dataCity.city)



    }
    componentWillReceiveProps
    render() {
        // const pagePollution = (props) => <PagePollution indice={this.props.indice} />

       return(
        <div>
           <div className="indiceDuJour-index">
                <div><p className="indiceDuJour-part1">MÉTÉO</p></div>
                <div className="indiceDuJour-part2 indiceDuJour-part2-meteo">
                    <div className="indice-smiley">

                        <div className="indice-smiley-child"><IndiceMeteoSolo temperature={this.props.temperature} degres={this.props.degre}/></div>
                        <div className="indice-smiley-child"><IconMeteo icon={this.props.icon}/></div>
                    </div>
                    <div className="bouton-plus-index">
                        <ButtonMeteo className="button-indice-index"/>
                    </div>
               </div>
            </div>
        </div>
        )


    }
}
const mapStateToProps = state =>({
    dataCity:state.datCity,
    dataMeteo :state.dataMeteo
})
export default connect(mapStateToProps,{GetMeteoPollution})(MeteoDuJours);