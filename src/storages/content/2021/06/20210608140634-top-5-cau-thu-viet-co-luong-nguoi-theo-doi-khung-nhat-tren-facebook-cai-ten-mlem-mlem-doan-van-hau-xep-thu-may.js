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
"timestamp": 08/06/2021 02:06 PM",
"title": Top 5 cầu thủ Việt có lượng người theo dõi khủng nhất trên Facebook, cái tên 'mlem mlem' Đoàn Văn Hậu xếp thứ mấy?",
"description": Sau trận thắng 4-0 trước đội tuyển Indonesia, Facebook các cầu thủ Việt Nam được nhiều người chú ý đến, thấp nhất cũng được cả triệu người follow!",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16231527937981291522408.jpg",
"alt": Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, ",
"category": news",
"date": 08/06/2021",
"time": 02:06 PM",
"link": "/top-5-cau-thu-viet-co-luong-nguoi-theo-doi-khung-nhat-tren-facebook-cai-ten-mlem-mlem-doan-van-hau-xep-thu-may",
"zcomponent": page_20210608140634",
"filepath": ./20210608140634-top-5-cau-thu-viet-co-luong-nguoi-theo-doi-khung-nhat-tren-facebook-cai-ten-mlem-mlem-doan-van-hau-xep-thu-may.js"
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
  "Top 5 cầu thủ Việt có lượng người theo dõi khủng nhất trên Facebook, cái tên 'mlem mlem' Đoàn Văn Hậu xếp thứ mấy?";
const author = "NAI,";
const source = "Trí Thức Trẻ";
const timestamp = "08/06/2021 02:06 PM";
const description =
  "Sau trận thắng 4-0 trước đội tuyển Indonesia, Facebook các cầu thủ Việt Nam được nhiều người chú ý đến, thấp nhất cũng được cả triệu người follow!";
const link =
  "top-5-cau-thu-viet-co-luong-nguoi-theo-doi-khung-nhat-tren-facebook-cai-ten-mlem-mlem-doan-van-hau-xep-thu-may";
const tagparam = [
  "doi-tuyen-viet-nam",
  "cau-thu-viet-nam",
  "vong-loai-world-cup",
  "world-cup-2022",
  "nguyen-quang-hai",
  "luong-xuan-truong",
  "doan-van-hau",
  "cong-phuong",
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

export default function page_20210608140634() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div id="grad1"></div>
                <div className="contentBody">
                  <p>
                    Đêm ngày 7/6, đội tuyển Việt Nam chính thức giành chiến
                    thắng 4-0 trước đội tuyển Indonesia trong khuôn khổ vòng
                    loại <strong>World Cup 2022</strong>. Chiến thắng này đến từ
                    sự nỗ lực kiên trì của các cầu thủ và ban huấn luyện. Ngay
                    khi trận cầu kết thúc, Facebook của nhiều cầu thủ giống như
                    "vỡ trận" khi ngập trong hàng nghìn lời chúc mừng đến từ
                    người dân trên cả nước. Người theo dõi Facebook của các cầu
                    thủ trong đội tuyển Việt Nam cũng tăng lên đáng kể.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Dưới đây là 5 cầu thủ Việt Nam hiện đang có mặt trong đội
                    tuyển tham gia thi đấu vòng loại World Cup có lượng người
                    theo dõi khủng nhất thời điểm hiện tại.
                  </p>
                  <p>
                    Bùi Tiến Dũng (thủ môn) gặt hái được một lượng lớn người hâm
                    mộ vào thời điểm năm 2018 sau chiến thắng oanh liệt ở Thường
                    Châu. Sau đó, với lượng theo dõi tăng chóng mặt trên các
                    trang mạng xã hội, Bùi Tiến Dũng trở thành gương mặt quảng
                    cáo được nhiều thương hiệu săn đón.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16231715178532036634647.jpg"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note="Bùi Tiến Dũng - thủ môn ngày nào nhận được sự chú ý đông đảo của fan hâm mộ bóng đá"
                  />
                  <p>
                    Rất tiếc, trong đội hình được gọi lên tuyển quốc gia năm
                    nay, huấn luyện viên Park Hang-seo đã không gọi tên nam cầu
                    thủ này vì những thể hiện trên sân bóng không được tốt của
                    anh suốt thời gian qua. Nhiều người dần quên vị trí của một
                    thủ môn trên khung thành tuyết trắng năm xưa, thứ người ta
                    còn nhớ ở Bùi Tiến Dũng chính là những chiếc siêu xe hạng
                    sang, quần áo bóng bẩy và những mối tình với các bóng hồng
                    mà thôi.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16231715717901862578240.jpg"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note="Bùi Tiến Dũng dẫn đầu với 3 triệu người theo dõi trên Facebook cá nhân"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/anh-chup-man-hinh-2021-06-08-luc-235947-1623171612926585784177.png"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note=""
                  />
                  <p>
                    Quang Hải là người ghi bàn thắng thứ 2, nâng tỉ số trận đấu
                    lên 2-0 cực kỳ căng thẳng. Mặc cho đời tư có nhiều drama,
                    nhưng không ai có thể phủ nhận tài năng của Quang Hải trên
                    sân bóng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16231517517642057516997.jpg"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note="Nguyễn Quang Hải thể hiện tốt vào trận đấu đêm 7/6"
                  />
                  <p>
                    Trận đấu nhiều dấu ấn ở Thường Châu năm 2018 với siêu phẩm
                    cầu vồng khiến cái tên Quang Hải được nhiều người biết đến.
                    Anh đang có hơn 2,3 triệu người theo dõi trên Facebook cá
                    nhân với lượng tương tác cực khổng lồ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/anh-chup-man-hinh-2021-06-08-luc-182925-16231520828561453678092.png"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note="Facebook cá nhân của Quang Hải"
                  />
                  <p>
                    Hà Đức Chinh là một cái tên quen thuộc trong hàng ngũ cầu
                    thủ của đội tuyển Việt Nam. Mặc dù trận đấu với Indonesia,
                    Đức Chinh chưa có cơ hội vào sân để toả sáng tuy nhiên chàng
                    trai này vẫn là một trong những cái tên "hút" follow nhất.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/anh-chup-man-hinh-2021-06-08-luc-183425-16231520828411724151760.png"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note="Hà Đức Chinh được nhiều người yêu quý nhờ sự hài hước ngoài sân bóng"
                  />
                  <p>
                    Đức Chinh được nhiều người yêu quý vì sự tinh nghịch, hài
                    hước ngoài sân cỏ, anh chàng đang có hơn 1,7 triệu người
                    theo dõi trên Facebook cá nhân.
                  </p>
                  <p>
                    Xếp ở vị trí thứ 4 là hậu vệ Đỗ Duy Mạnh. Sau 3 cái tên đều
                    là tiền đạo, hậu vệ Đỗ Duy Mạnh chính là một trong những
                    trung vệ chơi tốt, ổn định trên sân bóng, nhận được nhiều sự
                    chú ý của người hâm mộ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/anh-chup-man-hinh-2021-06-08-luc-184023-1623152466643986056893.png"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note=""
                  />
                  <p>
                    Nổi tiếng sau trận bóng ở Thường Châu, Đỗ Duy Mạnh được
                    nhiều fangirl nhắm đến, tuy nhiên anh chàng đã có mối tình
                    đẹp với người hiện tại là vợ anh, con gái của cựu chủ tịch
                    CLB bóng đá Sài Gòn FC. Duy Mạnh lúc này ghi điểm cực cao
                    khi chuẩn vai người bạn trai, người chồng quốc dân. Trang
                    Facebook cá nhân của Duy Mạnh đang có hơn 1,6 triệu người
                    theo dõi.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16231524111781172703040.jpg"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note="Mối tình đẹp của hậu vệ Đỗ Duy Mạnh"
                  />
                  <p>
                    Đoàn Văn Hậu từng là "cậu út" được cưng chiều nhất đội tuyển
                    Việt Nam. Đêm qua trong trận đấu, dù không hề ghi bàn hay
                    toả sáng, song sức hút của Văn Hậu là điều không thể bàn
                    cãi.
                  </p>
                  <p>
                    Vào phút 79 của hiệp 2, ngay sau khi vào sân, cái tên Đoàn
                    Văn Hậu đã ngay lập tức leo lên top 2 Google Search tại Việt
                    Nam, chứng tỏ sức hút không thể chối cãi từ đến từ vị trí
                    của Đoàn Văn Hậu. Dù chỉ có cơ hội thể hiện mình trong 10
                    phút cuối cùng của trận đấu nhưng Đoàn Văn Hậu vẫn khiến cả
                    mạng xã hội bùng nổ vì vẻ ngoài cực điển trai, thân hình đã
                    có nhiều cải thiện, cơ bắp hiện rõ, rắn rỏi hơn vào lần quay
                    lại này.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16231527937981291522408.jpg"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note='Nhiều fangirl đang "lăm le" tấn công Facebook chàng hậu vệ
                    này, anh chàng đang có hơn 1,5 triệu người theo dõi.'
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/anh-chup-man-hinh-2021-06-08-luc-174213-1623152811202994917130.png"
                    alt="Doi Tuyen Viet Nam, Cau Thu Viet Nam, Vong Loai World Cup, World Cup 2022, Nguyen Quang Hai, Luong Xuan Truong, Doan Van Hau, Cong Phuong, "
                    note="Facebook của anh có hơn 1,5 triệu người theo dõi, xếp cuối trên bảng xếp hạng này"
                  />
                </div>
                <p>
                  *Bảng xếp hạng dựa trên số liệu từ Facebook cá nhân (không
                  tính fanpage) của các cầu thủ Việt Nam hiện nay.
                </p>
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
