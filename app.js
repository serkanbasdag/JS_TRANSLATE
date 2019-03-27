eventListeners();


function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").onchange = function(){
        //arayüz işlemleri.

        ui.changeUI();
    }
}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();

function translateWord(e){
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord(function(response){
        if(response)
        {
            ui.displayTranslate(response);
        }
        else{
            
           // console.log(response);
        }
    });
    e.preventDefault();
}
