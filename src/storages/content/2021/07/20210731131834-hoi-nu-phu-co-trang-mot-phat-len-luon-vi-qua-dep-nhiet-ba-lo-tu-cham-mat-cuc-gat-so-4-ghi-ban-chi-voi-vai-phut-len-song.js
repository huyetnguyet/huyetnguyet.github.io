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
"timestamp": '31/07/2021 01:18 PM',
"title": 'Hội nữ phụ cổ trang "một phát lên luôn" vì quá đẹp: Nhiệt Ba - Lộ Tư chạm mặt cực gắt, số 4 "ghi bàn" chỉ với vài phút lên sóng!',
"description": 'Một số mỹ nhân như Địch Lệ Nhiệt Ba, Triệu Lộ Tư,... từng ghi điểm khi thủ vai nữ phụ trong các phim cổ trang đình đám.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-16275527395871012338823.jpg',
"alt": 'Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '31/07/2021',
"time": '01:18 PM',
"link": '/hoi-nu-phu-co-trang-mot-phat-len-luon-vi-qua-dep-nhiet-ba-lo-tu-cham-mat-cuc-gat-so-4-ghi-ban-chi-voi-vai-phut-len-song',
"zcomponent": 'page_20210731131834',
"filepath": './20210731131834-hoi-nu-phu-co-trang-mot-phat-len-luon-vi-qua-dep-nhiet-ba-lo-tu-cham-mat-cuc-gat-so-4-ghi-ban-chi-voi-vai-phut-len-song.js'
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
  'Hội nữ phụ cổ trang "một phát lên luôn" vì quá đẹp: Nhiệt Ba - Lộ Tư chạm mặt cực gắt, số 4 "ghi bàn" chỉ với vài phút lên sóng!';
const author = "THÀNH VŨ,";
const source = "Trí Thức Trẻ";
const timestamp = "31/07/2021 01:18 PM";
const description =
  "Một số mỹ nhân như Địch Lệ Nhiệt Ba, Triệu Lộ Tư,... từng ghi điểm khi thủ vai nữ phụ trong các phim cổ trang đình đám.";
const link =
  "hoi-nu-phu-co-trang-mot-phat-len-luon-vi-qua-dep-nhiet-ba-lo-tu-cham-mat-cuc-gat-so-4-ghi-ban-chi-voi-vai-phut-len-song";
const tagparam = [
  "Như Ý Truyện",
  "Tam Sinh Tam Thế: Thập Lý Đào Hoa",
  "Trường Ca Hành",
  "Địch Lệ Nhiệt Ba",
  "Triệu Lộ Tư",
  "Lý Niệm",
  "Lưu Đào",
  "vương viện khả",
  "Tân Chỉ Lôi",
  "Dương Quý Phi Bí Sử",
  "Mị Nguyệt Truyện",
  "Thiên long bát bộ",
  "Diên Hi Công Lược",
  "phim Hoa ngữ",
  "phim trung quốc",
  "Phim truyền hình",
  "phim cổ trang",
  "Mỹ nhân Hoa ngữ",
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

export default function page_20210731131834() {
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
                    Đôi khi không phải cứ ở vị trí trung tâm là sẽ được chú ý.
                    Một số mỹ nhân cổ trang vốn không giữ vai trò chính trong
                    phim nhưng lại không hề bị lu mờ trước nữ chính. Thậm chí,
                    một số cái tên có khi còn nổi bật hơn trong phim, lấn át cả
                    nhan sắc và khí chất của bạn diễn. Dưới đây là một số vai nữ
                    phụ cổ trang giúp diễn viên thủ vai "một phát lên luôn"
                    trong sự nghiệp.
                  </p>
                  <h5>
                    1. <strong>Lưu Đào</strong> với hai vai phụ đáng nhớ, độ
                    "sắc nét" không thua kém Lưu Diệc Phi
                  </h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-16275527395871012338823.jpg"
                    alt="1, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    <strong>Lưu Đào</strong> vào năm 24 tuổi đã trở thành nữ phụ
                    được săn đón nhất nhì Cbiz nhờ nhan sắc mặn mà, khỏe khoắn
                    trong <strong>Thiên Long Bát Bộ</strong>. Những đường nét tự
                    nhiên, sắc sảo giúp mỹ nữ 1979 tỏa sáng, không hề bị lu mờ
                    trước một nàng thơ trắng trẻo, ngây ngô như Lưu Diệc Phi.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-162755275233497276469.jpg"
                    alt="2, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    Tuy nhiên, vai diễn cổ trang giúp <strong>Lưu Đào</strong>{" "}
                    bùng nổ đến đỉnh cao lại là nàng Mị Xu đa mưu trong{" "}
                    <strong>Mị Nguyệt Truyện</strong>. Ban đầu, Mị Xu và em gái
                    Mị Nguyệt (Tôn Lệ) vô cùng yêu thương nhau trong cung. Thế
                    nhưng từ ngày hoàng đế chuyển sang sủng ái Mị Nguyệt, Mị Xu
                    bắt đầu sinh lòng ghen ghét, đố kỵ. Diễn xuất của Lưu Đào
                    năm đó được đánh giá là chín muồi, có sắc thái riêng chứ
                    không bị Tôn Lệ lấn át.
                  </p>
                  <h5>2. Tam Sinh Tam Thế đẻ ra Phượng Cửu dễ cưng quá!</h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/photo-1-1627554258607463399696.jpg"
                    alt="3, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/photo-1-1627554233065252948811.jpg"
                    alt="4, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    Bộ phim "đại bạo"{" "}
                    <strong>Tam Sinh Tam Thế: Thập Lý Đào Hoa</strong> mang đến
                    chuyện tình đầy nước mắt của Dạ Hoa - Bạch Thiển nhưng cũng
                    mang đến cho khán giả một nữ phụ Phượng Cửu (
                    <strong>Địch Lệ Nhiệt Ba</strong>) quá đáng yêu. Sự hồn
                    nhiên, nhí nhảnh của "tiểu hồ ly" giúp Địch Lệ Nhiệt Ba bật
                    lên trên con đường diễn xuất, thậm chí còn có hẳn một phần
                    phim riêng là Tam Sinh Tam Thế: Chẩm Thượng Thư.
                  </p>
                  <h5>
                    3. Công chúa nhỏ Lạc Yên được khen nức nở không thua gì chị
                    lớn Trường Ca
                  </h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/photo-1-1627554291554603581701.jpg"
                    alt="5, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/photo-1-16275543255471515784171.png"
                    alt="6, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    Ngay khi <strong>Trường Ca Hành</strong> chưa lên sóng, phần
                    đông khán giả đã xuýt xoa không thôi trước nét đẹp thanh
                    thuần của công chúa nhỏ Lạc Yên. Đây được xem là màn vớt vát
                    hình tượng đỉnh cao nhất thời gian gần đây khi{" "}
                    <strong>Triệu Lộ Tư</strong> lúc bấy giờ bị chỉ trích không
                    ngừng vì một màu, lại khoái "cọ nhiệt". Với tính cách nhẹ
                    nhàng, tốt bụng, Lạc Yên chính là giọt nước ấm trong cuộc
                    đại chiến sóng gió của Trường Ca Hành.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>
                    4. Nàng vũ nữ "vô danh" xuất hiện chớp nhoáng mà lấn át cả
                    Dương quý phi Ân Đào
                  </h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-16275527528141046518906.jpg"
                    alt="7, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    Vào năm 2011, bộ phim <strong>Dương Quý Phi Bí Sử</strong>{" "}
                    ra mắt và gây ra làn sóng tranh cãi lớn khi nữ chính Ân Đào
                    không thể hiện thành công hình ảnh của "đại mỹ nhân" Dương
                    quý phi. Trái lại, người xem lại ấn tượng sâu sắc với cô
                    nhạc kỹ thường hay múa hát để phục vụ hoàng đế và các phi
                    tần trong cung.Vai diễn của <strong>Lý Niệm</strong> không
                    chỉ là vũ nữ ca múa mà còn là thân mẫu của nữ chính Dương
                    quý phi. Thế nhưng so với hình ảnh của Ân Đào, nhân vật của
                    Lý Niệm được nhật xét có phần trẻ đẹp, tươi tắn hơn gấp bội.
                  </p>
                  <h5>
                    5. Thuần phi với hình tượng "trở mặt" đáng gờm, không thiếu
                    phần xinh tươi ở Diên Hi Công Lược
                  </h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-1627552754383909779868.jpg"
                    alt="8, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/photo-1-16275543498661374363733.jpg"
                    alt="9, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    Bên cạnh cô gái Ngụy Anh Lạc quả cảm hay Kế hoàng hậu đáng
                    thương, nàng Thuần phi (<strong>Vương Viện Khả</strong>)
                    hiền thục, nền nã cũng là vị nương nương khiến khán giả nhớ
                    mãi không quên trong <strong>Diên Hi Công Lược</strong>. Ban
                    đầu, sự thông minh của Thuần phi đã không ít lần cứu mạng
                    chị em phi tần. Về sau, tình yêu bị cấm đoán của cô dành cho
                    Phó Hằng (Hứa Khải) đã khiến mỹ nhân an phận nhất Tử Cấm
                    Thành "lật như bánh tráng". Tuy không đi được đến giây phút
                    cuối cùng nhưng không thể phủ nhận, Thuần phi là một trong
                    những "đóa hoa" tuyệt sắc, có tính cách khó đoán thú vị của
                    Diên Hi Công Lược.
                  </p>
                  <h5>
                    6. Gia phi "khuấy đảo" <strong>Như Ý Truyện</strong> với
                    visual chuẩn Hàn và khí chất "ác nữ"
                  </h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/photo-1-16275543810971693198775.jpg"
                    alt="10, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/photo-1-16275544206051699840769.jpg"
                    alt="11, Như Ý Truyện,Tam Sinh Tam Thế: Thập Lý Đào Hoa,Trường Ca Hành,Địch Lệ Nhiệt Ba,Triệu Lộ Tư,Lý Niệm,Lưu Đào,vương viện khả,Tân Chỉ Lôi,Dương Quý Phi Bí Sử,Mị Nguyệt Truyện,Thiên long bát bộ,Diên Hi Công Lược,phim Hoa ngữ,phim trung quốc,Phim truyền hình,phim cổ trang,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    Ngay từ khi có những hình ảnh tạo hình đầu tiên của bom tấn
                    cung đấu <strong>Như Ý Truyện</strong>, fan đã "đặt kèo",
                    thậm chí "đổ cả gia tài" vào một cái tên vừa nhìn đã thấy
                    "nguy hiểm" - Gia phi Kim Ngọc Nghiên (
                    <strong>Tân Chỉ Lôi</strong>). Gia phi nương nương càng đi
                    sâu càng thu hút sự chú ý với những âm mưu thâm độc, cá tính
                    khác biệt và chiến tích dài như sớ vô cùng ấn tượng. Thế
                    nhưng, nhan sắc của "chiến thần Cao Ly" cũng là yếu tố gây
                    thương nhớ khi đậm chất Hàn Quốc, thậm chí còn được khán giả
                    gọi vui là "Jennie của Tử Cấm Thành".
                  </p>
                  <p>Nguồn ảnh: Tổng hợp</p>
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
