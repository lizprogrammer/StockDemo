function zigzag(a) {

    if(a.length < 3)
        return 1;

    var counter = 1;
    var answers = [];
    var myAns = 1;
    var firstTime = true;

    var i = 1;

    //console.log(a[1]);
    for (i; i < (a.length - 1); i++)
    {


        if((a[i] > a[i-1] && a[i] > a[i + 1])
        ||  (a[i] < a[i-1] && a[i] < a[i + 1]))
        {
            if (firstTime == true)
            {
                console.log(a[i-1], a[i], a[i+1], 'pass', firstTime, counter);
                counter += 3;
                firstTime = false;
            }
            else{
            counter++;
            console.log(a[i-1], a[i], a[i+1], 'pass', firstTime, counter);

            //console.log(counter);
           }
           answers.push(counter);
        }
        else
        {

            counter = 0;
            firstTime = true;//reset counter
            console.log(a[i-1], a[i], a[i+1], 'fail', firstTime, counter);
            //console.log(counter);
         }


    }

    if(a[i] > a[i-1]
        ||  a[i] < a[i-1] )
        answers.push(counter++);


    for(num in answers)
    {
        console.log(num);
        if(answers[num] > myAns)
            myAns = answers[num];
    };

    return myAns;
};


theFinalAns = zigzag([3, 4, 5]);
console.log(theFinalAns);




