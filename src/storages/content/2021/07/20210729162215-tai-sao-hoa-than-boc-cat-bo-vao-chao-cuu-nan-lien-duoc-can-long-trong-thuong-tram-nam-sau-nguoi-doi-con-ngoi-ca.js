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
"timestamp": '29/07/2021 04:22 PM',
"title": 'Tại sao Hòa Thân bốc cát bỏ vào cháo cứu nạn liền được Càn Long trọng thưởng, trăm năm sau người đời còn ngợi ca?',
"description": 'Hành động thể hiện sự thông minh, tài trí của Hòa Thân - một tên tham quan nổi tiếng trong lịch sử Trung Hoa.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269489575971688054983.jpg',
"alt": 'Hòa Thân,Lịch sử Trung Hoa,Càn Long,',
"category": 'news',
"date": '29/07/2021',
"time": '04:22 PM',
"link": '/tai-sao-hoa-than-boc-cat-bo-vao-chao-cuu-nan-lien-duoc-can-long-trong-thuong-tram-nam-sau-nguoi-doi-con-ngoi-ca',
"zcomponent": 'page_20210729162215',
"filepath": './20210729162215-tai-sao-hoa-than-boc-cat-bo-vao-chao-cuu-nan-lien-duoc-can-long-trong-thuong-tram-nam-sau-nguoi-doi-con-ngoi-ca.js'
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
  "Tại sao Hòa Thân bốc cát bỏ vào cháo cứu nạn liền được Càn Long trọng thưởng, trăm năm sau người đời còn ngợi ca?";
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:22 PM";
const description =
  "Hành động thể hiện sự thông minh, tài trí của Hòa Thân - một tên tham quan nổi tiếng trong lịch sử Trung Hoa.";
const link =
  "tai-sao-hoa-than-boc-cat-bo-vao-chao-cuu-nan-lien-duoc-can-long-trong-thuong-tram-nam-sau-nguoi-doi-con-ngoi-ca";
const tagparam = ["Hòa Thân", "Lịch sử Trung Hoa", "Càn Long"];
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

export default function page_20210729162215() {
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
                      Nói đến <strong>Hòa Thân</strong>, chúng ta chắc chắn nghĩ
                      ngay đến hình ảnh một tên tham quan tai to mặt lớn. Nhưng
                      sau khi tìm hiểu sử sách, bạn chắc chắn sẽ phát hiện Hòa
                      Thân cũng không hẳn là một người như vậy. Hòa Thân trong
                      lịch sử, không những không hề xấu xí mà còn vô cùng có học
                      thức, tài hoa uyên bác. Trong một lần cứu trợ thiên tai,
                      Hòa Thân đã nghĩ ra kế trộn lẫn cát vào trong cháo cứu
                      trợ. Ý tưởng này lại được <strong>Càn Long</strong> vô
                      cùng tán thưởng, trăm năm sau thế nhân vẫn công nhận,
                      chuyện là thế nào?
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269489575971688054983.jpg"
                      alt="1, Hòa Thân,Lịch sử Trung Hoa,Càn Long,"
                      note=""
                    />
                    <p>
                      <strong>Hòa Thân</strong> sinh ra đã mang gia cảnh không
                      tầm thường, xuất thân từ một gia đình hoàng tộc nhưng cuộc
                      đời lại không mấy may mắn. Năm 3 tuổi mất mẹ, đến năm 9
                      tuổi cha cũng ra đi. Từ nhỏ đã mồ côi cha mẹ khiến cuộc
                      sống không hề dễ dàng, thường bị con cháu những gia tộc
                      khác bắt nạt. Cho nên Hòa Thân từ nhỏ đã rất nỗ lực, kiên
                      trì vượt lên, không muốn để kẻ khác đè đầu cưỡi cổ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269489596291990760884.jpg"
                      alt="2, Hòa Thân,Lịch sử Trung Hoa,Càn Long,"
                      note=""
                    />
                    <p>
                      Hoàng Đế <strong>Càn Long</strong> khi ấy đứng đầu Đại
                      Thanh, rất tự tin vào khả năng cai trị của mình, quen sống
                      trong xa hoa nhung lụa. Nhờ có <strong>Hòa Thân</strong>{" "}
                      là một cao thủ “quản lý tài chính” thì mới có thể quản lý
                      tốt ngân khố, điều này khiến Càn Long rất vừa lòng.
                    </p>
                    <p>
                      Thời <strong>Càn Long</strong> thường xảy ra nhiều thiên
                      tai, do khoa học kỹ thuật chưa phát triển nên mỗi khi có
                      hạn hán hay lũ lụt,... mùa màng của người dân bị ảnh hưởng
                      nghiêm trọng, lương thực cạn kiệt, người dân rơi vào cảnh
                      khốn cùng. Có một lần ở phương Nam xảy ra thiên tai lớn,
                      nhân dân bần hàn, các quan lại địa phương liên tục dâng
                      tấu chương xin cứu trợ thiên tai. Càn Long khi ấy đã cử ra
                      nhiều đại thần đến tận địa phương phân phát lương thực cứu
                      trợ. Nhưng lương thực cứu trợ ngày một ít mà số người đến
                      nhận cứu trợ lại ngày càng nhiều. Chỉ cần là người tinh ý
                      một chút nhìn qua sẽ nhận ra có không ít người giả bộ làm
                      người dân bị nạn đến lấy đồ tiếp tế do triều đình phân
                      phát.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269489600841105601310.jpg"
                      alt="3, Hòa Thân,Lịch sử Trung Hoa,Càn Long,"
                      note=""
                    />
                    <p>
                      Nhưng các đại quan nhận ra trong số những người ở đó thực
                      sự có những người dân bị nạn. Nếu ngừng cấp phát cháo, họ
                      sẽ không có gì để ăn, thậm chí là sẽ chết vì đói.{" "}
                      <strong>Càn Long</strong> hay tin liền cử{" "}
                      <strong>Hòa Thân</strong> đến tận nơi phân phát cháo tại
                      vùng thiên tai. Hòa Thân dù nổi tiếng là một tên tham quan
                      nhưng thực sự có tài. Khi hắn đến nơi, trời như thiêu như
                      đốt, khắp nơi đều tỏa ra hơi thở của thiên tai, sự diệt
                      vong. Hòa Thân thấy vậy lập tức bắt tay vào phân phát
                      cháo, nhưng hắn còn bốc nắm cát bỏ vào cháo khiến các quan
                      đại thần đều kinh ngạc không thôi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269489605841076515018.jpg"
                      alt="4, Hòa Thân,Lịch sử Trung Hoa,Càn Long,"
                      note=""
                    />
                    <p>
                      Sau đó <strong>Hòa Thân</strong> đã giải thích với{" "}
                      <strong>Càn Long</strong>, vì nhiều người đến lấy cứu trợ
                      không thực sự là nạn nhân của hạn hán. Nếu để tình trạng
                      này kéo dài, nguồn lương thực ngày càng cạn kiệt, mà nạn
                      dân cũng không nhận được sự hỗ trợ tốt nhất từ triều đình.
                      Nhưng nếu bỏ cát vào cháo, những kẻ giả danh sẽ không thể
                      nuốt được, những nạn dân thực sự vì quá đói nên sẽ không
                      để tâm quá nhiều khi có một chút cát trong cháo.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Càn Long sau khi nghe Hòa Thân giải thích cũng cảm thấy
                      rất có lý nên đã trọng thưởng. Sau đó, các đại quan trong
                      triều cũng học theo cách này, tiến hành phân phát cháo cho
                      nhân dân những vùng hạn hán, quả nhiên những kẻ mạo danh
                      đến ít hơn hẳn, những người thực sự khốn khó được giúp đỡ
                      tận tình. Tiếng lành đồn gần, tiếng xấu vang xa. Mặc dù
                      Hòa Thân làm ra không ít chuyện tốt nhưng việc hắn là một
                      tên tham quan vẫn lưu danh muôn thuở.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269489596521648740664.jpg"
                      alt="5, Hòa Thân,Lịch sử Trung Hoa,Càn Long,"
                      note=""
                    />
                    <p>
                      Sau này, tại Hà Bắc lại xảy ra hạn hán, viên quan lúc đó
                      không sử dụng phương thức mà Hòa Thân đưa ra, phát theo
                      cách thông thường. Nhưng rất nhiều người phát hiện tình
                      hình càng lúc càng tồi tệ và không thể khống chế. Nạn dân
                      càng ngày càng nhiều, những kẻ giả mạo nạn dân chiếm không
                      ít. Vấn đề căn bản không thể giải quyết một cách triệt để,
                      vẫn có người chết đói vì thiên tai.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-1626948959687512460601.jpg"
                      alt="6, Hòa Thân,Lịch sử Trung Hoa,Càn Long,"
                      note=""
                    />
                    <p>
                      Sau đó, những viên quan này mới bắt đầu dùng phương pháp
                      của Hòa Thân, cho cát lẫn vào thức ăn. Không ngờ sự tình
                      quả nhiên chuyển biến tích cực. Cũng ít xuất hiện trường
                      hợp người dân chết đói ven đường. Lúc này mọi người mới
                      nhận ra trí tuệ sắc bén của Hòa Thân. Thậm chí hàng trăm
                      năm sau vẫn có người tán thưởng, ngợi ca.
                    </p>
                    <p>Theo: Sohu</p>
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
