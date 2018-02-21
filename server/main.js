import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	DocumentList = new Mongo.Collection('documents');
	//documents is the table name

	// This line won't complete until the insert is done
	DocumentList.insert({file:'example.jpeg', name: 'Danielle', age: 25});
	// So this line will return something

	const documents = DocumentList.find().fetch();

});

