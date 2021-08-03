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
"timestamp": '02/08/2021 01:17 AM',
"title": 'Mỹ nhân Hoa ngữ "cưa sừng làm nghé" hóa nữ sinh: Nhiệt Ba - Trịnh Sảng trẻ trung ngỡ ngàng, "trùm cuối" là cao thủ hack tuổi',
"description": 'Nhiều mỹ nhân Hoa ngữ khiến khán giả ngỡ ngàng bởi vẻ trẻ trung và trong sáng khi vào vai nữ sinh.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/33-1627371707185415933730.jpg',
"alt": 'Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '02/08/2021',
"time": '01:17 AM',
"link": '/my-nhan-hoa-ngu-cua-sung-lam-nghe-hoa-nu-sinh-nhiet-ba-trinh-sang-tre-trung-ngo-ngang-trum-cuoi-la-cao-thu-hack-tuoi',
"zcomponent": 'page_20210802011700',
"filepath": './20210802011700-my-nhan-hoa-ngu-cua-sung-lam-nghe-hoa-nu-sinh-nhiet-ba-trinh-sang-tre-trung-ngo-ngang-trum-cuoi-la-cao-thu-hack-tuoi.js'
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
  'Mỹ nhân Hoa ngữ "cưa sừng làm nghé" hóa nữ sinh: Nhiệt Ba - Trịnh Sảng trẻ trung ngỡ ngàng, "trùm cuối" là cao thủ hack tuổi';
const author = "XỬ NỮ,";
const source = "Trí Thức Trẻ";
const timestamp = "02/08/2021 01:17 AM";
const description =
  "Nhiều mỹ nhân Hoa ngữ khiến khán giả ngỡ ngàng bởi vẻ trẻ trung và trong sáng khi vào vai nữ sinh.";
const link =
  "my-nhan-hoa-ngu-cua-sung-lam-nghe-hoa-nu-sinh-nhiet-ba-trinh-sang-tre-trung-ngo-ngang-trum-cuoi-la-cao-thu-hack-tuoi";
const tagparam = [
  "Địch Lệ Nhiệt Ba",
  "Dương Mịch",
  "Lưu Thi Thi",
  "Lưu Diệc Phi",
  "Trịnh Sảng",
  "Trần Nghiên Hy",
  "đàm tùng vận",
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

export default function page_20210802011700() {
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
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/33-1627371707185415933730.jpg"
                      alt="1, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/2196080579162843556536337139244900752318459n-1627371707194455222563.jpg"
                      alt="2, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/32-1627371707151127123711.jpg"
                      alt="3, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/31-16273717071431184244804.jpg"
                      alt="4, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/5-1627371273930967071318.jpg"
                      alt="5, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/12-1627371273942226699244.jpg"
                      alt="6, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/2-1627371273868858308245.jpg"
                      alt="7, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/4-1627371273885227055171.jpg"
                      alt="8, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/7041587056551009-16273714101121475948168.jpg"
                      alt="9, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/10-83cd6-16273714101021398546302.jpg"
                      alt="10, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/5-83cd6-16273714100532086436217.jpg"
                      alt="11, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/7-83cd6-1627371410068914709525.jpg"
                      alt="12, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/17-1627371455772430557243.jpg"
                      alt="13, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/18-16273714557821903675135.jpg"
                      alt="14, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/20-16273714558311872530839.jpg"
                      alt="15, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/19-16273714557901432783938.jpg"
                      alt="16, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/26-16273718168231930206907.jpg"
                      alt="17, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/29-16273718168981295310466.jpeg"
                      alt="18, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/27-16273718168831789920624.jpeg"
                      alt="19, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/28-162737181689049338123.jpg"
                      alt="20, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/16-16273718648201022905849.jpg"
                      alt="21, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/15-16273718648111885631243.jpg"
                      alt="22, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/14-162737186477574656088.jpg"
                      alt="23, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/13-162737186476742624003.jpg"
                      alt="24, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/22-16273719103711412447296.png"
                      alt="25, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/21-16273719103111551956608.jpg"
                      alt="26, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/23-1627371910381802545003.png"
                      alt="27, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/24-16273719103901722189410.png"
                      alt="28, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png"
                      alt="29, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png"
                      alt="30, Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Thi Thi,Lưu Diệc Phi,Trịnh Sảng,Trần Nghiên Hy,đàm tùng vận,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>Nguồn ảnh: Tổng hợp</p>
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
