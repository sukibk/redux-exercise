import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import store from '../store/index'
import toast, {Toaster} from 'react-hot-toast'
import {Component} from "react";

// const Counter = () => {
//   const counter = useSelector(state=> state.counter);
//     const dispatch = useDispatch();
//
//     const toggleIncrementHandler = () =>{
//         dispatch({type: 'increment'})
//         toast.success('Incremented')
//     }
//     const toggleDecrementHandler = () =>{
//         dispatch({type: 'decrement'})
//         toast.error('Decremented')
//     }
//
//     const toggleCounterHandler = () => {}
//
//   return (
//     <main className={classes.counter}>
//         <Toaster />
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//         <div className={classes.actions}>
//             <button onClick={toggleIncrementHandler}>+</button>
//             <button onClick={toggleDecrementHandler}>-</button>
//         </div>
//         <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component{
    incrementHandler() {
        this.props.increment()
    }

    decrementHandler() {
        this.props.decrement()
    }

    toggleCounterHandler() {}

    render() {
        return (
            <main className={classes.counter}>
                <Toaster />
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div className={classes.actions}>
                    <button onClick={this.incrementHandler.bind(this)}>+</button>
                    <button onClick={this.decrementHandler.bind(this)}>-</button>
                </div>
                <button onClick={this.toggleCounterHandler()}>Toggle Counter</button>
            </main>
        );
    }
}

const mapStateToProps = state => {  //equivalent to useSelector
    return{
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {  //equivalent to useDispatch
    return{
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
