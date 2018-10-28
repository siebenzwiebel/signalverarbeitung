/**

<p>signals<br /><br />
  a1 = 1+delta(k)-2.4*delta(k-3)<br />
  a2 = 1-2.4*delta(k)+2*(k-3)<br />
  a3 = epsilon(k-1)-2.4*delta(k-3)<br />
  a4 = delta(k)-2.4*epsilon(k-1)<br />
  a5 = delta(k)-2.4*epsilon(k-2)<br />
  a6 = math.cos(math.pi*k/2)+delta(k-2)<br />
  a7 = math.sin(math.pi*k/2)+delta(k-2)<br />
  a8 = (k-2)*epsilon(k)-delta(k-2)<br />
  a9 = epsilon(k)-2.4*delta(k-2)<br />
  a10 = epsilon(k)*((-1)^k)-delta(k-2)<br /><br />

operations<br /><br />
  op1 = x1(k)<br />
  op2 = x2(k)<br />
  op3 = x1(k)+x2(k)<br />
  op4 = -2*x1(k)<br />
  op5 = x1(k-2)<br /><br />

systems<br /><br />
  sys1 = x(k)-2x(k-1)<br />
  sys2 = x(2k)<br />
  sys3 = (epsilon(k-1)-epsilon(k-2))*x(k)<br />
  sys4 = abs(x(k))<br />
  sys5 = 3*x(k)+1<br />
  sys6 = x(k-1)^2<br /><br /></p>

*/

function ops(){



  // GET SHIT

  var text1 = document.getElementById("s1");
  var text2 = document.getElementById("s2");

  var s1 = text1.value;
  var s2 = text2.value;

  // DO SOME YEET MATH!

  var op1 = [];
  var op2 = [];
  var op3 = [];
  var op4 = [];
  var op5 = [];

  var k = [-2,-1,0,1,2,3,4,5,6];
  console.log("OPS4");
  k.forEach(function(x){
    var ops1 = sig(x, s1);
    op1.push(parseFloat(ops1).toFixed(3));
    var ops2 = sig(x, s2);
    op2.push(parseFloat(ops2).toFixed(3));
    var ops3 = sig(x, s1)+sig(x, s2);
    op3.push(parseFloat(ops3).toFixed(3));
    var ops4 = -2*sig(x, s1);
    op4.push(parseFloat(ops4).toFixed(3));
    console.log(x + ": " + ops4);
    var ops5 = sig(x-2, s1);
    op5.push(parseFloat(ops5).toFixed(3));
  });

  var ops = [op1, op2, op3, op4, op5];



  // PUSH SYSTEMS TO THE LIMIT!

  var sys1 = [];
  var sys2 = [];
  var sys3 = [];
  var sys4 = [];
  var sys5 = [];
  var sys6 = [];

  var n = [2, 3, 4, 5];
  var m1, m2, m3, m4, m5, m6;

  for (m1 = 0; m1 <= 4; m1++){
    n.forEach(function(y){
      var ding1 = ops[m1][y]-2*ops[m1][y-1];
      sys1.push(parseFloat(ding1).toFixed(3));
    });
  }
  console.log(sys1);
  for (m2 = 0; m2 <= 4; m2++){
    n.forEach(function(y){
      console.log("HALLOHALLO: " + y);
      var ding2 = ops[m2][2*(y-1)];
      sys2.push(parseFloat(ding2).toFixed(3));
    });
  }
  console.log(sys2);
  for (m3 = 0; m3 <= 4; m3++){
    n.forEach(function(y){
      var ding3 = ops[m3][y]*(epsilon((y-2)-1)-epsilon((y-2)-2));
      console.log("HAHAHAHAHAHAHA: " + ops[m3][y] + "*(" + epsilon((y-2)-1) + "-" + epsilon((y-2)-2) + ")=" + ding3 );
      sys3.push(parseFloat(ding3).toFixed(3));
    });
  }

  for (m4 = 0; m4 <= 4; m4++){
    n.forEach(function(y){
      var ding4 = Math.abs(ops[m4][y]);
      sys4.push(parseFloat(ding4).toFixed(3));
    });
  }

  for (m5 = 0; m5 <= 4; m5++){
    n.forEach(function(y){
      var ding5 = 3*ops[m5][y]+1;
      sys5.push(parseFloat(ding5).toFixed(3));
    });
  }

  for (m6 = 0; m6 <= 4; m6++){
    n.forEach(function(y){
      var ding6 = Math.pow(ops[m6][y-1], 2);
      sys6.push(parseFloat(ding6).toFixed(3));
    });
  }

  var systems = [sys1, sys2, sys3, sys4, sys5, sys6];
  var string = "";



  // DATA! BUT BEAUTIFUL! WITH TABLES!

  var ops = [op1, op2, op3, op4, op5];
  string += "<table><thead></thead><tbody><tr><td>k</td><td>-2</td><td>-1</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>"
  var loopy = 1;
  ops.forEach(function(x){
    string += "<tr><td>OP" + loopy + "</td>";
    for(g = 0; g <= 8; g++){
      var appendix = x[g].toString();
      string += "<td>" + appendix + "</td>";
    }
    string += "</tr>";
    loopy++;
  });
  string += "</tbody></table><br /><br />"

  var l;
  var j;
  string += "<table><thead></thead><tbody><tr><td>SYS</td><td>OP</td><td>y(0)</td><td>y(1)</td><td>y(2)</td><td>y(3)</td><td>ADDITIV?</td></tr>";
  var loop = 1;
  systems.forEach(function(x){
    for (l = 0; l <= 4; l++){
      string += "<tr class='color" + (loop%2) + "'><td>sys" + loop + "</td><td>op" + (l+1) + "</td>";
      //for (j = l; j <= l+15; j+=4){
      for (j = l*4; j <= ((l*4)+3); j++){
        var append = "<td>" + x[j].toString() + "</td>";
        string += append;
      }
      string += "<td>" + linear(x) + "</td>";
      string += "</tr>";
    }
    loop++;
  });

  string += "</tbody></table>";

  document.getElementById("results").innerHTML = string;

  console.log(sys1);

}

// COME AND GET SOME SIGNALS FOR FREE!

function sig(k, n){
  var sig;
  if (n==1){
    sig = 1+delta(k)-2.4*delta(k-3);
  }
  else if(n==2){
    sig = 1-2.4*delta(k)+2*delta(k-3);
  }
  else if(n==3){
    sig = epsilon(k-1)-2.4*delta(k-3);
  }
  else if(n==4){
    sig = delta(k)-2.4*epsilon(k-1);
  }
  else if(n==5){
    sig = delta(k)-2.4*epsilon(k-2);
  }
  else if(n==6){
    sig = Math.cos(Math.PI*k/2)+delta(k-2);
  }
  else if(n==7){
    sig = Math.sin(Math.PI*k/2)+delta(k-2);
  }
  else if(n==8){
    sig = (k-2)*epsilon(k)-delta(k-2);
  }
  else if(n==9){
    sig = epsilon(k)-2.4*delta(k-2);
  }
  else if(n==10){
    sig = epsilon(k)*Math.pow(-1, k)-delta(k-2);
  }
  else {
    sig = 0;
  }
  return sig;
}



// THE ROOT OF ALL EVIL

function delta(k){
  return k == 0 ? 1 : 0;
}

function epsilon(k){
  return k < 0 ? 0 : 1;
}


// IS IT LTI OR IS IT NOT?

function linear(sys){
  var n;

  for (n=0; n <= 3; n++){
      var check = 0;
    var a = parseFloat(sys[n]);
    console.log(a);
    console.log(typeof a);
    var b = parseFloat(sys[n+4]);
    console.log(b);
    console.log(typeof b);
    var c = parseFloat(sys[n+8]);
    console.log(c);
    console.log(typeof c);

    //console.log("DUDE:" + a + " " + b + " " + c);
    if((a+b) == c){
    }
    else {
      check += 1;
    }
    console.log("CHECK: " + check);
  }
  if (check == 0.000){
    return "true";
  }
  else {
    return "false";
  }
}

function timeinvariant(sys){}

function kausal(sys){}
