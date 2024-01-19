const notesCtrl = {};

const Note = require('../models/Note');


notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note.pug');
};
notesCtrl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    await newNote.save();

    res.send('new note');
};
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes.pug',{notes});
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('render editor');
};
notesCtrl.updateNotes = (req, res) => {
    res.send('update note');
};

notesCtrl.deletenote = (req, res) => {
    res.send('delete note');
};
module.exports = notesCtrl;