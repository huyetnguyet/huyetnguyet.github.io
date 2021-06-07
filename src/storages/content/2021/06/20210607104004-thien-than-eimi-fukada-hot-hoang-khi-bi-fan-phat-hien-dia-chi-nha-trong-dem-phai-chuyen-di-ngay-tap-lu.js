import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 10:40 AM",
"title": Thiên thần Eimi Fukada hốt hoảng khi bị fan phát hiện địa chỉ nhà trong đêm, phải chuyển đi ngay tắp lự",
"description": Eimi Fukada dường như đã rất lo lắng khi bị các fan tìm ra rằng cô nàng đang sinh sống ở đâu.",
"src": https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-16230428242351689597927.jpg",
"alt": Eimi Fukada, Idol, ",
"category": images",
"date": 07/06/2021",
"time": 10:40 AM",
"link": "/thien-than-eimi-fukada-hot-hoang-khi-bi-fan-phat-hien-dia-chi-nha-trong-dem-phai-chuyen-di-ngay-tap-lu",
"zcomponent": page_20210607104004",
"filepath": ./20210607104004-thien-than-eimi-fukada-hot-hoang-khi-bi-fan-phat-hien-dia-chi-nha-trong-dem-phai-chuyen-di-ngay-tap-lu.js"
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
  "Thiên thần Eimi Fukada hốt hoảng khi bị fan phát hiện địa chỉ nhà trong đêm, phải chuyển đi ngay tắp lự";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 10:40 AM";
const description =
  "Eimi Fukada dường như đã rất lo lắng khi bị các fan tìm ra rằng cô nàng đang sinh sống ở đâu.";
const link =
  "thien-than-eimi-fukada-hot-hoang-khi-bi-fan-phat-hien-dia-chi-nha-trong-dem-phai-chuyen-di-ngay-tap-lu";
const tagparam = ["eimi-fukada", "idol"];
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

export default function page_20210607104004() {
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
                <div className="contentBody">
                  <p>
                    Nhắc đến những mỹ nhân xinh đẹp nhất làng phim người lớn,
                    người ta thường nghĩ đến những cái tên như Sora Aoi, Asuka
                    Kirara hay là Yua Mikami. Tuy nhiên, làng phim 18+ không hề
                    thiếu những cô gái xinh đẹp sở hữu nhan sắc hút hồn người
                    đối diện. Nổi danh nhất hiện nay chính là{" "}
                    <strong>Eimi Fukada</strong>, tiểu mỹ nữ nổi bật nhất trong
                    năm 2019 ở xứ sở hoa anh đào.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-16230428242351689597927.jpg"
                    alt="Eimi Fukada, Idol, "
                    note=""
                  />
                  <p>
                    {" "}
                    <strong>Eimi Fukada</strong> sinh năm 1998, là một trong
                    những nữ diễn viên trẻ nhất tham gia vào lĩnh vực phim người
                    lớn. Vào năm 2017, cô nàng bắt đầu tham gia diễn xuất với
                    tên gọi Amami Kororo. Ban đầu, Amami Kororo không có được
                    thành công lớn lắm, tuy nhiên sau khi đổi tên thành Eimi
                    Fukada thì mọi chuyện bắt đầu trở nên "xuôi chèo mát mái".
                    Eimi bắt đầu trở nên nổi bật hơn và được trở thành thiên
                    thần phim người lớn nổi bật nhất trong vài năm gần đây.
                  </p>{" "}
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/1839224145927801283637898213191273513482580n-16230478828021738807635.jpg"
                    alt="Eimi Fukada, Idol, "
                    note=""
                  />
                  <p>
                    Nổi tiếng là vậy, thế nhưng <strong>Eimi Fukada</strong>{" "}
                    cũng gặp không ít phiền toái. Mới đây, cô nàng đã thông báo
                    rằng sẽ phải chuyển nhà sau khi địa chỉ nhà của cô đã bị
                    phát hiện. Trên Youtube, cô tiết lộ rằng đã bị các sinh viên
                    đại học gần nơi cô sống tại quận Shinjuku, Tokyo và những
                    người khác bàn tán khi cô được phát hiện tại một cửa hàng
                    tiện lợi địa phương. Điều này làm cho Eimi e ngại rằng cô sẽ
                    gặp nguy hiểm và an toàn của bản thân, nên cuối cùng cô nàng
                    quyết định chuyển đi vì các rắc rối không cần thiết.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/1836417652508870834845135342392311118985286n-1623047882974342315615.jpg"
                    alt="Eimi Fukada, Idol, "
                    note=""
                  />
                  <p>
                    Dù không được chấp nhận trong thế giới giải trí chính thống
                    như những người mẫu và người nổi tiếng thông thường, thế
                    nhưng những ngôi sao AV hàng đầu có hàng nghìn người hâm mộ,
                    hầu như tất cả là nam giới - sẵn sàng bỏ ra nhiều thời gian
                    để theo dõi những người phụ nữ mà họ ngưỡng mộ.
                  </p>
                  <p>
                    Rủi ro do những kẻ theo dõi gây ra là một vấn đề lớn đối với
                    các thần tượng và người mẫu ở Nhật Bản, từ những người biểu
                    diễn ở cấp độ bán chuyên cho đến những ngôi sao lớn. Các sự
                    cố rình rập càng trở nên nổi bật về cuối năm. Thế nên, không
                    có gì quá khó hiểu khi <strong>Eimi Fukada</strong> lại lo
                    lắng đến vậy cho sự an toàn của bản thân.
                  </p>
                  <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
