import React, {Component} from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
// import axios from 'axios';

const AuditCheckList = (props) => {
  const data_panel = {
    columns: [
      {
        'label': <MDBInput label=" " type="checkbox" id="checkbox5" />,
        'field': 'check',
        'sort': 'asc'
      },
      {
        'label': 'Clause',
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': 'Ref',
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': 'Audit Question',
        'field': 'username',
        'sort': 'asc'
      },
      {
        'label': 'Audit Findings',
        'field': 'username2',
        'sort': 'asc'
      },
      {
        'label': 'Audit Evidence',
        'field': 'username3',
        'sort': 'asc'
      },
      {
        'label': 'Opporitunities for Improvement (OFI)',
        'field': 'username4',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox6" />,
        'first': '4.1',
        'last': '1',
        'username': 'Has your organization determined external and internal issues relevant to its purpose and its strategic direction that affect its ability to achieve the intended result(s) of its QMS?',
        'username2': 'Complaint/OFI/MinorNC/MajorNC',
        'username3': '(Provide reference to documented information to justify the finding)',
        'username4': 'Provide suggestion for process improvement'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox7" />,
        'first': '4.1',
        'last': '2',
        'username': 'Does your organization monitor and review information about these external and internal issues?',
        'username2': ' ',
        'username3': ' ',
        'username4': ' '
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox8" />,
        'first': '4.2',
        'last': '3',
        'username': 'Does the organization determine the interested parties that are relevant to the QMS?',
        'username2': ' ',
        'username3': ' ',
        'username4': '  '
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox9" />,
        'first': '4.2',
        'last': '4',
        'username': 'Does the organization determine the requirements of these interested parties that are relevant to the QMS?',
        'username2': '',
        'username3': '',
        'username4': ' '
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': '4.2',
        'last': '5',
        'username': 'Does your organization monitor and review information about these interested parties and their relevant requirements?',
        'username2': '',
        'username3': '',
        'username4': ' '
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': '5.1',
        'last': '1',
        'username': 'Do employees understand the consequences of failing to meet requirements? Is there a quality policy? Are quality objectives defined? Are management reviews being conducted regularly? ‘Are adequate resources necessary for the quality system provided? Are there specific examples how management promotes improvement?',
        'username2': '',
        'username3': '',
        'username4': ' '
      }
    ]
  };

  return(
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-th-large mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
          </MDBBtn>
        </div>
        <a href="#" className="white-text mx-3">Audit Checklist - System & Process Compliance Auditing</a>
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-times mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-info-circle mt-0"></i>
          </MDBBtn>
        </div>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default AuditCheckList;