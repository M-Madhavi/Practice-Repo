const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
console.log("buttons",buttons);

buttons.forEach((button) =>{
    button.addEventListener('click',(e) =>{
        // console.log("e",e.target,"target",e.target.id);
        // if(e.target.id === 'cream'){
        //     body.style.backgroundColor = "#FFFDD0";
        // }
        // if(e.target.id){
        //     body.style.backgroundColor = e.target.id
        // }

        switch (e.target.id) {
            case 'cream':
                body.style.backgroundColor = "#FFFDD0";
                break;
            default:
                body.style.backgroundColor =  e.target.id;
                break;
        }
        
    })
})
