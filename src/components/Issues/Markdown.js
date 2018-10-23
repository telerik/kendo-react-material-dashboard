import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = (props) => {
    return <ReactMarkdown source={props.input} />
}
export default Markdown;