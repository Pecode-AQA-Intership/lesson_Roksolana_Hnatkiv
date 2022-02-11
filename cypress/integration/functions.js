export let getInnerText = (cells) => cells.map((cell) => cell.innerText);
export let getNumbers = (numbers) => numbers.map((number) => parseFloat(number));

export let numberSortASC = (array) => array.sort((a, b) => a - b);
export let numberSortDESC = (array) => array.sort((a, b) => b - a);

export let stringSort = (array) => array.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})
