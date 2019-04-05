import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { statusGET, statusDateGET } from '../api'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadData } from '../store/actions';
import { Alert, Table } from 'react-bootstrap';

class Main extends Component {

  state = {
    data: [],
    error: null,
  };

  handleChange = (date) => {
    this.props.history.push(`/status/${moment(date).format("DD-MM-YYYY")}`);

  }

  componentDidMount() {
    this.props.loadData(this.props.match.params)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.date !== this.props.match.params.date) {
      this.props.loadData(this.props.match.params);
    }
  }

  render() {
    return (
      <div>
        <DatePicker
        style={{marginTop: '30px'}}
        selected={this.props.match.params.date ? moment(this.props.match.params.date, "DD/MM/YYYY").toDate() : new Date()}
        onChange={this.handleChange}
        dateFormat="dd/MM/yyyy"
      />
      <div className="main-content">
          {
            this.props.error ? <Alert style={{ height: '50px', marginTop: '150px' }} variant="danger">{this.props.error}</Alert>
              :
              <Table striped bordered hover style={{ marginTop: '30px', width: '50%' }}>
                <thead>
                  <tr>
                  <th>timestamp</th>
                  <th>name</th>
                  <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map( (event, key) => (
                    <tr key={key}>
                      <td>{Date(event.ts)}</td>
                      <td>{event.task}</td>
                      <td>{event.status}</td></tr>))}
                </tbody>
              </Table>
          }
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    data: state.main.data,
    error: state.main.error
  }
);

const mapDispatchToProp = (dispatch) => ({
  loadData: (payload) => dispatch(loadData(payload))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Main));
