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
"timestamp": '11/08/2021 10:56 AM',
"title": 'Thánh nữ 18+ một thời yêu cầu studio xóa hết phim cũ, tạm biệt quá khứ huy hoàng',
"description": 'Rina Ishihara giải nghệ đã lâu, thế nhưng vẫn có rất nhiều đồn đoán về tương lai của thánh nữ 18+ một thời này.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285734154011611256084.jpg',
"alt": 'RINA ISHIHARA,IDOL,',
"category": 'images',
"date": '11/08/2021',
"time": '10:56 AM',
"link": '/thanh-nu-18-mot-thoi-yeu-cau-studio-xoa-het-phim-cu-tam-biet-qua-khu-huy-hoang',
"zcomponent": 'page_20210811105630',
"filepath": './20210811105630-thanh-nu-18-mot-thoi-yeu-cau-studio-xoa-het-phim-cu-tam-biet-qua-khu-huy-hoang.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Thánh nữ 18+ một thời yêu cầu studio xóa hết phim cũ, tạm biệt quá khứ huy hoàng";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:56 AM";
const description =
  "Rina Ishihara giải nghệ đã lâu, thế nhưng vẫn có rất nhiều đồn đoán về tương lai của thánh nữ 18+ một thời này.";
const link =
  "thanh-nu-18-mot-thoi-yeu-cau-studio-xoa-het-phim-cu-tam-biet-qua-khu-huy-hoang";
const tagparam = ["RINA ISHIHARA", "IDOL"];
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

export default function page_20210811105630() {
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
                      Ngành công nghiệp AV Nhật Bản luôn nổi tiếng với việc cho
                      ra mắt vô số những nữ diễn viên xinh đẹp và nổi tiếng trên
                      toàn châu Á. Trước khi có sự xuất hiện của Yua Mikami hay
                      Eimi Fukada, số đông công chúng chủ yếu chỉ biết về những
                      cái tên như Sora Aoi, Maria Ozawa, Yui Hatano và đặc biệt
                      là <strong>Rina Ishihara</strong>.
                    </p>
                    <p>
                      Với khuôn mặt ngây thơ, xinh xắn cùng thân hình "ma quỷ",{" "}
                      <strong>Rina Ishihara</strong> là một trong những cái tên
                      ăn khách nhất của studio Attackers. Từng có quãng thời
                      gian, cô được coi như là một trong những cái tên không thể
                      thay thế tại hãng phim này khi mọi sản phẩm của cô đều có
                      mặt trong top đầu các bảng xếp hạng những cái tên ăn khách
                      nhất trong ngành công nghiệp 18+.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285740592591029156405.jpg"
                      alt="3, RINA ISHIHARA,IDOL,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Dù vậy, cuộc vui nào cũng tới lúc tàn. Tới tháng 7/2017,{" "}
                      <strong>Rina Ishihara</strong> không kèn không trống rời
                      khỏi ngành công nghiệp AV mà không hề đưa ra thông báo
                      giải nghệ khiến nhiều fan ngỡ ngàng. Phải đến sau 3 tháng
                      khi hãng phim chính thức xác nhận cô đã không còn đóng AV,
                      người ta mới biết rằng nữ diễn viên sinh năm 1987 đã về
                      hưu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285734154011611256084.jpg"
                      alt="1, RINA ISHIHARA,IDOL,"
                      note=""
                    />
                    <p>
                      Không như nhiều cái tên khác đưa ra thông báo cụ thể và có
                      lịch trình, hành tung của <strong>Rina Ishihara</strong>{" "}
                      rất bí ẩn, khiến cho nhiều người tò mò và hy vọng một ngày
                      nào đó, cô sẽ trở lại với nghề cũ. Về sau, Rina Ishihara
                      đúng là có trở lại thật, tuy nhiên cô chỉ là giao lưu và
                      trò chuyện trên một nền tảng livestream thu phí, thế nên
                      cũng ít người biết được mục đích và Rina có thực sự trở
                      lại hay không.{" "}
                    </p>
                    <p>
                      Mới đây, studio Attackers đã chính thức có câu trả lời cho
                      việc <strong>Rina Ishihara</strong> quay trở lại với ngành
                      công nghiệp AV. Theo đó, hãng phim này chính thức gỡ bỏ
                      toàn bộ các sản phẩm liên quan tới "thánh nữ" 18+ một
                      thời. Tính ra, đây cũng đã là thời điểm 5 năm kể từ ngày
                      Rina Ishihara giải nghệ, cho nên các sản phẩm liên quan
                      tới cô cũng sẽ tự động được gỡ bỏ. Điều này cũng có nghĩa
                      là cô đã và sẽ không có ý định quay lại nghề cũ nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628573470766464094183.jpg"
                      alt="2, RINA ISHIHARA,IDOL,"
                      note=""
                    />
                    <p>
                      Ngoài ra, theo các tin đồn tới từ cộng đồng mạng Nhật Bản
                      thì <strong>Rina Ishihara</strong> đã rời bỏ ngành giải
                      trí từ đầu năm 2019. Cô cũng đã tìm được ý chung nhân của
                      đời mình - một người đàn ông chịu chấp nhận quá khứ của cô
                      và sẵn sàng tiến tới hôn nhân. Hiện tại, cả hai vẫn đang
                      chung sống hạnh phúc và Rina Ishihara đang rất hài lòng
                      với cuộc sống của một bà nội trợ.{" "}
                    </p>
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
