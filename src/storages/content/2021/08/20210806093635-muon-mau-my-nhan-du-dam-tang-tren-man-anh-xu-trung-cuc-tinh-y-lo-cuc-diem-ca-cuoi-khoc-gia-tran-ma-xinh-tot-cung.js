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
"timestamp": '06/08/2021 09:36 AM',
"title": 'Muôn màu mỹ nhân dự đám tang trên màn ảnh xứ Trung: Cúc Tịnh Y lố cực điểm, ca cuối khóc "giả trân" mà xinh tột cùng',
"description": 'Ngay cả trong cảnh đám tang, các mỹ nhân như Cúc Tịnh Y hay Triệu Lệ Dĩnh cũng khoe sắc theo nhiều cách khác nhau.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/1-16281721977642048178247.png',
"alt": 'Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '06/08/2021',
"time": '09:36 AM',
"link": '/muon-mau-my-nhan-du-dam-tang-tren-man-anh-xu-trung-cuc-tinh-y-lo-cuc-diem-ca-cuoi-khoc-gia-tran-ma-xinh-tot-cung',
"zcomponent": 'page_20210806093635',
"filepath": './20210806093635-muon-mau-my-nhan-du-dam-tang-tren-man-anh-xu-trung-cuc-tinh-y-lo-cuc-diem-ca-cuoi-khoc-gia-tran-ma-xinh-tot-cung.js'
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
  'Muôn màu mỹ nhân dự đám tang trên màn ảnh xứ Trung: Cúc Tịnh Y lố cực điểm, ca cuối khóc "giả trân" mà xinh tột cùng';
const author = "THÀNH VŨ,";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 09:36 AM";
const description =
  "Ngay cả trong cảnh đám tang, các mỹ nhân như Cúc Tịnh Y hay Triệu Lệ Dĩnh cũng khoe sắc theo nhiều cách khác nhau.";
const link =
  "muon-mau-my-nhan-du-dam-tang-tren-man-anh-xu-trung-cuc-tinh-y-lo-cuc-diem-ca-cuoi-khoc-gia-tran-ma-xinh-tot-cung";
const tagparam = [
  "Cúc Tịnh Y",
  "triệu lệ dĩnh",
  "Tân Chỉ Lôi",
  "Trương Hinh Dư",
  "Xa Thi Mạn",
  "Châu Tấn",
  "Đồng Dao",
  "Như Ý Truyện",
  "Minh Lan Truyện",
  "Như Ý Phương Phi",
  "Thiên long bát bộ",
  "phim Hoa ngữ",
  "phim cổ trang",
  "phim trung quốc",
  "Phim truyền hình",
  "Yến Vân Đài",
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

export default function page_20210806093635() {
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
                      Dàn <strong>mỹ nhân Hoa ngữ</strong> không chỉ vui vẻ,
                      hạnh phúc trong ngày cưới mà đôi lúc phải khóc thương,
                      buồn bã trong những cảnh phim đưa tang. Thế nhưng mỗi nàng
                      lại có mỗi kiểu chịu tang khác nhau trên màn ảnh, xinh đẹp
                      bình thường cũng có, xuất thần cũng có mà... thảm họa cũng
                      không thiếu!
                    </p>
                    <h5>
                      1. <strong>Cúc Tịnh Y</strong> dự tang mà như đi ăn cưới
                    </h5>
                    <p>
                      Nổi tiếng là "thánh make up lố" của làng{" "}
                      <strong>phim Hoa ngữ</strong>, <strong>Cúc Tịnh Y</strong>{" "}
                      từng khiến ai nấy hốt hoảng với màn ăn diện lồng lộn trong
                      một cảnh đưa tang của <strong>Như Ý Phương Phi</strong>.
                      Nhiều khán giả khi ấy nhận xét rằng Cúc Tịnh Y dự đám tang
                      mà như ăn cưới, nếu không mặc đồ tang quy củ thì chắc
                      chẳng ai nhìn ra bối cảnh ra sao.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-1628167142154318903481-16281687608271904095101.jpg"
                      alt="1, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note="Kiểu trang điểm dày cộm của Cúc Tịnh Y trong cảnh đưa tang"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-16281671576292033603447-1628168856192996223493.jpg"
                      alt="2, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note="Xa Thi Mạn được khen trong cảnh đưa tang"
                    />
                    <h5>
                      2. <strong>Xa Thi Mạn</strong> lấn át Đường Yên chỉ bằng
                      một cảnh khóc
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/5/photo-1-16281669966031620642682.gif"
                      alt="2, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note="Xa Thi Mạn được khen trong cảnh đưa tang"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/5/photo-1-16281670547121616979979.gif"
                      alt="2, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note="Xa Thi Mạn được khen trong cảnh đưa tang"
                    />
                    <p>
                      Dù chỉ mang thân phận nữ chính trong{" "}
                      <strong>Yến Vân Đài</strong>, diễn xuất của{" "}
                      <strong>Xa Thi Mạn</strong> lại lấn lướt Đường Yên toàn
                      tập. Trong một phân cảnh đưa tang phụ thân, Tiêu Hồ Liễn
                      đã không nén được đau thương mà rơi lệ. Diễn xuất đỉnh cao
                      lâu năm và nhan sắc dịu nhẹ, giản đơn chính là chìa khóa
                      giúp "chị đại" TVB chinh phục khán giả, lọt cả hot search
                      của Weibo lúc bấy giờ.
                    </p>
                    <h5>
                      3. <strong>Trương Hinh Dư</strong> ghi điểm với ánh mắt ám
                      ảnh trong Thiên Long Bát Bộ
                    </h5>
                    <p>
                      Trong siêu phẩm Tân <strong>Thiên Long Bát Bộ</strong>,
                      người đẹp <strong>Trương Hinh Dư</strong> đã khiến khán
                      giả ấn tượng với nhan sắc nổi bật trong trang phục tang
                      giản dị. Lúc này, nhân vật Khang Mẫn đang lặng lẽ tiễn đưa
                      chồng sang thế giới bên kia. Thế nhưng chính sự im lặng và
                      ánh mắt chất chứa yêu lẫn hận của Khang Mẫn đã khiến người
                      xem trầm trồ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-1628166200315347069722.jpg"
                      alt="3, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note="Trương Hinh Dư xinh đẹp trong trang phục tang lễ"
                    />
                    <RelationNewsInPage category={category} />
                    <h5>
                      4. <strong>Triệu Lệ Dĩnh</strong> trẻ đẹp, ngây thơ cực kì
                      trong Minh Lan Truyện
                    </h5>
                    <p>
                      Trong <strong>Minh Lan Truyện</strong>,{" "}
                      <strong>Triệu Lệ Dĩnh</strong> đã gây bất ngờ toàn tập với
                      ngoại hình non trẻ khác lạ. Đặc biệt là trong phân cảnh
                      đưa tang, nhan sắc của nàng Minh Lan không hề bị lu mờ bởi
                      chất vải bao bố hay kiểu dáng thô sơ của trang phục đưa
                      tang. Ánh mắt nữ diễn viên khi ấy trong suốt, long lanh,
                      cộng thêm kiểu tóc mái ngố lại càng khiến khán giả thương
                      cảm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-1628164732009162175824.jpg"
                      alt="4, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note="Một Triệu Lệ Dĩnh non nớt trong Minh Lan Truyện"
                    />
                    <h5>
                      5. Gia phi khóc "giả trân" nhưng vẫn cuốn hút trong cảnh
                      đại tang hoành tráng
                    </h5>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/3-16281721984931401803632.png"
                      alt="5, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note="Thái hậu cũng khóc cho có lệ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/1-16281721977642048178247.png"
                      alt="8, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Đại tang tiên đế của <strong>Như Ý Truyện</strong> được
                      đánh giá là những cảnh đám tang hoành tráng nhất trong
                      lịch sử phim Trung. Một vị vua ngã xuống khiến toàn dân
                      lẫn các phi tần, con cháu phải than khóc. Thế nhưng trong
                      số đó, mỗi người lại có một suy nghĩ riêng, không phải ai
                      cũng thật tâm đau lòng vì người đã khuất. Gia phi Kim Ngọc
                      Nghiên (<strong>Tân Chỉ Lôi</strong>) là một trong số đó.
                      Cô vốn dĩ không có sự liên quan về tình thân với tiên đế,
                      vì vậy chỉ khóc cho có lệ. Nét diễn "giả trân" cố ý của
                      Tân Chỉ Lôi khi ấy đã khiến nhiều khán giả "đặt cược" vào
                      cô gái này trong cuộc chiến hậu cung sau đó.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/2-16281721978601319658999.png"
                      alt="7, Cúc Tịnh Y,triệu lệ dĩnh,Tân Chỉ Lôi,Trương Hinh Dư,Xa Thi Mạn,Châu Tấn,Đồng Dao,Như Ý Truyện,Minh Lan Truyện,Như Ý Phương Phi,Thiên long bát bộ,phim Hoa ngữ,phim cổ trang,phim trung quốc,Phim truyền hình,Yến Vân Đài,Mỹ nhân Hoa ngữ,"
                      note="Như Ý ghi điểm với kiểu tạo hình nhu mì, nền nã"
                    />
                    <p>Nguồn ảnh: Tổng hợp</p>
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
