import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tasks } from '../api/tasks.js';

import './main.html';
import './main.css';

DocumentList = new Mongo.Collection('documents');

Template.body.helpers({
  tasks() {
    return Tasks.find({}, {sort: {createdAt: -1} });
  },
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const age = target.age.value;
    const file = target.file.value
	

    // Insert a task into the collection
    Tasks.insert({
      text,
      age,
      file,
      createdAt: new Date(),
    });
      console.log("This is: ", text, age, file)

    // Clear form
    target.text.value = '';
  },
   'click .delete'() {
    Tasks.remove(this._id);
    console.log(this)
  }
});
