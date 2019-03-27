function UI(){
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");
    this.languageList = document.getElementById("language");
}
UI.prototype.changeUI = function(){
    //arayüz değiştir.

    this.outputImage.src = `https://www.countryflags.io/${this.languageList.value}/shiny/64.png`;
    this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;

}
UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;

}
