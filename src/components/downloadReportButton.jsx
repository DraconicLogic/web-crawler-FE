import React from 'react';
import * as api from '../api';

const DownloadReportButton = (props) => {
  const { reportId } = props;
  return (
    <div>
      <button onlClick={() => requestReport(reportId)}>Download</button>
    </div>
  );
};

const requestReport = (reportId) => {
  api.downloadReport(reportId)
    .then(res => res.json())
    .then(report => {
      //download report functionality here!
      console.log(report)
    })
}

export default DownloadReportButton;