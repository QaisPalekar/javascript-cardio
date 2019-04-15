const getBottle = (number) => number == 1 ? 'bottle' : 'bottles' 
for(let i=99; i>0;i--) {
    console.log(`\n\n
    ${i} ${getBottle(i)} of beer on the wall
    ${i} ${getBottle(i)} of beer
    Take one down, pass it around
    ${i-1} ${getBottle(i-1)} of beer on the wall
    `)
}