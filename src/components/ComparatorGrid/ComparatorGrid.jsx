import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { BsThreeDotsVertical } from "react-icons/bs";
import "./ComparatorGrid.css"


const ComparatorGrid = () => {
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

    const likeDislikeCellRenderer = () => {
        return (
            <div class="like-dislike flex gap-4 items-center"><button id="like" class="active"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.72633 19.4082L10.343 22.2082C10.8097 22.6749 11.8597 22.9082 12.5597 22.9082L16.993 22.9082C18.393 22.9082 19.9097 21.8582 20.2597 20.4582L23.0597 11.9415C23.643 10.3082 22.593 8.9082 20.843 8.9082L16.1763 8.9082C15.4763 8.9082 14.893 8.32487 15.0097 7.5082L15.593 3.77487C15.8263 2.72487 15.1263 1.5582 14.0763 1.2082C13.143 0.858204 11.9763 1.32487 11.5097 2.02487L6.72633 9.14154" stroke="#4C4DFF" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M0.777018 19.4083L0.777017 7.975C0.777016 6.34167 1.47702 5.75833 3.11035 5.75833L4.27702 5.75833C5.91035 5.75833 6.61035 6.34167 6.61035 7.975L6.61035 19.4083C6.61035 21.0417 5.91035 21.625 4.27702 21.625L3.11035 21.625C1.47702 21.625 0.777018 21.0417 0.777018 19.4083Z" stroke="#4C4DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><button id="dislike"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.72633 19.4082L10.343 22.2082C10.8097 22.6749 11.8597 22.9082 12.5597 22.9082L16.993 22.9082C18.393 22.9082 19.9097 21.8582 20.2597 20.4582L23.0597 11.9415C23.643 10.3082 22.593 8.9082 20.843 8.9082L16.1763 8.9082C15.4763 8.9082 14.893 8.32487 15.0097 7.5082L15.593 3.77487C15.8263 2.72487 15.1263 1.5582 14.0763 1.2082C13.143 0.858204 11.9763 1.32487 11.5097 2.02487L6.72633 9.14154" stroke="#4C4DFF" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M0.777018 19.4083L0.777017 7.975C0.777016 6.34167 1.47702 5.75833 3.11035 5.75833L4.27702 5.75833C5.91035 5.75833 6.61035 6.34167 6.61035 7.975L6.61035 19.4083C6.61035 21.0417 5.91035 21.625 4.27702 21.625L3.11035 21.625C1.47702 21.625 0.777018 21.0417 0.777018 19.4083Z" stroke="#4C4DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
        )
    }

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
        cellRenderer: likeDislikeCellRenderer,
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
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
        likeDislikeCellRenderer: likeDislikeCellRenderer,
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

export default ComparatorGrid;