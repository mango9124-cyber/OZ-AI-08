function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (b===0){
        return "0으로 나눌 수 없습니다.";
    }
    return a/b;
}

const operations= {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
};

function calculate(firstNum, operator, secondNum){
    if (Number.isNaN(firstNum)|| Number.isNaN(secondNum)){
        return "숫자를 정확히 입력해주세요.";
    }
    const selectedOperation=operations[operator];
    
    if(!selectedOperation){
        return "지원하지 않는 연산자입니다.";
    }
        return selectedOperation(firstNum, secondNum);   
}

function showResultOnScreen(firstNum, operator, secondNum){

    // 계산 함수에 값을 넘겨 결과값 result 받아 온다.
    const result =calculate(firstNum, operator, secondNum);

    // HTML에서 결과가 표시될 공간을 찾는다.
    const displayElement = document.querySelector("#result");

    // 화면 요소가 존재할 때만 글씨 내용을 계산 결과로 교체한다.
    if (displayElement){
        displayElement.textContent = result;
    }
    return result;
}

function handleCalculateClick(){
    const num1Input = document.querySelector("#num1");
    const operatorInput = document.querySelector("#operator");
    const num2Input = document.querySelector("#num2");

    const rawNum1 = num1Input.value.trim();
    const rawNum2 = num2Input.value.trim();
    const operator = operatorInput.value.trim();

    if (rawNum1 ==="" || rawNum2 ===""){
        showResultOnScreen(operator, NaN, NaN);
        return;
    }

    const firstNum=Number(rawNum1);
    const secondNum=Number(rawNum2);

    showResultOnScreen(firstNum, operator, secondNum);
}

const calcBtn = document.querySelector("#calc-btn");
if (calcBtn){
    calcBtn.addEventListener("click", handleCalculateClick);
}