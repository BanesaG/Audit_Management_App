import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Finding = props => (
    <tr>
        <td className={props.finding.finding_completed ? 'completed' : ''}>{props.finding.finding_clause}</td>
        <td className={props.finding.finding_completed ? 'completed' : ''}>{props.finding.finding_description}</td>
        <td className={props.finding.finding_completed ? 'completed' : ''}>{props.finding.finding_responsible}</td>
        <td className={props.finding.finding_completed ? 'completed' : ''}>{props.finding.finding_priority}</td>
        <td>
            <Link to={"/edit/"+props.finding._id}>Edit</Link>
        </td>
    </tr>
)

export default class FindingsList extends Component {

    constructor(props) {
        super(props);
        this.state = {findings: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/findings/')
            .then(response => {
                this.setState({findings: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:3001/findings/')
        .then(response => {
            this.setState({findings: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    findingList() {
        return this.state.findings.map(function(currentFinding, i) {
            return <Finding finding={currentFinding} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Findings List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Clause</th>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.findingList() }
                    </tbody>
                </table>
            </div>
        )
    }
}