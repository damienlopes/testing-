function setup() {
  createCanvas(800, 800);

  //finderoffactor();
  // prime();
  // factorfinder();
  // ssssssssssumoffactor();
  // perfectperson();
  power()
}

function draw() {
  background("black");
}

function finderoffactor() {
  var n = 12;
  for (var i = 1; i <= 12; i = i + 1) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}

function factorfinder() {
  var f = 2;
  var count = 0;
  for (var i = 1; i <= 12; i = i + 1) {
    if (f % i == 0) {
      count = count + 1;
    }
  }
  console.log(count);
}

function prime() {
  var t = 12;
  var count2 = 0;

  for (var i = 1; i <= 7; i = i + 1) {
    if (t % i == 0) {
      count2 = count2 + 1;
    }
  }
  if (count2 == 2) {
    console.log("primenumber");
  } else {
    console.log("prime not prime");
  }
}

function ssssssssssumoffactor() {
  var z = 6;
  var sum1 = 0;

  for (var i = 1; i <= 6; i = i + 1) {
    if (z % i == 0) {
      sum1 = sum1 + i;
    }
  }
  console.log(sum1 + " number");
}

function perfectperson() {
  var z = 7;
  var perfectsumworld = 0;

  for (var i = 1; i < z; i = i + 1) {
    if (z % i == 0) {
      perfectsumworld = perfectsumworld + i;
    }
  }
  if (perfectsumworld === z) {
    console.log(
      perfectsumworld +
        " The perfect number, the best one really, this is a good number, you should like this number, it is like by many."
    );
  } else {
    console.log(
      perfectsumworld +
        " this is truly the worst number to ever be, it is a bad number."
    );
  }
}

function power(){
  var p = Math.pow(2,5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555)
  console.log(p)
}