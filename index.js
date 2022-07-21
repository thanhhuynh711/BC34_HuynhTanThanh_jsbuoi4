document.getElementById("sapXep").onclick = function () {
  // Đầu vào
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;
  //   Xử lý
  var sln = timSoLonNhat(so1, so2, so3);
  //   Đầu ra
  document.getElementById("ketQua").innerHTML = sln;
};

function timSoLonNhat(a, b, c) {
  var sum;
  if (a > b && b > c) {
    sum = c + "<" + b + "<" + a;
  } else if (a > c && c > b) {
    sum = b + "<" + c + "<" + a;
  } else if (b > a && a > c) {
    sum = c + "<" + a + "<" + b;
  } else if (b > c && c > a) {
    sum = a + "<" + c + "<" + b;
  } else if (c > b && b > a) {
    sum = a + "<" + b + "<" + c;
  } else if (c > a && a > b) {
    sum = b + "<" + a + "<" + c;
  } else {
    confirm("Vui lòng kiểm tra lại số");
  }
  return sum;
}

// Bài Tập 2
document.getElementById("chonThanhVien").onclick = function () {
  var thanhVien = document.getElementById("thanhVien").value;
  //   Xử lý
  var hello = thanhVien;

  switch (hello) {
    case "Bố":
      hello = "Xin chào bố!";
      break;
    case "Mẹ":
      hello = "Xin chào mẹ!";
      break;
    case "Anh trai":
      hello = "xin chào anh trai!";
      break;
    case "Em gái":
      hello = "xin chào em gái!";
      break;
    default:
      hello = "ai vậy?";
  }
  //   Đầu ra
  document.getElementById("check").innerHTML = hello;
};

// Bài tập 3
document.getElementById("kiemTraSo").onclick = function () {
  // Đầu vào
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = document.getElementById("number3").value;
  //   Xử lý
  var tongSo = 0;
  if (number1 % 2 === 0) {
    tongSo = "số chẵn";
  } else {
    tongSo = "số lẻ";
  }
  if (number2 % 2 === 0) {
    tongSo = "số chẵn";
  } else {
    tongSo = "số lẻ";
  }
  if (number3 % 2 === 0) {
    tongSo = "số chẵn";
  } else {
    tongSo = "số lẻ";
  }
  var sothuc;

  // Đầu ra
  document.getElementById("ketQua2").innerHTML = sothuc;
};

// Bài tập 4
document.getElementById("tamGiac").onclick = function () {
  // Đầu vào
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  //   Xử lý
  var duDoan = kiemTraTamGiac(num1, num2, num3);
  //   Đầu ra
  document.getElementById("duDoanTamGiac").innerHTML = duDoan;
};

function kiemTraTamGiac(a, b, c) {
  var tamGiac;
  if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
    tamGiac = "Tam giác cân";
  } else if (a === b && a === c && b === c) {
    tamGiac = "Tam giác đều";
  } else if (a * a + b * b === c * c) {
    tamGiac = "Tam giác vuông";
  } else {
    tamGiac = "1 tam giác nào đó lạ lắm";
  }
  return tamGiac;
}
