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
"timestamp": '29/06/2021 09:55 PM',
"title": 'Bị đề nghị cởi cúc áo lấy tiền donate, nữ streamer xinh đẹp có hành động đầy bất ngờ khiến fan hưởng ứng nhiệt liệt',
"description": 'Cô nàng cũng đang được coi là nữ streamer sở hữu mặt mộc đẹp nhất ở thời điểm hiện tại.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215549--16-658111.gif',
"alt": 'GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,',
"category": 'images',
"date": '29/06/2021',
"time": '09:55 PM',
"link": '/bi-de-nghi-coi-cuc-ao-lay-tien-donate-nu-streamer-xinh-dep-co-hanh-dong-day-bat-ngo-khien-fan-huong-ung-nhiet-liet',
"zcomponent": 'page_20210629215549',
"filepath": './20210629215549-bi-de-nghi-coi-cuc-ao-lay-tien-donate-nu-streamer-xinh-dep-co-hanh-dong-day-bat-ngo-khien-fan-huong-ung-nhiet-liet.js'
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
  "Bị đề nghị cởi cúc áo lấy tiền donate, nữ streamer xinh đẹp có hành động đầy bất ngờ khiến fan hưởng ứng nhiệt liệt";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:55 PM";
const description =
  "Cô nàng cũng đang được coi là nữ streamer sở hữu mặt mộc đẹp nhất ở thời điểm hiện tại.";
const link =
  "bi-de-nghi-coi-cuc-ao-lay-tien-donate-nu-streamer-xinh-dep-co-hanh-dong-day-bat-ngo-khien-fan-huong-ung-nhiet-liet";
const tagparam = [
  "GÁI XINH",
  "STREAMER",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "NỮ STREAMER",
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

export default function page_20210629215549() {
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
                      Văn hóa donate từ lâu đã trở thành một trong những thứ rất
                      quen thuộc và phổ biến với đa số các{" "}
                      <strong>streamer</strong> lẫn người xem ở thời điểm hiện
                      tại. Thậm chí, tại nhiều nơi, người xem còn thường xuyên
                      sử dụng tiền donate như một cách để "treo thưởng", thử
                      thách dành cho các streamer trong mọi lĩnh vực, từ game,
                      nhảy múa cho tới cả việc thực hiện các thách thức ăn uống.
                      Tuy nhiên, đôi lúc, loại hình này lại trở nên biến tướng
                      tới mức không ít streamer vì những khoản tiền donate kếch
                      xù mà sẵn sàng hở bạo, làm những hành động phản cảm theo ý
                      người xem. Mới đây, Hwajeong - một{" "}
                      <strong>nữ streamer</strong> xinh đẹp cũng đã rơi vào
                      trường hợp tương tự.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215549--10-899380.jpg")
                          .default
                      }
                      alt="1, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,"
                      note="Hwajeong - cô nàng streamer xinh đẹp trong câu chuyện"
                    />
                    <p>
                      Như thường lệ, trong phiên lên sóng mới nhất, Hwajeong
                      tiếp tục mang tới cho người xem những điệu nhảy gợi cảm,
                      cũng như lên sóng tâm sự với fan. Mặc dù không có nhiều
                      điều quá đặc biệt, thế nhưng sự quyến rũ cũng như phong
                      cách vô cùng gợi cảm của nàng <strong>hot girl</strong>{" "}
                      này, và trên hết, sự nhẹ nhàng, đằm thắm của Hwajeong lại
                      là thứ ghi điểm với người xem. Tuy nhiên, đôi khi chiều
                      quá sẽ làm hư fan, bằng chứng là mới đây, ngay trên sóng
                      livestream, cô nàng đã bất ngờ nhận được một lời đề nghị
                      đầy khiếm nhã sau khi nhận donate.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215549--11-573119.png")
                          .default
                      }
                      alt="2, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,"
                      note="Bộ trang phục đầy gợi cảm trong lần lên sóng mới đây của Hwajeong"
                    />
                    <p>
                      Diện cho mình bộ trang phục đầy gợi cảm nhưng cũng rất
                      tinh tế, nhan sắc nổi bật của Hwajeong ngay lập tức đã thu
                      hút không ít người xem trong lần lên sóng này. Rất nhiều
                      những donate kèm theo các lời khen có cánh dành cho làn da
                      trắng sứ cùng vòng một tròn đầy của cô nàng đã được spam
                      một cách rất nhiệt tình. Tuy nhiên, khi câu chuyện đang
                      vui vẻ thì bất ngờ, một dòng donate có phần hơi vượt quá
                      giới hạn được gửi tới: "Hãy cởi thêm vài cúc áo nữa, và
                      bạn sẽ nhận được phần donate còn lớn hơn".
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215549--12-476130.png")
                          .default
                      }
                      alt="3, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,"
                      note="Hwajeong cũng tỏ ra khá bất ngờ trước lời đề nghị khiếm nhã này"
                    />
                    <p>
                      Khá ngạc nhiên là ngay sau khi đọc được đoạn tin nhắn ấy,
                      Hwajeong đã tiến lại gần micro cũng như ống kính camera.
                      Điều này khiến cho không ít người nghĩ tới viễn cảnh cô
                      nàng <strong>streamer</strong> sẽ vì tiền mà chấp nhận
                      đánh đổi, làm theo lời của người donate kia. Đáng chú ý
                      hơn là trước đó, cô nàng còn làm một tư thế uốn cong người
                      cực kỳ gợi cảm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215549--13-929462.png")
                          .default
                      }
                      alt="4, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,"
                      note="Hình ảnh của Hwajeong khi đọc được tin nhắn"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215549--14-904248.png")
                          .default
                      }
                      alt="5, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,"
                      note="Thậm chí cô nàng còn chủ động tươi cười, đứng dậy áp sát camera"
                    />
                    <p>
                      Tuy nhiên, có lẽ những ai chờ đợi một tiết mục nóng bỏng
                      thì sẽ phải thất vọng, khi mà ngay sau đó, thay vì cởi nốt
                      hai chiếc cúc áo theo yêu cầu, cô nàng chỉ nhẹ nhàng: "Đi
                      đi, làm theo lời bạn thì tôi mất kênh đấy". Điều này chắc
                      chắn sẽ không làm nhiều người và chủ nhân của dòng donate
                      kia thấy vui, nhưng các fan cứng của Hwajeong thì lại được
                      một phen thở phào. Nên nhớ, cô nàng vẫn đang được coi là
                      "ngọc nữ" của làng <strong>streamer</strong> Hàn Quốc khi
                      gần như chẳng dính vào bất kỳ scandal lớn nhỏ nào dẫu cho
                      đây đã là năm thứ 9 mà Hwajeong lên sóng.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215549--15-104466.png")
                          .default
                      }
                      alt="6, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,"
                      note="Hwajeong (trái) với nhan sắc cực kỳ xinh đẹp khi bị chụp lén qua ống kính camera"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215549--16-658111.gif")
                          .default
                      }
                      alt="7, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,"
                      note=""
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
