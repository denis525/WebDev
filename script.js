// Code goes here
 /* $( function() {
    $( "#dialog" ).on( "click", function() {
      $( "#dialog" ).addClass( "dialog", 500, callback );
    });

function callback() {
  setTimeout(function() {
    $( "#dialog" ).removeClass( "dialog" );
  }, 2000 );
}
} );*/

var komentar3;

function callback() {
  setTimeout(function() {
    komentar3.removeClass( "list-group-item-success", 500 );
  }, 2000 );
}

function steviloKomentarjev() {
    var stevilo = $(".list-group li").length;
    $("#stKomentarjev").text(stevilo);
}

function prikaziSkrijKomentarje() {
    if ($(".card-link:nth-child(1)").text() == "Prikaži komentarje") {
        $(".card-link:nth-child(1)").text("Skrij komentarje");
        $(".list-group").show();
    } else {
        $(".card-link:nth-child(1)").text("Prikaži komentarje");
        $(".list-group").hide();
    }
}

$(document).ready(function() {
    $( "#dialog" ).dialog({
    buttons: [
      {
        text: "Dodaj",
        icons: {
         primary: "ui-icon-heart"
        },
        click: function() {
          var vzdevek = $("#vzdevek").val();
          if (!vzdevek) {
              //$(".notification:nth-child(1)").show();
              $("#dialog div:nth-child(1) .notification").show();
          }
          
          var komentar = $("#komentar").val();
          if (!komentar) {
              //$(".notification:nth-child(2)").show();
              $("#dialog div:nth-child(2) .notification").show(); // !!
          }
        
          if (komentar && vzdevek) {
              //$( this ).dialog( "close" );
              
              $("#dialog").hide();
              $(".ui-dialog").hide();
              
              
              var komentar2 = $(".list-group-item:nth-child(1)").clone();
              $(komentar2).find("h5").text(vzdevek);
              $(komentar2).find("p").text(komentar);
              
              komentar3 = komentar2;
              
              komentar2.appendTo(".list-group");
              komentar2.addClass( "list-group-item-success", 500, callback );
              
              $(".list-group").show();
              
              steviloKomentarjev();
              $(".card-link:nth-child(1)").text("Skrij komentarje");
          }
        }
      },
      {
        text: "Prekliči",
        icons: {
         primary: "ui-icon-heart"
        },
        click: function() {
          $("#vzdevek").val("");
          $("#komentar").val("");
          //$( this ).dialog( "close" );
          
              $("#dialog").hide();
              $(".ui-dialog").hide();
        }
      }
    ]
  });


    steviloKomentarjev();

    $("#dialog").hide();
    $(".ui-dialog").hide();
    
    // Prikaz okna
    $(".card-link:nth-child(2)").click(function() {
      $(".notification").hide();
      $("#vzdevek").val("");
      $("#komentar").val("");
      
      var options = {};
      $("#dialog").show();
      $(".ui-dialog").toggle("fade", options, 500 );
  });
  
  $(".list-group").hide();
  
  // Prikaz komentarjev
  $(".card-link:nth-child(1)").click(function() {
      prikaziSkrijKomentarje();
  });
  
});