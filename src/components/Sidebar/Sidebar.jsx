import "./Sidebar.css"
import { Tooltip } from 'react-tooltip'
import { AiOutlineSearch } from "react-icons/ai"
import { Fragment } from "react"

const Sidebar = (props) => {
    const {gridVisibility} = props;

    return (
        <div className="sidebar fixed h-screen">
            <div>
                <img className="logo mb-8 block mx-auto" src={props.logo} alt="product logo" />
                <div className="searchField flex justify-center items-center relative mb-4">
                    <AiOutlineSearch />
                    <input className="font-medium" id="search" type="text" placeholder="Search" />
                </div>
                {props.screenIcon && <div className="navLink flex justify-center items-center mb-2"><img src={props.screenIcon} alt="icons" /></div>}
                {props.comparatorAndGant && (
                    <Fragment>
                        <button onClick={()=>gridVisibility(true)} className="navLink flex justify-center items-center mb-2 w-full" data-tooltip-id="sidebarTooltip" data-tooltip-content="Table View"><img src={`${process.env.PUBLIC_URL}/images/icons/table_icon.svg`} alt="table" /></button>
                        <button onClick={()=>gridVisibility(false)} className="navLink flex justify-center items-center mb-2 w-full" data-tooltip-id="sidebarTooltip" data-tooltip-content="Gantt Chart"><img src={`${process.env.PUBLIC_URL}/images/icons/gantt_icon.svg`} alt="gantt" /></button>
                    </Fragment>
                )}
            </div>
            <ul className="flex flex-wrap flex-col m-0 list-none items-center pt-5 relative">        
                <li>
                    <button data-tooltip-id="sidebarTooltip" data-tooltip-content="Information" id="headernavbtn">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/sidebar/rocket.svg`} alt="rocket" />
                    </button>
                </li>
                <li>
                    <button data-tooltip-id="sidebarTooltip" data-tooltip-content="Notification">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/sidebar/noti.svg`} alt="notification" />
                    </button>
                </li>
                <li>
                    <button data-tooltip-id="sidebarTooltip" data-tooltip-content="Mails">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/sidebar/env.svg`} alt="envelope" />
                    </button>
                </li>
                <li className="items-group relative">
                    <a href="apps.html" id="apps" title="Apps">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/sidebar/apps.svg`} alt="Apps" />
                    </a>
                    <div className="absolute">
                        <a href="/" data-tooltip-id="sidebarTooltip" data-tooltip-content="Mavryck">
                            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Mavryck" />
                        </a>
                        <a href="/" data-tooltip-id="sidebarTooltip" data-tooltip-content="Calendar">
                            <img src={`${process.env.PUBLIC_URL}/images/products/calendar.svg`} alt="calendar" />
                        </a>
                        <a href="/" data-tooltip-id="sidebarTooltip" data-tooltip-content="VivClima">
                            <img src={`${process.env.PUBLIC_URL}/images/products/vivclima.svg`} alt="vivclima" />
                        </a>
                        <a href="/" data-tooltip-id="sidebarTooltip" data-tooltip-content="Project Manager">
                            <img src={`${process.env.PUBLIC_URL}/images/products/projectManager.svg`} alt="project manager" />
                        </a>
                        <a href="/" data-tooltip-id="sidebarTooltip" data-tooltip-content="Computer Vision">
                            <img src={`${process.env.PUBLIC_URL}/images/products/com_vision.svg`} alt="computer vision" />
                        </a>
                    </div>
                </li>
                <li className="avatar items-center justify-center relative">
                    <span>
                        <img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="user-img" />
                    </span>
                    <button className="absolute py-2 inline-flex flex-wrap items-center justify-center"><img src={`${process.env.PUBLIC_URL}/images/icons/sidebar/logout.svg`} alt="logout" /> Sign Out</button>
                </li>                
            </ul>
            <Tooltip id="sidebarTooltip" place="right"/>
        </div>
    )
}

export default Sidebar;