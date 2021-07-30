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
"timestamp": '11/06/2021 01:10 AM',
"title": 'Hé lộ cuộc sống sau giải nghệ của "thánh nữ" một thời Rina Ishihara, hóa ra vẫn làm công việc liên quan tới nghề cũ',
"description": 'Cực kỳ nổi tiếng với vô số tác phẩm, nhưng Rina Ishihara lại vô cùng im ắng khi giải nghệ.',
"src": '',
"alt": 'Hot Girl, Rina Ishihara, Gai Xinh, Cong Dong Mang, Phim 18, images, Phim Av, ',
"category": 'images',
"date": '11/06/2021',
"time": '01:10 AM',
"link": '/he-lo-cuoc-song-sau-giai-nghe-cua-thanh-nu-mot-thoi-rina-ishihara-hoa-ra-van-lam-cong-viec-lien-quan-toi-nghe-cu',
"zcomponent": 'page_20210611011047',
"filepath": './20210611011047-he-lo-cuoc-song-sau-giai-nghe-cua-thanh-nu-mot-thoi-rina-ishihara-hoa-ra-van-lam-cong-viec-lien-quan-toi-nghe-cu.js'
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
  'Hé lộ cuộc sống sau giải nghệ của "thánh nữ" một thời Rina Ishihara, hóa ra vẫn làm công việc liên quan tới nghề cũ';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "11/06/2021 01:10 AM";
const description =
  "Cực kỳ nổi tiếng với vô số tác phẩm, nhưng Rina Ishihara lại vô cùng im ắng khi giải nghệ.";
const link =
  "he-lo-cuoc-song-sau-giai-nghe-cua-thanh-nu-mot-thoi-rina-ishihara-hoa-ra-van-lam-cong-viec-lien-quan-toi-nghe-cu";
const tagparam = [
  "hot-girl",
  "rina-ishihara",
  "gai-xinh",
  "cong-dong-mang",
  "phim-18",
  "av",
  "phim-av",
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

export default function page_20210611011047() {
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
                    Ngành công nghiệp <strong>AV</strong> Nhật Bản luôn nổi
                    tiếng với việc cho ra mắt vô số những nữ diễn viên xinh đẹp,
                    nổi tiếng. Ở thời điểm hiện tại, nếu như nhiều người đã quá
                    quen mặt với những Yua Mikami, Karen Kaede hay Arina
                    Hashimoto thì trong quá khứ, một trong những người được mệnh
                    danh là "thánh nữ", sở hữu gương mặt ngây thơ xinh xắn và
                    rất được lòng fan với kho tàng tác phẩm khổng lồ chính là{" "}
                    <strong>Rina Ishihara</strong>. Thực tế, cái tên này có lẽ
                    cũng đã được nhiều người biết tới, khi mà tới bây giờ, nhiều
                    năm sau khi giải nghệ, các bộ phim của Rina vẫn luôn đứng
                    top đầu của nhiều bảng xếp hạng.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611011047--10-516008.jpg")
                        .default
                    }
                    alt="Hot Girl, Rina Ishihara, Gai Xinh, Cong Dong Mang, Phim 18, images, Phim Av, "
                    note="Rina Ishihara - cái tên rất quen mặt với các fan AV Nhật Bản"
                  />
                  <p>
                    Xuất hiện lần đầu tiên vào năm 2008 và để lại vô số ấn
                    tượng, nhưng ít ai biết rằng, chỉ sau 4 tháng "du lịch" với
                    ngành công nghiệp <strong>AV</strong> Nhật Bản,{" "}
                    <strong>Rina Ishihara</strong> đã tuyên bố giải nghệ ngay
                    lập tức và để lại sự hụt hẫng cho không ít fan hâm mộ. Phải
                    tới 4 năm sau, tức là vào thời điểm 2012, cô nàng mới bất
                    ngờ tuyên bố trở lại và liên tục ra mắt các sản phẩm. Trung
                    bình, không tháng nào mà Rina không tham gia vào một bộ phim
                    mới - điều khiến cho các fan hâm mộ cực kỳ ấn tượng và vui
                    vẻ. Tuy nhiên, sau tác phẩm cuối cùng vào tháng 10/2017, cái
                    tên Rina Ishihara lại thêm một lần nữa biến mất đầy bí ẩn.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611011047--11-519392.jpg")
                        .default
                    }
                    alt="Hot Girl, Rina Ishihara, Gai Xinh, Cong Dong Mang, Phim 18, images, Phim Av, "
                    note="Cô nàng từng giải nghệ chỉ sau 4 tháng gia nhập ngành công nghiệp"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611011047--12-036288.jpg")
                        .default
                    }
                    alt="Hot Girl, Rina Ishihara, Gai Xinh, Cong Dong Mang, Phim 18, images, Phim Av, "
                    note="Nhưng rồi lại có màn comeback cực kỳ mạnh mẽ"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Điều đáng nói là chẳng những biến mất một cách bất ngờ,
                    những thông tin liên quan tới cô nàng{" "}
                    <strong>hot girl</strong> này về cuộc sống sau giải nghệ
                    cũng đầy hạn chế. Chẳng ai biết Rina đang làm gì, sống ra
                    sao và nguyên nhân từ bỏ sự nghiệp của mình vì đâu. Tuy
                    nhiên, mới đây thôi, theo một nguồn tin thì Rina đã có một
                    công việc mới, và cũng liên quan tới những yếu tố 18+. Theo
                    đó, cô nàng được cho rằng rất khó để có thể trở lại cuộc
                    sống bình thường sau khi giải nghệ, đặc biệt là khi phải từ
                    bỏ mức lương cao hơn rất nhiều lần một công việc khác.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611011047--13-990170.jpg")
                        .default
                    }
                    alt="Hot Girl, Rina Ishihara, Gai Xinh, Cong Dong Mang, Phim 18, images, Phim Av, "
                    note="Nhan sắc có phần xuống cấp của cô nàng hot girl"
                  />
                  <p>
                    Theo đó, sau khi giải nghệ, Rina đã đổi sang một công việc
                    mới, lên sóng trực tiếp giao lưu với fan - điều mà nhiều
                    người hay gọi tên là streamer. Thực tế, "streamer"{" "}
                    <strong>Rina Ishihara</strong> cũng lên sóng như thường, chỉ
                    có điều, cô nàng thường xuyên mang tới những nội dung có yếu
                    tố 18+ rất mạnh. Và tất nhiên, không phải ai cũng có quyền
                    xem. Được biết, dường như bạn phải trả tiền cho những quãng
                    thời gian ít ỏi được giao lưu và xem các tiết mục 18+ của
                    Rina trên sóng. Hiện tại, cô nàng vẫn đang miệt mài theo
                    đuổi công việc này một cách rất kín tiếng.
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
