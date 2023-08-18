import React from "react";

import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';
import './MoreToolTip.css';

const MoreToolTip = () => {
  return (
    <div className="moretool">
        <div className="moretool_in">
            <NotificationsIcon />
            <a href="https://www.flipkart.com/communication-preferences/push?t=all" className="link_rel">Notification Preferences</a>
        </div>
        <hr />
        <div className="moretool_in">
            <LiveHelpIcon />
            <a href="https://www.flipkart.com/helpcentre" className="link_rel">24*7 Customer Care</a>
        </div>
        <hr />
        <div className="moretool_in">
            <TrendingUpIcon />
            <a href="https://advertising.flipkart.com/login?returl=/?otracker=ch_vn_advertise_header" className="link_rel">Advertise</a>
        </div>
        <hr />
        <div className="moretool_in">
            <GetAppIcon />
            <a href="https://www.flipkart.com/mobile-apps?otracker=ch_vn_mobile_apps" className="link_rel">Download App</a>
        </div>
    </div>
  )
}

export default MoreToolTip