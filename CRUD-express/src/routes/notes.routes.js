const { Router } = require('express')
const router = Router()

const { deletenote, updateNotes, renderNoteForm, createNewNote, renderNotes, renderEditForm } = require('../controllers/notes.controller');

//new note
router.get('/notes/add', renderNoteForm)
router.post('/notes/new-note', createNewNote)

//Get all Note
router.get('/notes', renderNotes)

//Edit Notes
router.get('/notes/edit/:id', renderEditForm)
router.post('/notes/edit/:id', updateNotes)

//Delete Notes
router.delete('/notes/delete/:id', deletenote)


module.exports = router