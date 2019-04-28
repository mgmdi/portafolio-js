'use strict'

// SLIDER CON JQUERY

$(document).ready(function(){

    // SLIDER
    if(window.location.href.indexOf('index') > -1){
        // Si estoy en index entonces cargo el slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    };
    if(window.location.href.indexOf('index') > -1){
        // POST
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            }
        ];
        posts.forEach((item,index)=>{
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="fecha">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
            `;
            $("#posts").append(post);
        });
    };
    
    
    // Selector de tema

    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    // Scroll

    $(".subir").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop : 0
        },500); 
    });

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name",form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<strong>Bienvenido, " + form_name +"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    };

    if(window.location.href.indexOf('reloj') > -1){
        //var reloj = moment().format('h:mm:ss');
        //$("#reloj").html(reloj);
        $('#clock_hou').jClocksGMT({ title: 'Houston, TX, USA', offset: '-6', skin: 2 });
    };
    
});