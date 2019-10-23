var farCelConversion = function(far){
  return (far - 32) * 5 / 9;
};

var ozMlConversion = function(oz){
  return (oz * 29.574);
};

var poundsToKilo = function(pounds){
  return (pounds / 2.2046);
};

$(document).ready(function(){
  $("#cel-far").submit(function(event) {

    event.preventDefault();
    var far = parseInt($("#far-cel").val());
    var result = farCelConversion(far);
    $(".far-cel-output").text(result);
  });
});



$(document).ready(function(){
  $("#oz-ml").submit(function(event) {

    event.preventDefault();
    var oz = parseInt($("#oz-ml-input").val());
    console.log(typeof oz);
    console.log(oz);
    var result = ozMlConversion(oz);
    $(".oz-ml-output").text(result);
  });
});





$(document).ready(function(){
  $("#pounds-kilo").submit(function(event) {
    event.preventDefault();
    var pounds = parseInt($("#pounds-kilo-input").val());
    var result = poundsToKilo(pounds);
    $(".pounds-kilo-output").text(result);
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
