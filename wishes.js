// wishes.js — kho lời chúc 20/10, tách riêng để sửa nội dung
// mà không phải đụng vào script.js hay index.html.
//
// Cấu trúc:
//   WISH_TABS    — danh sách tab (đối tượng nhận thư). `id` PHẢI trùng với
//                  key của WISHES / TEXTS_BY_TAB, và index.html tự lấy tab
//                  đầu tiên làm mặc định nên không cần sửa file nào khác.
//   defaultWish  — (tuỳ chọn) nếu có, đây là bức thư chính hiện ra đầu tiên.
//                  Nếu bỏ trống thì bức thư chính = toàn bộ WISHES của tab.
//   WISHES       — nội dung thư. Tất cả các dòng trong 1 tab là nội dung bức
//                  thư chính; từng dòng cũng là 1 bức thư riêng để rút/gửi.
//   TEXTS_BY_TAB — chữ bay trong nền 3D, đổi theo tab đang chọn.

const WISH_TABS = [
  {
    id: "nguoiyeu",
    label: "Người yêu",
    icon: "💗",
    color: "#ff4d79",
    colorSoft: "#ff8fab",
    sealEmoji: "💌",
    petalEmojis: ["💗", "💌", "🌹"],
    // Bỏ trống => bức thư chính hiện toàn bộ WISHES.nguoiyeu bên dưới.
    defaultWish: "",
  },
];

const WISHES = {
  nguoiyeu: [
    "Chúc Oanh của tớ 20/10 thật nhiều niềm vui,\ntớ luôn ở đây 💗",
    "Cảm ơn cậu vì đã xuất hiện và làm cuộc sống của tớ dễ chịu hơn.\n20/10 vui zẻ nha <3",
    "Mong mình sẽ luôn ở bên nhau thật bền vững và lâu dài nhé 🌹",
    "Chúc mừng 20/10, người mà tớ luôn muốn kể mọi chuyện trong ngày cùng 🌸",
    "Cậu không cần hoàn hảo, chỉ cần là cậu thôi.\nTớ đã thích như vậy rồi 💕",
  ],
};

const TEXTS_BY_TAB = {
  nguoiyeu: ["Tran Minh Oanh", "20/10 zui zẻ<3", "iu bro Oanh somut", "Mãi iuu"],
};

window.WISH_TABS = WISH_TABS;
window.WISHES = WISHES;
window.TEXTS_BY_TAB = TEXTS_BY_TAB;
