import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateFinding from "./components/create-finding.component";
import EditFinding from "./components/edit-finding.component";
import FindingsList from "./components/findings-list.component";
import AuditCheckList from "./components/audit-checklist";
import MandatoryProcedures from "./components/mandatory-procedures";
import MandatoryRecords from "./components/mandatory-records";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Audit Management App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Findings</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Finding</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/mandatory-records" className="nav-link">Mandatory Records</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/mandatory-procedures" className="nav-link">Mandatory Procedures</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/checklist" className="nav-link">Audit CheckList</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/qms-requirements" className="nav-link">QMS Requirements</Link>
                </li>

              </ul>
            </div>
          </nav>

          <Route path="/" exact component={FindingsList} />
          <Route path="/edit/:id" component={EditFinding} />
          <Route path="/create" component={CreateFinding} />
          <Route path="/checklist" component={AuditCheckList} />
          <Route path="/records" component={MandatoryRecords}/>
          <Route path="/procedures" component={MandatoryProcedures}/>
        </div>
      </Router>
    );
  }
}

export default App;
