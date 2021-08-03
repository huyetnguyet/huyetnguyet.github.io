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
"timestamp": '29/06/2021 10:04 PM',
"title": 'Tuyển bạn trai trên sóng, nữ streamer gây sốc khi chỉ cần người "khỏe mạnh", đưa ra 20 tiêu chí đầy nhạy cảm',
"description": 'Cô nàng streamer xinh đẹp khiến cho không ít người mừng thầm nhưng rồi cũng hụt hẫng ngay sau đó.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629220457--15-651279.jpg',
"alt": 'HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,',
"category": 'images',
"date": '29/06/2021',
"time": '10:04 PM',
"link": '/tuyen-ban-trai-tren-song-nu-streamer-gay-soc-khi-chi-can-nguoi-khoe-manh-dua-ra-20-tieu-chi-day-nhay-cam',
"zcomponent": 'page_20210629220457',
"filepath": './20210629220457-tuyen-ban-trai-tren-song-nu-streamer-gay-soc-khi-chi-can-nguoi-khoe-manh-dua-ra-20-tieu-chi-day-nhay-cam.js'
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
  'Tuyển bạn trai trên sóng, nữ streamer gây sốc khi chỉ cần người "khỏe mạnh", đưa ra 20 tiêu chí đầy nhạy cảm';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 10:04 PM";
const description =
  "Cô nàng streamer xinh đẹp khiến cho không ít người mừng thầm nhưng rồi cũng hụt hẫng ngay sau đó.";
const link =
  "tuyen-ban-trai-tren-song-nu-streamer-gay-soc-khi-chi-can-nguoi-khoe-manh-dua-ra-20-tieu-chi-day-nhay-cam";
const tagparam = [
  "HOT GIRL",
  "GÁI XINH",
  "STREAMER",
  "CỘNG ĐỒNG MẠNG",
  "NỮ STREAMER",
  "SOO JI-YEON",
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

export default function page_20210629220457() {
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
                      Da trắng mặt xinh - thân hình gợi cảm, đó dường như đang
                      là những chuẩn mực cần có ở thời điểm hiện tại của bất kỳ
                      nữ <strong>streamer</strong> nào. Đặc biệt là tại Hàn
                      Quốc, nơi mà trào lưu phát sóng với các content đầy gợi
                      cảm dường như đang trở thành trào lưu. Nổi bật trong đó
                      chắc chắn phải kể tới <strong>Soo Ji-yeon</strong>, một
                      trong những nàng <strong>hot girl</strong>, streamer top
                      đầu đã được người xem định hình với những màn vũ đạo nóng
                      bỏng, những lần phát sóng đầy khêu gợi bên bể bơi. Sở hữu
                      cho mình một lượng fan hâm mộ khổng lồ, trong đó phần đông
                      là nam giới, thế nên không lạ khi chủ đề bạn trai của Soo
                      Ji-yeon luôn là vấn đề nhận được rất nhiều sự quan tâm.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--10-763824.jpg")
                          .default
                      }
                      alt="1, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
                      note="Soo Ji-yeon - cô nàng streamer xinh đẹp và không kém phần nóng bỏng"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--11-009159.jpg")
                          .default
                      }
                      alt="2, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
                      note="Đồng thời cũng là người thường xuyên khiến các fan bỏng mắt với những màn livestream tắm bồn của mình"
                    />
                    <p>
                      Theo đó, trong lần lên sóng mới nhất,{" "}
                      <strong>Soo Ji-yeon</strong> khiến khá nhiều người bất ngờ
                      khi tuyên bố cô nàng đang độc thân, cô đơn và cũng có nhu
                      cầu tìm kiếm một người bạn trai đích thực. Nghe tới đây
                      thôi, kênh chat của nữ <strong>streamer</strong> này gần
                      như đã nổ tung, thậm chí không ít fan nam còn háo hức yêu
                      cầu cô nàng chia sẻ về hình mẫu bạn trai lý tưởng. Rất hào
                      phóng, Soo Ji-yeon cũng nhiệt tình chia sẻ, nhưng sau khi
                      nghe xong, đa số fan dù có là trung thành nhất với cô nàng
                      cũng phải "chạy mất dép".
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--12-066796.jpg")
                          .default
                      }
                      alt="3, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
                      note="Cô nàng streamer đưa ra yêu cầu tuyển bạn trai công khai trên sóng"
                    />
                    <p>
                      Theo đó, <strong>Soo Ji-yeon</strong> đưa ra tới tận hơn
                      20 điều kiện tiêu chuẩn cho bạn trai tương lai của mình.
                      Đầu tiên là phải thích ăn hải sản, đồ cay, và một số sở
                      thích đơn giản. Nhưng sau đó mới là vấn đề chính. Cô nàng{" "}
                      <strong>streamer</strong> thừa nhận tính chiếm hữu rất
                      cao, đồng thời không thích bạn trai có nhiều những mối
                      quan hệ khác, đặc biệt là với phụ nữ. Cụ thể, Soo Ji-yeon
                      yêu cầu trang cá nhân của bạn trai phải có ít hơn 30 người
                      bạn, mỗi post chỉ nên có khoảng 5 bình luận trở xuống,
                      đồng thời duy trì tầm 1-2 group chat là quá đủ rồi. Trái
                      ngược hơn nữa, cô nàng còn yêu cầu bạn trai phải là người
                      giỏi và khéo léo trong cách giao tiếp - điều nghe qua thì
                      có vẻ khá trái ngược với yêu cầu về trang cá nhân kia.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--13-586599.jpg")
                          .default
                      }
                      alt="4, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
                      note="Những yêu cầu của Soo Ji-yeon khiến không ít người hoảng sợ"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--14-128946.jpg")
                          .default
                      }
                      alt="5, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
                      note="Khi dường như yêu cầu sau luôn trái ngược với trước đó"
                    />
                    <p>
                      Chưa kể, <strong>Soo Ji-yeon</strong> còn nhấn mạnh rằng
                      mình không cần bạn trai giàu, thay vào đó, cô thích một
                      người khỏe mạnh cả nghĩa đen lẫn bóng. Nhưng có vẻ như
                      càng về sau, những tiêu chí như không selfie, không nghe
                      các bảng xếp hạng âm nhạc có tiếng... đã khiến cho không
                      ít fan của cô nàng <strong>streamer</strong> phải nản
                      lòng. Thậm chí, nhiều người còn cho rằng Soo Ji-yeon có lẽ
                      phải sang một hành tinh khác thì mới tìm được bạn trai
                      mất.
                    </p>
                    <p>
                      Một số hình ảnh khác về cô nàng <strong>streamer</strong>{" "}
                      xinh đẹp:
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--15-651279.jpg")
                          .default
                      }
                      alt="6, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--16-053049.jpg")
                          .default
                      }
                      alt="7, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--17-882590.jpg")
                          .default
                      }
                      alt="8, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220457--18-004195.jpg")
                          .default
                      }
                      alt="9, HOT GIRL,GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,SOO JI-YEON,"
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
