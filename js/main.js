$(function(){

    // Navbar para celular
    $('#phone_menu').hide();
    $('.bars i').on('click',function(){
        $('#phone_menu').slideToggle(200);
      
    });


    // Mapa with LEAFLETJS 
    
    var map = L.map('mapa').setView([-33.3505969,-70.7185454], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-33.3505969,-70.7185454]).addTo(map)
    .bindPopup('Estamos AQUI!')
    .openPopup();
   

});