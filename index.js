let numval = 0;
let serie;
let numimed;

function el(el) {
  return document.getElementById(el);
}

el('valnum').addEventListener('input',function() {
  var val = this.value;
  this.value = val.replace(/\D|\-/,'');
});

var genfun = new Vue({
  el: '#genfun',
  data: {
    result:0,
    serief:0
  },
  methods: {
    saludar: function (event) {
      numval = document.getElementById("valnum").value;
      if(numval == ''){
        alert('Debe Ingresar un numero entero en la caja de Texto');
      }else {
        document.getElementById("valnum").value = '';
        document.getElementById("valnum").focus();
        serie = SerieFibonacci (numval);
        numimed = numinmediato (serie);
        if (event) {
          this.serief = serie;
          this.result =  numimed;
        }
      }
    }
  }
})



function SerieFibonacci(num) {
  if (num==1 || num==0)
  {
    return [0, 1];
  }
  else
  {
    var s = SerieFibonacci(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

function numinmediato (serie) {
  let r = serie.find(element => element > numval);
  let y = serie.indexOf(parseInt(numval));
  let x = serie.indexOf(r);
  if (serie[y] == numval){
    return numval;
  }else{
    if (r == null){
      if (y == 0){
        return 0;
      }
      let max = Math.max(...serie);
      return max;
    }else{
      return serie[x-1];
    }
  }
};
