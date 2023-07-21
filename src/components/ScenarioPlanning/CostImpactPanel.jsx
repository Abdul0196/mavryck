import {HiChevronDown} from "react-icons/hi2";
import "./CostImpactPanel.css"

const CostImpactPanel = (props) => {
    // const { costPanelToggle } = props;

    const costPanelToggleHandler = () => {
        props.costPanelToggle()
    }

    return (
        <div id="costImpactPanel" className={`fixed pb-5 ${props.show ? "open" : ""}`}>
            <div className="head flex flex-wrap justify-between items-center px-6 mb-5">
                <h2 className="font-light m-0">Vault Maintenance</h2>
                <button onClick={costPanelToggleHandler} className="close flex flex-wrap items-center font-semibold">Comparison <HiChevronDown /></button>
                <button className="costImpact bg-primary text-white py-1 px-3 font-semibold">Cost Impact</button>
            </div>
            <div className="flex flex-wrap justify-between px-6 custmPad">
                {/* <!-- delayed --> */}
                <div className="w-1/3 delayed">
                    <h4>Contract</h4>
                    <span className="status">Delayed</span>
                    <p>10</p>
                    <h5><span>$1000</span> <sub>- 1,7%</sub></h5>
                    <div className="splineChart">
                        <img src={`${process.env.PUBLIC_URL}/images/splineChart/delayedSplineChart.svg`} alt="delayedSplineChart" />
                    </div>
                </div>
                {/* <!-- delayed <end> --> */}
                {/* <!-- on time --> */}
                <div className="w-1/3 onTime">
                    <h4>P6 Schedule</h4>
                    <span className="status">On time</span>
                    <p>6 days</p>
                    <h5><span>$100</span> <sub>+ 3,4%</sub></h5>
                    <div className="splineChart">
                        <img src={`${process.env.PUBLIC_URL}/images/splineChart/ontimeSplineChart.svg`} alt="ontimeSplineChart" />
                    </div>
                </div>
                {/* <!-- on time <end> --> */}
                {/* <!-- Not started --> */}
                <div className="w-1/3 notStarted">
                    <h4>Assumptions</h4>
                    <span className="status">Not started</span>
                    <p>11 days</p>
                    <h5><span>$140,42</span> <sub>+ 2,8%</sub></h5>
                    <div className="splineChart">
                        <img src={`${process.env.PUBLIC_URL}/images/splineChart/notstartedSplineChart.svg`} alt="notstartedSplineChart" />
                    </div>
                </div>
                {/* <!-- Not started <end> --> */}
            </div>
        </div>
    )
};

export default CostImpactPanel;
