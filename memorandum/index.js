const content = document.querySelector('#content');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const list = document.querySelector('.displayContent')

let listContent = [];
let render = () => {
    let htmlStr = ''
    listContent.forEach(item => {
        htmlStr = htmlStr + `
        <div class="displayContent">
            <ul>
                <li>內容：${item.content}</li>
                <li>時間：${item.date} ${item.time}</li>
            </ul>
        </div>
        `     
    })
    list.innerHTML = htmlStr;
}

add.addEventListener('click', () => {
    if(content.value === '' || date.value === '' || time.value === '' ){
        alert('請填寫內容');
    }
    
    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })

    render();  
})

remove.addEventListener('click', () => {
    listContent.shift({
        content: content.value,
        date: date.value,
        time: time.value
    })
    render();
})
