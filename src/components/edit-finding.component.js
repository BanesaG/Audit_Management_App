import React, {Component} from 'react';
import axios from 'axios';

export default class EditFinding extends Component {

    constructor(props) {
        super(props);

        this.onChangeFindingClause = this.onChangeFindingClause.bind(this);
        this.onChangeFindingDescription = this.onChangeFindingDescription.bind(this);
        this.onChangeFindingResponsible = this.onChangeFindingResponsible.bind(this);
        this.onChangeFindingPriority = this.onChangeFindingPriority.bind(this);
        this.onChangeFindingCompleted = this.onChangeFindingCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            finding_clause: '',
            finding_description: '',
            finding_responsible: '',
            finding_priority: '',
            finding_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/findings/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    finding_clause: response.data.finding_clause,
                    finding_description: response.data.finding_description,
                    finding_responsible: response.data.finding_responsible,
                    finding_priority: response.data.finding_priority,
                    finding_completed: response.data.finding_completed
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeFindingClause(e) {
        this.setState({
            finding_clause: e.target.value
        });
    }

    onChangeFindingDescription(e) {
        this.setState({
            finding_description: e.target.value
        });
    }

    onChangeFindingResponsible(e) {
        this.setState({
            finding_responsible: e.target.value
        });
    }

    onChangeFindingPriority(e) {
        this.setState({
            finding_priority: e.target.value
        });
    }

    onChangeFindingCompleted(e) {
        this.setState({
            finding_completed: !this.state.finding_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            finding_clause: this.state.finding_description,
            finding_description: this.state.finding_description,
            finding_responsible: this.state.finding_responsible,
            finding_priority: this.state.finding_priority,
            finding_completed: this.state.finding_completed
        };
        axios.post('http://localhost:3000/findings/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Finding</h3> {/* correction from Findings to Finding*/}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Clause: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.finding_description}
                                onChange={this.onChangeFindingDescription}
                                />
                    </div>            
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.finding_description}
                                onChange={this.onChangeFindingDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.finding_responsible}
                                onChange={this.onChangeFindingResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.finding_priority==='Low'}
                                    onChange={this.onChangeFindingPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.finding_priority==='Medium'}
                                    onChange={this.onChangeFindingPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.finding_priority==='High'}
                                    onChange={this.onChangeFindingPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeFindingCompleted}
                                    checked={this.state.finding_completed}
                                    value={this.state.finding_completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Finding" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}