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
"timestamp": '14/08/2021 11:39 AM',
"title": 'Cải tạo căn hộ 67m2 với chi phí 230 triệu: Thiết kế toàn đường cong mềm mại, khu bếp - bàn ăn nối liền cực hay ho',
"description": 'Căn hộ được cải tạo theo phong cách hiện đại, tươi trẻ với mức chi phí hợp lý.',
"src": 'https://kenh14cdn.com/zoom/90_60/203336854389633024/2021/8/14/photo1628937189535-1628937189682931671592.png',
"alt": 'Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,',
"category": 'life',
"date": '14/08/2021',
"time": '11:39 AM',
"link": '/cai-tao-can-ho-67m2-voi-chi-phi-230-trieu-thiet-ke-toan-duong-cong-mem-mai-khu-bep-ban-an-noi-lien-cuc-hay-ho',
"zcomponent": 'page_20210814113959',
"filepath": './20210814113959-cai-tao-can-ho-67m2-voi-chi-phi-230-trieu-thiet-ke-toan-duong-cong-mem-mai-khu-bep-ban-an-noi-lien-cuc-hay-ho.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "Cải tạo căn hộ 67m2 với chi phí 230 triệu: Thiết kế toàn đường cong mềm mại, khu bếp - bàn ăn nối liền cực hay ho";
const author = "HÀ BÍCH NGỌC,";
const source = "Trí Thức Trẻ";
const timestamp = "14/08/2021 11:39 AM";
const description =
  "Căn hộ được cải tạo theo phong cách hiện đại, tươi trẻ với mức chi phí hợp lý.";
const link =
  "cai-tao-can-ho-67m2-voi-chi-phi-230-trieu-thiet-ke-toan-duong-cong-mem-mai-khu-bep-ban-an-noi-lien-cuc-hay-ho";
const tagparam = [
  "Căn hộ chung cư",
  "phong cách hiện đại",
  "tranh treo tường",
  "Trang trí nội thất",
  "gam màu trắng",
  "nhà vệ sinh",
  "không gian sinh hoạt",
  "Đồ nội thất",
  "bàn đa năng",
  "Tủ quần áo",
  "bàn trang điểm",
  "Cải tạo nhà",
  "house n home",
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

export default function page_20210814113959() {
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
                      Căn hộ được cải tạo theo{" "}
                      <strong>phong cách hiện đại</strong>, tươi trẻ với mức chi
                      phí hợp lý.
                    </p>
                    <p>
                      <strong>Căn hộ chung cư</strong> có diện tích 67,2m2 tại
                      Eco Green - Nguyễn Xiển được cải tạo lại gồm 1 phòng khách
                      - bếp, phòng ngủ master và phòng ngủ cho bé. Đây là căn hộ
                      của 1 cặp vợ chồng trẻ cùng 1 cậu con trai hiếu động.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z2675997444798926a48edb1ccf29a61e98936c9f24a35-16289359960101670256158.jpg"
                      alt="6, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z2675997463923235f465fb2ae9ce644f2f08aa6c640b8-16289360634461903597796.jpg"
                      alt="7, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z267484188234136d04b2e6929dc75775b6f767da5737d-16289361551351252899507.jpg"
                      alt="8, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z267484222557436174d863b4ba604e4b8dfec1c475db0-16289359959692074298737.jpg"
                      alt="9, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z2674840430613f8045258554edc1d1a6cf7111ae65096-1628935994674113599034.jpg"
                      alt="10, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z2675997476118555fe5614ce7cd268c3ad76308020191-16289359960801807336073.jpg"
                      alt="11, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z26748406272440e1f65709443f5c822aaf372b156e7c3-16289359951491314969539.jpg"
                      alt="12, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/8/14/z2674840584006c42291fb9d223e5de11745aca08b6672-16289359950681871079977.jpg"
                      alt="13, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z2674840515908d11420d8b973973b5cf258cbf8a866ae-1628935994997262516266.jpg"
                      alt="14, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z26748404794238d80ddb064c2b37243f36d162aa16bc8-162893599494719217149.jpg"
                      alt="15, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/14/z2674842170262247f98783fa546a36ef403a3c2a0a6cb-1628935995832906797447.jpg"
                      alt="16, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z2674842123691b55732f42f41156aee6de3aa4d2bd428-16289359956111341176346.jpg"
                      alt="17, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/z267484202555272d45d3b8d7c1833ee2c4c0f56e0da67-16289359953141728239480.jpg"
                      alt="18, Căn hộ chung cư,phong cách hiện đại,tranh treo tường,Trang trí nội thất,gam màu trắng,nhà vệ sinh,không gian sinh hoạt,Đồ nội thất,bàn đa năng,Tủ quần áo,bàn trang điểm,Cải tạo nhà,house n home,"
                      note=""
                    />

                    <p>Nguồn: Mộc Xinh Designs</p>
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
