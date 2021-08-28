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
"timestamp": '28/08/2021 08:40 AM',
"title": 'Show thực tế sao nữ Hàn muốn né nhất: Sơ hở là lộ mặt mộc nhận không ra!',
"description": 'Khi tham gia Law Of The Jungle, các sao nữ Hàn Quốc bắt buộc không được trang điểm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-9-16297896883171699901946.png',
"alt": 'Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:40 AM',
"link": '/show-thuc-te-sao-nu-han-muon-ne-nhat-so-ho-la-lo-mat-moc-nhan-khong-ra',
"zcomponent": 'page_20210828084046',
"filepath": './20210828084046-show-thuc-te-sao-nu-han-muon-ne-nhat-so-ho-la-lo-mat-moc-nhan-khong-ra.js'
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
  "Show thực tế sao nữ Hàn muốn né nhất: Sơ hở là lộ mặt mộc nhận không ra!";
const author = "HẢI LAN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:40 AM";
const description =
  "Khi tham gia Law Of The Jungle, các sao nữ Hàn Quốc bắt buộc không được trang điểm.";
const link =
  "show-thuc-te-sao-nu-han-muon-ne-nhat-so-ho-la-lo-mat-moc-nhan-khong-ra";
const tagparam = [
  "Mặt mộc",
  "không trang điểm",
  "sao Hàn",
  "idol",
  "Kpop",
  "hani",
  "TWICE",
  "exid",
  "gfriend",
  "Law of the Jungle",
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

export default function page_20210828084046() {
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
                      Vì là một chương trình đòi hỏi độ chân thực tối đa nên dàn
                      sao tham gia <strong>Law Of The Jungle</strong> cũng phải
                      hạn chế son phấn nhất có thể, chính vì thế, nhiều khoảnh
                      khắc <strong>mặt mộc</strong> "để đời" đã được lên sóng.
                    </p>
                    <p>
                      Đây cũng là cơ hội để loạt sao nữ Hàn Quốc khoe gương mặt
                      không son phấn trước mắt các fan, nhiều người được khen
                      nức nở bởi gương mặt xinh đẹp, nhưng cũng có những trường
                      hợp nhận về ý kiến rằng trông kém sắc hơn khi thiếu sự hỗ
                      trợ của son phấn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-1-1629789685948447648745.png"
                      alt="1, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Hani trông nhợt nhạt hơn nhưng vẫn khá xinh đẹp"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-1-1629789687911223062904.png"
                      alt="2, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Nhiều người không nhận ra mỹ nhân gợi cảm Hyosung (Secret)"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-2-1629789688473636867866.png"
                      alt="3, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Nữ hoàng trang điểm Jaekyung trông cũng khá lạ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-3-16297896899431785566039.png"
                      alt="4, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Park Bo Young trông như 2 người khác nhau nhưng vẫn đáng yêu"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-5-16297896879471748705517.png"
                      alt="5, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Mỹ nhân của Produce 101 Sejeong khi để mặt mộc đỏ au"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-8-1629789688240731777227.png"
                      alt="6, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Khó nhận ra người bên phải lại là mỹ nhân nóng bỏng Lee Tae Im"
                    />

                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-10-16297896883581463217203.png"
                      alt="7, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Jeongyeon (TWICE) trông khá tinh nghịch"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-20-1629789689476644144561.png"
                      alt="8, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Nữ hoàng phim nóng Jo Yeo Jeong"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-24-16297896899691889199256.png"
                      alt="9, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Nhan sắc mỹ miều của Minah khi được và khi không được trang điểm mắt"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-29-1629789690116955249501.png"
                      alt="10, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Cựu thành viên GFRIEND Yerin để mặt mộc khoe được làn da trắng mịn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-35-1629789690530709750025.png"
                      alt="11, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Dasom có lẽ là người đẹp để mặt mộc đẹp nhất showbiz Hàn bên cạnh Song Ji Hyo"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-36-16297896902871201509516.png"
                      alt="12, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Bạn gái Lee Kwang Soo - Lee Sun Bin không trang điểm mà vẫn đẹp không tì vết"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-37-16297896905461443694177.png"
                      alt="13, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note="Kwon Nara không hổ là người đẹp tiềm năng"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-9-16297896883171699901946.png"
                      alt="14, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-12-16297896887751717697471.png"
                      alt="15, Mặt mộc,không trang điểm,sao Hàn,idol,Kpop,hani,TWICE,exid,gfriend,Law of the Jungle,"
                      note=""
                    />
                    <p>Ảnh: Internet</p>
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
