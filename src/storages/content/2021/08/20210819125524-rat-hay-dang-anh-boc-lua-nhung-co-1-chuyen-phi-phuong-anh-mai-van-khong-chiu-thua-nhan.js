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
"timestamp": '19/08/2021 12:55 PM',
"title": 'Rất hay đăng ảnh bốc lửa nhưng có 1 chuyện Phí Phương Anh mãi vẫn không chịu thừa nhận',
"description": 'Phủ nhận chuyện "trùng tu" nhưng Phí Phương Anh vẫn làm dấy lên mối nghi ngờ chỉ qua vài bức ảnh.',
"src": 'https://kenh14cdn.com/203336854389633024/2021/6/22/cntm-square-1624353852281691920991.png',
"alt": 'phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,',
"category": 'stars',
"date": '19/08/2021',
"time": '12:55 PM',
"link": '/rat-hay-dang-anh-boc-lua-nhung-co-1-chuyen-phi-phuong-anh-mai-van-khong-chiu-thua-nhan',
"zcomponent": 'page_20210819125524',
"filepath": './20210819125524-rat-hay-dang-anh-boc-lua-nhung-co-1-chuyen-phi-phuong-anh-mai-van-khong-chiu-thua-nhan.js'
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
  "Rất hay đăng ảnh bốc lửa nhưng có 1 chuyện Phí Phương Anh mãi vẫn không chịu thừa nhận";
const author = "TỬ ĐAN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "19/08/2021 12:55 PM";
const description =
  'Phủ nhận chuyện "trùng tu" nhưng Phí Phương Anh vẫn làm dấy lên mối nghi ngờ chỉ qua vài bức ảnh.';
const link =
  "rat-hay-dang-anh-boc-lua-nhung-co-1-chuyen-phi-phuong-anh-mai-van-khong-chiu-thua-nhan";
const tagparam = [
  "phí phương anh",
  "công nghệ thẩm mỹ thời nay",
  "dao kéo",
  "phẫu thuật thẩm mỹ",
  "nghi vấn sao thẩm mỹ",
  "nghi án dao kéo",
  "star style",
  "Làm ngực",
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

export default function page_20210819125524() {
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
                      Phủ nhận chuyện "trùng tu" nhưng{" "}
                      <strong>Phí Phương Anh</strong> vẫn làm dấy lên mối nghi
                      ngờ chỉ qua vài bức ảnh.
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p>
                      Được phát hiện tiềm năng và từng bước trưởng thành tại
                      Gương Mặt Thương Hiệu mùa đầu tiên,{" "}
                      <strong>Phí Phương Anh</strong> được công chúng ghi nhớ
                      với ngoại hình trong sáng, "mặt học sinh body người mẫu".
                      Tuy nhiên, sự thay đổi ngoại hình của cô từ năm 2018, đặc
                      biệt là ở vòng 1 khiến người ta không khỏi đặt dấu chấm
                      hỏi.
                    </p>

                    <p>
                      Nhưng váy vóc hay tóc tai cũng không gây chú ý bằng vòng
                      ngực của Phương Anh. Bầu ngực căng mọng như trái chín, đồ
                      sộ và bề thế nấp sau lớp váy mỏng. Cái danh "Mặt học sinh
                      body người mẫu" giờ có lẽ nên đổi thành "Mặt học sinh body
                      phụ huynh"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/2-16291017383881043133225.jpeg"
                      alt="3, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note="Không chỉ vậy, năm 2019, cô từng vướng nghi án tiêm môi khi xuất hiện với môi tều căng mọng"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/1-16291017382561224388353.jpeg"
                      alt="4, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note="So sánh với hình ảnh trước đó, không khó để nhận ra sự khác biệt ở môi trên của Phí Phương Anh"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/21-shoot-anh-phi-phuong-anh-dep-48b47a-16099675870711907361989-16291028381591492276518.jpeg"
                      alt="5, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note="Có thể thấy rõ sự thay đổi vòng 1 trong những shoot hình này"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/phi-phuong-anh-1-154100444119288002671-1629110138599864512585.jpeg"
                      alt="6, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note="Nhưng không có chuyện gì qua được mắt dân mạng, chẳng thế mà vết sẹo dưới cánh tay - dấu hiệu làm ngực kia cũng bị netizen khơi ra và đặt nghi vấn"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/img-0142-jpg-2768-1472917541-1629102668718595032542.jpeg"
                      alt="10, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/1823856415288000438190709003331384380199238o-683x1024-16291027105571033370255.jpeg"
                      alt="11, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/1543285845-211-phi-phuong-anh-lo-noi-y-mieng-dan-nguc-tai-chung-thanh-phong-fashion-show-dat2949-1543279515-width550height824-16291032148421965349514.jpeg"
                      alt="12, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/5d08efd2ebd36-1049-1629109759052152931948.jpeg"
                      alt="13, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/6-1051-1629109759106875387931.jpeg"
                      alt="14, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/phi-phuong-anh-dien-set-do-500-trieu-dong-tai-su-kien-quoc-te-7220221836263019573955075709861086740611072o-1575341966-width959height640-1629109759130621898967.jpeg"
                      alt="15, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/phi-phuong-anh-khoe-nguc-ngon-ngon-trong-bikini-khien-fan-tron-mat-870febcd-16291107848891570560797.jpeg"
                      alt="16, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/phi-phuong-anh-khoe-nguc-ngon-ngon-trong-bikini-khien-fan-tron-mat-d2feff1e-1629110784805593993047.jpeg"
                      alt="17, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/base64-1629110274551851719745.png"
                      alt="18, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/anh-chup-man-hinh-2021-02-24-luc-45253-ch-1614160485726103190076-16291101385911796670837-1629110185311661362494.png"
                      alt="19, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/p1-1585035220794500016325-1585070286913-1585070287108997328125-16291032148571189830396.jpeg"
                      alt="20, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-15273439729961592845511-1629103214888880900028.jpeg"
                      alt="21, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/1538300860-929-phi-phuong-anh-mac-ao-tam-lo-than-hinh-hoan-hao-khong-mo-thua-phiphuonganh-2-1537778460-width500height889-1629103214695450049483.jpeg"
                      alt="22, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/phi-phuong-anh-khoe-nguc-ngon-ngon-trong-bikini-khien-fan-tron-mat-31b58a0b-1629103214873929887528.jpeg"
                      alt="23, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/base64-1629103520661440620650.png"
                      alt="24, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/base64-16291035366441263645911.png"
                      alt="25, phí phương anh,công nghệ thẩm mỹ thời nay,dao kéo,phẫu thuật thẩm mỹ,nghi vấn sao thẩm mỹ,nghi án dao kéo,star style,Làm ngực,"
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
