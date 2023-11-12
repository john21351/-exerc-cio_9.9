$(document).ready(function() {
    // Adiciona tarefa ao enviar o formulário
    $('#area-form').submit(function(event) {
    event.preventDefault();
    var doIpunt = $('#input-principal').val();
    if (doIpunt.trim() !== '') {
        $('#tarefas').append('<li>' + doIpunt + '</li>');
        $('#input-principal').val(''); // Limpa o campo de entrada
    }
    });

    // Adiciona efeito de linha através do clique
    $('#tarefas').on('click', 'li', function() {
    $(this).toggleClass('completed');
    });
});