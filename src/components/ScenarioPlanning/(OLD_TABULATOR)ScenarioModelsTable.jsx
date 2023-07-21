import 'react-tabulator/css/tabulator_simple.min.css';
// import 'react-tabulator/lib/styles.css';
// import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import { ReactTabulator, reactFormatter } from 'react-tabulator'
import { BsThreeDotsVertical } from "react-icons/bs"
import {HiChevronRight} from "react-icons/hi2"
import "./ScenarioModelsTable.css"


function NameIcon(props) {
  const proj_name = props.cell._cell.row.data.name;
  if (proj_name.toLowerCase().includes("chemical")){
    return <span className='pro_name flex flex-wrap items-center text-primary'><HiChevronRight /> <img src="./images/icons/scenarioModels/cps.svg" alt="chemical" /> {proj_name}</span>;
  } else if (proj_name.toLowerCase().includes("construction")){
    return <span className='pro_name flex flex-wrap items-center text-primary'><HiChevronRight /> <img src="./images/icons/scenarioModels/construction.svg" alt="construction" /> {proj_name}</span>;
  } else if (proj_name.toLowerCase().includes("nuclear")){
    return <span className='pro_name flex flex-wrap items-center text-primary'><HiChevronRight /> <img src="./images/icons/scenarioModels/nuclear.svg" alt="nuclear" /> {proj_name}</span>;
  } else {
    return <span className='pro_name flex flex-wrap items-center text-primary'><HiChevronRight /> {proj_name}</span>;
  }
}

function StatusBadge(props) {
  const status = props.cell._cell.row.data.statuses.toLowerCase();
  let badgeClass = "";
  if(status.includes("needed")) {
    badgeClass = "badge-danger"
  } else {
    badgeClass = "badge-success"
  }
  return <span className={`badge ${badgeClass}`}>{props.cell._cell.row.data.statuses}</span>;
}

function AssingedTo(props) {
  const name =  props.cell._cell.row.data.assigned_to;
  const names = name.split(" ")
  const firstLetter = names[0].charAt(0).toUpperCase();
  const secondLetter = names[1].charAt(0).toUpperCase();
  return <div className='assignee flex flex-wrap items-center text-primary'><span className="shrt_name inline-flex items-center justify-center font-bold rounded-2xl">{firstLetter}{secondLetter}</span>{name}</div>;
}

function ActionButton(props) {
  const rowData = props.cell._cell.row.data;
  const cellValue = props.cell._cell.value || <BsThreeDotsVertical />;
  return <button id="editModel" className='text-primary text-20' onClick={() => alert(rowData.name)}>{cellValue}</button>;
}

const ScenarioModelsTable = (props) => {
    const columns = [
        { title: "Name", field: "name", vertAlign:"middle", formatter: reactFormatter(
          <NameIcon />
        )},
        { title: "Statuses", field: "statuses", vertAlign:"middle", formatter: reactFormatter(
          <StatusBadge />
        )},
        { title: "Description", field: "description", vertAlign:"middle" },
        { title: "Created", field: "created", vertAlign:"middle" },
        { title: "Assigned to", field: "assigned_to", vertAlign:"middle", formatter: reactFormatter(
          <AssingedTo />
        )},
        { title: "Progress", field: "progress", vertAlign:"middle", width: 150 },
        { title: "", field: "actions", width: 100, headerSort:false, hozAlign: "center", vertAlign:"middle", 
        formatter: reactFormatter(
          <ActionButton
            onSelect={(name) => {
              this.setState({ selectedName: name });
              alert(name);
            }}
          />
        )}
    ];
    var data = [
        {
          id: 1,
          name: "Chemical Plant Scenario",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Amanda Ali",
          progress: "100%"
        },
        {
          id: 2,
          name: "Construction",
          statuses: "Updated needed",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Jase pasey",
          progress: "100%"
        },
        {
          id: 3,
          name: "Nuclear plant",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Shoaib Muner",
          progress: "100%"
        },
        {
          id: 4,
          name: "Chemical Plant Scenario",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Wajahat Saleem",
          progress: "100%"
        },
        {
          id: 5,
          name: "Nuclear plant",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Shoaib Muner",
          progress: "100%"
        },
        {
          id: 6,
          name: "Chemical Plant Scenario",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Wajahat Saleem",
          progress: "100%"
        },
        {
          id: 7,
          name: "Chemical Plant Scenario",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Wajahat Saleem",
          progress: "100%"
        },
        {
          id: 8,
          name: "Nuclear plant",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Shoaib Muner",
          progress: "100%"
        },
        {
          id: 9,
          name: "Chemical Plant Scenario",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Wajahat Saleem",
          progress: "100%"
        },
        {
          id: 10,
          name: "Chemical Plant Scenario",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Wajahat Saleem",
          progress: "100%"
        },
        {
          id: 11,
          name: "Nuclear plant",
          statuses: "Updated",
          description: "No description",
          created: "01/01/1980",
          assigned_to: "Shoaib Muner",
          progress: "100%"
        }
    ];

    const options = {
      layout:"fitColumns",
      maxHeight:"100%"
    };

    return (
        <ReactTabulator
        data={data}
        columns={columns}
        options={options}
        />
    )
};

export default ScenarioModelsTable;
