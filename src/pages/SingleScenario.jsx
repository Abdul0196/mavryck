import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Breadcrumb from "../components/UI/Breadcrumb";
import AddMember from "../components/ScenarioPlanning/AddMember";
import SingleScenarioModelsTable from "../components/ScenarioPlanning/SingleScenarioModelsTable";
import SingleScenarioActionButtons from "../components/ScenarioPlanning/SingleScenarioActionButtons";
import VisualizationPanel from "../components/ScenarioPlanning/VisualizationPanel";
import SubscriptionAlert from "../components/UI/SubscriptionAlert";
import CostImpactPanel from "../components/ScenarioPlanning/CostImpactPanel";
import DraggableDrawer from "../components/DraggableDrawer/DraggableDrawer"
import "./SingleScenario.css";
import "../components/UI/DataGridCustomTheme.css"


const SingleScenario = (props) => {
    const {id} = useParams()
    const [showSubsAlert, setshowSubsAlert] = useState(false);
    const [visualPanelShow, setvisualPanelShow] = useState(false);
    const [costImpactPanelShow, setcostImpactPanelShow] = useState(false);
    const [comparatorGridVisible, setcomparatorGridVisible] = useState(true)

    useEffect(() => {
        setshowSubsAlert(true)
        setTimeout(()=>{
            setshowSubsAlert(false)
        }, 2000)
    },[])
    
    const panelShowToggle = () => {
        setvisualPanelShow(!visualPanelShow)
    }

    const costPanelShowToggle = () => {
        setcostImpactPanelShow(!costImpactPanelShow)
    }

    const gridVisibilityHandler = (val) => {
        setcomparatorGridVisible(val)
    }
    
    const breadcrumb = [
        {
            "title": "Project Manager",
            "img": `${process.env.PUBLIC_URL}/images/products/projectManager.svg`
        },
        {
            "title": "Scenario Building",
            "img": `${process.env.PUBLIC_URL}/images/icons/breadcrumb/scenario_building.svg`,
        },
        {
            "title": "Nuclear Plant",
            "img": `${process.env.PUBLIC_URL}/images/icons/scenarioModels/nuclear.svg`,
            "current": true
        }
    ];

    return (
        <div className="main">
            <Sidebar logo={`${process.env.PUBLIC_URL}/images/products/projectManager.svg`} comparatorAndGant={true} gridVisibility={gridVisibilityHandler}></Sidebar>
            <SubscriptionAlert show={showSubsAlert} />
            <div className="content !pr-12">
                <div className="flex flex-wrap justify-between">
                    <Breadcrumb data={breadcrumb} />
                    {/* add members <start> */}
                    <AddMember />
                    {/* add members <end> */}
                </div>
                <div className="title flex flex-wrap justify-between mb-6">
                    <h1 className="font-microgramma text-black text-20">Activities <span className="font-roboto font-bold text-primary">(Baseline)</span></h1>
                    {/* action buttons <start> */}
                    <SingleScenarioActionButtons  panelToggle={panelShowToggle} costPanelToggle={costPanelShowToggle} />
                    {/* action buttons <end> */}
                </div>
                {/* Page content <start> */}
                <SingleScenarioModelsTable />
                {/* Page content <end> */}
            </div>
            <VisualizationPanel show={visualPanelShow} panelToggle={panelShowToggle} />
            {/* cost Impact Panel <start> */}
            <CostImpactPanel show={costImpactPanelShow} costPanelToggle={costPanelShowToggle} />
            {/* cost Impact Panel <end> */}
            {/* Comperator grid <start> */}
            <DraggableDrawer gridVisible={comparatorGridVisible} />
            {/* Comperator grid <end> */}
        </div>
    )
};

export default SingleScenario;
