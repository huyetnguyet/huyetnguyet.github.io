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
"timestamp": '29/07/2021 04:26 PM',
"title": '20 game giả lập cho bạn làm đủ nghề trong xã hội, từ thợ sửa ống nước đến chàng lái taxi (P1)',
"description": 'Những game giả lập này sẽ cho phép bạn làm rất nhiều nghề trong xã hội.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-1627315208858588438104.jpg',
"alt": 'GAME GIẢ LẬP,SỬA ỐNG NƯỚC,GAME MÔ PHỎNG,TÀI XẾ XE TẢI,EURO TRUCK SIMULATOR 2,STARDEW VALLEY,',
"category": 'games',
"date": '29/07/2021',
"time": '04:26 PM',
"link": '/20-game-gia-lap-cho-ban-lam-du-nghe-trong-xa-hoi-tu-tho-sua-ong-nuoc-den-chang-lai-taxi-p1',
"zcomponent": 'page_20210729162610',
"filepath": './20210729162610-20-game-gia-lap-cho-ban-lam-du-nghe-trong-xa-hoi-tu-tho-sua-ong-nuoc-den-chang-lai-taxi-p1.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "20 game giả lập cho bạn làm đủ nghề trong xã hội, từ thợ sửa ống nước đến chàng lái taxi (P1)";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:26 PM";
const description =
  "Những game giả lập này sẽ cho phép bạn làm rất nhiều nghề trong xã hội.";
const link =
  "20-game-gia-lap-cho-ban-lam-du-nghe-trong-xa-hoi-tu-tho-sua-ong-nuoc-den-chang-lai-taxi-p1";
const tagparam = [
  "GAME GIẢ LẬP",
  "SỬA ỐNG NƯỚC",
  "GAME MÔ PHỎNG",
  "TÀI XẾ XE TẢI",
  "EURO TRUCK SIMULATOR 2",
  "STARDEW VALLEY",
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

export default function page_20210729162610() {
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
                    <h5>Euro Truck Simulator 2 (Giả lập lái xe tải)</h5>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-1627315208858588438104.jpg"
                      alt="1, GAME GIẢ LẬP,SỬA ỐNG NƯỚC,GAME MÔ PHỎNG,TÀI XẾ XE TẢI,EURO TRUCK SIMULATOR 2,STARDEW VALLEY,"
                      note=""
                    />
                    <p>
                      <strong>Euro Truck Simulator 2</strong> là{" "}
                      <strong>game mô phỏng</strong> lái xe tải, mang đến cho
                      bạn cơ hội để trở thành <strong>tài xế xe tải</strong>{" "}
                      thực sự. Với những thương hiệu xe tải nổi tiếng, vô số lựa
                      chọn có thể tùy biến và hiệu ứng vật lý tiên tiến, game
                      mang đến một trải nghiệm lái xe tải tuyệt vời mà bạn chưa
                      từng thử trước nay.
                    </p>
                    <p>
                      Tham gia game <strong>Euro Truck Simulator 2</strong>, bạn
                      sẽ được đi du lịch khắp châu Âu như là một vị vua của
                      những con đường, người cung cấp hàng hóa quan trọng trên
                      những cung đường ấn tượng. Game có nhiều danh thắng, vùng
                      lãnh thổ được tái tạo chính xác để khám phá từ Anh, Bỉ,
                      Đức, Ý, Hà Lan đến Ba Lan và nhiều hơn nữa, khiến bạn có
                      cảm giác như mình đang lái xe trong thế giới thực. Không
                      chỉ lái xe, nền kinh tế trong trò chơi cho phép tạo và
                      phát triển những công ty vận chuyển, thách thức sự chịu
                      đựng, kỹ năng, trình độ quản lý của bạn. Cơ hội là vô tận,
                      hãy bắt đầu sự nghiệp to lớn của bạn từ công việc nhỏ bé
                      nhất là lái xe tải trong game Euro Truck Simulator 2.
                    </p>
                    <h5>
                      <strong>Stardew Valley</strong> (Giả lập nông trại)
                    </h5>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273155660161689950479.jpg"
                      alt="2, GAME GIẢ LẬP,SỬA ỐNG NƯỚC,GAME MÔ PHỎNG,TÀI XẾ XE TẢI,EURO TRUCK SIMULATOR 2,STARDEW VALLEY,"
                      note=""
                    />
                    <p>
                      Nếu bạn đã khá "ngấy" với thể loại hành động, hãy cùng bạn
                      bè "trồng thêm rau và nuôi cá" tại xứ sở{" "}
                      <strong>Stardew Valley</strong> nhé. Được phát hành chính
                      thức vào năm 2018, game cho phép nhóm 4 người chơi (hoặc
                      nhiều hơn với những bản mod) cùng trở về nơi chốn quê
                      thanh bình để cùng nhau trở thành những người nông dân
                      chăm chỉ xây dựng một trang trại rộng lớn theo đúng ý
                      thích của cả nhóm.{" "}
                    </p>
                    <p>
                      Game được làm theo lối đồ họa truyền thống mang đến một
                      cảm giác nhẹ nhàng và khá thích mắt. Không chỉ vậy, khả
                      năng tương tác của bạn với các nhân vật phụ trong game
                      cũng rất đa dạng khiến <strong>Stardew Valley</strong> trở
                      thành một thế giới hết sức chân thật và gần gũi.
                    </p>
                    <h5>Together BnB (Giả lập quản lý khách sạn)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273156444731084736509.jpg"
                      alt="3, GAME GIẢ LẬP,SỬA ỐNG NƯỚC,GAME MÔ PHỎNG,TÀI XẾ XE TẢI,EURO TRUCK SIMULATOR 2,STARDEW VALLEY,"
                      note=""
                    />
                    <p>
                      Trong game Together BnB, người chơi sẽ vào vai nhân vật
                      chính James, sở hữu một khách sạn trên núi có tên là BnB.
                      James đã buộc phải tiếp quản khách sạn BnB khi anh trai
                      của James biến mất một cách bí ẩn. Ngoài việc tìm ra anh
                      trai qua nhiều manh mối khác nhau, với tư cách là phó giám
                      đốc của khách sạn BnB, người chơi sẽ hỗ trợ những cô gái
                      xinh đẹp đang muốn tìm một chốn nghỉ ngơi, thư giãn.
                    </p>
                    <p>
                      Thông qua việc phát triển các mối quan hệ trong cốt truyện
                      của game, người chơi trong Together BnB sẽ dần làm quen
                      với những cô gái xinh đẹp, rồi dần dần phát triển một mối
                      quan hệ lãng mạn ngày càng sâu sắc hơn. Tuy nhiên hãy chú
                      ý chiều lòng và làm các cô gái xinh đẹp cảm thấy vui, nếu
                      không người chơi sẽ bị "đá" đấy.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Mỗi màn chơi, Together BnB sẽ yêu cầu người chơi lựa chọn
                      trang phục thích hợp cho cô bạn gái đang hẹn hò, chụp ảnh
                      cho nếu như họ muốn. Mua nguyên liệu và nấu các món ăn
                      ngon để giúp lấy điểm trong mắt của cô gái. Thậm chí người
                      chơi có thể rủ các cô gái đi dã ngoại, nếm rượu vang, mát
                      xa và nhiều hơn nữa để giành được trái tim của họ.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273156452912137175862.jpg"
                      alt="4, GAME GIẢ LẬP,SỬA ỐNG NƯỚC,GAME MÔ PHỎNG,TÀI XẾ XE TẢI,EURO TRUCK SIMULATOR 2,STARDEW VALLEY,"
                      note=""
                    />
                    <p>
                      Tuy nhiên khi ra khỏi khuân viên của khách sạn, người chơi
                      sẽ phải chiến đấu chống lại những con thú trong rừng để
                      bảo vệ các cô gái. Sau mỗi lần hoàn thành màn chơi, người
                      chơi sẽ được mở khóa thêm những bộ trang phục mới, lộng
                      lẫy hơn, và cũng không kém phần gợi cảm cho các cô gái và
                      đặc biệt được họ yêu mến.
                    </p>
                    <h5>Taxi Simulator (Giả lập lái xe taxi)</h5>
                    <p>
                      Taxi Simulator là tựa game cho phép bạn trở thành một lái
                      xe taxi trong thành phố phồn hoa, nhộn nhịp. Đương nhiên,
                      gameplay của trò chơi này không hề đơn giản hay nhàm chán
                      như kiểu nhận khách, trả khách, lặp đi lặp lại. Trong khi
                      làm việc, bạn sẽ gặp đủ mọi loại người, đối mặt với đủ mọi
                      trường hợp, thậm chí có thể liên quan đến những vụ án
                      nghiêm trọng.
                    </p>
                    <p>
                      Như trong trailer vừa xem, người chơi sẽ phải đối mặt với
                      những tính huống trớ trêu như khách say rượu, cặp đôi "mây
                      mưa" trên xe, tên bắt cóc và thậm chí là phải đỡ đẻ cho
                      một người phụ nữ bụng mang dạ chửa... Bạn sẽ làm gì khi
                      gặp phải những tính huống như thế? Hãy thử ngay Taxi
                      Simulator để xem cuộc sống của các bác lái xe taxi thú vị
                      và khó khăn như thế nào nhé.
                    </p>
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
