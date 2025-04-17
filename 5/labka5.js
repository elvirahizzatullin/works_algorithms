//Є двовимірний масив розмірністю NxN, де N = 10. Відсортувати всі
//рядки методом вибору так, щоб елементи в них розташовувалися за спаданням.

class someClass {
sort(){
    let arr = [[7,39,5,22,9,15,41,6,8,10]
    ,[5,49,12,10,8,33,7,6,21,4]
    ,[17,3,15,2,39,1,43,16,28,10]
    ,[47,23,5,32,9,19,4,26,28,19]
    ,[7,36,5,22,9,1,34,16,38,10]
    ,[47,3,45,32,9,1,34,6,18,17]
    ,[7,23,5,22,9,11,4,6,38,10]
    ,[27,36,37,26,9,19,44,6,8,10]
    ,[17,32,38,21,39,1,14,16,8,10]
    ,[7,31,25,2,9,11,41,16,8,10]];
    let indexMaxValue = 9;
    let maxValue = arr[0][9];
    let lastIndex = 0;
    let x = 0;
    for(let i = 0; i < 10; i++)
    {
        while(x < 10)
        {
            for(let j = 9; j >= lastIndex; j--)
            {
                if(arr[i][j] >= maxValue)
                {
                    maxValue = arr[i][j];
                    indexMaxValue = j;
                    if(j == lastIndex) 
                        {
                            maxValue = arr[i][9];
                            lastIndex++;
                            x++;
                        }  
                }
                else if(j == lastIndex && arr[i][j] < maxValue)
                {
                    arr[i][indexMaxValue] = arr[i][j];
                    arr[i][j] = maxValue;
                    maxValue = arr[i][9];
                    lastIndex++;
                    x++;
                }
            }
        }
        indexMaxValue = 9;
        maxValue = arr[i][9];
        lastIndex = 0;
        x = 0;
    }
    for(let i = 0; i < 10; i++)
        {
            let str = "";
            for(let j = 0; j < 10; j++)
            {
                str += arr[i][j] + " ";
            }
            console.log(str)
        }
}
}

function main() {
    let ourClass = new someClass();
    ourClass.sort();
}
main(); 