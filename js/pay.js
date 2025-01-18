localStorage.removeItem('UserCard')
const now=new Date()
const year=now.getFullYear()
let yearSelector=document.getElementById('year')

for(let i=year-10;i<=year+100;i++){
    let yearOption=document.createElement('option')
    yearOption.text=i
    yearOption.value=i
    yearSelector.appendChild(yearOption)
}
var cardH=document.getElementById('cards').clientHeight
let cards=document.getElementById('cards')
for(let i=1;i<5;i++){
    let cardDiv=document.createElement('div')
    cardDiv.style.height=cardH*0.8+'px'
    cardDiv.style.width=cardH*1.4+'px'
    cardDiv.style.backgroundImage='url(\'../icon/card'+i+'.png\')'
    cardDiv.style.backgroundRepeat='no-repeat'
    cardDiv.style.backgroundSize=' 100% auto'
    cards.appendChild(cardDiv)
}
document.getElementById('continueButton').addEventListener('click',function(event){
    event.preventDefault()
    let cardNumber = document.getElementById('cardNumber').value
    const expYear = document.getElementById('year').value
    const expMonth = document.getElementById('month').value
    const cvvCode = document.getElementById('securityCode').value
    // || !(/^5[1-5]\d{14}$/.test(cardNumber))
    // console.log(expYear,expMonth)
    // console.log(year,now.getMonth()+1)
    if (cardNumber.length != 16|| !(/^5[1-5]\d{14}$/.test(cardNumber)) ){
        console.log('Invalid credit card number.')
        alert('Invalid credit card number.')
        return
    }
    if (expYear==0 && expMonth==0){
        console.log('Please enter month and year.')
        alert('Please enter month and year.')
        return
    }
    if (expYear==0){
        console.log('Please enter year.')
        alert('Please enter year.')
        return
    }
    if (expMonth==0){
        console.log('Please enter month.')
        alert('Please enter month.')
        return
    }
    if (expYear<year||(expYear==year&&expMonth<now.getMonth()+1)){
        console.log('Credit card has expired.')
        alert('Credit card has expired.')
        return
    }
    if (cvvCode.length !== 3 && cvvCode.length !== 4){
        console.log('Invalid CVV code.')
        alert('Invalid CVV code.')
        return
    }
    let cardnumber=parseInt(cardNumber)
    const data = {
        "master_card":cardnumber,
        "exp_year":expYear,
        "exp_month":expMonth,
        "cvv_code":cvvCode
    }
    fetch('https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(json=> 
        {
            console.log(json.data)
            localStorage.setItem('UserCard',json.data.master_card)
            window.location.replace('success.html')
            alert(json.message)
        })
    .catch(err=>{
        console.log(err.status)
        console.log(err.name)
        console.error(err.message)
        alert(err.message)
        return
    })    
})
// 5390123412341234
