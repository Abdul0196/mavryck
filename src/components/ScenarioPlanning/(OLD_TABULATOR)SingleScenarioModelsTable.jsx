import 'react-tabulator/css/tabulator_simple.min.css';
import { ReactTabulator, reactFormatter } from 'react-tabulator'
import { BsThreeDotsVertical } from "react-icons/bs"


var do_not_show_checkbox_ids = [0];
// checkbox formatter
function CheckboxFormatter(props){
    console.clear()
    console.log(props)
    // console.log(props.cell._cell)
    var checkbox = null;

    // check if selectable is true in options
    if (props.cell._cell.table.modExists("selectRow", true)) {
        const clickHandler = (e) => {
          e.stopPropagation()
        }
        let changleHandler;
        checkbox = <input type="checkbox" onClick={clickHandler} onChange={changleHandler} />

        // check if cell has getRow function if yes then it may be row
        if (typeof props.cell._cell.getRow == 'function') {

            // get cell row
            var row = props.cell._cell.getRow();

            // get cell data for condition testing
            const data = props.cell._cell.getData();

            // if is row and not skippable id
            if (props.cell._cell.row._getSelf().type === "row" && do_not_show_checkbox_ids.indexOf(data['id']) === -1) {

              // add change event to toggle cell row
              changleHandler = () => {
                row.toggleSelect();
              }
              
              // update checkbox after row toggle
              checkbox.checked = row.isSelected && row.isSelected();

              // registering for if row clicked from anywhere then checkbox check/uncheck
              props.cell._cell.table.modules.selectRow.registerRowSelectCheckbox(row, checkbox);
            } else {
              // if is row and skippable id
              checkbox = "";
            }
        } else {
            // header checkbox then add change addEventListener for selecting/deselecting all rows. 
            changleHandler = (e) => {
                if(e.target.checked === true){
                  props.cell._cell.table.getRows().forEach(row => {
                      row.select();
                  });
                } else {
                  props.cell._cell.table.getRows().forEach(row => {
                      row.deselect();
                  });
                }
            }

            // updating internal header checkbox
            props.cell._cell.table.modules.selectRow.registerHeaderSelectCheckbox(checkbox);
        }

        return checkbox;
    }
    // return null;
}


// function ActionButton(props) {
//   const rowData = props.cell._cell.row.data;
//   const cellValue = props.cell._cell.value || <BsThreeDotsVertical />;
//   return <button id="editModel" className='text-primary text-20' onClick={() => alert(rowData.name)}>{cellValue}</button>;
// }

const SingleScenarioModelsTable = () => {
    const columns = [
        {
            headerSort:false,
            // titleFormatter: reactFormatter(
            //     <CheckboxFormatter />
            // ),
            formatter: reactFormatter(
                <CheckboxFormatter />
            ), 
            width: 60
        },
        {
            title: "ID",
            field: "id",
            width: 100,
        },
        {
            title: "WBS",
            field: "wbs",
        },
        {
            title: "Task Name",
            field: "taskName",
            widthGrow:1
        },
        {
            title: "Duration in P6",
            field: "durationInP6",
            widthGrow:1
        },
        {
            title: "Duration in assumptions",
            field: "durationInAssumptions",
            widthGrow:1
        },
        {
            title: "Duration in Contract",
            field: "durationInContract",
            widthGrow:1
        },
        {
            title: "Relationships & Lags",
            field: "relationshipsAndLags",
            widthGrow:1, 
            formatter:"textarea"
        },
        {
            headerSort: false,
            titleFormatter: function(cell, formatterParams, onRendered){                
                return `<button onClick="dotsFunc()"><i class="fa-solid fa-ellipsis-vertical"></i></button>`
            },
            // formatter: likeDislikeFormatter(),
            width: 100,
        },
    ];
    var data = [
        {
          id: 1,
          wbs: "700200-Proj-Pier9",
          taskName: "Point park Grand lake",
          durationInP6: "36",
          durationInAssumptions: "No result found.",
          durationInContract: "No result found.",
          relationshipsAndLags: "",
          dots: ""
      },
      {
          id: 700100,
          wbs: "700200-Proj",
          taskName: "Project Start",
          durationInP6: "0",
          durationInAssumptions: "No result found.",
          durationInContract: "No result found.",
          relationshipsAndLags: "700100 is FS with 700101",
          dots: ""
      },
      {
          id: 700101,
          wbs: "700200-Proj",
          taskName: "Design and engineering",
          durationInP6: "21",
          durationInAssumptions: "22",
          durationInContract: "No result found.",
          relationshipsAndLags: "700101 is FS with 700102",
          dots: ""
      },
      {
          id: 700102,
          wbs: "700200-Proj-Pier1",
          taskName: "Permit",
          durationInP6: "6",
          durationInAssumptions: "10",
          durationInContract: "No result found.",
          relationshipsAndLags: "700102 is FS with 700103",
          dots: ""
      },
      {
          id: 700103,
          wbs: "700200-Proj-Pier1",
          taskName: "Site handover",
          durationInP6: "4",
          durationInAssumptions: "No result found.",
          durationInContract: "No result found.",
          relationshipsAndLags: "700103 is FS with 700104 \n700103 is FS with 700107 \n700103 is FS with 700110",
          dots: ""
      },
      {
          id: 700104,
          wbs: "700200-Proj-Pier1",
          taskName: "Piling 1 installation",
          durationInP6: "2",
          durationInAssumptions: "5",
          durationInContract: "162",
          relationshipsAndLags: "700104 is FS with 700105",
          dots: ""
      },
      {
          id: 700105,
          wbs: "700200-Proj-Pier1",
          taskName: "Piling 1 testing and inspection",
          durationInP6: "2",
          durationInAssumptions: "2",
          durationInContract: "No result found.",
          relationshipsAndLags: "700105 is FS with 700106",
          dots: ""
      },
      {
          id: 700106,
          wbs: "700200-Proj-Pier1",
          taskName: "Pile 1 cap installation",
          durationInP6: "1",
          durationInAssumptions: "4",
          durationInContract: "No result found.",
          relationshipsAndLags: "700106 is FS with 700113",
          dots: ""
      },
      {
          id: 700107,
          wbs: "700200-Proj-Pier1",
          taskName: "Piling 2 installation",
          durationInP6: "1",
          durationInAssumptions: "4",
          durationInContract: "69",
          relationshipsAndLags: "700107 is FS with 700108",
          dots: ""
      },
      {
          id: 700108,
          wbs: "700200-Proj-Pier1",
          taskName: "Piling 2 testing and inspection",
          durationInP6: "1",
          durationInAssumptions: "1",
          durationInContract: "No result found.",
          relationshipsAndLags: "700108 is FS with 700109",
          dots: ""
      },
      {
          id: 700109,
          wbs: "700200-Proj-Pier1",
          taskName: "Pile 2 cap installation",
          durationInP6: "2",
          durationInAssumptions: "5",
          durationInContract: "No result found.",
          relationshipsAndLags: "700109 is FS with 700113",
          dots: ""
      },
      {
          id: 700110,
          wbs: "700200-Proj-Pier1",
          taskName: "Piling 3 installation",
          durationInP6: "4",
          durationInAssumptions: "7",
          durationInContract: "69",
          relationshipsAndLags: "700110 is FS with 700111",
          dots: ""
      },
      {
          id: 700111,
          wbs: "700200-Proj-Pier1",
          taskName: "Piling 3 testing and inspection",
          durationInP6: "2",
          durationInAssumptions: "2",
          durationInContract: "No result found.",
          relationshipsAndLags: "700111 is FS with 700112",
          dots: ""
      },
      {
          id: 700112,
          wbs: "700200-Proj-Pier1",
          taskName: "Pile 3 cap installation",
          durationInP6: "3",
          durationInAssumptions: "6",
          durationInContract: "No result found.",
          relationshipsAndLags: "700112 is FS with 700113",
          dots: ""
      },
      {
          id: 700113,
          wbs: "700200-Proj-Pier1",
          taskName: "Backfilling and site cleanup",
          durationInP6: "2",
          durationInAssumptions: "No result found.",
          durationInContract: "No result found.",
          relationshipsAndLags: "700113 is FS with 700114",
          dots: ""
      },
      {
          id: 700114,
          wbs: "700200-Proj-Pier2",
          taskName: "Permit",
          durationInP6: "10",
          durationInAssumptions: "14",
          durationInContract: "No result found.",
          relationshipsAndLags: "700114 is FS with 700115",
          dots: ""
      },
      {
          id: 700115,
          wbs: "700200-Proj-Pier2",
          taskName: "Site handover",
          durationInP6: "1",
          durationInAssumptions: "No result found.",
          durationInContract: "No result found.",
          relationshipsAndLags: "700115 is FS with 700116 \n700115 is FS with 700119 \n700115 is FS with 700122",
          dots: ""
      }
    ];

    const options = {
      layout:"fitColumns",
      maxHeight:"100%",
      selectable: true,
    };

    return (
        <ReactTabulator
        data={data}
        columns={columns}
        options={options}
        />
    )
};

export default SingleScenarioModelsTable;
