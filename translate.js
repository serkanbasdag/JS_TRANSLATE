function Translate(word,language){
    this.apikey = "trnsl.1.1.20190326T072750Z.fd8b3febb6c5dd1d.230da5b820b02b67dfd46a7244fe4de2f7e22e52";
    this.word = word;
    this.language = language;

    //XHR obj

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    //Ajax işlemleri.
    const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET",endPoint);
    this.xhr.onload = () => {
        if(this.xhr.status == 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(text);
        }else{
           
            callback("Bir hata oluştu..",null)
        }
    }; 
    this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}
