$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const taskName = $('#task-name').val();
        const taskDescription = $('#task-description').val();
        const novoItem = $('<div class="tasks"></div>');

        $(`<li style="display:none"></li>`).appendTo(novoItem);
        $(`<h3>${taskName}</h3>).appendTo(novoItem);`).appendTo(novoItem);
        $(`<div class="infos-task">
                <p>${taskDescription}</p>
                <div class="checkbox">
                    <input type="checkbox" id="task" onclick="apagarContato(event)"/>
                    <label for="task">Done</label>
                </div>
            </div>`
        ).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000)
    });

    $('body').on('change', 'input[type="checkbox"]', function() {
        if ($(this).is(':checked')) {
            $(this).closest('.tasks').fadeOut(1000);
            $(this).closest('.tasks').find('p, h3').css("text-decoration", "line-through");
        }
    });
});

    