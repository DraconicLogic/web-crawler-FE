import React from 'react';
import DownloadReportButton from './DownloadReportButton';

const Report = (props) => {
  const { report } = props;
  return (<div>
    <h1>Your report here!</h1>
    <h2>{report.rootUrl}</h2>
    <p>there are {report.totalBrokenLinks} broken links</p>
    <DownloadReportButton />
  </div>
  );
};

export default Report;