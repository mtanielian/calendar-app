import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import ModalEvent from '../../components/modals/ModalEvent'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, addHours, parse ,startOfWeek ,getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Fab } from '@mui/material'
import { Add, Calculate } from '@mui/icons-material'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


const CalendarPage = () => {
  const [view, setView] = useState(localStorage.getItem('calendarView') || 'agenda')
  const [open, setOpen] = useState(false)
  const { events } = useSelector(state => state.events)
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    if (isSelected) {
      return {
        style
      }
    }

  }

  const onDoubleClick = (event) => {
    console.log({onDoubleClick: event})
    setOpen(true)
  }

  const onClick = (event) => {
    console.log({onClick: event})
  }

  const onViewChange = (event) => {
    console.log({onViewChange: event})
    localStorage.setItem('calendarView', event)
  }

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 250px)' }}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onClick}
        onView={onViewChange}
        defaultView={view}
      />
      <ModalEvent
        open={open}
        setOpen={setOpen}
      />
      <Fab 
        color="primary" aria-label="add" 
        sx={{ position: 'absolute', bottom: 70, right: 16, padding: 4}}>
        <Add />
      </Fab>
    </>
  )
}

export default CalendarPage