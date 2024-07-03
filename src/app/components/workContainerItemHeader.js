//imports external

import FlexBoxContainer from './flexbox/flexBoxContainer';
import FlexBoxItem from './flexbox/flexBoxItem';

function WorkContainerItemHeader(props) {
  const { job, firstJob } = props;
  const { certificaten, niveau } = job;
  const backgroundStyle = { padding: '5px' };

  //jobCompare
  const jobNiveaExist = firstJob ? firstJob.niveau < job.niveau : false;
  const niveauStyle = !jobNiveaExist ? { color: 'black' } : { color: 'red' };
  //certificaten

  const certificatenComp = certificaten.map((certificate, index) => {
    const certificateExists = !!firstJob
      ? firstJob.certificaten.filter(x => x === certificate)
      : [];

    const certificateStyle =
      certificateExists.length <= 0 || firstJob === undefined
        ? { color: 'black' }
        : { color: 'red' };
    return (
      <li key={index} style={certificateStyle}>
        {certificate}
      </li>
    );
  });
  return (
    <FlexBoxContainer
      justify="flex-start"
      direction={'row'}
      align={'stretch'}
      style={{ width: '100%', marginTop: '10px' }}
    >
      <FlexBoxItem
        display="flex"
        direction={'column'}
        style={{
          background: '#FFFFFF',
          width: '50%',
        }}
      >
        <div
          style={{
            ...backgroundStyle,
            ...niveauStyle,
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        >
          <label><strong>Niveau:</strong> {niveau}</label>
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
          <div>
            <label><strong>Certificaten:</strong> </label>
            <ul >{certificatenComp}</ul>
          </div>
        </div>
      </FlexBoxItem>
    </FlexBoxContainer>
  );
}

export default WorkContainerItemHeader;
