
//form-lateral
var form = $("#form-email");

$("#form-email").validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true
        }
    },
    messages: {
        name: "Favor preencher seu nome",
        email: {
            required: "Favor preencher seu e-mail",
            email: "Favor preencher com um e-mail válido"
        },
        tel: {
            required: "Favor preencher seu e-mail"
        }
    }
});

function sendFormAgende() {
    if (form.valid()) {
        var data = $("#form-email").serializeArray();
        $.ajax({
            type: "POST",
            url: "functions/agenda.php",
            data: data,
            dataType: "json",
            success: function(result) {
                if (result.status == "OK") {
                    $('#myModal').modal('hide');
                    $('#modalsucesso').modal('show');
                    $('#modalsucesso').append('<iframe src="tag-GA.html" frameborder="0"></iframe>');
                    ga('send', 'pageview', 'send-form-contato');
                } else {
                    $('#myModal').modal('hide');
                    $('#modalerro').modal('show')
                }
            }
        });
        return false;
    }
}


//form modal
var form2 = $("#form-email-modal");

$("#form-email-modal").validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true
        }
    },
    messages: {
        name: "Favor preencher seu nome",
        email: {
            required: "Favor preencher seu e-mail",
            email: "Favor preencher com um e-mail válido"
        },
        tel: {
            required: "Favor preencher seu e-mail"
        }
    }
});

function sendFormAgende2() {
    if (form2.valid()) {
        var data = $("#form-email-modal").serializeArray();
        $.ajax({
            type: "POST",
            url: "functions/agenda.php",
            data: data,
            dataType: "json",
            success: function(result) {
                if (result.status == "OK") {
                    $('#myModal').modal('hide');
                    $('#modalsucesso').modal('show');
                    $('#modalsucesso').append('<iframe src="tag-GA.html" frameborder="0"></iframe>');
                    ga('send', 'pageview', 'send-form-contato');
                } else {
                    $('#myModal').modal('hide');
                    $('#modalerro').modal('show')
                }
            }
        });
        return false;
    }
}


$("input[name=tel]").mask("(00) 0000-00000");


$('.icon-toggle').click(function() {
    $(this).toggleClass('active');
    $('.content-contato').toggleClass('hide');

    if ($(this).hasClass('active')) {
        $('p',this).text('Expandir');
        $('img',this).attr('src','images/icon-04.svg');
        ga('send', 'pageview', 'show-form-contato');
    }else{
        $('p',this).text('Recolher');
        $('img',this).attr('src','images/icon-03.svg');
    }
});

$(document).ready(function($) {
    // //Abre imagem com alta qualidade no modal
    // $('.img-slider').click(function() {
    //     var url = $(this).attr('src');
    //     $('#img-slider-modal').attr('src',url);
    //     $( "#hidden-gif" ).show(0).delay(2000).hide(0);
    // });

    // //Altera titulo dos slider de acordo com a imagem mostrada
    // $('.carousel').on('slid.bs.carousel', function () {
    //     var title = $('.item.active img', this).attr('data-title');
    //     var ordem = $('.item.active img', this).attr('data-ordem');
    //     $(this).next().next().text(title);
    //     $(this).next().text(ordem);       
    // });

    $(".tel-hidden").click(function() {
        $(this).hide();
        $(".tel-visible").css('display','block');
        ga('send', 'pageview', 'show-tel');
    });
});