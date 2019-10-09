import React, {Component} from "react";
import { connect } from "react-redux";
import { AppointmentEditor } from "../AppointmentEditor/AppointmentEditor.jsx";
import {fetchPatients} from "../actions/patientService.js"

// TODO : need to add connection to redux
// const AddAppointmentContainer = () => {
//     return (<AppointmentEditor/>);
// };

class AddAppointmentContainer extends Component {
    componentWillMount(){
        this.props.getPatients();
    }
    render() {
        return (<div><AppointmentEditor/></div>);
    }
}

const mapStateToProps = (state) => {
    debugger;
    return { identifier: state.patients.identifier };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        getPatients: () => dispatch(fetchPatients())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (AddAppointmentContainer);
