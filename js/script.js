$(document).ready(function(){
    $('.button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="task-item"><input type="checkbox"><span class="task-name">' + toAdd + '</span></input></div>');
    });
});