import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class PieChart extends Component {

    render() {
        const { report } = this.props;
        const data = {
            labels: [
                'Broken Links',
                'Working Links'
            ],
            datasets: [{
                data: [report.brokenLinks.length, report.workingLinks.length],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB'
                ]
            }]
        };
        return (
            <div>
                <Doughnut data={data} />
            </div >
        );
    }
}

export default PieChart;