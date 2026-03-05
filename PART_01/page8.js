 i=1
//  while(i<=5){
//     console.log(i)
//     i++
//  }

//break --terminates loop

while(i<=5){
    console.log(i)
    if(i==3){
        break;
    }
    i++
}

//continue --terminates iteration

j=1
while(j<=5){
    j++
    if(j==3){
        continue;
    }
    console.log(j)
}