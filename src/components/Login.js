import { GoogleOutlined , FacebookOutlined} from '@ant-design/icons'
import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from './firebase';

const Login = () => (
    <div id='login-page'>
        <div id="login-card">
            <h4 className='m-2'>
                Welcome to <span className="text-warning fw-bold">React Fireb Chat App</span>
            </h4>
            <div className="login-button google mx-5 mt-5"
            // onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)}
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}

           >
                <GoogleOutlined className='text-success m-0 p-0 fs-1' /> Signin with google
            </div>

            <div className="login-button google m-5 mb-1"
            onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
            >
                <FacebookOutlined className='text-primary m-0 p-0 fs-1'  /> Signin with google
            </div>

        </div>
    </div>
)

export default Login 