/**
 * ClientController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 'new': function (req, res) {
      res.view();
    },
    index: function (req, res) {
      Client.find(function foundClient (err, clients) {
        if(err) return res.redirect('/client/new');
        res.view({
          clients: clients
        });
      });
    },
    create: function(req, res) {
      Client.create(req.params.all(), function clientCreated(err, client) {
        if (err) return res.redirect('/client/new');
        res.redirect('/client/show/' + client.id); 
      });
    },
    show: function(req, res){
    	Client.findOne({id: req.param('id')}).exec(function (err, client){
			  if (err) {
			    return res.serverError(err);
			  }

			  if (!client) {
			    return res.notFound('Nenhum Cliente encontrado.');
			  }
			  else{
			  	res.view({
			  		client: client
			  	});
			  }
			})
    	
    }
	
};

