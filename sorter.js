// 1.  arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
// 2. arraySorter гэдэг function - руу өгж явуулахад уг function нь array ийг багаас их рүү эрэмбэлээд буцаадаг.

let array1=[4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
let temp;
function arraySorter(a) {
    for (let i=0; i<a.length; i++){
        if (a[i] < a[i+1]){
            a=a
            }else if (a[i]>a[i+1]){
                temp=a[i]
                a[i]=a[i+1]
                a[i+1]=temp
            }
        for (let j=0; j<a.length; j++){
            if (a[j] < a[j+1]){
            a=a
            }else if (a[j]>a[j+1]){
                temp=a[j]
                a[j]=a[j+1]
                a[j+1]=temp
            }
        }
    }
}
arraySorter(array1);
console.log(array1);

