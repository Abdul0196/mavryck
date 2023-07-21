import React, { useState, useRef, useEffect, useMemo, useCallback, memo} from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS


import { BsThreeDotsVertical } from "react-icons/bs";
import {HiChevronRight} from "react-icons/hi2";
import "./ScenarioModelsTable.css";

const ScenarioModelsTable = () => {
  
    const gridRef = useRef(null); // Optional - for accessing Grid's API

    // const rowRefs = useRef({});

    const [rowData, setRowData] = useState([
      {        
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Amanda Ali",
        progress: "90%"
      },
      {
        name: "Construction",
        status: "Updated needed",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Jase pasey",
        progress: "100%"
      },
      {
        name: "Nuclear plant",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Shoaib Muner",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Nuclear plant",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Shoaib Muner",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Nuclear plant",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Shoaib Muner",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Nuclear plant",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Shoaib Muner",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Nuclear plant",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Shoaib Muner",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Nuclear plant",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Shoaib Muner",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Nuclear plant",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Shoaib Muner",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Chemical Plant Scenario",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Wajahat Saleem",
        progress: "100%"
      },
      {
        name: "Nuclear plant",
        status: "Updated",
        description: "No description",
        created: "01/01/1980",
        assigned_to: "Shoaib Muner",
        progress: "100%"
      }
    ]); // Set rowData to Array of Objects, one Object per Row


    const nameFormatRenderer = (params) => {
      const proj_name = params.data.name;
      if (proj_name.toLowerCase().includes("chemical")){
        return <Link to={proj_name}><span className='pro_name flex flex-wrap items-center text-primary'><HiChevronRight /> <img src="./images/icons/scenarioModels/cps.svg" alt="chemical" /> {proj_name}</span></Link>;
      } else if (proj_name.toLowerCase().includes("construction")){
        return <Link to={proj_name}><span className='pro_name flex flex-wrap items-center text-primary'><HiChevronRight /> <img src="./images/icons/scenarioModels/construction.svg" alt="construction" /> {proj_name}</span></Link>;
      } else if (proj_name.toLowerCase().includes("nuclear")){
        return <Link to={proj_name}><span className='pro_name flex flex-wrap items-center text-primary'><HiChevronRight /> <img src="./images/icons/scenarioModels/nuclear.svg" alt="nuclear" /> {proj_name}</span></Link>;
      } else {
        return <Link to={proj_name}><span className='pro_name flex flex-wrap items-center text-primary'><HiChevronRight /> {proj_name}</span></Link>;
      }
    }

    const statusFormatRenderer = (params) => {
      const status = params.data.status.toLowerCase();
      let badgeClass = "";
      if(status.includes("needed")) {
        badgeClass = "badge-danger"
      } else {
        badgeClass = "badge-success"
      }
      return <span className={`badge ${badgeClass}`}>{params.data.status}</span>;
    }

    const assingneeFormatRenderer = (params) => {
      const name =  params.data.assigned_to;
      const names = name.split(" ")
      const firstLetter = names[0].charAt(0).toUpperCase();
      const secondLetter = names[1].charAt(0).toUpperCase();
      return <div className='assignee flex flex-wrap items-center text-primary'><span className="shrt_name inline-flex items-center justify-center font-bold rounded-2xl">{firstLetter}{secondLetter}</span>{name}</div>;
    }
    
    // const handleActionBtnClick = (row) => {
    //   console.log(row);
    // };

    const actionBtnRenderer = (params) => (
      <button className='text-primary text-20' onClick={() => console.log(params.data)}><BsThreeDotsVertical /></button>
    );


    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
      {
        field: 'name',
        headerName: 'Name',
        width: 200,
        cellRenderer: 'nameFormatRenderer',
      },
      { field: 'status', headerName: 'Statuses', cellRenderer: 'statusFormatRenderer', },
      { field: 'description', headerName: 'Description' },
      { field: 'created', headerName: 'Created' },
      { field: 'assigned_to', headerName: 'Assigned to', cellRenderer: 'assingneeFormatRenderer', },
      { field: 'progress', headerName: 'Progress', width: 150 },
      {
        headerName: '',
        width: 80,
        cellRenderer: 'actionBtnRenderer',
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    ]);

    // const frameworkComponents = {
    //   buttonCellRenderer: buttonCellRenderer,
    // };

    const getRowStyle = (params) => {
      const defaultStyle = window.getComputedStyle(params.node.rowDom);
      const defaultTransform = defaultStyle.transform;
      const additionalTransform = 'translateX(8px)'; // Add your additional transformation here
      const updatedTransform = `${defaultTransform} ${additionalTransform}`;
      return { transform: updatedTransform };
    };

    const components = useMemo(() => {
      return {
        nameFormatRenderer: nameFormatRenderer,
        statusFormatRenderer: statusFormatRenderer,
        assingneeFormatRenderer: assingneeFormatRenderer,
        actionBtnRenderer: actionBtnRenderer,
      };
    }, []);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo( ()=> ({
      sortable: true,
      autoHeight: true
    }));

    // const onFirstDataRendered = () => {
    //   const gridRows = document.querySelectorAll('.ag-body .ag-row');
    //   gridRows.forEach((row) => {
    //     const rowId = row.getAttribute('row-id');
    //     if (rowId) {
    //       rowRefs.current[rowId] = row;
    //       row.style.transform += 10; // Add your additional transformation here
    //       console.log(row.style.transform)
    //     }
    //   });
    // };

    const onGridReady = (params) => {
      const { api } = params;
      api.sizeColumnsToFit();
      // api.forEachNode((node) => {
      //   const rowId = node.id;
      //   const rowElement = params.api.getRowNode(rowId).rowElement;
      //   rowRefs.current[rowId] = rowElement;
      // });
    };

    return (
      <div>
        <div className="ag-theme-alpine" style={{ height: '100vh', width: '100%' }}>

          <AgGridReact
              ref={gridRef} // Ref for accessing Grid's API
              rowData={rowData} // Row Data for Rows
              columnDefs={columnDefs} // Column Defs for Columns
              defaultColDef={defaultColDef} // Default Column Properties
              headerHeight={50}
              components={components}
              animateRows={true} // Optional - set to 'true' to have rows animate when sorted
              rowSelection='multiple' // Options - allows click selection of rows
              // onFirstDataRendered={onFirstDataRendered}
              onGridReady={onGridReady}
              />
        </div>
      </div>
    )
};

export default memo(ScenarioModelsTable);
