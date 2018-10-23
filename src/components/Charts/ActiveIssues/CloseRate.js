import React from 'react';
import { Chart,
     ChartSeries,
     ChartSeriesItem,
     ChartValueAxis,
     ChartValueAxisItem,
     ChartArea } from '@progress/kendo-react-charts';

const CloseRate = (props) => {
    const formatp = (number) => {
        return Intl.NumberFormat(navigator.language, {style: 'percent'}).format(number);
    };

    const formatd = (date) => {
        if (!date) {
            return '';
        }
        return new Date(parseInt(date, 10)).toDateString();
    }

    const closeRatePlotBands = [{from: 0, to:100, color: "#27c46d" }]

    return (
        <div className="col-12 col-lg-6 col-xl pb-4 close-rate">
            <div className="comp-label">
                <div className="issues-count">{formatp(props.closeRate.average)}</div>
                <div className="issues-label">Close rate</div>
            </div>

            <p className="m-0 small text-uppercase text-muted">
                Highest:
                {formatp(props.closeRate.highest.close_rate) }
                on {formatd(props.closeRate.highest.created_at)}
            </p>
            <p className="m-0 small text-uppercase text-muted">
                Lowest:
                {formatp(props.closeRate.lowest.close_rate)}
                on {formatd(props.closeRate.lowest.created_at)}
            </p>
            <Chart style={{ height: '30px', marginLeft: "-15px"}}>
                <ChartArea background={"white"}/>
                <ChartSeries>
                    <ChartSeriesItem data={props.bulletData}  gap={0} type="bullet" currentField="current" targetField="target" color="#e91e63" target={{color: "#FFF"}}/>
                </ChartSeries>
                <ChartValueAxis>
                    <ChartValueAxisItem narrowRange={false} plotBands={closeRatePlotBands} visible={false} majorGridLines={{visible:false}}/>
                </ChartValueAxis>
            </Chart>
        </div>
    );
};

export default CloseRate;