import React, { Component } from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend
} from '@progress/kendo-react-charts';
import 'hammerjs';


class IssuesTypesChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            init: true,
            data: this.props.data
        }
    }

    updateDonutLegend(event) {
        this.setState({
            init: false
        });
        this.props.seriesHover({
            hoverColor: event.point.options.color,
            donutPercent: Math.round(event.value * 100 || 0),
            donutLabel: event.category
        });
    }

    updateSeries(event) {
        let currentState = this.state.data;

        currentState[event.pointIndex].visible = currentState[event.pointIndex].visible === undefined
            ? false
            : !currentState[event.pointIndex].visible;

        this.setState({
            data: currentState,
            init: true
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        })
    }

    render() {
        const labels = { font: '1em Roboto, Arial, sans-serif', padding: 5 };
        const border = { color: 'white', width: 1 };

        return (
            <Chart
                style={{ width: '100%', height: '400px' }}
                onSeriesHover={this.updateDonutLegend.bind(this)}
                onLegendItemClick={this.updateSeries.bind(this)}
                transitions={false}
                donutCenterRender={this.props.donutCenterRender}
            >
                <ChartSeries>
                    <ChartSeriesItem
                        border={border}
                        holeSize={100}
                        data={this.state.data}
                        size= {15}
                        type="donut"
                        field="value"
                        categoryField="type"
                        overlay={false}
                    />
                </ChartSeries>
                <ChartLegend position="bottom" labels={labels} orientation="horizontal" padding={2} />
            </Chart>
        );
    }
}

export default IssuesTypesChart;
