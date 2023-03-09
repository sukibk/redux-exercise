import classes from './Auth.module.css';
import { useSelector , useDispatch } from "react-redux";
import UserProfile from "./UserProfile";
import {authActions} from "../store/auth";
import store from "../store/index";
import toast, {Toaster} from "react-hot-toast";

const Auth = () => {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn)
  const dispatchAuth = useDispatch();

  console.log(isAuthenticated)

  const onLoginHandler = e => {
    e.preventDefault();
    dispatchAuth(authActions.login())
    toast.success('Logged In')
  }

  return <> {!isAuthenticated ?
      <main className={classes.auth}>
        <Toaster />
        <section>
          <form onSubmit={onLoginHandler}>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button>Login</button>
          </form>
        </section>
      </main> : <UserProfile /> } <Toaster /> </>

};

export default Auth;
