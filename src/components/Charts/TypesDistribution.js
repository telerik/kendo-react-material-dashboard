import React, { Component } from 'react';
import { Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartArea } from '@progress/kendo-react-charts';

class TypesDistribution extends Component {
    seriesColors = [
        { label: "SEV: Low", value: "#FF9966", active: true },
        { label: "SEV: Medium", value: "#BB6ACB", active: false },
        { label: "SEV: High", value: "#52C3D3", active: false },
        { label: "Enhancement", value: "#22C85D", active: true },
        { label: "Feature", value: "#FF6358", active: false },
        { label: "Others", value: "#2BA7DA", active: true }
    ];
    constructor(props) {
        super(props);
        this.data = props.data;
        this.addSeries = this.addSeries.bind(this);
        this.state = {
            initialGrey: '#A2ACAC',
            visibleSeries: this.seriesColors.filter(s => s.active).map(this.mapSeries),
            seriesColors: this.seriesColors,
            mapSeries: this.mapSeries
        };
    }
    componentWillReceiveProps(props) {
        this.data = props.data
        this.setState({
            visibleSeries: this.seriesColors.filter(s => s.active).map(this.state.mapSeries),
        })
    }

    mapSeries = ((series) => {
        return {
            color: series.value,
            markers: { visible: false },
            data: this.data[series.label]
        };
    })

    addSeries(button) {
        let seriesColors = this.state.seriesColors.map(b => { if (button.value === b.value) { b.active = !b.active } return b; });
        let visibleSeries = seriesColors.filter(s => s.active).map(this.state.mapSeries)

        this.setState({ seriesColors, visibleSeries });
    }

    render() {
        const categoryAxis = { baseUnit: 'months', majorTicks: { visible: false }, labels: { step: 4, skip: 2 }, majorGridLines: { visible: false }, line: { visible: false } };
        const series = this.state.visibleSeries.map((series, idx) => {

            const chartOptions = {
                type: 'line',
                key: idx,
                overlay: false,
                data: series.data,
                markers: series.markers,
                color: series.color,
                style: 'smooth',
                aggregate: 'count',
                categoryField: 'date'
            }
            return <ChartSeriesItem {...chartOptions} />
        });
        const valueAxis = { line: { visible: false }, labels: { step: 2, skip: 2 }, majorGridLines: { step: 2, skip: 2, color: '#F0F2F2' } };

        return (
            <div className="k-card">
            <h2 className="k-card-header">Types Distribution</h2>
                <div className="k-card-body height-1">
                    <div className="row">
                        {
                            this.state.seriesColors.map(button =>
                                <div
                                    onClick={() => { this.addSeries(button) }}
                                    key={button.label}
                                    style={{ color: button.active ? button.value : this.state.initialGrey }}
                                    className="col-6 col-sm-4 col-xl-2 comp-label"
                                >
                                    <div className="issues-count">{this.props.data[button.label].length}</div>
                                    <div className="issues-label">{button.label}</div>
                                </div>
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col-12 types-distribution">
                            <Chart style={{ height: '300px' }}
                                transitions={false}
                                categoryAxis={categoryAxis}
                                valueAxis={valueAxis}>
                                <ChartArea background={"white"}/>
                                <ChartSeries>
                                    {series}
                                </ChartSeries>
                                <ChartValueAxis>
                                    <ChartValueAxisItem {...valueAxis}/>
                                </ChartValueAxis>
                                <ChartCategoryAxis>
                                    <ChartCategoryAxisItem {...categoryAxis} />
                                </ChartCategoryAxis>
                            </Chart>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TypesDistribution;
