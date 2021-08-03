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
"timestamp": '29/07/2021 04:17 PM',
"title": 'Đường Tăng đẹp nhất Tây Du Ký tức giận bỏ vai chỉ vì 18 nghìn đồng, dối lừa khán giả rồi bị Trư Bát Giới "vạch mặt"?',
"description": 'Trong Tây Du Ký, mối quan hệ giữa các thành viên không phải lúc nào cũng hòa nhã.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-16264908640182071786208.jpeg',
"alt": 'TRƯ BÁT GIỚI,ĐƯỜNG TĂNG,TÂY DU KÝ,TỪ THIẾU HOA,ĐƯỜNG TĂNG ĐẸP NHẤT,',
"category": 'news',
"date": '29/07/2021',
"time": '04:17 PM',
"link": '/duong-tang-dep-nhat-tay-du-ky-tuc-gian-bo-vai-chi-vi-18-nghin-dong-doi-lua-khan-gia-roi-bi-tru-bat-gioi-vach-mat',
"zcomponent": 'page_20210729161728',
"filepath": './20210729161728-duong-tang-dep-nhat-tay-du-ky-tuc-gian-bo-vai-chi-vi-18-nghin-dong-doi-lua-khan-gia-roi-bi-tru-bat-gioi-vach-mat.js'
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
  'Đường Tăng đẹp nhất Tây Du Ký tức giận bỏ vai chỉ vì 18 nghìn đồng, dối lừa khán giả rồi bị Trư Bát Giới "vạch mặt"?';
const author = "THÀNH VŨ";
const source = "Trí thức trẻ";
const timestamp = "29/07/2021 04:17 PM";
const description =
  "Trong Tây Du Ký, mối quan hệ giữa các thành viên không phải lúc nào cũng hòa nhã.";
const link =
  "duong-tang-dep-nhat-tay-du-ky-tuc-gian-bo-vai-chi-vi-18-nghin-dong-doi-lua-khan-gia-roi-bi-tru-bat-gioi-vach-mat";
const tagparam = [
  "TRƯ BÁT GIỚI",
  "ĐƯỜNG TĂNG",
  "TÂY DU KÝ",
  "TỪ THIẾU HOA",
  "ĐƯỜNG TĂNG ĐẸP NHẤT",
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

export default function page_20210729161728() {
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
                      Nếu đã từng theo dõi <strong>Tây Du Ký</strong> thì bất cứ
                      fan nào cũng biết phim có đến 3 diễn viên đảm nhiệm vai{" "}
                      <strong>Đường Tăng</strong>. Đầu tiên là Uông Việt , rồi
                      đến <strong>Từ Thiếu Hoa</strong> và cuối cùng là Trì
                      Trọng Thụy . Trong số 3 người, Từ Thiếu Hoa được khán giả
                      tung hô là "Đường Tăng đẹp trai nhất" do sở hữu visual nổi
                      bật, ngũ quan hài hòa và ánh mắt bay bổng. Thế nhưng có lẽ
                      vì được truyền thông ca tụng nên Từ Thiếu Hoa dần mắc bệnh
                      "ngôi sao", khiến đoàn phim Tây Du Ký phật ý.
                    </p>
                    <p>
                      <strong>Từ Thiếu Hoa</strong> là "
                      <strong>Đường Tăng</strong> đẹp nhất" của{" "}
                      <strong>Tây Du Ký</strong> 1986
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-1626490865436557934319.jpg"
                      alt="1, TRƯ BÁT GIỚI,ĐƯỜNG TĂNG,TÂY DU KÝ,TỪ THIẾU HOA,ĐƯỜNG TĂNG ĐẸP NHẤT,"
                      note="Thế nhưng ông từng bỏ vai vì nhiều lùm xùm hậu trường"
                    />
                    <p>
                      Cho đến nay, nguyên nhân thật sự khiến{" "}
                      <strong>Từ Thiếu Hoa</strong> rời khỏi dự án{" "}
                      <strong>Tây Du Ký</strong> vẫn khiến công chúng khá thất
                      vọng. Ban đầu, Từ Thiếu Hoa cho biết ông phải dừng vai
                      diễn <strong>Đường Tăng</strong> của mình lại để theo đuổi
                      con đường học vấn. Thế nhưng sau đó, Mã Đức Hoa - người
                      thủ vai <strong>Trư Bát Giới</strong> trong Tây Du Ký đã
                      bật mí sự thật về màn bỏ vai của Từ Thiếu Hoa năm nào.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-2-1626490866966541012186.jpg"
                      alt="2, TRƯ BÁT GIỚI,ĐƯỜNG TĂNG,TÂY DU KÝ,TỪ THIẾU HOA,ĐƯỜNG TĂNG ĐẸP NHẤT,"
                      note="Dù cảm thấy nói ra không được hay lắm nhưng Trư Bát Giới vẫn bật mí lý do thật vì sao Từ Thiếu Hoa đột ngột bỏ quay Tây Du Ký"
                    />
                    <p>
                      Vì có thời lượng không nhiều bằng và tạo hình tương đối
                      đơn giản, <strong>Từ Thiếu Hoa</strong> không được trả thù
                      lao cao bằng Mã Đức Hoa hay Lục Tiểu Linh Đồng . Theo
                      Sohu, lương mỗi tập của cặp đôi Tôn Ngộ Không -{" "}
                      <strong>Trư Bát Giới</strong> là 70 tệ (khoảng 250 nghìn
                      đồng), nhưng <strong>Đường Tăng</strong> chỉ được 60 tệ
                      (hơn 213 nghìn đồng). Điều này khiến Từ Thiếu Hoa không
                      bằng lòng, sau đó ông vịn vào việc mình có nhiều đất diễn
                      hơn trong tập Nữ Nhi Quốc để đòi tăng cát-xê.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-3-1626490866468321072341.jpg"
                      alt="3, TRƯ BÁT GIỚI,ĐƯỜNG TĂNG,TÂY DU KÝ,TỪ THIẾU HOA,ĐƯỜNG TĂNG ĐẸP NHẤT,"
                      note="Từ Thiếu Hoa vịn vào đất diễn trong tập Nữ Nhi Quốc để đòi tăng cát-xê"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Ông tìm đến đạo diễn <strong>Tây Du Ký</strong> - bà Dương
                      Khiết để đòi cát-xê tập Nữ Nhi Quốc mình tăng thêm... 5 tệ
                      (không đến 18 nghìn đồng). Thế nhưng Dương Khiết không
                      đồng ý nên <strong>Từ Thiếu Hoa</strong> quyết định bỏ
                      vai. Thế nhưng cũng có nhiều nguồn tin tiết lộ rằng thực
                      chất "mẹ đẻ" của phim Tây Du Ký đã tăng cát-xê tập đó của
                      Từ Thiếu Hoa lên 75 tệ, cao hơn cả Lục Tiểu Linh Đồng và
                      Mã Đức Hoa. Tuy nhiên sau cùng nam diễn viên vẫn lựa chọn
                      rời dự án.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-4-1626490865976931511018.jpeg"
                      alt="4, TRƯ BÁT GIỚI,ĐƯỜNG TĂNG,TÂY DU KÝ,TỪ THIẾU HOA,ĐƯỜNG TĂNG ĐẸP NHẤT,"
                      note="Từ Thiếu Hoa bỏ quay Tây Du Ký và không còn liên lạc với đoàn phim cho đến hiện tại"
                    />
                    <p>
                      Cho đến hiện tại, tuy là <strong>Đường Tăng</strong> được
                      yêu thích nhất nhưng <strong>Từ Thiếu Hoa</strong> chưa
                      bao giờ có động thái liên hệ với dàn cast{" "}
                      <strong>Tây Du Ký</strong>. Ông đều vắng mặt ở những lần
                      tái hợp, một phần có lẽ vì "quê độ" sau lời bộc bạch trên
                      sóng truyền hình của "lão Trư". Hiện tại, Từ Thiếu Hoa đã
                      có gia đình, nhưng trớ trêu hơn cả, ông vẫn thường hóa
                      trang thành Đường Tăng để đi hát kiếm tiền, chật vật để
                      mưu sinh qua ngày.
                    </p>
                    <p>
                      <strong>Từ Thiếu Hoa</strong> hiện tại vẫn hay làm{" "}
                      <strong>Đường Tăng</strong> đi hát kiếm tiền
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-16264908640182071786208.jpeg"
                      alt="5, TRƯ BÁT GIỚI,ĐƯỜNG TĂNG,TÂY DU KÝ,TỪ THIẾU HOA,ĐƯỜNG TĂNG ĐẸP NHẤT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-16264909279511657125343.jpeg"
                      alt="6, TRƯ BÁT GIỚI,ĐƯỜNG TĂNG,TÂY DU KÝ,TỪ THIẾU HOA,ĐƯỜNG TĂNG ĐẸP NHẤT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-5-16264908654601245860197.jpg"
                      alt="7, TRƯ BÁT GIỚI,ĐƯỜNG TĂNG,TÂY DU KÝ,TỪ THIẾU HOA,ĐƯỜNG TĂNG ĐẸP NHẤT,"
                      note=""
                    />
                    <p>Nguồn tin: Sohu - Ảnh: Tổng hợp</p>
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
