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
"timestamp": '29/07/2021 04:18 PM',
"title": '20 chú động vật béo tròn núc ních, có thể vẽ lại hoàn toàn bằng 1 chiếc compa',
"description": 'Trông dễ thương vậy thôi chứ béo phì khổ sở ghê lắm đó nghe.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals22-16266923346001459291269.jpg',
"alt": 'động vật béo,đáng yêu,tròn vo,relax,',
"category": 'news',
"date": '29/07/2021',
"time": '04:18 PM',
"link": '/20-chu-dong-vat-beo-tron-nuc-nich-co-the-ve-lai-hoan-toan-bang-1-chiec-compa',
"zcomponent": 'page_20210729161859',
"filepath": './20210729161859-20-chu-dong-vat-beo-tron-nuc-nich-co-the-ve-lai-hoan-toan-bang-1-chiec-compa.js'
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
  "20 chú động vật béo tròn núc ních, có thể vẽ lại hoàn toàn bằng 1 chiếc compa";
const author = "ĐỨC 2 XÍCH,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:18 PM";
const description =
  "Trông dễ thương vậy thôi chứ béo phì khổ sở ghê lắm đó nghe.";
const link =
  "20-chu-dong-vat-beo-tron-nuc-nich-co-the-ve-lai-hoan-toan-bang-1-chiec-compa";
const tagparam = ["động vật béo", "đáng yêu", "tròn vo", "relax"];
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

export default function page_20210729161859() {
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
                      Nói đùa chứ bất kì vật gì mà cứ có dáng vẻ{" "}
                      <strong>tròn vo</strong> là chắc chắn sẽ khiến mọi người
                      yêu thích. Cứ nhìn mấy chú động vật dưới là đây là chắc
                      chắn luôn, 20 chú, mỗi chú một vẻ nhưng đều khiến mọi
                      người đổ đứ đừ!
                    </p>
                    <p>
                      Nhưng mà nói trước là bộ ảnh dưới đây về độ cute là hết
                      nấc luôn đó nhé!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals1-1626692333777310602648.jpg"
                      alt="1, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Ôi, nhìn cưng chưa nè!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals2-1626692333924376900553.jpg"
                      alt="2, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Trông cứ nung núc có ghét không cơ chứ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals3-16266923339311146471651.jpg"
                      alt="3, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Ơ kìa, ai chụp ảnh em thế!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals4-16266923339712069311391.jpg"
                      alt="4, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Ôi, đồ ăn của em đâu rồi?"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals5-16266923340001214722461.jpg"
                      alt="5, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Nhìn ghét thế cơ chứ!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals6-1626692334114125678459.jpg"
                      alt="6, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Trông muốn nhặt luôn về nuôi quá!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals7-16266923341522033318123.jpg"
                      alt="7, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Chó nhà tôi nhìn lâu lâu cũng yêu phết chứ bộ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals8-16266923341571757196994.jpg"
                      alt="8, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Chim gì trông lạ thế!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals9-162669233416176260364.jpg"
                      alt="9, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Tao chỉ muốn kẹp đầu mày cho bõ tức!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals10-1626692334197167422901.jpg"
                      alt="10, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Hóa ra mèo bình thường ngồi sẽ trông như thế này à?"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals12-16266923342511694595185.jpg"
                      alt="11, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Ủa, ai gọi tên em đó!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals13-16266923342821919058919.jpg"
                      alt="12, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Ăn cho lắm vào xong phá tao nhé!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals14-16266923343211602981562.jpg"
                      alt="13, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Chú thỏ đáng yêu quá!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals15-1626692334358104425692.jpg"
                      alt="14, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Giông bão đời này trải đủ rồi!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals16-1626692334426340017945.jpg"
                      alt="15, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Nhìn gì!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals17-16266923344402138845079.jpg"
                      alt="16, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Trông muốn ấn vào người không chịu nổi!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals18-16266923344831562564559.jpg"
                      alt="17, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Húc mày cái xem sao!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals19-16266923345501898774274.jpg"
                      alt="18, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Ánh mắt kìa..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals20-1626692334565819572760.jpg"
                      alt="19, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Ôi chộ ôi!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals22-16266923346001459291269.jpg"
                      alt="20, động vật béo,đáng yêu,tròn vo,relax,"
                      note="Yêu mãi nhé!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/round-animals22-16266923346001459291269.jpg"
                      alt="21, động vật béo,đáng yêu,tròn vo,relax,"
                      note=""
                    />
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
