import React, {Component} from 'react';

class MandatoryProcedures extends Component {
    render() {
        return (
            <div>
                <h2>Mandatory Procedures</h2>
                <ul className="header">
                    <li><a href="/">Scope of the QMS (clause 4.3)</a></li>
                    <li><a href="/">Quality policy (clause 5.2)</a></li>
                    <li><a href="/">Quality objectives (clause 6.2)</a></li>
                    <li><a href="/">Criteria for evaluation and selection of suppliers (clause 8.4.1)</a></li>
                </ul>
            </div>
        );
    }
}

export default MandatoryProcedures;