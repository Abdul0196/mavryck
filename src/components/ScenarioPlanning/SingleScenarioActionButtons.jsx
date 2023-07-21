import { Tooltip } from 'react-tooltip';
import "./SingleScenarioActionButtons.css";

const SingleScenarioActionButtons = (props) => {
    const { panelToggle, costPanelToggle } = props;

    const panelToggleHandler = () => {
        panelToggle()
    }

    const costPanelToggleHandler = () => {
        costPanelToggle()
    }
    return (
        <ul className="helperbtns flex flex-wrap items-center gap-x-5">
            <li><button id="btmBarBtn" onClick={costPanelToggleHandler} style={{width: 110,backgroundColor: '#777',color: '#fff',padding: 5,textAlign: 'center',justifyContent: 'center'}} data-original-title="Bottom bar">Bottom bar</button></li>
            <li><button data-tooltip-id="actionBtnsTooltip" data-tooltip-content="Import"><img src={`${process.env.PUBLIC_URL}/images/icons/download.svg`} alt="download" /></button></li>
            <li><button data-tooltip-id="actionBtnsTooltip" data-tooltip-content="Export"><img src={`${process.env.PUBLIC_URL}/images/icons/upload.svg`} alt="upload" /></button></li>
            <li><button data-tooltip-id="actionBtnsTooltip" data-tooltip-content="Filter"><img src={`${process.env.PUBLIC_URL}/images/icons/funnel.svg`} alt="funnel" /></button></li>
            <li><button data-tooltip-id="actionBtnsTooltip" data-tooltip-content="Full Screen"><img src={`${process.env.PUBLIC_URL}/images/icons/Full_Screen_Corner.svg`} alt="Full_Screen_Corner" /></button></li>
            <li><button data-tooltip-id="actionBtnsTooltip" data-tooltip-content="Visualization" onClick={panelToggleHandler}><img src={`${process.env.PUBLIC_URL}/images/icons/openPanel.svg`} alt="visualization" /></button></li>
            <Tooltip id="actionBtnsTooltip" place="top"/>
        </ul>
    )
};

export default SingleScenarioActionButtons;