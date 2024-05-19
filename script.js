document.addEventListener('DOMContentLoaded', function() {
    const f1 = document.getElementsByClassName('f1')[0];
    const f2 = document.getElementsByClassName('f2')[0];
    const f3 = document.getElementsByClassName('f3')[0];
    const f4 = document.getElementsByClassName('f4')[0];
    const f5 = document.getElementsByClassName('f5')[0];
    const f6 = document.getElementsByClassName('f6')[0];
    const f7 = document.getElementsByClassName('f7')[0];
    const f8 = document.getElementsByClassName('f8')[0];
    const f9 = document.getElementsByClassName('f9')[0];

    function swap(f6, f9) {
        // Swap background colors
        const f6Color = window.getComputedStyle(f6).backgroundColor;
        const f9Color = window.getComputedStyle(f9).backgroundColor;

        f9.style.backgroundColor = f6Color;
        f6.style.backgroundColor = f9Color;

        const f6text=f6.textContent
        const f9text=f9.textContent
        f6.textContent=f9text
        f9.textContent=f6text
    }
    
    if(f1){
        f1.addEventListener('click',function(){
        const color_val2=window.getComputedStyle(f2).backgroundColor;
        const color_val4=window.getComputedStyle(f4).backgroundColor;
        if(color_val2 == 'rgb(255, 255, 255)'){
            swap(f1,f2);
        }
        else if(color_val4 == 'rgb(255, 255, 255)'){
            swap(f1,f4);
        }
        else{
            alert('wrong input')
        }
        });
    }

    if(f2){
        f2.addEventListener('click',function(){
        const color_val1=window.getComputedStyle(f1).backgroundColor;
        const color_val3=window.getComputedStyle(f3).backgroundColor;
        const color_val5=window.getComputedStyle(f5).backgroundColor;
        if(color_val1 == 'rgb(255, 255, 255)'){
            swap(f2,f1);
        }
        else if(color_val3 == 'rgb(255, 255, 255)'){
            swap(f2,f3);
        }
        else if(color_val5 == 'rgb(255, 255, 255)'){
            swap(f2,f5);
        }
        else{
            alert('wrong input');
        }
        });
    }

    if(f3){
        f3.addEventListener('click',function(){
        const color_val2=window.getComputedStyle(f2).backgroundColor;
        const color_val6=window.getComputedStyle(f6).backgroundColor;
        if(color_val2 == 'rgb(255, 255, 255)'){
            swap(f3,f2);
        }
        else if(color_val6 == 'rgb(255, 255, 255)'){
            swap(f3,f6);
        }
        else{
            alert('wrong input')
        }
        });
    }

    if(f4){
        f4.addEventListener('click',function(){
        const color_val1=window.getComputedStyle(f1).backgroundColor;
        const color_val5=window.getComputedStyle(f5).backgroundColor;
        const color_val7=window.getComputedStyle(f7).backgroundColor;
        if(color_val1 == 'rgb(255, 255, 255)'){
            swap(f4,f1);
        }
        else if(color_val5 == 'rgb(255, 255, 255)'){
            swap(f4,f5);
        }
        else if(color_val7 == 'rgb(255, 255, 255)'){
            swap(f4,f7);
        }
        else{
            alert('')
        }
        });
    }


    if(f5){
        f5.addEventListener('click',function(){
            const color_val2=window.getComputedStyle(f2).backgroundColor;
            const color_val4=window.getComputedStyle(f4).backgroundColor;
            const color_val6=window.getComputedStyle(f6).backgroundColor;
            const color_val8=window.getComputedStyle(f8).backgroundColor;

            if(color_val2 == 'rgb(255, 255, 255)'){
                swap(f5,f2);
            }
            else if(color_val4 == 'rgb(255, 255, 255)'){
                swap(f5,f4);
            }
            else if(color_val6 == 'rgb(255, 255, 255)'){
                swap(f5,f6);
            }
            else if(color_val8 == 'rgb(255, 255, 255)'){
                swap(f5,f8);
            }
            else{
                alert('wronge move');
            }


        });
    }

    if (f6) {
        f6.addEventListener('click', function() {
            const color_val3 = window.getComputedStyle(f3).backgroundColor;
            const color_val5 = window.getComputedStyle(f5).backgroundColor;
            const color_val9 = window.getComputedStyle(f9).backgroundColor;

            if (color_val3 === 'rgb(255, 255, 255)') {
                swap(f6, f3);
                console.log(1);
            }
            else if (color_val5 === 'rgb(255, 255, 255)') {
                swap(f6, f5);
                console.log(2);
            }
            else if (color_val9 === 'rgb(255, 255, 255)') {
                swap(f6, f9);
                console.log(3);
            }
            else{
                alert('wrong move')
            }
        });
    }

    if(f7){
        f7.addEventListener('click',function(){
            const color_val4 = window.getComputedStyle(f4).backgroundColor;
            const color_val8 = window.getComputedStyle(f8).backgroundColor;
            if (color_val4 === 'rgb(255, 255, 255)') {
                swap(f7, f4);
                console.log(1);
            }
            else if (color_val8 === 'rgb(255, 255, 255)') {
                swap(f7, f8);
                console.log(1);
            }
            else{
                alert('wong input')
            }
        });
    }

    if(f8){
        f8.addEventListener('click',function(){
            const color_val5 = window.getComputedStyle(f5).backgroundColor;
            const color_val7 = window.getComputedStyle(f7).backgroundColor;
            const color_val9 = window.getComputedStyle(f9).backgroundColor;
            if (color_val5 === 'rgb(255, 255, 255)') {
                swap(f8, f5);
                console.log(1);
            }
            else if (color_val7 === 'rgb(255, 255, 255)') {
                swap(f8, f7);
                console.log(1);
            }
            else if (color_val9 === 'rgb(255, 255, 255)') {
                swap(f8, f9);
                console.log(1);
            }
            else{
                alert('wrong move')
            }
        });
    }
    if(f9){
        f9.addEventListener('click',function(){
            const color_val6 = window.getComputedStyle(f6).backgroundColor;
            const color_val8 = window.getComputedStyle(f8).backgroundColor;
            if (color_val6 === 'rgb(255, 255, 255)') {
                swap(f9, f6);
                console.log(1);
            }
            else if (color_val8 === 'rgb(255, 255, 255)') {
                swap(f9, f8);
                console.log(1);
            }
            else{
                alert('wrong input')
            }
        });
    }
});
