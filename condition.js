const markInput = document.getElementById('mark-input');
const checkBtn = document.getElementById('check-btn')
const divResult = document.getElementById('div-res')

// checkBtn.style.backgroundColor = "red"
// checkBtn.style.cssText =
// `
// background-color: green;
// color:#fff;
// padding:0.5rem;
// outline:none;
// border:none;
// `
checkBtn.classList.add('valid')
checkBtn.onclick = function () {
    // alert(markInput.value)

    console.log('Before Check');
    let mark = parseInt(markInput.value);

    if (mark <= 100 && mark >= 0) {
      

            if (mark >= 85) {
                let message = "Excellent :) "
                divResult.innerHTML = message;
                divResult.classList.add('valid')
                divResult.classList.remove('invalid')
                console.log(message);
            } else if (mark >= 75) {
                let message = "Very Good :) "
                divResult.innerHTML = message;
                divResult.classList.add('valid')
                divResult.classList.remove('invalid')
                console.log(message);
            } else if (mark >= 65) {
                let message = "Good :) "
                divResult.innerHTML = message;
                divResult.classList.add('valid')
                divResult.classList.remove('invalid')
                console.log(message);

            } else if (mark >= 50) {
                let message = "Success :) "
                divResult.innerHTML = message;
                divResult.classList.add('valid')
                divResult.classList.remove('invalid')
                console.log(message);

            } else {
                divResult.innerHTML = "Fail !!";
                divResult.classList.remove('valid')
                divResult.classList.add('invalid')
                console.log('Fail !!');

            }

            console.log('Check Done');

            if (true){
                
            }else {

            }
        

    } else {

        let message = "Mark Must be less than or equal 100 and less greater than or equal Zero !!";
        divResult.innerHTML = message;
        divResult.classList.remove('valid')
        divResult.classList.add('invalid')
        console.log(message);
    }



    console.log('After Check');



}

// ternary if 

let test = 27;
test > 50 ?
    test > 75 ?
        console.log('4/4') :
        console.log('3/4')
    :
    test < 25 ?
        console.log('1/4') :
        console.log('2/4');

//  if (test > 50) {
//      console.log('Bigger') 
//  }else {
//      console.log('Smaller')
//  }


let res = test > 50 ? "Big" : "Samll";
if (test > 50) {
    res = "Big";
}
else {
    res = "Small";
}