import { Tooltip } from 'react-tooltip'
import { BsPlusCircleFill } from "react-icons/bs"
import "./AddMember.css"

const AddMember = (props) => {
  return (
    <div className="addMem-lkDs flex">
        {/* <!-- members --> */}
        <div className="members flex">
            <div className="avatar"><img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="member" /></div>
            <div className="avatar"><img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="member" /></div>
            <div className="avatar"><img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="member" /></div>
            {/* <!-- add member button --> */}
            <button id="addMember" className="ml-5 text-primary" data-tooltip-id="bbTooltip" data-tooltip-content="Add Member"><BsPlusCircleFill /></button>
            {/* <!-- add member button --> */}
            <Tooltip id="bbTooltip" place="right"/>
        </div>
        {/* <!-- members --> */}
    </div>
  )
};

export default AddMember;
