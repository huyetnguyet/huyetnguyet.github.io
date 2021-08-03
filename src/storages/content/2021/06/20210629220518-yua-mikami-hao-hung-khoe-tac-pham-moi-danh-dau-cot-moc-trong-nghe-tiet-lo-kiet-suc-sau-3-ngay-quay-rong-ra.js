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
"timestamp": '29/06/2021 10:05 PM',
"title": 'Yua Mikami hào hứng khoe tác phẩm mới đánh dấu cột mốc trong nghề, tiết lộ kiệt sức sau 3 ngày quay ròng rã',
"description": 'Những hình ảnh mới nhất của Yua Mikami đang khiến cho không ít fan phải cảm thấy háo hức.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,AV,PHIM AV,PHIM 18+,',
"category": 'images',
"date": '29/06/2021',
"time": '10:05 PM',
"link": '/yua-mikami-hao-hung-khoe-tac-pham-moi-danh-dau-cot-moc-trong-nghe-tiet-lo-kiet-suc-sau-3-ngay-quay-rong-ra',
"zcomponent": 'page_20210629220518',
"filepath": './20210629220518-yua-mikami-hao-hung-khoe-tac-pham-moi-danh-dau-cot-moc-trong-nghe-tiet-lo-kiet-suc-sau-3-ngay-quay-rong-ra.js'
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
  "Yua Mikami hào hứng khoe tác phẩm mới đánh dấu cột mốc trong nghề, tiết lộ kiệt sức sau 3 ngày quay ròng rã";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 10:05 PM";
const description =
  "Những hình ảnh mới nhất của Yua Mikami đang khiến cho không ít fan phải cảm thấy háo hức.";
const link =
  "yua-mikami-hao-hung-khoe-tac-pham-moi-danh-dau-cot-moc-trong-nghe-tiet-lo-kiet-suc-sau-3-ngay-quay-rong-ra";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "YUA MIKAMI",
  "AV",
  "PHIM AV",
  "PHIM 18+",
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

export default function page_20210629220518() {
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
                      Cái tên <strong>Yua Mikami</strong> chưa bao giờ là hết
                      hot đối với các fan của ngành công nghiệp{" "}
                      <strong>AV</strong> Nhật Bản. Tuy rằng thời gian gần đây,
                      nàng <strong>hot girl</strong> gần như chẳng cho ra mắt
                      bất kỳ tác phẩm mới nào thật sự gây ấn tượng, nhưng không
                      vì thế mà các hoạt động của Yua Mikami có dấu hiệu gián
                      đoạn. Nếu như để ý theo dõi trên trang cá nhân của cô
                      nàng, có lẽ không khó để nhận ra rằng "thánh nữ" của làng{" "}
                      <strong>phim AV</strong> Nhật Bản vẫn đang miệt mài chạy
                      show với vô số những sự kiện lớn nhỏ. Chỉ duy nhất các
                      hình ảnh hậu trường hay lịch quay phim là cô nàng không hề
                      đả động mảy may mà thôi.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220518--10-124528.jpg")
                          .default
                      }
                      alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,AV,PHIM AV,PHIM 18+,"
                      note="Yua Mikami vẫn đang là nàng hot girl nóng bỏng và nổi tiếng nhất của ngành công nghiệp phim AV Nhật Bản"
                    />
                    <p>
                      Điều này khiến cho không ít fan phải cảm thấy thất vọng.
                      Thậm chí, trên nhiều vlog tại kênh YouTube của{" "}
                      <strong>Yua Mikami</strong>, số đông các fan còn bày tỏ
                      mong muốn cô nàng đừng nên quên mất nguồn gốc nghề nghiệp
                      - thứ đã đưa tên tuổi của nàng <strong>hot girl</strong>{" "}
                      tới với số đông. Và mới đây, một tin vui dành cho các fan
                      hâm mộ của Yua Mikami, khi mà cô nàng đã bất ngờ đăng tải
                      một dòng trạng thái liên quan tới bộ phim mới ra mắt. Dựa
                      theo những gì mà nàng hot girl đăng tải, thì Yua Mikami
                      vừa hoàn thành xong một tác phẩm đánh dấu cột mốc kỷ niệm
                      6 năm trong nghề của cô nàng, đồng thời hứa hẹn nó chứa vô
                      số những nội dung thú vị. Bản thân Yua Mikami cũng đã phải
                      mất tới 3 ngày ròng rã quay liên tục để hoàn thành nó.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220518--11-843199.jpg")
                          .default
                      }
                      alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,AV,PHIM AV,PHIM 18+,"
                      note="Yua Mikami vừa khiến không ít fan háo hức khi cho ra mắt tác phẩm siêu đặc biệt của mình"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220518--12-274340.jpg")
                          .default
                      }
                      alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,AV,PHIM AV,PHIM 18+,"
                      note="Đây là bộ phim đánh dấu cột mốc 6 năm kể từ khi vào nghề của cô nàng hot girl"
                    />
                    <p>
                      Bên cạnh đó, <strong>Yua Mikami</strong> cũng đồng thời
                      tung ra thêm một số thông tin rất hot liên quan tới tác
                      phẩm lần này. Cụ thể, bộ phim sẽ có thời lượng lên tới hơn
                      4 tiếng và tạm thời, mức giá được ấn định khi phát hành là
                      khoảng 2.500 yên, tương đương với khoảng 500.000 VNĐ.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220518--13-139523.jpg")
                          .default
                      }
                      alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,AV,PHIM AV,PHIM 18+,"
                      note="Các fan của Yua Mikami có lẽ đang rất háo hức ở thời điểm hiện tại"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Tất nhiên, song hành với việc quay phim,{" "}
                      <strong>Yua Mikami</strong> đồng thời cũng đang rất phát
                      triển những hình ảnh bên ngoài của mình. Mới đây, cô nàng
                      thậm chí còn khiến cho không ít fan phải bỏng mắt khi khoe
                      hình ảnh của bản thân đầy nóng bỏng và quyến rũ trong một
                      gameshow 18+ nổi tiếng tại Nhật Bản.{" "}
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220518--14-571830.png")
                          .default
                      }
                      alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,AV,PHIM AV,PHIM 18+,"
                      note="Hình ảnh Yua Mikami nổi bật ở vị trí trung tâm trong gameshow mới"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220518--15-917168.jpg")
                          .default
                      }
                      alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,AV,PHIM AV,PHIM 18+,"
                      note="Cô nàng cũng có những cảnh quay cực kỳ gợi cảm"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220518--16-183659.jpg")
                          .default
                      }
                      alt="7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,AV,PHIM AV,PHIM 18+,"
                      note="Luôn là tâm điểm của sự chú ý mỗi khi xuất hiện"
                    />
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
