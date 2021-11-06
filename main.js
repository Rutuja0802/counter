//buttons and counter text
const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

// initialise the count variable
let count = 0

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if(styles.contains('increase')) {
            count++
            
        } else if(styles.contains('decrease')) {
            count--
        } else {
            count=0
        }
        counter.textContent = count
    })
})