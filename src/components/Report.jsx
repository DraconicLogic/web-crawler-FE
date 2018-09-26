import React from 'react';
import DownloadReportButton from './DownloadReportButton';
import PieChart from './PieChart';

const Report = (props) => {
  const { report } = props;
  return (<div>
    <h1>Your report here!</h1>
    <h2>{report.rootUrl}</h2>
    <p>there are {(report.brokenLinks.length + report.workingLinks.length)} broken links</p>
    <PieChart report={report} />
    <DownloadReportButton />
  </div>
  );
};

export default Report;