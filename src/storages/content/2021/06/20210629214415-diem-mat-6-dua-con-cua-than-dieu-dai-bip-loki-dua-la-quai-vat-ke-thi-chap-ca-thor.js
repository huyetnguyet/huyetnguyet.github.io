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
"timestamp": '29/06/2021 09:44 PM',
"title": 'Điểm mặt 6 đứa con của "Thần Điêu Đại Bịp" Loki, đứa là quái vật kẻ thì chấp cả Thor',
"description": 'Với giới tính linh hoạt cùng khả năng thiên biến vạn hóa thành vô số hình dạng, Loki đã có tất cả 6 người con vô cùng "quái dị".',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/20/fe6-1624165713993278620488.jpg',
"alt": 'THẦN LỪA LỌC LOKI,BOX LOKI,TRAILER LOKI,LADY LOKI,PHẢN DIỆN LOKI,BIẾN THỂ CỦA LOKI,SERIES LOKI,NHÂN VẬT MỚI TRONG LOKI,BIẾN THỂ LOKI,',
"category": 'games',
"date": '29/06/2021',
"time": '09:44 PM',
"link": '/diem-mat-6-dua-con-cua-than-dieu-dai-bip-loki-dua-la-quai-vat-ke-thi-chap-ca-thor',
"zcomponent": 'page_20210629214415',
"filepath": './20210629214415-diem-mat-6-dua-con-cua-than-dieu-dai-bip-loki-dua-la-quai-vat-ke-thi-chap-ca-thor.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  'Điểm mặt 6 đứa con của "Thần Điêu Đại Bịp" Loki, đứa là quái vật kẻ thì chấp cả Thor';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:44 PM";
const description =
  'Với giới tính linh hoạt cùng khả năng thiên biến vạn hóa thành vô số hình dạng, Loki đã có tất cả 6 người con vô cùng "quái dị".';
const link =
  "diem-mat-6-dua-con-cua-than-dieu-dai-bip-loki-dua-la-quai-vat-ke-thi-chap-ca-thor";
const tagparam = [
  "THẦN LỪA LỌC LOKI",
  "BOX LOKI",
  "TRAILER LOKI",
  "LADY LOKI",
  "PHẢN DIỆN LOKI",
  "BIẾN THỂ CỦA LOKI",
  "SERIES LOKI",
  "NHÂN VẬT MỚI TRONG LOKI",
  "BIẾN THỂ LOKI",
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

export default function page_20210629214415() {
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
                    Trong Thần Thoại Bắc Âu, Loki đã có hai người vợ và một "ông
                    chồng". Họ có với nhau 6 người con.Vợ cả Angrboda (người
                    khổng lồ) sinh ra Fenrir, Jormungandr, Hel. Vợ thứ Sigyn
                    sinh ra Narfi, Vali còn "chồng cả" Svadilfari (ngựa đực)
                    sinh ra Sleipnir. Sau đây cùng chúng tôi tìm hiểu 6 đứa con
                    của Thần Điêu Đại Bịp" Loki nhé!
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/20/fe6-1624165713993278620488.jpg"
                    alt="1, THẦN LỪA LỌC LOKI,BOX LOKI,TRAILER LOKI,LADY LOKI,PHẢN DIỆN LOKI,BIẾN THỂ CỦA LOKI,SERIES LOKI,NHÂN VẬT MỚI TRONG LOKI,BIẾN THỂ LOKI,"
                    note=""
                  />
                  <h4>Fenrir</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/20/fe1-1624165691644583599568.jpg"
                    alt="2, THẦN LỪA LỌC LOKI,BOX LOKI,TRAILER LOKI,LADY LOKI,PHẢN DIỆN LOKI,BIẾN THỂ CỦA LOKI,SERIES LOKI,NHÂN VẬT MỚI TRONG LOKI,BIẾN THỂ LOKI,"
                    note=""
                  />
                  <p>
                    Fenrir là con cả của Loki và được xem là một trong những
                    sinh vật đáng sợ nhất Cửu Giới. Tương truyền, Fenrir có thể
                    nuốt chửng mọi thứ. Lửa sẽ phun ra từ mắt và lỗ mũi của nó
                    để tiêu diệt mọi thứ cản đường. Theo Thần Thoại Bắc Âu, các
                    vị thần Aesir vô cùng sợ hãi Fenrir nên đã yêu cầu xích nó
                    lại. Để làm điều này, thần Tyr đã chấp nhận đánh đổi cánh
                    tay phải của mình. Một thanh gươm cũng được đặt vào miệng
                    Fenrir để nó không thể cắn ai được nữa.
                  </p>
                  <h4>Jormungandr</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/20/fe2-16241656955801260983443.png"
                    alt="3, THẦN LỪA LỌC LOKI,BOX LOKI,TRAILER LOKI,LADY LOKI,PHẢN DIỆN LOKI,BIẾN THỂ CỦA LOKI,SERIES LOKI,NHÂN VẬT MỚI TRONG LOKI,BIẾN THỂ LOKI,"
                    note=""
                  />
                  <p>
                    Sau Fenrir, Jormungandr có lẽ là quái vật nổi tiếng nhất
                    Thần Thoại Bắc Âu. Jormungandr được mô tả là cực kì to lớn
                    và là đại diện của sự hỗn loạn. Nó có thể cuốn quanh cả thế
                    giới và ngậm được cái đuôi của mình Con rắn khổng lồ này vô
                    cùng mạnh mẽ. Nó từng đánh bại Thor đến 8 lần, khiến các vị
                    thần khác cũng kinh sợ và không dám đối mặt với nó.
                  </p>
                  <p>
                    Trong Ragnarok, Jormungandr và Thor đã có một trận tử chiến
                    cuối cùng. Dù giết được con đại xà, Thor cũng nhanh chóng
                    chết sau 9 bước chân bởi độc tố từ máu Jormungandr tiết ra.
                  </p>
                  <h4>Hel</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/20/fe3-16241656999262045895071.jpg"
                    alt="4, THẦN LỪA LỌC LOKI,BOX LOKI,TRAILER LOKI,LADY LOKI,PHẢN DIỆN LOKI,BIẾN THỂ CỦA LOKI,SERIES LOKI,NHÂN VẬT MỚI TRONG LOKI,BIẾN THỂ LOKI,"
                    note=""
                  />
                  <p>
                    Hel hay Hela là đứa con thứ ba của Loki (trong MCU, Hela là
                    chị cả của Thor và Loki). Hel là đại diện của cái chết, là
                    chủ của nơi được xem là "địa ngục". Vị nữ thần này chỉ huy
                    một đội quân người chết vô cùng hùng mạnh và máu chiến, sẵn
                    sàng đưa bất cứ ai xuống địa ngục.
                  </p>
                  <h4>Narfi và Vali</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/20/fe4-1624165705330242129806.jpg"
                    alt="5, THẦN LỪA LỌC LOKI,BOX LOKI,TRAILER LOKI,LADY LOKI,PHẢN DIỆN LOKI,BIẾN THỂ CỦA LOKI,SERIES LOKI,NHÂN VẬT MỚI TRONG LOKI,BIẾN THỂ LOKI,"
                    note=""
                  />
                  <p>
                    Narfi và Vali là hai người con của Loki và Sigyn. Khác với
                    ba anh chị lớn, Narfi và Vali khá hiền lành. Tuy vậy, sau
                    cái chết của thần Baldur, các vị thần Aesir đã quyết định
                    trừng phạt Loki bằng cách biến Vali thành một con sói cuồng
                    nộ chỉ sống với mục tiêu giết Narfi. Một câu chuyện thật
                    buồn khi mà 2 người con này lại tìm cách tiêu diệt lẫn nhau.
                  </p>
                  <h4>Sleipnir</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/20/fe5-162416570970852961903.jpg"
                    alt="6, THẦN LỪA LỌC LOKI,BOX LOKI,TRAILER LOKI,LADY LOKI,PHẢN DIỆN LOKI,BIẾN THỂ CỦA LOKI,SERIES LOKI,NHÂN VẬT MỚI TRONG LOKI,BIẾN THỂ LOKI,"
                    note=""
                  />
                  <p>
                    Sleipnir là một đứa con ngoài kế hoạch của Loki. Khi xây
                    dựng Valhalla, các vị thần đã thuê một người thợ thủ công
                    về, rồi ra điều kiện rằng sẽ "trả lương" cho anh nếu anh
                    hoàn thành cung điện trong một mùa (khoảng 3 tháng) mà không
                    cần ai trợ giúp. Người thợ thủ công nghe vậy dốc toàn lực
                    làm việc. Đến ngày cuối cùng, các vị thần nhận ra anh ta đã
                    sắp xong việc, bèn nghĩ cách để "quỵt tiền".
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Thế là họ mới cử Loki, người rất phù hợp để đi phá hoại.
                    Loki suy nghĩ một lúc mới nghĩ ra mưu kế cực hay. Ông biến
                    thành một con ngựa cái, dụ con ngựa của thợ thủ công là
                    Svadilfari vào rừng rồi quan hệ với nó. Kế quả thì các vị
                    thần đạt được mục đích, còn Loki thì mang thai rồi đẻ ra
                    ngựa chiến 8 chân Sleipnir. Về sau, Sleipnir trở thành thú
                    cưỡi cho ông nội của mình là Odin và cũng là một quái vật
                    đáng sợ.
                  </p>
                  <p>
                    Trên đây là những thông tin về 6 đứa con của "Thần Điêu Đại
                    Bịp" Loki, đứa là quái vật kẻ thì chấp cả Thor. Các bạn yêu
                    thích cái tên nào nhất, hãy để lại ý kiến của mình nhé!
                  </p>
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
