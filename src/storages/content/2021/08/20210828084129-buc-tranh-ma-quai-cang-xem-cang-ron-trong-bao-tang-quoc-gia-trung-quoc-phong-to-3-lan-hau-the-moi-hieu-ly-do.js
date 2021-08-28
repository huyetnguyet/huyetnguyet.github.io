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
"timestamp": '28/08/2021 08:41 AM',
"title": 'Bức tranh ma quái “càng xem càng rợn” trong Bảo tàng Quốc gia Trung Quốc: Phóng to 3 lần hậu thế mới hiểu lý do!',
"description": 'Nhiều khách tham quan thú nhận họ cảm thấy rợn người khi nhìn thẳng vào bức họa “Nhòm cửa thấy quỷ” trong Bảo tàng Quốc gia Trung Quốc.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-1-16297990658001810637179.png',
"alt": 'Quốc gia Trung Quốc,khách tham quan,Quảng trường Thiên An Môn,Thiên An Môn,tác phẩm nghệ thuật,Lịch sử Trung Quốc,Viện bảo tàng,thiếu nữ xinh đẹp,ô cửa sổ,người đàn ông,liêu trai chí dị,độc giả Việt Nam,thói hư tật xấu,bồ tùng linh,cô gái xinh đẹp,',
"category": 'news',
"date": '28/08/2021',
"time": '08:41 AM',
"link": '/buc-tranh-ma-quai-cang-xem-cang-ron-trong-bao-tang-quoc-gia-trung-quoc-phong-to-3-lan-hau-the-moi-hieu-ly-do',
"zcomponent": 'page_20210828084129',
"filepath": './20210828084129-buc-tranh-ma-quai-cang-xem-cang-ron-trong-bao-tang-quoc-gia-trung-quoc-phong-to-3-lan-hau-the-moi-hieu-ly-do.js'
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
  "Bức tranh ma quái “càng xem càng rợn” trong Bảo tàng Quốc gia Trung Quốc: Phóng to 3 lần hậu thế mới hiểu lý do!";
const author = "TAMMY,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "28/08/2021 08:41 AM";
const description =
  "Nhiều khách tham quan thú nhận họ cảm thấy rợn người khi nhìn thẳng vào bức họa “Nhòm cửa thấy quỷ” trong Bảo tàng Quốc gia Trung Quốc.";
const link =
  "buc-tranh-ma-quai-cang-xem-cang-ron-trong-bao-tang-quoc-gia-trung-quoc-phong-to-3-lan-hau-the-moi-hieu-ly-do";
const tagparam = [
  "Quốc gia Trung Quốc",
  "khách tham quan",
  "Quảng trường Thiên An Môn",
  "Thiên An Môn",
  "tác phẩm nghệ thuật",
  "Lịch sử Trung Quốc",
  "Viện bảo tàng",
  "thiếu nữ xinh đẹp",
  "ô cửa sổ",
  "người đàn ông",
  "liêu trai chí dị",
  "độc giả Việt Nam",
  "thói hư tật xấu",
  "bồ tùng linh",
  "cô gái xinh đẹp",
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

export default function page_20210828084129() {
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
                      Nhiều <strong>khách tham quan</strong> thú nhận họ cảm
                      thấy rợn người khi nhìn thẳng vào bức họa “Nhòm cửa thấy
                      quỷ” trong Bảo tàng <strong>Quốc gia Trung Quốc</strong>.
                    </p>
                    <p>
                      Bảo tàng <strong>Quốc gia Trung Quốc</strong> nằm ở phía
                      đông{" "}
                      <strong>
                        Quảng trường <strong>Thiên An Môn</strong>
                      </strong>{" "}
                      là một trong những bảo tàng sở hữu nhiều hiện vật hoàng
                      gia và <strong>tác phẩm nghệ thuật</strong> nhất tại đất
                      nước tỷ dân. Nơi đây trưng bày hơn 1 triệu mảnh ghép{" "}
                      <strong>lịch sử Trung Quốc</strong> từ thời người vượn
                      Nguyên Mưu đến cuối triều đại nhà Thanh.
                    </p>
                    <p>
                      Khi đến thăm <strong>viện bảo tàng</strong> này, nhiều du
                      khách không khỏi bất ngờ, ám ảnh khi tận mắt chiêm ngưỡng
                      một bức tranh ma quỷ có niên đại từ thời nhà Thanh. Bức
                      họa này có tên "Nhòm cửa thấy quỷ", được sáng tác bởi một
                      họa sĩ vô danh dưới thời vua Quang Tự (1875 - 1908).
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-2-16297990680252109268122.jpg"
                      alt="1, Quốc gia Trung Quốc,khách tham quan,Quảng trường Thiên An Môn,Thiên An Môn,tác phẩm nghệ thuật,Lịch sử Trung Quốc,Viện bảo tàng,thiếu nữ xinh đẹp,ô cửa sổ,người đàn ông,liêu trai chí dị,độc giả Việt Nam,thói hư tật xấu,bồ tùng linh,cô gái xinh đẹp,"
                      note="Tấm da mỹ nữ với nụ cười ma mị khi phóng to bức tranh ở kích thước 300% (Ảnh: Sina)"
                    />

                    <p>
                      Toàn cảnh bức họa "Nhòm cửa thấy quỷ" được trưng bày trong
                      Bảo tàng <strong>Quốc gia Trung Quốc</strong> (Ảnh: Sina)
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-1-16297990658001810637179.png"
                      alt="2, Quốc gia Trung Quốc,khách tham quan,Quảng trường Thiên An Môn,Thiên An Môn,tác phẩm nghệ thuật,Lịch sử Trung Quốc,Viện bảo tàng,thiếu nữ xinh đẹp,ô cửa sổ,người đàn ông,liêu trai chí dị,độc giả Việt Nam,thói hư tật xấu,bồ tùng linh,cô gái xinh đẹp,"
                      note=""
                    />

                    <p>
                      Tranh vẽ lại quang cảnh trong thư phòng với một ma nữ màu
                      xanh, gương mặt dữ tợn đang vẽ lên lớp da của một{" "}
                      <strong>thiếu nữ xinh đẹp</strong>. Bên{" "}
                      <strong>ô cửa sổ</strong> còn có một{" "}
                      <strong>người đàn ông</strong> nhòm vào với gương mặt
                      trắng bệch kinh hãi.
                    </p>

                    <p>
                      Nhiều người dùng trên mạng xã hội Weibo khẳng định họ cảm
                      thấy "sởn da gà" khi phóng to tranh ở kích thước 300% để
                      nhìn thẳng vào nụ cười ma quái, vô hồn của bộ da thiếu nữ
                      trên bàn, màu sắc tổng thể bức tranh cũng vô cùng u ám dễ
                      khiến người ta e sợ. Vậy bức họa ma quái này thực sự có ý
                      nghĩa gì?
                    </p>

                    <h5>Câu chuyện đằng sau bức họa</h5>
                    <p>
                      Theo thông tin từ Bảo tàng{" "}
                      <strong>Quốc gia Trung Quốc</strong>, bức tranh "Nhòm cửa
                      thấy quỷ" được lấy cảm hứng mẩu chuyện ngắn trong tiểu
                      thuyết nổi tiếng <strong>Liêu Trai Chí Dị</strong> của tác
                      giả <strong>Bồ Tùng Linh</strong>.
                    </p>
                    <p>
                      Tác phẩm <strong>Liêu Trai Chí Dị</strong> ra đời vào đầu
                      thời nhà Thanh với 12 quyển, 431 thiên truyện từng được
                      dịch sang tiếng Việt và được đông đảo{" "}
                      <strong>độc giả Việt Nam</strong> đón nhận.
                    </p>
                    <p>
                      Tiểu thuyết thông qua những câu chuyện thần tiên ma quái
                      mà ngầm chỉ trích bọn tham quan, cường hào ác bá thời Mãn
                      Thanh, phê phán <strong>thói hư tật xấu</strong> của Nho
                      sĩ, đồng thời, thể hiện những tư tưởng dân chủ trong vấn
                      đề hôn nhân và tình yêu.
                    </p>
                    <p>
                      Bức họa "Nhòm cửa thấy quỷ" này được lấy cảm hứng từ
                      truyện ngắn nổi tiếng Họa Bì trong quyển 1 hồi 40 của{" "}
                      <strong>Liêu Trai Chí Dị</strong>.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Họa Bì kể về một học sĩ Vương Sinh người Sơn Tây, tình cờ
                      gặp được một <strong>cô gái xinh đẹp</strong> trên đường.
                    </p>
                    <p>
                      Nghe mỹ nhân này nói mình đang lâm nạn, Vương Sinh dù đã
                      có vợ ở nhà nhưng vẫn động lòng đưa cô gái về nhà trú ngụ
                      rồi cùng chung chạ với nhau. Một ngày nọ, có vị đạo sĩ đi
                      ngang qua thấy Vương Sinh có tà khí trên người bèn cảnh
                      tỉnh nhưng Vương Sinh xem thường không nghe.
                    </p>
                    <p>
                      Khi về đến nhà, Vương Sinh lén nhìn qua ô cửa của căn
                      phòng cô gái mình đưa về thì phát hiện cô là con quỷ đội
                      lốt da người, đêm đêm đều hiện nguyên hình quỷ tô vẽ cho
                      tấm da mỹ nhân xinh đẹp kia. Lúc này, Vương Sinh mới sợ
                      hãi đi tìm đạo sĩ nhờ giúp đỡ nhưng chuyện không thành,
                      con quỷ trong nhà đã móc tim Vương Sinh rồi bỏ trốn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/24/photo-3-16297990676461092333189.jpg"
                      alt="3, Quốc gia Trung Quốc,khách tham quan,Quảng trường Thiên An Môn,Thiên An Môn,tác phẩm nghệ thuật,Lịch sử Trung Quốc,Viện bảo tàng,thiếu nữ xinh đẹp,ô cửa sổ,người đàn ông,liêu trai chí dị,độc giả Việt Nam,thói hư tật xấu,bồ tùng linh,cô gái xinh đẹp,"
                      note=""
                    />
                    <p>
                      Ánh mắt kinh hãi của Vương Sinh được tác giả khắc họa
                      trong bức tranh "Nhòm cửa thấy quỷ" (Ảnh: Sina)
                    </p>
                    <p>
                      Vợ Vương Sinh là Trần Thị biết tin thì đau đớn đi tìm đạo
                      sĩ hỏi cách cứu chồng, đạo sĩ lúc đầu còn từ chối nhưng do
                      Trần Thị thiết tha nài nỉ nên đã bày cách cho. Vị đạo sĩ
                      dặn đi tìm một người điên ở chợ, lại dặn dù có bị đánh đập
                      hay làm nhục vẫn phải nhẫn nhục cầu xin người ấy.
                    </p>
                    <p>
                      Trần Thị tìm được người điên dù bị cào cấu đánh đập cũng
                      vẫn nhẫn nhục, người điên lại bắt Trần Thị phải nuốt cục
                      đờm của mình rồi đi mất. Không được việc gì lại phải chịu
                      nhục nuốt đờm người khác, Trần Thị tủi hổ về khóc bên xác
                      chồng, bỗng thấy cổ vướng liền nôn ra một quả tim rơi vào
                      ngực chồng, nhờ đó Vương Sinh sống lại.
                    </p>
                    <p>
                      Qua phần nội dung kinh dị này, Họa Bì đã vạch trần dục
                      vọng và lòng tham của con người, cho thấy con người thường
                      dễ bị mờ mắt bởi những giá trị hào nhoáng bên ngoài mà
                      không đề phòng những hiểm họa ẩn giấu bên trong. Bài học
                      từ Họa Bì đến tận ngày nay vẫn còn có tính thời sự, tính
                      ứng dụng giữa xã hội hiện đại.
                    </p>
                    <p>
                      Sáng tạo này của nhà văn <strong>Bồ Tùng Linh</strong>{" "}
                      được coi là nguồn cảm hứng đặc biệt cho người họa sĩ thời
                      Thanh sáng tạo nên bức họa "Nhòm cửa thấy quỷ" và sau này
                      là những tác phẩm điện ảnh được đón nhận nồng nhiệt như bộ
                      phim Họa Bì (2008) của đạo diễn Trần Gia Thượng.
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
