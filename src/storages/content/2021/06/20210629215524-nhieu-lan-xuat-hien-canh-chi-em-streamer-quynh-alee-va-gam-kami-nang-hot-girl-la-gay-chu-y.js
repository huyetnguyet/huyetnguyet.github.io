import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/06/2021 09:55 PM',
"title": 'Nhiều lần xuất hiện cạnh chị em streamer Quỳnh Alee và Gấm Kami, nàng hot girl lạ gây chú ý',
"description": 'Cô nàng gây chú ý bởi nhan sắc như búp bê, nhiều người tò mò không biết đây có phải nữ streamer mới nổi?',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215524--11-35378.jpeg',
"alt": 'STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,',
"category": 'stars',
"date": '29/06/2021',
"time": '09:55 PM',
"link": '/nhieu-lan-xuat-hien-canh-chi-em-streamer-quynh-alee-va-gam-kami-nang-hot-girl-la-gay-chu-y',
"zcomponent": 'page_20210629215524',
"filepath": './20210629215524-nhieu-lan-xuat-hien-canh-chi-em-streamer-quynh-alee-va-gam-kami-nang-hot-girl-la-gay-chu-y.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Nhiều lần xuất hiện cạnh chị em streamer Quỳnh Alee và Gấm Kami, nàng hot girl lạ gây chú ý";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:55 PM";
const description =
  "Cô nàng gây chú ý bởi nhan sắc như búp bê, nhiều người tò mò không biết đây có phải nữ streamer mới nổi?";
const link =
  "nhieu-lan-xuat-hien-canh-chi-em-streamer-quynh-alee-va-gam-kami-nang-hot-girl-la-gay-chu-y";
const tagparam = ["STREAMER", "QUỲNH ALEE", "GẤM KAMI", "HOT GIRL", "GÁI XINH"];
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

export default function page_20210629215524() {
  return (
    <>
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
                    <strong>Quỳnh Alee</strong> và <strong>Gấm Kami</strong> là
                    cặp chị em <strong>streamer</strong> được nhiều người yêu
                    thích. Sở hữu những điểm mạnh khác nhau nhưng khi hợp tác
                    làm clip chung, cả hai khiến người xem không ngừng cười với
                    những trò troll lầy lội.{" "}
                  </p>{" "}
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--10-00122.jpeg")
                        .default
                    }
                    alt="1, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note="Cô nàng cổ vũ cho đội bóng đá nước Pháp."
                  />
                  <p>
                    Thường xuyên xuất hiện cạnh cặp đôi này, nàng{" "}
                    <strong>hot girl</strong> lạ khiến nhiều anh em chú ý, cư
                    dân mạng thắc mắc không biết đây có phải nữ{" "}
                    <strong>streamer</strong> mới nổi nào không?
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--11-35378.jpeg")
                        .default
                    }
                    alt="2, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--12-35783.jpeg")
                        .default
                    }
                    alt="3, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <p>
                    Được biết, cô nàng là Lê Thị Linh Chi (2001) sinh ra và lớn
                    lên ở Nam Định, hiện đang sinh sống và học tập tại Hà Nội,
                    theo học tại trường Đào tạo Quốc tế Unidesign.
                  </p>
                  <p>
                    Sở hữu ngoại hình sáng, gương mặt khả ái, đôi mắt biết cười,
                    màu tóc bạch kim và phong cách thời trang cá tính, Linh Chi
                    nhanh chóng trở thành “mẫu ruột” của nhiều nhãn hàng thời
                    trang và nhiếp ảnh gia tại Hà Nội.{" "}
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--13-80993.jpeg")
                        .default
                    }
                    alt="4, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <p>
                    Không chỉ vậy, cô còn được biết đến là một hot TikToker với
                    hàng loạt video có nội dung sáng tạo, bắt trend cực nhanh.
                    Với mỗi video đăng tải, cô bạn luôn nhận được hàng trăm
                    nghìn lượt yêu thích và bình luận từ cộng đồng mạng.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Mới đây, cô nàng này cũng gây “sốt” với bộ ảnh cổ vũ các cầu
                    thủ Việt Nam ở vòng loại World Cup, đáng chú ý là gương mặt
                    xinh như búp bê, đôi mắt to tròn và làn da trắng mịn. Được
                    biết, Linh Chi có một niềm đam mê cháy bỏng với bóng đá, cô
                    còn là một trong những cổ động viên nổi bật cho đội tuyển
                    Pháp tại Euro 2021, fan cuồng nhiệt của Mbappe.
                  </p>
                  <p>Linh Chi cá tính, năng động trong trang phục thể thao.</p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--14-14543.jpeg")
                        .default
                    }
                    alt="5, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--15-21570.jpeg")
                        .default
                    }
                    alt="6, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--16-51221.jpeg")
                        .default
                    }
                    alt="7, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--17-21466.jpeg")
                        .default
                    }
                    alt="8, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <p>
                    Nhờ sự nhiệt huyết và nỗ lực không ngừng nghỉ, chỉ trong một
                    thời gian ngắn gia nhập TikTok, Linh chi đã nhận được hơn 2
                    triệu lượt theo dõi và trở thành một trong những gương mặt
                    TikToker nổi bật. Không chỉ vậy, trên kênh YouTube cá nhân,
                    cô bạn cũng thu hút được cả trăm nghìn lượt theo dõi.{" "}
                  </p>
                  <p>Linh Chi cũng sexy không kém các chị em của mình. </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--18-38946.jpeg")
                        .default
                    }
                    alt="9, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215524--19-84129.jpeg")
                        .default
                    }
                    alt="10, STREAMER,QUỲNH ALEE,GẤM KAMI,HOT GIRL,GÁI XINH,"
                    note=""
                  />
                  <p>
                    Với sự động viên từ những người yêu mến, 10X cảm thấy tự tin
                    và có thêm nguồn động lực để sáng tạo ra nhiều video chất
                    lượng hơn.
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
