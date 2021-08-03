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
"timestamp": '18/06/2021 01:02 PM',
"title": 'Điểm mặt 4 manga bán chạy nhất nửa đầu năm 2021 tại Nhật Bản hưởng lợi từ phần chuyển thể anime xuất sắc',
"description": 'Mới đây nhất thì Oricon công bố đã công top 10 manga bán chạy nhất nửa đầu năm 2021 tại Nhật Bản. Bốn cái tên đứng đầu đều được cho là hưởng lợi từ phần chuyển thể anime vô cùng thành công.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/anu1-16239218593091146716359.jpg',
"alt": 'TOP MANGA,NHÂN VẬT MANGA,LỄ HỘI MANGA,TAM QUỐC MANGA,ANIME - MANGA,SHOP ANIME - MANGA,SHOP MANGA,ÔNG TỔ MANGA,GAME MANGA,ĐẠI CHIẾN MANGA,',
"category": 'games',
"date": '18/06/2021',
"time": '01:02 PM',
"link": '/diem-mat-4-manga-ban-chay-nhat-nua-dau-nam-2021-tai-nhat-ban-huong-loi-tu-phan-chuyen-the-anime-xuat-sac',
"zcomponent": 'page_20210618130226',
"filepath": './20210618130226-diem-mat-4-manga-ban-chay-nhat-nua-dau-nam-2021-tai-nhat-ban-huong-loi-tu-phan-chuyen-the-anime-xuat-sac.js'
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
  "Điểm mặt 4 manga bán chạy nhất nửa đầu năm 2021 tại Nhật Bản hưởng lợi từ phần chuyển thể anime xuất sắc";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:02 PM";
const description =
  "Mới đây nhất thì Oricon công bố đã công top 10 manga bán chạy nhất nửa đầu năm 2021 tại Nhật Bản. Bốn cái tên đứng đầu đều được cho là hưởng lợi từ phần chuyển thể anime vô cùng thành công.";
const link =
  "diem-mat-4-manga-ban-chay-nhat-nua-dau-nam-2021-tai-nhat-ban-huong-loi-tu-phan-chuyen-the-anime-xuat-sac";
const tagparam = [
  "TOP MANGA",
  "NHÂN VẬT MANGA",
  "LỄ HỘI MANGA",
  "TAM QUỐC MANGA",
  "ANIME - MANGA",
  "SHOP ANIME - MANGA",
  "SHOP MANGA",
  "ÔNG TỔ MANGA",
  "GAME MANGA",
  "ĐẠI CHIẾN MANGA",
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

export default function page_20210618130226() {
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
                    <h3>Kimetsu no Yaiba: 26 triệu 351 nghìn 483 bản</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/anu1-16239218593091146716359.jpg"
                      alt="1, TOP MANGA,NHÂN VẬT MANGA,LỄ HỘI MANGA,TAM QUỐC MANGA,ANIME - MANGA,SHOP ANIME - MANGA,SHOP MANGA,ÔNG TỔ MANGA,GAME MANGA,ĐẠI CHIẾN MANGA,"
                      note=""
                    />
                    <p>
                      Đứng đầu trong danh sách này là Kimetsu no Yaiba. Bộ manga
                      thành công nhất trong vòng 3 năm qua và cũng là cái tên
                      thường xuyên đủ sức cạnh tranh ngôi vị số 1 trong làng
                      manga Nhật Bản cùng với One Piece. Kimetsu no Yaiba do
                      Gotoge Koyoharu sáng tác, được đăng theo kỳ trên Weekly
                      Shonen Jump từ số phát hành tháng 2 năm 2016 đến tháng 5
                      năm 2020 và sau đó các chương truyện được tổng hợp đưa vào
                      21 cuốn truyện. Tuy rằng đã kết thúc nhưng có vẻ như sức
                      hút của Kimetsu no Yaiba vẫn không hề thuyên giảm khi đây
                      vẫn là thương hiệu manga bán chạy nhất nửa đầu năm 2021.
                    </p>
                    <p>
                      Một trong những nguyên nhân cho việc Kimetsu no Yaiba vẫn
                      là manga bán chạy nhất Nhật Bản nửa đầu năm 2021 là bởi vì
                      phần anime và đặc biệt là các movie anime đã và đang chuẩn
                      bị phát sóng đều là những siêu phẩm, giúp khán giả biết
                      đến Kimetsu no Yaiba nhiều hơn và khiến cho sức hút của bộ
                      manga này không hề suy giảm.
                    </p>
                    <h3>Jujutsu Kaisen: 23 triệu 797 nghìn 483 bản</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/anu2-1623921864029671117482.jpeg"
                      alt="2, TOP MANGA,NHÂN VẬT MANGA,LỄ HỘI MANGA,TAM QUỐC MANGA,ANIME - MANGA,SHOP ANIME - MANGA,SHOP MANGA,ÔNG TỔ MANGA,GAME MANGA,ĐẠI CHIẾN MANGA,"
                      note=""
                    />
                    <p>
                      Jujutsu Kaisen là một bộ truyện tranh Nhật Bản được viết
                      và minh họa bởi Akutami Gege, đăng trên tạp chí Weekly
                      Shonen Jump của Shueisha kể từ tháng 3 năm 2018. Truyện
                      được phát hành theo tập bởi Shueisha, tới tháng 3 năm 2021
                      đã có 16 tập truyện được xuất bản.
                    </p>
                    <p>
                      Đây là bộ manga đang nhận được sự quan tâm rất lớn tới từ
                      độc giả Nhật Bản trong suốt 1 năm qua. Không chỉ ở đất
                      nước mặt trời mọc mà hiện tại tình hình sức khỏe của tác
                      giả Jujutsu Kaisen và việc bộ manga này đang bị dừng ra
                      chap mới vô thời hạn là sự việc được nhiều người quan tâm.
                      Trong suốt hơn 1 năm qua thì doanh thu của manga Jujutsu
                      Kaisen tăng đột biến từ khi anime được ra mắt.
                    </p>
                    <h3>Tokyo Revengers: 5 triệu 7 nghìn 825 bản</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/anu3-16239218709821661104825.jpg"
                      alt="3, TOP MANGA,NHÂN VẬT MANGA,LỄ HỘI MANGA,TAM QUỐC MANGA,ANIME - MANGA,SHOP ANIME - MANGA,SHOP MANGA,ÔNG TỔ MANGA,GAME MANGA,ĐẠI CHIẾN MANGA,"
                      note=""
                    />
                    <p>
                      Nếu 2 cái tên Kimetsu no Yaiba và Jujutsu Kaisen mà chúng
                      tôi vừa kể trên đều là những tân binh nổi tiếng trong 2
                      cho đến 3 năm qua thì Tokyo Revengers là một bất ngờ thú
                      vị và xếp thứ 3 trong danh sách này. Thực tế thì Tokyo
                      Revengers là một series shounen manga của tác giả Wakui
                      Ken, được đăng định kì trên tạp chí Weekly Shounen
                      Magazine của nhà xuất bản Kodansha từ tháng 3 năm 2017.
                      Trước khi có phiên bản anime thì bộ manga này không được
                      quá nhiều người quan tâm và là một tác phẩm thuộc dạng
                      trung bình khá về mức doanh số bán ra.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuy nhiên kể từ khi phiên bản anime Tokyo Revengers được
                      công chiếu, số lượng bán ra của manga này đã tăng tới 600
                      %, một con số kỷ lục tại Nhật Bản về tốc độ bán ra của một
                      manga. Tính tới tháng 6 năm 2021, truyện đã bán được 19,8
                      triệu bản tại Nhật Bản và trở thành siêu phẩm đứng thứ 3
                      trong top 10 manga bán chạy nhất nửa đầu năm 2021 tại Nhật
                      Bản. Năm 2020, Tokyo Revengers đã giành được Giải thưởng
                      Manga Kodansha lần thứ 44 cho hạng mục Shounen.
                    </p>
                    <h3>Attack On Titan: 4 triệu 635 nghìn 754 bản</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/anu4-1623921876740743123027.jpg"
                      alt="4, TOP MANGA,NHÂN VẬT MANGA,LỄ HỘI MANGA,TAM QUỐC MANGA,ANIME - MANGA,SHOP ANIME - MANGA,SHOP MANGA,ÔNG TỔ MANGA,GAME MANGA,ĐẠI CHIẾN MANGA,"
                      note=""
                    />
                    <p>
                      Attack On Titan là một bộ manga Nhật Bản do Isayama Hajime
                      sáng tác. Thực tế dù đây là một bộ manga sinh tồn đáng xem
                      tuy nhiên vì nội dung có phần quá bi thương dành cho dàn
                      nhân vật chính mà tác phẩm này không bán quá chạy trong
                      những năm qua.
                    </p>
                    <p>
                      Tuy nhiên thì trong nửa năm đầu 2021, khi Attack On Titan
                      đến chap cuối cùng và đặc biệt là sự thành công của anime
                      Attack On Titan mùa 4 và cũng là mùa cuối cùng đã khiến
                      doanh số của Attack On Titan tăng đáng kể. Điều này giải
                      thích cho lý do vì sao dù tác giả của bộ truyện này không
                      được nhiều độc giả yêu thích tuy nhiên Attack On Titan vẫn
                      đứng thứ 4 trong danh sách top 10 manga bán chạy nhất nửa
                      đầu năm 2021 tại Nhật Bản.
                    </p>
                    <p>
                      Trên đây là top 4 manga bán chạy nhất nửa đầu năm 2021 tại
                      Nhật Bản hưởng lợi từ phần chuyển thể anime xuất sắc. Các
                      bạn ấn tượng nhất với phần chuyển thể anime nào nhất? Hãy
                      để lại ý kiến của mình về vấn đề này nhé!
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
