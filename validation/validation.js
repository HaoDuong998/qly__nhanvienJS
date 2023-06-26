// check không để trường dữ liệu trống 
function checkInputRong(idInput, idtb) {
    var valueInput = document.getElementById(idInput).value;
    if (valueInput.length === 0) {
      document.getElementById(idtb).innerHTML = `Vui lòng không để trống`;
      return false;
    } else {
      document.getElementById(idtb).innerHTML = ``;
      return true;
    }
}

function checkDinhDangEmail (idInput, idtb) {
  //viết regex để check Email
  var reGexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var valueInput = document.getElementById(idInput).value 
  if (!reGexEmail.test(valueInput) && valueInput !== ``) {
      document.getElementById(idtb).innerHTML = `không đúng định dạng`;
      return false
      
  } else if (reGexEmail.test(valueInput) && valueInput !== ``) {
      document.getElementById(idtb).innerHTML = ``;
      return true
      
  }

}

function checkDinhDangPass (idInput, idtb){
  var reGetPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
  var valueInput = document.getElementById(idInput).value
  if(!reGetPass.test(valueInput) && valueInput!==``){
    document.getElementById(idtb).innerHTML = `Password không đúng định dạng, password gồm 6-10 ký tự 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt `;
      return false
  }
  else if (reGetPass.test(valueInput) && valueInput !== ``) {
    document.getElementById(idtb).innerHTML = ``;
      return true
  }
}

function checkLuong(idInput, idTb){
  var regrexMoney = /^-?[0-9]+(\.[0-9]+)?$/;
  var valInput = document.getElementById(idInput).value;
  if (!regrexMoney.test(valInput) && valInput !== "") {
    document.getElementById(idTb).style.display = "block";
    document.getElementById(idTb).innerHTML =
      "Vui lòng đúng định dạng lương là con số.";
    return false;
  } else if (regrexMoney.test(valInput) && valInput !== "") {
    if (valInput >= 1000000 && valInput <= 20000000) {
      document.getElementById(idTb).innerHTML = "";
      return true;
    } else {
      document.getElementById(idTb).style.display = "block";
      document.getElementById(idTb).innerHTML =
        "Mức lương cơ bản c từ 1 triệu đến 20 triệu.";
      return false;
    }
  }
}

function checkGioLam(idInput, idTb){
  var regrexGioLam = /^(8[0-9]|9[0-9]|1[0-9]{2}|200)$/;
  var valInput = document.getElementById(idInput).value;
  if (!regrexGioLam.test(valInput) && valInput !== "") {
    document.getElementById(idTb).style.display = "block";
    document.getElementById(idTb).innerHTML =
      "Xin kiểm tra lại số. Giờ làm tối đa là 200 giờ và tối thiểu là 80 giờ";
    return false;
  } else if (regrexGioLam.test(valInput) && valInput !== "") {
    document.getElementById(idTb).innerHTML = "";
    return true;
  }
}

