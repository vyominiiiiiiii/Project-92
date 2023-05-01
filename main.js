var x="";
var n=10;
var s=5;

for(var i=0;i<s;i++){

for(var z=0;z<n;z++){

x+="*";

}

x+="\n";

}


console.log(x);




var y="";
var k=10;

for(var i=0;i<n;i++){

    for(var a=0;a<k;a++){

        if(i===0 || i===n-1){

            y+="*";

}

        else{

            if(a===0 || a===k-1){
                    
                y+="*";

            }

            else{

            y+=" "

            }

        }

}

y+="\n";

}

console.log(y);





