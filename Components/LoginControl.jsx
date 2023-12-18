import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginControl(){

    //const [login,setLogin]=useState(false);
    const[clicked,setCliked]=useState(false);

    const navigate=useNavigate();

    const onClick=()=>{//클릭을 하면 딱 로그인 폼 페이지로 가준다
        //setLogin(current=>(!current));
        setCliked(true);

        navigate("/login");
        //로그인 버튼을 딱 클릭해서 로그인 폼으로 넘어가쟈 하는데 그때 넘길 state는 뭐가 있는가
    };


    return(
        <div>
            <button className="loginButton" onClick={onClick}>
                {clicked? (
                    <>
                    <span>로그아웃</span>
                    <p>환영합니다</p>
                    </>
                ):(
                    <>
                    <span>로그인</span>
                    <p>로그인 해주세요</p>
                    </>
                )}
            </button>
        </div>
    );
}

export default LoginControl;