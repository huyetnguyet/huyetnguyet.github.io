import React from "react";
import "components/page.css";
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
"timestamp": '31/07/2021 01:17 PM',
"title": '“Cuộc chiến” gây tranh cãi nhất cõi mạng hiện nay: Phở hay cơm tấm mới xứng đáng là món ăn đại diện Việt Nam?',
"description": 'Xuất phát từ một bài đăng phản biện trong nhóm Facebook, chủ đề này hiện đang gây tranh cãi lớn trên MXH.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/ct1-1627745375211263119053.jpeg',
"alt": 'cuộc chiến ẩm thực,phở,quốc hồn quốc tuý,cơm tấm,sườn nướng,món ăn đại diện Việt Nam,',
"category": 'news',
"date": '31/07/2021',
"time": '01:17 PM',
"link": '/cuoc-chien-gay-tranh-cai-nhat-coi-mang-hien-nay-pho-hay-com-tam-moi-xung-dang-la-mon-an-dai-dien-viet-nam',
"zcomponent": 'page_20210731131727',
"filepath": './20210731131727-cuoc-chien-gay-tranh-cai-nhat-coi-mang-hien-nay-pho-hay-com-tam-moi-xung-dang-la-mon-an-dai-dien-viet-nam.js'
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
  "“Cuộc chiến” gây tranh cãi nhất cõi mạng hiện nay: Phở hay cơm tấm mới xứng đáng là món ăn đại diện Việt Nam?";
const author = "THANH PHONG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "31/07/2021 01:17 PM";
const description =
  "Xuất phát từ một bài đăng phản biện trong nhóm Facebook, chủ đề này hiện đang gây tranh cãi lớn trên MXH.";
const link =
  "cuoc-chien-gay-tranh-cai-nhat-coi-mang-hien-nay-pho-hay-com-tam-moi-xung-dang-la-mon-an-dai-dien-viet-nam";
const tagparam = [
  "cuộc chiến ẩm thực",
  "phở",
  "quốc hồn quốc tuý",
  "cơm tấm",
  "sườn nướng",
  "món ăn đại diện Việt Nam",
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

export default function page_20210731131727() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Ẩm thực vốn là chủ đề khó để phân định đúng sai, mỗi người
                    mỗi gu ăn uống khác nhau sẽ có những quan niệm khác nhau. Vì
                    lẽ đó mà topic "<strong>Phở</strong> hay{" "}
                    <strong>cơm tấm</strong> mới là{" "}
                    <strong>món ăn đại diện Việt Nam</strong>?" đang trở thành
                    tâm điểm tranh cãi của cõi mạng.
                  </p>
                  <p>
                    Mọi chuyện bắt nguồn từ một bài đăng trong nhóm trên
                    Facebook, thành viên nọ cho rằng “<strong>Cơm tấm</strong>{" "}
                    xứng đáng làm <strong>món ăn đại diện Việt Nam</strong> hơn{" "}
                    <strong>phở</strong>”. Bài viết sau 1 ngày đăng tải đã thu
                    hút lượng tranh luận sôi nổi - hơn 3,3k bình luận và 2,2k
                    share, hiện vẫn tiếp tục tăng.
                  </p>
                  <p>Tóm tắt quan điểm của người này như sau:</p>
                  <p>
                    - <strong>Phở</strong> không phải món nguyên bản ở Việt Nam,
                    xuất phát từ một món ăn Pháp mang tên Pot au feu, hương vị
                    khá giống, cách nấu tương đồng, chỉ cần cho thêm bánh phở và
                    thịt bò là thành phở Việt. Vì vậy người này cho rằng phở là
                    món “vay mượn”, gốc ngoại, còn <strong>cơm tấm</strong> thì
                    100% thuần Việt.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/p4-1627745375807851032120.jpeg"
                    alt="1, cuộc chiến ẩm thực,phở,quốc hồn quốc tuý,cơm tấm,sườn nướng,món ăn đại diện Việt Nam,"
                    note="Ảnh @nhannhan3010"
                  />
                  <p>
                    - <strong>Phở</strong> không độc đáo, do trên thế giới có
                    rất nhiều món được làm theo công thức đồ sợi làm từ tinh bột
                    + nước hầm xương + thịt và rau củ. Còn{" "}
                    <strong>cơm tấm</strong> thì độc đáo ngay từ việc sử dụng
                    hạt gạo tấm, các món ăn kèm như sườn cốt lết, bì lợn thính,
                    chả trứng, nước mắm… đều là{" "}
                    <strong>quốc hồn quốc tuý</strong>.
                  </p>
                  <p>
                    - Cuối cùng, <strong>cơm tấm</strong> giàu hương vị hơn so
                    với <strong>phở</strong>, đủ chua cay mặn ngọt béo. Kết cấu
                    món ăn cũng đủ phần cứng, mềm, giòn, dai.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/ct1-1627745375211263119053.jpeg"
                    alt="2, cuộc chiến ẩm thực,phở,quốc hồn quốc tuý,cơm tấm,sườn nướng,món ăn đại diện Việt Nam,"
                    note=""
                  />
                  <p>
                    - Với 3 yếu tố nguyên bản - độc đáo - giàu hương vị kể trên,
                    người này cho rằng <strong>cơm tấm</strong> xứng đáng là{" "}
                    <strong>món ăn đại diện Việt Nam</strong> hơn so với{" "}
                    <strong>phở</strong>.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/ct3-1627745375495903903527.jpeg"
                    alt="3, cuộc chiến ẩm thực,phở,quốc hồn quốc tuý,cơm tấm,sườn nướng,món ăn đại diện Việt Nam,"
                    note=""
                  />
                  <p>
                    Dù đưa ra nhiều luận điểm nhưng bài đăng của thành viên này
                    có nhiều ý kiến trái chiều, bao gồm những lập luận phản biện
                    gay gắt. Đa số dân mạng đều không đồng tình với quan điểm
                    này. Trích một số quan điểm trong phần bình luận của
                    netizen:
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    - <strong>Phở</strong> và món Pot au feu có cách làm không
                    giống nhau: Phở cần hầm xương nhiều giờ, chọn phần bắp, gầu
                    để làm thịt, về Pot au feu, đây cơ bản cũng là món hầm nhưng
                    lại là súp, nên nó dùng rất nhiều phần thịt nhiều gân (phở
                    lại tránh những phần này vì cứng). Về gia vị, cả hai món đều
                    có hoa hồi và hành tây nhưng món của Pháp lại có thêm cà
                    rốt, cần tây…
                  </p>
                  <p>
                    - <strong>Phở</strong> có phần nào được sáng tạo từ món ăn
                    Pháp, nhưng mang đậm hồn Việt. Từ xưa đến nay, người Việt
                    vốn thông minh, nhanh trí, thích nghi tốt, tiếp nhận nhanh
                    những tri thức từ bên ngoài và đặc biệt nhất là biến những
                    tri thức đó mang chất Việt. Vì thế chúng ta có vô vàn cách
                    làm cho món Phở, trăm nghìn món Phở.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/p1-1627745375554939752877.jpeg"
                    alt="4, cuộc chiến ẩm thực,phở,quốc hồn quốc tuý,cơm tấm,sườn nướng,món ăn đại diện Việt Nam,"
                    note=""
                  />
                  <p>
                    - Về motif đồ sợi tinh bột + nước hầm xương thì quốc gia nào
                    cũng có, nhưng không quốc gia nào phủ nhận tính dân tộc
                    trong những món ăn đó, ngược lại đều được nâng lên thành
                    biểu tượng ẩm thực như ramen, udon, mì vằn thắn…
                  </p>
                  <p>
                    - Với hương vị, <strong>phở</strong> cũng đủ cả chua cay mặn
                    ngọt béo, quan trọng là cách thưởng thức: nước xương thanh,
                    bò béo - ngọt, các loại rau thơm ăn kèm dậy vị, thêm chanh
                    càng dậy mùi.
                  </p>
                  <p>
                    Theo đó, dân mạng chưa được thuyết phục hoàn toàn về lập
                    luận của bài viết trên. Một số cư dân mạng còn phản đối cách
                    dùng từ tiếng Anh xen lẫn để phân tích món Việt của người
                    này, khiến cho bài viết bị mất cảm tình.
                  </p>
                  <p>
                    Nhìn chung, <strong>phở</strong> và <strong>cơm tấm</strong>{" "}
                    đều là món ăn nổi tiếng của Việt Nam, được thực khách trong
                    và ngoài nước yêu thích, được bán rộng rãi và có mặt trên
                    toàn thế giới. Dù vậy, thực tế cho thấy phở vẫn được biết
                    đến nhiều người trong cộng đồng quốc tế. Nhắc đến Việt Nam,
                    người nước ngoài nào gần như cũng nghĩ ngay đến phở. Tháng
                    09/2007, phở là món ăn Việt đầu tiên được thêm vào từ điển
                    Oxford quốc tế.
                  </p>
                  <p>
                    Khi thế giới ngày càng xích lại gần nhau hơn, thì những món
                    ăn mang đậm nét đặc trưng đã trở thành văn hoá cốt cách dân
                    tộc như <strong>phở</strong> và <strong>cơm tấm</strong> đều
                    có chỗ đứng riêng và xứng đáng được giữ gìn, quảng bá. Giữ
                    lại nét đặc sắc văn hoá trong thời đại bão hoà là điều người
                    Việt đang nỗ lực không ngừng trong thời đại ngày nay.
                  </p>
                  <p>Nguồn: Tổng hợp</p>
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
