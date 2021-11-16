import React from 'react'
import { useRouter } from 'next/router';
import UserLayout from '../../components/User/Layout';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import events from '../../public/events';

const localizer = momentLocalizer(moment)

const Schedular = () => {
    
    return (
        <UserLayout base_url="/">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                />
        </UserLayout>
    )
}

export default Schedular
