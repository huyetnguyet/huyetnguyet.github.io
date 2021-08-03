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
"timestamp": '29/06/2021 09:43 PM',
"title": 'Mỹ nhân Hoa ngữ đóng phim tiên hiệp: Ai cũng đẹp ngoại trừ "trùm cuối"!',
"description": 'Phim thần tiên kỳ ảo hay còn gọi là tiên hiệp là thể loại vốn được ưa chuộng trên màn ảnh Hoa ngữ.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/2-1624124044817534968683.jpg',
"alt": 'châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '29/06/2021',
"time": '09:43 PM',
"link": '/my-nhan-hoa-ngu-dong-phim-tien-hiep-ai-cung-dep-ngoai-tru-trum-cuoi',
"zcomponent": 'page_20210629214318',
"filepath": './20210629214318-my-nhan-hoa-ngu-dong-phim-tien-hiep-ai-cung-dep-ngoai-tru-trum-cuoi.js'
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
  'Mỹ nhân Hoa ngữ đóng phim tiên hiệp: Ai cũng đẹp ngoại trừ "trùm cuối"!';
const author = "XỬ NỮ,";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:43 PM";
const description =
  "Phim thần tiên kỳ ảo hay còn gọi là tiên hiệp là thể loại vốn được ưa chuộng trên màn ảnh Hoa ngữ.";
const link =
  "my-nhan-hoa-ngu-dong-phim-tien-hiep-ai-cung-dep-ngoai-tru-trum-cuoi";
const tagparam = [
  "châu đông vũ",
  "triệu lệ dĩnh",
  "Dương Mịch",
  "Địch Lệ Nhiệt Ba",
  "Dương Tử",
  "nghê ni",
  "Lưu Diệc Phi",
  "viên băng nghiên",
  "phim cổ trang",
  "phim tiên hiệp",
  "phim trung quốc",
  "phim Hoa ngữ",
  "Mỹ nhân Hoa ngữ",
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

export default function page_20210629214318() {
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
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/2-1624124044817534968683.jpg"
                      alt="1, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/4-16241240449041746601588.jpg"
                      alt="2, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/3-1624124044894272367169.jpg"
                      alt="3, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/1-1624124044806764131149.jpg"
                      alt="4, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/6-16241240768701942466744.jpeg"
                      alt="5, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/9-16241240768901492841949.jpg"
                      alt="6, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/5-1624124076799125833713.jpg"
                      alt="7, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/7-16241240768802090236144.jpeg"
                      alt="8, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/ezgifcom-gif-maker-2021-06-19t233957660-1624124137969755257912.gif"
                      alt="9, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/12-1624124128264863712980.jpg"
                      alt="10, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/11-1624124128256176727069.jpg"
                      alt="11, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/10-1624124128247412336296.jpg"
                      alt="12, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/16-1624124176682523278069.jpg"
                      alt="13, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/15-162412417667614569758.jpg"
                      alt="14, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/13-16241241766061745820390.jpg"
                      alt="15, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/14-16241241766691549858451.jpg"
                      alt="16, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/19-16241242071341734689822.jpg"
                      alt="17, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/20-1624124207144561756697.jpeg"
                      alt="18, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/18-1624124207118443528670.jpg"
                      alt="19, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/17-1624124207022434585466.jpg"
                      alt="20, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/24-16241242485891465830528.jpg"
                      alt="21, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/23-16241242485811656003519.jpg"
                      alt="22, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/21-16241242485121808998526.jpg"
                      alt="23, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/22-1624124248521326309203.gif"
                      alt="24, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/26-16241242967861360982563.png"
                      alt="25, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/27-1624124296798213219850.jpg"
                      alt="26, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/28-1624124296806980759699.jpg"
                      alt="27, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/25-16241242967771362668706.jpg"
                      alt="28, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/33-16241243319711469862779.jpg"
                      alt="29, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/31-1624124331963752450634.jpg"
                      alt="30, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/36-1624124332045471146078.jpg"
                      alt="31, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/20/35-16241243320372127456893.jpg"
                      alt="32, châu đông vũ,triệu lệ dĩnh,Dương Mịch,Địch Lệ Nhiệt Ba,Dương Tử,nghê ni,Lưu Diệc Phi,viên băng nghiên,phim cổ trang,phim tiên hiệp,phim trung quốc,phim Hoa ngữ,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>Nguồn ảnh: Tổng hợp</p>
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
