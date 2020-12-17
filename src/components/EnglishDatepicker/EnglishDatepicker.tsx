import React, { useRef } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './EnglishDatepicker.scss';

interface DateProps {
    id?: string;
    name?: string;
    className?: string;
    placement?: string;
    popperModifiers?: { [key: string]: any }
    wrapperClassName?: string;
    handleChange: (date: any) => void;
    value?: any;
    minDate?: any;
    maxDate?: any;
    minTime?: any;
    maxTime?: any;
    showTimeSelect?: boolean;
}
const EnglishDatePicker: React.SFC<DateProps> = (props) => {
    const { id, name, className, placement, popperModifiers, wrapperClassName = "", value, minDate, maxDate, minTime, maxTime, handleChange, showTimeSelect } = props;
    const _calendar: any = useRef<DatePicker>();

    return (
        <div className="form-group-icon">
            <DatePicker
                ref={_calendar}
                id={id}
                autoComplete={"off"}
                name={name}
                wrapperClassName={`${wrapperClassName} d-block`}
                className={className}
                selected={value}
                minDate={minDate}
                maxDate={maxDate}
                minTime={minTime}
                maxTime={maxTime}
                onChange={handleChange}
                onChangeRaw={(e) => e.preventDefault()} //Disables input
                showTimeSelect={showTimeSelect}
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                popperPlacement={placement ? placement : "bottom-start"}
                popperModifiers={popperModifiers}
                dateFormat={showTimeSelect ? "yyyy-MM-dd h:mm aa" : "yyyy-MM-dd"}
                showYearDropdown
                showMonthDropdown
            />
            <i className="ic-calendar" onClick={() => _calendar.current?.setOpen(true)}></i>
        </div>
    );
}

export default EnglishDatePicker