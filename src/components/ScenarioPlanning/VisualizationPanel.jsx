import Select, { components } from 'react-select'
import { AiOutlineSearch } from "react-icons/ai"
import {HiChevronDown} from "react-icons/hi2"
import "./VisualizationPanel.css"

const VisualizationPanel = (props) => {
    
    const { panelToggle } = props;
    const panelToggleHandler = () => {
        panelToggle()
    }

    const handleChange = (option) => {
        console.log(option)
    };

    const projectOptions = [
        { value: '1', label: 'Chemical Project (10y)' },
        { value: '2', label: 'Construction (20d)' },
        { value: '3', label: 'Power plant (30y)' }
    ];
    const Placeholder = (props) => {
        return <components.Placeholder {...props} />;
    };

    return (
        <div id="sidebar" className={`visualization fixed pt-16 px-10 pb-8 ${props.show ? "open" : ""}`}>
            <button className="close absolute" title="Close" onClick={panelToggleHandler}><img src={`${process.env.PUBLIC_URL}/images/icons/openPanel.svg`} alt="backward" /></button>
            <h2 className="font-microgramma mb-8">Visualization</h2>
            <div className="inner-block">
                <h3 className="font-bold mb-5">Features</h3>
                <div className="input-group flex flex-wrap mx-auto mb-6">
                    <div className="input-group-prepend ml-4">
                        <span><AiOutlineSearch /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
                {/* <!-- tables fields --> */}
                <div className="flds mb-8">
                    <p className="flex flex-wrap justify-center items-center gap-x-4 mb-4"><HiChevronDown /> <label className="inline-flex flex-wrap m-0 items-center gap-x-3"><input type="checkbox" /> <img src={`${process.env.PUBLIC_URL}/images/icons/table_icon.svg`} alt="table" /> Nuclear Plant</label></p>
                    <ul className="mb-6">
                        <li>
                            <label><input type="checkbox" /> ID</label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> WBS</label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> Task name</label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> Duration in P6</label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> Duration in contract</label>
                        </li>
                    </ul>
                </div>
                {/* <!-- tables fields --> */}
                {/* <!-- versions --> */}
                <div className="versions mb-8">
                    <h3 className="font-bold mb-5">Versions(tbd)</h3>
                    <ul className="mb-5">
                        <li>
                            <label>
                                <input type="radio" id="" name="versions" value="" /> Version
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" id="" name="versions" value="" /> Baseline
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" id="" name="versions" value="" /> Version 02
                            </label>
                        </li>
                    </ul>
                </div>
                {/* <!-- versions --> */}
                {/* <!-- Comparison --> */}
                <div className="comparison">
                    <h3 className="font-bold mb-5">Comparison</h3>
                    <ul className="mb-5">
                        <li>
                            <label>
                                <input type="radio" id="" name="Comparison" value="" /> Past Performance of Activity Duration
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" id="" name="Comparison" value="" /> Past Historical Alike Activities Duration
                            </label>
                        </li>
                    </ul>
                    <Select onChange={handleChange} id='ComparisonSelect' options={projectOptions} components={{ Placeholder }} placeholder={'Select Project'} />
                </div>
                {/* <!-- Comparison --> */}
            </div>
        </div>
    )
};

export default VisualizationPanel;
