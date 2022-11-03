import React from 'react'
import { Icon } from 'antd';


function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem'
        }}>
            <p> HATHAT COMPANY </p>
            <a href='https://github.com/SeryLee/Put-a-hat-on'><Icon type="github" /></a>
            <a href='https://github.com/SeryLee/Put-a-hat-on'><Icon type="twiter" /></a>
        </div>
    )
}

export default Footer
