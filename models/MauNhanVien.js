function MauNhanVien () {
    this.qlTaiKhoan = '';
    this.qlName = '';
    this.qlEmail = '';
    this.qlpass = '';
    this.qlNgayLam = 0;
    this.qlLuongCB = 0;
    this.qlchucvu = '';
    this.qlGioLam = 0;
    this.TongLuong = function () {
        var TongLuongNv = 0;
        if(this.qlchucvu == "Sếp") {
           TongLuongNv = Number(this.qlLuongCB) * 3 
        }
        else if (this.qlchucvu == "Trưởng Phuòng") {
            TongLuongNv = Number(this.qlLuongCB) * 2
        }
        else if (this.qlchucvu == "Nhân Viên") {
            TongLuongNv = Number(this.qlLuongCB) * 1
        }
        return TongLuongNv.toLocaleString()
    }
    this.XepLoai = function() {
        var xepLoaiNv = '';
        if (this.qlGioLam >= 192) {
            xepLoaiNv = `Nhân Viên Xuất Xắc`
        }
        else if (this.qlGioLam >= 176) {
            xepLoaiNv = `Nhân Viên Giỏi`
        }
        else if (this.qlGioLam >= 160) {
            xepLoaiNv = `Nhân viên khá`
        }
        else if (this.qlGioLam < 160 ) {
            xepLoaiNv = `Nhân viên trung bình`
        }
        return xepLoaiNv
    }
}