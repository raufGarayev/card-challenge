const theForm = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const sixdigs = document.querySelector('.sixteen-digits')
const nameDate = document.querySelector('.card-front_name-date')
const cvv = document.querySelector('.cvv-text')

inputs.forEach(input => {
    input.addEventListener('input', fillCard)
});

function fillCard(e) {
    const inp = e.target

    switch (inp.id) {
        case 'digits' :
            if(inp.value.length < 5) {
                sixdigs.children[0].innerText = inp.value
            }
            else if(inp.value.length < 9) {
                sixdigs.children[1].innerText = e.target.value.slice(4, 8)
            }
            else if(inp.value.length < 13) {
                sixdigs.children[2].innerText = e.target.value.slice(8, 12)
            }
            else {
                sixdigs.children[3].innerText = e.target.value.slice(12, 16)
            }
            break
        case 'name' :
            nameDate.children[0].innerText = inp.value
            break
        case 'exp-date-m' :
            nameDate.children[1].children[0].innerText = inp.value
            break
        case 'exp-date-y' :
            nameDate.children[1].children[1].innerText = inp.value
            break
        case 'cvc':
            cvv.innerText = inp.value
            break

    }
}