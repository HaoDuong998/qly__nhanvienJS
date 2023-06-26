// b1 lấy dữ liệu và hiển thị
// const getEle = (ele) => {
//   return document.getElementById(ele);
// };
arrNhanVien = [];
var arrInput = [
  "qlTaiKhoan",
  "qlName",
  "qlEmail",
  "qlPass",
  "qlNgayLam",
  "qlLuongCB",
  "qlchucvu",
  "qlGioLam",
];

var arrtb = [
  "tbTKNV",
  "tbTen",
  "tbEmail",
  "tbMatKhau",
  "tbNgay",
  "tbLuongCB",
  "tbChucVu",
  "tbGiolam",
];

function hienThiNv() {
  //tạo ra một lớp đối tượng mẫu
  var nhanVien = new MauNhanVien();
  var valid = true;
  for (var i = 0; i < arrInput.length; i++) {
    valid &= checkInputRong(arrInput[i], arrtb[i]);
    var giaTri = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = giaTri;
  }

  valid &= 
  checkDinhDangEmail("qlEmail", "tbEmail")&&
  checkDinhDangPass ("qlPass", "tbMatKhau")&&
  checkLuong ("qlLuongCB", "tbLuongCB") &&
  checkGioLam("qlGioLam", "tbGiolam");

  if (valid) {
    arrNhanVien.push(nhanVien);
    renderNhanVien();
    document.getElementById("formNhanVien").reset();

  }
}
document.getElementById("btnThemNV").onclick = hienThiNv;

//chạy vòng lập qua mảng để tạo các chuỗi nội dung
function renderNhanVien() {
  var content = ``;
  for (var i = 0; i < arrNhanVien.length; i++) {
    var dulieu = arrNhanVien[i];
    content += `
        <tr>
            <td>${dulieu.qlTaiKhoan}</td>
            <td>${dulieu.qlName}</td>
            <td>${dulieu.qlEmail}</td>
            <td>${dulieu.qlNgayLam}</td>
            <td>${dulieu.qlchucvu}</td>
            <td>${dulieu.TongLuong()}</td>
            <td>${dulieu.XepLoai()}</td>
            <td>
            <button onclick="xoaNhanVien('${
              dulieu.qlTaiKhoan
            }')" class="btn btn-danger">Xoá</button>
            <button onclick="layThongTin('${
              dulieu.qlTaiKhoan
            }')" class="btn btn-warning">Sửa</button>
            </td>
        </tr>
        `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
// xoá nhân viên
function xoaNhanVien(maNv) {
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].qlTaiKhoan.toString() === maNv.toString()) {
      index = i;
    }
  }
  arrNhanVien.splice(index, 1);
  renderNhanVien();
}

// sửa nhân viên
function layThongTin(idNhanVien) {
  var nhanVien = {};
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].qlTaiKhoan == idNhanVien) {
      nhanVien = arrNhanVien[i];
    }
  }
  for (var z = 0; z < arrInput.length; z++) {
    //xử li đọc không cho sửa tài khoản
    if (arrInput[z] === "qlTaiKhoan") {
      document.getElementById(arrInput[z]).readOnly = true;
    }
    document.getElementById(arrInput[z]).value = nhanVien[arrInput[z]];
  }
  document.getElementById("btnThem").click();
}

function capNhatNhanVien() {
  var nhanVien = new MauNhanVien();
  for (var i = 0; i < arrInput.length; i++) {
    var valueInput = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = valueInput;
  }
  var Index = -1;
  for (var z = 0; z < arrNhanVien.length; z++) {
    if (arrNhanVien[z].qlTaiKhoan == nhanVien.qlTaiKhoan) {
      Index = z;
    }
  }
  var valid = true;
  for (var i = 0; i < arrInput.length; i++) {
    valid &= checkInputRong(arrInput[i], arrtb[i]);
    var giaTri = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = giaTri;
  }

  valid &= 
  checkDinhDangEmail("qlEmail", "tbEmail")&&
  checkDinhDangPass ("qlPass", "tbMatKhau")&&
  checkLuong ("qlLuongCB", "tbLuongCB") &&
  checkGioLam("qlGioLam", "tbGiolam");
  if (valid) {
    arrNhanVien[Index] = nhanVien;
  renderNhanVien();
  }
  
}
document.getElementById("btnCapNhat").onclick = capNhatNhanVien;

console.log(capNhatNhanVien)



