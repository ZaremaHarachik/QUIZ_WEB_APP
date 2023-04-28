    const skip = document.getElementById("skip");
    const score = document.getElementById("score");
    const totalScore = document.getElementById("totalScore");
    const countdown = document.getElementById("countdown");
    let count = 0;
    let scoreCount = 0;
    let duration =  0;
    const qaSet = document.querySelectorAll(".qa_set");
    const qaAnsRow = document.querySelectorAll(".qa_set .qa_ans_row input");  
    

    skip.addEventListener("click",function(){
        step();
        // add duration (10 to 0)
        duration = 0;
    })
        // skip questions
    function step(){
        count +=  1;
        for(let i=0; i < qaSet.length; i++){
            qaSet[i].className = "qa_set";
       }
       qaSet[count].className = "qa_set active";
       if(count == 5){
           skip.style.display = "none";
        //    add duration (10 to 0)
           clearInterval(durationtime);   
       countdown.innerHTML = 0;

       }
   }

        //   counter (add or subtract 20 points) 

    qaAnsRow.forEach(function(qaAnsRowSingle) {
        qaAnsRowSingle.addEventListener("click",function(){
            setTimeout(function(){
                step();
                // add duration (1 line (10 to 0))
             duration = 0;
            },500)
            
            let valid = this.getAttribute("valid");
            if(valid == "valid"){
                scoreCount +=20;
                score.innerHTML = scoreCount;
                totalScore.innerHTML = scoreCount;
            }else{
                scoreCount -=20;
                if (scoreCount < 0) {
                 scoreCount = 0;
                }else{
                  
                }
                score.innerHTML = scoreCount;
                totalScore.innerHTML = scoreCount;
            }
        })
    });
        //    add duration (0 to 10)
    // let durationtime = setInterval(function(){
    //     if(duration == 10){
    //         duration = 0;
    //     }
    //     duration +=1;
    //     countdown.innerHTML = duration;
    //     if(countdown.innerHTML == "10"){
    //         step()
    //     }

    // },1000);

    //    add duration (10 to 1)
    let durationtime = setInterval(function(){
        if(duration == 0){
            duration = 10;
        }
        duration -=1;
        countdown.innerHTML = duration;
        if(countdown.innerHTML == "0"){
            step()
        }

    },1000);


   