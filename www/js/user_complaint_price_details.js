$(document).on('pageshow', '#pagefour', function(){ 

 //alert('ASD');


$(document).ready(function(){



 



$('.prce').click(function(){
    //alert("wrfe");

var chk = $("input[name='price']:checked").val();

var userid=$("#userhh").val();
//alert(rdio);
//alert(userid);


 

//var formData = $("#callAjaxForm").serialize();

  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-complaint/show_price.php?chk="+chk+"&userid="+userid,
  //data: formData,
  success: onSuccessfg,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorqwe

});
    function onSuccessfg(data){
//alert(data);

//sessionStorage.setItem("patient_detaias_array",JSON.stringify(result[0]));
sessionStorage.setItem("complaint",JSON.stringify(data));
complaint2 =  JSON.parse(sessionStorage.getItem("complaint"));

for(a=0;a<complaint.length;a++){
  var complaintli2 = complaint2[a];
var description='<div>'+ complaintli2.description+'</div>';
var price = '<div><span >&#8377;</span>'+ complaintli2.price+'</div>';

$('.make-par').html(description);
$('.make-rs').html(price);
}
//$.mobile.changePage($('#pagefour'), { transition: "none", changeHash: true, reverse: false });


  }
     function onErrorqwe(data){
alert('errrrr');
     }









  });/*radio button price*/






});/*document ready*/



});/*start*/


