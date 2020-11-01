import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DayPicker(){

    const [selectedDate, setSelectedDate] = useState(null);
    return(
        <div>
            <DatePicker 
                selected = {selectedDate} 
                onChange = {date => setSelectedDate(date)} 
            />
        </div>
    )
}

export default DayPicker;