import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import store from '../store/index'
import toast, {Toaster} from 'react-hot-toast'
import {Component} from "react";
import {counterActions} from "../store/index";

const Counter = () => {
  const counter = useSelector(state=> state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch();

    const toggleIncrementHandler = () =>{
        dispatch(counterActions.increment())
        toast.success('Incremented')
    }
    const toggleDecrementHandler = () =>{
        dispatch(counterActions.decrement())
        toast.error('Decremented')
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(10)) // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
        toast.success('Incremented by 5')
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    }


  return (
    <main className={classes.counter}>
        <Toaster />
      <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
        <div className={classes.actions}>
            <button onClick={toggleIncrementHandler}>+</button>
            <button onClick={toggleDecrementHandler}>-</button>
            <button onClick={increaseHandler}>+5</button>
        </div>
        <br/>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
//     incrementHandler() {
//         this.props.increment()
//     }
//
//     decrementHandler() {
//         this.props.decrement()
//     }
//
//     toggleCounterHandler() {}
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <Toaster />
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div className={classes.actions}>
//                     <button onClick={this.incrementHandler.bind(this)}>+</button>
//                     <button onClick={this.decrementHandler.bind(this)}>-</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler()}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStateToProps = state => {  //equivalent to useSelector
//     return{
//         counter: state.counter
//     }
// }
//
// const mapDispatchToProps = dispatch => {  //equivalent to useDispatch
//     return{
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
