//imports external
import React from 'react';

import FlexBoxItem from './flexbox/flexBoxItem';
import FlexBoxContainer from './flexbox/flexBoxContainer';

function WorkContainerItem(props) {
  const { taak, taken, processen } = props;
  const backgroundStyle = { padding: '5px' };
  const taskExists = !!taken ? taken.filter(x => x.name === taak.name) : [];
  const taskStyle =
    taskExists.length <= 1 || taken === undefined ? { color: 'black' } : { color: 'red' };
  console.log(taskExists);

  const processenComp = taak.werkprocessen.map((process, index) => {
    const processExists = !!processen ? processen.filter(x => x === process) : [];
    const processStyle =
      processExists.length <= 1 || processen === undefined ? { color: 'black' } : { color: 'red' };
    return (
      <li key={index} style={processStyle}>
        {process}
      </li>
    );
  });
  return (
    <FlexBoxContainer
      justify="flex-start"
      direction={'row'}
      align={'stretch'}
      style={{ width: '100%' }}
    >
      <FlexBoxItem
        display="flex"
        direction={'column'}
        style={{
          background: '#FFFFFF',
          width: '50%',
        }}
      >
        <div style={backgroundStyle}>
          <h4 style={taskStyle}>{taak.name}</h4>
        </div>
      </FlexBoxItem>
      <FlexBoxItem
        display="flex"
        direction={'column'}
        style={{
          background: '#FFFFFF',
          marginLeft: '20px',
          width: '50%',
        }}
      >
        <div style={{ ...backgroundStyle }}>
          <ul style={{ paddingLeft: '25px' }}>{processenComp}</ul>
        </div>
      </FlexBoxItem>
    </FlexBoxContainer>
  );
}

export default WorkContainerItem;
