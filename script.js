/*
 * TRONG FILE JS CÓ KHAI BÁO MẢNG DỮ LIỆU, HÀM FUNCTION THÊM CÔNG VIỆC, KIỂM TRA NẾU CHƯA NHẬP
 * TẠO OBJ CÔNG VIỆC, THÊM DANH SÁCH VÀO MẢNG, THỰC HIỆN XOÁ CÔNG VIỆC VÀ HIỂN THỊ
 */
let danhSachViec = [];
function themCongViec() {
    let input = document.getElementById("taskInput");
    let tenViec = input.value;
    if (tenViec === "") {
        alert("Bạn chưa nhập tên công việc!");
        return;
    }
    let congViecMoi = {
        id: Date.now(),
        ten: tenViec,
        trangThai: false
    };
    danhSachViec.push(congViecMoi);
    input.value = "";
    hienThiDanhSach();
}
function xoaCongViec(idCanXoa) {
    if (confirm("Bạn có chắc muốn xóa việc này không?")) {
        danhSachViec = danhSachViec.filter(viec => viec.id !== idCanXoa);
        hienThiDanhSach();
    }
}
function hienThiDanhSach() {
    let ul = document.getElementById("taskList");
    ul.innerHTML = "";
    danhSachViec.forEach(viec => {
        let li = document.createElement("li");
        
        li.innerHTML = `
            <span>${viec.ten}</span>
            <button class="delete-btn" onclick="xoaCongViec(${viec.id})">Xóa</button>
        `;
        
        ul.appendChild(li);
    });
}