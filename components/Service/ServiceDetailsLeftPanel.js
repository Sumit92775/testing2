import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Divider } from 'antd';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ServiceDetailsLeftPanel = () => {
    const { t } = useTranslation();
    return (
        <div className="card card-sidepanel">
            <h5>{ t('Service Details') }</h5>
            <Divider />
            <h5>{ t('Store Policies') }</h5>
            <a className="txt underline clear clear-both">{ t('Payments') }</a>
            <a className="txt underline clear clear-both">{ t('Rescheduling and Cancellation') }</a>
            <Divider />
            <h5>{ t('About Me') }</h5>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <Divider />
            <h5>{ t('Social Media') }</h5>
            <div className="social-media-icons-grid mt-5">
                <a><FacebookIcon /></a>
                <a><TwitterIcon /></a>
                <a><YouTubeIcon /></a>
                <a><LinkedInIcon /></a>
            </div>
        </div>
    )
}

export default ServiceDetailsLeftPanel
