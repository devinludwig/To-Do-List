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
    $("ul#remaining").append("<li id=" + newTask.task.replace(/\s+/g, '')
 +"><span class='task'>" + newTask.task + "</span></li>");
    $("ul#tasks").append("<li><input type='checkbox' name='todo' value=" + newTask.task + "> " + newTask.task + "</li>");
    console.log(('li').value)
    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.task);
      $(".note").text(newTask.notes);
    });
    $("input:checkbox[name=todo]").last().change(function(){
      $("#" + newTask.task.replace(/\s+/g, '')).toggle();
      $(this.parentElement).css("text-decoration","line-through");
      $("input:checkbox[name=todo]:checked").last().change(function(){
        $(this.parentElement).css("text-decoration","none");
      });
      $("input:checkbox[name=todo]:not(:checked)").last().change(function(){
        $(this.parentElement).css("text-decoration","line-through");
      });
    });
    $("input#task, input#notes").val("");
  });
});
