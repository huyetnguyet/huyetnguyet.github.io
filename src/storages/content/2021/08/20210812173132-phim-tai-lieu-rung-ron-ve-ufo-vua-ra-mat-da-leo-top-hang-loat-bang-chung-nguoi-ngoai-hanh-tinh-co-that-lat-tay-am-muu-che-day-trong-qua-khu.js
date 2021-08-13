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
"title": 'Phim tài liệu rùng rợn về UFO vừa ra mắt đã leo top: Hàng loạt bằng chứng người ngoài hành tinh có thật, "lật tẩy" âm mưu che đậy trong quá khứ?',
"description": 'Chỉ vừa mới ra mắt, phim tài liệu về người ngoài hành tinh và UFO của Netflix đã nhanh chóng leo top thịnh hành thế giới.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screen-shot-2021-08-12-at-153253-16287574352901294696728.png',
"alt": 'UFO,UFO & người ngoài hành tinh,phim tài liệu,thông tin về UFO,Người ngoài hành tinh,phim Âu Mỹ,Kỳ án rúng động thế giới lên phim,Top Secret UFO Projects: Declassified (2021),',
"category": 'news',
"date": '12/08/2021',
"time": '05:31 PM',
"link": '/phim-tai-lieu-rung-ron-ve-ufo-vua-ra-mat-da-leo-top-hang-loat-bang-chung-nguoi-ngoai-hanh-tinh-co-that-lat-tay-am-muu-che-day-trong-qua-khu',
"zcomponent": 'page_20210812173132',
"filepath": './20210812173132-phim-tai-lieu-rung-ron-ve-ufo-vua-ra-mat-da-leo-top-hang-loat-bang-chung-nguoi-ngoai-hanh-tinh-co-that-lat-tay-am-muu-che-day-trong-qua-khu.js'
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
  'Phim tài liệu rùng rợn về UFO vừa ra mắt đã leo top: Hàng loạt bằng chứng người ngoài hành tinh có thật, "lật tẩy" âm mưu che đậy trong quá khứ?';
const author = "HIEUTHUBA,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "12/08/2021 05:31 PM";
const description =
  "Chỉ vừa mới ra mắt, phim tài liệu về người ngoài hành tinh và UFO của Netflix đã nhanh chóng leo top thịnh hành thế giới.";
const link =
  "phim-tai-lieu-rung-ron-ve-ufo-vua-ra-mat-da-leo-top-hang-loat-bang-chung-nguoi-ngoai-hanh-tinh-co-that-lat-tay-am-muu-che-day-trong-qua-khu";
const tagparam = [
  "UFO",
  "UFO & người ngoài hành tinh",
  "phim tài liệu",
  "thông tin về UFO",
  "Người ngoài hành tinh",
  "phim Âu Mỹ",
  "Kỳ án rúng động thế giới lên phim",
  "Top Secret UFO Projects: Declassified (2021)",
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

export default function page_20210812173132() {
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
                      <strong>Người ngoài hành tinh</strong> và các vật thể bay
                      không xác định (<strong>UFO</strong>) vốn luôn là một
                      trong những chủ đề bí ẩn, gây tò mò nhất thế giới. Không
                      ít lần nhiều người tuyên bố đã đụng độ hay nhìn thấy các
                      loại tàu bay, đĩa bay trên bầu trời, thậm chí còn bị bắt
                      cóc bởi sinh vật ngoài hành tinh. Tuy nhiên, tất cả chỉ
                      trôi nổi như những dạng tin đồn không được kiểm chứng,
                      không có thật. Nhiều nỗ lực và giả thuyết được đưa ra để
                      chứng thực sự tồn tại của cuộc sống ngoài trái đất, thế
                      nhưng cũng như "muối bỏ bể". Giờ đây, một series tài liệu
                      vừa được ra mắt của Netflix đang khiến chủ đề này trở nên
                      nóng hơn bao giờ hết. Bộ <strong>phim tài liệu</strong> có
                      tên Top Secret UFO Projects: Declassified (tựa Việt: Dự Án
                      UFO Tuyệt Mật: Hé Lộ Bí Ẩn).
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screen-shot-2021-08-12-at-153253-16287574352901294696728.png"
                      alt="2, UFO,UFO & người ngoài hành tinh,phim tài liệu,thông tin về UFO,Người ngoài hành tinh,phim Âu Mỹ,Kỳ án rúng động thế giới lên phim,Top Secret UFO Projects: Declassified (2021),"
                      note=""
                    />
                    <p>
                      Top Secret <strong>UFO</strong> Projects: Declassified có
                      nội dung đi sâu vào sự xuất hiện của các vật thể bay lạ
                      trong lịch sử thế giới, đồng thời nhắc đến các nỗ lực "che
                      đậy" của chính phủ, quân đội Mỹ để "bảo đảm danh dự" cho
                      chính họ. Phim mang đến cho khán giả những thước phim,
                      hình ảnh về UFO xuyên suốt lịch sử, đồng thời là chia sẻ
                      của các nhà khoa học, những người dành nhiều năm để nghiên
                      cứu về sự tồn tại của{" "}
                      <strong>người ngoài hành tinh</strong>. Thậm chí, xuất
                      hiện và trả lời phỏng vấn trong bộ{" "}
                      <strong>phim tài liệu</strong> này còn có nhiều người
                      tuyên bố đã bị bắt cóc, giao tiếp với người ngoài hành
                      tinh.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screen-shot-2021-08-12-at-153418-16287574345721382185690.png"
                      alt="3, UFO,UFO & người ngoài hành tinh,phim tài liệu,thông tin về UFO,Người ngoài hành tinh,phim Âu Mỹ,Kỳ án rúng động thế giới lên phim,Top Secret UFO Projects: Declassified (2021),"
                      note=""
                    />
                    <p>
                      Bộ <strong>phim tài liệu</strong> này đưa ra nhiều bằng
                      chứng, lập luận đanh thép cho thấy các "lỗ hổng" của chính
                      quyền Mỹ trong việc che đậy các sự việc liên quan tới{" "}
                      <strong>UFO</strong>. Thậm chí, nhà làm phim còn đưa ra
                      các khẳng định rằng hiện tại, nước Mỹ vẫn đang bí mật
                      nghiên cứu một số sinh vật ngoài hành tinh cũng như các
                      tàu bay, công nghệ của họ. Mục đích của việc này chính là
                      để "bắt chước" công nghệ ngoài hành tinh. Đáng chú ý, có
                      cả một nhân vật tự xưng là "chuyên viên nghiên cứu" của dự
                      án tuyệt mật này, khẳng định đã nhiều lần giải phẫu tử thi
                      của sinh vật ngoài hành tinh.
                    </p>
                    <p>
                      Mặc dù tính chính xác của Top Secret <strong>UFO</strong>{" "}
                      Projects: Declassified còn chưa rõ, tuy nhiên không thể
                      phủ nhận các lập luận được bộ phim đưa ra, tất cả đều dựa
                      trên những nghiên cứu và nhân vật có thật trong lịch sử.
                      Phim tái hiện lại nhiều phân đoạn, câu chuyện bằng kỹ xảo
                      giúp người xem dễ hình dung, đồng thời các hiệu ứng hình
                      ảnh, âm nhạc cũng mang lại cảm giác "rờn rợn", bí ẩn cho
                      bộ <strong>phim tài liệu</strong> này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi ra mắt, Top Secret <strong>UFO</strong> Projects:
                      Declassified đang nhanh chóng leo hạng trên bảng xếp hạng
                      thịnh hành của Netflix thế giới (theo Flixpatrol). Số điểm
                      của trang này cho thấy Top Secret UFO Projects:
                      Declassified đang đứng top 4 các chương trình truyền hình
                      hot nhất tháng này của Netflix trên toàn thế giới, chứng
                      tỏ sức hút không hề nhỏ của bộ phim cũng như sự tò mò của
                      khán giả.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screen-shot-2021-08-12-at-153448-16287574345581175617903.png"
                      alt="1, UFO,UFO & người ngoài hành tinh,phim tài liệu,thông tin về UFO,Người ngoài hành tinh,phim Âu Mỹ,Kỳ án rúng động thế giới lên phim,Top Secret UFO Projects: Declassified (2021),"
                      note="Top Secret UFO Projects: Declassified đứng thứ 4 trong danh sách các phim truyền hình hot nhất tháng 8 này của Netflix (theo Flixpatrol)"
                    />
                    <p>
                      Top Secret <strong>UFO</strong> Projects: Declassified đã
                      ra mắt với đủ 6 tập trên Netflix.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287574991561941433786.png"
                      alt="4, UFO,UFO & người ngoài hành tinh,phim tài liệu,thông tin về UFO,Người ngoài hành tinh,phim Âu Mỹ,Kỳ án rúng động thế giới lên phim,Top Secret UFO Projects: Declassified (2021),"
                      note=""
                    />

                    <p>Nguồn ảnh: Netflix</p>
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
