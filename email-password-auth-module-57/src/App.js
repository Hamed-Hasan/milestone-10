
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import app from "./firebase.init";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const auth = getAuth(app)

function App() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [validated, setValidated] = useState(false);
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

const handleNameBlur = (event) => {
  setName(event.target.value)

}

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  

  const handleFormSubmit = event => {

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return
    }
    setValidated(true);
    if(!/(?=.*[!@#$%^&*])/.test(password)){
      setError('please type a special charecter');
      return;
    }else if(/(?=.*[!@#$%^&*])/.test(password)){
      setSuccess('you are a successfully login')
    }
      setError('')
     
  

if(register){

  signInWithEmailAndPassword(auth, email, password)
  .then(result =>{
    const user = result.user;
    console.log(user);
  })
  .catch(error =>{
    console.error(error);
    setError(error.message);
  })
}else{
  createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    const user = result.user
    setEmail('')
    setPassword('')
      console.log(user)
 verifyEmail()
 userDisplayName()
  })
  .catch(err => {
    setError(err.message)
    console.log(err)
  })
 
}
const userDisplayName = () =>{
  updateProfile(auth.currentUser, {
    displayName: name
  })
  .then(() => {
    console.log('Profile updated!')
  })
}

 event.preventDefault();
  }

 const handleRegister = (event) =>{
  setRegister(event.target.checked)
 }

const verifyEmail = () => {
  sendEmailVerification(auth.currentUser)
  .then(() =>{
    console.log('Email Verification Sent');
  })
}
const forgetPassword = () => {
  sendPasswordResetEmail(auth, email)
  .then(() =>{
    console.log('send Email')
  })
}

  return (
    <div>
      <div className="registration w-50 mx-auto mt-5">
        <h2 className="text-primary">please {register ? 'login' : 'register'}</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
       { !register &&  <Form.Group className="mb-3" >
            <Form.Label>User Name: {name}</Form.Label>
            <Form.Control onBlur={handleNameBlur} type="name" placeholder="Enter Name" required />
            <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
          </Form.Group>}
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
          <p className='text-danger'>{error}</p>
          <p className='text-success'>{success}</p>
          </Form.Group>
        
          <Form.Group className="mb-3">
        <Form.Check onChange={handleRegister}
      
          label="Already Register"
        
        />
      </Form.Group>
          <br />
          <Button onClick={forgetPassword} variant="link">Forget Password</Button>
          <Button variant="primary" type="submit">
    {register ? 'login' : 'register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;




















// // import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './App.css';
// // import app from "./firebase.init";
// // import Form from 'react-bootstrap/Form';
// // import Button from 'react-bootstrap/Button';
// // import { useState } from "react";

// // const auth = getAuth(app)

// // function App() {
// //   const [validated, setValidated] = useState(false);
// //   const [registered, setRegistered] = useState(false);
// //   const [error, setError] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleEmailBlur = event => {
// //     setEmail(event.target.value);
// //   }

// //   const handlePasswordBlur = event => {
// //     setPassword(event.target.value);
// //   }

// //   const handleRegisteredChange = event =>{
// //     setRegistered(event.target.checked)
// //   }

// //   const handleFormSubmit = event => {
// //     event.preventDefault();
// //     const form = event.currentTarget;
// //     if (form.checkValidity() === false) {
// //       event.stopPropagation();
// //       return;
// //     }

// //     if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
// //       setError('Password Should contain at least one special character');
// //       return;
// //     }
// //     setValidated(true);
// //     setError('');

// //     if(registered) {
// //       console.log(email, password);
// //       signInWithEmailAndPassword(auth, email, password)
// //       .then(result =>{
// //         const user = result.user;
// //         console.log(user);
// //       })
// //       .catch(error =>{
// //         console.error(error);
// //         setError(error.message);
// //       })
// //     }
// //     else{
// //       createUserWithEmailAndPassword(auth, email, password)
// //       .then(result => {
// //         const user = result.user;
// //         console.log(user);
// //         setEmail('');
// //         setPassword('');
// //         verifyEmail();
// //       })
// //       .catch(error => {
// //         console.error(error);
// //         setError(error.message);
// //       })
// //     }

    
// //     event.preventDefault();
// //   }

// //   const handlePasswordReset = () =>{
// //     sendPasswordResetEmail(auth, email)
// //     .then(() =>{
// //       console.log('email sent')
// //     })
// //   }

// //   const verifyEmail = () =>{
// //     sendEmailVerification(auth.currentUser)
// //     .then(() =>{
// //       console.log('Email Verification Sent');
// //     })
// //   }

// //   return (
// //     <div>
// //       <div className="registration w-50 mx-auto mt-5">
// //         <h2 className="text-primary">Please { registered ? 'Login': 'Register'}!!</h2>
// //         <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
// //           <Form.Group className="mb-3" controlId="formBasicEmail">
// //             <Form.Label>Email address</Form.Label>
// //             <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
// //             <Form.Text className="text-muted">
// //               We'll never share your email with anyone else.
// //             </Form.Text>
// //             <Form.Control.Feedback type="invalid">
// //               Please provide a valid email.
// //             </Form.Control.Feedback>
// //           </Form.Group>

// //           <Form.Group className="mb-3" controlId="formBasicPassword">
// //             <Form.Label>Password</Form.Label>
// //             <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
// //             <Form.Control.Feedback type="invalid">
// //               Please provide a valid password.
// //             </Form.Control.Feedback>
// //           </Form.Group>
// //           <Form.Group className="mb-3" controlId="formBasicCheckbox">
// //             <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
// //           </Form.Group>
// //           <p className="text-danger">{error}</p>
// //           <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
// //           <br />
// //           <Button variant="primary" type="submit">
// //             {registered ? 'Login':  'Register'}
// //           </Button>
// //         </Form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;