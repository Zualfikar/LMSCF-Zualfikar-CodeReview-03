function calcu() {
             
            var name1= document.getElementById('name1').value;
             var age =document.getElementById('age').value;
             var country =document.getElementById('country').value;
             var horse =document.getElementById('horse').value;
             var ins =1;
             console.log(name1);
             if ( name1 != ' ' && age!=' ' && horse!= ' '  && country == 'austria'){
                 ins= parseInt(horse)*100/parseInt(age)+50;
                 document.getElementById('trans7').innerHTML=  name1 + ", your insurance costs " +ins + "€" ;
             }
             else if (name1 != ' ' && age!=' ' && horse!= ' '  && country == 'hungary'){
                 ins=parseInt(horse)*120/parseInt(age)+100;
                 document.getElementById('trans7').innerHTML= name1 +", your insurance costs " +ins + "€" ;
             }
             else if (name1 != ' ' && age!=' ' && horse!= ' '  && country == 'greece') {
                 
                 ins=Math.round(parseInt(horse)*150/(parseInt(age)+3)+50);
                 document.getElementById('trans7').innerHTML= name1 +", your insurance costs " +ins + "€" ;
             }
             else {
                 document.getElementById('trans7').innerHTML= "please enter your Informations"
             }
             
         }
   
       
    