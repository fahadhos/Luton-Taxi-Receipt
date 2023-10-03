console.log('hi');

const getfare = document.getElementById('fare')
const getDate = document.getElementById('date')

const getDateText = document.getElementById('datetext')
const getFareText = document.getElementById('faretext')
const handlefare = ()=>{

    console.log(getDate.value);
    console.log(getfare.value);
    console.log(isNaN(getfare.value));
   if(!isNaN(getfare.value)  )
   {
       getFareText.innerText = getfare.value

   }
   else
   {
       
       console.log("This code will run after 3000 milliseconds (3 seconds).");
       document.getElementById('msg-box').classList.remove('hidden')
       document.getElementById('msg').innerText='Please enter a number only'
    setTimeout(function() {
       document.getElementById('msg-box').classList.add('hidden')
    }, 1000);
   
    // console.log('Please enter a number only');
   }
    getDateText.innerText = getDate.value
  
}
 

// for clearing 
const handleClear=()=>{
  getDateText.innerText = '...........................';
    getFareText.innerText = '...........................';
}
 
const generateRecipient =()=>{
 
const element = document.getElementById('pdf')
console.log(element);
html2pdf().from(element).save('money-invoice')
}