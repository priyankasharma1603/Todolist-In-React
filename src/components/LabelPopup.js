import React from 'react';

const LabelPopup = ({
  newLabel,
  setNewLabel,
  addLabel,
  searchLabel,
  setSearchLabel,
  filteredLabels,
  selectedLabels,
  handleLabelSelect,
  toggleLabelPopup,
}) => {
  return (
    <div className="label-popup">
      <input
        type="text"
        value={newLabel}
        onChange={(e) => setNewLabel(e.target.value)}
        placeholder="Add new label"
      />
      <button onClick={() => addLabel(newLabel)}>Add Label</button>
      <input
        type="text"
        value={searchLabel}
        onChange={(e) => setSearchLabel(e.target.value)}
        placeholder="Search labels"
      />
      <div className="label-list">
        {filteredLabels.map((label, index) => (
          <div key={index} onClick={() => handleLabelSelect(label)}>
            <input
              type="checkbox"
              checked={selectedLabels.includes(label)}
              readOnly
            />
            {label}
          </div>
        ))}
      </div>
      <button id='btn2' onClick={toggleLabelPopup}>Close</button>
    </div>
  );
};

export default LabelPopup;
