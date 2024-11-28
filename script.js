const droplist=document.querySelectorAll(".select-options");

for(let i=0;i<droplist.length;i++){
    for(currency_code in country_list){
        console.log(currency_code)
        // let optionTag=`<option value="${currency_code}">${currencycode}</option>`;
    }   //droplist[i].insertAdjacentHTML("beforeend",optionTag);
}