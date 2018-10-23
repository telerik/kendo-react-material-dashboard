import React from 'react';

export const AssigneeCellTemplate = (props) => {
    if (!props.dataItem.assignee) {
        return '';
    }
    let assignee = props.dataItem.assignee;
     // eslint-disable-next-line
    let template = <label><img src={assignee.avatar_url} style={{width: '30px', height: '30px'}} alt='img-circle' className='img-circle' />{assignee.login}</label>
    return template;
}

export const MilestoneCellTemplate = (props) => {
    return props.dataItem.milestone ? props.dataItem.milestone.title : '';
}

export const NumberCellTemplate = (props) => {
    return <a href={props.dataItem.html_url}>#{props.dataItem.number}</a>
}

export const TitleCellTemplate = (props) => {
    let classes = [props.dataItem.state === 'open' ? 'issue-open': 'issue-closed', 'issue-status'].join(' ');
    return <span><span className={classes}></span>{props.dataItem.title}</span>
}

export const LabelCellTemplate = (props) => {
    let colors = {
        'SEV: LOW' : '#ff9800',
        'SEV: MEDIUM' : '#ff5d2a',
        'SEV: HIGH' : '#d50000',
        'ENHANCEMENT' : '#00c853',
        'FEATURE' : '#2e7d32',
        'OTHER' : '#1ca8dd',
        'PASSED QA' : '#57b45b',
        'BUG' : '#cf3257',
        'NEEDS QA' : '#bc007c',
        'DOCUMENTATION' : '#455a64',
        'DEMO' : '#673ab7',
        'DELETED' : '#f44336',
        'IN PROGRESS' : '#ffd600'
    };
    return props.dataItem.labels.map(label => {
            let color = colors[label.name.toUpperCase()] || colors.OTHER;

            return <span key={label.name} className="badge" style={{ backgroundColor: color }}>
                    {label.name}
                   </span>
    });
}