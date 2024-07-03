//imports external
import React from 'react';
import WorkContainerItem from './workContainerItem';

function WorkAsContainer(props) {
  const { kerntaken } = props;
  const list = kerntaken.map((taak, index) => {
    return <WorkContainerItem key={index} {...props} taak={taak} />;
  });
  return (
    <React.Fragment>
      <div style={{ marginTop: '10px' }}>{list}</div>
    </React.Fragment>
  );
}

export default WorkAsContainer;
