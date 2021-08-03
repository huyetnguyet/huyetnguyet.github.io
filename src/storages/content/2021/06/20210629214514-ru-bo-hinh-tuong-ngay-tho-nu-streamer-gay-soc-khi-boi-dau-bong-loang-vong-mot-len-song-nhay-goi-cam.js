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
"timestamp": '29/06/2021 09:45 PM',
"title": 'Rũ bỏ hình tượng ngây thơ, nữ streamer gây sốc khi bôi dầu bóng loáng vòng một, lên sóng nhảy gợi cảm',
"description": 'Những màn trình diễn gợi cảm của các cô nàng streamer giờ đang chuyển dần sang phản cảm và làm mất lòng người xem.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629214514--19-825786.jpg',
"alt": 'GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,',
"category": 'images',
"date": '29/06/2021',
"time": '09:45 PM',
"link": '/ru-bo-hinh-tuong-ngay-tho-nu-streamer-gay-soc-khi-boi-dau-bong-loang-vong-mot-len-song-nhay-goi-cam',
"zcomponent": 'page_20210629214514',
"filepath": './20210629214514-ru-bo-hinh-tuong-ngay-tho-nu-streamer-gay-soc-khi-boi-dau-bong-loang-vong-mot-len-song-nhay-goi-cam.js'
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
  "Rũ bỏ hình tượng ngây thơ, nữ streamer gây sốc khi bôi dầu bóng loáng vòng một, lên sóng nhảy gợi cảm";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:45 PM";
const description =
  "Những màn trình diễn gợi cảm của các cô nàng streamer giờ đang chuyển dần sang phản cảm và làm mất lòng người xem.";
const link =
  "ru-bo-hinh-tuong-ngay-tho-nu-streamer-gay-soc-khi-boi-dau-bong-loang-vong-mot-len-song-nhay-goi-cam";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "STREAMER",
  "NỮ STREAMER",
  "CỘNG ĐỒNG MẠNG",
  "HAN JI-NA",
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

export default function page_20210629214514() {
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
                      Nhân vật chính trong câu chuyện lần này là{" "}
                      <strong>Han Ji-na</strong>, một trong những cái tên khá
                      nổi tiếng trên <strong>cộng đồng mạng</strong> khi trang
                      cá nhân của cô nàng đang có tới gần 500.000 lượt follow.
                      Trên thực tế, Han Ji-na vốn được biết tới như một trong
                      những <strong>hot girl</strong>, mẫu ảnh có tiếng nhưng kể
                      từ khi bắt đầu sự nghiệp phát sóng, đi theo con đường phát
                      triển như các <strong>streamer</strong>, Han Ji-na mới thu
                      hút thêm được rất nhiều sự chú ý. Vốn dĩ đã nổi tiếng bởi
                      sự ngây thơ, gương mặt thiên thần của mình, nhưng từ khi
                      bắt đầu lên sóng, cô nàng còn khiến không ít người phải
                      bất ngờ với màn lột xác cực kỳ ấn tượng.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--10-743608.jpg")
                          .default
                      }
                      alt="1, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Han Ji-na vốn rất nổi tiếng với vẻ ngoài xinh đẹp, đáng yêu của mình"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--11-820550.jpg")
                          .default
                      }
                      alt="2, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Phong cách gợi cảm rất tự nhiên, nhẹ nhàng của Han Ji-na được rất nhiều người yêu thích"
                    />
                    <p>
                      Không phủ nhận rằng với lợi thế về vóc dáng, hình thể của
                      mình, <strong>Han Ji-na</strong> từ lâu cũng đã định hình
                      cho mình một phong cách cực kỳ gợi cảm trong các bộ ảnh.
                      Tuy nhiên, với gương mặt ngây thơ và phong cách quyến rũ
                      rất nhẹ nhàng, vừa đủ và không tạo sự phản cảm, cô nàng
                      càng được lòng fan hâm mộ hơn nữa. Thế nhưng, có vẻ như kể
                      từ khi lên sóng, nàng <strong>hot girl</strong> này cũng
                      đã dần dần học được các chiêu trò thì phải. Điển hình như
                      trong một số phiên livestream mới đây, Han Ji-na khiến
                      không ít người phải ngạc nhiên khi thoải mái phô bày những
                      điệu nhảy sexy của mình.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--12-740945.gif")
                          .default
                      }
                      alt="3, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Những hình ảnh gần đây trên sóng livestream của Han Ji-na"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--13-103118.gif")
                          .default
                      }
                      alt="4, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Chẳng những phô diễn các điệu nhảy sexy"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--14-685590.gif")
                          .default
                      }
                      alt="5, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Cô nàng còn rất chăm chỉ áp sát vòng một vào camera của mình"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--15-101754.gif")
                          .default
                      }
                      alt="6, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Thậm chí là sẵn sàng giữ cả những tư thế gợi cảm trong suốt một quãng thời gian"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Trang phục nóng bỏng, phong cách biểu diễn siêu khêu gợi,
                      đã vậy, vòng một của <strong>Han Ji-na</strong> còn bóng
                      một cách bất ngờ đầy gợi cảm, tới mức nhiều người còn đặt
                      ra nghi vấn đó không phải mồ hôi mà là một loại dầu bóng
                      đã được cô nàng sử dụng để tăng thêm sự cuốn hút cho màn
                      phát sóng của mình. Sự thay đổi, hay nói đúng hơn là lột
                      xác này của Han Ji-na đã nhận về không ít những ý kiến
                      trái chiều. Thậm chí, một số người còn cho rằng màn biểu
                      diễn này mang đậm chất 18+.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--16-568884.gif")
                          .default
                      }
                      alt="7, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Sự thay đổi lần này của Han Ji-na đang nhận về rất nhiều những ý kiến trái chiều"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--17-480429.jpg")
                          .default
                      }
                      alt="8, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Rất nhiều fan của nàng hot girl vẫn thích sự gợi cảm nhẹ nhàng như trước của cô nàng hơn"
                    />
                    <p>
                      Chưa biết công việc <strong>streamer</strong> của{" "}
                      <strong>Han Ji-na</strong> liệu có thể phát triển thuận
                      lợi hay không, nhưng chí ít thì sự nghiệp người mẫu ảnh
                      của cô nàng vẫn đang đi đúng hướng. Cụ thể, cô nàng từng
                      khá nhiều lần xuất hiện trên MAXIM, một tạp chí danh tiếng
                      dành riêng cho phái mạnh. Chưa kể, các bộ ảnh của Ji-na
                      cũng tạo được tiếng vang và được nhiều người rất ưa thích.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--18-743380.jpg")
                          .default
                      }
                      alt="9, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note="Han Ji-na vẫn thường xuyên xuất hiện trên tạp chí MAXIM"
                    />
                    <p>
                      Đồng thời cũng là gương mặt quen thuộc trong nhiều bộ ảnh
                      đồ ngủ, bikini nổi tiếng
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--19-825786.jpg")
                          .default
                      }
                      alt="10, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214514--20-705407.jpg")
                          .default
                      }
                      alt="11, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HAN JI-NA,"
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
