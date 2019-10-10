import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import datePicker from "./DatePicker.module.scss";
import classNames from 'classnames';

const AppointmentDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setStartDate(new Date(startDate));
    // }, startDate);

    const updateDate= date => setStartDate(date);

    return (
        <DatePicker selected={startDate} onChange={updateDate}
                    className={classNames(datePicker)}
                    onClickOutside={(startDate) =>
                    setStartDate(new Date())}
                    inline
                    />
    );
};

export default AppointmentDatePicker;