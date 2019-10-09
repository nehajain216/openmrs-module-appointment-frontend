import {react2angular} from 'react2angular';
import store from "./react-components/store";
import AddAppointmentProvider from './react-components/containers/AddAppointmentProvider.jsx';

angular.module('bahmni.appointments').constant('store', store)
.component('reactAddAppointment', react2angular(AddAppointmentProvider));
