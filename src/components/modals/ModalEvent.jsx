import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { differenceInSeconds } from "date-fns";
import { doAddEvent, doClearEvent, doRemoveEvent, doUpdateEvent } from "../../actions/event.actions";
import { doOpenModal } from "../../actions/modal.actions";
import { Modal, Box, Grid, Typography, TextField, Divider, Button } from "@mui/material"
import { DeleteOutline, SaveOutlined } from "@mui/icons-material";
import { useEffect } from "react";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


let now = new Date()
now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
const date = now.toISOString().slice(0,16)

const ModalEvent = () => {
  const { event } = useSelector(state => state.events)
  const {register, handleSubmit, formState: { errors }, getValues, reset } = useForm()
  const { loading } = useSelector(state => state.events)
  const { open } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    if (event._id) {
      const dateStart = new Date(event.start)
      let start = dateStart.setMinutes(dateStart.getMinutes() - dateStart.getTimezoneOffset())
      start = dateStart.toISOString().slice(0,16)

      const dateEnd = new Date(event.end)
      let end = dateEnd.setMinutes(dateEnd.getMinutes() - dateEnd.getTimezoneOffset())
      end = dateEnd.toISOString().slice(0,16)
      
      reset({...event, start, end})
    }
  }, [event])

  const onSubmit = (form) => {
    if (event._id) {
      dispatch(doUpdateEvent(form))
    } else {
      dispatch(doAddEvent(form))
    }
    reset({})
    dispatch(doOpenModal(false))
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event saved',
      showConfirmButton: false,
      timer: 3500
    })
  }

  const onCloseModal = () => {
    reset({})
    dispatch(doClearEvent())
    dispatch(doOpenModal(false))
  }

  const onRemoveClick = async () => {
    const response = await Swal.fire({
      title: 'Do you want to remove this event?',
      showCancelButton: true,
      confirmButtonText: 'Delete',      
    })
    
    if (response.isConfirmed) {
      dispatch(doRemoveEvent(event._id))
      onCloseModal()
    }
  }

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography variant="h6">New Event {loading}</Typography>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container sx={{mt: 2}} spacing={2}>
            <Grid item xs={12}>
              <TextField 
                label="Start Event"
                type="datetime-local"
                defaultValue={date}
                variant="outlined"
                fullWidth
                { ...register('start', {
                  required: 'Start Event is required',
                })}
                error={!!errors.start}
                helperText={errors.start?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="End Event"
                type="datetime-local"
                defaultValue={date}
                variant="outlined"
                fullWidth
                { ...register('end', {
                  required: 'End Event is required',
                  validate: value => { 
                    const diff = differenceInSeconds(new Date(getValues('end')), new Date(getValues('start')))
                    if (isNaN(diff) || diff < 0) {
                      return 'End Event must be after Start Event'
                    }

                  }
                })}
                error={!!errors.end}
                helperText={errors.end?.message}
              />
            </Grid>
            </Grid>
            <Divider sx={{marginY: 2}} />
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                label="Title"
                variant="outlined"
                fullWidth
                { ...register('title', {
                  required: 'Title is required',
                  minLength: { value: 5, message: '+4 characters' }
                })}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Notes"
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                { ...register('notes') }
              />
            </Grid>
            <Grid item xs={12}>
            { event._id &&
            
            <Button 
                type='button' 
                variant="outlined" 
                color="error"
                startIcon={<DeleteOutline />}
                onClick={onRemoveClick}
                sx={{ mr: 2 }}
              >
                Delete
              </Button>}
              <Button 
                type='submit' variant="outlined" 
                startIcon={<SaveOutlined />}
                disabled={loading}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  )
}

export default ModalEvent