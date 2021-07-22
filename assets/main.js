
// Nhị phân sang thập phân
var inputValue210;
var inputElement210 = document.querySelector('.input-value__210');
var resultFrom210 = document.querySelector('.result-from__210');
var resultTo210 = document.querySelector('.result-to__210');
inputElement210.onkeydown = function(e) {
    // lấy giá trị input
    if( e.which == 13 ) {
        inputValue210 = e.target.value;
        function nhiPhanSangThapPhan(number) {
            var a=number, b=[], p = 0, decNumber = 0;
            for (; a >= 1 ;) {
                b.push(a%10)
                // Math.floor() lấy phần nguyên của số dư
                a = Math.floor(a/10);
            }
            if (b.length == '0') return "Not binary ^^!"
            for( var i = 0; i < b.length; i++) {
                if( b[i] < 0 || b[i] > 1 ) return "Not binary ^^!"
            } 
            while (number > 0) {
                // trunc => lấy phần nguyên 
                decNumber += Math.trunc(number % 10) * Math.pow(2,p)
                ++p;
                number /= 10;
            }
            return decNumber;
        }
        var result = nhiPhanSangThapPhan(inputValue210);
        resultFrom210.innerText = inputValue210;
        resultTo210.innerText = result;
        console.log('Nhị phân sang thập phân: ' + result)
    }
}
// Nhị phân sang thập lục phân
var inputValue216;
var inputElement216 = document.querySelector('.input-value__216');
var resultFrom216 = document.querySelector('.result-from__216');
var resultTo216 = document.querySelector('.result-to__216');
inputElement216.onkeydown = function(e){
    //lấy giá trị input
    if( e.which == 13 ) {
        inputValue216 = e.target.value
        function nhiPhanSangThapLucPhan(number) {
            var a=number, b=[], p = 0, decNumber = 0;
            for (; a >= 1 ;) {
                b.push(a%10)
                // Math.floor() lấy phần nguyên của số dư
                a = Math.floor(a/10);
            }
            if (b.length == '0') return "Not binary ^^!"
            for( var i = 0; i < b.length; i++) {
                if( b[i] < 0 || b[i] > 1) return "Not birany ^^!"
            } 
            while (number > 0) {
                // trunc => lấy phần nguyên 
                decNumber += Math.trunc(number % 10) * Math.pow(2,p)
                ++p;
                number /= 10;
            }
            return decNumber.toString(16).toUpperCase();
        }
        var result2 = nhiPhanSangThapLucPhan(inputValue216);
        resultFrom216.innerText = inputValue216;
        resultTo216.innerText = result2;
        console.log('Nhị phân sang thập LỤC phân: ' + result2)
    }
}
//===================================================================
//===================================================================
//===================================================================


// Thập phân sang nhị phân
var inputValue102;
var inputElement102 = document.querySelector('.input-value__102');
var resultFrom102 = document.querySelector('.result-from__102');
var resultTo102 = document.querySelector('.result-to__102');
inputElement102.onkeydown = function(e) {
    //lấy giá trị input
    if( e.which == 13 ) {
        inputValue102 = e.target.value
        b = inputValue102.split('');      
        function thapPhanSangNhiPhan(number) {
            var p = 0;
            var binaryNumber = 0;
            for ( var i =0 ; i < inputValue102.length; i++) {
                if(  b[i].toUpperCase() >= 'A' && b[i].toUpperCase() <= 'Z') {
                    return 'not a number';
                }
            }
            while ( number > 0) {
                binaryNumber += Math.trunc(number%2)*Math.pow(10,p);
                ++p;
                number = Math.floor(number/2);
            }
            return binaryNumber;
        }
        var result3 = thapPhanSangNhiPhan(inputValue102)
        resultFrom102.innerText = inputValue102;
        resultTo102.innerText = result3;
        // console.log('Thập phân sang nhị phân: '+result3)
    }
}
// Thập phân sang thập LỤC phân
var inputValue1016;
var inputElement1016 = document.querySelector('.input-value__1016');
var resultFrom1016 = document.querySelector('.result-from__1016');
var resultTo1016 = document.querySelector('.result-to__1016');
inputElement1016.onkeydown = function(e) {
    //lấy giá trị input
    if( e.which == 13 ) {
        inputValue1016 = e.target.value 
        b = inputValue1016.split('');
        function thapPhanSangThapLucPhan(number) {
            for ( var i =0 ; i < inputValue1016.length; i++) {
                if(  b[i].toUpperCase() >= 'A' && b[i].toUpperCase() <= 'Z') {
                    return 'not a number';
                }
            }
            // toString(16) đổi sang hệ cơ số 16 ? ảo vkl
            // giá trị nhập vào tốt nhất là nên bằng String
            return (number-0).toString(16).toUpperCase();
        }
        var result4 = thapPhanSangThapLucPhan(inputValue1016)
        resultFrom1016.innerText = inputValue1016;
        resultTo1016.innerText = result4;
        console.log('Thập phân sang thập LỤC phân: ' + result4);
    }
}
//===================================================================
//===================================================================
//===================================================================
// Thập LỤC phân sang nhị phân 
var inputValue162;
var inputElement162 = document.querySelector('.input-value__162');
var resultFrom162 = document.querySelector('.result-from__162');
var resultTo162 = document.querySelector('.result-to__162');
inputElement162.onkeydown = function(e) {
    //lấy giá trị input
    if( e.which == 13 ) {
        inputValue162 = e.target.value 
        function thapLucPhanSangNhiPhan(number) {
            var decNumber=0,array = number.split('');
            var p = array.length - 1;
            console.log(array)
            for ( var i = 0; i < array.length; i++) {
                if ( array[i].toUpperCase() >= 'A' && array[i].toUpperCase() <= 'F' ) {
                    if ( array[i].toUpperCase() == 'A') array[i] = 10; 
                    else if ( array[i].toUpperCase() == 'B') array[i] = 11; 
                    else if ( array[i].toUpperCase() == 'C') array[i] = 12; 
                    else if ( array[i].toUpperCase() == 'D') array[i] = 13; 
                    else if ( array[i].toUpperCase() == 'E') array[i] = 14; 
                    else if ( array[i].toUpperCase() == 'F') array[i] = 15; 
                }
                decNumber += array[i]*Math.pow(16,p);
                --p; 
            }
            return decNumber.toString(2);
        }   
        var result5 = thapLucPhanSangNhiPhan(`${inputValue162}`);
        resultFrom162.innerText = inputValue162;
        resultTo162.innerText = result5;
        console.log('Thập LỤC phân sang nhị phân: ' + result5)
    }
}
// Thập LỤC phân sang thập phân 
var inputValue1610;
var inputElement1610 = document.querySelector('.input-value__1610');
var resultFrom1610 = document.querySelector('.result-from__1610');
var resultTo1610 = document.querySelector('.result-to__1610');
inputElement1610.onkeydown = function(e) {
    //lấy giá trị input
    if( e.which == 13 ) {
        inputValue1610 = e.target.value 
        function thapLucPhanSangThapPhan(number) {
            var decNumber=0,array = number.split('');
            var p = array.length - 1;
            for ( var i = 0; i < array.length; i++) {
                if ( array[i].toUpperCase() >= 'A' && array[i].toUpperCase() <= 'F' ) {
                    if ( array[i].toUpperCase() == 'A') array[i] = 10; 
                    else if ( array[i].toUpperCase() == 'B') array[i] = 11; 
                    else if ( array[i].toUpperCase() == 'C') array[i] = 12; 
                    else if ( array[i].toUpperCase() == 'D') array[i] = 13; 
                    else if ( array[i].toUpperCase() == 'E') array[i] = 14; 
                    else if ( array[i].toUpperCase() == 'F') array[i] = 15; 
                }
                decNumber += array[i]*Math.pow(16,p);
                --p; 
            }
            return decNumber;
        }   
        var result6 = thapLucPhanSangThapPhan(`${inputValue1610}`);
        resultFrom1610.innerText = inputValue1610;
        resultTo1610.innerText = result6;
        console.log('Thập LỤC phân sang thập phân: ' + result6)
    }
}
//===================================================================
