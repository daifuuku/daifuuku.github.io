function sentaku(sentakusi){

    let message = '';

    if(sentakusi === 1) {
        message = "不正解";
    } else if (sentakusi === 2){
        message = "正解";
    } else if (sentakusi === 3){
        message = "不正解";
    } else if (sentakusi === 4){
        message = "不正解";
    } else {
        message = "想定されていない引数です。";
    }

    console.log(message);

    const p_sentaku = document.querySelector("#sentaku");

    p_sentaku.textContent = message;

}