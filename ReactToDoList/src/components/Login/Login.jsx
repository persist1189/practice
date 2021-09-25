import React, { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import styles from "../../style/_login.scss"
import axios from 'axios';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const InputForm = (props) => {
    const { id, type, title, value, inputRef, onChange, placeholder } = props
    return (
        <div>
            <div className={ styles.font }> { title } </div>
            <input id={ id } type={ type } className={ styles.padding } onChange={ onChange } value={ value } ref={ inputRef }/>
        </div>
    )
}

const InputBtn = (props) => {
    const { name, disabled, onClick } = props;
    return (
        <div className={ styles.centerBtn }>
            <button className={ disabled ? styles.disableBtn : styles.btn } disabled={ disabled } onClick={ onClick }> { name }</button>
        </div>
    )
}


const Login = (props) => {
    const [state, setState] = useState({ 
        email: "", password: "" ,
        googleName: '',
        googleEmail: '',
        googleFirstName: '',
        googleSecondName: '',
        googleId: '',
        googleIcon: '',
        getData: true,
    })

    const responseGoogle = (res) => {
        const { showError } = props;
        showError(null);
        let data = res && res.profileObj;
        if (!data) return false;
        setState(prev => ({
            ...prev,
            googleName: data.name,
            googleEmail: data.email,
            googleFirstName: data.familyName,
            googleSecondName: data.giveName,
            googleId: data.googleId,
            googleIcon: data.imageUrl,
            getData: false,
        }))
    }


    const isDisabledBtn = () => {
        return  (
            state.email.length > 0 && state.password.length > 0 ? false : true
        )
    }

    // const inputRef = useRef(null)
    // useEffect(() => {
    //     inputRef.current.focus();
    // },[])

    // 實作點擊 Login 後跳出失敗畫面
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const { showError } = props;
        // showError 必須先從 ToDo.jsx 先傳值過去才能使用
        showError("您尚未註冊，若有問題請聯繫管理者。")    
    }

    // 尚未完成，看起來當初是想要寫後台串接後判斷資料。
    // const handleSubmitClick = (e) => {
    //     e.preventDefault();
    //     console.log('handleSubmitClick');
    //     const payload = { "email" : state.email, "password" : state.password }
    //     axios.post("localhost:4000/user/login", payload)
    //         .then(function(response){
    //             if(response.status === 200){
    //                 setState(prevState => ({ ...prevState, "successMessage" : "Login successful.Redirecting to home page..."}))
    //                 localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
    //                 redirectToHome();
    //                 showError(null)
    //             } else if (response.code == 204) {
    //                 showError("Username and password do not match");
    //             } else {
    //                 showError("Username does not exists");
    //             }
    //         })
    //         .catch(function(error){
    //             console.log(error)
    //         })
    // }

    let history = useHistory()

    const toRegisterBtn = (e) => {
        e.preventDefault();
        history.push("/register")
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(preState => ({ ...preState, [id] : value }))
    }
    
    if(state.getData){
        return (
            // 進到畫面浮標自動到 email 欄位
            <div className={ styles.center }>
                {/* <InputForm id="email" type="text" title="Email" value={ state.email } inputRef={ inputRef } onChange={ handleChange }/> */}
                <InputForm id="email" type="text" title="Email" value={ state.email } onChange={ handleChange }/>
                <div className={ styles.margin }>
                    <InputForm id="password" type="password" title="Password" value={ state.password } onChange={ handleChange }/>
                </div>
                <GoogleLogin 
                    buttonText="Login" onSuccess={responseGoogle} 
                    onFailure={responseGoogle} cookiePolicy={'single_host_origin'}
                    clientId="280459540430-mi9mnun9l75grmgdk1e81ajqtn94s4uo.apps.googleusercontent.com"
                />
                <div className={ styles.margin } >
                    <InputBtn name="Login" disabled={ isDisabledBtn() } onClick={ handleSubmitClick } />
                </div>
                {/* <div className={ styles.margin } >
                    <InputBtn name="Register Page" onClick={ toRegisterBtn } />
                </div> */}
            </div>
        )
    } else {
        return (
            <div className={ styles.center }>
                <div className={ styles.info }>
                    <h3 className={ styles.title }>Success</h3>
                    <div className={ styles.header}>
                        <div>
                            <img className={ styles.borderRa }src={state.googleIcon}></img>
                        </div>
                        <ul className={ styles.centers }>
                            <li>{`email: ${state.googleEmail}`}</li>
                            <li>{`name: ${state.googleName}`}</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

export { InputForm, Login, InputBtn };