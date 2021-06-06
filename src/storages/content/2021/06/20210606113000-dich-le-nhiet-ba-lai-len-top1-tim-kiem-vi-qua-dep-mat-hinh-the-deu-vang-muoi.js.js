import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */
/*
<ContentItem title="" 
src="" 
alt="" 
category="" 
time="" 
link=""/>

 {
    title: "Địch Lệ Nhiệt Ba lại lên top 1 tìm kiếm vì quá đẹp: Mặt, hình thể đều 'vàng mười'",
    description: "Nhan sắc kiều diễm lấn át các khía cạnh khác của 'mỹ nhân Tân Cương' khiến cô bị nhận xét chỉ được vẻ ngoài.",
    src: "https://image-us.24h.com.vn/upload/2-2021/images/2021-06-05/dich-Le-Nhiet-Ba-bi-chi-trich-do-len-hot-search-vi-nhan-sac-dep-cung-la-4723bfb9ly1gr4xzaknxuj20u0190gqs-1622866147-498-width690height1035.jpg",
    alt: "Địch Lệ Nhiệt Ba",
    category: "images",
    time: "11:30 AM",
    date: "06/06/2021",
    timestamp: "06/06/2021 11:30 AM",
    link: "/dich-le-nhiet-ba-lai-len-top1-tim-kiem-vi-qua-dep-mat-hinh-the-deu-vang-muoi",
    component: "page_20210606113000",
    filepath: "./20210606113000-dich-le-nhiet-ba-lai-len-top1-tim-kiem-vi-qua-dep-mat-hinh-the-deu-vang-muoi.js",
  },

06/06/2021 11:30 AM
Địch Lệ Nhiệt Ba lại lên top 1 tìm kiếm vì quá đẹp: Mặt, hình thể đều 'vàng mười'
Nhan sắc kiều diễm lấn át các khía cạnh khác của 'mỹ nhân Tân Cương' khiến cô bị nhận xét chỉ được vẻ ngoài.
https://image-us.24h.com.vn/upload/2-2021/images/2021-06-05/dich-Le-Nhiet-Ba-bi-chi-trich-do-len-hot-search-vi-nhan-sac-dep-cung-la-4723bfb9ly1gr4xzaknxuj20u0190gqs-1622866147-498-width690height1035.jpg
/dich-le-nhiet-ba-lai-len-top1-tim-kiem-vi-qua-dep-mat-hinh-the-deu-vang-muoi
Địch Lệ Nhiệt Ba
images
06/06/2021
11:30 AM
/dich-le-nhiet-ba-lai-len-top1-tim-kiem-vi-qua-dep-mat-hinh-the-deu-vang-muoi






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
  "Địch Lệ Nhiệt Ba lại lên top 1 tìm kiếm vì quá đẹp: Mặt, hình thể đều 'vàng mười'";
const author = "Hồng Linh";
const source = "Dân Việt";
const date = "06/06/2021";
const time = "11:30 AM";
const description =
  "Nhan sắc kiều diễm lấn át các khía cạnh khác của 'mỹ nhân Tân Cương' khiến cô bị nhận xét chỉ được vẻ ngoài.";
const link =
  "dich-le-nhiet-ba-lai-len-top1-tim-kiem-vi-qua-dep-mat-hinh-the-deu-vang-muoi";
const tagparam = ["Địch Lệ Nhiệt Ba"];
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

export default function page_20210606113000() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <ContentImage
                    src="https://image-us.24h.com.vn/upload/2-2021/images/2021-06-05/dich-Le-Nhiet-Ba-bi-chi-trich-do-len-hot-search-vi-nhan-sac-dep-cung-la-d145ba25ly1gpjlpb4bnhj21hc2i07wh-1622866027-966-width1000height1688.jpg"
                    alt="Địch Lệ Nhiệt Ba"
                    note="Địch Lệ Nhiệt Ba sở hữu nhan sắc kiều diễm, thường xuyên lên top tìm kiếm trên Weibo."
                  />
                  <ContentImage
                    src="https://image-us.24h.com.vn/upload/2-2021/images/2021-06-05/dich-Le-Nhiet-Ba-bi-chi-trich-do-len-hot-search-vi-nhan-sac-dep-cung-la-4723bfb9ly1gr4xzaknxuj20u0190gqs-1622866147-498-width690height1035.jpg"
                    alt="Địch Lệ Nhiệt Ba"
                    note="Cô được mệnh danh là 'mỹ nhân Tân Cương', có mặt trong danh sách 'Tân Cương tứ mỹ'."
                  />
                  <p>
                    Địch Lệ Nhiệt Ba sinh năm 1992 là một trong những mỹ nhân 9x
                    đẹp nức tiếng của làng giải trí Hoa ngữ. Mỗi khi xuất hiện
                    "mỹ nhân Tân Cương" đều thu hút sự chú ý của công chúng vì
                    quá đẹp. Sau mỗi sự kiện, cái tên Địch Lệ Nhiệt Ba lại được
                    đẩy lên top tìm kiếm.
                  </p>
                  <p>
                    Tuy nhiên, một số cư dân mạng lại chỉ trích nữ diễn viên. Họ
                    nói rằng, Địch Lệ Nhiệt Ba thiếu tài năng, chỉ giữ được sự
                    quan tâm của công chúng nhờ ngoại hình, là "bình hoa di
                    động",... Trước thông tin này, có người viết: "Đẹp cũng là
                    một dạng tài năng mà", "đẹp quá cũng là cái tội à", "người
                    ta xinh người ta có quyền",...
                  </p>
                  <h4>Ấn tượng diện mạo từ cái nhìn đầu</h4>
                  <ContentImage
                    src="https://image-us.24h.com.vn/upload/2-2021/images/2021-06-05/dich-Le-Nhiet-Ba-bi-chi-trich-do-len-hot-search-vi-nhan-sac-dep-cung-la-d145ba25gy1giqcl5zikuj21jk2bchdw-1622866398-660-width1000height1082.jpg"
                    alt="Địch Lệ Nhiệt Ba"
                    note=""
                  />
                  <p>
                    Địch Lệ Nhiệt Ba là người dân tộc Duy Ngô Nhĩ, Tân Cương,
                    Trung Quốc. Không phải vô cớ khi người ta gọi đây là vùng
                    đất mỹ nhân của xứ sở tỷ dân bởi các cô gái Tân Cương có vẻ
                    đẹp hài hòa giữa nét phương Đông và phương Tây.
                  </p>
                  <p>
                    Vùng này là trạm nghỉ chân lớn nhất trên "con đường tơ lụa"
                    nối từ Á sang Âu nơi những nền văn hóa hòa quyện cũng như sở
                    hữu nguồn gen phong phú. Ngoài ra, điều kiện khí hậu với
                    khung cảnh thiên nhiên là thảo nguyên rộng lớn cũng tác động
                    đến ngoại hình của con người.
                  </p>
                  <ContentImage
                    src=""
                    alt="Địch Lệ Nhiệt Ba"
                    note="Mảnh đất Tân Cương sản sinh ra những người phụ nữ đẹp nhất nhì Trung Quốc."
                  />
                  <p>
                    Địch Lệ Nhiệt Ba được nhận xét là có khuôn mặt đẹp, các nét
                    trên gương mặt rõ ràng đặc biệt là chiếc mũi cao giúp diện
                    mạo thêm phần thanh tú. Bên cạnh đó tỷ lệ gương mặt của Địch
                    Lệ Nhiệt Ba cân đối. Mũi, môi và cằm nằm trên một đường
                    thẳng. Nhờ đó, người đẹp có góc nghiêng hoàn hảo mà không
                    phải ai cũng may mắn có được.
                  </p>
                  <h4>Thân hình mảnh mai nhưng có đường cong</h4>
                  <ContentImage
                    src="https://image-us.24h.com.vn/upload/2-2021/images/2021-06-05/dich-Le-Nhiet-Ba-bi-chi-trich-do-len-hot-search-vi-nhan-sac-dep-cung-la-d145ba25gy1gge5ztbfc7j20v41aowid-1622866488-392-width1024height1536.jpg"
                    alt="Địch Lệ Nhiệt Ba"
                    note="Địch Lệ Nhiệt Ba có thân hình mảnh mai, đường cong vóc dáng gợi cảm."
                  />
                  <p>
                    Chẳng những vậy, Địch Lê Nhiệt Ba còn được khen ngợi hết lời
                    về vóc dáng. "Mỹ nhân Tân Cương" có thân hình mảnh mai nhưng
                    "vòng nào ra vòng nấy" vẫn có những đường cong gợi cảm,
                    không phải kiểu gầy gò, ốm yếu. Ngoài ra, khi áp dụng nguyên
                    lý "8 cái đầu" để xác định tỉ lệ cơ thể, kết quả của Địch Lệ
                    Nhiệt Ba là 8,5 gần đạt chuẩn mới "9 cái đầu".{" "}
                  </p>
                  <ContentImage
                    src="https://image-us.24h.com.vn/upload/2-2021/images/2021-06-05/dich-Le-Nhiet-Ba-bi-chi-trich-do-len-hot-search-vi-nhan-sac-dep-cung-la-d145ba25gy1gnaqunq83yj247s5j8e83-1622866234-692-width1024height1344.jpg"
                    alt="Địch Lệ Nhiệt Ba"
                    note="Xương quai xanh hõm sâu, bờ vai thon đẹp cũng là nét quyến rũ của Địch Lệ Nhiệt Ba."
                  />
                  <p>
                    Bên cạnh đó, chân của Địch Lệ Nhiệt Ba dài, thon gọn mặc dù
                    cô chỉ cao 1m68. Chiều dài cánh tay cũng theo đúng tỷ lệ
                    chuẩn bằng 1/4 tổng chiều dài cơ thể. Còn vùng vai, xương
                    quai xanh của cô cũng đẹp ấn tượng. Chẳng những hõm sâu mà
                    đỉnh đầu xương quai xanh, đường lượn vai đều hoàn hảo. Bởi
                    vậy mà người ta mới không ngừng ca ngợi vóc dáng của Địch Lệ
                    Nhiệt Ba.
                  </p>
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
