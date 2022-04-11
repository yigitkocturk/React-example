import { useState } from 'react';

import Input from './components/input/Input.js';
import Button from './components/button/Button.js';
import Form from './components/form/Form.js';
import './App.css'
function App() {
  const [userForm, setUserForm] = useState({
    userName:"",
    password:""
  })
  const Validation=()=>{
    if (userForm.userName === "" || userForm.password === ""){
      alert("Form geçersiz.");
    }
    else{
      alert("Form gönderildi.");
    }
  }
  return (
    <div className='custom-page'>
    <h2>Giriş Sayfası</h2>
    <Form>
    <Input value={userForm.userName} placeholder={"Kullanıcı Adı"} onChange={(e)=>
       setUserForm({...userForm, userName: e.target.value})}/>
      <Input value={userForm.password} placeholder={"Password"} onChange={(e)=>
      setUserForm({...userForm, password: e.target.value})}/>
    <Button text="Giriş Yap" onClick={Validation}/>
    </Form>
    </div>
  );
}

export default App;
