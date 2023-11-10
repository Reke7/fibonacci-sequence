// Fibonnacci Sequence using Recursive method

function fibs(count, current = 0, next = 1, fibSeq = []){
    if (count === 0){
        return fibSeq;
    }
    else 
    {
        fibSeq.push(current);
        return fibs(count - 1, next, current + next, fibSeq);
    }
}

console.log(fibs(8))