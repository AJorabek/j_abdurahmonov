// let items=Array.from(document.querySelectorAll('li'))
// let itemslength=Array.from(document.querySelector("#itemslength"))
// console.log(items);
// items.forEach((item)=>{
//     item.addEventListener('dblclick',()=>{
//         item.remove()
//     });
//     item.addEventListener('click',()=>{
//         item.classList.toggle('text')
//     })
// })

// itemslength.textContent=`counter: ${itemslength.length}`;
// function addelement(){
//     const li = document.createElement("li");
//     li.textContent="item6";
//     li.classList.add('item6')
// }




const form = document.querySelector("form")
const ul = document.querySelector("ul")
const counetrEl=document.querySelector("#counter")
const esmallEl=document.querySelector('small')
let counter = 0;
const todos=JSON.parse(localStorage.getItem('todos')) || []

if(todos.length){
    counter+=todos.length;
    counetrEl.textContent=`Counter:${counter}`
    todos.forEach((todo)=>{
        const li=document.createElement("li")
        li.textContent=todo
        ul.appendChild(li)
    })
}
form.addEventListener('submit',(eventwork)=>{
    eventwork.preventDefault();
    if(form.text.value.trim()){
        const inputText= form.text.value;
     
        const li=document.createElement("li")
        li.textContent=inputText
        ul.appendChild(li)
        counter++
        counetrEl.textContent=`Counter${counter}`
        todos.push(inputText)

        localStorage.setItem('todos',JSON.stringify(todos))
   
        localStorage.reset()
    }
})