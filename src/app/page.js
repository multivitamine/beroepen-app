'use client'
import React, { useEffect, useState } from 'react';
import { jobs as theJobbies } from './jobs';
//import WorkAs from './components/workAs';
import FlexBoxContainer from './components/flexbox/flexBoxContainer';
import FlexBoxItem from './components/flexbox/flexBoxItem';
import WantToWorkAs from './components/wantToWorkAs';
import WorkAs from './components/workAs';
import WorkAsContainer from './components/workAsContainer';
import WorkContainerItemHeader from './components/workContainerItemHeader';

function App() {
  
  const [jobs, setSelectJobs] = useState([]);
  const [allJobs, getAll] = useState([]);
  const [selectedWorkAsOption, setSelectedWorkAsOption] = useState('');
  const [selectedWantToWorkAsOption, setSelectedWantToWorkAsOption] = useState('');

  const convertJobs = newjobs => {
    debugger
    const theJobs = newjobs.map(job => {
      return { value: job.profiel, label: job.profiel };
    });

    setSelectJobs(theJobs);
  };
  const getAllJobInfo = jobs => {
    getAll(theJobbies);
  };

  useEffect(() => {
    function fetchJobs() {
  
          convertJobs(theJobbies);
          getAllJobInfo(theJobbies);
   
    }
    fetchJobs();
  }, []);

  
  const taken = [];
  const processen = [];

  const workJob = allJobs.find(x => x.profiel === selectedWorkAsOption.value);
  const workJobKerntaken = workJob
    ? workJob.kerntaken.map(taak => {
        taken.push(taak);
        taak.werkprocessen.forEach(process => {
          processen.push(process);
        });
        return taak;
      })
    : [];

  const wantWorkJob = allJobs.find(x => x.profiel === selectedWantToWorkAsOption.value);
  const wantWorkJobKerntaken = wantWorkJob
    ? wantWorkJob.kerntaken.map(taak => {
        taken.push(taak);
        taak.werkprocessen.forEach(process => {
          processen.push(process);
        });
        return taak;
      })
    : [];

  return (
    <React.Fragment>
      <div className="bg">
        <FlexBoxContainer
          justify="flex-start"
          direction={'row'}
          style={{ margin: '0 auto', width: '95%' }}
        >
          <FlexBoxItem
            display="flex"
            direction={'column'}
            style={{ marginRight: '20px', width: '50%' }}
          >
            <WorkAs
              jobs={jobs}
              changeAction={setSelectedWorkAsOption}
              selectedOption={selectedWorkAsOption}
            />

            {workJob !== undefined && <WorkContainerItemHeader job={workJob} />}
          </FlexBoxItem>
          <FlexBoxItem display="flex" direction={'column'} style={{ width: '50%' }}>
            <WantToWorkAs
              jobs={jobs}
              changeAction={setSelectedWantToWorkAsOption}
              selectedOption={selectedWantToWorkAsOption}
            />

            {wantWorkJob !== undefined && (
              <WorkContainerItemHeader firstJob={workJob} job={wantWorkJob} />
            )}
          </FlexBoxItem>
        </FlexBoxContainer>
        <FlexBoxContainer
          justify="flex-start"
          direction={'row'}
          style={{ margin: '0 auto', width: '95%' }}
        >
          <FlexBoxItem
            display="flex"
            direction={'column'}
            style={{ width: '50%', marginRight: '20px' }}
          >
            <React.Fragment>
              {workJob !== undefined && (
                <WorkAsContainer job={workJob} kerntaken={workJobKerntaken} />
              )}
            </React.Fragment>
          </FlexBoxItem>
          <FlexBoxItem display="flex" direction={'column'} style={{ width: '50%' }}>
            <React.Fragment>
              {wantWorkJob !== undefined && (
                <WorkAsContainer
                  firstJob={workJob}
                  job={wantWorkJob}
                  taken={taken}
                  processen={processen}
                  kerntaken={wantWorkJobKerntaken}
                />
              )}
            </React.Fragment>
          </FlexBoxItem>
        </FlexBoxContainer>
      </div>
      <div className="bg"></div>
      <div className="bg"></div>
      <div className="bg"></div>
    </React.Fragment>
  );
}

export default App;
