localStorage.removeItem('UserCard')
function train(data) { 
let bookData=[]
let book=document.getElementById('bookbox')
for(let i=1;i<=data.length;i++)
{
    let books=document.createElement('div')
    books.className='books'
    book.appendChild(books)
    let bookimg=document.createElement('div')
    bookimg.className='bookimg'
    // bookimg.style.backgroundImage='url(\'../img/b'+i+'.jpg\')'
    bookimg.style.backgroundImage='url(\'../bookImg/book'+i+'.jpg\')'
    books.appendChild(bookimg)
    let bookright=document.createElement('div')
    bookright.className='bookright'
    books.appendChild(bookright)
    let bookname=document.createElement('div')
    bookname.className='bookname'
    // bookname.textContent=bookList[i-1]
    bookname.textContent=data[i-1].bookName
    bookright.appendChild(bookname)
    let authorname=document.createElement('div')
    authorname.className='authorname'
    authorname.textContent=data[i-1].bookAuthor
    bookright.appendChild(authorname)
    let bookcontent=document.createElement('div')
    bookcontent.className='bookcontent'
    bookcontent.textContent=data[i-1].bookContent
    bookright.appendChild(bookcontent)
    let buyicon=document.createElement('div')
    buyicon.className='buyicon'
    bookright.appendChild(buyicon)
    let buy=document.createElement('a')
    buy.className='buy'
    buy.href='../page/pay.html'
    buyicon.appendChild(buy)
    let share=document.createElement('a')
    share.className='share'
    share.href='#'
    buyicon.appendChild(share)
}
}