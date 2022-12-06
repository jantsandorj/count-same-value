// 1. Давхар давталт 1
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 1 
//  - 1 2 
//  - 1 2 3 
//  - 1 2 3 4 
//  - 1 2 3 4 5
// 2. Давхар давталт 2
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 5 4 3 2 1 
// - 5 4 3 2 
// - 5 4 3 
// - 5 4 
// - 5

// let n=parseInt(prompt('10 hurtelh too oruulna uu'))
// let p;
// let k= "  "
// for (i=0; i<=n-1; i++){
//     k+="\n"
//     for (j=0; j<=i; j++){
//         p=j+1
//         k=k+p+' '
//     }
// }
// console.log(k);

let n=parseInt(prompt('10 hurtelh too oruulna uu'))
let p;
let k= " "
for (i=0; i<=n-1; i++){
    k+="\n"
    for (j=n; j>=i+1; j--){
        p=j
        k=k+p+' '
    }
}
console.log(k);