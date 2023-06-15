import React, { useState } from 'react'
import { Button, ButtonOutline, Dropdown } from '../../../components'
import styles from './newNumberLevel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { getCurrentTimeOrTimeExpire, removeLastItemBreadScrumb } from '../../../utils';
import { changeValue } from '../../../store/reducers/breadcrumbSlice';
import { NumberLevel, device, service } from '../../../types';
import { addData, getAllDataInColection } from '../../../config/firebase/firestore';
import { addNumberLevels } from '../../../store/reducers/numberLevelSlice';

export const NewNumberLevel = () => {

    const breadcrumbState = useSelector((state: RootState) => state.breadcrumb.value);
    const servicesState = useSelector((state: RootState) => state.service.services);
    const accountState = useSelector((state: RootState) => state.account.accountLogin);
    const dispatch = useDispatch<any>();


    const [service, setService] = useState<service>({
        id: "",
        activeStatus: "",
        description: "",
        serviceCode: "",
        serviceName: "",
        dateCreate: '',
        rule: [],
    });

    const handleCancel = () => {
        const res = removeLastItemBreadScrumb(breadcrumbState);
        return dispatch(changeValue(res.newArray));
    }

    const displayServiceForDropdown = () => {
        const servicesIsActive: string[] = [];
        servicesState.forEach((item) => {
            if (item.activeStatus.match("Hoạt động")) servicesIsActive.push(item.serviceName)
        })
        return servicesIsActive;
    }

    const handleClickDropdown = (value: string) => {
        let serviceInfo: service = {
            id: "",
            activeStatus: "",
            description: "",
            serviceCode: "",
            serviceName: "",
            dateCreate: '',
            rule: [],
        }
        servicesState.forEach((item) => {
            if (item.serviceName.match(value)) return serviceInfo = item;
            return;
        })
        setService(serviceInfo);
    }

    const handleCreateSTT = async () => {
        const numberLevels: NumberLevel[] = await getAllDataInColection('numberLevels')
        let stt: string = service.serviceCode;
        let listSTT: string[] = [];
        const rule: string[] = [];

        numberLevels.forEach((item) => {

            if (item.stt.toString().includes(service.serviceCode)) {
                listSTT.push(item.stt);
            }
        })
        listSTT.sort();

        service.rule.forEach((item) => { return rule.push(item.name) })

        if (rule.toString().includes('Surfix:')) {
            stt = (Number.parseInt(stt) * 10000 + 1).toString();
        }
        if (rule.toString().match("Tăng tự động từ:")) {
            const lastStt = listSTT[listSTT.length - 1]
            const lastSurfix = lastStt.toString().split(service.serviceCode)[1];
            stt = (Number.parseInt(stt) + Number.parseInt(lastSurfix)).toString();
        }
        return stt;
    }

    const handleAddNewNumber = async () => {

        if(service.serviceName === '') return alert("Vui lòng chọn dịch vụ!");

        const newNumber: NumberLevel = {
            id: "",
            stt: '',
            customer: accountState.fullname,
            device: "",
            service: service.serviceName,
            status: "Đang chờ",
            timeuse: getCurrentTimeOrTimeExpire('current'),
            timeexpire: getCurrentTimeOrTimeExpire('expire'),
            email: accountState.email,
            phone: accountState.phone,
        }

        const devices: device[] = await getAllDataInColection('devices')

        const getDevicesActive = devices.filter((item) => { return item.activeStatus.match("Hoạt động") && item.connectStatus.match("Kết nối") && item.deviceUse.includes(service.serviceName) })
        newNumber.device = getDevicesActive[0].deviceName;

        newNumber.stt = (await handleCreateSTT()).toString();

        const res = await addData(newNumber, 'numberLevels');
        if(res.status !== true) return;
        dispatch(addNumberLevels(res.data))
        handleCancel();
    }

    return (
        <div className={styles.newContainer} >
            <h1>Cấp số mới</h1>
            <p>Dịch vụ khách hàng lựa chọn</p>
            <Dropdown
                value={''}
                setWidth='300'
                onClick={(value) => handleClickDropdown(value)}
                data={displayServiceForDropdown()}
            />

            <div className={styles.buttons} >
                <ButtonOutline
                    text='Hủy bỏ'
                    handleClick={() => handleCancel()}
                />

                <Button
                    text='In số'
                    handleClick={() => handleAddNewNumber()}
                />
            </div>
        </div>
    )
}
