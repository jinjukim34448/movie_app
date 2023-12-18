import React, { useState } from "react";
import { Form } from "react-router-dom";


function LoginForm(){
    const [email,setEmail]=useState("");
    //const[rightEmail,setRightEmail]=useState(false);
    //const[rightPassword, setRightPassword]=useState(false);
    const emailRule=/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    
    const rightEmail = emailRule.test(email);

    const onChange=(event)=>{
        console.log("Email state: ",email);
        setEmail(event.target.value);
    }


    return(
        <div>
            <p style ={
                {fontSize:"20px",
                fontFamily:"궁서체"
                }
            }>이메일과 비밀번호를 입력해주세요.</p>
            <div className="loginform">
                <label htmlFor="email" style={{display:"block", fontSize:"12px"
                
            }}>이메일 주소:</label>
                <input value={email} type="email" 
                onChange={onChange} label="email" name="email"
                style={{color:"black",}}/>
                {rightEmail ? null:
                <p style={
                    {
                        fontSize:"10px",
                        fontFamily:"궁서체",
                        margin:"1px",
                        font:"red",
                    }
                }>올바른 이메일을 입력해주세요</p>
                }
                <label style={
                    {
                        display:"block"
                    }
                }>비밀번호:</label>
                <input label="password" type="password" name="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상"/>
                <button>확인</button>
            </div>
            
    
            
        </div>

    );
}
export default LoginForm;