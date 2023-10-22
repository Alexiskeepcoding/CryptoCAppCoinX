import { useForm } from 'react-hook-form';
import {get, isEmpty } from 'lodash';
import { IUserApp, useUserCredentials } from './UserCredentials/UserCredentials';
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

    const loginForm = useForm({mode: 'onBlur'});

    const { loading, setLoading } = useUserCredentials((state: IUserApp) => state);

    const onSubmit = () => {
        loginForm.trigger();

        console.log(loginForm.formState.isValid);

        if(loginForm.formState.isValid){
            setLoading(true);
            
            signInWithEmailAndPassword(
                auth,
                loginForm.getValues("email"),
                loginForm.getValues("password"),
            )
            .then((response) => {
                console.log("response: ", response);

                sessionStorage.setItem("user", JSON.stringify(response.user));
                setLoading(true);
            })
            .catch((error) => {
                
                console.log("error: ", error);

                setLoading(false);
            });

        }
    }


  return (
    <div className = 'Login' style={{
        display: 'flex',
        backgroundColor: '#DCE8EF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <h1>Login</h1>
        


        {/* Para el email */}

        <div style={{
            display: 'flex',
            width: '50%',
            padding: '10px',
            justifyContent: 'center',
        }}>
            
            <input 
            {...loginForm.register("email", {
                required: "Email is required!"
            })}
            style = {{
                width: '70%',
                padding: '10px',
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: '10px',
            }}
            type="text" placeholder='Enter your email'
            />

            {!isEmpty(loginForm.formState.errors) && (
                <p style={{ 
                    color: "red",
                 }}>
                {get(loginForm, "formState.errors.email.message", "") as string}
                </p>
            )}
        </div>

        {/* Para la contraseña */}
        <div style={{
            display: 'flex',
            width: '50%',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        }}>
            <input 
            {...loginForm.register("password", {
                required: "Password is required!",
                minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long!"
                }
            })}
            style={{
                width: '70%',
                padding: '10px',
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: '10px',
            }}
            type="password" placeholder='Enter your password'/>

            {!isEmpty(loginForm.formState.errors) && (
                <p style={{ color: "red" }}>
                {get(loginForm, "formState.errors.password.message", "") as string}
                </p>
            )}
        </div>



        {/* Para el boton */}

        
        {!loading ? (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <button style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    marginTop: "10px",
                }} onClick={ onSubmit }> Submit</button>
            </div> ) : (<div> loading ..</div>) }

    </div>
  )
}

export default Login