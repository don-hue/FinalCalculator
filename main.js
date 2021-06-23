function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (b!=0) {
    return a/b
    }
    else {
        return "Error"
    }
    
}

function operate(a,b,c){
    switch(a){
    case "+":
        sum=add(b,c);
        return sum
    case "-":
        result=substract(b,c);
        return result;
    case "*":
        result=multiply(b,c);
        return result;
    case "/":
        result=divide(b,c);
        return result;
    }
}


//----------Varibales and Const----------------------
const output=document.querySelector('.Output');
const one=document.querySelector('.one');
const two=document.querySelector('.two');
const three=document.querySelector('.three');
const four=document.querySelector('.four');
const five=document.querySelector('.five');
const six=document.querySelector('.six');
const seven=document.querySelector('.seven');
const eight=document.querySelector('.eight');
const nine=document.querySelector('.nine');
const zero=document.querySelector('.zero');
const minus=document.querySelector('.minus');
const plus=document.querySelector('.plus');
const divide2=document.querySelector('.divide');
const multiply2=document.querySelector('.multiply');
const clear=document.querySelector('.Clear');
const delete2=document.querySelector('.Delete');
const design=document.querySelectorAll('.design');
const equal=document.querySelector('.equal');
const dot=document.querySelector('.dot');


let input=[]
let equation=["+"]
let tempNumb=0
let tempOp=0
//-------------------------------------------------

//---------------DOM manipulation------------------



//--------------keybord support--------------------
document.addEventListener('keydown', function(e) {
    
    if (/\d/.test(e.key)){
        let internalVariable = 0;
        let key=document.querySelector(`button[name="${e.key}"]`);

        key.classList.add("keyPress");
        design.forEach(design => design.addEventListener('transitionend', function(e) {
            this.classList.remove('keyPress');
        }))

        input.push(parseInt(e.key));
        internalVariable=input.join('');
        output.innerHTML=internalVariable;
    }
    
    if ('.'.includes(e.key)){
        let internalVariable = 0;
        let key=document.querySelector(`button[name="${e.key}"]`);

        key.classList.add("keyPress");
        design.forEach(design => design.addEventListener('transitionend', function(e) {
            this.classList.remove('keyPress');
        }))

        input.push(e.key);
        internalVariable=input.join('');
        output.innerHTML=internalVariable;


    }

    
    else if ('Enter'.includes(e.key)){
        let a=tempNumb;
        let b=parseFloat(input.join(''));
        equation.push(b);


        let result=operate(tempOp,a,b);
        let key=document.querySelector(`button[name="${e.key}"]`);
        
        key.classList.add("keyPress");
        design.forEach(design => design.addEventListener('transitionend', function(e) {
            this.classList.remove('keyPress');
        }))

        input=[];
        input.push(result);

        output.textContent=result;
        tempOp=0;

 
    }

    else if('c'.includes(e.key)){
        let key=document.querySelector(`button[name="${e.key}"]`);
        
        key.classList.add("keyPress");
        design.forEach(design => design.addEventListener('transitionend', function(e) {
            this.classList.remove('keyPress');
        }))

        output.textContent=0;
        input=[];
        tempNumb=0;
        tempOp=0;
        equation=[]
    }

    else if(e.keyCode==08){
        let key=document.querySelector(`button[name="08"]`);
        
        key.classList.add("keyPress");
        design.forEach(design => design.addEventListener('transitionend', function(e) {
          this.classList.remove('keyPress');
        }))

        let internalVariable=0;
        input.pop();
        internalVariable=input.join('');
        output.innerHTML=internalVariable;

    }
    // ----User presses "Enter" after each operation e.g: 10+10 "Enter"-----
    if(tempOp==0) {
        if ('+'.includes(e.key)) {
            let key=document.querySelector(`button[name="${e.key}"]`);
        
            key.classList.add("keyPress");
            design.forEach(design => design.addEventListener('transitionend', function(e) {
                this.classList.remove('keyPress');
            }))

            tempOp=e.key
            tempNumb=parseFloat(input.join(''));
            equation.push(tempNumb);
            equation.push(tempOp);
            input=[];
        }

        else if ('-'.includes(e.key)) {
            let key=document.querySelector(`button[name="${e.key}"]`);
        
            key.classList.add("keyPress");
            design.forEach(design => design.addEventListener('transitionend', function(e) {
                this.classList.remove('keyPress');
            }))

            tempOp=e.key
            tempNumb=parseFloat(input.join(''));
            equation.push(tempNumb);
            equation.push(tempOp);
            input=[];
        }

        else if ('*'.includes(e.key)) {
            let key=document.querySelector(`button[name="${e.key}"]`);
        
            key.classList.add("keyPress");
            design.forEach(design => design.addEventListener('transitionend', function(e) {
                this.classList.remove('keyPress');
            }))

            tempOp=e.key
            tempNumb=parseFloat(input.join(''));
            equation.push(tempNumb);
            equation.push(tempOp);
            input=[];
    }

        else if ('/'.includes(e.key)) {
            let key=document.querySelector(`button[name="${e.key}"]`);
        
            key.classList.add("keyPress");
            design.forEach(design => design.addEventListener('transitionend', function(e) {
                this.classList.remove('keyPress');
            }))

            tempOp=e.key
            tempNumb=parseFloat(input.join(''));
            equation.push(tempNumb);
            equation.push(tempOp);
            input=[];
        }
    }
    //----User makes a chain calculation e.g 10+10-5+10 etc. 
    else if(tempOp!=0) {
        if ('+'.includes(e.key)) {
            let key=document.querySelector(`button[name="${e.key}"]`);
            let a=tempNumb;
            let b=parseFloat(input.join(''));
            let result=operate(tempOp,a,b);

            input=[];
            input.push(result);

            output.textContent=result;
            
        
            key.classList.add("keyPress");
            design.forEach(design => design.addEventListener('transitionend', function(e) {
                this.classList.remove('keyPress');
            }))

            tempOp=e.key
            tempNumb=parseFloat(input.join(''));
            equation.push(tempNumb);
            equation.push(tempOp);
            input=[];
        }

        else if ('-'.includes(e.key)) {
            let key=document.querySelector(`button[name="${e.key}"]`);
            let a=tempNumb;
            let b=parseFloat(input.join(''));
            let result=operate(tempOp,a,b);

            input=[];
            input.push(result);

            output.textContent=result;
        
            key.classList.add("keyPress");
            design.forEach(design => design.addEventListener('transitionend', function(e) {
                this.classList.remove('keyPress');
            }))

            tempOp=e.key
            tempNumb=parseFloat(input.join(''));
            equation.push(tempNumb);
            equation.push(tempOp);
            input=[];
        }

        else if ('*'.includes(e.key)) {
            let key=document.querySelector(`button[name="${e.key}"]`);

            let a=tempNumb;
            let b=parseFloat(input.join(''));
            let result=operate(tempOp,a,b);

            input=[];
            input.push(result);

            output.textContent=result;
        
            key.classList.add("keyPress");
            design.forEach(design => design.addEventListener('transitionend', function(e) {
                this.classList.remove('keyPress');
            }))

            tempOp=e.key
            tempNumb=parseFloat(input.join(''));
            equation.push(tempNumb);
            equation.push(tempOp);
            input=[];
    }

        else if ('/'.includes(e.key)) {
            let key=document.querySelector(`button[name="${e.key}"]`);

            let a=tempNumb;
            let b=parseFloat(input.join(''));
            let result=operate(tempOp,a,b);

            input=[];
            input.push(result);

            output.textContent=result;
        
            key.classList.add("keyPress");
            design.forEach(design => design.addEventListener('transitionend', function(e) {
                this.classList.remove('keyPress');
            }))

            tempOp=e.key
            tempNumb=parseFloat(input.join(''));
            equation.push(tempNumb);
            equation.push(tempOp);
            input=[];
        }
    }

})


//--------------Button support--------------------
one.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(1));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

two.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(2));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

three.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(3));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

four.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(4));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

five.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(5));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

six.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(6));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

seven.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(7));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

eight.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(8));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

nine.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(9));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})
zero.addEventListener('click',function(e){
    let internalVariable = 0;
    input.push(parseInt(0));
    internalVariable=input.join('');
    output.innerHTML=internalVariable
})

minus.addEventListener('click',function(e){
    if (tempOp==0) {
        tempOp="-";
        tempNumb=parseFloat(input.join(''));
        equation.push(tempNumb);
        equation.push(tempOp);
        input=[];
    }

    else if (tempOp!=0) {
        let a=tempNumb;
        let b=parseFloat(input.join(''));
        let result=operate(tempOp,a,b);

        input=[];
        input.push(result);

        output.textContent=result;

        tempOp="-"
        tempNumb=parseFloat(input.join(''));
        equation.push(tempNumb);
        equation.push(tempOp);
        input=[];
    }
    
})

plus.addEventListener('click',function(e){
    if (tempOp==0){
        tempOp="+"
        tempNumb=parseFloat(input.join(''));
        equation.push(tempNumb);
        equation.push(tempOp);
        input=[];
    }

    else if (tempOp!=0) {
        let a=tempNumb;
        let b=parseFloat(input.join(''));
        let result=operate(tempOp,a,b);

        input=[];
        input.push(result);

        output.textContent=result;

        tempOp="+"
        tempNumb=parseFloat(input.join(''));
        equation.push(tempNumb);
        equation.push(tempOp);
        input=[];
    }
})

divide2.addEventListener('click',function(e){
    if (tempOp==0){
        tempOp="/"
        tempNumb=parseFloat(input.join(''));
        equation.push(tempNumb);
        equation.push(tempOp);
        input=[];
    }

    else if (tempOp!=0) {
        let a=tempNumb;
        let b=parseFloat(input.join(''));
        let result=operate(tempOp,a,b);

        input=[];
        input.push(result);

        output.textContent=result;

        tempOp="/"
        tempNumb=parseFloat(input.join(''));
        equation.push(tempNumb);
        equation.push(tempOp);
        input=[];
    }
})

multiply2.addEventListener('click',function(e){
    if (tempOp==0){
        tempOp="*"
        tempNumb=parseFloat(input.join(''));
        equation.push(tempNumb);
        equation.push(tempOp);
        input=[];
    }

    else if (tempOp!=0) {
        let a=tempNumb;
        let b=parseFloat(input.join(''));
        let result=operate(tempOp,a,b);

        input=[];
        input.push(result);

        output.textContent=result;

        tempOp="*"
        tempNumb=parseFloat(input.join(''));
        equation.push(tempNumb);
        equation.push(tempOp);
        input=[];
    }
})

clear.addEventListener('click',function(e){
    output.textContent=0;
    input=[];
    tempNumb=0;
    tempOp=0;
    equation=[]
})

delete2.addEventListener('click',function(e){
    let internalVariable=0;
    input.pop();
    internalVariable=input.join('');
    output.innerHTML=internalVariable;
})

equal.addEventListener('click',function(e){
    let a=tempNumb;
    let b=parseFloat(input.join(''));

    equation.push(b);

    let result=operate(tempOp,a,b);
    input=[];
    input.push(result);

    output.textContent=result;
    tempOp=0;
})
dot.addEventListener('click',function(e){
    let internalVariable=0
    input.push(".");
    internalVariable=input.join('');
    output.innerHTML=internalVariable;
})

