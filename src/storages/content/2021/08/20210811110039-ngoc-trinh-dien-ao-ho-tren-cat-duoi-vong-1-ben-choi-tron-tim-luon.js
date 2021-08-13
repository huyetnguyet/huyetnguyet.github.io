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
"timestamp": '11/08/2021 11:00 AM',
"title": 'Ngọc Trinh diện áo hở trên, cắt dưới, vòng 1 bèn chơi trốn tìm luôn',
"description": 'Ngọc Trinh thường xuyên có những pha chơi "ú oà" với chính vòng 1 của mình.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/1569885654275627350160585801166340115404300n-161511920757831234536-1615178661479-16151786617951936696395-16286859687671815588616.jpeg',
"alt": 'sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,',
"category": 'stars',
"date": '11/08/2021',
"time": '11:00 AM',
"link": '/ngoc-trinh-dien-ao-ho-tren-cat-duoi-vong-1-ben-choi-tron-tim-luon',
"zcomponent": 'page_20210811110039',
"filepath": './20210811110039-ngoc-trinh-dien-ao-ho-tren-cat-duoi-vong-1-ben-choi-tron-tim-luon.js'
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
  "Ngọc Trinh diện áo hở trên, cắt dưới, vòng 1 bèn chơi trốn tìm luôn";
const author = "TỬ ĐAN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 11:00 AM";
const description =
  'Ngọc Trinh thường xuyên có những pha chơi "ú oà" với chính vòng 1 của mình.';
const link =
  "ngoc-trinh-dien-ao-ho-tren-cat-duoi-vong-1-ben-choi-tron-tim-luon";
const tagparam = [
  "sao đỏ thời trang",
  "Ngọc Trinh",
  "sao mặc xấu",
  "mặc đẹp",
  "vòng 1 sao",
  "showbiz Việt",
  "sao Việt",
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

export default function page_20210811110039() {
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
                      <strong>Ngọc Trinh</strong> vốn là mỹ nữ yêu chiều các
                      kiểu áo o ép vòng 1, váy vóc trễ nải để thiên hạ hiểu rằng
                      cô sở hữu khuôn ngực đẹp tự nhiên. Nhưng độn đẩy và o ép
                      chán chê, vẫn có những khi nàng như hoá phép vi diệu,
                      khiến vòng 1... bay màu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/ngoc-trinh-nguc-lep-05-16286848816492069256795.jpeg"
                      alt="1, sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,"
                      note="Tay cầm túi Prada, chân đi giày ton sur ton với màu áo, Ngọc Trinh đeo kính râm ở trong nhà như thể hiện 1 sự bí ẩn nào đó mà chúng ta chưa thể biết được"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/ngoc-trinh-nguc-lep-04-1628684881619904168881.jpeg"
                      alt="2, sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,"
                      note="Mẫu áo dây dợ chằng chịt làm mẫu crop top biến tấu giúp khoe tối đa hình thể của người đẹp Trà Vinh. Tuy nhiên có 1 điểm thật lạ..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/ngoc-trinh-nguc-lep-02-16286848816111963591901.jpeg"
                      alt="3, sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,"
                      note="Vòng 1 của Ngọc Trinh hoàn toàn như biến mất ở góc chính diện, dấu hiệu rãnh ngực cũng không rõ ràng. Có thể nói, chiếc áo như nơi trú ẩn an toàn để vòng 1 cô nàng chơi trốn tìm"
                    />
                    <p>
                      Trên thực tế, <strong>Ngọc Trinh</strong> từng có vài lần
                      xuất hiện với vòng 1 ẩn - hiện thất thường sau lớp áo
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trước đó cô thường xuyên mặc crop top khoét sâu phần ngực
                      hoặc diện các thiết kế với công năng chủ yếu là khoe khuôn
                      ngực đầy đặn, được đùn đẩy lên thật cao. So sánh hình ảnh
                      trên và dưới, khó có ai nghĩ đây cùng là cặp tuyết lê của
                      1 người
                    </p>
                    <p>
                      Đúng là có thị lực 10/10 thì{" "}
                      <strong>Sao Đỏ Thời Trang</strong> cũng không thể nhìn ra
                      chuyện gì xảy tới với vòng 1 <strong>Ngọc Trinh</strong>,
                      lúc này lúc nọ chẳng biết đâu mà lần. Chỉ có điều với vòng
                      ngực "tàng hình" như ảnh đầu, có thể khẳng định người đẹp
                      không hề can thiệp "dao kéo" để đại tu chi tiết nào cả!
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/1569885654275627350160585801166340115404300n-161511920757831234536-1615178661479-16151786617951936696395-16286859687671815588616.jpeg"
                      alt="4, sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/1559514974677172242661135761418683630132820n-1615119207560283703458-1615178658221-16151786585213848943-1628685968527522891403.jpeg"
                      alt="5, sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/ngoc-trinh-1-15899871080091745521697-16286861048221800707261.jpeg"
                      alt="6, sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/ngoc-trinh-mac-xe-sau-khoe-nguc-day-sau-loat-anh-nguc-boc-hoi-56036e-16286861046121827613901.jpeg"
                      alt="7, sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/ngoc-trinh-06-1628686104171973432518.jpeg"
                      alt="8, sao đỏ thời trang,Ngọc Trinh,sao mặc xấu,mặc đẹp,vòng 1 sao,showbiz Việt,sao Việt,"
                      note=""
                    />
                    <p>Ảnh: Sưu tầm</p>
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
