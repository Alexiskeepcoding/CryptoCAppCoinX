import { useForm } from 'react-hook-form';
import {get, isEmpty } from 'lodash';
import { IUserApp, useUserCredentials } from '../Login/UserCredentials/UserCredentials';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {

    const registerForm = useForm({mode: 'onBlur'});

    const { loading, setLoading } = useUserCredentials((state: IUserApp) => state);

    const onSubmit = () => {
        registerForm.trigger();

        console.log(registerForm.formState.isValid);

        if(registerForm.formState.isValid){
            setLoading(true);
            
            createUserWithEmailAndPassword(
                auth,
                registerForm.getValues("email"),
                registerForm.getValues("password"),
            )
            .then((response) => {

                console.log("response: ", response);
            })
            .catch((error) => {
                
                console.log("error: ", error);
            });

        }
    }

    useEffect(() => {
        console.log("object is: ", auth);
    }, [])




  return (
    <div className = 'Login' style={{
        display: 'flex',
        backgroundColor: '#DCE8EF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <h1>Register here</h1>
        


        {/* Para el email */}

        <div style={{
            display: 'flex',
            width: '50%',
            padding: '10px',
            justifyContent: 'center',
        }}>
            
            <input 
            {...registerForm.register("email", {
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

            {!isEmpty(registerForm.formState.errors) && (
                <p style={{ 
                    color: "red",
                 }}>
                {get(registerForm, "formState.errors.email.message", "") as string}
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
            {...registerForm.register("password", {
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

            {!isEmpty(registerForm.formState.errors) && (
                <p style={{ color: "red" }}>
                {get(registerForm, "formState.errors.password.message", "") as string}
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

export default Register