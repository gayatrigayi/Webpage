function Func(){
    document.getElementById("navg").style.display="none";
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("notify").style.width="20%";
            
}
function closeNav(){
    var x = window.innerWidth;
    
    document.getElementById("mySidenav").style.width = "0";
    if(x<=600){
        document.getElementById("navg").style.display="none";
               
    }
    else{
        document.getElementById("navg").style.display="block";
        document.getElementById("notify").style.width="24%";
    }
}
function PopUp(){
    var v = document.getElementById("pop");
    v.style.display="block";
}
function Check(){
    var x = document.getElementById("entry").value;
    if(/N+\d{6}/.test(x)){
        document.getElementById("validornot").style.color="green";
        document.getElementById("validornot").innerHTML="ID is Valid";
            }
            else{
                document.getElementById("validornot").style.color="red";
                document.getElementById("validornot").innerHTML="ID is InValid";
            }
        }
        function closepop(){
            document.getElementById("pop").style.display="none";
            document.getElementById("validornot").innerHTML="";
            document.getElementById("entry").value="";
        }

        var data="";
        var a = ["N180909","N181165","N180697","N180093","N181102","N180078"];
    for(i=0;i<a.length;i++){
        data=data+"<li><a href='#'>"+a[i]+"</a></li><br>"
    }
    document.getElementById("myUL").innerHTML = data;
        function myFunction() {
          // Declare variables
          var input, filter, ul, li, a, i, txtValue;
          input = document.getElementById('myInput');
          filter = input.value.toUpperCase();
          ul = document.getElementById("myUL");
          li = ul.getElementsByTagName('li');
        
          // Loop through all list items, and hide those who don't match the search query
          for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }
    