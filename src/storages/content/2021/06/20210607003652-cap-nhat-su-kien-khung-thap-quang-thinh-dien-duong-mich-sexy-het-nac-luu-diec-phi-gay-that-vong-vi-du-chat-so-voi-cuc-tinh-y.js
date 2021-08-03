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
"timestamp": 07/06/2021 12:36 AM",
"title": Sự kiện khủng Thập Quang Thịnh Điển: Dương Mịch sexy hết nấc, Lưu Diệc Phi gây thất vọng vì dừ chát so với Nhiệt Ba - Cúc Tịnh Y",
"description": Bên cạnh Dương Mịch, Lưu Diệc Phi, sự kiện Thập Quang Thịnh Điển sáng ngày 7/6 còn gây sốt bởi dàn sao hot như Cúc Tịnh Y, Tiêu Chiến,...",
"src": ",
"alt": Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, ",
"category": images",
"date": 07/06/2021",
"time": 12:36 AM",
"link": "/cap-nhat-su-kien-khung-thap-quang-thinh-dien-duong-mich-sexy-het-nac-luu-diec-phi-gay-that-vong-vi-du-chat-so-voi-cuc-tinh-y",
"zcomponent": page_20210607003652",
"filepath": ./20210607003652-cap-nhat-su-kien-khung-thap-quang-thinh-dien-duong-mich-sexy-het-nac-luu-diec-phi-gay-that-vong-vi-du-chat-so-voi-cuc-tinh-y.js"
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
  "Sự kiện khủng Thập Quang Thịnh Điển: Dương Mịch sexy hết nấc, Lưu Diệc Phi gây thất vọng vì dừ chát so với Nhiệt Ba - Cúc Tịnh Y";
const author = "NHÃ AN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 12:36 AM";
const description =
  "Bên cạnh Dương Mịch, Lưu Diệc Phi, sự kiện Thập Quang Thịnh Điển sáng ngày 7/6 còn gây sốt bởi dàn sao hot như Cúc Tịnh Y, Tiêu Chiến,...";
const link =
  "cap-nhat-su-kien-khung-thap-quang-thinh-dien-duong-mich-sexy-het-nac-luu-diec-phi-gay-that-vong-vi-du-chat-so-voi-cuc-tinh-y";
const tagparam = [
  "duong-mich",
  "luu-diec-phi",
  "cuc-tinh-y",
  "hua-nguy-chau",
  "sao-hoa-ngu",
  "dich-le-nhiet-ba",
  "truong-vu-ky",
  "my-nhan-hoa-ngu",
  "ngo-loi",
  "nhan-sac-my-nhan-hoa-ngu",
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

export default function page_20210607003652() {
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
                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230384584171718332887.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note="Dương Mịch gây bão với nét đẹp quyến rũ tới từng milimet"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230383496231768723594.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note="Nét đẹp kiêu sa, sang chảnh của Dương Mịch hoàn toàn gây ấn tượng mạnh"
                    />
                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623038511869651112191.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note="Lưu Diệc Phi lại khiến nhiều người bất ngờ khi để mái tóc xoã"
                    />
                    <p></p>
                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/006qj4jkly1gr9mnvjqmvj30u01hd7bz-1623043169754420807162.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note="Quả thật, người đẹp lộ nhiều khuyết điểm nhan sắc"
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/006qj4jkly1gr9mnuu2ffj30u018zwkd-162304316967347679784.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note="Diện chiếc váy xanh cực kỳ gợi cảm, Nhiệt Ba gây sốt với visual xuất sắc"
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/005m1dahly1gr9mmue7l4j30qo140jts-162304338789963802120.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note="Tạo hình của người đẹp nhận được ngàn like ngàn tim"
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/005m1dahly1gr9mmswwspj30qo13ydih-1623043388127894274778.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623038611979546790576.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/photo-1-16230465626292114583494.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230384841691843566957.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230393075311376238810.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230385047351188492880.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/001x2fingy1gr9kjff207j61sx0u079s02-1-1623040171807955489413.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230385454351546097463.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/66a3b8f6gy1gr9mm555eyj21jk2bcx4u-162304316976384640027.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230385748211629567446.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230385807371185307991.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/photo-1-16230465446051857495832.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623041762763589892369.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230425681332089230814.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623042594126872305890.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623042361086866443141.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230423362751264062612.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230466591501530767839.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230466521781196611074.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230466521781196611074.jpg"
                      alt="Duong Mich, Luu Diec Phi, Cuc Tinh Y, Hua Nguy Chau, Sao Hoa Ngu, Dich Le Nhiet Ba, Truong Vu Ky, My Nhan Hoa Ngu, Ngo Loi, Nhan Sac My Nhan Hoa Ngu, "
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
