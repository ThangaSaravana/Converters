function fdrate(){
    const months = Number(document.getElementById("input").value)
    // // here we want to check multiple conditions so we are going to use elseif ladder
    // < 3   months  - 5.8%
    // 3 - 6 months - 6.5%
    // 7 - 9 months - 7.8%
    // >= 10 months - 9.2%

    let rate = 0

    if (months<3){
        rate = 5.8
    }
    else if(months>=3 && months <=6){
        rate = 6.5
    }
    else if(months>=7 && months<=9){
        rate = 7.8
    }
    else{
        rate = 9.2
    }
// we can also get Element using query selector not only by getting elements using getelement method
    let result = document.querySelector('#result')
    result.innerHTML = "Your interest rate is "+ "  " + rate + "%"
}