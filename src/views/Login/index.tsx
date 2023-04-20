import React,{useState} from 'react'
import LoginImage from '../../assets/images/loginImage.svg';
import LogoAlta from '../../assets/images/Logo_alta.svg';
import warning from '../../assets/images/warning.svg';
import styles from './index.module.css'
import { PasswordInput, Input } from '../../components';

type Account = {
    userName: string | undefined,
    password: string | undefined
}


export const Login = () => {

    const [account, setAccount] = useState<Account | null>(null);
    const [isCorrect, setIsCorrect] = useState(true)

    const handleClick = () => {
        if(account === null || account.userName === undefined || account.password === undefined){
            return setIsCorrect(false);
        }
        // console.log(account);
    }

    return (
        <div className={styles.container} >
            <div className={styles.loginForm}>

                <div>
                    <div className={styles.logo}>
                        <img src={LogoAlta} alt="logo alta" />
                    </div>
                    <div className={styles.username}>
                        <label className={styles.label}  htmlFor="name">Tên đăng nhập *</label>
                        <Input 
                            status={isCorrect}
                            handleChange={(e) => {
                                setAccount({
                                    userName: e.target.value,
                                    password: account?.password,
                                })
                            }}
                        />
                    </div>

                    <div  className={styles.password}>
                        <label className={styles.label} htmlFor="password">Mật khẩu *</label>

                        <PasswordInput
                            status={isCorrect}
                            handleChange={(e) =>
                                setAccount({
                                    userName: account?.userName,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    {isCorrect !== true && 
                        <div className={styles.warning} >
                            <img src={warning} alt="warning icon" />
                            <p>Sai mật khẩu hoặc tên đăng nhập</p>
                        </div>
                    }
                    
                    {isCorrect && <a href='/' className={styles.forgotPass}>Quên mật khẩu ?</a>}
                    <div className={styles.loginBtn}>
                        <div onClick={handleClick} >
                            <p>Đăng nhập</p>
                        </div>
                        {isCorrect !== true && <a href='/' className={styles.forgotPass}>Quên mật khẩu ?</a>}
                    </div>

                </div>
            </div>

            <div className={styles.leftBackground}>
                <img src={LoginImage} alt='loginImage' />
                <p>Hệ thống <br /> <span>Quản lý xếp hàng</span></p>
            </div>
        </div>
    )
}
