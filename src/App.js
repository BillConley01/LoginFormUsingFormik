import React from "react";
import {useFormik} from 'formik';
// TODO: import useFormik from formik library
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="./index.css"></link>
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = '* Field required';
      else '';
      if(!values.password) errors.password = '* Field required';
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '* Invalid email address';
      }
      else '';
      return errors;
    }
  });
  
  return (
  <div className="vh-100 w-100 pt-5"style={{backgroundColor: 'LightSteelBlue', marginTop:0}}>
      <form className="mx-auto shadow-lg w-75 card p-3" style={{maxWidth: 400, borderRadius: 10, backgroundColor: 'MediumTurquoise'}} onSubmit={formik.handleSubmit}>
        <label className="py-2 mx-2">Email:</label>
        <input 
          type="text" 
          name="email" 
          id="emailField"
          className="mx-2 py-2"
          onChange={formik.handleChange} 
          value={formik.values.email}
        />
        {formik.errors.email ? <div id="emailError" style={{color:'DarkRed'}}>{formik.errors.email}</div> : null}
        <br/>        
        <label className="mx-2 py-2">Password:</label>
        <input 
          type="password" 
          name="password" 
          id="pswField"
          className="mx-2 py-2"
          onChange={formik.handleChange} 
          value={formik.values.password}
        />
        {formik.errors.password ? <div id="pswError" style={{color:'DarkRed'}}>{formik.errors.password}</div> : null}                
        <br/>    
        <button id="submitBtn" class="w-50 btn-primary mx-auto mb-1 p-2"type="submit">Submit</button>
      </form> 
      </div>
  );

}

export default App;
