const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send('note add');
};
notesCtrl.createNewNote = (req, res) => {
    res.send('new note');
};
notesCtrl.renderNotes = (req, res) => {
    res.send('render notes');
};

notesCtrl.renderEditForm=(req, res) => {
    res.send('render editor');
};
notesCtrl.updateNotes=(req, res) => {
    res.send('update note');
};

notesCtrl.deletenote=(req, res) => {
    res.send('delete note');
};
module.exports = notesCtrl;