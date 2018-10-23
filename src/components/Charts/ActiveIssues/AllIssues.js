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

const AllIssues = (props) => {
    const categoryAxis = {
        baseUnit: 'months',
        majorTicks: { visible: false },
        majorGridLines: { visible: false },
        labels: { rotation: 'auto', margin: { top: 8 } },
        line: { visible: false }
    };

    const valueAxis = {
        line: { visible: false },
        labels: { step: 2, skip: 2, margin: { right: 4 } },
        majorGridLines: { step: 2, skip: 2, color: '#F0F2F2' }
    };

    return (
        <div className="col-12 all-issues">
            <Chart style={{ height: '320px' }}>
                <ChartArea background={"white"} />
                <ChartSeries>
                    <ChartSeriesItem data={props.open} type="area" line={{ style: "smooth" }} field="count" categoryField="date" aggregate="count" stack={true} opacity={0.3} gap={0.06} overlay={false} color={"#27c46d"} border={"color: '#27c46d', opacicty: 0.3"} />
                    <ChartSeriesItem data={props.closed} type="area" line={{ style: "smooth" }} field="count" categoryField="date" aggregate="count" stack={true} opacity={0.3} gap={0.06} overlay={false} color={"#e91e63"} border={"color: '#e91e63', opacicty: 0.3"} />
                </ChartSeries>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem {...categoryAxis} />
                </ChartCategoryAxis>
                <ChartValueAxis>
                    <ChartValueAxisItem {...valueAxis} />
                </ChartValueAxis>
            </Chart>
        </div>
    );
}

export default AllIssues;
