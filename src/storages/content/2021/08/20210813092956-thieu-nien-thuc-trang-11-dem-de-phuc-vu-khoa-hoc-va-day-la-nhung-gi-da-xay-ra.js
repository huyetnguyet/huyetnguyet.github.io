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
"timestamp": '13/08/2021 09:29 AM',
"title": 'Thiếu niên thức trắng 11 đêm để "phục vụ khoa học", và đây là những gì đã xảy ra',
"description": 'Năm 1963, có 2 cậu thiếu niên quyết định bắt tay vào làm một dự án khoa học, và cuối cùng chẳng ngờ ghi danh vào Kỷ lục Guinness thế giới.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288545350811022662061.jpeg',
"alt": 'KHOA HỌC,',
"category": 'news',
"date": '13/08/2021',
"time": '09:29 AM',
"link": '/thieu-nien-thuc-trang-11-dem-de-phuc-vu-khoa-hoc-va-day-la-nhung-gi-da-xay-ra',
"zcomponent": 'page_20210813092956',
"filepath": './20210813092956-thieu-nien-thuc-trang-11-dem-de-phuc-vu-khoa-hoc-va-day-la-nhung-gi-da-xay-ra.js'
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
  'Thiếu niên thức trắng 11 đêm để "phục vụ khoa học", và đây là những gì đã xảy ra';
const author = "J.D";
const source = "Pháp Luật & Bạn Đọc";
const timestamp = "13/08/2021 09:29 AM";
const description =
  "Năm 1963, có 2 cậu thiếu niên quyết định bắt tay vào làm một dự án khoa học, và cuối cùng chẳng ngờ ghi danh vào Kỷ lục Guinness thế giới.";
const link =
  "thieu-nien-thuc-trang-11-dem-de-phuc-vu-khoa-hoc-va-day-la-nhung-gi-da-xay-ra";
const tagparam = ["KHOA HỌC"];
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

export default function page_20210813092956() {
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
                    <h5>*Lưu ý: Tuyệt đối không bắt chước</h5>
                    <p>
                      Năm 1963, Randy Gardner và Bruce McAllister quyết định
                      thực hiện một dự án <strong>khoa học</strong>: Cố gắng
                      thức lâu nhất có thể và xem chuyện gì sẽ xảy ra.
                    </p>
                    <p>
                      Ban đầu, 2 cậu thiếu niên 16 tuổi muốn tìm hiểu ảnh hưởng
                      của giấc ngủ đến "các khả năng tâm linh bất thường"
                      (paranormal ability), nhưng phải từ bỏ ý tưởng này vì
                      nhiều lý do - có thể nói ngắn gọn là quá phi lý để thực
                      hiện. Thay vào đó, họ quyết định tìm hiểu ảnh hưởng của
                      việc thiếu ngủ đến khả năng nhận thức tâm lý và hoạt động
                      thể chất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288545350811022662061.jpeg"
                      alt="1, KHOA HỌC,"
                      note=""
                    />
                    <p>
                      Ý tưởng đã có, việc còn lại là... tung đồng xu xem ai là
                      người "được" ngồi nghiên cứu, và ai phải hy sinh giấc ngủ
                      của mình. Randy thua, có chơi có chịu, cậu chuẩn bị tinh
                      thần để thức trắng nhiều đêm liên tục.
                    </p>
                    <p>
                      Thí nghiệm của họ đáng lẽ đã kết thúc một cách vô nghĩa,
                      nếu không có một tờ báo địa phương đứng ra đăng tải và thu
                      hút được sự chú ý của Tiến sĩ nghiên cứu giấc ngủ William
                      C. Dement từ ĐH Stanford.
                    </p>
                    <p>
                      "Tôi có lẽ là người duy nhất trên Trái đất lúc đó từng làm
                      một nghiên cứu về giấc ngủ" - Tiến sĩ Dement cho biết. "Bố
                      mẹ của Randy đã rất lo lắng, sợ rằng nó có hại cho sức
                      khỏe của cậu ta, bởi khi đó chẳng ai biết liệu việc thiếu
                      ngủ có khiến chúng ta chết hay không".
                    </p>
                    <p>
                      Nhìn chung, rủi ro chết không phải là không có. Những
                      nghiên cứu trước kia về giấc ngủ cho thấy việc thiếu ngủ
                      có thể gây ảo giác, hoang tưởng và nảy sinh nghi kỵ. Thậm
                      chí, thí nghiệm trên mèo còn dẫn đến cái chết của một chú
                      mèo nhà, sau khi bị ép thức suốt 15 ngày liên tục.
                    </p>
                    <p>
                      Bởi vậy, bố mẹ của Randy đã xin tiến sĩ Dement giám sát
                      thí nghiệm của con mình, cùng với Trung sĩ John J. Ross từ
                      Đơn vị Nghiên cứu Tâm lý học thần kinh Hải quân tại San
                      Diego.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288545367111587364334.jpg"
                      alt="2, KHOA HỌC,"
                      note=""
                    />
                    <p>
                      Để giữ cho Randy thức, nhóm nghiên cứu để cậu ta phải vận
                      động nhiều - từ chơi bóng rổ cho đến bắn bóng. Họ không
                      cho cậu ta nằm xuống, bắt phải nói chuyện khi đi toilet
                      hoặc vào phòng ngủ, đề phòng cậu lén chợp mắt.
                    </p>
                    <p>
                      Giai đoạn đầu, thí nghiệm diễn ra khá suôn sẻ. 1 ngày
                      không ngủ - chưa ảnh hưởng lắm. Ngày thứ 2, Randy gặp khó
                      khăn trong việc xác định vật thể chỉ bằng xúc giác. Ngày
                      thứ 3, tâm trạng cậu ủ dột hơn, gặp khó khi phải uốn lưỡi.
                    </p>
                    <p>
                      Đến ngày thứ 4, cậu bắt đầu lẫn lộn ký ức, và ảo giác bắt
                      đầu xuất hiện. "Tôi đã tưởng rằng mình là một cầu thủ bóng
                      bầu dục nổi tiếng Paul Lowe" - Randy trả lời một bài phỏng
                      vấn sau thí nghiệm 1 năm.
                    </p>
                    <p>
                      Ảo giác tiếp tục xuất hiện trong những ngày sau đó. Randy
                      nhìn thấy khu rừng chạy qua trước mặt, thay vì hình ảnh
                      trong ngôi nhà của cậu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      "Vào lúc này, mọi thứ tôi làm chỉ đơn giản là vào toilet.
                      Không còn hưng phấn nữa, mọi thứ cứ trầm lắng dần, giống
                      như có ai đó chà phẳng não tôi vậy. Cơ thể tôi cứ lê lết,
                      trong khi thần trí rất đứt đoạn".
                    </p>
                    <p>
                      Những ngày kế tiếp, tốc độ nói chuyện của Randy chậm dần
                      và nội dung bắt đầu... lung tung. Trí nhớ của cậu cũng tệ
                      hẳn đi. Cậu có thể nói 1 câu nhưng dừng lại nửa chừng,
                      hoặc vì quên mất mình định nói gì, hoặc do mạch nói bị
                      nghẽn vì một suy nghĩ mới. Dẫu vậy, cậu vẫn có thể chơi
                      bóng bàn.
                    </p>
                    <p>
                      Giống như bất kỳ ai thiếu ngủ, Randy bắt đầu mắc chứng
                      hoang tưởng. Trước cậu có Tom Rounds, người nắm giữ kỷ lục
                      Guinness thời điểm đó khi không ngủ tới 260h. Một người
                      khác là DJ Peter Tripp - thức trắng 200h, và đã gặp ảo
                      giác rằng các bác sĩ sẽ chôn sống anh ta. Ảo giác ấy lớn
                      đến mức anh bỏ chạy giữa thí nghiệm, trên người mặc rất ít
                      quần áo.
                    </p>
                    <p>
                      Ngày thứ 11 - cũng là ngày cuối cùng, Randy gần như vô cảm
                      và phải cần nhắc liên tục mới có thể trả lời. Các bài kiểm
                      tra tâm lý kết thúc rất nhanh, vì cậu gần như quên sạch
                      mình đang làm gì.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-1628854577577473416148.jpg"
                      alt="3, KHOA HỌC,"
                      note=""
                    />
                    <p>
                      May mắn là Randy không gặp các hiệu ứng quá nghiêm trọng
                      từ việc thiếu ngủ. Cậu thậm chí còn phá kỷ lục của Tom
                      Rounds, trở thành người thức lâu nhất thế giới. Kết thúc
                      thí nghiệm, cậu được giám sát rất chặt chẽ, và sức khỏe
                      dần khôi phục về trạng thái bình thường.
                    </p>
                    <p>
                      Báo cáo thí nghiệm kết luận rằng khi thiếu ngủ, một phần
                      của não bộ đã bị "bắt cóc", gần như không hoạt động. Hiện
                      tượng này sau đó được xác nhận có xảy ra ở thí nghiệm trên
                      chuột, với việc khu vực thần kinh vỏ não bị "tắt" hẳn khi
                      chúng thiếu ngủ.
                    </p>
                    <p>
                      "Brandy không phải là nhân loại đầu tiên buộc phải thức
                      nhiều hơn 1 đêm. Có lẽ đây là cơ chế tiến hóa của não bộ,
                      để có thể tự tắt đi và bảo vệ nó khỏi những tổn hại. Một
                      phần não bộ tắt đi rồi phục hồi, trong khi phần khác vẫn
                      thức. Nó lặp đi lặp lại, qua đó khiến những hiện tượng tồi
                      tệ hơn không xảy ra".
                    </p>
                    <p>
                      Sau Randy, có một số người đã vượt qua cậu về thời gian
                      thức trắng, nhưng kỷ lục Guinness đã ngưng cập nhật hạng
                      mục này để tránh cổ xuý. Xét cho cùng, việc ép cơ thể thức
                      trắng là một việc rất nguy hiểm, không nên bắt chước nha.
                    </p>
                    <p>Nguồn: IFL Science</p>
                    <p></p>
                    <p></p>
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
