//imports external
import React from 'react';
import Select from 'react-select';
function WorkAs(props) {
  const { selectedOption, jobs, changeAction } = props;

  return (
    <React.Fragment>
      <h2
        fontWeight="700"
        text={'Dossier:'}
        style={{ color: 'white', marginBottom: '10px', fontSize: '48px' }}
      >
        Ik wil werken als...
      </h2>
      <Select value={selectedOption} onChange={changeAction} options={jobs} />
    </React.Fragment>
  );
}

export default WorkAs;
