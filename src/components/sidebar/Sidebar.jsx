import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar" >
      <div className="top">
        <span className="logo">ShivaAdmin</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p>Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p>List</p>
          <li>
            <PersonIcon  className="icon" />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p>Useful</p>
          <li>
            <QueryStatsIcon  className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <MonitorHeartIcon  className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon  className="icon" />
            <span>Logs</span>
          </li>
          <p>System</p>
          <li>
            <SettingsIcon  className="icon" />
            <span>Settings</span>
          </li>
          <p>User</p>
          <li>
            <AssignmentIndIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon  className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption light"></div>
        <div className="colorOption dark"></div>
      </div>
    </div>
  )
}

export default Sidebar