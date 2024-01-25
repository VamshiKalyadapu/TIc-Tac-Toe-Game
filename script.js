let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let hide = document.querySelector(".hide");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");

let turn = true;  //Player1, Player2
let winningchances = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach(box => {
    box.addEventListener("click", () =>{
        if(turn){
            box.innerHTML = "O";
            turn = false;
        }
        else{
            box.innerHTML = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const checkWinner = () => {
    for(let pattern of winningchances)
    {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText; 
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                showWinner(val1);
            }
        }
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);