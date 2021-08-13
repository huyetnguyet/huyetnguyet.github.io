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
"timestamp": '11/08/2021 10:54 AM',
"title": 'Loạt thảm hoạ tạo hình phim cổ trang Hoa ngữ: Lưu Diệc Phi bưng cả mâm ngũ quả lên đầu nhưng chưa chắc đọ được combo cá chép của Triệu Lệ Dĩnh?',
"description": 'Có vẻ những người đẹp Hoa ngữ đình đám ít nhiều từng bị tổ hoá trang dìm khi tham gia dự án phim cổ trang thì phải.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-1628426161100814976995.jpg',
"alt": 'phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:54 AM',
"link": '/loat-tham-hoa-tao-hinh-phim-co-trang-hoa-ngu-luu-diec-phi-bung-ca-mam-ngu-qua-len-dau-nhung-chua-chac-do-duoc-combo-ca-chep-cua-trieu-le-dinh',
"zcomponent": 'page_20210811105426',
"filepath": './20210811105426-loat-tham-hoa-tao-hinh-phim-co-trang-hoa-ngu-luu-diec-phi-bung-ca-mam-ngu-qua-len-dau-nhung-chua-chac-do-duoc-combo-ca-chep-cua-trieu-le-dinh.js'
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
  "Loạt thảm hoạ tạo hình phim cổ trang Hoa ngữ: Lưu Diệc Phi bưng cả mâm ngũ quả lên đầu nhưng chưa chắc đọ được combo cá chép của Triệu Lệ Dĩnh?";
const author = "CHÚ CÁ TRÊ X CHIM VÀNH KHEN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:54 AM";
const description =
  "Có vẻ những người đẹp Hoa ngữ đình đám ít nhiều từng bị tổ hoá trang dìm khi tham gia dự án phim cổ trang thì phải.";
const link =
  "loat-tham-hoa-tao-hinh-phim-co-trang-hoa-ngu-luu-diec-phi-bung-ca-mam-ngu-qua-len-dau-nhung-chua-chac-do-duoc-combo-ca-chep-cua-trieu-le-dinh";
const tagparam = [
  "phim cổ trang",
  "Vương Tổ Hiền",
  "Trần Nghiên Hy",
  "Tiểu Long Nữ",
  "Lưu Diệc Phi",
  "Lưu Gia Linh",
  "Địch Lệ Nhiệt Ba",
  "Dương Mịch",
  "Cúc Tịnh Y",
  "star style",
  "sao Cbiz",
  "tạo hình nhân vật",
  "tạo hình trong phim",
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

export default function page_20210811105426() {
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
                      Nhìn tạo hình của mỹ nhân <strong>Vương Tổ Hiền</strong>{" "}
                      trong Thiện Nữ U Hồn 1987, chắc bạn sẽ ré lên vì sợ. Chao
                      ôi, búi tóc của cô có độ rộng... ngang với khung vai, lại
                      đính toòng teng nguyên bộ dao dĩa nhựa mới ghê chứ!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-1628426161100814976995.jpg"
                      alt="1, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Trong hôn lễ với Dạ Hoa ở Tam Sinh Tam Thế bản điện ảnh,
                      Bạch Thiển <strong>Lưu Diệc Phi</strong> đã bưng nguyên...
                      mâm ngũ quả lên làm mũ mão đội đầu, kết hợp với hàng tua
                      rua buông rủ đậm màu hường phấn. Chưa kể đến bông tai,
                      vòng cổ của vị nữ thần cũng vô cùng nhức mắt với loạt hoa
                      đan kết.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/photo-1-16284203479841901619213.png"
                      alt="2, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Một trong những tạo hình đi vào lòng đất của nàng{" "}
                      <strong>Tiểu Long Nữ</strong> chính là ở phiên bản Thần
                      Điêu Đại Hiệp 2014, do <strong>Trần Nghiên Hy</strong> thủ
                      vai. Nhìn gương mặt của vị cô cô mũm mĩm này, netizen có
                      nghĩ đến một chiếc menu với món má bánh bao và tóc đùi gà
                      cũng không có gì lạ.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/photo-1-16284204461271033210289.jpg"
                      alt="3, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Trong 36 tập phim của Truy Ngư Truyền Kỳ, chắc hẳn Triệu
                      Lệ Dĩnh đã phải "quánh đi quánh lại" mấy trăm lần đôi mắt
                      ấy nhỉ? Sợ rằng chỉ với hai chấm đỏ trên mắt thì khán giả
                      vẫn chưa nhận ra đây là cá chép tinh, nhà sản xuất còn yêu
                      cầu nữ diễn viên gắn thêm "bộ vảy" trên đầu cho đủ bộ.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-16284207333251624856903.jpg"
                      alt="4, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Đối với một nhân vật quen thuộc như Võ Tắc Thiên, đoàn làm
                      phim Địch Nhân Kiệt đã bẻ lái cực gắt, làm tạo hình cho{" "}
                      <strong>Lưu Gia Linh</strong> mang đậm hơi thở Nhật Bản.
                      Nghĩ mà xem, với hàng lông mày ngắn tũn và nhướn ngược lên
                      thế kia, bà làm sao thu phục thiên hạ hả trời?
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-16284261482291834431102.jpg"
                      alt="5, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />

                    <p>
                      Trong một phiên bản Lộc Đỉnh Ký, công chúa Kiến Ninh bỗng
                      trở nên hiện đại và sexy trong chiếc yếm cách điệu kiểu
                      crop top, cùng chiếc quần đùi ngắn cũn. Lại thêm chiếc mũ
                      cách cách hết sức cồng kềnh, kỳ quặc càng khiến tạo hình
                      của nhân vật này gây tranh cãi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/8/photo-1-16284222858721831512725.jpg"
                      alt="6, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Vào vai Thiên Sơn Đồng Lão trong Thiên Long Bát Bộ, nhìn
                      Thư Sướng chẳng khác nào... Xuý Vân giả dại. Vì đây là một
                      bà lão mang hình hài trẻ con, tổ hoá trang đã đánh má cho
                      nữ diễn viên hồng hết cỡ, còn làm mái ngố, thắt bím 2 bên,
                      không quên tô một ấn tròn lên trán cô.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-16284229550682055751895.jpg"
                      alt="7, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />

                    <p>
                      Đã nói mà, luật hoa quả không chừa một ai, kể cả minh tinh
                      hạng A như Châu Tấn cũng không thoát được. Số là, khi tham
                      gia bộ phim đình đám Hậu Cung Như Ý Truyện, chị đại đã
                      từng có kiểu đầu "ngộ ngộ" đến mức fan liên tưởng ngay
                      đến... quả dưa lưới đấy ạ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-162842596929327385066.jpg"
                      alt="8, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Trong bộ phim Nghìn Lẻ Một Đêm,{" "}
                      <strong>Địch Lệ Nhiệt Ba</strong> cũng từng khiến netizen
                      ngỡ ngàng ngơ ngác bật ngửa với phân cảnh tạo hình tiên
                      hắc ám. Có điều, nhìn cứ như thể nàng Maleficent phiên bản
                      Hoa ngữ đang mọc 2 tổ kén trên đầu luôn á!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-16284260327161845612579.jpg"
                      alt="9, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Đúng tinh thần của Liêu Trai Chí Dị,{" "}
                      <strong>Dương Mịch</strong> cũng "may mắn" được sắm cho
                      mình một tạo hình khá ư là xinh xắn. Cô nàng được "cấp"
                      cho một bộ rễ cây tua tủa trên đầu, thậm chí đoàn phim còn
                      chi tiết đến nỗi gắn cả sương tuyết lên từng nhánh cây rất
                      cầu kỳ luôn cơ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-1628426052703763313009.jpg"
                      alt="10, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Không phải "tiên hắc ám" như{" "}
                      <strong>Địch Lệ Nhiệt Ba</strong> nhưng Triệu Lộ Tư cũng
                      là... cô bé sừng bò nha. Chẳng hiểu make up artist của bộ
                      phim Tam Thiên Nha Sát suy nghĩ thế nào mà tết hẳn 2 cái
                      sừng rất cầu kỳ lên đầu cô nàng thế này, làm lộ hết cả vẻ
                      bầu bĩnh trên mặt rồi đây này!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-1628426065470269255650.jpg"
                      alt="11, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Trong Thư Sinh Xinh Đẹp (Chuyện Tình Sungkyunkwan bản
                      Trung), <strong>Cúc Tịnh Y</strong> đã có màn giả trai kém
                      thuyết phục. Lông mày thanh tú, lớp phấn trắng sáng còn
                      được combo quả râu lún phún không hề giả trân, bị coi là
                      "xúc phạm IQ" khán giả.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-16284269381622062261103.jpg"
                      alt="12, phim cổ trang,Vương Tổ Hiền,Trần Nghiên Hy,Tiểu Long Nữ,Lưu Diệc Phi,Lưu Gia Linh,Địch Lệ Nhiệt Ba,Dương Mịch,Cúc Tịnh Y,star style,sao Cbiz,tạo hình nhân vật,tạo hình trong phim,"
                      note=""
                    />
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
