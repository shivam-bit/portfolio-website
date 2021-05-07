window.onload=() =>{
    const btn1 = document.querySelector('#self-incr-btn');
    btn1.onclick=()=>{
        btn1.value=parseInt(btn1.value)+1;
        console.log(btn1.value)
    }
    const decrBtn=document.querySelector('#decr-btn');
    const incrBtn=document.querySelector('#incr-btn');
    const resultBox=document.querySelector('#result-txt-box');
    decrBtn.onclick=()=>{
        resultBox.value=parseInt(resultBox.value)-1;
    }
    incrBtn.onclick=()=>{
        resultBox.value=parseInt(resultBox.value)+1;
    }


    const urlTxt=document.querySelector('#url-txt-box');
    const encBtn=document.querySelector('#enc-btn');
    const decBtn=document.querySelector('#dec-btn');
    const resultTxt=document.querySelector('#url-result-txt-box');
    // const urlEncode=(url)=> encodeURIComponent(url);
    // const urlDecode=(url)=> decodeURIComponent(url);
    encBtn.onclick=()=>{
        resultTxt.value=encodeURIComponent(urlTxt.value)
    }
    decBtn.onclick=()=>{
        resultTxt.value=decodeURIComponent(urlTxt.value)
    }

    const chrTxt=document.querySelector('#chr-cnt-box');
    const chrResult=document.querySelector('#chr-cnt-result-txt');
    chrTxt.oninput=()=>{
        chrResult.innerHTML= chrTxt.value.length;
}

}