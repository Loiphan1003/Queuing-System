import React from 'react'
import AltaLogo from '../../assets/images/Logo_alta.svg';
import DashboardIcon from '../../assets/images/dashboard_icon.svg';
import MonitorIcon from '../../assets/images/monitor_icon.svg';
import ServiceIcon from '../../assets/images/service_icon.svg';
import CapSoIcon from '../../assets/images/capso_icon.svg';
import ReportIcon from '../../assets/images/baocao_icon.svg';
import SettingIcon from '../../assets/images/setting_icon.svg';
import MoreIcon from '../../assets/images/fi_more-vertical.svg'
import LogoutIcon from '../../assets/images/fi_log-out.svg';
import styles from './Menubar.module.css'
import { useNavigate } from 'react-router-dom';

type MenuBarProps = {
    onClick: (name: string, path: string) => void
}

const menubar = [
    {
        text: "Dashboard",
        img: DashboardIcon,
        path: '/thongke'
    },
    {
        text: "Thiết bị",
        img: MonitorIcon,
        path: '/thietbi'
    },
    {
        text: "Dịch vụ",
        img: ServiceIcon,
        path: '/dichvu'
    },
    {
        text: "Cấp số",
        img: CapSoIcon,
        path: '/capso'
    },
    {
        text: "Báo cáo",
        img: ReportIcon,
        path: '/baocao'
    },
]

export const Menubar = (props: MenuBarProps) => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>

            <div className={styles.wrap} >
                <img src={AltaLogo} alt="logo" />

                <div className={styles.listBtn}>
                    {menubar.map(item => (
                        <div 
                            key={item.text} 
                            className={styles.btn}
                            onClick={() => props.onClick(item.text, item.path)}
                        >
                            <img src={item.img} alt="icon" />
                            <p>{item.text}</p>
                        </div>
                    ))}

                    <div >
                        <img src={SettingIcon} alt="setting icon" />
                        <p>Cài đặt hệ thống</p>
                        <img src={MoreIcon} alt="more icon" />
                    </div>
                </div>
            </div>

            <div 
                className={styles.logoutBtn} 
                onClick={() => navigate('/')}
            >
                <img src={LogoutIcon} alt="logout icon" />
                <p>Đăng xuất</p>
            </div>
        </div>
    )
}
