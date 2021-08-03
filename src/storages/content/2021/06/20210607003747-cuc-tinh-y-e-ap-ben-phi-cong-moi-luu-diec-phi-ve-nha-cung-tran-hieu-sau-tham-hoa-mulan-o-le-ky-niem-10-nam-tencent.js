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
"timestamp": 07/06/2021 12:37 AM",
"title": Cúc Tịnh Y e ấp bên 'phi công' mới, Lưu Diệc Phi 'về nhà' cùng Trần Hiểu sau thảm họa Mulan ở lễ kỷ niệm 10 năm Tencent",
"description": Sự kiện kỷ niệm 10 năm của Tencent là dịp để hàng loạt ngôi sao tuyên truyền phim của mình, như Lưu Diệc Phi, Dương Mịch, Cúc Tịnh Y,...",
"src": ",
"alt": Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, ",
"category": images",
"date": 07/06/2021",
"time": 12:37 AM",
"link": "/cuc-tinh-y-e-ap-ben-phi-cong-moi-luu-diec-phi-ve-nha-cung-tran-hieu-sau-tham-hoa-mulan-o-le-ky-niem-10-nam-tencent",
"zcomponent": page_20210607003747",
"filepath": ./20210607003747-cuc-tinh-y-e-ap-ben-phi-cong-moi-luu-diec-phi-ve-nha-cung-tran-hieu-sau-tham-hoa-mulan-o-le-ky-niem-10-nam-tencent.js"
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
  "Cúc Tịnh Y e ấp bên 'phi công' mới, Lưu Diệc Phi 'về nhà' cùng Trần Hiểu sau thảm họa Mulan ở lễ kỷ niệm 10 năm Tencent";
const author = "THÀNH VŨ,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 12:37 AM";
const description =
  "Sự kiện kỷ niệm 10 năm của Tencent là dịp để hàng loạt ngôi sao tuyên truyền phim của mình, như Lưu Diệc Phi, Dương Mịch, Cúc Tịnh Y,...";
const link =
  "cuc-tinh-y-e-ap-ben-phi-cong-moi-luu-diec-phi-ve-nha-cung-tran-hieu-sau-tham-hoa-mulan-o-le-ky-niem-10-nam-tencent";
const tagparam = [
  "cuc-tinh-y",
  "tang-thuan-hy",
  "luu-diec-phi",
  "tran-hieu",
  "dich-le-nhiet-ba",
  "ngo-loi",
  "duong-mich",
  "hua-khai",
  "mo-nam-chi",
  "mong-hoa-luc",
  "truong-ca-hanh",
  "dinh-luat-tinh-yeu-8020",
  "hoan-lac-tung-3",
  "phim-hoa-ngu",
  "phim-trung-quoc",
  "phim-truyen-hinh",
  "thap-quang-thinh-dien-2021",
  "tencent",
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

export default function page_20210607003747() {
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
                      Vào ngày 7/6, sự kiện cực hoành tráng kỷ niệm chặng đường
                      10 năm của<strong> Tencent</strong>
                    </p>
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/2020/9/21/nong-16006642926121959325129.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note=""
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/1977569353241478059038718579649980436415004n-16230421856801782700112.jpg"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Hứa Khải và Dương Mịch quảng bá cho Định Luật Tình Yêu 80/20"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/19707189230132909289484007491336763071972128n-16230421794452084089947.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Lưu Diệc Phi đứng trên sân khấu của Tencent bên cạnh bạn diễn Trần Hiểu"
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/01-16230415507651584960765.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Cúc Tịnh Y tình tứ cạnh Tăng Thuấn Hy"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/12-16230440237982069086838.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Cả hai trình diễn ca khúc Chỉ Có Cảm Giác Với Riêng Em nổi tiếng của Hebe và Phi Luân Hải"
                    />
                    <p>
                      4. Tuy không đứng chung khung hình nhưng Địch Lệ Nhiệt Ba
                      và Ngô Lỗi - cặp bài trùng của Trường Ca Hành vẫn biết
                      cách "tung hint couple". Cả hai mang đến bài phát biểu cảm
                      động dành tặng<strong> Tencent</strong>
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/08-1623042170784105273236.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Địch Lệ Nhiệt Ba..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/02-16230415507921772739646.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Và Ngô Lỗi xuất hiện giống nhau"
                    />
                    <p>
                      5. Dù đang bị "ném đá" kịch liệt nhưng hội 5 mỹ nữ mới của
                      Hoan Lạc Tụng 3 vẫn xuất hiện trên sân khấu kỷ niệm 10 năm
                      của<strong> Tencent</strong>
                    </p>
                    <p>
                      Một số hình ảnh vinh danh phim ảnh khác tại sự kiện Thập
                      Quang Thịnh Điển của<strong> Tencent</strong>
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/06-16230415508511880049536.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/07-1623041550918319796612.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/04-16230415508211803930742.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/05-1623041550836840089661.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/0-1623041550159286425329.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Hứa Ngụy Châu"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/09-16230426224261622751402.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Ngô Lỗi - Hầu Minh Hạo"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/11-16230438085051352905946.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note="Tiêu Chiến"
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/13-16230454055731494472722.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/tc-162304540559181621746.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/tc-162304540559181621746.png"
                      alt="Cuc Tinh Y, Tang Thuan Hy, Luu Diec Phi, Tran Hieu, Dich Le Nhiet Ba, Ngo Loi, Duong Mich, Hua Khai, Mo Nam Chi, Mong Hoa Luc, Truong Ca Hanh, Dinh Luat Tinh Yeu 8020, Hoan Lac Tung 3, Phim Hoa Ngu, Phim Trung Quoc, Phim Truyen Hinh, Thap Quang Thinh Dien 2021, Tencent, "
                      note=""
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
