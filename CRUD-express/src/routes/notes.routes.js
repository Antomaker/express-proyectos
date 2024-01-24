const { Router } = require('express')
const router = Router()

const { deletenote, updateNotes, renderNoteForm, createNewNote, renderNotes, renderEditForm,renderAddListForm,addList,renderViewLists,renderEditListForm,editList } = require('../controllers/notes.controller');

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

//lista 
router.get('/notes/add-list', renderAddListForm);
router.post('/notes/add-list', addList); 

// Nueva ruta para la vista de ver listas
router.get('/notes/view-lists', renderViewLists);

// Nueva ruta para la vista de editar lista
router.get('/notes/edit-list/:id', renderEditListForm);
router.post('/notes/edit-list/:id', editList); // Aún necesitas implementar la función editList en tu controlador

module.exports = router