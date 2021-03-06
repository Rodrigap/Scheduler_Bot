"use strict";

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Task = mongoose.model("Task", {
  subject: {
    required: true,
    type: String
  },
  day: {
    required: true,
    type: String
  },
  eventID: String,
  requesterID: String
});

var Meeting = mongoose.model("Meeting", {
  day: {
    required: true,
    type: String
  },
  time: {
    required: true,
    type: String
  },
  invitees: {
    required: true,
    type: String
  },
  subject: String,
  location: String,
  length: String,
  status: String,
  createdAt: String,
  requesterID: String
});

var User = mongoose.model("User", {
  google: Object,
  meeting_length: String,
  slackID: String,
  slackUsername: String,
  slackEmail: String,
  pending: String,
  //pending should be a stringified object with the subject, action,
  //and date from API AI
  //set pending to empty string once you make event
  // slackDMID: String
});

var Invite = mongoose.model("Invite", {
  eventID: String,
  inviteeID: String,
  requesterID: String,
  status: String
});

var Reminder = mongoose.model("Reminder", {
  subject: String,
  date: String,
  userID: String
})

module.exports = {
  User: User,
  Task: Task,
  Meeting: Meeting,
  Invite: Invite,
  Reminder: Reminder
}
