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
"timestamp": '11/08/2021 10:55 AM',
"title": 'Mỹ: Người dân Greenville tuyệt vọng trong thị trấn bị cháy rừng xóa sổ',
"description": 'Nước Mỹ đang chứng kiến đợt cháy rừng khủng khiếp với tổng số gần 40.000 đám cháy, nhiều hơn mức trung bình hàng năm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-1628663110255394090395.jpg',
"alt": 'thế giới,Greenville,cháy rừng Mỹ,tin nóng xã hội,',
"category": 'news',
"date": '11/08/2021',
"time": '10:55 AM',
"link": '/my-nguoi-dan-greenville-tuyet-vong-trong-thi-tran-bi-chay-rung-xoa-so',
"zcomponent": 'page_20210811105511',
"filepath": './20210811105511-my-nguoi-dan-greenville-tuyet-vong-trong-thi-tran-bi-chay-rung-xoa-so.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Mỹ: Người dân Greenville tuyệt vọng trong thị trấn bị cháy rừng xóa sổ";
const author = "VÂN ÁNH,";
const source = "VTV";
const timestamp = "11/08/2021 10:55 AM";
const description =
  "Nước Mỹ đang chứng kiến đợt cháy rừng khủng khiếp với tổng số gần 40.000 đám cháy, nhiều hơn mức trung bình hàng năm.";
const link =
  "my-nguoi-dan-greenville-tuyet-vong-trong-thi-tran-bi-chay-rung-xoa-so";
const tagparam = ["thế giới", "Greenville", "cháy rừng Mỹ", "tin nóng xã hội"];
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

export default function page_20210811105511() {
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
                      Chịu ảnh hưởng nặng nề nhất bởi cháy rừng là bang
                      California. Tại đây, có thị trấn đã bị thiêu rụi hoàn
                      toàn, đẩy người dân vào cảnh tuyệt vọng.
                    </p>
                    <p>
                      Lửa từ đám cháy rừng có tên Dixie, lớn thứ 2 trong lịch sử
                      bang California, đã tàn phá và thiêu rụi thị trấn{" "}
                      <strong>Greenville</strong> chỉ trong đêm 4/8, rạng sáng
                      5/8. Nhiều tòa nhà hơn trăm năm tuổi đã bị xóa sổ trong
                      đám cháy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-1628663112631766016080.jpg"
                      alt="1, thế giới,Greenville,cháy rừng Mỹ,tin nóng xã hội,"
                      note="Đám cháy Dixie tàn phá thị trấn Greenville (Ảnh: AP)"
                    />
                    <p>
                      Tại nơi lánh nạn, cư dân thị trấn{" "}
                      <strong>Greenville</strong> nhớ lại cảnh tượng như trong
                      ngày tận thế mà thương khóc cho cuộc sống đã không còn:
                      "Hết rồi, mất hết rồi. Có nhiều lúc tôi nghĩ mong được về
                      nhà, nhưng mới nhớ ra là không về được nữa, làm gì còn gì
                      mà về. Dù nhà tôi có thoát được lửa thì thị trấn cũng còn
                      gì nữa đâu. Không điện, không nước, tất cả mất hết rồi".
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Đám cháy Dixie đã diễn ra 26 ngày và đang trải dài khắp
                      miền Đông Bắc thành phố San Francisco, hiện bao phủ 1.980
                      km². Mới chỉ có 21% đám cháy được khống chế. Hơn 5.000
                      lính cứu hỏa đang phải chiến đấu với đám cháy Dixie.
                      Nguyên nhân gây ra đám cháy này vẫn chưa được làm rõ,
                      nhưng công ty điện cho rằng có thể là do cây đổ vào đường
                      dây điện khiến phát cháy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-1628663110255394090395.jpg"
                      alt="2, thế giới,Greenville,cháy rừng Mỹ,tin nóng xã hội,"
                      note=""
                    />
                    <p>
                      Thị trấn <strong>Greenville</strong> chỉ còn là đống tro
                      tàn trước "giặc lửa" (Ảnh: AP)
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
