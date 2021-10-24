
var password = [];
var broken = false;

Main();

function Main(){
    Create(1,4,5,2);
    Break();
}

function Create(p1,p2,p3,p4){
    password[0] = p1;
    password[1] = p2;
    password[2] = p3;
    password[3] = p4;
}
function Break(){
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                for (let l = 0; l < 10; l++) {
                    if(i === password[0] && j === password[1] && k === password[2] && l === password[3]) {
                        console.log("Broken ----- PIN is " + i,j,k,l);
                        broken = true;
                    }
                    else if (!broken) {
                        console.log("Tried **** " + i,j,k,l);
                    }
                    
                }
                
            }
            
        }
        
    }
}