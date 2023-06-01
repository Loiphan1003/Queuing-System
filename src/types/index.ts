export interface stateModel {
    title: string,
    path: string
}

export interface device {
    id: string,
    deviceCode: string,
    deviceName: string,
    deviceIP: string,
    activeStatus: string,
    connectStatus: string,
    deviceUse: string,
    username: string,
    password: string,
    deviceType: string,
}

export interface service{
    id: string,
    serviceCode: string,
    serviceName: string,
    description: string,
    activeStatus: string,
}

export interface account {
    id: string,
    username: string,
    fullname: string,
    phone: string,
    email: string,
    role: string,
    password: string,
    status: string
}

export interface DateType {
    day: number,
    month: number,
    year: number
}
