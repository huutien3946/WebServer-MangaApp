const moment = require("moment/moment");
const mongoose = require("mongoose");
//=======================tạo schema Tác giả=======================
const TacGiaSchema = new mongoose.Schema({
  TenTacGia: {
    type: String,
    required: true,
    unique: true,
  },
  TrangThai: {
    type: Boolean,
    default: true,
    required: true,
  },
});
//=======================tạo schema Thể loại=======================
const TheLoaiSchema = new mongoose.Schema({
  TenTheLoai: {
    type: String,
    required: true,
    unique: true,
  },
  TrangThai: {
    type: Boolean,
    default: true,
    required: true,
  },
});
//=======================tạo schema Truyện=======================
const TruyenSchema = new mongoose.Schema({
  TenTruyen: {
    type: String,
    required: true,
  },
  TheLoais: {
    type: [String],
    required: true,
  },
  TrangThai: {
    type: Boolean,
    default: true,
    required: true,
  },
  TinhTrang: {
    type: Boolean,
    default: false,
    required: true,
  },
  GioiThieu: {
    type: String,
  },
  AnhBia: {
    type: String,
    required: true,
  },
  LuotThich: {
    type: Number,
    default: 0,
  },
  LuotXem: {
    type: Number,
    default: 0,
  },
  LuotXemThang: {
    type: Number,
    default: 0,
  },
  LuotTheoDoi: {
    type: Number,
  },
  NgayTao: {
    type: Date,
    default: new Date().toISOString(),
  },
  NgayCapNhat: {
    type: Date,
    default: new Date().toISOString(),
  },
  NgayXepHang: {
    type: Date,
    default: new Date().toISOString(),
  },
  TacGias: [
    {
      type: String,
      required: true,
    },
  ],
  Chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
      required: true,
    },
  ],
});
//=======================tạo schema Tài khoản=======================
const TaiKhoanSchema = new mongoose.Schema({
  TaiKhoan: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
    unique: true,
  },
  MatKhau: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  HoTen: {
    type: String,
    require: true,
  },
  NgayTao: {
    type: String,
    required: true,
    default: new Date().toISOString(),
  },
  PhanQuyen: {
    type: Boolean,
    default: false,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    default: true,
    required: true,
  },
  BinhLuans: {
    type: [String],
  },
  LichSu: {
    type: [String],
  },
  YeuThich: {
    type: [String],
  },
});
//=======================tạo schema Chapter=======================
const ChapterSchema = new mongoose.Schema({
  TenChapter: {
    type: String,
    required: true,
  },
  NgayNhap: {
    type: Date,
    default: new Date().toISOString(),
    required: true,
  },
  TrangThai: {
    type: Boolean,
    default: true,
    required: true,
  },
  Truyen: {
    type: String,
  },
  LuotXem: {
    type: Number,
    default: 0,
  },
  LinkAnhs: {
    type: [String],
    required: true,
  },
  BinhLuans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BinhLuan",
      required: true,
    },
  ],
});
//=======================tạo schema Bình luận=======================
const BinhLuanSchema = new mongoose.Schema({
  NoiDungBL: {
    type: String,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    default: true,
    required: true,
  },
  NgayNhap: {
    type: Date,
    default: new Date().toISOString(),
    required: true,
  },
  //thêm vào chapter
  Chapter: {
    type: String,
    required: true,
  },
  TaiKhoan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TaiKhoan",
  },
});

//=======================tạo model=======================
let TacGia = mongoose.model("TacGia", TacGiaSchema);
let Truyen = mongoose.model("Truyen", TruyenSchema);
let TaiKhoan = mongoose.model("TaiKhoan", TaiKhoanSchema);
let Chapter = mongoose.model("Chapter", ChapterSchema);
let BinhLuan = mongoose.model("BinhLuan", BinhLuanSchema);
let TheLoai = mongoose.model("TheLoai", TheLoaiSchema);
module.exports = { Truyen, TacGia, TaiKhoan, Chapter, BinhLuan, TheLoai };
