function Task(task, notes) {
  this.task = task;
  this.notes = notes;
};

// Task.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };

$(document).ready(function() {

  $('form#new-task').submit(function(event) {
    event.preventDefault();

    var inputtedTask = $('input#new-task').val();
    var inputtedNotes = $('input#new-notes').val();
    var newTask = new Task(inputtedTask, inputtedNotes);
    $(".show-list").show();
    $("ul#remaining").append("<li><span class='task'>" + newTask.task + "</span></li>");
    $("ul#tasks").append("<li><input type='checkbox' name='todo' value=" + newTask.task + "> " + newTask.task + "</li>");
    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.task);
      $(".note").text(newTask.notes);
    });
    $("input#task, input#notes").val("");
  });
});
