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
"timestamp": '28/08/2021 08:46 AM',
"title": 'Sau tất cả scandal tai tiếng, streamer Chi Củ Cải xuất hiện như thiên thần, an yên chào đón tuổi mới',
"description": 'Nữ streamer lựa chọn một bộ váy trắng thanh khiết đón sinh nhật giản dị giữa mùa dịch.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-3-163007302287994575510.png',
"alt": 'streamer,Vũ Ngọc Kim Chi,hot girl Hải Phòng,ảnh nhạy cảm,',
"category": 'images',
"date": '28/08/2021',
"time": '08:46 AM',
"link": '/sau-tat-ca-scandal-tai-tieng-streamer-chi-cu-cai-xuat-hien-nhu-thien-than-an-yen-chao-don-tuoi-moi',
"zcomponent": 'page_20210828084633',
"filepath": './20210828084633-sau-tat-ca-scandal-tai-tieng-streamer-chi-cu-cai-xuat-hien-nhu-thien-than-an-yen-chao-don-tuoi-moi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Sau tất cả scandal tai tiếng, streamer Chi Củ Cải xuất hiện như thiên thần, an yên chào đón tuổi mới";
const author = "KAYLE,";
const source =
  "http://ttvn.toquoc.vn/sau-tat-ca-scandal-tai-tieng-streamer-chi-cu-cai-xuat-hien-nhu-thien-than-an-y";
const timestamp = "28/08/2021 08:46 AM";
const description =
  "Nữ streamer lựa chọn một bộ váy trắng thanh khiết đón sinh nhật giản dị giữa mùa dịch.";
const link =
  "sau-tat-ca-scandal-tai-tieng-streamer-chi-cu-cai-xuat-hien-nhu-thien-than-an-yen-chao-don-tuoi-moi";
const tagparam = [
  "streamer",
  "Vũ Ngọc Kim Chi",
  "hot girl Hải Phòng",
  "ảnh nhạy cảm",
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

export default function page_20210828084633() {
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
                      Nữ <strong>streamer</strong> lựa chọn một bộ váy trắng
                      thanh khiết đón sinh nhật giản dị giữa mùa dịch.
                    </p>
                    <p>
                      Hai năm liên tiếp vướng vào lùm xùm liên quan đến lộ{" "}
                      <strong>ảnh nhạy cảm</strong> (đầu năm 2020 và vụ lộ link
                      40GB hồi 7/2021), nữ <strong>streamer</strong> Chi Củ Cải
                      (<strong>Vũ Ngọc Kim Chi</strong>) ít nhiều cũng bị ảnh
                      hưởng đến công việc cũng như cuộc sống. Dù đã cứng cáp hơn
                      nhiều, đối mặt với scandal không còn quá hoảng loạn thế
                      nhưng chuỗi ngày sau sự cố vẫn là nhiều khó khăn không nói
                      lên lời với cô gái nhỏ.
                    </p>
                    <p>
                      Nhất là thời điểm một tháng trước, khi ảnh hưởng nặng nề
                      do dịch COVID gây ra đã quá mệt mỏi thì những thông tin
                      tiêu cực chẳng khác gì một cú đẩy ngã chí mạng khiến nữ{" "}
                      <strong>streamer</strong> trượt dài trong khó khăn.
                    </p>
                    <p>
                      Thật may mắn khi Chi là một cô gái mạnh mẽ, lạc quan và
                      tích cực. Lấy lại tinh thần nhanh chóng, cô nàng từng bước
                      đối mặt với dư luận, nhắn nhủ đến những bạn nữ muốn theo
                      nghề đồng thời tự vực dậy tinh thần của bản thân.
                    </p>
                    <p>
                      Tính đến ngày hôm qua, ngày đặc biệt đối với cô gái sinh
                      năm 1999 này, khi cô chính thức đón sinh nhật chào tuổi
                      22. Trong dịp ý nghĩa, <strong>hot girl Hải Phòng</strong>{" "}
                      lựa chọn một chiếc váy trắng thanh khiết nhưng không kém
                      phần quyến rũ, buông xõa mái tóc đen và cài vương miện. Nở
                      nụ cười tươi rói, cô nàng khiến người xem cảm thấy an yên
                      và nhẹ nhàng. Những ai yêu mến Kim Chi cũng thở phào tạm
                      yên tâm cho nữ <strong>streamer</strong> sau chuỗi ngày
                      sống trong những chỉ trích nặng nề.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300730190151913174807.jpg"
                      alt="1, streamer,Vũ Ngọc Kim Chi,hot girl Hải Phòng,ảnh nhạy cảm,"
                      note="Nữ streamer đón sinh nhật giản dị"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-1630073022205716465980.jpg"
                      alt="2, streamer,Vũ Ngọc Kim Chi,hot girl Hải Phòng,ảnh nhạy cảm,"
                      note="Cô nàng mong muốn có thể xinh đẹp, vô tư và bình yên như khi 18 tuổi"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Sự “hồi phục” nhanh chóng này của nữ{" "}
                      <strong>streamer</strong> lý do một phần là cô nàng đã
                      được “buff” thêm sức mạnh từ gia đình. Từng chia sẻ với
                      truyền thông, Kim Chi tiết lộ chính gia đình là động lực
                      giúp cô lấy lại tinh thần, bình tĩnh đối diện với vấn đề
                      và tìm cách xử lý.
                    </p>
                    <p>
                      “Sở dĩ được tự do theo đuổi công việc mẫu ảnh sexy cũng là
                      nhờ có sự động viên của chính bố mẹ. Em được sinh ra trong
                      một gia đình có truyền thống nghệ thuật, bố mẹ em đều là
                      huấn luyện viên Dance sports khá có tiếng, do vậy bố mẹ em
                      không khắt khe như những phụ huynh khác. Tuy không thể
                      tiết lộ thêm về gia đình nhưng em chỉ muốn nói rằng em rất
                      tự hào về bố mẹ em”.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-2-1630073022505926220820.png"
                      alt="3, streamer,Vũ Ngọc Kim Chi,hot girl Hải Phòng,ảnh nhạy cảm,"
                      note="Dù có chuyện gì xảy ra đi nữa thì bố mẹ vẫn luôn tin tưởng và ở bên cô nàng"
                    />
                    <p>Ảnh: Internet</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-3-163007302287994575510.png"
                      alt="4, streamer,Vũ Ngọc Kim Chi,hot girl Hải Phòng,ảnh nhạy cảm,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-4-1630073023388709763333.jpg"
                      alt="5, streamer,Vũ Ngọc Kim Chi,hot girl Hải Phòng,ảnh nhạy cảm,"
                      note=""
                    />
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
