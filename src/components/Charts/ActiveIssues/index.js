import React from 'react';
import ActiveIssues from './ActiveIssues';
import ClosedIssues from './ClosedIssues';
import OpenIssues from './OpenIssues';
import AllIssues from './AllIssues';
import CloseRate from './CloseRate';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

class ActiveIssuesDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }
    handleSelect = (e) => {
        this.setState({ selected: e.selected })
    }

    render() {
        const { open, closed, active } = this.props;
        const activeCount = open.length + closed.length;
        const bulletData = [{ target: 70, current: Math.round(this.props.closeRate.average * 100) }]
        return (
            <div className="k-card">
                <h2 className="k-card-header m-0">Active Issues</h2>
                <div className="k-card-body">
                    <TabStrip selected={this.state.selected} onSelect={this.handleSelect} animation={false} className="col-12">
                        <TabStripTab title="All Issues">
                            <div className="row">
                                <ActiveIssues active={active} count={activeCount} />
                                <ClosedIssues closed={closed} />
                                <OpenIssues open={open} />
                                <CloseRate closeRate={this.props.closeRate} bulletData={bulletData} />
                            </div>
                            <div className="row">
                                <AllIssues open={open} closed={closed} />
                            </div>
                        </TabStripTab>
                        <TabStripTab title="Assigned to Me">
                            <div className="row">
                                <ActiveIssues active={active} count={activeCount} />
                                <ClosedIssues closed={closed} />
                                <OpenIssues open={open} />
                                <CloseRate closeRate={this.props.closeRate} bulletData={bulletData} />
                            </div>
                            <div className="row">
                                <AllIssues open={open} closed={closed} />
                            </div>
                        </TabStripTab>
                        <TabStripTab title="Created by Me">

                            <div className="row">
                                <ActiveIssues active={active} count={activeCount} />
                                <ClosedIssues closed={closed} />
                                <OpenIssues open={open} />
                                <CloseRate closeRate={this.props.closeRate} bulletData={bulletData} />
                            </div>
                            <div className="row">
                                <AllIssues open={open} closed={closed} />
                            </div>
                        </TabStripTab>
                    </TabStrip>
                </div>
            </div>
        );
    }

}

export default ActiveIssuesDash;
