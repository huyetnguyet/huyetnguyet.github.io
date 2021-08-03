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
"timestamp": '18/06/2021 01:03 PM',
"title": '3 nữ hoàng cảnh nóng xứ Hàn: Người bị bạn trai bỏ vì khỏa thân 100%, người lên đời cả tình yêu lẫn sự nghiệp',
"description": 'Từng được biết đến với danh xưng nữ hoàng cảnh nóng, 3 nữ diễn viên này hiện tại đều đã trở thành những nữ hoàng rating, ngôi sao phòng vé xứ Hàn.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210618130342--12-815764.jpg',
"alt": '',
"category": 'images',
"date": '18/06/2021',
"time": '01:03 PM',
"link": '/su-nghiep-cua-3-nu-hoang-canh-nong-phim-han-vien-man-nhat-dich-thi-la-son-ye-jin',
"zcomponent": 'page_20210618130342',
"filepath": './20210618130342-su-nghiep-cua-3-nu-hoang-canh-nong-phim-han-vien-man-nhat-dich-thi-la-son-ye-jin.js'
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
  "3 nữ hoàng cảnh nóng xứ Hàn: Người bị bạn trai bỏ vì khỏa thân 100%, người lên đời cả tình yêu lẫn sự nghiệp";
const author = "LỆ,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "18/06/2021 01:03 PM";
const description =
  "Từng được biết đến với danh xưng nữ hoàng cảnh nóng, 3 nữ diễn viên này hiện tại đều đã trở thành những nữ hoàng rating, ngôi sao phòng vé xứ Hàn.";
const link =
  "su-nghiep-cua-3-nu-hoang-canh-nong-phim-han-vien-man-nhat-dich-thi-la-son-ye-jin";
const tagparam = [];
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

export default function page_20210618130342() {
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
                      Từng vướng loạt ồn ào khi đảm nhận những cảnh nóng táo bạo
                      trên màn ảnh, đến nay sự nghiệp và đời tư của của 3 mỹ
                      nhân được mệnh danh là nữ hoàng cảnh nóng xứ Hàn đều đã
                      gặt hái được những thành quả đáng ngưỡng mộ.
                    </p>
                    <h3>1. Son Ye Jin</h3>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--10-183378.jpg")
                          .default
                      }
                      alt="1, "
                    />
                    <p>
                      Ra mắt khán giả với hình tượng "tình đầu quốc dân" vào
                      những năm 2000, thời điểm hiện tại cũng duy trì hình ảnh
                      trong sáng, dịu dàng, ít ai ngờ có một thời gian dài, Son
                      Ye Jin được biết đến qua khá nhiều bộ phim đầy những cảnh
                      nóng.{" "}
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--11-025223.jpg")
                          .default
                      }
                      alt="2, "
                    />
                    <p>
                      Tuyết Tháng Tư đóng cùng với Bae Yong Joon là tác phẩm mở
                      màn cho sự thay đổi hình tượng của Son Ye Jin. Trong phim,
                      bạn gái Hyun Bin đã có rất nhiều cảnh nóng với bạn diễn
                      làm cho nhiều người hâm mộ ngỡ ngàng khi Son Ye Jin thay
                      đổi hình tượng mà không một lời báo trước. Tiếp theo sau
                      đó, Son Ye Jin cũng đã tham gia hàng loạt dự án phim, MV
                      có đầy ắp cảnh nóng như White Night, Open City, My Wife
                      Got Married,...
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--12-815764.jpg")
                          .default
                      }
                      alt="3, "
                      note=""
                    />
                    <p>
                      Thời điểm hiện tại, Son Ye Jin gần như không đóng cảnh
                      nóng trên màn ảnh nhưng tên tuổi của cô vẫn chưa bao giờ
                      hạ nhiệt. Với bom tấn Crash Landing On You ra mắt vào năm
                      ngoái, Son Ye Jin không chỉ nâng tầm ảnh hưởng mà còn
                      "nhặt được bồ" khi cô và bạn diễn Hyun Bin đã chính thức
                      công khai hẹn hò.
                    </p>
                    <h3>2. Jo Yeo Joeng</h3>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--13-428035.jpg")
                          .default
                      }
                      alt="4, "
                      note=""
                    />
                    <p>
                      Trước khi trở thành ngôi sao Oscar với bom tấn Parasite
                      (Ký Sinh Trùng), tên tuổi của Jo Yeo Jeong thường gắn liền
                      với biệt danh "nữ hoàng cảnh nóng", thậm chí ngay cả trong
                      bom tấn Oscar để đời, nữ diễn viên họ Jo cũng có một cảnh
                      nóng.{" "}
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--14-715397.jpg")
                          .default
                      }
                      alt="5, "
                      note=""
                    />
                    <p>
                      Năm 2010, Jo Yeo Joeng trở thành cái tên phủ sóng với phim
                      điện ảnh The Servant (Người Hầu). Với tác phẩm này, cô đã
                      phải khỏa thân 100% và có không ít cảnh làm tình nóng bỏng
                      với hai người đàn ông. Bộ phim đã mang lại thành công
                      ngoài mong đợi và giúp tên tuổi cô nàng trở nên nổi tiếng
                      ở xứ Hàn.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--15-405368.jpg")
                          .default
                      }
                      alt="6, "
                      note=""
                    />
                    <p>
                      Cuộc đời của Jo Yeo Jeong thăng hoa nhờ cái danh "nữ hoàng
                      phim nóng" nhưng cũng vì nó mà tụt xuống địa ngục. Nữ diễn
                      viên bị người yêu phũ phàng, lạnh lùng nói lời chia tay vì
                      không chịu được áp lực. Anh ta không thể chấp nhận một
                      người bạn gái cởi đồ táo bạo trên màn ảnh. Yeo Jeong sau
                      đó rơi vào cơn ác mộng trầm cảm, nhốt mình trong phòng,
                      không nhận bất cứ dự án phim nào vì bị công chúng kỳ thị.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thời điểm hiện tại, Jo Yeo Joeng vẫn là một diễn viên
                      không ngại phải cởi để phục vụ cho vai diễn nhưng có thể
                      thấy phim của cô hạn chế cảnh nóng hơn và cũng đa dạng về
                      thể loại hơn. Sắp tới đây khán giả sẽ được gặp lại nữ
                      hoàng cảnh nóng một thời trong High Class - một bộ phim về
                      drama của giới thượng lưu.{" "}
                    </p>
                    <h3>3. Song Ji Hyo</h3>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--16-828167.jpg")
                          .default
                      }
                      alt="7, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--17-610394.jpg")
                          .default
                      }
                      alt="8, "
                      note=""
                    />
                    <p>
                      Từng được biết đến với danh xưng ngọc nữ màn ảnh Hàn vì
                      hình tượng trong sáng, ngọt ngào, ít ai ngờ, "mợ ngố" Song
                      Ji Hyo có được ngày hôm nay cũng nhờ việc đóng cảnh nóng
                      táo bạo ở Song Hoa Điếm. Khỏa thân 100%, cảnh nóng quá
                      trần trụi khiến Song Ji Hyo thời điểm đó còn bị chỉ trích
                      rằng vì muốn được chú ý nên mới chấp nhận cởi. Bỏ ngoài
                      tai mọi lời đàm tiếu, Song Ji Hyo vẫn coi Song Hoa Điếm
                      như một bàn đạp để đời, tiếp tục tìm kiếm cho mình những
                      cơ hội thăng tiến mới.{" "}
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--18-659968.jpg")
                          .default
                      }
                      alt="9, "
                      note=""
                    />
                    <p>
                      Cho đến thời điểm hiện tại, sự nghiệp của Song Ji Hyo tuy
                      vẫn không có nhiều nổi bật ở lĩnh vực diễn xuất nhưng cô
                      nàng lại rất thành công với vai trò là một ngôi sao giải
                      trí, tiêu biểu nhất là sự góp mặt ở Running Man - chương
                      trình góp phần làm thay đổi cuộc đời "mợ ngố". Sắp tới đây
                      khán giả sẽ được gặp lại Song Ji Hyo với một hình ảnh cực
                      kỳ khác, quyến rũ, ma mị hơn trong bộ phim Come To The
                      Witch Restaurant.{" "}
                    </p>

                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618130342--19-345596.jpg")
                          .default
                      }
                      alt="10, "
                      note=""
                    />
                    <p>Nguồn: Tổng hợp</p>
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
