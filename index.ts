const input = [6, 3, 2, 1, 4, 5];

function sort2(i: number[]) : number[] {
    const [a, b] = i;

    if (a > b) {
        return [b, a];
    } else {
        return [a, b];
    }
}


function merge(a: number[], b: number[]): number[] {
    function go(a: number[], b: number[], c: number[] = []): number[] {
        if(a.length || b.length) {
            const [ah, ...aRest] = a;
            const [bh, ...bRest] = b;

            if(!ah) {
                return go(a, bRest, [...c, bh]);
            } else if(!bh) {
                return go(aRest, b, [...c, ah]);
            }
            else if(ah < bh) {
                return go(aRest, b, [...c, ah]);
            } else {
                return go(a, bRest, [...c, bh]);
            }
        } else {
            return c;
        }
    }

    return go(a, b);
}

function sort(i: number[]): number[] {

    function go(j: number[]) {

        if(j.length > 2) {
             const a = go(j.slice(j.length/2));
             const b = go(j.slice(0, j.length/2));


             return merge(a, b);
        }
        else {
            if (j.length > 1) {
                return sort2(j);
            } else {
               return j;
            }
        }
    }

    return go(i);
}


const output = sort(input);

console.log(output);
