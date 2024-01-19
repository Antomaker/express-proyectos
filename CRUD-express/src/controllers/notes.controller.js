const notesCtrl = {};

const Note = require('../models/Note');


notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note.pug');
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

notesCtrl.renderEditForm = (req, res) => {
    res.send('render editor');
};
notesCtrl.updateNotes = (req, res) => {
    res.send('update note');
};

notesCtrl.deletenote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes')
};
module.exports = notesCtrl;