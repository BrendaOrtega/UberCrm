const App = require("../models/Application");

exports.addController = (req,res)=>{
	let puerca = 0;
	let puerco = 0;
	//console.log(req.body);
	//console.log("puerca: ",req.body.chunk.length);
	App.create(req.body.chunk)
		.then(r=>{
			puerca++;
			console.log("puerca",puerca);
			res.json(r)
		})
		.catch(e=>{
			puerco++;
			console.log("puerco",puerco, e);
			res.send(e)
		});
}

exports.findOrCreate = (req,res)=>{
	for(let obj of req.body.chunk){
		App.findOne({token:obj.token}, (err, user)=>{
			//console.log(err, user);
			if(err) console.log(err);
			if (!err && !user) {
				App.create(obj);
			}
			
		})
	}
	res.send("done");
	// App.count({token:{$exists:true}}, (err,r)=>{
	// 	console.log(r);
	// 	res.send("done");
	// })
	
	
};


exports.getAll = (req,res)=>{
	App.find()
		.then(r=>res.json(r))
		.catch(e=>res.send(e));
}

//searching
exports.search = (req,res)=>{
	console.log(req.query);
	App.find(req.query)
	.then(r=>{
		App.find(req.query).count()
		.then(num=>res.json({quantity:num,data:r}))
	})
	
	.catch(e=>res.send(e));
	//res.json(req.query)
}

//testing

exports.getTen = (req,res)=>{
	App.find().limit(20)
		.then(r=>res.json(r))
		.catch(e=>res.send(e));
}