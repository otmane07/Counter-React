import React , {Component} from "react";
import {themeContext} from "../App";
export default class CounterClass extends Component {
    constructor(props) {
        super(props);
        //definire l'objet statae de cette classe this
        this.state = {
            count : props.counterInit
        }
    }
    render() {
        return (

                <themeContext.Consumer>
                    {/*ces premieres bracket c'est pour écrire du js*/}
                    {
                        theme =>(
                            <>
                                {/*J'ai utiliser this pour pouvoir arriver a ma fct declarer dans la class ( this in that case represent this class*/}
                                <button style={{background:theme}} onClick={()=>{this.changeCount(-1)}}>-</button>
                                <span>{this.state.count}</span>
                                <button style={{background:theme}} onClick={()=>{this.changeCount(+1)}}>+</button>
                            </>

                        )
                    }
                </themeContext.Consumer>

        )
    }
    changeCount = (amount)=>{
        // this here refere to our classe
        this.setState((prevState)=>{
            return {count : prevState.count + amount }
        })
    }
}