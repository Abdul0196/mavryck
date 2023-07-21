// import { Logo } from "./images/products/projectManager.svg"
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Breadcrumb from "../components/UI/Breadcrumb";
import ScenarioModelsTable from "../components/ScenarioPlanning/ScenarioModelsTable";
import "../components/UI/Dropdown.css";
import "./ScenarioPlanning.css";
import "../components/UI/DataGridCustomTheme.css"


const ScenarioPlanning = () => {
    const [dd_visible, setdd_visible] = useState(false);
    const dropdownBtnClickHandler = () => {
        setdd_visible(!dd_visible)
    }
    const breadcrumb = [
        {
            "title": "Project Manager",
            "img": `${process.env.PUBLIC_URL}/images/products/projectManager.svg`
        },
        {
            "title": "Scenario building",
            "img": `${process.env.PUBLIC_URL}/images/icons/breadcrumb/scenario_building.svg`,
            "current": true
        }
    ];


    return (
        <div className="main">
            <Sidebar logo={`${process.env.PUBLIC_URL}/images/products/projectManager.svg`} screenIcon={`${process.env.PUBLIC_URL}/images/icons/scenarioPlanning.svg`}></Sidebar>
            <div className="content">
                <Breadcrumb data={breadcrumb} />
                {/* Page content <start> */}
                <div className="title flex flex-wrap justify-between mb-6">
                    <h1 className="font-microgramma text-black text-20">Scenario Models</h1>
                    <div className="dropdown">
                        <button onClick={dropdownBtnClickHandler} className="dd-button flex flex-wrap gap-x-2 text-primary font-bold items-center"><img src="./images/icons/plus.svg" alt="add" /> New Model</button>
                        <div className={dd_visible ? "dd-menu show" : "dd-menu"}>
                            <label htmlFor="CostScenario">
                                <input id="CostScenario" type="checkbox" /> <img src="./images/icons/scenarioModels/cps.svg" alt="cps" /> Cost Scenario
                            </label>
                            <label htmlFor="Schedule">
                                <input id="Schedule" type="checkbox" /> <img src="./images/icons/scenarioModels/construction.svg" alt="construction" /> Schedule
                            </label>
                            <label htmlFor="RiskScenario">
                                <input id="RiskScenario" type="checkbox" /> <img src="./images/icons/scenarioModels/nuclear.svg" alt="nuclear" /> Risk Scenario
                            </label>
                            <button className="btn doneBtn" onClick={dropdownBtnClickHandler}>Done</button>
                        </div>
                    </div>
                </div>
                <ScenarioModelsTable />
                {/* Page content <end> */}
            </div>
        </div>
    )
}

export default ScenarioPlanning;