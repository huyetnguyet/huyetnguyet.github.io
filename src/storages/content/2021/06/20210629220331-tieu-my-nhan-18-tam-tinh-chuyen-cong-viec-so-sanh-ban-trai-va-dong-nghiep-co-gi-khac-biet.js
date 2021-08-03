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
"timestamp": '29/06/2021 10:03 PM',
"title": 'Tiểu mỹ nhân 18+ tâm tình chuyện công việc, so sánh bạn trai và đồng nghiệp có gì khác biệt',
"description": 'Yuna Ogura đã chia sẻ về việc sự khác biệt giữa đồng nghiệp và bạn trai theo yêu cầu của người xem.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629220331--10-49537.jpeg',
"alt": 'YUNA OGURA,IDOL,',
"category": 'images',
"date": '29/06/2021',
"time": '10:03 PM',
"link": '/tieu-my-nhan-18-tam-tinh-chuyen-cong-viec-so-sanh-ban-trai-va-dong-nghiep-co-gi-khac-biet',
"zcomponent": 'page_20210629220331',
"filepath": './20210629220331-tieu-my-nhan-18-tam-tinh-chuyen-cong-viec-so-sanh-ban-trai-va-dong-nghiep-co-gi-khac-biet.js'
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
  "Tiểu mỹ nhân 18+ tâm tình chuyện công việc, so sánh bạn trai và đồng nghiệp có gì khác biệt";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 10:03 PM";
const description =
  "Yuna Ogura đã chia sẻ về việc sự khác biệt giữa đồng nghiệp và bạn trai theo yêu cầu của người xem.";
const link =
  "tieu-my-nhan-18-tam-tinh-chuyen-cong-viec-so-sanh-ban-trai-va-dong-nghiep-co-gi-khac-biet";
const tagparam = ["YUNA OGURA", "IDOL"];
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

export default function page_20210629220331() {
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
                      <strong>Yuna Ogura</strong> gia nhập làng giải trí từ năm
                      18 tuổi và là một trong những nữ diễn viên thuộc quyền
                      quản lý của công ty Soft on Demand. Mỹ nhân sinh năm 1998
                      nhanh chóng gây chú ý nhờ gương mặt ngây thơ, thân hình
                      nóng bỏng và quyến rũ phái mạnh từ cái nhìn đầu tiên.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220331--10-49537.jpeg")
                          .default
                      }
                      alt="1, YUNA OGURA,IDOL,"
                      note=""
                    />
                    <p>
                      Năm 2019, cô nàng tham gia vào bộ phim The Naked Director.
                      Trong phim, người đẹp 21 tuổi có nhiều cảnh nóng với nam
                      diễn viên Yamada Takayuki và được công chúng chú ý nhiều
                      hơn. Không chỉ nổi tiếng ở Nhật Bản,{" "}
                      <strong>Yuna Ogura</strong> còn là nữ diễn viên có lượng
                      fan hùng hậu ở Đài Loan, Hàn Quốc...
                    </p>
                    <p>
                      Giống như nhiều mỹ nhân xứ hoa anh đào khác,{" "}
                      <strong>Yuna Ogura</strong> không có quá nhiều hoạt động
                      trong khoảng thời gian này vì dịch bệnh vẫn đang ảnh hưởng
                      tới toàn bộ xã hội Nhật Bản nói chung cũng như ngành công
                      nghiệp 18+ nói riêng. Tuy nhiên, cô nàng vẫn rất chăm chỉ
                      hoạt động để xây dựng hình ảnh cá nhân, trong đó có việc
                      thường xuyên làm các clip mới trên trang Youtube và tương
                      tác trên mạng xã hội để giới thiệu về cuộc sống của mình
                      cùng fan.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220331--11-16717.jpeg")
                          .default
                      }
                      alt="2, YUNA OGURA,IDOL,"
                      note=""
                    />
                    <p>
                      Mới đây, <strong>Yuna Ogura</strong> đã thực hiện một màn
                      hỏi đáp trên mạng xã hội và tâm sự với fan về chuyện nghề
                      nghiệp và cá nhân. Đa phần các câu hỏi đều rất bình thường
                      và được Yuna trả lời nhiệt tình, cho tới khi có một fan
                      đưa ra một câu hỏi khá là khó nhằn cho cô nàng. Theo đó,
                      fan này muốn biết cảm nhận của cô nàng giữa bạn trai và
                      đồng nghiệp nam trên các sản phẩm 18+.
                    </p>
                    <p>
                      Về cơ bản, ở thời điểm hiện tại{" "}
                      <strong>Yuna Ogura</strong> không hề có bạn trai, thế nên
                      cô nàng cũng không đưa được so sánh trực quanh nhất. Theo
                      cảm nhận của cô nàng, Yuna nghi rằng bạn trai sẽ đem tới
                      những cảm xúc ngọt ngào hơn, lãng mạn hơn, từ đó dẫn đến
                      mọi chuyện trở nên cuồng nhiệt hơn nhiều. Mọi thứ đều dựa
                      trên xúc cảm của cả hai người, và tình yêu sẽ là thứ quan
                      trọng nhất.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Còn với đồng nghiệp, mọi thứ đơn giản chỉ là công việc, cô
                      nàng cố gắng làm chuyên nghiệp hết sức có thể. Mọi thứ
                      không hề dựa vào cảm xúc, mà phải làm việc thật sự nghiêm
                      túc. Từ yêu cầu của đạo diễn cho tới góc quay, kịch bản,
                      tư thế, mọi thứ đều cần được làm theo sự chỉ định. Do đó,
                      không có nhiều chỗ cho cảm giác cá nhân, mọi thứ đều cần
                      phải thực hiện chuẩn chỉ.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220331--12-40468.jpeg")
                          .default
                      }
                      alt="3, YUNA OGURA,IDOL,"
                      note=""
                    />
                    <p>
                      Bản thân Yuna cũng cười gượng và cho rằng đây là một câu
                      hỏi hay, dù rất khó để trả lời. Cô nàng vẫn phải mất rất
                      nhiều thời gian, nhưng cũng đã hoàn thành câu trả lời một
                      cách hoàn thiện và được nhiều fan hâm mộ khen ngợi.{" "}
                    </p>
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
