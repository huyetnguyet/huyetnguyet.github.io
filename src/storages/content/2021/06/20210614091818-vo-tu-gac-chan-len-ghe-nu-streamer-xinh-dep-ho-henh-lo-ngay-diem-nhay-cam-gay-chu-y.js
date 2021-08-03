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
"timestamp": '14/06/2021 09:18 AM',
"title": 'Vô tư gác chân lên ghế, nữ streamer xinh đẹp hớ hênh, lộ ngay điểm nhạy cảm gây chú ý',
"description": 'Có lẽ cô nàng streamer hồn nhiên quá mà quên mất rằng mình đang trên sóng trước mặt hàng nghìn người xem thì phải.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614091818--12-155164.gif',
"alt": 'Gai Xinh, Hot Girl, Streamer, Cong Dong Mang, Nu Streamer, Jjj, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:18 AM',
"link": '/vo-tu-gac-chan-len-ghe-nu-streamer-xinh-dep-ho-henh-lo-ngay-diem-nhay-cam-gay-chu-y',
"zcomponent": 'page_20210614091818',
"filepath": './20210614091818-vo-tu-gac-chan-len-ghe-nu-streamer-xinh-dep-ho-henh-lo-ngay-diem-nhay-cam-gay-chu-y.js'
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
  "Vô tư gác chân lên ghế, nữ streamer xinh đẹp hớ hênh, lộ ngay điểm nhạy cảm gây chú ý";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "14/06/2021 09:18 AM";
const description =
  "Có lẽ cô nàng streamer hồn nhiên quá mà quên mất rằng mình đang trên sóng trước mặt hàng nghìn người xem thì phải.";
const link =
  "vo-tu-gac-chan-len-ghe-nu-streamer-xinh-dep-ho-henh-lo-ngay-diem-nhay-cam-gay-chu-y";
const tagparam = [
  "gai-xinh",
  "hot-girl",
  "streamer",
  "cong-dong-mang",
  "nu-streamer",
  "jjj",
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

export default function page_20210614091818() {
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
                      Đôi khi, chỉ riêng việc lên sóng tương tác, ngồi chém gió
                      với fan cũng đã là một trong những tuyến nội dung đang
                      được rất nhiều những cô gái xinh đẹp,{" "}
                      <strong>hot girl</strong> áp dụng ở thời điểm hiện tại
                      trong những ngày đầu chuyển hướng sang làm{" "}
                      <strong>streamer</strong> của mình thì phải. Điều này cũng
                      dễ hiểu, khi nó tạo ra sự thoải mái nhất định cũng như
                      không khiến cho các cô nàng tân binh này phải chịu quá
                      nhiều áp lực. Tuy nhiên, đôi khi thoải mái quá cũng dẫn
                      tới những hệ lụy tiêu cực, điển hình như vụ tai nạn mới
                      đây của <strong>JJJ</strong> - một nữ streamer rất nổi
                      tiếng bởi sự gợi cảm của mình.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091818--10-382020.jpg")
                          .default
                      }
                      alt="Gai Xinh, Hot Girl, Streamer, Cong Dong Mang, Nu Streamer, Jjj, "
                      note="JJJ - cô nàng streamer đang được nhắc tới trong câu chuyện"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091818--11-283287.jpg")
                          .default
                      }
                      alt="Gai Xinh, Hot Girl, Streamer, Cong Dong Mang, Nu Streamer, Jjj, "
                      note="Đồng thời cũng là gương mặt rất được yêu mến nhờ vẻ ngoài xinh xắn, gợi cảm của mình"
                    />
                    <p>
                      Thực tế, với sự dễ thương bẩm sinh của mình đi kèm với vóc
                      dáng rất nóng bỏng, bản thân <strong>JJJ</strong> chẳng
                      cần làm gì nhiều cũng đã đủ để thu hút một lượng fan khổng
                      lồ rồi. Thế nên, dễ hiểu khi mà đa số những lần lên sóng,
                      cô nàng đều ngồi gác chân nói chuyện với fan một cách rất
                      thoải mái. Nhưng rồi, trong vô số những lần gác chân ấy,
                      bất ngờ xuất hiện một lần khiến cho JJJ gặp phải sự cố đầy
                      lùm xùm mới đây. Cụ thể, có lẽ cô nàng{" "}
                      <strong>streamer</strong> này đã quên rằng mình đang mặc
                      váy thì phải.
                    </p>
                    <p>
                      <ContentImage
                        src={
                          require("storages/images/content/2021/20210614091818--12-155164.gif")
                            .default
                        }
                        alt="Gai Xinh, Hot Girl, Streamer, Cong Dong Mang, Nu Streamer, Jjj, "
                        note='
                    Pha "hớ hênh" mới nhất của <strong>JJJ</strong> khiến cô
                    nàng gặp sự cố khó đỡ trên sóng'
                      />
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091818--13-771553.jpg")
                          .default
                      }
                      alt="Gai Xinh, Hot Girl, Streamer, Cong Dong Mang, Nu Streamer, Jjj, "
                      note="Đây cũng không phải là lần đầu tiên mà cô nàng này lên sóng với những bộ đồ gợi cảm"
                    />
                    <p>
                      Theo đó, trong lần lên sóng mới nhất, <strong>JJJ</strong>{" "}
                      rất hồn nhiên gác chân vắt vẻo lên ghế nhưng với việc đang
                      mặc váy, cô nàng đã vô tình để lộ một phần vòng ba cũng
                      như nội y của mình lên sóng thì phải. Biết là sau đó JJJ
                      cũng đã được nhắc nhở, thế nhưng phân cảnh này vẫn bị ghi
                      lại và đoạn clip được lan truyền với tốc độ chóng mặt trên
                      mạng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091818--14-812804.jpg")
                          .default
                      }
                      alt="Gai Xinh, Hot Girl, Streamer, Cong Dong Mang, Nu Streamer, Jjj, "
                      note="Đoạn clip hớ hênh của JJJ nhanh chóng bị ghi lại"
                    />
                    <p>
                      Tuy nhiên, có một thực tế trái ngược là sự cố lần này lại
                      chẳng làm ảnh hưởng quá nhiều tới hình tượng của cô nàng{" "}
                      <strong>hot girl</strong>. Không một án phạt nào được đưa
                      ra, và bản thân cộng đồng mạng cũng không hề có phản ứng
                      nào quá tiêu cực. Cụ thể, rất nhiều người cho rằng đây chỉ
                      là sự hớ hênh nhất thời, hoàn toàn không phải chiêu trò gì
                      quá đáng. Điều này cũng có cơ sở, khi mà trong quá khứ,
                      mặc dù vẫn dễ thương, gợi cảm nhưng <strong>JJJ</strong>{" "}
                      cũng vẫn tương đối "sạch" với các lùm xùm.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091818--15-542831.jpg")
                          .default
                      }
                      alt="Gai Xinh, Hot Girl, Streamer, Cong Dong Mang, Nu Streamer, Jjj, "
                      note="Sự cố lần này khiến cho JJJ càng thêm được nhiều người biết tới"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091818--16-312838.gif")
                          .default
                      }
                      alt="Gai Xinh, Hot Girl, Streamer, Cong Dong Mang, Nu Streamer, Jjj, "
                      note="Nhưng cũng không làm ảnh hưởng tới hình tượng của cô nàng hot girl này"
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
