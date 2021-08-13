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
"timestamp": '12/08/2021 05:31 PM',
"title": 'Vì sao những người ưu tú luôn đặt báo thức lúc 5:57 sáng?',
"description": 'Lên kế hoạch chuẩn bị trước không nằm ở chỗ bạn đã làm bao nhiêu việc, mà là sau khi bạn nhận thức được việc này, bạn sẽ có được trạng thái năng lượng cao để làm việc. Cuộc sống của bạn cũng từ đó mà có một diện mạo hoàn toàn mới.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-1628772521685332629050.jpg',
"alt": 'hãng truyền thông,doanh nhân nổi tiếng,thời gian làm việc,quản lý cấp cao,năng lượng cơ thể,',
"category": 'life',
"date": '12/08/2021',
"time": '05:31 PM',
"link": '/vi-sao-nhung-nguoi-uu-tu-luon-dat-bao-thuc-luc-557-sang',
"zcomponent": 'page_20210812173151',
"filepath": './20210812173151-vi-sao-nhung-nguoi-uu-tu-luon-dat-bao-thuc-luc-557-sang.js'
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
const title = "Vì sao những người ưu tú luôn đặt báo thức lúc 5:57 sáng?";
const author = "LY LY,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "12/08/2021 05:31 PM";
const description =
  "Lên kế hoạch chuẩn bị trước không nằm ở chỗ bạn đã làm bao nhiêu việc, mà là sau khi bạn nhận thức được việc này, bạn sẽ có được trạng thái năng lượng cao để làm việc. Cuộc sống của bạn cũng từ đó mà có một diện mạo hoàn toàn mới.";
const link = "vi-sao-nhung-nguoi-uu-tu-luon-dat-bao-thuc-luc-557-sang";
const tagparam = [
  "hãng truyền thông",
  "doanh nhân nổi tiếng",
  "thời gian làm việc",
  "quản lý cấp cao",
  "năng lượng cơ thể",
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

export default function page_20210812173151() {
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
                    <h5>Đi làm sớm giúp tôi phát hiện ra một bí mật</h5>
                    <p>
                      Nhiều năm trước, tôi làm ca đêm tại một{" "}
                      <strong>hãng truyền thông</strong> báo giấy nổi tiếng,
                      hằng ngày tôi đi làm lúc 3 giờ chiều, tan ca lúc 11-12 giờ
                      đêm. Công việc rất vui nhộn, đồng nghiệp rất tốt, chỉ là
                      quá vất vả. Cứ đến 10 giờ tối là mọi người chuẩn bị đi
                      ngủ, nhưng lại là thời điểm căng thẳng nhất đối với những
                      người làm đêm như chúng tôi. Nửa đêm, mọi người đã chìm
                      vào giấc ngủ, chúng tôi mới về nhà với khuôn mặt đầy chất
                      nhờn và nhiều tóc rụng. Lúc đó, tôi thường thầm thở dài
                      trên taxi đêm khuya: "Khi nào có thể vượt qua những ngày
                      tháng này đây?"
                    </p>
                    <p>
                      Cho đến một ngày đã xảy ra việc ngoài ý muốn. Đó là một
                      ngày cuối tuần, không phải ca trực của tôi, nhưng vì đồng
                      nghiệp có việc phải về quê nên tôi trực thay. Như thường
                      lệ, tôi đến tòa soạn lúc 3 giờ chiều và phát hiện tôi đến
                      sớm một tiếng, cũng không thể ngồi không chờ đợi, nên tôi
                      bắt đầu tìm đề tài, đặt lịch hẹn theo thói quen làm việc
                      hằng ngày. Kết quả một điều kỳ diệu đã xảy ra. Hôm đó hiệu
                      suất làm việc của tôi rất cao, tôi đã hoàn thành hết mọi
                      việc sớm hơn ngày thường 2 tiếng. Tôi thậm chí bắt kịp
                      chuyến tàu điện ngầm lúc 10 giờ tối khi tan ca, đó là lần
                      đầu tiên tôi có thể ngồi tàu điện ngầm sau khi tan ca đêm
                      từ khi đi làm đến nay.
                    </p>
                    <p>
                      Tôi chỉ đi làm sớm hơn đồng nghiệp một tiếng, nhưng lại
                      tan ca sớm hơn 2 tiếng. Vì sao lại thần kỳ như vậy? Tôi đã
                      sơ bộ phân tích, đây là điều kỳ diệu khi hoàn thành việc
                      trước hạn.
                    </p>
                    <p>
                      Thứ nhất, bắt tay vào việc sớm có thể hoàn thành việc
                      trước hạn, đây là ưu thế của thời gian.
                    </p>
                    <p>
                      Thứ hai, đẩy sớm quy trình làm việc, như vậy sẽ không xảy
                      ra va chạm với quy trình làm việc của đồng nghiệp, đây là
                      ưu thế của trình tự.
                    </p>
                    <p>
                      Thứ ba cũng là điều quan trọng nhất: Khoảng{" "}
                      <strong>thời gian làm việc</strong> một tiếng đầu tiên,
                      xung quanh không có ai, là khoảng thời gian tập trung năng
                      lượng tốt nhất, hiệu suất cao nhất. Đây là ưu thế của năng
                      lượng.
                    </p>
                    <p>
                      Tôi đã thấy và cảm nhận được cảm giác này trong quyển sách
                      "Những người thành công hạng nhất thường làm gì trước buổi
                      ăn sáng" của Laura Vanderkam - chuyên gia nghiên cứu có
                      thẩm quyền. Cô đã nói rằng nhiều{" "}
                      <strong>doanh nhân nổi tiếng</strong> trên thế giới sớm từ
                      lâu đã là người luôn thực hiện công việc trước hạn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-1628772521685332629050.jpg"
                      alt="2, hãng truyền thông,doanh nhân nổi tiếng,thời gian làm việc,quản lý cấp cao,năng lượng cơ thể,"
                      note=""
                    />

                    <h5>Vì sao doanh nhân đều thích dậy sớm</h5>
                    <p>
                      Citrin là CEO của công ty 'săn" người nổi tiếng ở Mỹ. Hằng
                      ngày ông thức dậy vào lúc 6 giờ, tập thể dục, đọc sách, và
                      suy nghĩ về những việc quan trọng nhất trong ngày. Một
                      hôm, ông quyết định gửi email cho 20{" "}
                      <strong>quản lý cấp cao</strong> của các công ty nổi
                      tiếng, hỏi họ buổi sáng thức dậy lúc mấy giờ, và sắp xếp
                      như thế nào. Ông nhận lại 18 email với kết quả họ đều thức
                      dậy trước 6 giờ, muộn nhất cũng là đúng 6 giờ. Điều đáng
                      ngạc nhiên là họ đều có thể tận dụng hết khoảng thời gian
                      dậy sớm này cho những việc mà bình thường cần ý chí mạnh
                      mẽ để hoàn thành.
                    </p>
                    <p>
                      Nguyên nhân trực tiếp các doanh nhân thích dậy sớm là để
                      tranh thủ khoảng thời gian "thuộc về riêng mình" sau một
                      ngày tập trung làm việc. Dậy sớm giúp họ có được khoảng
                      thời gian tràn đầy năng lượng nhất trong ngày.
                    </p>
                    <p>
                      Dân văn phòng đều sợ hãi dậy sớm, nhiều người cũng đã hình
                      thành thói quen đi ngủ muộn. Nguyên nhân cũng là vì họ
                      muốn tìm thời gian thuộc về riêng mình. Chỉ là sau khi tan
                      ca đến trước khi ngủ là khoảng "thời gian rác rưởi" còn
                      sót lại sau một ngày làm việc mệt mỏi nên chất lượng không
                      hiệu quả. Vì vậy, hầu hết mọi người chỉ có thể sử dụng
                      khoảng thời gian này để thư giãn, giải trí.
                    </p>
                    <p>
                      Năng lượng của mỗi người đều như nhau, so với những người
                      ngủ muộn, dậy sớm, họ chỉ là di chuyển thời gian thức dậy
                      về trước vài tiếng, dành khoảng thời gian quý báu năng
                      lượng nhất cho riêng mình.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Laura Vanderkam muốn nhắc nhở chúng ta rằng: đừng bỏ qua
                      tầm quan trọng của thời gian và năng lượng "quản lý trước
                      hạn". Theo ý kiến của cô, cuộc thi sức mạnh giữa người với
                      người về bản chất cũng như giữa cơ thể với cơ thể bằng
                      cách tận dụng lợi thế của mình để thắng đối phương, chỉ
                      cần thành thạo một chút kỹ năng phân chia{" "}
                      <strong>năng lượng cơ thể</strong>, thì có thể nhẹ nhàng
                      thắng được cuộc thi, ít nhất không đến nỗi bị người ta hạ
                      gục.
                    </p>
                    <p>
                      Giáo sư tâm lý Mỹ Josh Daivs nói rằng, trạng thái năng
                      lượng tốt nhất hiệu quả nhất trong một ngày của con người
                      là hai tiếng. Bạn muốn sử dụng khoảng thời gian này làm
                      những việc quan trọng, hay là lãng phí chúng một cách vô
                      ích, quyết định bởi việc bạn có muốn sống một cuộc sống
                      hiệu quả không.
                    </p>
                    <h5>Con chim ngu ngốc bay sớm một chút cũng không ngốc</h5>
                    <p>
                      "Hoàn thành trước hạn" còn có một lợi ích quan trọng nhất
                      gọi là "trận chiến sân nhà", bắt đầu nói từ một hiện tượng
                      xã hội. Giáo viên luôn nói với chúng ta rằng phải ôn tập
                      bài học trước khi đến lớp. Đây cũng là một trong những bí
                      quyết quan trọng nhất giúp mở ra khoảng cách về kết quả
                      học tập.
                    </p>
                    <p>
                      Nhiều ý kiến cho rằng bộ giáo dục hạn chế các lớp dạy thêm
                      ngoại khóa là để giảm bớt gánh nặng cho các em. Thực ra
                      nguyên nhân quan trọng hơn là việc dạy thêm ngoại khóa này
                      sẽ khiến cho các em không có cùng xuất phát điểm, như vậy
                      là không công bằng với các em không tham gia lớp học thêm.
                      Nhưng để có sự cạnh tranh công bằng tuyệt đối giữa các em
                      rất khó, thậm chí gần như không thể.
                    </p>
                    <p>
                      Việc lớp dạy thêm áp dụng phương pháp "dạy trước" có thể
                      thấy rõ là rất hiệu quả. "Dạy trước" tương đương với việc
                      giúp các em học trước. Việc nghe giảng của các em không
                      phải theo giáo viên mà đã có sự dẫn dắt, sự chủ động, các
                      em có được ưu thế, nắm bắt được những gì giáo viên muốn
                      giảng dạy trong lớp học. Đồng thời tăng sự chú ý và yêu
                      thích của giáo viên khi các em đến lớp chưa học đã biết.
                      Đây chính là hiệu ứng Pygmalion nổi tiếng trong tâm lý
                      học, sự tương tác lành tính và sự tuần hoàn tích cực được
                      hình thành sẽ tạo ra điều tốt hơn.
                    </p>
                    <p>
                      Rất nhiều người tin rằng, sự khác biệt về kết quả làm việc
                      và thành tích học tập giữa người với người là do tài năng
                      thiên phú của họ không giống nhau. Tôi không phủ nhận
                      nhưng cũng tin rằng, việc sắp xếp thời gian và năng lượng
                      hợp lý cũng là một cách để những người bình thường như
                      chúng ta có thể tự cứu lấy chính mình.
                    </p>
                    <p>
                      Đây cũng đúng với câu nói của người Trung Quốc: những con
                      chim ngu ngốc bay trước.
                    </p>
                    <p>
                      Laura Vanderkam cũng nhắc nhở chúng ta rằng điều kỳ diệu
                      của phương pháp này là ai cũng có thể học được. Bất luận
                      là dân văn phòng hay là học sinh đều có thể rút ra được
                      một số gợi ý hữu ích.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-1628772521685332629050.jpg"
                      alt="1, hãng truyền thông,doanh nhân nổi tiếng,thời gian làm việc,quản lý cấp cao,năng lượng cơ thể,"
                      note=""
                    />

                    <h5>
                      Tóm lại, phương pháp này có thể mang lại những lợi ích
                      sau:
                    </h5>
                    <p>
                      Phá vỡ lịch trình hằng ngày, làm việc ngoài giờ cao điểm
                      và nâng cao hiệu suất.
                    </p>
                    <p>Nắm bắt cơ hội, cải thiện khả năng tập trung.</p>
                    <p>
                      Dành thời gian cá nhân tốt nhất tràn đầy năng lượng nhất
                      cho bản thân.
                    </p>
                    <p>
                      Giành được thế chủ động, giúp bản thân có được ưu thế
                      trong trận chiến sân nhà.
                    </p>
                    <p>
                      Lên kế hoạch chuẩn bị trước không nằm ở chỗ bạn đã làm bao
                      nhiêu việc, mà là sau khi bạn nhận thức được việc này, bạn
                      sẽ có được trạng thái năng lượng cao để làm việc. Cuộc
                      sống của bạn cũng từ đó mà có một diện mạo hoàn toàn mới.
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
