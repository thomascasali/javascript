      var ok = false;
      var c1 = false;
      var c2 = false;
      var c3 = false;
      var c4 = false;
      var c5 = false;
      var c6 = false;
      var c7 = false;
      var c8 = false;
      var c9 = false;
      
      var NumfirsOL = 0;
		  var NumsecOL = 0;
      var NumthirOL = 0;

      var NumfirsVL = 0;
      var NumsecVL = 0;
      var NumthirVL = 0;

      var NumfirsObL = 0;
      var NumsecObL = 0;
      
      var c1Tu = false;
      var c1AI = false;
      var c2Tu = false;
      var c2AI = false;
      var c3Tu = false;
      var c3AI = false;
      var c4Tu = false;
      var c4AI = false;
      var c5Tu = false;
      var c5AI = false;
      var c6Tu = false;
      var c6AI = false;
      var c7Tu = false;
      var c7AI = false;
      var c8Tu = false;
      var c8AI = false;
      var c9Tu = false;
      var c9AI = false;
      var cosa;
      var giocatorex = false;

      // variabili globali secondarie per il gioco

      var tema = 0;

      // funzioni //

      // funzioni secondarie per il gioco

      // funzione per cambiare il tema
      function coloriTemi(sfondi,testi){
        document.body.style.backgroundColor=sfondi;
        document.getElementById("temaB").style.backgroundColor=sfondi;
        document.getElementById("exit").style.backgroundColor=sfondi;
        document.getElementById("exit").style.color=testi;
        document.getElementById("Cvinto").style.color=testi;
        document.getElementById("StartB").style.color=testi;
        document.getElementById("StopB").style.color=testi;
        document.getElementById("StartB").style.backgroundColor=sfondi;
        document.getElementById("StopB").style.backgroundColor=sfondi;
      }

      function cambiaTemaInizio(sfondo,testo){
        document.body.style.backgroundColor=sfondo;
        document.getElementById("temaB").style.backgroundColor=sfondo;
        document.getElementById("StartB").style.color=testo;
        document.getElementById("pTitle").style.color=testo;
        document.getElementById("StopB").style.color=testo;
        document.getElementById("StartB").style.backgroundColor=sfondo;
        document.getElementById("StopB").style.backgroundColor=sfondo;
      }

      function cambiaTema(scena){
        if(tema==0){
          console.log("chiaro");
          if(scena=="inizio"){
            cambiaTemaInizio("white","black");
          }
          else{
            coloriTemi("white","black");
          }
          tema++;
          return;
        }
        if(tema==1){
          console.log("scuro");
          if(scena=="inizio"){
            cambiaTemaInizio("black","white");
          }
          else{
            coloriTemi("black","white");
          }
          tema++;
          return;
        }
        if(tema==2){
          console.log("verde");
          if(scena=="inizio"){
            cambiaTemaInizio("green","white");
          }
          else{
            coloriTemi("green","white");
          }
          tema++;
          return;
        }
        if(tema==3){
          console.log("arancione");
          if(scena=="inizio"){
            cambiaTemaInizio("orange","white");
          }
          else{
            coloriTemi("orange","white");
          }
          tema++;
          return;
        }
        if(tema==4){
          console.log("rosso");
          if(scena=="inizio"){
            cambiaTemaInizio("red","white");
          }
          else{
            coloriTemi("red","white");
          }
          tema=0;
          return;
        }
      }

      //funzioni primarie per il funzionamento del gioco
      // inizia il gioco

      function Start(){
        ok=true;
        Clean();
        document.getElementById("StartB").style.visibility = "hidden";
      }

      // termina il gioco

      function Stop(){
        ok = false;
        document.getElementById("StartB").style.visibility = "visible";
        Clean();
      }

      // pulisci le celle

      function Clean(){
        for(i=1;i<=9;i++){
          document.getElementById("c"+i).style.backgroundImage="url()";
        }
        c1 = false;
        c2 = false;
        c3 = false;
        c4 = false;
        c5 = false;
        c6 = false;
        c7 = false;
        c8 = false;
        c9 = false;
        c1Tu = false;
        c1AI = false;
        c2Tu = false;
        c2AI = false;
        c3Tu = false;
        c3AI = false;
        c4Tu = false;
        c4AI = false;
        c5Tu = false;
        c5AI = false;
        c6Tu = false;
        c6AI = false;
        c7Tu = false;
        c7AI = false;
        c8Tu = false;
        c8AI = false;
        c9Tu = false;
        c9AI = false;
        giocatorex = false;
      }

      // il computer sceglie le caselle

      function Computer(){
        console.log("colpito");
        
        var caso = Math.floor(Math.random()*4)+1;
        var choose = Math.floor(Math.random()*3)+1;
        var casuale = Math.floor(Math.random()*2)+1;
        console.log(caso);
        console.log(choose);
        if(caso==1||caso==2||caso==3){
          if((NumfirsOL!=0)&&(NumfirsOL<3)){
            console.log("ok");
            if(choose==1&&c1==false) document.getElementById("c1").style.backgroundImage="url(images/o"+casuale+".png)",c1=true,c1AI=true; 
            else if(choose==2&&c2==false) document.getElementById("c2").style.backgroundImage="url(images/o"+casuale+".png)",c2=true,c2AI=true; 
            else if(choose==3&&c3==false) document.getElementById("c3").style.backgroundImage="url(images/o"+casuale+".png)",c3=true,c3AI=true; 
            else caso=4;
          }
          else if((NumsecOL!=0)&&(NumsecOL<3)){
            console.log("ok");
            if(choose==1&&c4==false) document.getElementById("c4").style.backgroundImage="url(images/o"+casuale+".png)",c4=true,c4AI=true; 
            else if(choose==2&&c5==false) document.getElementById("c5").style.backgroundImage="url(images/o"+casuale+".png)",c5=true,c5AI=true; 
            else if(choose==3&&c6==false) document.getElementById("c6").style.backgroundImage="url(images/o"+casuale+".png)",c6=true,c6AI=true; 
            else caso=4;
          }
          else if((NumthirOL!=0)&&(NumthirOL<3)){
            console.log("ok");
            if(choose==1&&c7==false) document.getElementById("c7").style.backgroundImage="url(images/o"+casuale+".png)",c7=true,c7AI=true; 
            else if(choose==2&&c8==false) document.getElementById("c8").style.backgroundImage="url(images/o"+casuale+".png)",c8=true,c8AI=true; 
            else if(choose==3&&c9==false) document.getElementById("c9").style.backgroundImage="url(images/o"+casuale+".png)",c9=true,c9AI=true; 
            else caso=4;
          }
          else if((NumfirsVL!=0)&&(NumfirsVL<3)){
            console.log("ok");
            if(choose==1&&c1==false) document.getElementById("c1").style.backgroundImage="url(images/o"+casuale+".png)",c1=true,c1AI=true; 
            else if(choose==2&&c4==false) document.getElementById("c4").style.backgroundImage="url(images/o"+casuale+".png)",c4=true,c4AI=true; 
            else if(choose==3&&c7==false) document.getElementById("c7").style.backgroundImage="url(images/o"+casuale+".png)",c7=true,c7AI=true; 
            else caso=4;
          }
          else if((NumsecVL!=0)&&(NumsecVL<3)){
            console.log("ok");
            if(choose==1&&c2==false) document.getElementById("c2").style.backgroundImage="url(images/o"+casuale+".png)",c2=true,c2AI=true; 
            else if(choose==2&&c5==false) document.getElementById("c5").style.backgroundImage="url(images/o"+casuale+".png)",c5=true,c5AI=true; 
            else if(choose==3&&c8==false) document.getElementById("c8").style.backgroundImage="url(images/o"+casuale+".png)",c8=true,c8AI=true; 
            else caso=4;
          }
          else if((NumthirVL!=0)&&(NumthirVL<3)){
            console.log("ok");
            if(choose==1&&c3==false) document.getElementById("c3").style.backgroundImage="url(images/o"+casuale+".png)",c3=true,c3AI=true; 
            else if(choose==2&&c6==false) document.getElementById("c6").style.backgroundImage="url(images/o"+casuale+".png)",c6=true,c6AI=true; 
            else if(choose==3&&c9==false) document.getElementById("c9").style.backgroundImage="url(images/o"+casuale+".png)",c9=true,c9AI=true; 
            else caso=4;
          }
          else if((NumfirsObL!=0)&&(NumfirsObL<3)){
            console.log("ok");
            if(choose==1&&c1==false) document.getElementById("c1").style.backgroundImage="url(images/o"+casuale+".png)",c1=true,c1AI=true; 
            else if(choose==2&&c5==false) document.getElementById("c5").style.backgroundImage="url(images/o"+casuale+".png)",c5=true,c5AI=true; 
            else if(choose==3&&c9==false) document.getElementById("c9").style.backgroundImage="url(images/o"+casuale+".png)",c9=true,c9AI=true; 
            else caso=4;
          }
          else if((NumsecObL!=0)&&(NumsecObL<3)){
            console.log("ok");
            if(choose==1&&c3==false) document.getElementById("c3").style.backgroundImage="url(images/o"+casuale+".png)",c3=true,c3AI=true; 
            else if(choose==2&&c5==false) document.getElementById("c5").style.backgroundImage="url(images/o"+casuale+".png)",c5=true,c5AI=true; 
            else if(choose==3&&c7==false) document.getElementById("c7").style.backgroundImage="url(images/o"+casuale+".png)",c7=true,c7AI=true; 
            else caso=4;
          }
          else caso=4;
        }
        if(caso==4){
          var prova = Math.floor(Math.random()*9)+1;
          if(prova==1&&c1==false) document.getElementById("c1").style.backgroundImage="url(images/o"+casuale+".png)",c1=true,c1AI=true;
          else if(prova==2&&c2==false) document.getElementById("c2").style.backgroundImage="url(images/o"+casuale+".png)",c2=true,c2AI=true;
          else if(prova==3&&c3==false) document.getElementById("c3").style.backgroundImage="url(images/o"+casuale+".png)",c3=true,c3AI=true;
          else if(prova==4&&c4==false) document.getElementById("c4").style.backgroundImage="url(images/o"+casuale+".png)",c4=true,c4AI=true;
          else if(prova==5&&c5==false) document.getElementById("c5").style.backgroundImage="url(images/o"+casuale+".png)",c5=true,c5AI=true;
          else if(prova==6&&c6==false) document.getElementById("c6").style.backgroundImage="url(images/o"+casuale+".png)",c6=true,c6AI=true;
          else if(prova==7&&c7==false) document.getElementById("c7").style.backgroundImage="url(images/o"+casuale+".png)",c7=true,c7AI=true;
          else if(prova==8&&c8==false) document.getElementById("c8").style.backgroundImage="url(images/o"+casuale+".png)",c8=true,c8AI=true;
          else if(prova==9&&c9==false) document.getElementById("c9").style.backgroundImage="url(images/o"+casuale+".png)",c9=true,c9AI=true;
          else{
            if(c1==false) document.getElementById("c1").style.backgroundImage="url(images/o"+casuale+".png)",c1=true,c1AI=true;
            else if(c2==false) document.getElementById("c2").style.backgroundImage="url(images/o"+casuale+".png)",c2=true,c2AI=true;
            else if(c3==false) document.getElementById("c3").style.backgroundImage="url(images/o"+casuale+".png)",c3=true,c3AI=true;
            else if(c4==false) document.getElementById("c4").style.backgroundImage="url(images/o"+casuale+".png)",c4=true,c4AI=true;
            else if(c5==false) document.getElementById("c5").style.backgroundImage="url(images/o"+casuale+".png)",c5=true,c5AI=true;
            else if(c6==false) document.getElementById("c6").style.backgroundImage="url(images/o"+casuale+".png)",c6=true,c6AI=true;
            else if(c7==false) document.getElementById("c7").style.backgroundImage="url(images/o"+casuale+".png)",c7=true,c7AI=true;
            else if(c8==false) document.getElementById("c8").style.backgroundImage="url(images/o"+casuale+".png)",c8=true,c8AI=true;
            else if(c9==false) document.getElementById("c9").style.backgroundImage="url(images/o"+casuale+".png)",c9=true,c9AI=true;
          }
        }
      }

      function controlla(caso,cosa){
          if(giocatorex==false){
            console.log("giocatore x");
            document.getElementById(cosa).style.backgroundImage="url(images/x"+caso+".png)";
            giocatorex=true;
            return;
          }
          else if(giocatorex==true){
            console.log("giocatore o");
            document.getElementById(cosa).style.backgroundImage="url(images/o"+caso+".png)";
            giocatorex=false;
            return;
          }
      }

      function controllaVincitore(testoX,testoO){
        if((c1Tu==true&&c2Tu==true&&c3Tu==true)||(c4Tu==true&&c5Tu==true&&c6Tu==true)||(c7Tu==true&&c8Tu==true&&c9Tu==true)||(c1Tu==true&&c4Tu==true&&c7Tu==true)||(c2Tu==true&&c5Tu==true&&c8Tu==true)||(c3Tu==true&&c6Tu==true&&c9Tu==true)||(c1Tu==true&&c5Tu==true&&c9Tu==true)||(c3Tu==true&&c5Tu==true&&c7Tu==true)) console.log(testoX),document.getElementById("Cvinto").innerHTML=testoX,Stop();
        else if((c1AI==true&&c2AI==true&&c3AI==true)||(c4AI==true&&c5AI==true&&c6AI==true)||(c7AI==true&&c8AI==true&&c9AI==true)||(c1AI==true&&c4AI==true&&c7AI==true)||(c2AI==true&&c5AI==true&&c8AI==true)||(c3AI==true&&c6AI==true&&c9AI==true)||(c1AI==true&&c5AI==true&&c9AI==true)||(c3AI==true&&c5AI==true&&c7AI==true)) console.log(testoO),document.getElementById("Cvinto").innerHTML=testoO,Stop();
        else if(c1==true&&c2==true&&c3==true&&c4==true&&c5==true&&c6==true&&c7==true&&c8==true&&c9==true) console.log("pareggio!"),document.getElementById("Cvinto").innerHTML="Draw! -.-",Stop();
      }
      
      // questa funzione viene richiamata ogni volta che il giocatore colpisce una casella, essa richiama inoltre la funzione Computer() che serve a scegliere al computer la mossa, inoltre nella funzione colpito viene scelto anche il vincitore


      function Colpito(cosa,single){
        if(ok==false) return;
        if(cosa=="c1"&&c1==true) return;
        if(cosa=="c2"&&c2==true) return;
        if(cosa=="c3"&&c3==true) return;
        if(cosa=="c4"&&c4==true) return;
        if(cosa=="c5"&&c5==true) return;
        if(cosa=="c6"&&c6==true) return;
        if(cosa=="c7"&&c7==true) return;
        if(cosa=="c8"&&c8==true) return;
        if(cosa=="c9"&&c9==true) return;

        var caso = Math.floor(Math.random()*2)+1;
        if(single==false) controlla(caso,cosa);
        else document.getElementById(cosa).style.backgroundImage="url(images/x"+caso+".png)";
        
        if(single==false){
            if(giocatorex==false) document.getElementById("Cvinto").innerHTML="X, choose a cell!";
            else document.getElementById("Cvinto").innerHTML="O, choose a cell!";
        }
        
        if(single==false){
            if(cosa=="c1"&&(giocatorex==true)) c1=true,c1Tu=true,NumfirsOL++,NumfirsVL++,NumfirsObL++;
            if(cosa=="c2"&&(giocatorex==true)) c2=true,c2Tu=true,NumfirsOL++,NumsecVL++;
            if(cosa=="c3"&&(giocatorex==true)) c3=true,c3Tu=true,NumfirsOL++,NumthirVL++,NumsecObL++;
            if(cosa=="c4"&&(giocatorex==true)) c4=true,c4Tu=true,NumsecOL++,NumfirsVL++;
            if(cosa=="c5"&&(giocatorex==true)) c5=true,c5Tu=true,NumsecOL++,NumsecVL++,NumfirsObL++,NumsecObL++;
            if(cosa=="c6"&&(giocatorex==true)) c6=true,c6Tu=true,NumsecOL++,NumthirVL++;
            if(cosa=="c7"&&(giocatorex==true)) c7=true,c7Tu=true,NumthirOL++,NumfirsVL++,NumsecObL++;
            if(cosa=="c8"&&(giocatorex==true)) c8=true,c8Tu=true,NumthirOL++,NumsecVL++;
            if(cosa=="c9"&&(giocatorex==true)) c9=true,c9Tu=true,NumthirOL++,NumthirVL++,NumfirsObL++;

            if(cosa=="c1"&&(giocatorex==false)) c1=true,c1AI=true;
            if(cosa=="c2"&&(giocatorex==false)) c2=true,c2AI=true;
            if(cosa=="c3"&&(giocatorex==false)) c3=true,c3AI=true;
            if(cosa=="c4"&&(giocatorex==false)) c4=true,c4AI=true;
            if(cosa=="c5"&&(giocatorex==false)) c5=true,c5AI=true;
            if(cosa=="c6"&&(giocatorex==false)) c6=true,c6AI=true;
            if(cosa=="c7"&&(giocatorex==false)) c7=true,c7AI=true;
            if(cosa=="c8"&&(giocatorex==false)) c8=true,c8AI=true;
            if(cosa=="c9"&&(giocatorex==false)) c9=true,c9AI=true;
        }
        else{
            if(cosa=="c1") c1=true,c1Tu=true,NumfirsOL++,NumfirsVL++,NumfirsObL++;
            if(cosa=="c2") c2=true,c2Tu=true,NumfirsOL++,NumsecVL++;
            if(cosa=="c3") c3=true,c3Tu=true,NumfirsOL++,NumthirVL++,NumsecObL++;
            if(cosa=="c4") c4=true,c4Tu=true,NumsecOL++,NumfirsVL++;
            if(cosa=="c5") c5=true,c5Tu=true,NumsecOL++,NumsecVL++,NumfirsObL++,NumsecObL++;
            if(cosa=="c6") c6=true,c6Tu=true,NumsecOL++,NumthirVL++;
            if(cosa=="c7") c7=true,c7Tu=true,NumthirOL++,NumfirsVL++,NumsecObL++;
            if(cosa=="c8") c8=true,c8Tu=true,NumthirOL++,NumsecVL++;
            if(cosa=="c9") c9=true,c9Tu=true,NumthirOL++,NumthirVL++,NumfirsObL++;    
        }

        if(single==true) Computer();

        if(single==true){
            controllaVincitore("You win!","You loose :(");
        }
        else{
            controllaVincitore("X win!","O win!")
        }
        
    }