import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

class Note extends React.Component{
    handleButtonEdit(){
        alert("This function will edit the note");
    }
    handleButtonDelete(){
        alert("This function will delete note");
    }
    render(){
        return(
            <div>
                <h1>Note Taker</h1>
                <button onMouseOver = {this.handleButtonEdit}>Edit Note</button>
                <button onMouseOver = {this.handleButtonDelete}>Delete Note</button>
            </div>
            
        );
    }
}

ReactDOM.render(<Note/> ,document.getElementById("root"));


























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
