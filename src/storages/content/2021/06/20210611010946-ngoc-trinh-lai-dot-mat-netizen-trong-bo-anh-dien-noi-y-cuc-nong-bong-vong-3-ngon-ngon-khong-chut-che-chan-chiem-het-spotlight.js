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
"timestamp": '11/06/2021 01:09 AM',
"title": 'Ngọc Trinh lại "đốt mắt" netizen trong bộ ảnh diện nội y cực nóng bỏng, vòng 3 ngồn ngộn không chút che chắn chiếm hết spotlight',
"description": 'Được mệnh danh là "Nữ hoàng nội y", Ngọc Trinh chưa bao giờ khiến dân tình thôi bàn tán khi diện những bộ nội y táo bạo.',
"src": 'storages/images/content/2021/20210611010946--14-13272.jpeg',
"alt": 'Ngoc Trinh, Nu Hoang Noi Y, Ban Than Vu Khac Tiep, Ngoc Trinh Dien Bikini, Sao Viet, Showbiz Viet, ',
"category": 'images',
"date": '11/06/2021',
"time": '01:09 AM',
"link": '/ngoc-trinh-lai-dot-mat-netizen-trong-bo-anh-dien-noi-y-cuc-nong-bong-vong-3-ngon-ngon-khong-chut-che-chan-chiem-het-spotlight',
"zcomponent": 'page_20210611010946',
"filepath": './20210611010946-ngoc-trinh-lai-dot-mat-netizen-trong-bo-anh-dien-noi-y-cuc-nong-bong-vong-3-ngon-ngon-khong-chut-che-chan-chiem-het-spotlight.js'
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
  'Ngọc Trinh lại "đốt mắt" netizen trong bộ ảnh diện nội y cực nóng bỏng, vòng 3 ngồn ngộn không chút che chắn chiếm hết spotlight';
const author = "XUKA,";
const source = "Trí Thức Trẻ";
const timestamp = "11/06/2021 01:09 AM";
const description =
  'Được mệnh danh là "Nữ hoàng nội y", Ngọc Trinh chưa bao giờ khiến dân tình thôi bàn tán khi diện những bộ nội y táo bạo.';
const link =
  "ngoc-trinh-lai-dot-mat-netizen-trong-bo-anh-dien-noi-y-cuc-nong-bong-vong-3-ngon-ngon-khong-chut-che-chan-chiem-het-spotlight";
const tagparam = [
  "ngoc-trinh",
  "nu-hoang-noi-y",
  "ban-than-vu-khac-tiep",
  "ngoc-trinh-dien-bikini",
  "sao-viet",
  "showbiz-viet",
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

export default function page_20210611010946() {
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
                      Từ trước đến nay, khi nhắc đến Ngọc Trinh, netizen sẽ nghĩ
                      ngay đến hình ảnh một mỹ nhân nóng bỏng thích mặc đồ hở
                      bạo để khoe trọn từng "đường gân thớ thịt" trên cơ thể. Dễ
                      thấy, danh hiệu "Nữ hoàng nội y" của Ngọc Trinh tính đến
                      thời điểm hiện tại vẫn chưa có đối thủ nào đủ mạnh để có
                      thể đánh bại.
                    </p>
                    <p>
                      Sáng 11/6, trên Instagram cá nhân, bạn thân Vũ Khắc Tiệp
                      lại một lần nữa chứng minh đẳng cấp diện nội y không ai
                      qua mặt được khi tung ra một bộ ảnh cực hút mắt. Biết được
                      lợi thế của bản thân, Ngọc Trinh đã liên tục tạo những
                      dáng chụp vô cùng "hư hỏng" để phô diễn toàn bộ đường cong
                      cơ thể. Đặc biệt, việc cố tình khoe vòng 3 "ná thở" của cô
                      nàng cũng khiến người hâm mộ không thể rời mắt được. Có
                      thể thấy, ngoài vòng eo con kiến, vòng 3 cũng là một điểm
                      mạnh đáng mơ ước trên body của Ngọc Trinh.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611010946--10-718437.png")
                          .default
                      }
                      alt="Ngoc Trinh, Nu Hoang Noi Y, Ban Than Vu Khac Tiep, Ngoc Trinh Dien Bikini, Sao Viet, Showbiz Viet, "
                      note="Ngọc Trinh luôn biết cách phô diễn 3 vòng sao cho hút mắt nhất"
                    />
                    <p>
                      Loạt ảnh này ngay sau khi được đăng tải đã thu hút sự chú
                      ý của đông đảo cộng đồng mạng và nhận lại hàng ngàn lượt
                      like. Dưới phần bình luận, dân tình cũng đã dành rất nhiều
                      lời khen cho body đỉnh cao của "Nữ hoàng nội y".
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611010946--11-840337.png")
                          .default
                      }
                      alt="Ngoc Trinh, Nu Hoang Noi Y, Ban Than Vu Khac Tiep, Ngoc Trinh Dien Bikini, Sao Viet, Showbiz Viet, "
                      note="Đường cong nóng bỏng kèm với vẻ sexy khó cưỡng của Ngọc Trinh luôn là ước mơ của nhiều cô gái"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611010946--12-619387.png")
                          .default
                      }
                      alt="Ngoc Trinh, Nu Hoang Noi Y, Ban Than Vu Khac Tiep, Ngoc Trinh Dien Bikini, Sao Viet, Showbiz Viet, "
                      note="Bạn thân Vũ Khắc Tiệp cũng nhận được rất nhiều lời khen trong bộ ảnh này, bên cạnh đó cũng có ý kiến cho rằng cô đang khoe thân quá đà"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611010946--13-181060.png")
                          .default
                      }
                      alt="Ngoc Trinh, Nu Hoang Noi Y, Ban Than Vu Khac Tiep, Ngoc Trinh Dien Bikini, Sao Viet, Showbiz Viet, "
                      note="Ngọc Trinh dạo gần đây thường xuyên đăng tải những bộ ảnh diện nội y lên trang cá nhân"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611010946--14-13272.jpeg")
                          .default
                      }
                      alt="Ngoc Trinh, Nu Hoang Noi Y, Ban Than Vu Khac Tiep, Ngoc Trinh Dien Bikini, Sao Viet, Showbiz Viet, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611010946--15-68044.jpeg")
                          .default
                      }
                      alt="Ngoc Trinh, Nu Hoang Noi Y, Ban Than Vu Khac Tiep, Ngoc Trinh Dien Bikini, Sao Viet, Showbiz Viet, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611010946--16-19868.jpeg")
                          .default
                      }
                      alt="Ngoc Trinh, Nu Hoang Noi Y, Ban Than Vu Khac Tiep, Ngoc Trinh Dien Bikini, Sao Viet, Showbiz Viet, "
                      note=""
                    />
                    <p>Ảnh: Instagram nhân vật</p>
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
