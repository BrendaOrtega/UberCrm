const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const appSchema = new Schema({
	name:{
		type:String,
		required:false
	},
	surName: String,
	lastName: String,
	email: String,
	tel: String,
	cp: String,
	kindOfUser: String,
	grade: String,
	adult: String,
	understanding: String,
	course: String,
	why: String,
	objectives: String,
	skills: String,
	date: String,
	token: String,
	score: String,
	evaluator: String,
	scoreN: String,
	comment: String,
	interview_score: Number,
	interviewer_comment: String,
	webScore:String,
	uxScore:String,
	technicalCategory:String,
	whyTo:String,
	personal_interviewer: String

});

appSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("App", appSchema);