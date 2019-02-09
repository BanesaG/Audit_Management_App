import React, {Component} from 'react';
import axios from 'axios';

export default class CreateFinding extends Component {

    constructor(props) {
        super(props);

        this.onChangeFindingClause = this.onChangeFindingClause.bind(this);
        this.onChangeFindingDescription = this.onChangeFindingDescription.bind(this);
        this.onChangeFindingResponsible = this.onChangeFindingResponsible.bind(this);
        this.onChangeFindingPriority = this.onChangeFindingPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            finding_clause: '',
            finding_description: '',
            finding_responsible: '',
            finding_priority: '',
            finding_completed: false
        }
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

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Finding Clause: ${this.state.finding_clause}`);
        console.log(`Finding Description: ${this.state.finding_description}`);
        console.log(`Finding Responsible: ${this.state.finding_responsible}`);
        console.log(`Finding Priority: ${this.state.finding_priority}`);
        console.log(`Finding Completed: ${this.state.finding_completed}`);

        const newFinding = {
            finding_clause: this.state.finding_clause,
            finding_description: this.state.finding_description,
            finding_responsible: this.state.finding_responsible,
            finding_priority: this.state.finding_priority,
            finding_completed: this.state.finding_completed
        }

        axios.post('/api/findings', newFinding)
            .then(res => console.log(res.data));

        this.setState({
            finding_clause: '',
            finding_description: '',
            finding_responsible: '',
            finding_priority: '',
            finding_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Finding</h3>
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group">
                        <label>Clause: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.finding_clause}
                                onChange={this.onChangeFindingClause}
                                />
                    </div> */}

                    <div className="form-group">
                        <label>Clause: </label>
                        <select className="form-control"  type="text" value={this.state.finding_clause} onChange={this.onChangeFindingClause} >
                                <option value="Select a clause" ></option>
                                <option value="4.0 Context of the Organization">4.0 Context of the Organization</option>
                                <option value="5.0 Leadership">5.0 Leadership</option>
                                <option value="6.0 Planning of the Quality Management System">6.0 Planning of the Quality Management System</option>
                                <option value="7.0 Support">7.0 Support</option>
                                <option value="8.0 Operation">8.0 Operation</option>
                                <option value="9.0 Performance Evaluation">9.0 Performance Evaluation</option>
                                <option value="10.0 Improvement">10.0 Improvement</option>
                                </select>
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
                                    value="Observation"
                                    checked={this.state.finding_priority==='Observation'}
                                    onChange={this.onChangeFindingPriority}
                                    />
                            <label className="form-check-label">Observation</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Minor"
                                    checked={this.state.finding_priority==='Minor'}
                                    onChange={this.onChangeFindingPriority}
                                    />
                            <label className="form-check-label">Minor</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Major"
                                    checked={this.state.finding_priority==='Major'}
                                    onChange={this.onChangeFindingPriority}
                                    />
                            <label className="form-check-label">Major</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Finding" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}