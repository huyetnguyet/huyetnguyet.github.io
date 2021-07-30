import React from "react";
import "components/page.css";
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
"timestamp": '10/06/2021 01:18 PM',
"title": 'Hiền Hồ gia nhập đường đua underwear của CK nhưng body "mướt mải mlem" thế kia thì ai chịu nổi?',
"description": 'Từng chút, từng chút một, netizen sẽ phải quên đi hình ảnh "búp bê không tình yêu" ngày nào của Hiền Hồ.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/10/1949823033500387064801055361509519388287276n-1623335772268860895140.jpeg',
"alt": 'Hien Ho, Underwear, images, Calvin Klein, Bodysuit, Sao Do Thoi Trang, ',
"category": 'images',
"date": '10/06/2021',
"time": '01:18 PM',
"link": '/hien-ho-gia-nhap-duong-dua-underwear-cua-ck-nhung-body-muot-mai-mlem-the-kia-thi-ai-chiu-noi',
"zcomponent": 'page_20210610131807',
"filepath": './20210610131807-hien-ho-gia-nhap-duong-dua-underwear-cua-ck-nhung-body-muot-mai-mlem-the-kia-thi-ai-chiu-noi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Hiền Hồ gia nhập đường đua underwear của CK nhưng body "mướt mải mlem" thế kia thì ai chịu nổi?';
const author = "TUYẾT NGÂY THER,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "10/06/2021 01:18 PM";
const description =
  'Từng chút, từng chút một, netizen sẽ phải quên đi hình ảnh "búp bê không tình yêu" ngày nào của Hiền Hồ.';
const link =
  "hien-ho-gia-nhap-duong-dua-underwear-cua-ck-nhung-body-muot-mai-mlem-the-kia-thi-ai-chiu-noi";
const tagparam = [
  "hien-ho",
  "underwear",
  "ck",
  "calvin-klein",
  "bodysuit",
  "sao-do-thoi-trang",
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

export default function page_20210610131807() {
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
                <div className="contentBody">
                  <p>
                    Hiền Hồ không phải cái tên đầu tiên gia nhập đường đua{" "}
                    <strong>underwear</strong> của <strong>Calvin Klein</strong>{" "}
                    nhưng dám chắc sẽ là gương mặt rất được chú ý trong ngày hôm
                    nay.
                  </p>
                  <p>
                    Đăng tải loạt hình diện mẫu <strong>bodysuit</strong> của{" "}
                    <strong>Calvin Klein</strong> trắng như áo trắng em tới
                    trường, Hiền Hồ cho ta thấy hình ảnh có 1 chút gợi cảm, 1
                    chút e ấp và ngây thơ, 1 chút trong sáng nhưng vẫn thật cuốn
                    hút như cô nàng tuổi mới lớn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/1966684723500470864792677845723066965459559n-1623335772727423462278.jpeg"
                    alt="Hien Ho, Underwear, images, Calvin Klein, Bodysuit, Sao Do Thoi Trang, "
                    note="Mẫu bodysuit ôm lấy hình thể của Hiền Hồ bỗng trở nên quyến rũ lạ thường"
                  />
                  <p>
                    Nhưng quan trọng hơn hết, người ta lại được 1 phen loạn nhịp
                    huyết áp khi nhìn vào làn da mịn như tơ, đường song chữ S
                    cùng vòng 1 phập phồng sau lớp <strong>bodysuit</strong>{" "}
                    mỏng manh. Dẫu không sở hữu khuôn ngực "khủng bố" nhưng
                    chính cái nét "ỡm ờ" này mới khiến dân tình rần rần lên!
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/10/1949823033500387064801055361509519388287276n-1623335772268860895140.jpeg"
                    alt="Hien Ho, Underwear, images, Calvin Klein, Bodysuit, Sao Do Thoi Trang, "
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Dù được chụp ở góc độ nào, Hiền Hồ vẫn cứ thật quyến rũ như
                    cô nàng bước ra từ truyện tranh Nhật Bản
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/10/1986930763500470698126023235269454365621534n-1623335772752310705823.jpeg"
                    alt="Hien Ho, Underwear, images, Calvin Klein, Bodysuit, Sao Do Thoi Trang, "
                    note=""
                  />
                  <p>
                    Từng diện những mẫu bikini, monokini như thể muốn thiêu rụi
                    nhãn quan người nhìn, Hiền Hồ khiến người ta lo nơm nớp vì
                    sợ có cơn gió vô tình thổi tung lớp áo mỏng
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/batch1986930763500470698126023235269454365621534n-1623341188115861898331.jpeg"
                    alt="Hien Ho, Underwear, images, Calvin Klein, Bodysuit, Sao Do Thoi Trang, "
                    note=""
                  />
                  <p>
                    "Well well well"! Sao Đỏ Thời Trang tiếp tục tặng Hiền Hồ
                    điểm khuyến khích vì cái "vibe" khác biệt so với thần thái
                    của loạt KOL diện <strong>underwear</strong> từ{" "}
                    <strong>Calvin Klein</strong>. Không sở hữu body phồn thực,
                    cô nàng vẫn khiến ai nấy phải "wow" khi từng bước rũ bỏ hình
                    tượng "búp bê không tình yêu" kín đáo, trở nên hấp dẫn và
                    gợi cảm hơn theo năm tháng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/10/1675480254862753192113212585283117291873248n-4aa3f28b-16233403867831786017502.jpeg"
                    alt="Hien Ho, Underwear, images, Calvin Klein, Bodysuit, Sao Do Thoi Trang, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/10/hien-ho-1-1582078012-width660height823-16233403867631468285695.jpeg"
                    alt="Hien Ho, Underwear, images, Calvin Klein, Bodysuit, Sao Do Thoi Trang, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/10/screenshot-2021-02-28-084728-1614477281852424862138-16233403867491219159085.jpeg"
                    alt="Hien Ho, Underwear, images, Calvin Klein, Bodysuit, Sao Do Thoi Trang, "
                    note=""
                  />
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
