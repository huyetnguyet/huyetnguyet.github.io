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
"timestamp": '29/06/2021 09:51 PM',
"title": 'Sinh viên mới ra trường: Kiếm mức lương 20 - 30 triệu/tháng thế nào?',
"description": 'Hóa ra để kiếm hàng chục triệu/tháng khi mới ra trường không khó như bạn nghĩ.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-1472220625704-91e1462799b2-162417118059132874823.jpg',
"alt": 'đáp ứng nhu cầu,chia sẻ câu chuyện,Tuyển dụng,bí quyết xin việc,Công việc,sinh viên,sinh viên mới ra trường,bí quyết thu nhập cao,',
"category": 'news',
"date": '29/06/2021',
"time": '09:51 PM',
"link": '/sinh-vien-moi-ra-truong-kiem-muc-luong-20-30-trieu-thang-the-nao',
"zcomponent": 'page_20210629215134',
"filepath": './20210629215134-sinh-vien-moi-ra-truong-kiem-muc-luong-20-30-trieu-thang-the-nao.js'
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
  "Sinh viên mới ra trường: Kiếm mức lương 20 - 30 triệu/tháng thế nào?";
const author = "VÂN TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 09:51 PM";
const description =
  "Hóa ra để kiếm hàng chục triệu/tháng khi mới ra trường không khó như bạn nghĩ.";
const link = "sinh-vien-moi-ra-truong-kiem-muc-luong-20-30-trieu-thang-the-nao";
const tagparam = [
  "đáp ứng nhu cầu",
  "chia sẻ câu chuyện",
  "Tuyển dụng",
  "bí quyết xin việc",
  "Công việc",
  "sinh viên",
  "sinh viên mới ra trường",
  "bí quyết thu nhập cao",
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

export default function page_20210629215134() {
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
                    Lương cao không còn là vấn đề xa lạ trên thị trường việc làm
                    hiện nay nếu bạn tự tin mình có đủ kinh nghiệm và năng lực
                    để <strong>đáp ứng nhu cầu</strong> của nhà{" "}
                    <strong>tuyển dụng</strong>. Với mức thu nhập 20 - 30
                    triệu/tháng, điều này cũng không hề khó nếu bạn biết cách
                    tích lũy và kiếm thêm thu nhập ngay từ khi còn trên giảng
                    đường đại học.
                  </p>
                  <p>
                    Như mới đây, một nữ sinh đã{" "}
                    <strong>chia sẻ câu chuyện</strong> kiếm thu nhập 20 - 30
                    triệu/tháng cho người mới ra trường. Cũng bắt đầu từ những
                    job nhỏ lẻ chỉ 1 - 2 triệu/tháng, nhờ sự chăm chỉ, cô nàng
                    này đã dần có thu nhập lên đến gần 30 triệu khi mới tốt
                    nghiệp.
                  </p>
                  <p>
                    Dòng chia sẻ của nữ sinh này đã nhận về nhiều sự quan tâm
                    trên mạng xã hội.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/5-162417115333176062890.png"
                    alt="1, đáp ứng nhu cầu,chia sẻ câu chuyện,Tuyển dụng,bí quyết xin việc,Công việc,sinh viên,sinh viên mới ra trường,bí quyết thu nhập cao,"
                    note="Ảnh minh họa"
                  />
                  <p>
                    "Mình là dân Kinh tế nhưng lại làm content. Từ lúc học năm
                    nhất đại học đã đi làm thêm đủ thể loại từ gia sư đến các
                    các <strong>công việc</strong> khác, nói tóm lại là có việc
                    gì là nhắn tin xin làm bằng được (mình tránh các công việc
                    như bưng bê nhà hàng vì nghĩ không học được quá nhiều, không
                    phù hợp hướng đi sau này).
                  </p>
                  <p>
                    Một thời gian sau khoảng 2 năm, mình xin làm{" "}
                    <strong>công việc</strong> rất đơn giản là duyệt từ khóa cho
                    một dự án về việc làm. Hiểu nôm na là bạn phân loại những từ
                    nào thuộc lĩnh vực việc làm thì duyệt, không thuộc lĩnh vực
                    này thì bỏ. Đơn giản vậy đó nhưng lúc đó được nhận 1,2 triệu
                    tiền lương part-time nên mừng lắm, làm cày cố.
                  </p>
                  <p>
                    <strong>Công việc</strong> này đưa đến cho mình rất nhiều cơ
                    hội vì sau khi làm cái này, mình học được thêm viết content,
                    đây chính là cái móng đầu tiên cho công việc sau này. Ngày
                    đầu viết dở quá trời, vì dân Kinh tế mà nhưng cứ viết thôi,
                    học hỏi dần. Sau đó thì học về SEO, cách SEO như thế nào,
                    thế nào là bài chuẩn SEO.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-1472220625704-91e1462799b2-162417118059132874823.jpg"
                    alt="4, đáp ứng nhu cầu,chia sẻ câu chuyện,Tuyển dụng,bí quyết xin việc,Công việc,sinh viên,sinh viên mới ra trường,bí quyết thu nhập cao,"
                    note=""
                  />
                  <p>
                    Một thời gian sau có thêm bạn mới vào thì kèm dạy cho bạn ý.
                    Một bạn, hai bạn rồi sau đó lên trưởng nhóm content, đỉnh
                    điểm là 15 bạn. Lúc này lương part time khoảng 8 triệu đồng
                    mỗi tháng. Với mức lương này mình vẫn thấy thấp vì phải làm
                    rất nhiều. Học xong 5h là lao đến công ty họp, rồi làm việc
                    có hôm 9h tối mới lóc cóc đi về bụng thì đói. Tối cứ làm đến
                    2 - 3 giờ sáng. Mặc dù biết lương thấp nhưng cảm thấy ở đây
                    có cơ hội học hỏi được làm nhiều thứ nên vẫn kiên trì theo.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Trong thời gian làm ở đây vì có nền tảng content và SEO rồi
                    mình nhận thêm job ngoài viết content SEO cho người ta.
                    Sương sương mỗi bài cũng 100k, mỗi ngày viết khoảng vài bài
                    thì mỗi tháng thêm 6 triệu đồng tiền làm ngoài nữa. Tính ra
                    năm 3 đại học, mình làm 2 job là cũng được khoảng 14 triệu
                    rồi.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/4-1619698186416854374214-1624171201052879508603.jpg"
                    alt="5, đáp ứng nhu cầu,chia sẻ câu chuyện,Tuyển dụng,bí quyết xin việc,Công việc,sinh viên,sinh viên mới ra trường,bí quyết thu nhập cao,"
                    note=""
                  />
                  <p>
                    Đến cuối năm 3, mình chuyển hướng sang báo cũng nhờ cái
                    duyên. Thấy một tờ báo đăng tuyển CTV viết bài, lại mon men
                    ứng tuyển dù không biết gì. Lần đó suýt bị sếp đuổi thẳng
                    cẳng nhưng đi chất vấn rồi năn nỉ các kiểu sếp cho ở lại và
                    ở tận bây giờ luôn đó. <strong>Công việc</strong> đó lúc đầu
                    mình làm chưa tốt, trời ơi nó áp lực mà mình tưởng tượng là
                    mình muốn trầm cảm tới nơi.
                  </p>
                  <p>
                    <strong>Công việc</strong> CTV báo lúc đầu lương cũng chỉ
                    tầm 2 - 3 triệu/tháng thôi. Nhưng sau khả năng tăng thì nó
                    lên tầm 6 triệu tháng, lúc nào được 7 triệu là mừng rớt nước
                    mắt. Hiện tại, mình làm công việc này được 2 năm rồi, mức
                    lương bây giờ là khoảng hơn 13 triệu. Đây chỉ là công việc
                    tay trái thôi, còn công việc chính vẫn là một job content ở
                    công ty khác lương khoảng 10 triệu.
                  </p>
                  <p>
                    Như vậy khi vừa ra trường, mình đã có thu nhập rơi vào
                    khoảng hơn 23 triệu rồi. Thỉnh thoảng mình có lên mấy nhóm
                    tuyển CTV viết bài, nhận job thì mỗi tháng lên được 4 hoặc 5
                    triệu nữa nó sẽ rơi vào gần 30 triệu. Đó là hành trình kiếm
                    tiền của mình từ <strong>sinh viên</strong> đến lúc ra
                    trường để được mức lương trên 20 triệu. Mình thấy dễ cũng
                    dễ, mà khó cũng khó. Bởi làm 2 việc một lúc stress dữ lắm và
                    không có thời gian chơi nhảy hay gì đâu.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/4-1619698186416854374214-1624171201052879508603.jpg"
                    alt="6, đáp ứng nhu cầu,chia sẻ câu chuyện,Tuyển dụng,bí quyết xin việc,Công việc,sinh viên,sinh viên mới ra trường,bí quyết thu nhập cao,"
                    note=""
                  />
                  <p>
                    Còn về cách nhìn nhận thì mình cảm thấy mức lương này không
                    lớn bởi xung quanh, bạn bè kinh doanh rồi làm TikTok, bán
                    Shopee... các kiểu lương cao lắm, cả trăm triệu mỗi tháng ý.
                    Nhìn ngưỡng mộ kinh khủng mà cũng tự áp lực cho bản thân
                    mình bởi phải nghĩ cách làm sao được như vậy, stress dã man.
                    Nhiều lúc tự mất cân bằng trong cuộc sống vì vậy đó, chứ
                    không phải kiếm được 20 triệu đến 30 triệu là ổn đâu".
                  </p>
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
