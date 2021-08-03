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
"timestamp": '29/06/2021 09:47 PM',
"title": 'Mặc quần bó sát, lộ cả chi tiết "tế nhị" khi khoe vòng ba đầy phản cảm, Lê Bống thêm một lần bị chỉ trích mạnh mẽ',
"description": 'Mọi hành động của Lê Bống bây giờ đều đang phải chịu rất nhiều đánh giá từ phía cộng đồng mạng.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,',
"category": 'images',
"date": '29/06/2021',
"time": '09:47 PM',
"link": '/mac-quan-bo-sat-lo-ca-chi-tiet-te-nhi-khi-kheo-vong-ba-day-phan-cam-le-bong-them-mot-lan-bi-chi-trich-manh-me',
"zcomponent": 'page_20210629214738',
"filepath": './20210629214738-mac-quan-bo-sat-lo-ca-chi-tiet-te-nhi-khi-kheo-vong-ba-day-phan-cam-le-bong-them-mot-lan-bi-chi-trich-manh-me.js'
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
  'Mặc quần bó sát, lộ cả chi tiết "tế nhị" khi khoe vòng ba đầy phản cảm, Lê Bống thêm một lần bị chỉ trích mạnh mẽ';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:47 PM";
const description =
  "Mọi hành động của Lê Bống bây giờ đều đang phải chịu rất nhiều đánh giá từ phía cộng đồng mạng.";
const link =
  "mac-quan-bo-sat-lo-ca-chi-tiet-te-nhi-khi-kheo-vong-ba-day-phan-cam-le-bong-them-mot-lan-bi-chi-trich-manh-me";
const tagparam = ["GÁI XINH", "HOT GIRL", "CỘNG ĐỒNG MẠNG", "LÊ BỐNG"];
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

export default function page_20210629214738() {
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
                      Là một trong những <strong>hot girl</strong>. TikToker
                      đình đám nhất ở thời điểm hiện tại,{" "}
                      <strong>Lê Bống</strong> hiện đang nhận được rất nhiều sự
                      quan tâm từ phía <strong>cộng đồng mạng</strong>. Cũng dễ
                      hiểu thôi, khi với lượng follow lên tới hàng triệu người
                      trên nhiều nền tảng, Lê Bống luôn khiến bản thân trở thành
                      tâm điển mỗi khi xuất hiện tại một sự kiện, hay đơn giản
                      hơn là chỉ với một vài tấm ảnh được nhá nhẹ. Tuy nhiên,
                      chính điều này đôi khi cũng khiến cho cô nàng hot girl gặp
                      vô số những rắc rối.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--10-643811.jpg")
                          .default
                      }
                      alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Lê Bống đang là một trong những hot girl, TikToker hàng đầu tại Việt Nam"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--11-036568.jpg")
                          .default
                      }
                      alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Kênh TikTok của Lê Bống hiện đang có hơn 6 triệu lượt follow"
                    />
                    <p>
                      Không ai phủ nhận cô nàng <strong>Lê Bống</strong> sở hữu
                      một thân hình siêu đẹp, gợi cảm và là ao ước của nhiều
                      người. Bất chấp những lời đồn đoán, nghi vấn về việc có
                      chỉnh sửa hay "hack ảnh", Lê Bống vẫn luôn kiên định theo
                      đuổi phong cách gợi cảm ở mọi lúc mọi nơi. Tuy nhiên,
                      chính điều này lại dẫn tới những rắc rối khó đỡ và quả
                      thật, không ít lần lỗi trang phục từ Lê Bống đã khiến cho
                      người xem phải chỉ trích về sự phản cảm. Bằng chứng là mới
                      đây, bộ ảnh mà cô nàng chụp sau khi vận động ở hồ Tây lại
                      càng khiến cho nhiều người phản ứng tiêu cực.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--12-534871.jpg")
                          .default
                      }
                      alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Những hình ảnh mới đây của cô nàng Lê Bống chụp ở hồ Tây"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--13-865124.jpg")
                          .default
                      }
                      alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Đang gặp phải rất nhiều những chỉ trích từ phía cộng đồng mạng"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--14-719276.jpg")
                          .default
                      }
                      alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Với những màn khoe vòng ba đầy phản cảm, thậm chí khiến nhiều người soi ra cả chi tiết tế nhị"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Diện một bộ trang phục siêu bó, từ áo tới quần, cô nàng{" "}
                      <strong>Lê Bống</strong> rất tự tin khi khoe vóc dáng với
                      số đo ba vòng chuẩn chỉnh của mình. Tuy nhiên, điều đáng
                      chú ý là trong nhiều kiểu ảnh, Lê Bống còn hồn nhiên, vô
                      tư phô diễn vòng ba của mình với các tư thế khá táo bạo.
                      Tất nhiên, hình ảnh này nhanh chóng nhận phải những gạch
                      đá trái chiều từ phía người xem. Một số người thậm chí còn
                      cho rằng Lê Bống đẹp, nhưng lại không biết thể hiện điều
                      này một cách khéo léo và những hình ảnh trên chỉ mang tới
                      sự phản cảm.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--15-142377.jpg")
                          .default
                      }
                      alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Không ai có thể phủ nhận được sự nóng bỏng và gợi cảm từ phía Lê Bống"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--16-759617.jpg")
                          .default
                      }
                      alt="7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Nhưng dường như cô nàng chưa biết thể hiện một cách khéo léo thì phải"
                    />
                    <p>
                      Thậm chí, một số người còn cho rằng trong những lần bị chỉ
                      trích trước đó, <strong>Lê Bống</strong> cũng không hoàn
                      toàn là người mắc lỗi, đôi lúc còn do{" "}
                      <strong>cộng đồng mạng</strong> có phần săm soi và hơi
                      nhạy cảm thái quá với phong cách gợi cảm của nàng{" "}
                      <strong>hot girl</strong>. Tuy nhiên, sau sự cố lần này,
                      gần như chẳng còn ai lên tiếng bênh vực cô nàng TikToker
                      nổi tiếng nữa.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--17-002082.jpg")
                          .default
                      }
                      alt="8, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Rất nhiều người cho rằng lỗi lớn lần này thuộc về Lê Bống"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214738--18-706989.jpg")
                          .default
                      }
                      alt="9, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,LÊ BỐNG,"
                      note="Đồng thời khuyên cô nàng nên tiết chế hơn trong phong cách ăn mặc của mình"
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
