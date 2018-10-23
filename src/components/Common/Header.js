import React, { Component } from 'react';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { registerForIntl, provideIntlService } from '@progress/kendo-react-intl';

class Header extends Component {
    static periods = ["3", "6", "12"];

    changePeriod = (e) => {
        let months = e.target.value;
        this.props.onPeriodChange({ period: months });
    }

    render() {
        const { from, to } = this.props.range;
        const formatedFrom = provideIntlService(this).formatDate(from, 'MMMM dd, yyyy');
        const formatedTo = provideIntlService(this).formatDate(to, 'MMMM dd, yyyy');

        return (
            <div id="header" className="row">
                <div className="col-sm">
                    <h4 className="d-block">{this.props.name}</h4>
                    <h2>
                        {[formatedFrom, ' - ', formatedTo]}
                    </h2>
                </div>
                <div className="col-sm text-sm-right p-0 p-sm-3">
                    <ButtonGroup className="justify-content-center">
                        {
                            Header.periods.map(p => <Button
                                key={p} value={p}
                                selected={this.props.period === p}
                                togglable={true}
                                onClick={this.changePeriod}
                            >{`${p} Months`}
                            </Button>)
                        }
                    </ButtonGroup>
                </div>
            </div>
        );
    };
}

registerForIntl(Header);

export default Header;
