
function calcu(){

    var total=Area1()+Area2()
    total=total/40.46856419;
    document.getElementById("screen").value=total.toFixed(3);

    function Area1() {
        let side1 = parseInt(document
            .getElementById("a1").value);

        let side2 = parseInt(document
            .getElementById("b1").value);

        let side3 = parseInt(document
            .getElementById("e1").value);

        let s = (side1 + side2 + side3) / 2;
        console.log(s)
        let area = Math.sqrt(s * ((s - side1) 
                * (s - side2) * (s - side3)));
        console.log(area)
        return area;
        
        }
        function Area2() {
            let side1 = parseInt(document
                .getElementById("c1").value);
    
            let side2 = parseInt(document
                .getElementById("d1").value);
    
            let side3 = parseInt(document
                .getElementById("e1").value);
    
            let s = (side1 + side2 + side3) / 2;
            console.log(s)
            let area = Math.sqrt(s * ((s - side1) 
                    * (s - side2) * (s - side3)));
            console.log(area)
            return area;
            
            }
}

function calcutri(){

    var total=Area1()
    total=total/40.46856419;
    document.getElementById("screen").value=total.toFixed(3);

    function Area1() {
        let side1 = parseInt(document
            .getElementById("a1").value);

        let side2 = parseInt(document
            .getElementById("b1").value);

        let side3 = parseInt(document
            .getElementById("c1").value);

        let s = (side1 + side2 + side3) / 2;
        console.log(s)
        let area = Math.sqrt(s * ((s - side1) 
                * (s - side2) * (s - side3)));
        console.log(area)
        return area;
        
        }
}