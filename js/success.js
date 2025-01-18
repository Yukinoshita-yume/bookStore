if(localStorage.getItem('UserCard')==null){
    window.location.replace('index.html')
}
const userCardNumber=localStorage.getItem('UserCard').slice(-4)
console.log(userCardNumber)
let masterCardBox=document.getElementById('MasterCard')
masterCardBox.style.textIndent=masterCardBox.clientHeight*1.4+'px'
masterCardBox.textContent="  Your credit card number ends in **** **** **** **** "+userCardNumber
