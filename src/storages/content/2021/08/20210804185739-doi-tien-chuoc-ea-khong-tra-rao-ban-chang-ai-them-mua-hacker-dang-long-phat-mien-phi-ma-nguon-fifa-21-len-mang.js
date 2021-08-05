import React from "react";
import "components/page.scss";
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
"timestamp": '04/08/2021 06:57 PM',
"title": 'Đòi tiền chuộc EA không trả, rao bán chẳng ai thèm mua, hacker đắng lòng phát miễn phí mã nguồn FIFA 21 lên mạng',
"description": 'Sau nỗ lực tống tiền EA và rao bán chợ đen thất bại, hacker bất lực phát tán mã nguồn FIFA 21 cho ai dùng thì dùng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-162801406573018726064.jpg',
"alt": 'FIFA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,HACKER,DỮ LIỆU,',
"category": 'tech',
"date": '04/08/2021',
"time": '06:57 PM',
"link": '/doi-tien-chuoc-ea-khong-tra-rao-ban-chang-ai-them-mua-hacker-dang-long-phat-mien-phi-ma-nguon-fifa-21-len-mang',
"zcomponent": 'page_20210804185739',
"filepath": './20210804185739-doi-tien-chuoc-ea-khong-tra-rao-ban-chang-ai-them-mua-hacker-dang-long-phat-mien-phi-ma-nguon-fifa-21-len-mang.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  "Đòi tiền chuộc EA không trả, rao bán chẳng ai thèm mua, hacker đắng lòng phát miễn phí mã nguồn FIFA 21 lên mạng";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "04/08/2021 06:57 PM";
const description =
  "Sau nỗ lực tống tiền EA và rao bán chợ đen thất bại, hacker bất lực phát tán mã nguồn FIFA 21 cho ai dùng thì dùng.";
const link =
  "doi-tien-chuoc-ea-khong-tra-rao-ban-chang-ai-them-mua-hacker-dang-long-phat-mien-phi-ma-nguon-fifa-21-len-mang";
const tagparam = [
  "FIFA",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
  "HACKER",
  "DỮ LIỆU",
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

export default function page_20210804185739() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Dành cho những bạn nào chưa biết thì cách đây vài tuần có
                      một nhóm <strong>hacker</strong> đã đánh cắp mã nguồn{" "}
                      <strong>FIFA</strong> 21 của EA. Tuy nhiên, dựa theo bài
                      báo cáo của trang Record thì do không chỉ thất bại trong
                      việc tống tiền EA mà khi rao bán ở chợ đen cũng chẳng ai
                      thèm mua nên nhóm hacker này đành phải phát tán hết mã
                      nguồn này lên trên mạng.
                    </p>
                    <p>
                      Cụ thể thì từ ngày 10 tháng 6 vừa qua, những tên tin tặc
                      này đòi EA mức tiền chuộc là 28 triệu đô la cho mã nguồn{" "}
                      <strong>FIFA</strong> 21 nặng 780GB mà bọn chúng đã đánh
                      cắp được. Qua điều tra, nhóm tin tặc lấy cắp{" "}
                      <strong>dữ liệu</strong> bằng cách thâm nhập vào ứng dụng
                      nhắn tin nội bộ Slack của EA thông qua việc mua và sử dụng
                      các cookies bị đánh cắp được bán trên mạng. Các cookies
                      này chứa thông tin đăng nhập của người dùng EA truy cập
                      vào Slack, chính vì thế mà việc sở hữu các cookies này có
                      thể khiến bất cứ ai cũng có thể đăng nhập vào kênh Slack
                      nội bộ của EA.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-162801406573018726064.jpg"
                      alt="1, FIFA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,HACKER,DỮ LIỆU,"
                      note=""
                    />
                    <p>
                      Xui xẻo thay, cứ ngỡ là vớ được mỏ vàng vì nghĩ rằng EA sẽ
                      không muốn mã nguồn của <strong>FIFA</strong> 21 bị lộ ra
                      ngoài, nhưng không! EA đã từ chối thẳng thừng và tuyên bố
                      không trả một xu nào cho bọn tin tặc vì những gì mà bọn
                      chúng đánh cắp được không hề chứa các{" "}
                      <strong>dữ liệu</strong> nhạy cảm như thông tin đăng nhập
                      của người dùng.{" "}
                    </p>
                    <p>
                      Bể mộng tập 1, nhóm tin tặc bèn bày cách khác là rao bán
                      mã nguồn trên chợ đen để tìm kiếm người mua. Tuy nhiên,
                      chưa nằm mơ được bao lâu thì vỡ mộng tập 2 do chẳng có ma
                      nào thèm mua những <strong>dữ liệu</strong> mà không chứa
                      bất kỳ thông tin nhạy cảm nào. Và thế là hành động phạm
                      pháp đáng lẽ có thể khiến cho danh tiếng cả nhóm bay xa
                      thì lại trở thành một hành động vô giá trị chẳng ai thèm
                      ngó. Đã vậy EA còn tuyên bố tích cực hợp tác với các cơ
                      quan pháp luật và chuyên gia để điều tra cụ thể sự việc
                      này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280140676121686574311.jpg"
                      alt="2, FIFA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,HACKER,DỮ LIỆU,"
                      note=""
                    />
                    <p>
                      Bước đường cùng đã khiến cho nhóm tin tặc đành phát tán
                      các mã nguồn của <strong>FIFA</strong> 21 lên mạng cho ai
                      muốn dùng thì dùng. Điều này dẫn đến kết quả là mọi người
                      có thể sử dụng đoạn mã này để chơi FIFA 21 trên server
                      riêng của họ mà không cần sự đồng ý của EA. Bên cạnh đó,
                      EA tuyên bố là không có <strong>dữ liệu</strong> người
                      dùng nào bị lấy mất và công ty đã áp dụng biện pháp bảo
                      mật bổ sung để đảm bảo tình trạng này không xảy ra một lần
                      nào nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-2-16280140681201351811810.jpg"
                      alt="3, FIFA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,HACKER,DỮ LIỆU,"
                      note=""
                    />
                    <p>Tóm tắt:</p>
                    <p>
                      - Vào ngày 10 tháng 6, một nhóm tin tặc đã đánh cắp mã
                      nguồn <strong>FIFA</strong> 21 và đòi tiền chuộc EA là 28
                      triệu USD.
                    </p>
                    <p>
                      - Chúng đánh cắp bằng cách sử dụng các cookies chứa thông
                      tin của người dùng EA và bán trên mạng để đăng nhập vào
                      kênh nhắn tin nội bộ trong ứng dụng Slack của EA.
                    </p>
                    <p>
                      - Xui xẻo thay, EA từ chối chi trả dù chỉ là 1 xu do{" "}
                      <strong>dữ liệu</strong> bị đánh cắp không hề chưa bất kỳ
                      thông tin quan trọng nào của người dùng cả.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      - Thế là nhóm tin tặc bèn bày cách rao bán mã nguồn trên
                      chợ đen để tìm kiếm người mua, nhưng chả có ai thèm mua do
                      nó không hề chứa bất kỳ thông tin quan trọng nào.
                    </p>
                    <p>
                      - Bước đường cùng, nhóm tin tặc đành phát tán mã nguồn của{" "}
                      <strong>FIFA</strong> 21 lên mạng.
                    </p>
                    <p>
                      - Điều này dẫn đến kết quả là mọi người có thể sử dụng
                      đoạn mã này để chơi <strong>FIFA</strong> 21 trên server
                      riêng mà không cần phải thông qua EA.
                    </p>
                    <p>Nguồn tomshardware biên dịch GVN360</p>
                  </div>
                  <AdsHorizontal />
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
