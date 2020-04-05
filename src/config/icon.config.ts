import React from 'react'
import {
    SmileOutlined, HeartOutlined, TeamOutlined,
    MailOutlined, SettingOutlined, IdcardOutlined,
    FireOutlined, AreaChartOutlined, BgColorsOutlined,
    GlobalOutlined, UserOutlined, DashboardOutlined,
    CommentOutlined, KeyOutlined, LogoutOutlined,
    AuditOutlined, ApartmentOutlined
} from '@ant-design/icons'

const IconMap = {
    smile: SmileOutlined,
    heart: HeartOutlined,
    team: TeamOutlined,
    user: UserOutlined,
    email: MailOutlined,
    setting: SettingOutlined,
    password: IdcardOutlined,
    fire: FireOutlined,
    chart: AreaChartOutlined,
    theme: BgColorsOutlined,
    global: GlobalOutlined,
    dashboard: DashboardOutlined,
    chat: CommentOutlined,
    key: KeyOutlined,
    logout: LogoutOutlined,
    review: AuditOutlined,
    grade: ApartmentOutlined,
}

Object.keys(IconMap).forEach(item => {
    IconMap[item] = React.createElement(IconMap[item])
})

export default IconMap