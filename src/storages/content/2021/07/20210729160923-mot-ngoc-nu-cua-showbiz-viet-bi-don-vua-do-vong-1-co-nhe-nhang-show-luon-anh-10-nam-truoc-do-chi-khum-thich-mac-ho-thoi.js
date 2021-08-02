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
"timestamp": '29/07/2021 04:09 PM',
"title": 'Một ngọc nữ của showbiz Việt bị đồn vừa "độ" vòng 1, cô nhẹ nhàng show luôn ảnh 10 năm trước: Do chị "khum" thích mặc hở thôi!',
"description": 'Nhìn người ta dịu dàng, hay mặc đồ kín đâu có nghĩa là không có body sexy đâu cư dân mạng ơi!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/3/210619900351758119642656451566730756785475n-162531707747769657727.jpeg',
"alt": 'Midu,midu nâng vòng 1,midu sửa ngực,midu sửa ngực ở đâu,phẫu thuật thẩm mỹ,sao nâng ngực ở đâu,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:09 PM',
"link": '/mot-ngoc-nu-cua-showbiz-viet-bi-don-vua-do-vong-1-co-nhe-nhang-show-luon-anh-10-nam-truoc-do-chi-khum-thich-mac-ho-thoi',
"zcomponent": 'page_20210729160923',
"filepath": './20210729160923-mot-ngoc-nu-cua-showbiz-viet-bi-don-vua-do-vong-1-co-nhe-nhang-show-luon-anh-10-nam-truoc-do-chi-khum-thich-mac-ho-thoi.js'
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
  'Một ngọc nữ của showbiz Việt bị đồn vừa "độ" vòng 1, cô nhẹ nhàng show luôn ảnh 10 năm trước: Do chị "khum" thích mặc hở thôi!';
const author = "BÀ HÀNG XÓM,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/07/2021 04:09 PM";
const description =
  "Nhìn người ta dịu dàng, hay mặc đồ kín đâu có nghĩa là không có body sexy đâu cư dân mạng ơi!";
const link =
  "mot-ngoc-nu-cua-showbiz-viet-bi-don-vua-do-vong-1-co-nhe-nhang-show-luon-anh-10-nam-truoc-do-chi-khum-thich-mac-ho-thoi";
const tagparam = [
  "Midu",
  "midu nâng vòng 1",
  "midu sửa ngực",
  "midu sửa ngực ở đâu",
  "phẫu thuật thẩm mỹ",
  "sao nâng ngực ở đâu",
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

export default function page_20210729160923() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Ngoài những cái tên nổi bật như Hà Tăng, Ninh Dương Lan Ngọc
                    hay gần đây có Lily Chen, thì còn một "tượng đài" ngọc nữ
                    khác từng khuynh đảo những trang bìa báo teen của thế hệ 9x,
                    không ai khác chính là <strong>Midu</strong>. Cô nàng sở hữu
                    gương mặt dịu dàng, ngoại hình xinh xắn, từng là hình mẫu
                    người yêu lí tưởng của không ít các chàng trai thế hệ 9x.
                  </p>
                  <p>
                    Đặc biệt, từ trước đến nay, sở dĩ người ta gọi{" "}
                    <strong>Midu</strong> là "thần tiên tỷ tỷ" hay "ngọc nữ" vì
                    hình tượng mong manh của cô. Chẳng bao giờ người ta thấy
                    Midu diện những trang phục gợi cảm, gu ăn mặc của Midu cũng
                    khá an toàn. Nhưng bây giờ là thời đại mới rồi, ngọc nữ thì
                    cũng phải diện bikini chứ! Vậy nên mới đây trên Fanpage,
                    Midu thả nhẹ 1 tấm hình diện đồ bơi cho dân mạng trầm trồ
                    cho vui.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/3/53766525101569819208209671148494149238915072o20191219084845-15934097205272111595755-16253174393631599753071.jpeg"
                    alt="7, Midu,midu nâng vòng 1,midu sửa ngực,midu sửa ngực ở đâu,phẫu thuật thẩm mỹ,sao nâng ngực ở đâu,"
                    note=""
                  />
                  <p>
                    <strong>Midu</strong> thả nhẹ một bức hình "tròn đầy" sự gợi
                    cảm
                  </p>
                  <p>
                    Khỏi phải nói, bình thường thấy cô nàng kín cổng cao tường,
                    nay "đại chiến bikini" làm dân tình ai nấy đều phải xôn xao
                    liếc nhìn. Trong đó, đã có không ít netizen đồn thổi rằng cô
                    nàng mới đi... "độ" vòng 1, vì có bao giờ thấy vòng 1 của cô
                    nàng phồn thực thế đâu. Trước những nghi vấn của cư dân
                    mạng, <strong>Midu</strong> buộc lòng phải đăng lại 1 tấm
                    ảnh từ tận cách đây... 10 năm để chứng minh vòng 1 của mình
                    phồn thực tự nhiên, chẳng hề can thiệp dao kéo. Cô viết:
                  </p>
                  <p>
                    Khổ quá. Bình thường không thích mặc hở thôi chứ không phải
                    là không có hay mới độ nha cả nhà. Tặng cả nhà tấm hình 10
                    năm trước.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/3/anh-chup-man-hinh-2021-07-03-luc-200201-1625317328308292585646.png"
                    alt="1, Midu,midu nâng vòng 1,midu sửa ngực,midu sửa ngực ở đâu,phẫu thuật thẩm mỹ,sao nâng ngực ở đâu,"
                    note="Midu bức xúc lên tiếng về nghi vấn... độ vòng 1"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/3/2027807053517769896407695780742104365582852n-1625317293719528730250.jpeg"
                    alt="2, Midu,midu nâng vòng 1,midu sửa ngực,midu sửa ngực ở đâu,phẫu thuật thẩm mỹ,sao nâng ngực ở đâu,"
                    note="Tấm ảnh 10 năm trước của Midu đây!"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Không những thế, cô còn dẫn kèm theo đường link của một bài
                    báo, chứng minh vòng 1 của mình nào giờ đã đẫy đà như thế
                    rồi. Và đây là những hình ảnh được <strong>Midu</strong>{" "}
                    khoe lại đây:
                  </p>
                  <p>
                    Loạt ảnh khoe vòng 1 của <strong>Midu</strong> đây
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/3/210619900351758119642656451566730756785475n-162531707747769657727.jpeg"
                    alt="3, Midu,midu nâng vòng 1,midu sửa ngực,midu sửa ngực ở đâu,phẫu thuật thẩm mỹ,sao nâng ngực ở đâu,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/3/31408418-10156296400370967-871-1810-8145-1525316816-15934097205201461555542-1625317439287297136313.jpeg"
                    alt="4, Midu,midu nâng vòng 1,midu sửa ngực,midu sửa ngực ở đâu,phẫu thuật thẩm mỹ,sao nâng ngực ở đâu,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/3/106103794101582335586759673916046700100843723n-1593409720532324315603-1625317439319759026578.jpeg"
                    alt="5, Midu,midu nâng vòng 1,midu sửa ngực,midu sửa ngực ở đâu,phẫu thuật thẩm mỹ,sao nâng ngực ở đâu,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/3/53766525101569819208209671148494149238915072o20191219084845-15934097205272111595755-16253174393631599753071.jpeg"
                    alt="6, Midu,midu nâng vòng 1,midu sửa ngực,midu sửa ngực ở đâu,phẫu thuật thẩm mỹ,sao nâng ngực ở đâu,"
                    note=""
                  />
                  <p>Vậy đó, đừng đồn người ta đi độ vòng 1 nữa nhé!</p>
                  <p>Nguồn: Tổng hợp</p>
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
