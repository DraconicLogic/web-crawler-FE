import React from 'react';
import * as api from '../api';

const downloadReportButton = (props) => {
  const { reportId } = props;
  return (
    <div>
      <buton onlClick={() => requestReport(reportId)}></buton>
    </div>
  );
};

const requestReport = (reportId) => {
  api.downloadReport(reportId)
    .then(res => res.json())
    .then(report => {
      //download report functionality here!
    })
}

export default downloadReportButton;