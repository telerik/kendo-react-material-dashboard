import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { LabelCellTemplate, TitleCellTemplate, NumberCellTemplate, MilestoneCellTemplate, AssigneeCellTemplate } from './IssuesGridCellTemplates.js';
import Markdown from './Markdown.js';

const IssuesGrid = (props) => {
    return (
        <Grid
            data={props.issues}
            detail={RowDetailComponent}
            expandField="expanded"
            onExpandChange={props.onToggleExpand}
            onPageChange={props.onIssuesPageChange}
            total={props.total}
            skip={props.skip}
            scrollable={'none'}
            pageable={true}
            pageSize={props.pageSize}
            style={{width: '100%', overflow: 'auto'}}
        >
            <Column field="number" title="ID" width="80px" cell={cellWithTemplate(NumberCellTemplate)} />
            <Column field="title" title="Title" cell={cellWithTemplate(TitleCellTemplate)} />
            <Column field="labels" title="Labels" cell={cellWithTemplate(LabelCellTemplate)} />
            <Column field="milestone" title="Milestone" width="200px" cell={cellWithTemplate(MilestoneCellTemplate)} />
            <Column field="assignee" title="Assignee" width="200px" cell={cellWithTemplate(AssigneeCellTemplate)} />
        </Grid>
    );
}

const RowDetailComponent = (props) => {
    let dataItem = props.dataItem;
    let badgeClass = dataItem.state === 'open' ? 'badge-success' : 'badge-danger';
    return (
        <div>
            <div className="row my-4">
                <div className="col-sm-12">
                    <span className={`badge ${badgeClass}`}>{dataItem.state}</span>
                    <h3 className="h1">
                        {dataItem.title}
                        <span className="text-muted">#{dataItem.number}</span>
                    </h3>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-sm-2">
                    <span className="small d-block text-muted">Created on</span>
                    {dataItem.created_at}
                </div>
                {dataItem.closed_at !== null ?
                    (<div className="col-sm-2">
                        <span className="small d-block text-muted">Closed on</span>
                        {dataItem.closed_at}
                    </div>)
                    : null}
                <div className="col-sm-2">
                    <span className="small d-block text-muted">Milestone</span>
                    {dataItem.milestone ? dataItem.milestone.title : ''}
                </div>
                <div className="col-sm-2">
                    <span className="small d-block text-muted">Author</span>
                    {dataItem.user.login}
                </div>
                {dataItem.assignee !== null ?
                    (<div className="col-sm-2">
                        <span className="small d-block text-muted">Assignee</span>
                        <img alt="assignee" src={dataItem.assignee ? dataItem.assignee.avatar_url : undefined} style={{ 'width': '30px', 'height': '30px' }} className="img-circle" />
                        {dataItem.assignee ? dataItem.assignee.login : ''}
                    </div>)
                    : null}
            </div>
            <div className="row my-4">
                <div className="col-sm-2">
                    <h4 className="small text-muted">Labels</h4>
                    <LabelCellTemplate dataItem={dataItem} />
                </div>
                <div className="col-sm-8">
                    <h4 className="small text-muted">Description</h4>
                    <Markdown input={dataItem.body} />
                </div>
            </div>
        </div>
    );
}

const cellWithTemplate = (Component) => {
    return class extends React.Component {
        render() {
            return (<td><Component {...this.props} /></td>);
        }
    }
}

export default IssuesGrid;
