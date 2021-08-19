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
"timestamp": '15/08/2021 04:05 PM',
"title": 'Nhan sắc xinh đẹp của thiên thần trượt băng đã cosplay Trùng Trụ, tài sắc vẹn toàn càng ngắm càng mê',
"description": 'Cùng đến với những hình ảnh cực kỳ xinh đẹp của thiên thần trượt băng đã cosplay Trùng Trụ gây sốt cộng đồng mạng trong những ngày vừa qua nhé!',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/15/co1-16290067656831069574130.jpg',
"alt": 'LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,',
"category": 'stars',
"date": '15/08/2021',
"time": '04:05 PM',
"link": '/nhan-sac-xinh-dep-cua-thien-than-truot-bang-da-cosplay-trung-tru-tai-sac-ven-toan-cang-ngam-cang-me',
"zcomponent": 'page_20210815160540',
"filepath": './20210815160540-nhan-sac-xinh-dep-cua-thien-than-truot-bang-da-cosplay-trung-tru-tai-sac-ven-toan-cang-ngam-cang-me.js'
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
  "Nhan sắc xinh đẹp của thiên thần trượt băng đã cosplay Trùng Trụ, tài sắc vẹn toàn càng ngắm càng mê";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "15/08/2021 04:05 PM";
const description =
  "Cùng đến với những hình ảnh cực kỳ xinh đẹp của thiên thần trượt băng đã cosplay Trùng Trụ gây sốt cộng đồng mạng trong những ngày vừa qua nhé!";
const link =
  "nhan-sac-xinh-dep-cua-thien-than-truot-bang-da-cosplay-trung-tru-tai-sac-ven-toan-cang-ngam-cang-me";
const tagparam = [
  "LỄ HỘI COSPLAY",
  "BỘ ẢNH COSPLAY",
  "CHÙM ẢNH COSPLAY",
  "NHÂN VẬT COSPLAY",
  "ẢNH COSPLAY",
  "COSPLAY KIMETSU NO YAIBA",
  "TRÙNG TRỤ KIMETSU NO YAIBA",
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

export default function page_20210815160540() {
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
                      Trong những ngày qua, cộng đồng mạng đang vô cùng xôn xao
                      với hình ảnh VĐV trượt băng nghệ thuật Marin Honda cosplay
                      thành Trùng Trụ Shinobu trong Kimetsu No Yaiba. Chưa tính
                      đến chuyện màn hóa thân của cô nàng chiều lòng các "quý
                      bửu" thế nào, hàng triệu người trên thế giới đã chết mê
                      chết mệt bởi nhan sắc quá đỗi rực rỡ của Marin.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/co1-16290067656831069574130.jpg"
                      alt="1, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <p>
                      Cho những ai chưa biết, Marin Honda là nữ VĐV trượt băng
                      trẻ tuổi được xem là "thần đồng" trong giới trượt băng
                      nghệ thuật Nhật Bản. Cô từng là nhà vô địch World Junior
                      năm 2016, Á quân World Junior năm 2017, huy chương đồng
                      Junior Grand Prix Final năm 2015 - 2016. Hiện tại, thiên
                      thần sân băng này đang nắm giữ thứ hạng 27 trên bảng xếp
                      hạng VĐV trượt băng nghệ thuật nữ toàn thế giới. Marin
                      Honda sinh ngày 21 tháng 8 năm 2001 và hiện cô chỉ mới có
                      19 tuổi mà thôi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/co7-1629006836188431748617.jpg"
                      alt="2, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/co8-1629006842886153570731.jpg"
                      alt="3, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/co6-1629006823597205926729.jpg"
                      alt="4, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <p>
                      Sở hữu tài năng hơn người, Marin cũng đặc biệt thu hút
                      khán giả bởi ngoại hình xinh đẹp, tươi tắn không thua gì
                      các idol nổi tiếng. Không chỉ đẹp khi lên sân băng, Marin
                      Honda trong đời thường cũng vô cùng xinh đẹp. Trên
                      Instagram cá nhân, cô nàng thường đăng các hình ảnh thường
                      ngày của mình, khiến hàng trăm nghìn fan yêu thích dù hình
                      ảnh của cô vô cùng đơn giản. Các bức ảnh của cô 99% đều có
                      hơn 100,000 like, một con số mà đến cả các diễn viên, ca
                      sĩ nổi tiếng cũng phải mơ ước.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/co5-1629006817313376916211.jpg"
                      alt="5, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/co4-16290068119482125985295.jpg"
                      alt="6, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/co2-16290067995332018776533.jpg"
                      alt="8, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />

                    <p>
                      Sau khi đăng tải hình <strong>ảnh cosplay</strong> Trùng
                      Trụ Shinobu, Instagram của Marin Honda đã có 987,000
                      followers và chắc chắn sẽ sớm đạt mốc 1 triệu trong tương
                      lai gần. Trong năm 2022, Marin Honda sẽ tham gia Olympic
                      mùa đông diễn ra tại Bắc Kinh, Trung Quốc. Với phong độ
                      hiện tại, Marin được xem là ứng cử viên nặng ký cho tấm
                      huy chương vàng tại Olympic mùa đông 2022. Trong tương
                      lai, mong rằng Marin Honda sẽ tiến xa hơn trong sự nghiệp
                      và hy vọng cô sẽ lấn sân sang cả mảng giải trí để chúng ta
                      được ngắm nhìn thật nhiều hình ảnh quý giá của cô nàng
                      xinh đẹp này!
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/co3-1629006804640919119148.png"
                      alt="7, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/co12-16290067805701526410388.jpg"
                      alt="9, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/co11-16290067752551780123412.jpg"
                      alt="10, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/co10-1629006770638898747859.jpg"
                      alt="11, LỄ HỘI COSPLAY,BỘ ẢNH COSPLAY,CHÙM ẢNH COSPLAY,NHÂN VẬT COSPLAY,ẢNH COSPLAY,COSPLAY KIMETSU NO YAIBA,TRÙNG TRỤ KIMETSU NO YAIBA,"
                      note=""
                    />

                    <p>
                      Các bạn thấy sao về nhan sắc của thiên thần trượt băng đã
                      cosplay Trùng Trụ, quả thực là tài sắc vẹn toàn phải không
                      nào? Hãy để lại ý kiến của mình nhé!
                    </p>
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
