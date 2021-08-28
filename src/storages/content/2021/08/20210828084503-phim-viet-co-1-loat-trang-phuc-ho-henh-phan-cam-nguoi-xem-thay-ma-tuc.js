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
"timestamp": '28/08/2021 08:45 AM',
"title": 'Phim Việt có 1 loạt trang phục hớ hênh phản cảm, người xem thấy mà tức!',
"description": 'Không rõ vì ý đồ của stylist hay gì mà nhiều diễn viên phim Việt lại chọn áo quần rất phản cảm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/o-mat-truoc-nhung-kieu-trang-phuc-ho-henh-trong-phim-viet-khan-gia-xem-cung-phai-buc-xuc-thanh-bi-ng-i-ph-n-x-1629900656-675-width600height337-1629951892879832787625.jpeg',
"alt": 'phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:45 AM',
"link": '/phim-viet-co-1-loat-trang-phuc-ho-henh-phan-cam-nguoi-xem-thay-ma-tuc',
"zcomponent": 'page_20210828084503',
"filepath": './20210828084503-phim-viet-co-1-loat-trang-phuc-ho-henh-phan-cam-nguoi-xem-thay-ma-tuc.js'
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
  "Phim Việt có 1 loạt trang phục hớ hênh phản cảm, người xem thấy mà tức!";
const author = "LÝ THẨM,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "28/08/2021 08:45 AM";
const description =
  "Không rõ vì ý đồ của stylist hay gì mà nhiều diễn viên phim Việt lại chọn áo quần rất phản cảm.";
const link =
  "phim-viet-co-1-loat-trang-phuc-ho-henh-phan-cam-nguoi-xem-thay-ma-tuc";
const tagparam = [
  "phim Việt",
  "phản cảm",
  "lố lăng",
  "hớ hênh",
  "thời trang trong phim",
  "Thanh Bi",
  "Phi Thanh Vân",
  "Liên Tít",
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

export default function page_20210828084503() {
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
                      Không rõ vì ý đồ của stylist hay gì mà nhiều diễn viên{" "}
                      <strong>phim Việt</strong> lại chọn áo quần rất{" "}
                      <strong>phản cảm</strong>.
                    </p>
                    <p>
                      <strong>Phim Việt</strong> của ngày nay đã có nhiều hơn sự
                      cầu toàn, chỉn chu trong cách lựa chọn trang phục cho diễn
                      viên, khiến hình ảnh của mọi nhân vật đều có sự đầu tư và
                      khiến người xem mãn nhãn.
                    </p>
                    <p>
                      Tuy nhiên, vẫn có không ít trường hợp, vì một lý do nào đó
                      mà áo quần nhân vật nhận "gạch ống" từ khán giả bởi độ mất
                      thẩm mỹ, thậm chí là <strong>phản cảm</strong>. Dẫu rất có
                      thể những nhân vật dưới đây diện trang phục cho phù hợp
                      tính cách trong phim nhưng vẫn khiến người xem la ó.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/do-mat-truoc-nhung-kieu-trang-phuc-ho-henh-trong-phim-viet-khan-gia-xem-cung-phai-buc-xuc-li-n-t-t-1629898830-360-width600height427-1629951892800502361319.jpeg"
                      alt="2, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note="Mẫu áo ngủ mỏng nhẹ, hở ngực thái quá dễ gây cảm giác khó chịu đối với nhiều đối tượng khán giả"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/do-mat-truoc-nhung-kieu-trang-phuc-ho-henh-trong-phim-viet-khan-gia-xem-cung-phai-buc-xuc-screenshot1-1629898975-295-width600height540-1629951892844448115333.jpeg"
                      alt="3, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note="Thanh Bi trong Người Phán Xử diện áo trễ vải mỏng dính nhìn rõ da thịt ở trong. Dẫu không lồ lộ điểm nhạy cảm nhưng cảnh gợi dục thế này không nên xuất hiện trên những bộ phim thuộc khung giờ vàng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/do-mat-truoc-nhung-kieu-trang-phuc-ho-henh-trong-phim-viet-khan-gia-xem-cung-phai-buc-xuc-untitled-1-1629899422-497-width600height431-16299518929001864144617.jpeg"
                      alt="4, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note="Trương Phương trong Ván Cờ Vồ 2 với chiếc áo như được sinh ra với công dụng duy nhất là khoe ngực. Để diễn viên mặc trang phục thế này khi ghi hình, đạo diễn của phim cho thấy sự thiếu cẩn thận trong cân nhắc trang phục"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/do-mat-truoc-nhung-kieu-trang-phuc-ho-henh-trong-phim-viet-khan-gia-xem-cung-phai-buc-xuc-i-gia-ch-n-t-1629899303-569-width600height593-16299518927401192952650.jpeg"
                      alt="5, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note="Chuyện tương tự cũng xảy ra ở Đại Gia Chân Đất khi nữ diễn viên mặc chân váy denim với chiếc bra bé xíu, sắp tuột ra tới nơi"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/26/dai-gia-chan-dat-1548257194-width660height880-1629957615425273873634.jpeg"
                      alt="6, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/o-mat-truoc-nhung-kieu-trang-phuc-ho-henh-trong-phim-viet-khan-gia-xem-cung-phai-buc-xuc-thanh-bi-ng-i-ph-n-x-1629900656-675-width600height337-1629951892879832787625.jpeg"
                      alt="7, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/do-mat-truoc-nhung-kieu-trang-phuc-ho-henh-trong-phim-viet-khan-gia-xem-cung-phai-buc-xuc-phi-thanh-v-n-1629899145-300-width600height378-16299518928271020011457.jpeg"
                      alt="8, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/26/tttt-0015-1629957615932135758712.jpeg"
                      alt="9, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/26/photo-0-15475396156321664550459-16299576158671384550126.jpeg"
                      alt="10, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/26/d9847f81bec757990ed6-1545557079016848359763-crop-15455582051111264093641-15743034280611462601369-162995761417239786010.jpeg"
                      alt="11, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/oc-nhung-kieu-trang-phuc-ho-henh-trong-phim-viet-khan-gia-xem-cung-phai-buc-xuc-th-y-an-nh-ng-c-g-i-trong-tp-1629899176-477-width600height450-16299518928621332423342.jpeg"
                      alt="12, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/26/tinngan1020251629320101-1629951892966945801365.gif"
                      alt="16, phim Việt,phản cảm,lố lăng,hớ hênh,thời trang trong phim,Thanh Bi,Phi Thanh Vân,Liên Tít,"
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
