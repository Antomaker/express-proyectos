const notesCtrl = {};

const Note = require('../models/Note');


notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note.pug')
};
notesCtrl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    await newNote.save();
    res.redirect('/notes')
    
};
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes.pug',{notes});
};

notesCtrl.renderEditForm = async(req, res) => {
    const note =await Note.findById(req.params.id).lean();
    console.log(note);
    res.render('notes/edit-note.pug',{note, someid:req.params.id});
};
notesCtrl.updateNotes = async(req, res) => {
    const {title,description}=req.body;
    await Note.findByIdAndUpdate(req.params.id,{title:title,description:description})
    res.redirect('/notes');
};

notesCtrl.deletenote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes')
};

//cambios
notesCtrl.renderAddListForm = (req, res) => {
    res.render('notes/add-list.pug');
};

// Asegúrate de agregar la función addList para manejar la creación de listas
notesCtrl.addList = async (req, res) => {
    // Implementa la lógica para agregar listas aquí
    res.redirect('/notes'); // Redirige a la página de notas después de agregar la lista
};

notesCtrl.renderViewLists = async (req, res) => {
    const lists = await Note.find(); // Asegúrate de tener un modelo List configurado
    res.render('notes/view-lists.pug', { lists });
};

notesCtrl.renderEditListForm = async (req, res) => {
    const list = await Note.findById(req.params.id).lean();
    res.render('notes/edit-list.pug', { list });
};

// Asegúrate de agregar la función editList para manejar la edición de listas
notesCtrl.editList = async (req, res) => {
    // Implementa la lógica para editar listas aquí
    res.redirect('/notes/view-lists'); // Redirige a la página de ver listas después de editar la lista
};

module.exports = notesCtrl;