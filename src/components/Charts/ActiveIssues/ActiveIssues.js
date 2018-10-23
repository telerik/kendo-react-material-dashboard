import React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartArea
} from '@progress/kendo-react-charts';

const ActiveIssues = (props) => {
    const seriesData = props.active;
    const categoryAxis = { baseUnit: 'months', majorGridLines: { visible: false }, majorTicks: { visible: false }, labels: { step: 4, skip: 2, font: '10px sans-serif' }, line: { visible: false } };

    return (
        <div className="col-sm-12 col-lg-6 col-xl active-issues" >
            <div className="comp-label">
                <div className="issues-count">{props.count}</div>
                <div className="issues-label">Active issues</div>
            </div>
            <Chart style={{ height: '80px' }}>
                <ChartArea background={"white"} />
                <ChartSeries>
                    <ChartSeriesItem data={seriesData} type="area" line={{ style: "smooth" }} field="count" categoryField="date" aggregate="count" stack={true} gap={0.5} overlay={false} color="#888" />
                </ChartSeries>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem {...categoryAxis} />
                </ChartCategoryAxis>
                <ChartValueAxis>
                    <ChartValueAxisItem visible={false} majorGridLines={{ visible: false }} />
                </ChartValueAxis>
            </Chart>
        </div>
    );
}

export default ActiveIssues;
