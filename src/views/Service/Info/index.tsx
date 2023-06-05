import React from 'react'
import { Input } from '../../../components/Input'
import styles from '../service.module.css'
import { Button } from 'antd'
import { ButtonOutline } from '../../../components'

export const Info = () => {
  return (
    <div className={styles.infoContainer} >

    <div className={styles.body} >
        <h3>Thông tin dịch vụ</h3>
        <div className={styles.input}>
            <div className={styles.inputForm} >
                <p>Mã dịch vụ: <span>*</span></p>
                {/* <Input
                    status={true}
                    value={device.deviceCode !== '' ? device.deviceCode : ''}
                    placeholder='Nhập mã dịch vụ'
                    handleChange={(e) => handleChange('deviceCode', e.target.value)}
                /> */}
            </div>
            <div>
                <p>Tên dịch vụ: <span>*</span></p>
                {/* <Input
                    status={true}
                    value={device.deviceName !== '' ? device.deviceName : ''}
                    placeholder='Nhập tên dịch vụ'
                    handleChange={(e) => handleChange('deviceName', e.target.value)}
                /> */}
            </div>
        </div>                                                                                                                                                                                                                                                                                                                 
        <h3>Quy tắc cấp số</h3>
        <p><span>*</span> Là trường thông tin bắt buộc</p>
    </div>

    <div className={styles.btn} >
        {/* <ButtonOutline
            text='Hủy bỏ'
            handleClick={() => handleCancel()}
        />

        <Button
            text={getTextButton()}
            handleClick={() => handleAddOrUpdate()}
        /> */}
    </div>
</div>
  )
}
