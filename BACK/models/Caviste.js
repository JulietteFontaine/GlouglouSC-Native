const mongoose = require('mongoose');

var CavisteSchema = mongoose.Schema ({
    Nom: String,
    Prenom: String,
    Tel: String,
    Email: String,
    MDP: String,

    Domaine: String,
    Region : String,
    Photo: String,
    Desc: String
})

const CavisteModel = mongoose.model('cavistes', CavisteSchema);

module.exports = CavisteModel