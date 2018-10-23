import React, { Component } from 'react';
import IssuesTypeChart from './IssuesTypesChart';

class IssuesTypes extends Component {
    didInit = false;
    constructor(props) {
        super(props);

        let sevlow = props.data.find(series => series.type === 'SEV: LOW');

        this.state = {
            value: sevlow.value,
            category: sevlow.type,
            point: {
                options: {
                    color: 'rgb(255, 99, 88)'
                }
            },
            donutLabel: sevlow.type,
            donutPercent: Math.round(sevlow.value * 100 || 0),
            hoverColor: 'rgb(252, 81, 8)'
        }

        this.seriesHover = this.seriesHover.bind(this);
    }

    seriesHover(event) {
        this.setState(event);
    }
    componentWillReceiveProps(props) {
        if (props.data.find(series => series.type === this.state.category).value !== this.state.value) {
            let sevlow = props.data.find(series => series.type === 'SEV: LOW');
            this.setState({
                value: sevlow.value,
                donutPercent: Math.round(sevlow.value * 100 || 0),
            })
            this.didInit = true;
        }
    }
    donutCenterRender = (e) => {
        return (<div className="comp-label chart-label" style={{ color: this.state.hoverColor }}>
            <div className="issues-count">{this.state.donutPercent} <span className="percentage">%</span></div>
            <div className="issues-label">{this.state.donutLabel}</div>
        </div>)
    }

    render() {
        return (
            <div className="k-card">
                <h2 className="k-card-header">Issue Types</h2>
                <div className="k-card-body height-1">
                    <div className="issue-types">
                        <IssuesTypeChart data={this.props.data} seriesHover={this.seriesHover} donutCenterRender={this.donutCenterRender} />
                    </div>
                </div>
            </div>
        );
    }
};

export default IssuesTypes;
