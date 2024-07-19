$(document).ready(function(){
$('form').on('submit', function(e){
    e.preventDefault()
    const inputTask = $('#task-text').val();
    const novoItem = $(`<li>${inputTask}</li>`)
    $('#list-task').append(novoItem);
    $('#task-text').val('');

    novoItem.click(function(){
        $(this).toggleClass('task-end')
    })
})
})