import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import './css/AboutPage.css';
import sectionimg1 from './css/section1.png';
import sectionimg2 from './css/section2.png';
import sectionimg3 from './css/section3.png';
import { Icon } from 'antd';

function AboutPage() {
    return (
        <div style={{ width: '75%', margin: '3rem auto', height: '3500px' }}>
            <FullPage controls controlsProps={{ className: "slide-navigation" }}>
                <Slide>
                    <div className='section-common section-area1'>
                        <img src={sectionimg1} />
                    </div>
                </Slide>
                <Slide>
                    <div className='section-common section-area2'>
                        <img src={sectionimg2} />
                    </div>
                </Slide>
                <Slide>
                    <div className='section-common section-area3'>
                        <img src={sectionimg3} />
                    </div>
                </Slide>
                <Slide>
                    <div className='section-common section-area4'>
                        <h1 className='title'>Contact Us!</h1>
                        <div className='contact'>
                            <div className='item'>
                                <a href=''><Icon type='mail' style={{ fontSize: '50px', color: 'black' }} theme="filled" /></a>
                            </div>
                            <div className='item'>
                                <a href=''><Icon type='youtube' style={{ fontSize: '50px', color: 'black' }} theme="filled" /></a>
                            </div>
                            <div className='item'>
                                <a href=''><Icon type='message' style={{ fontSize: '50px', color: 'black' }} theme="filled" /></a>
                            </div>
                            <div className='item'>
                                <a href=''><Icon type='phone' style={{ fontSize: '50px', color: 'black' }} theme="filled" /></a>
                            </div>
                        </div>
                    </div>
                </Slide>
            </FullPage>
        </div>
    )
}

export default AboutPage