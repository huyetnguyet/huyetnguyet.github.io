import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import image01 from "storages/images/content/2021/linh-chichan-20210602(1).jpg";
import image02 from "storages/images/content/2021/linh-chichan-20210602(2).jpg";
import image03 from "storages/images/content/2021/linh-chichan-20210602(3).jpg";
import image04 from "storages/images/content/2021/linh-chichan-20210602(4).jpg";
import image05 from "storages/images/content/2021/linh-chichan-20210602(5).jpg";
import image06 from "storages/images/content/2021/linh-chichan-20210602(6).jpg";
import image07 from "storages/images/content/2021/linh-chichan-20210602(7).jpg";
import image08 from "storages/images/content/2021/linh-chichan-20210602(8).png";

import { Helmet } from "react-helmet";

/* Data Input */

/*
<ContentItem
            title="Linh Chichan diện trang phục thả rông tới 90% vòng một, nữ streamer Việt nhận về nhiều ý kiến trái chiều"
            content="Thời trang khi ra đường của cô nàng streamer cũng khiến khá nhiều người phải chảy máu mũi."
            src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/1/photo-1-16225193754541692620860.jpg"
            alt="Linh Chichan"
            types="News"
            time="03/06/2021 09:50 AM"
            link="/linh-chichan-dien-trang-phuc-tha-rong-toi-90-vong-mot-nu-streamer-viet-nhan-ve-nhieu-y-kien-trai-chieu"
          />
*/
/* ---------------------------------------------------------------- */

const category = "images";
const categoryLink = "/images";

const title =
  "Linh Chichan diện trang phục thả rông tới 90% vòng một, nữ streamer Việt nhận về nhiều ý kiến trái chiều";
const author = "Mặt Trứng";
const date = "03/06/2021";
const time = "09:50 AM";
const description =
  "Thời trang khi ra đường của cô nàng streamer cũng khiến khá nhiều người phải chảy máu mũi.";
const link =
  "linh-chichan-dien-trang-phuc-tha-rong-toi-90-vong-mot-nu-streamer-viet-nhan-ve-nhieu-y-kien-trai-chieu";
const source = "Pháp luật và bạn đọc";

const tags = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "STREAMER",
  "NỮ STREAMER",
  "LINH CHICHAN",
];
/* ---------------------------------------------------------------- */

const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tags.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_202106030950() {
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
              >
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
              <div className="author">{author}</div> - Theo {source} | {date} -
              {time}
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
                      Cách đây không lâu, cộng đồng mạng bất ngờ đăng tải cũng
                      như chia sẻ rất rầm rộ hình ảnh của một cô gái đang đứng
                      check in trước cửa hàng thời trang với chiếc váy hai dây
                      gợi cảm, đi kèm với đó là những đường cắt xẻ táo bạo.
                      Chẳng khó để nhận ra, bộ thời trang cùng phong cách tạo
                      dáng nóng bỏng này đã giúp cô nàng khoe được đôi gò bồng
                      đảo siêu gợi cảm, tới mức mà nhiều người cho rằng bộ trang
                      phục này phải hớ hênh tới 90% vòng một của cô nàng. Rất
                      nhanh, danh tính của nhân vật trong ảnh cũng đã được tìm
                      ra ngay sau đó.
                    </p>
                    <ContentImage
                      src={image01}
                      alt="Linh Chichan"
                      note="Hình ảnh khiến nhiều người phải sững sờ của cô gái xinh đẹp"
                    />
                    <p>
                      Theo đó, nhân vật trong ảnh chính là
                      <div className="highlight">Linh Chichan</div>, một cô nàng
                      năm nay mới 19 tuổi và hiện đang theo đuổi công việc
                      <div className="highlight">streamer</div>. Mặc dù được coi
                      là một tân binh "sinh sau đẻ muộn', thế nhưng với lợi thế
                      về ngoại hình của mình, đặc biệt là vòng một ngoại cỡ,
                      không mất quá nhiều thời gian để cô nàng
                      <div className="highlight">streamer</div> thu hút được một
                      lượng lớn fan hâm mộ. Hiện tại, cả Facebook lẫn Instagram
                      của cô nàng đều đã sở hữu tới vài chục nghìn follow và con
                      số này vẫn còn đang có chiều hướng tăng lên chóng mặt.
                    </p>
                    <ContentImage
                      src={image02}
                      alt="Linh Chichan"
                      note="Cô nàng hot girl sở hữu thân hình cực kỳ gợi cảm"
                    />
                    <ContentImage
                      src={image03}
                      alt="Linh Chichan"
                      note="Nhưng cũng khá nổi tiếng với ảnh thẻ xinh xuất sắc"
                    />
                    <p>
                      Thực tế, đa phần những hình ảnh mà cô nàng
                      <div className="highlight">Linh Chichan</div> đăng tải đều
                      vô cùng gợi cảm, khoe trọn vóc dáng thanh xuân của mình.
                      Tuy nhiên, cũng vì việc theo đuổi phong cách táo bạo, nóng
                      bỏng ngay khi vẫn còn tương đối trẻ cũng khiến cho nữ
                      streamer nhận về nhiều ý kiến trái chiều.
                    </p>
                    <ContentImage
                      src={image04}
                      alt="Linh Chichan"
                      note="
                    Phong cách gợi cảm khiến cô nàng streamer nhận phải khá
                    nhiều ý kiến trái chiều"
                    />
                    <ContentImage
                      src={image05}
                      alt="Linh Chichan"
                      note="Đặc biệt khi nhiều người cho rằng nhờ thế mà cô nàng sở hữu
                    lượng fan hâm mộ lớn"
                    />
                    <p>
                      Bản thân <div className="highlight">Linh Chichan</div>{" "}
                      cũng đã có những phản hồi về phong cách gợi cảm của mình.
                      Cụ thể, cô nàng chia sẻ rằng:
                      <italic>
                        "Thực ra chẳng thể đánh giá được con người qua vẻ bề
                        ngoài. Nhiều bạn chụp ảnh nhìn sexy một tí nhưng không
                        phải ai cũng động được vào. Còn có nhiều người ăn mặc
                        kín đáo nhưng lại không phải thế. Vậy nên phải tiếp xúc
                        mới biết được chứ nhìn bên ngoài rồi nhận xét chỉ là
                        đánh đồng thôi!”.
                      </italic>
                    </p>
                    <ContentImage
                      src={image06}
                      alt="Linh Chichan"
                      note="Cô nàng streamer cho rằng: 'Không nên đánh giá qua vẻ bề ngoài'"
                    />
                    <p>
                      Hiện tại, <div className="highlight">Linh Chichan</div>{" "}
                      đang livestream chủ yếu trên Facebook và cô nàng cũng là
                      một game thủ thứ thiệt đấy. Bên cạnh LMHT, một trong những
                      tựa game mà nàng streamer hay chơi nhất chính là giả lập
                      lái xe online - một trong những tựa game đang rất được ưa
                      chuộng thời gian gần đây.
                    </p>
                    <ContentImage src={image07} alt="Linh Chichan" note="" />
                    <ContentImage src={image08} alt="Linh Chichan" note="" />
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
