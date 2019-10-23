var farCelConversion = function(far){
  return (far - 32) * 5 / 9;
};

$(document).ready(function(){
  $("#cel-far").submit(function(event) {

    event.preventDefault();
    var far = parseInt($("#far-cel").val());
    var result = farCelConversion(far);
    $(".far-cel-output").text(result);
  });
});











//
//
// var add = function(number1, number2) {
// return number1 + number2;
// };
//
// $(document).ready(function(){
//
//   $("form#add").submit(function(event){
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
//     var result = add(number1, number2);
//     $("#add-output").text(result);
// });
