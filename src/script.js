console.log('hi');

const getfare = document.getElementById('fare')
const getDate = document.getElementById('date')

const getDateText = document.getElementById('datetext')
const getFareText = document.getElementById('faretext')
const handlefare = (e)=>{

    console.log(getDate.value);
    console.log(getfare.value);
   
    getDateText.innerText = getDate.value
    getFareText.innerText = getfare.value
}


 
const generateRecipient =()=>{
 
const element = document.getElementById('pdf')
console.log(element);
html2pdf().from(element).save()
}