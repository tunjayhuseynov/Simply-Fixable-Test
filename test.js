/* 
Aşağıda kodda faktorial funksiyasını görürsünüz. Əgər siz 

factorial(5)
factorial(5)
factorial(4)
factorial(6)

kimi funksiyaları execute etsəniz həmin funksiyalar 20 dəfə yenidən işə düşəcək.

Burada memoization edilərək argumentləri eyni olan funksiyaların təkrar təkrar execution olunmasının qarşısını almaq mümkündü

Memo funksiyasını tamamlayın

*/

const memo = (fn) => {
    return function (...args) {

    }
}

const memoFactorial = memo(factorial)

function factorial(n) {
    if (n <= 1) return 1;

    return memoFactorial(n - 1) * n
}

memoFactorial(5)
memoFactorial(5)
memoFactorial(4)
memoFactorial(6)

// Factorial funskiyası yalnızca 6 dəfə işə düşməlidir