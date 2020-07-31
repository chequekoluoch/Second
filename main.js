
var myApp = new function () {
    this.printTable = function ()
    {
        var documentContainer = document.getElementById('myfrm');
        var WindowObject = window.open('', 'documentContainer', 'width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes');
        WindowObject.document.writeln(documentContainer.outerHTML);
        WindowObject.document.close();
        WindowObject.focus();
        WindowObject.print();
        WindowObject.close();
    }
   
}

var dt = new Date();
var DD = ("0" + dt.getDate()).slice(-2);
var MM = ("0" + (dt.getMonth() + 1)).slice(-2);
var YYYY = dt.getFullYear();
var hh = ("0" + dt.getHours()).slice(-2);
var mm = ("0" + dt.getMinutes()).slice(-2);
var ss = ("0" + dt.getSeconds()).slice(-2);
var d = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
document.getElementById("myDate").innerHTML = "DATE:" + d;

// Main ffunction
function GetSelectedClass() {

    var f = document.getElementById("cars");
    var myADM = f.options[f.selectedIndex].text;
    document.getElementById("admNO").innerHTML = "ADM NO:" + myADM + "&nbsp;";
    
    var k = document.getElementById("mineterm");
    var myterm = k.options[k.selectedIndex].text;
    document.getElementById("term").innerHTML = "TERM:" +myterm + "&nbsp;";

    var j = document.getElementById("myClass");
    var classs = j.options[j.selectedIndex].text;
    document.getElementById("myForm").innerHTML ="FORM:" +""+ classs;


    var t = document.getElementById("amount").value;
    document.getElementById("mount").innerHTML = "The Sum of money Paid:"+" " +"Kshs" +t+"/-";
       var sum =t;
       document.getElementById("td18").innerHTML = sum+"/-";

// ID generator

}
 // END of generator  


const exiit = document.getElementById('exiit');
exiit.onclick = function () {
    window.location.href = "index.html";
}


// Selected Index and input
function selector(){
    var e = document.getElementById("cars");
    var result = e.options[e.selectedIndex].text;

    document.getElementById("admNO").innerHTML = "ADM No:" + result + "&nbsp;";
    //}

    //

    var selectedValue = document.getElementById("select1").selectedIndex;
    console.log(selectedValue);
    var x = document.getElementById("myText").value;
    if (selectedValue == 0) {

        document.getElementById("td1").innerHTML = x + "/-";
    }
    else if (selectedValue == 1) {

        document.getElementById("td2").innerHTML = x + "/-";
    }
    else if (selectedValue == 2) {

        document.getElementById("td3").innerHTML = x + "/-";
    }
    else if (selectedValue == 3) {

        document.getElementById("td4").innerHTML = x + "/-";
    }
    else if (selectedValue == 4) {

        document.getElementById("td5").innerHTML = x + "/-";
    }
    else if (selectedValue == 5) {

        document.getElementById("td6").innerHTML = x + "/-";
    }
    else if (selectedValue == 6) {

        document.getElementById("td7").innerHTML = x + "/-";
    }
    else if (selectedValue == 7) {

        document.getElementById("td8").innerHTML = x + "/-";
    }
    else if (selectedValue == 8) {

        document.getElementById("td9").innerHTML = x + "/-";
    }

    else if (selectedValue == 9) {

        document.getElementById("td10").innerHTML = x + "/-";
    }
    else if (selectedValue == 10) {

        document.getElementById("td11").innerHTML = x + "/-";
    }
    else if (selectedValue == 11) {

        document.getElementById("td12").innerHTML = x + "/-";
    }
    else if (selectedValue == 12) {

        document.getElementById("td13").innerHTML = x + "/-";
    }
    else if (selectedValue == 13) {

        document.getElementById("td14").innerHTML = x + "/-";
    }
    else if (selectedValue == 14) {

        document.getElementById("td15").innerHTML = x + "/-";
    }
    else if (selectedValue == 15) {

        document.getElementById("td16").innerHTML = x + "/-";
    }
    else if (selectedValue == 16) {

        document.getElementById("td17").innerHTML = x + "/-";
    }
    else {

        document.getElementById("td1").innerHTML = x + "/-";
    }

}
// ID Genarator
(function () {
    function IDGenerator() {

        this.length = 5;
        this.timestamp = +new Date;

        var _getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.generate = function () {
            var ts = this.timestamp.toString();
            var parts = ts.split("").reverse();
            var id = "";

            for (var i = 0; i < this.length; ++i) {
                var index = _getRandomInt(0, parts.length - 1);
                id += parts[index];
            }

            return id;
        }


    }


    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.querySelector("#submitter"),
            output = document.querySelector("#output");
        
        btn.addEventListener("click", function () {
            var generator = new IDGenerator();
            output.innerHTML= generator.generate();
            
           
        }, false);

    });


})();
// END OF GENERATOR
