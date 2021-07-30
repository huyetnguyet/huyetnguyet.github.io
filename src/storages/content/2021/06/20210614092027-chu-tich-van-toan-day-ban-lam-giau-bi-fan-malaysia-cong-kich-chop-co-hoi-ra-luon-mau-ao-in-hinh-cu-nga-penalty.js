import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '14/06/2021 09:20 AM',
"title": 'Chủ tịch Văn Toàn dạy bạn “làm giàu”: Bị fan Malaysia công kích, chớp cơ hội ra luôn mẫu áo in hình cú ngã penalty',
"description": 'Thời đại nào rồi mà còn suy sụp khi bị anti làm phiền, phải chớp lấy cơ hội buôn bán như Văn Toàn đi nhé!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/a8-125931-16235717463561143548443.jpg',
"alt": 'Van Toan, Nguyen Van Toan, Relax, Cau Thu Van Toan, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, ',
"category": 'news',
"date": '14/06/2021',
"time": '09:20 AM',
"link": '/chu-tich-van-toan-day-ban-lam-giau-bi-fan-malaysia-cong-kich-chop-co-hoi-ra-luon-mau-ao-in-hinh-cu-nga-penalty',
"zcomponent": 'page_20210614092027',
"filepath": './20210614092027-chu-tich-van-toan-day-ban-lam-giau-bi-fan-malaysia-cong-kich-chop-co-hoi-ra-luon-mau-ao-in-hinh-cu-nga-penalty.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Chủ tịch Văn Toàn dạy bạn “làm giàu”: Bị fan Malaysia công kích, chớp cơ hội ra luôn mẫu áo in hình cú ngã penalty";
const author = "M416,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "14/06/2021 09:20 AM";
const description =
  "Thời đại nào rồi mà còn suy sụp khi bị anti làm phiền, phải chớp lấy cơ hội buôn bán như Văn Toàn đi nhé!";
const link =
  "chu-tich-van-toan-day-ban-lam-giau-bi-fan-malaysia-cong-kich-chop-co-hoi-ra-luon-mau-ao-in-hinh-cu-nga-penalty";
const tagparam = [
  "van-toan",
  "nguyen-van-toan",
  "relax",
  "cau-thu-van-toan",
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210614092027() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Các thành viên của đội tuyển Việt Nam là nam thần? Đúng
                    nhưng chưa đủ. Không chỉ là nam thần, họ còn là những "vựa
                    muối" quốc dân nữa. Dù bạn bốc bừa một cái tên thôi và tìm
                    hiểu thì đều sẽ phát hiện hóa ra ai trong số họ cũng có
                    khiếu hài hước cùng trình lầy lội đỉnh cao hết.
                  </p>
                  <p>
                    Lấy ví dụ nhanh là Văn Toàn đi. Ai cũng biết nhờ cú ngã của
                    Văn Toàn mà chúng ta có được quả penalty quý giá, giúp ấn
                    định tỷ số 2-1 trước đối thủ Malaysia tại vòng loại thứ 2
                    World Cup 2020 cách đây ít hôm. Tuy nhiên, bất chấp việc pha
                    phạm lỗi của cầu thủ đội bạn đã được tổ trọng tài cùng các
                    chuyên gia xác định, nhiều CĐV Malaysia vẫn khăng khăng cho
                    rằng Toàn đã "ngã lươn". Một bộ phận fan quá khích nước bạn
                    thậm chí còn tràn vào trang cá nhân của Văn Toàn để tấn
                    công.
                  </p>
                  <p>
                    Thế nhưng khác với tưởng tượng của nhiều người rằng chắc Văn
                    Toàn sẽ áp lực lắm, ngược lại, nam tiền vệ còn tranh thủ cơ
                    hội này để phát triển brand quần áo của mình ra thị trường
                    quốc tế luôn. Sau bức tâm thư bằng tiếng Anh để PR brand thì
                    mới đây, Chủ tịch Văn Toàn còn nhanh tay ra mắt ngay mẫu áo
                    mới lấy cảm hứng từ chính cú ngã 1 phát ăn ngay của mình.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/1926294982734332945207286374518254631687698n-1623570406788532239056.jpg"
                    alt="Van Toan, Nguyen Van Toan, Relax, Cau Thu Van Toan, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="Cao thủ không bằng tranh thủ, Văn Toàn đã ra ngay mẫu áo mới cho brand của mình"
                  />
                  <p>
                    Mẫu áo mới được đăng tải trên fanpage của brand kèm đoạn
                    caption đậm chất "cà khịa" không thể mặn mòi hơn:
                  </p>
                  <p>
                    - Design: độc quyền lấy cảm hứng từ cú ngã 1 phát ăn ngay
                    của Chủ tịch!
                  </p>
                  <p>
                    - Chất liệu: cotton 4 chiều 100% dày dặn, chắc chắn chứ
                    không mỏng manh dễ ngã!
                  </p>
                  <p>
                    - Hộp carton đẹp, dày, sẵn sàng ship tới cho các fan quốc
                    tế, đặc biệt là các fan của nước nào đó!!!
                  </p>
                  <p>
                    - Giá: Không hề rẻ - Vì tổn thương về tinh thần của Chủ tịch
                    đã lên đến đỉnh vì sau một đêm bỗng dưng bị đổi họ cúng cơm,
                    nên bán phải đúng với giá trị để bù đắp tổn thất thiệt hại
                    này... Đùa tí thôi chứ giá vẫn hợp lí nhé ạ!
                  </p>
                  <p>
                    Và quả thực, ngắm mẫu áo mới cũng thấy hình ảnh Văn Toàn ngã
                    được design ở chính giữa áo. Thông điệp "It's real" trong
                    trường hợp này hoàn toàn có thể hiểu là một lời khẳng định
                    lại: "Đằng này ngã thật chứ không có ngã vờ nha cả nhà".
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/1951147722734332878540626965647481716198615n-16235717148401639639529.jpg"
                    alt="Van Toan, Nguyen Van Toan, Relax, Cau Thu Van Toan, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="Bạn thấy hình người giữa áo quen quen không?"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Quen là đúng vì nó được thiết kế cách điệu từ chính cú ngã
                    này "ăn pen" này mà!
                  </p>
                  <p>
                    Khỏi phải nói, dân tình đã cảm thấy vô cùng thích thú với
                    "nước đi" bất ngờ này của Văn Toàn. Chủ tịch có khác, đầu óc
                    làm ăn nhạy bén hơn hẳn ha!
                  </p>
                  <p>Một vài bình luận hài hước của cư dân mạng:</p>
                  <p>
                    - Ông hoàng quảng cáo, ông tổ ngành marketing, chúa tể cơ
                    hội khi ra hẳn mẫu áo mới bằng cú ngã lấy penalty cho đội
                    nhà.
                  </p>
                  <p>
                    - Thay vì Toàn trầm cảm vì dư luận xã hội thì dư luận xã hội
                    trầm cảm vì Toàn.
                  </p>
                  <p>
                    - Người mạnh mẽ vượt qua thách thức, còn người thông minh
                    chẳng những vượt qua mà còn biến thách thức thành cơ hội
                    luôn.
                  </p>
                  <p>
                    - Vậy mà tui còn sợ Văn Toàn bị tổn thương tâm lý nên đi
                    report hàng loạt comment của đám kia.
                  </p>
                  <p>- 10 điểm xử lý khủng hoảng truyền thông luôn anh ơi!!!</p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/a8-125931-16235717463561143548443.jpg"
                    alt="Van Toan, Nguyen Van Toan, Relax, Cau Thu Van Toan, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note=""
                  />
                  <p>Ảnh: Tổng hợp</p>
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
