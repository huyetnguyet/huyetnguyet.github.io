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
"timestamp": '08/08/2021 10:21 PM',
"title": 'Chú bé đáng yêu ở phim Châu Tinh Trì hóa ra là... cô bé, lột xác thành mỹ nhân lại từng sánh đôi với Tiêu Chiến?',
"description": 'Nếu bạn đã từng ăn "cú lừa" này từ Châu Tinh Trì thì xin chúc mừng, tuổi thơ bạn thật tuyệt vời!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628312179961827626103.jpg',
"alt": 'Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,',
"category": 'stars',
"date": '08/08/2021',
"time": '10:21 PM',
"link": '/chu-be-dang-yeu-o-phim-chau-tinh-tri-hoa-ra-la-co-be-lot-xac-thanh-my-nhan-lai-tung-sanh-doi-voi-tieu-chien',
"zcomponent": 'page_20210808222103',
"filepath": './20210808222103-chu-be-dang-yeu-o-phim-chau-tinh-tri-hoa-ra-la-co-be-lot-xac-thanh-my-nhan-lai-tung-sanh-doi-voi-tieu-chien.js'
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
  "Chú bé đáng yêu ở phim Châu Tinh Trì hóa ra là... cô bé, lột xác thành mỹ nhân lại từng sánh đôi với Tiêu Chiến?";
const author = "THÀNH VŨ,";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 10:21 PM";
const description =
  'Nếu bạn đã từng ăn "cú lừa" này từ Châu Tinh Trì thì xin chúc mừng, tuổi thơ bạn thật tuyệt vời!';
const link =
  "chu-be-dang-yeu-o-phim-chau-tinh-tri-hoa-ra-la-co-be-lot-xac-thanh-my-nhan-lai-tung-sanh-doi-voi-tieu-chien";
const tagparam = [
  "Châu Tinh Trì",
  "từ kiều",
  "tiêu chiến",
  "CJ7",
  "Siêu khuyển thần thông",
  "phim Hoa ngữ",
  "phim điện ảnh",
  "phim chiếu rạp",
  "dàn sao ngày ấy bây giờ",
  "sao nhí",
  "Người Đi Ngược Chiều Đẹp Nhất",
  "ngày ấy bây giờ",
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

export default function page_20210808222103() {
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
                      Vũ trụ phim của <strong>Châu Tinh Trì</strong> có biết bao
                      điều kỳ diệu, trong số đó có dự án <strong>CJ7</strong> (
                      <strong>Siêu Khuyển Thần Thông</strong>) vô cùng đặc biệt.
                      Trong phim Châu Tinh Trì cùng một <strong>sao nhí</strong>{" "}
                      đóng vai cha con nghèo, một ngày bỗng dưng mang về quả
                      trứng nở ra quái vật ngoài hành tinh vô cùng đáng yêu. Lúc
                      bấy giờ, nhân vật cậu bé tên Chu Tiểu Địch khiến ai nấy ấn
                      tượng vì sự đáng yêu, cùng với người bạn quái vật ngoài
                      hành tinh tạo thành cặp đôi ăn ý.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-16283122696762021092707.jpg"
                      alt="1, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note="Từ Kiều gần đây có tham gia phim chống dịch Người Đi Ngược Chiều Đẹp Nhất"
                    />
                    <p>
                      Thế nhưng mãi về sau, khán giả mới hốt hoảng nhận ra rằng
                      chú bé Tiểu Địch thật ra do một... diễn viên nữ thể hiện.
                      Cô gái này có tên là <strong>Từ Kiều</strong>, sinh năm
                      1997. Vào lúc bộ phim ra mắt, Từ Kiều chỉ mới 11 tuổi nên
                      đã "lừa" nhiều người với tạo hình chú bé của mình.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628312166918507618715.png"
                      alt="2, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note="Từ Kiều (người nữ đầu tiên từ trái qua) đóng chung phim cùng Tiêu Chiến"
                    />
                    <p>
                      Kể từ đó, <strong>Từ Kiều</strong> có sự nghiệp rộng mở ở
                      mảng diễn viên. Cô bé tiếp tục hóa thân thành Mulan bản
                      nhí trong phim của Triệu Vy, hay đóng phim cùng Dương Mịch
                      hay Chân Tử Đan. Từ Kiều từng chiến thắng giải Tân binh ở
                      lễ trao giải Điện ảnh Hong Kong, và có phim được chiếu ở
                      LHP quốc tế Busan. Chính vì vậy, có thể nói cô bé đã có sự
                      nghiệp khá rộng mở.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thế nhưng ở hiện tại, <strong>Từ Kiều</strong> vẫn chỉ
                      quanh quẩn ở những bộ phim không mấy tiếng tăm. Sau khi
                      tách khỏi <strong>Châu Tinh Trì</strong>, không phải ngôi
                      sao nào cũng sẽ có bước đường thuận lợi nếu không có thực
                      lực hay vận may. Đã 2 năm rồi Từ Kiều không có dự án phim
                      nào mới. Gần đây, cô nàng đã xuất hiện trên sóng
                      livestream của "vua son môi" Lệ Gia Kỳ, khoe nhan sắc đáng
                      yêu và nhẹ nhàng khác hẳn thời còn sánh vai cùng Châu Tinh
                      Trì.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628312179961827626103.jpg"
                      alt="3, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628311861893671320655.jpg"
                      alt="4, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/-1628311840740192811553.jpg"
                      alt="5, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628311957301609280586.jpg"
                      alt="6, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628311813463285285577.png"
                      alt="7, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-16283120177082019353272.jpg"
                      alt="8, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628312064267152825760.jpeg"
                      alt="9, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628311790420270418787.png"
                      alt="10, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628311801771265383660.png"
                      alt="11, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png"
                      alt="12, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png"
                      alt="13, Châu Tinh Trì,từ kiều,tiêu chiến,CJ7,Siêu khuyển thần thông,phim Hoa ngữ,phim điện ảnh,phim chiếu rạp,dàn sao ngày ấy bây giờ,sao nhí,Người Đi Ngược Chiều Đẹp Nhất,ngày ấy bây giờ,"
                      note=""
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
