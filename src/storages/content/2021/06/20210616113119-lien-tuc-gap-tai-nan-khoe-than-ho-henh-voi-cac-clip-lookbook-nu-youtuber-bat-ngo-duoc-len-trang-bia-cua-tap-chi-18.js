import React from "react";
import "components/page.css";
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
"timestamp": '16/06/2021 11:31 AM',
"title": 'Liên tục gặp tai nạn khoe thân, hớ hênh với các clip Lookbook, nữ YouTuber bất ngờ được lên trang bìa của tạp chí 18+',
"description": 'Sự nghiệp của cô nàng YouTuber này cũng đang phát triển hơn bao giờ hết.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210616113119--15-761451.gif',
"alt": 'Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, ',
"category": 'images',
"date": '16/06/2021',
"time": '11:31 AM',
"link": '/lien-tuc-gap-tai-nan-khoe-than-ho-henh-voi-cac-clip-lookbook-nu-youtuber-bat-ngo-duoc-len-trang-bia-cua-tap-chi-18',
"zcomponent": 'page_20210616113119',
"filepath": './20210616113119-lien-tuc-gap-tai-nan-khoe-than-ho-henh-voi-cac-clip-lookbook-nu-youtuber-bat-ngo-duoc-len-trang-bia-cua-tap-chi-18.js'
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
  "Liên tục gặp tai nạn khoe thân, hớ hênh với các clip Lookbook, nữ YouTuber bất ngờ được lên trang bìa của tạp chí 18+";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "16/06/2021 11:31 AM";
const description =
  "Sự nghiệp của cô nàng YouTuber này cũng đang phát triển hơn bao giờ hết.";
const link =
  "lien-tuc-gap-tai-nan-khoe-than-ho-henh-voi-cac-clip-lookbook-nu-youtuber-bat-ngo-duoc-len-trang-bia-cua-tap-chi-18";
const tagparam = [
  "gai-xinh",
  "hot-girl",
  "cong-dong-mang",
  "youtuber",
  "eun-ji",
  "nu-youtuber",
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

export default function page_20210616113119() {
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
                    Nhu cầu mua sắm trực tuyến đang lên cao, và đặc biệt, đối
                    với các chị em phụ nữ, việc theo đuổi những bộ thời trang
                    hiện đại, thời thượng chưa bao giờ là việc nhàm chán. Đó
                    cũng là cơ hội để cho nhiều cô nàng{" "}
                    <strong>hot girl</strong>, người mẫu ảnh dần có cơ hội lấn
                    sân sang nghiệp streamer, <strong>YouTuber</strong> nhờ vào
                    các nội dung Lookbook, khoe mẽ quần áo trên sóng của mình.
                    Còn nếu hiểu theo một cách tiêu cực hơn, đây là dịp để các
                    cô gái xinh đẹp ấy có cơ hội khoe thân một cách lộ liễu trên
                    sóng mà không lo sợ gặp phải những án phạt từ phía nền tảng.
                    Điển hình nhất trong trào lưu làm clip Lookbook có lẽ phải
                    kể tới Eun-ji, một nữ YouTuber xinh đẹp có tiếng.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--10-042737.jpg")
                        .default
                    }
                    alt="1Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note="Eun-ji, cô nàng YouTuber nóng bỏng trong câu chuyện"
                  />
                  <p>
                    Xinh đẹp, gợi cảm, và đặc biệt là rất ưa thích các nội dung
                    mang tính chất 18+, thế nên không ngạc nhiên khi Eun-ji sở
                    hữu cho mình lượng fan hâm mộ khổng lồ. Chỉ tính riêng trên
                    trang cá nhân, cô nàng đã có tới hơn 1 triệu follow - con số
                    khiến ngay cả nhiều <strong>hot girl</strong> có tiếng khác
                    cũng phải ngưỡng mộ. Tuy nhiên, phải tới khi làm{" "}
                    <strong>YouTuber</strong> với chuỗi series các clip Lookbook
                    của mình thì nàng hot girl mới thật sự lột xác và nâng tầm
                    phủ sóng của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--11-338124.jpg")
                        .default
                    }
                    alt="2Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note="Cô nàng YouTuber xinh đẹp không ngại khoe vóc dáng nóng bỏng"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--12-950603.jpg")
                        .default
                    }
                    alt="3Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note="Eun-ji trong một clip Lookbook của mình"
                  />
                  <p>
                    Theo đó, liên tục trong những ngày gần đây, nàng{" "}
                    <strong>hot girl</strong> đã có những màn "đốt mắt" fan hâm
                    mộ với không ít những khoảnh khắc nóng bỏng. Từ việc để cún
                    cưng "sàm sỡ" vòng một ngay trên sóng, cho tới màn mắc kẹt
                    trong lúc thay quần áo và tạo nên khung cảnh cực kỳ gợi cảm,
                    lượng người xem của Eun-ji nhanh chóng tăng vọt, nhưng đổi
                    lại, cô nàng cũng vấp phải không ít những ý kiến trái chiều,
                    thậm chí là tiêu cực vì lạm dụng việc khoe thân một cách quá
                    đà.{" "}
                  </p>{" "}
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--13-393901.gif")
                        .default
                    }
                    alt="4Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note="Rất nhiều người đã phải dành lời khen cho sự ngọt ngào của cô nàng YouTuber"
                  />
                  <p>Những khoảnh khắc gợi cảm trên sóng Lookbook của Eun-ji</p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--14-880650.gif")
                        .default
                    }
                    alt="5Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note="Eun-ji cũng tỏ ra cực kỳ thần thái"
                  />
                  <p>Nhưng đồng thời cũng là lúc để xảy ra những sự cố</p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--15-761451.gif")
                        .default
                    }
                    alt="6Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note="
                    Cô nàng liên tục đốt mắt người xem nhờ những khoảnh khắc
                    nóng bỏng"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--18-529979.png")
                        .default
                    }
                    alt="9Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note="Hậu trường của buổi chụp hình cũng đã được CĐM tìm ra"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--19-286034.png")
                        .default
                    }
                    alt="10Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <p>
                    Tuy nhiên, cũng chẳng ai ngờ được, từ chỗ phải chịu tai
                    tiếng, Eun-ji lại bất ngờ vừa có một cơ hội lớn trong sự
                    nghiệp của mình. Cụ thể, quá ấn tượng với những clip
                    Lookbook của cô nàng, tạp chí dành riêng cho phái mạnh,
                    MAXIM thậm chí còn gây sốc khi lựa chọn cô nàng{" "}
                    <strong>YouTuber</strong> sẽ là gương mặt xuất hiện trên
                    trang bìa tạp chí của mình. Và mới đây, hậu trường buổi chụp
                    hình cực kỳ sexy của Eun-ji với MAXIM cũng đã rò rỉ trên
                    nhiều trang mạng.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--16-881679.jpg")
                        .default
                    }
                    alt="7Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--17-202031.jpg")
                        .default
                    }
                    alt="8Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--20-834445.jpg")
                        .default
                    }
                    alt="11Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--21-629317.jpg")
                        .default
                    }
                    alt="12Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--22-530237.jpg")
                        .default
                    }
                    alt="13Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--23-571797.jpg")
                        .default
                    }
                    alt="14Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--26-874159.jpg")
                        .default
                    }
                    alt="17Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--27-233916.jpg")
                        .default
                    }
                    alt="18Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note="Hình ảnh của Eun-ji trên trang bìa tạp chí MAXIM"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--24-873099.gif")
                        .default
                    }
                    alt="15Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--25-613112.gif")
                        .default
                    }
                    alt="16Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--28-515465.gif")
                        .default
                    }
                    alt="19Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113119--29-125286.gif")
                        .default
                    }
                    alt="20Gai Xinh, Hot Girl, Cong Dong Mang, Youtuber, Eun Ji, Nu Youtuber, "
                    note=""
                  />
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
