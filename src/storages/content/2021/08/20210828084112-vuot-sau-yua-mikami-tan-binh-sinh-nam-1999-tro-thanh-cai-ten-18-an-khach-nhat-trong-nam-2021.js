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
"timestamp": '28/08/2021 08:41 AM',
"title": 'Vượt sâu Yua Mikami, tân binh sinh năm 1999 trở thành cái tên 18+ ăn khách nhất trong năm 2021',
"description": 'Sau 3 tháng kể từ ngày trở lại, Saika Kawakita vẫn tiếp tục "kiến tạo" nên những kỷ lục mới.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/24/photo-1-1629789465491316997920.jpeg',
"alt": 'SAIKA KAWAKITA,IDOL,',
"category": 'images',
"date": '28/08/2021',
"time": '08:41 AM',
"link": '/vuot-sau-yua-mikami-tan-binh-sinh-nam-1999-tro-thanh-cai-ten-18-an-khach-nhat-trong-nam-2021',
"zcomponent": 'page_20210828084112',
"filepath": './20210828084112-vuot-sau-yua-mikami-tan-binh-sinh-nam-1999-tro-thanh-cai-ten-18-an-khach-nhat-trong-nam-2021.js'
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
  "Vượt sâu Yua Mikami, tân binh sinh năm 1999 trở thành cái tên 18+ ăn khách nhất trong năm 2021";
const author = "DS";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:41 AM";
const description =
  'Sau 3 tháng kể từ ngày trở lại, Saika Kawakita vẫn tiếp tục "kiến tạo" nên những kỷ lục mới.';
const link =
  "vuot-sau-yua-mikami-tan-binh-sinh-nam-1999-tro-thanh-cai-ten-18-an-khach-nhat-trong-nam-2021";
const tagparam = ["SAIKA KAWAKITA", "IDOL"];
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

export default function page_20210828084112() {
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
                      Mỗi năm, ngành công nghiệp AV Nhật Bản lại đón nhận thêm
                      hàng nghìn những cô nàng diễn viên mới. Ai trong số họ
                      cũng đều mơ ước sẽ trở thành những ngôi sao mới. với ước
                      mơ giàu sang, danh vọng. Nhưng thực tế đôi khi lại khắc
                      nghiệt, khi mà theo thống kê, có khoảng 1/3 những cô nàng
                      tân binh thậm chí còn chẳng thể trụ được hết một năm đầu
                      mà đã vội vàng xin rút hoặc bị đào thải. Dù vậy, vẫn có
                      những cái tên sẵn sàng quay trở lại con đường cũ sau khi
                      rút lui, và một trong số đó là{" "}
                      <strong>Saika Kawakita</strong>, cô gái sinh năm 1999.
                    </p>
                    <p>
                      <strong>Saika Kawakita</strong> không phải là cái tên mới
                      lạ tại S1, ít nhất là như thế. Vào tháng 4/2018, cô gái
                      này chính thức trình làng và ngay lập tức có được những
                      thành tích khả quan - leo top 1 bảng xếp hạng với sản phẩm
                      đầu tay, hạng 4 với phim thứ 2 ngay trong 2 tháng đầu
                      tiên.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/24/photo-1-1629789465491316997920.jpeg"
                      alt="1, SAIKA KAWAKITA,IDOL,"
                      note=""
                    />

                    <p>
                      Cuối năm 2018, cô nàng còn lọt vào bảng xếp hạng của năm
                      khi có tên trong top 10, sánh ngang với các đàn chị nổi
                      tiếng. Đây là điều hiếm có tân binh nào làm được. Dù vậy,
                      cô nàng biến mất sau 6 phim, khiến nhiều người nghĩ rằng,
                      đây lại là một trường hợp kiếm tiền chớp nhoáng rồi biến
                      mất như rất nhiều cô gái khác.
                    </p>
                    <p>
                      Tuy nhiên, thành tích của Saika vẫn được ghi nhận. Tại lễ
                      trao giải Fanza Adult Award 2019, còn gọi là "Oscar phim
                      người lớn", dù đã biến mất,{" "}
                      <strong>Saika Kawakita</strong> vẫn ghi được dấu ấn. Trong
                      3 giải thưởng nhỏ dành cho các sản phẩm chạy nhất, Saika
                      Kawakita giành được 2, suất còn lại thuộc về Suzu Honjo
                      của SOD Stars. Nhiều người còn cho rằng, nếu Saika không
                      giải nghệ thì cô chắc chắn có giải thưởng năm đó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/-162979129334738663249.jpg"
                      alt="2, SAIKA KAWAKITA,IDOL,"
                      note=""
                    />

                    <p>
                      Đến năm 2021, <strong>Saika Kawakita</strong> bất ngờ đưa
                      ra thông báo trở lại. Hãng phim cũ của cô cũng chẳng từ
                      chối mà còn sẵn sàng tăng tiền quảng bá cho cô gái này để
                      đạt được mục tiêu lợi nhuận cần thiết. Chỉ trong vòng 72
                      tiếng kể từ khi có thông báo trở lại, cô nàng sinh năm
                      1999 đã ngay lập tức leo lên top 1, sánh vai cạnh Yua
                      Mikami.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau 3 tháng kể từ ngày trở lại,{" "}
                      <strong>Saika Kawakita</strong> vẫn tiếp tục "kiến tạo"
                      nên những kỷ lục mới. Trên các nền tảng chuyên bán sản
                      phẩm 18+, sự xuất hiện trở lại Saika sau 2 năm trời biến
                      mất đã có những con số thống kê rất rất ấn tượng. Sản phẩm
                      của cô nàng sinh năm 1999 nhận được tới 43 nghìn lượt bình
                      chọn yêu thích, gấp khoảng 4 lần so với những tân binh ra
                      mắt cùng thời điểm.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/-1629791331743114172392.jpg"
                      alt="3, SAIKA KAWAKITA,IDOL,"
                      note=""
                    />

                    <p>
                      Về cơ bản, đây là một con số rất cao, thậm chí là nếu so
                      sánh với các đàn chị trong nghề. Một cái tên nổi tiếng
                      khác khi quay lại là Rara Anzai (hay còn được biết với cái
                      tên RION) cũng chỉ đạt được con số 34 nghìn lượt bình
                      chọn, còn một tân binh nổi tiếng khác trong năm 2020 là
                      Aka Asuka cũng chỉ đạt tới con số 39 nghìn.{" "}
                    </p>
                    <p>
                      {" "}
                      Bên cạnh đó, Saika còn nhận được vô số lời khen từ các fan
                      hâm mộ của cô nàng lẫn lượt bình chọn trên các nền tảng
                      18+. Thế nên, sẽ không có gì quá lạ lẫm nếu như{" "}
                      <strong>Saika Kawakita</strong> sẽ tiếp tục nằm trên top
                      đầu của làng AV trong năm 2021 và nhiều khả năng sẽ là tân
                      binh AV đáng chú ý nhất trong năm 2021 này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/-16297913716691104661239.jpg"
                      alt="4, SAIKA KAWAKITA,IDOL,"
                      note=""
                    />

                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
