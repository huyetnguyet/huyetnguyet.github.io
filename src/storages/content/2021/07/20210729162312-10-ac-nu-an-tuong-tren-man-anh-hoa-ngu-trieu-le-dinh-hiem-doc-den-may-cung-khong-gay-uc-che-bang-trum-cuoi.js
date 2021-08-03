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
"timestamp": '29/07/2021 04:23 PM',
"title": '10 ác nữ ấn tượng trên màn ảnh Hoa ngữ: Triệu Lệ Dĩnh hiểm độc đến mấy cũng không gây ức chế bằng "trùm cuối"',
"description": 'Đây đều là những mỹ nhân sở hữu nhan sắc xinh đẹp nhưng lòng dạ mưu mô, thủ đoạn trong phim Hoa ngữ.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/3-1627031123979499954580.jpg',
"alt": 'triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:23 PM',
"link": '/10-ac-nu-an-tuong-tren-man-anh-hoa-ngu-trieu-le-dinh-hiem-doc-den-may-cung-khong-gay-uc-che-bang-trum-cuoi',
"zcomponent": 'page_20210729162312',
"filepath": './20210729162312-10-ac-nu-an-tuong-tren-man-anh-hoa-ngu-trieu-le-dinh-hiem-doc-den-may-cung-khong-gay-uc-che-bang-trum-cuoi.js'
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
  '10 ác nữ ấn tượng trên màn ảnh Hoa ngữ: Triệu Lệ Dĩnh hiểm độc đến mấy cũng không gây ức chế bằng "trùm cuối"';
const author = "XỬ NỮ,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:23 PM";
const description =
  "Đây đều là những mỹ nhân sở hữu nhan sắc xinh đẹp nhưng lòng dạ mưu mô, thủ đoạn trong phim Hoa ngữ.";
const link =
  "10-ac-nu-an-tuong-tren-man-anh-hoa-ngu-trieu-le-dinh-hiem-doc-den-may-cung-khong-gay-uc-che-bang-trum-cuoi";
const tagparam = [
  "triệu lệ dĩnh",
  "Lý Thuần",
  "lý thấm",
  "tô thanh",
  "mao hiểu đồng",
  "Tân Chỉ Lôi",
  "Xa Thi Mạn",
  "tưởng hân",
  "Lưu Đào",
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

export default function page_20210729162312() {
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
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/3-1627031123979499954580.jpg"
                      alt="1, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/2-16270336649111317196586.jpg"
                      alt="2, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/4-16270311167211977363935.jpg"
                      alt="3, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/1-16270336648741832740048.jpg"
                      alt="4, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/9-16270338210901293969122.jpg"
                      alt="5, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/12-1627033802785256705015.jpg"
                      alt="6, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/20-1627033821160623956559.jpg"
                      alt="7, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/21-16270338211681106131750.jpg"
                      alt="8, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p></p>

                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/22-1627032241374328844065.jpg"
                      alt="9, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/23-16270322414171601826270.jpg"
                      alt="10, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/accomplishedclutteredass-sizerestricted-16270341119851339738621.gif"
                      alt="11, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/tumblrokwpfzuq4y1ql4cgco2540-16270341120141917279748.gif"
                      alt="12, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/50-1627034265312682889088.jpg"
                      alt="13, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/44-16270342653001992048116.gif"
                      alt="14, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/46-16270326156221007339407.gif"
                      alt="15, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/42-16270326154721953495303.gif"
                      alt="16, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/34-1627034387529276264422.jpg"
                      alt="17, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/32-16270343874101079606406.jpg"
                      alt="18, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/35-16270343875371907218589.jpg"
                      alt="19, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/36-1627034387555491076818.gif"
                      alt="20, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/39-16270345300291648162713.jpg"
                      alt="21, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/37-1627034529934441753573.jpg"
                      alt="22, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/38-16270345300181724485612.jpg"
                      alt="23, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/41-16270345300352087579382.gif"
                      alt="24, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/29-16270347491361621687975.jpg"
                      alt="25, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/27-16270347489881269628955.jpg"
                      alt="26, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/28-1627034749120103276591.jpg"
                      alt="27, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/7cdc8c4da4e2fef2a34fc1d906737d22-16270391521621745095518.gif"
                      alt="28, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/62-16270393612021086790734.jpg"
                      alt="29, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/59-16270393611731525864855.jpg"
                      alt="30, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/61-1627039361192763324776.jpg"
                      alt="31, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/60-16270393611861949187842.jpg"
                      alt="32, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/13/duong-tuyet-1-16261516410221453075551.jpg"
                      alt="33, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/13/duong-tuyet-2-16261516410701893905764.jpg"
                      alt="34, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/13/jietuweiming-2647-16261516411981958504260.jpeg"
                      alt="35, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/13/3778ae2b67b443dcbb478ace85d55a18-1626151640939821323007.gif"
                      alt="36, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/65-1627040271801495449967.jpg"
                      alt="37, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/63-16270402717861764889442.jpg"
                      alt="38, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/64-16270402717941761751343.jpg"
                      alt="39, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/66-1627040271808542395577.gif"
                      alt="40, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/66-1627040271808542395577.gif"
                      alt="41, triệu lệ dĩnh,Lý Thuần,lý thấm,tô thanh,mao hiểu đồng,Tân Chỉ Lôi,Xa Thi Mạn,tưởng hân,Lưu Đào,Mỹ nhân Hoa ngữ,"
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
