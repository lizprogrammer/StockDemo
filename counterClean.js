function zigzag(a) {

    if(a.length < 3)
        return 1;

    var counter = 1;
    var answers = [];
    var myAns = 1;
    var firstTime = true;

    var i = 1;

    for (i; i < (a.length - 1); i++)
    {


        if((a[i] > a[i-1] && a[i] > a[i + 1])
        ||  (a[i] < a[i-1] && a[i] < a[i + 1]))
        {
            if (firstTime == true)
            {
                counter += 3;
                firstTime = false;
            }
            else{
            counter++;

           }
           answers.push(counter);
        }
        else
        {

            counter = 0;
            firstTime = true;//reset counter
            //console.log(counter);
         }
    }

    for(num in answers)
    {
        if(answers[num] > myAns)
            myAns = answers[num];
    };

    return myAns;
};