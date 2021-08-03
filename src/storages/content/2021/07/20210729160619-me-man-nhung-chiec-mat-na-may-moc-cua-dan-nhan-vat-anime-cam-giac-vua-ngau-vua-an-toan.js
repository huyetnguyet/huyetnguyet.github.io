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
"timestamp": '29/07/2021 04:06 PM',
"title": 'Mê mẩn những chiếc "mặt nạ máy móc" của dàn nhân vật anime, cảm giác vừa ngầu vừa an toàn',
"description": 'Đeo mặt nạ kín và dầy cộp như này thì khỏi lo virus làm phiền nữa nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626495933255607981801.jpg',
"alt": 'MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,',
"category": 'games',
"date": '29/07/2021',
"time": '04:06 PM',
"link": '/me-man-nhung-chiec-mat-na-may-moc-cua-dan-nhan-vat-anime-cam-giac-vua-ngau-vua-an-toan',
"zcomponent": 'page_20210729160619',
"filepath": './20210729160619-me-man-nhung-chiec-mat-na-may-moc-cua-dan-nhan-vat-anime-cam-giac-vua-ngau-vua-an-toan.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  'Mê mẩn những chiếc "mặt nạ máy móc" của dàn nhân vật anime, cảm giác vừa ngầu vừa an toàn';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:06 PM";
const description =
  "Đeo mặt nạ kín và dầy cộp như này thì khỏi lo virus làm phiền nữa nhé!";
const link =
  "me-man-nhung-chiec-mat-na-may-moc-cua-dan-nhan-vat-anime-cam-giac-vua-ngau-vua-an-toan";
const tagparam = ["MẶT NẠ", "FAN ART", "NHÂN VẬT ANIME", "MẶT NẠ MÁY MÓC"];
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

export default function page_20210729160619() {
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
                      Không phải đồng phục nữ sinh dễ thương, những bộ suit ấn
                      tượng hay những bộ sưu tập thời trang đồ sộ mà những chiếc{" "}
                      <strong>mặt nạ</strong> mới là thứ gây ấn tượng mạnh nhất
                      trong thế giới Anime. Chỉ với một chiếc mặt nạ, những nhân
                      vật ấy đã có thể che giấu danh tính của mình, hay thậm chí
                      là mang đến cho họ một thân phận khác.
                    </p>
                    <p>
                      Lấy cảm hứng từ chiếc <strong>mặt nạ</strong>, họa sĩ vẽ
                      minh họa @KensukeCreation đã sáng tạo ra rất nhiều những
                      chiếc mặt nạ cực đỉnh phù hợp với các nhân vật trong 1 số
                      bộ anime nổi tiếng. Nhìn ai đeo mặt nạ vào trông cũng ngầu
                      và bí ẩn hơn hẳn.
                    </p>
                    <p>
                      Mời các bạn cùng xem những chiếc <strong>mặt nạ</strong>{" "}
                      ấn tượng của nghệ sĩ @KensukeCreation ở dưới đây:
                    </p>
                    <p>
                      Cùng điểm qua thêm 1 số phiên bản <strong>mặt nạ</strong>{" "}
                      cực kỳ độc đáo khác ở dưới đây nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-1626495918945459184613.jpg"
                      alt="1, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note="Mặt nạ được lấy cảm hứng từ chiếc PS1"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626495926534480926043.jpg"
                      alt="2, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note="Những chiếc mặt nạ được lấy cảm hứng từ giày Nike."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626495933255607981801.jpg"
                      alt="3, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626495939615608804543.jpg"
                      alt="4, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626495946166903341754.jpg"
                      alt="5, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-16264959516381171141615.jpg"
                      alt="6, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-16264959572451073371962.jpg"
                      alt="7, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-1626496074516262017672.jpg"
                      alt="8, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-16264961739171712370429.jpg"
                      alt="9, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626496494725429427080.jpg"
                      alt="10, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626496501612508180376.jpg"
                      alt="11, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626496507996301553950.jpg"
                      alt="12, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-16264965153961020789672.jpg"
                      alt="13, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-16264965259021044564942.jpg"
                      alt="14, MẶT NẠ,FAN ART,NHÂN VẬT ANIME,MẶT NẠ MÁY MÓC,"
                      note=""
                    />
                    <p>
                      Vâng, sau khi xem loạt ảnh này bạn có bị mê những chiếc{" "}
                      <strong>mặt nạ</strong> do nghệ sĩ @KensukeCreation sáng
                      tạo chứ? Trông chúng như những chiếc mặt nạ đến từ tương
                      lai, rất hiện đại và an toàn vậy.
                    </p>
                    <p>
                      Ngoài ra, trong tình hình dịch bệnh COVID-19 đang diễn ra
                      phức tạp và nguy hiểm như hiện nay, chúng ta đều nên tự
                      cách ly ở nhà, còn nếu có sự việc bất khả kháng phải ra
                      ngoài thì nên đeo khẩu trang trước khi đi đâu. Điều này
                      không chỉ giúp cho bạn mà còn giúp đỡ cho cả những người
                      xung quanh nữa đấy! Và bạn biết không? Nếu bạn bị chán
                      những chiếc khẩu trang đơn giản và đơn điệu thì hoàn toàn
                      có thể sáng ra những chiếc khẩu trang độc đáo mang phong
                      cách của riêng mình đấy nhé!
                    </p>
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
