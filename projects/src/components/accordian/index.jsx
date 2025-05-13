import React, { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  // Handle single item selection
  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id); // Deselect if already selected
  }

  // Handle multiple item selection
  function handleMultiSelection(id) {
    const updatedSelection = [...multipleSelected];
    const index = updatedSelection.indexOf(id);

    if (index === -1) {
      updatedSelection.push(id); // Add to selection
    } else {
      updatedSelection.splice(index, 1); // Remove from selection
    }

    setMultipleSelected(updatedSelection);
  }

  return (
    <div className="wrapper">
      {/* Toggle between single and multi-selection */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Enable Single Selection" : "Enable Multi Selection"}
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{(enableMultiSelection && multipleSelected.includes(dataItem.id)) || selected === dataItem.id ? "−" : "+"}</span>
              </div>

              {/* Show content based on selection mode */}
              {enableMultiSelection ? (
                multipleSelected.includes(dataItem.id) && <div className="content">{dataItem.answer}</div>
              ) : (
                selected === dataItem.id && <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
