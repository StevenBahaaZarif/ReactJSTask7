import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForm() {

    const [Data,setData]=useState({
        Email:"",
        Name:"",
        UserName:"",
        Password:"",
        ConfirmPassword:"",

    });

    const [DataError,setDataError]=useState({
        EmailError:"",
        NameError:"",
        UserNameError:"",
        PasswordError:"",
        ConfirmPasswordError:"",

    });

    function containsUppercase(str) {
      return /[A-Z]/.test(str);
    }

    function containsSpecialChars(str) {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }


    const handelChange = (event) => {
       //   Event data
        if (event.target.name == "Email") {
          //state->email
          setData({ ...Data, Email: event.target.value });
          setDataError({
            ...DataError,
            EmailError:
              event.target.value.length == ""
                ? "Required"
                : event.target.value.includes("@")
                ? ""
                : "Plz Enter Correct Email!",
          });
        } else if (event.target.name == "Password") {
          //state->password
          setData({ ...Data, Password: event.target.value });
          setDataError({
            ...DataError,
            PasswordError:
              event.target.value.length == ""
                ? "Required"
                : event.target.value.length < 8
                ? "Password at least 8 characters"
                : !containsUppercase(event.target.value)
                ?"Inculude an Atleast One UpperCase Letter"
                :containsSpecialChars(event.target.value)
                ?""
                : "Include a Special Charcter in the Password",
          });
        }
        else if (event.target.name == "ConfirmPassword") {
            //state->password
            setData({ ...Data, ConfirmPassword: event.target.value });
            setDataError({
              ...DataError,
              ConfirmPasswordError:
                event.target.value.length == ""
                  ? "Required"
                  : event.target.value == Data.Password
                  ? ""
                  : "Passwords Doesn't Match",
            });
          }
          else if (event.target.name == "Name") {
            //state->password
            setData({ ...Data, Name: event.target.value });
            setDataError({
              ...DataError,
              NameError:
                event.target.value.length == ""
                  ? "Required"
                  : ""
            });
          }
          else if (event.target.name == "UserName") {
            //state->password
            setData({ ...Data, UserName: event.target.value });
            setDataError({
              ...DataError,
              UserNameError:
                event.target.value.length == ""
                  ? "Required"
                  : event.target.value.includes(" ")
                  ?"Do not include Spaces"
                  :""

            });
          }
    
    }



    return ( <>
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="Email" onChange={(e) => handelChange(e)}/>
        <Form.Text className="text-muted">
          {DataError.EmailError}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name"  name="Name" onChange={(e) => handelChange(e)} />
         <Form.Text className="text-muted">
         {DataError.NameError}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="UserName" placeholder="User Name"  name="UserName" onChange={(e) => handelChange(e)} />
        <Form.Text className="text-muted">
        {DataError.UserNameError}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="Password" onChange={(e) => handelChange(e)} />
        <Form.Text className="text-muted">
        {DataError.PasswordError}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="Password" placeholder="Confirm Password"  name="ConfirmPassword" onChange={(e) => handelChange(e)} />
        <Form.Text className="text-muted">
        {DataError.ConfirmPasswordError}
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit"  disabled={
                DataError.EmailError || DataError.PasswordError || DataError.ConfirmPasswordError || DataError.NameError || DataError.UserNameError
                  ? true
                  : false
              }>
        Submit
      </Button>
    </Form>
    </> );
}

export default SignupForm;