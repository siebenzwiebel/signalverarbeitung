function ops() {

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

  var k = [-2, -1, 0, 1, 2, 3, 4, 5, 6];

  k.forEach(function(x) {
    var ops1 = sig(x, s1);
    op1.push(parseFloat(ops1).toFixed(3));
    var ops2 = sig(x, s2);
    op2.push(parseFloat(ops2).toFixed(3));
    var ops3 = sig(x, s1) + sig(x, s2);
    op3.push(parseFloat(ops3).toFixed(3));
    var ops4 = -2 * sig(x, s1);
    op4.push(parseFloat(ops4).toFixed(3));
    var ops5 = sig(x - 2, s1);
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
  var sysa1 = [];
  var sysa2 = [];
  var sysa3 = [];
  var sysa4 = [];
  var sysa5 = [];
  var sysa6 = [];
  var asys1 = [];
  var asys2 = [];
  var asys3 = [];
  var asys4 = [];
  var asys5 = [];
  var asys6 = [];

  var n = [2, 3, 4, 5];
  var m1, m2, m3, m4, m5, m6;

  for (m1 = 0; m1 <= 4; m1++) {
    n.forEach(function(y) {
      var ding1 = ops[m1][y] - 2 * ops[m1][y - 1];
      var dinga1 = (2*ops[m1][y]) - 2 * (ops[m1][y - 1]);
      console.log("DING: " + dinga1);
      var ading1 = 2 * (ops[m1][y] - 2 * ops[m1][y - 1]);
      console.log("DONG: " + ading1);
      sys1.push(parseFloat(ding1).toFixed(3));
      sysa1.push(parseFloat(dinga1).toFixed(3));
      asys1.push(parseFloat(ading1).toFixed(3));
    });
  }

  for (m2 = 0; m2 <= 4; m2++) {
    n.forEach(function(y) {
      var ding2 = ops[m2][2 * (y - 1)];
      var dinga2 = 2 * ops[m2][2 * (y - 1)];
      console.log("DING: " + dinga2);
      var ading2 = 2 * ops[m2][2 * (y - 1)];
      console.log("DONG: " + ading2);
      sys2.push(parseFloat(ding2).toFixed(3));
      sysa2.push(parseFloat(dinga2).toFixed(3));
      asys2.push(parseFloat(ading2).toFixed(3));
    });
  }

  for (m3 = 0; m3 <= 4; m3++) {
    n.forEach(function(y) {
      var ding3 = ops[m3][y] * (epsilon((y - 2) - 1) - epsilon((y - 2) - 2));
      var dinga3 = (2 * ops[m3][y]) * (epsilon((y - 2) - 1) - epsilon((y - 2) - 2));
      console.log("DING: " + dinga3);
      var ading3 = 2 * (ops[m3][y] * (epsilon((y - 2) - 1) - epsilon((y - 2) - 2)));
      console.log("DONG: " + ading3);
      sys3.push(parseFloat(ding3).toFixed(3));
      sysa3.push(parseFloat(dinga3).toFixed(3));
      asys3.push(parseFloat(ading3).toFixed(3));
    });
  }

  for (m4 = 0; m4 <= 4; m4++) {
    n.forEach(function(y) {
      var ding4 = Math.abs(ops[m4][y]);
      var dinga4 = Math.abs(2*ops[m4][y]);
      console.log("DING: " + dinga4);
      var ading4 = 2 * Math.abs(ops[m4][y]);
      console.log("DONG: " + ading4);
      sys4.push(parseFloat(ding4).toFixed(3));
      sysa4.push(parseFloat(dinga4).toFixed(3));
      asys4.push(parseFloat(ading4).toFixed(3));
    });
  }

  for (m5 = 0; m5 <= 4; m5++) {
    n.forEach(function(y) {
      var ding5 = 3 * ops[m5][y] + 1;
      var dinga5 = 3 * (2*ops[m5][y]) + 1;
      console.log("DING: " + dinga5);
      var ading5 = 2 * 3 * ops[m5][y] + 1;
      console.log("DONG: " + ading5);
      sys5.push(parseFloat(ding5).toFixed(3));
      sysa5.push(parseFloat(dinga5).toFixed(3));
      asys5.push(parseFloat(ading5).toFixed(3));
    });
  }

  for (m6 = 0; m6 <= 4; m6++) {
    n.forEach(function(y) {
      var ding6 = Math.pow(ops[m6][y - 1], 2);
      var dinga6 = Math.pow((2*ops[m6][y - 1]), 2);
      console.log("DING: " + ading6);
      var ading6 = 2 * Math.pow(ops[m6][y - 1], 2);
      console.log("DONG: " + ading6);
      sys6.push(parseFloat(ding6).toFixed(3));
      sysa6.push(parseFloat(dinga6).toFixed(3));
      asys6.push(parseFloat(ading6).toFixed(3));
    });
  }

  var systems = [sys1, sys2, sys3, sys4, sys5, sys6];
  var asystems = [asys1, asys2, asys3, asys4, asys5, asys6];
  var systemsa = [sysa1, sysa2, sysa3, sysa4, sysa5, sysa6];
  var string = "";



  // DATA! BUT BEAUTIFUL! WITH TABLES!

  var ops = [op1, op2, op3, op4, op5];
  string += "<table><thead></thead><tbody><tr><td>k</td><td>-2</td><td>-1</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>"
  var loopy = 1;
  ops.forEach(function(x) {
    string += "<tr><td>OP" + loopy + "</td>";
    for (g = 0; g <= 8; g++) {
      var appendix = x[g].toString();
      string += "<td>" + appendix + "</td>";
    }
    string += "</tr>";
    loopy++;
  });
  string += "</tbody></table><br /><br />"

  var l;
  var j;
  string += "<table><thead></thead><tbody><tr><td>SYS</td><td>OP</td><td>y(0)</td><td>y(1)</td><td>y(2)</td><td>y(3)</td><td>ADDITIV?</td><td>HOMOGEN?</td><td>LINEAR?</td></tr>";
  var loop = 1;
  var linear = "false"
  systems.forEach(function(x) {
    for (l = 0; l <= 4; l++) {
      string += "<tr class='color" + (loop % 2) + "'><td>sys" + loop + "</td><td>op" + (l + 1) + "</td>";
      //for (j = l; j <= l+15; j+=4){
      for (j = l * 4; j <= ((l * 4) + 3); j++) {
        var append = "<td>" + x[j].toString() + "</td>";
        string += append;
      }
      if (additiv(x) == "true" && homogen(systemsa[loop-1], asystems[loop-1]) == "true"){
        linear = true;
      }
      else {
        linear = false;
      }
      string += "<td>" + additiv(x) + "</td><td>" + homogen(systemsa[loop-1], asystems[loop-1]) + "</td><td>" + linear + "</td>";
      string += "</tr>";
    }
    loop++;
  });

  string += "</tbody></table>";

  document.getElementById("results").innerHTML = string;

  console.log(arraysEqual(sysa1, asys1));
  console.log(arraysEqual(sysa2, asys2));
  console.log(arraysEqual(sysa3, asys3));
  console.log(arraysEqual(sysa4, asys4));
  console.log(arraysEqual(sysa5, asys5));
  console.log(arraysEqual(sysa6, asys6));

}

// COME AND GET SOME SIGNALS FOR FREE!

function sig(k, n) {
  var sig;
  if (n == 1) {
    sig = 1 + delta(k) - 2.4 * delta(k - 3);
  } else if (n == 2) {
    sig = 1 - 2.4 * delta(k) + 2 * delta(k - 3);
  } else if (n == 3) {
    sig = epsilon(k - 1) - 2.4 * delta(k - 3);
  } else if (n == 4) {
    sig = delta(k) - 2.4 * epsilon(k - 1);
  } else if (n == 5) {
    sig = delta(k) - 2.4 * epsilon(k - 2);
  } else if (n == 6) {
    sig = Math.cos(Math.PI * k / 2) + delta(k - 2);
  } else if (n == 7) {
    sig = Math.sin(Math.PI * k / 2) + delta(k - 2);
  } else if (n == 8) {
    sig = (k - 2) * epsilon(k) - delta(k - 2);
  } else if (n == 9) {
    sig = epsilon(k) - 2.4 * delta(k - 2);
  } else if (n == 10) {
    sig = epsilon(k) * Math.pow(-1, k) - delta(k - 2);
  } else {
    sig = 0;
  }
  return sig;
}



// THE ROOT OF ALL EVIL

function delta(k) {
  return k == 0 ? 1 : 0;
}

function epsilon(k) {
  return k < 0 ? 0 : 1;
}


// IS IT LTI OR IS IT NOT?

function additiv(sys) {
  var n;

  for (n = 0; n <= 3; n++) {
    var check = 0;
    var a = parseFloat(sys[n]);
    var b = parseFloat(sys[n + 4]);
    var c = parseFloat(sys[n + 8]);

    if ((a + b) == c) {} else {
      check += 1;
    }

  }
  if (check == 0.000) {
    return "true";
  } else {
    return "false";
  }
}

function homogen(sysa, asys) {

  if (!arraysEqual(sysa, asys)) {
    return "false";
  } else {
    return "true";
  }

}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
