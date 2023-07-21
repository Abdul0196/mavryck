import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { BsThreeDotsVertical } from "react-icons/bs";
import "./SingleScenarioModelsTable.css"


const SingleScenarioModelsTable = () => {
    const gridRef = useRef(null); // Optional - for accessing Grid's API  

    const [rowData, setRowData] = useState([
        {
            id: 1,
            wbs: "700200-Proj-Pier9",
            taskName: "Point park Grand lake",
            durationInP6: "36",
            durationInAssumptions: "No result found.",
            durationInContract: "No result found.",
            relationshipsAndLags: "",
        },
        {
            id: 700100,
            wbs: "700200-Proj",
            taskName: "Project Start",
            durationInP6: "0",
            durationInAssumptions: "No result found.",
            durationInContract: "No result found.",
            relationshipsAndLags: "700100 is FS with 700101",
        },
        {
            id: 700101,
            wbs: "700200-Proj",
            taskName: "Design and engineering",
            durationInP6: "21",
            durationInAssumptions: "22",
            durationInContract: "No result found.",
            relationshipsAndLags: "700101 is FS with 700102",
        },
        {
            id: 700102,
            wbs: "700200-Proj-Pier1",
            taskName: "Permit",
            durationInP6: "6",
            durationInAssumptions: "10",
            durationInContract: "No result found.",
            relationshipsAndLags: "700102 is FS with 700103",
        },
        {
            id: 700103,
            wbs: "700200-Proj-Pier1",
            taskName: "Site handover",
            durationInP6: "4",
            durationInAssumptions: "No result found.",
            durationInContract: "No result found.",
            relationshipsAndLags: "700103 is FS with 700104 \n700103 is FS with 700107 \n700103 is FS with 700110",
        },
        {
            id: 700104,
            wbs: "700200-Proj-Pier1",
            taskName: "Piling 1 installation",
            durationInP6: "2",
            durationInAssumptions: "5",
            durationInContract: "162",
            relationshipsAndLags: "700104 is FS with 700105",
        },
        {
            id: 700105,
            wbs: "700200-Proj-Pier1",
            taskName: "Piling 1 testing and inspection",
            durationInP6: "2",
            durationInAssumptions: "2",
            durationInContract: "No result found.",
            relationshipsAndLags: "700105 is FS with 700106",
        },
        {
            id: 700106,
            wbs: "700200-Proj-Pier1",
            taskName: "Pile 1 cap installation",
            durationInP6: "1",
            durationInAssumptions: "4",
            durationInContract: "No result found.",
            relationshipsAndLags: "700106 is FS with 700113",
        },
        {
            id: 700107,
            wbs: "700200-Proj-Pier1",
            taskName: "Piling 2 installation",
            durationInP6: "1",
            durationInAssumptions: "4",
            durationInContract: "69",
            relationshipsAndLags: "700107 is FS with 700108",
        },
        {
            id: 700108,
            wbs: "700200-Proj-Pier1",
            taskName: "Piling 2 testing and inspection",
            durationInP6: "1",
            durationInAssumptions: "1",
            durationInContract: "No result found.",
            relationshipsAndLags: "700108 is FS with 700109",
        },
        {
            id: 700109,
            wbs: "700200-Proj-Pier1",
            taskName: "Pile 2 cap installation",
            durationInP6: "2",
            durationInAssumptions: "5",
            durationInContract: "No result found.",
            relationshipsAndLags: "700109 is FS with 700113",
        },
        {
            id: 700110,
            wbs: "700200-Proj-Pier1",
            taskName: "Piling 3 installation",
            durationInP6: "4",
            durationInAssumptions: "7",
            durationInContract: "69",
            relationshipsAndLags: "700110 is FS with 700111",
        },
        {
            id: 700111,
            wbs: "700200-Proj-Pier1",
            taskName: "Piling 3 testing and inspection",
            durationInP6: "2",
            durationInAssumptions: "2",
            durationInContract: "No result found.",
            relationshipsAndLags: "700111 is FS with 700112",
        },
        {
            id: 700112,
            wbs: "700200-Proj-Pier1",
            taskName: "Pile 3 cap installation",
            durationInP6: "3",
            durationInAssumptions: "6",
            durationInContract: "No result found.",
            relationshipsAndLags: "700112 is FS with 700113",
        },
        {
            id: 700113,
            wbs: "700200-Proj-Pier1",
            taskName: "Backfilling and site cleanup",
            durationInP6: "2",
            durationInAssumptions: "No result found.",
            durationInContract: "No result found.",
            relationshipsAndLags: "700113 is FS with 700114",
        },
        {
            id: 700114,
            wbs: "700200-Proj-Pier2",
            taskName: "Permit",
            durationInP6: "10",
            durationInAssumptions: "14",
            durationInContract: "No result found.",
            relationshipsAndLags: "700114 is FS with 700115",
        },
        {
            id: 700115,
            wbs: "700200-Proj-Pier2",
            taskName: "Site handover",
            durationInP6: "1",
            durationInAssumptions: "No result found.",
            durationInContract: "No result found.",
            relationshipsAndLags: "700115 is FS with 700116 \n700115 is FS with 700119 \n700115 is FS with 700122",
        },
        {
            id: 700116,
            wbs: "700200-Proj-Pier2",
            taskName: "Piling 4 installation",
            durationInP6: "1",
            durationInAssumptions: "4",
            durationInContract: "119",
            relationshipsAndLags: "700116 is FS with 700117",
            dots: ""
        },
        {
            id: 700117,
            wbs: "700200-Proj-Pier2",
            taskName: "Piling 4 testing and inspection",
            durationInP6: "1",
            durationInAssumptions: "1",
            durationInContract: "No result found.",
            relationshipsAndLags: "700117 is FS with 700118",
            dots: ""
        },
        {
            id: 700118,
            wbs: "700200-Proj-Pier2",
            taskName: "Pile 4 cap installation",
            durationInP6: "4",
            durationInAssumptions: "7",
            durationInContract: "No result found.",
            relationshipsAndLags: "700118 is FS with 700125",
            dots: ""
        },
        {
            id: 700119,
            wbs: "700200-Proj-Pier2",
            taskName: "Piling 5 installation",
            durationInP6: "2",
            durationInAssumptions: "5",
            durationInContract: "156",
            relationshipsAndLags: "700119 is FS with 700120",
            dots: ""
        },
        {
            id: 700120,
            wbs: "700200-Proj-Pier2",
            taskName: "Piling 5 testing and inspection",
            durationInP6: "3",
            durationInAssumptions: "3",
            durationInContract: "No result found.",
            relationshipsAndLags: "700120 is FS with 700121",
            dots: ""
        },
        {
            id: 700121,
            wbs: "700200-Proj-Pier2",
            taskName: "Pile 5 cap installation",
            durationInP6: "2",
            durationInAssumptions: "5",
            durationInContract: "No result found.",
            relationshipsAndLags: "700121 is FS with 700125",
            dots: ""
        },
        {
            id: 700122,
            wbs: "700200-Proj-Pier2",
            taskName: "Piling 6 installation",
            durationInP6: "4",
            durationInAssumptions: "7",
            durationInContract: "115",
            relationshipsAndLags: "700122 is FS with 700123",
            dots: ""
        },
        {
            id: 700123,
            wbs: "700200-Proj-Pier2",
            taskName: "Piling 6 testing and inspection",
            durationInP6: "2",
            durationInAssumptions: "2",
            durationInContract: "No result found.",
            relationshipsAndLags: "700123 is FS with 700124",
            dots: ""
        }
    ]); // Set rowData to Array of Objects, one Object per Row

    const CustomHeaderButton = () => (
        <button className='text-primary text-20' onClick={() => console.log('Button clicked!')}><BsThreeDotsVertical /></button>
    );

    const lineBreakCellRenderer = (params) => {
        return <div style={{ whiteSpace: 'pre-line' }}>{params.value}</div>;
    };

    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
      {
        field: 'id',
        headerName: 'ID',
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      { field: 'wbs', headerName: 'WBS' },
      { field: 'taskName', headerName: 'Task Name' },
      { field: 'durationInP6', headerName: 'Duration in P6' },
      { field: 'durationInAssumptions', headerName: 'Duration in assumptions' },
      { field: 'durationInContract', headerName: 'Duration in Contract' },
      { field: 'relationshipsAndLags', headerName: 'Relationships & Lags', cellRenderer: lineBreakCellRenderer, },
      {
        headerName: '',
        width: 100,
        headerComponent: 'CustomHeaderButton',
      },
    ]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo( ()=> ({
      sortable: true,
      floatingFilter: false,
      autoHeight: true
    }));

    const onGridReady = (params) => {
      const { api } = params;
      api.sizeColumnsToFit();
    };

    const components = {
        CustomHeaderButton: CustomHeaderButton,
    };

    return (
      <div>
        <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 180px)', width: '100%' }}>

          <AgGridReact
              ref={gridRef} // Ref for accessing Grid's API
              rowData={rowData} // Row Data for Rows
              columnDefs={columnDefs} // Column Defs for Columns
              defaultColDef={defaultColDef} // Default Column Properties
              headerHeight={50}
              components={components}
              animateRows={true} // Optional - set to 'true' to have rows animate when sorted
              rowSelection='multiple' // Options - allows click selection of rows
              onGridReady={onGridReady}
              />
        </div>
      </div>
    )
};

export default SingleScenarioModelsTable;
