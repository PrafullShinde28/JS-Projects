const clock = document.getElementById('clock')
// document.querySelector('#clock')

// console.log(date.toLocaleDateString())
setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleDateString();
}, 1000);