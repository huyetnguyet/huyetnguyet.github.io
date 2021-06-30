import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/06/2021 10:05 PM',
"title": 'Lưu Thi Thi 17 tuổi đẹp tới nhường nào: Gương mặt bầu bĩnh siêu dễ thương, tóc bết khóc sụt sùi mà visual vẫn ngút ngàn',
"description": 'Loạt ảnh cũ của Lưu Thi Thi mới được "đào mộ" khiến dân tình phải xuýt xoa trước nét đẹp kiều diễm của cô nàng.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'Lưu Thi Thi,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,mỹ nhân,',
"category": 'stars',
"date": '29/06/2021',
"time": '10:05 PM',
"link": '/luu-thi-thi-17-tuoi-dep-toi-nhuong-nao-guong-mat-bau-binh-sieu-de-thuong-toc-bet-khoc-sut-sui-ma-visual-van-ngut-ngan',
"zcomponent": 'page_20210629220538',
"filepath": './20210629220538-luu-thi-thi-17-tuoi-dep-toi-nhuong-nao-guong-mat-bau-binh-sieu-de-thuong-toc-bet-khoc-sut-sui-ma-visual-van-ngut-ngan.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Lưu Thi Thi 17 tuổi đẹp tới nhường nào: Gương mặt bầu bĩnh siêu dễ thương, tóc bết khóc sụt sùi mà visual vẫn ngút ngàn";
const author = "NHÃ AN,";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 10:05 PM";
const description =
  'Loạt ảnh cũ của Lưu Thi Thi mới được "đào mộ" khiến dân tình phải xuýt xoa trước nét đẹp kiều diễm của cô nàng.';
const link =
  "luu-thi-thi-17-tuoi-dep-toi-nhuong-nao-guong-mat-bau-binh-sieu-de-thuong-toc-bet-khoc-sut-sui-ma-visual-van-ngut-ngan";
const tagparam = [
  "Lưu Thi Thi",
  "sao Hoa ngữ",
  "Mỹ nhân Hoa ngữ",
  "nhan sắc mỹ nhân Hoa ngữ",
  "mỹ nhân",
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

export default function page_20210629220538() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Mới đây, trang Sohu đã "đào mộ" được những hình ảnh cực kỳ
                    quý giá của <strong>Lưu Thi Thi</strong> thuở mới chân ướt
                    chân ráo bước vào nghề. Netizen lại được dịp "xỉu up xỉu
                    down" với nét đẹp trong veo cực kỳ xuất sắc của Lưu Thi Thi.
                    Vẫn biết bà xã Ngô Kỳ Long sở hữu visual bất chấp cả ảnh
                    không PTS, lại chưa từng "dao kéo" lần nào song Cnet vẫn
                    phải trầm trồ với những khung hình lột tả rõ nét nhan sắc
                    ngày ấy của nàng "Nhược Hy".
                  </p>
                  <p>
                    Năm 17 tuổi, <strong>Lưu Thi Thi</strong> để mái bằng, mái
                    tóc dài đen tuyền càng tôn lên làn da trắng hồng, mịn màng
                    cùng làn môi căng mọng dịu dàng. Có thể nói, cho tới tận bây
                    giờ, nét đẹp của Lưu Thi Thi vẫn y như ngày xưa. Không chỉ
                    vậy, khoảnh khắc cô nàng tóc bết vì dầm mưa, gương mặt lem
                    nhem vì nước mắt lại khiến dân tình "đổ gục" vì quá xinh.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage src="https://kenh14cdn.com/203336854389633024/2021/6/29/photo-1-16249822963361057313185.gif" />
                  <ContentImage src="https://kenh14cdn.com/203336854389633024/2021/6/29/photo-1-1624982382641646939865.gif" />
                  <ContentImage src="https://kenh14cdn.com/203336854389633024/2021/6/29/photo-1-16249823900711736515318.gif" />
                  <ContentImage src="https://kenh14cdn.com/203336854389633024/2021/6/29/photo-1-1624982399398217482314.gif" />
                  <ContentImage src="https://kenh14cdn.com/203336854389633024/2021/6/29/photo-1-16249823886411356406311.gif" />
                  <p>
                    Khi <strong>mỹ nhân</strong> rơi lệ, triệu trái tim như tan
                    vỡ
                  </p>
                  <p>
                    Cho tới tận bây giờ, <strong>Lưu Thi Thi</strong> vẫn là{" "}
                    <strong>mỹ nhân</strong> "bảo chứng visual" của showbiz Hoa
                    ngữ khi không có bất cứ scandal nào liên quan tới thẩm mỹ.
                    Nét đẹp của bà mẹ một con giờ đây trở nên đằm thắm, quyến rũ
                    hơn rất nhiều.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220538--10-845782.jpg")
                        .default
                    }
                    alt="1, Lưu Thi Thi,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,mỹ nhân,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220538--11-213612.jpg")
                        .default
                    }
                    alt="2, Lưu Thi Thi,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,mỹ nhân,"
                    note=""
                  />
                  <p>Nguồn: Sohu</p>
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
