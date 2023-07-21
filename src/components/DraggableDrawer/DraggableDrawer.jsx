import React, { useRef, useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import ComparatorGrid from "../ComparatorGrid/ComparatorGrid"
import GanttChart from "../GanttChart/GanttChart"
import "./DraggableDrawer.css"

const DraggableDrawer = (props) => {
  const comparisionGridRef = useRef(null);
  const comparisionGridBtnRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [comparisionGridLeft, setComparisionGridLeft] = useState(0);
  const comparisionGridWidth = comparisionGridRef.current ? comparisionGridRef.current.offsetWidth + 32 : 0;
  const [drawerHeigt, setdrawerHeigt] = useState(0);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setMouseX(event.clientX);
    setComparisionGridLeft(comparisionGridRef.current ? comparisionGridRef.current.offsetLeft : 0);

    if (event.target === comparisionGridBtnRef.current) {
      event.target.style.cursor = "grabbing";
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const mouseDeltaX = event.clientX - mouseX;
    const newcomparisionGridLeft = comparisionGridLeft + mouseDeltaX;


    if (newcomparisionGridLeft >= 80 && (newcomparisionGridLeft - 15) <= comparisionGridWidth) {
      if (comparisionGridRef.current) {
        comparisionGridRef.current.style.left = `${newcomparisionGridLeft}px`;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (comparisionGridBtnRef.current) {
      comparisionGridBtnRef.current.style.cursor = "grab";
    }
  };

  useEffect(() => {
    setdrawerHeigt(comparisionGridRef.current.clientHeight)
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, mouseX, comparisionGridLeft, comparisionGridWidth]);

  return (
    <div id="comparisionGrid" className="show" ref={comparisionGridRef}>
      <div className="flxBox">
        <div
          className="sidehandler"
          onMouseDown={handleMouseDown}
          ref={comparisionGridBtnRef}>
          <p>Comparison Grid</p>
          <BsThreeDotsVertical />
          <p>Comparison Grid</p>
        </div>
        <div id="comparisonGrid_wrapper" style={{ overflow: "hidden" }}>
          {props.gridVisible ?
          <ComparatorGrid />
          :
          <GanttChart height={drawerHeigt} />
          }          
        </div>
      </div>
    </div>
  );
};

export default DraggableDrawer;