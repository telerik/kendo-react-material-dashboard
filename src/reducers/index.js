import { combineReducers } from 'redux';
import { issues } from './issues';
import { issuesPaging } from './issuesPaging';

export const issuesDashboard = combineReducers({issues, issuesPaging});