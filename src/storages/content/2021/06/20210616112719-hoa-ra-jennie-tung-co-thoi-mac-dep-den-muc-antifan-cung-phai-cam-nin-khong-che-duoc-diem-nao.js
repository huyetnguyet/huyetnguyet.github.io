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
"timestamp": '16/06/2021 11:27 AM',
"title": 'Hóa ra Jennie từng có thời mặc đẹp đến mức antifan cũng phải "câm nín", không chê được điểm nào',
"description": 'Phải công nhận đây là giai đoạn bùng nổ của Jennie, hoàn hảo từ body cho tới phong cách thời trang, bảo sao ai cũng mê như điếu đổ.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210616112719--10-775735.jpg',
"alt": 'Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, ',
"category": 'stars',
"date": '16/06/2021',
"time": '11:27 AM',
"link": '/hoa-ra-jennie-tung-co-thoi-mac-dep-den-muc-antifan-cung-phai-cam-nin-khong-che-duoc-diem-nao',
"zcomponent": 'page_20210616112719',
"filepath": './20210616112719-hoa-ra-jennie-tung-co-thoi-mac-dep-den-muc-antifan-cung-phai-cam-nin-khong-che-duoc-diem-nao.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Hóa ra Jennie từng có thời mặc đẹp đến mức antifan cũng phải "câm nín", không chê được điểm nào';
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "16/06/2021 11:27 AM";
const description =
  "Phải công nhận đây là giai đoạn bùng nổ của Jennie, hoàn hảo từ body cho tới phong cách thời trang, bảo sao ai cũng mê như điếu đổ.";
const link =
  "hoa-ra-jennie-tung-co-thoi-mac-dep-den-muc-antifan-cung-phai-cam-nin-khong-che-duoc-diem-nao";
const tagparam = [
  "jennie",
  "black-pink",
  "sao-han",
  "trang-phuc-trinh-dien",
  "outfit",
  "mac-dep",
  "idol",
  "kpop",
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

export default function page_20210616112719() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Là một biểu tượng thời trang của <strong>Kpop</strong> nhưng
                    cũng có lúc <strong>Jennie</strong> không tránh khỏi những ý
                    kiến trái chiều về trang phục cô diện. Tuy nhiên, đã từng có
                    một giai đoạn netizen không thể tìm ra bất cứ điểm nào để
                    chê nàng <strong>idol</strong> vì <strong>outfit</strong>{" "}
                    nào của cô cũng xuất sắc.{" "}
                  </p>

                  <p>
                    Khoảng thời gian từ năm 2016 - 2018, BLACKPINK hoạt động sôi
                    nổi, thường xuyên biểu diễn tại các lễ trao giải và sự kiện,
                    vậy nên khán giả có nhiều cơ hội ngắm nhìn các cô gái nhà
                    YG. Tại đây, trang phục trình diễn của{" "}
                    <strong>Jennie</strong> luôn được đầu tư và chăm chút kỹ
                    lưỡng. Dù là tân binh nhưng cô nàng đã được diện đồ Gucci,
                    phối đồ sang chảnh với sơ mi bèo nhún quý tộc, nơ cổ, blazer
                    và chân váy, chuẩn phong thái tiểu thư nhà giàu.{" "}
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--10-775735.jpg")
                        .default
                    }
                    alt="1Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--11-556250.jpg")
                        .default
                    }
                    alt="2Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--12-535207.jpg")
                        .default
                    }
                    alt="3Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--13-847238.jpg")
                        .default
                    }
                    alt="4Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--14-216644.jpg")
                        .default
                    }
                    alt="5Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <p>
                    Váy của <strong>Jennie</strong> luôn được cắt ngắn nhất có
                    thể, sau đó phối cùng thắt lưng bản to đính đá và boot cao
                    qua đầu gối. Nhờ vậy mà cô nàng luôn có được tỉ lệ cơ thể
                    đẹp, vóc dáng cũng thon gọn và cao ráo hơn nhiều. Cái hay
                    của Jennie là dù cô hay diện những thiết kế ren, nhún bèo và
                    thắt nơ nhưng cô không bao giờ rơi vào tình trạng sến sẩm mà
                    ngược lại, những loại trang phục này lại còn giúp Jennie
                    trông như một nàng tiểu thư thứ thiệt.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--15-559290.jpg")
                        .default
                    }
                    alt="6Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--16-042656.jpg")
                        .default
                    }
                    alt="7Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--17-927740.jpg")
                        .default
                    }
                    alt="8Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <p>
                    Khi quảng bá single As If It's Your Last cũng là lúc phong
                    cách high-teen sành điệu của <strong>Jennie</strong> bùng
                    nổ. Ví Jennie như nàng "Queen Bee" tại một trường trung học
                    cũng không sai vì từ trang phục cho đến vóc dáng của cô đều
                    khiến bao người ao ước. Bên cạnh mix&match phụ kiện như
                    chain belt, băng đô hay găng tay, Jennie còn "cao tay" khi
                    xắn tay áo, đeo cà vạt hơi xộc xệch để tạo hình ảnh cô ngổ
                    ngáo và bất cần. Những họa tiết như bàn cờ, kẻ sọc hay
                    gingham cũng được Jennie ưu ái hết mực.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--18-939577.jpg")
                        .default
                    }
                    alt="9Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--19-811308.jpg")
                        .default
                    }
                    alt="10Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <p>
                    Cũng phải nói thêm rằng thân hình lúc đó của{" "}
                    <strong>Jennie</strong> gần như đạt tới độ hoàn hảo nhất với
                    bờ vai "móc treo" nuột nà, vòng hai siêu nhỏ cùng đôi chân
                    săn chắc. Vậy nên, cô thường được stylist cho diện crop-top
                    và chân váy ngắn để phô diễn tối đa những ưu điểm này. Đôi
                    lúc, cô cũng thay sơ mi bằng những item như áo trễ vai,
                    crop-top dài tay cho phong cách thêm phần đa dạng. Nhìn kiêu
                    ngạo, sang chảnh thế thôi chứ Jennie vẫn rất tích cực diện
                    đồ màu hồng ngọt ngào và đáng yêu đấy.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p></p>
                  <p>
                    Những bộ váy bodycon ngắn cũn hay chất liệu gợi cảm như da,
                    tất lưới cũng được <strong>Jennie</strong> ứng dụng vào thời
                    trang trình diễn. Thế nên, dù theo đuổi hình tượng quyến rũ
                    nhưng cảm giác nàng <strong>idol</strong> đem lại mỗi lần
                    lại khác nhau, không khiến người hâm mộ cảm thấy nhàm chán
                    hay bội thực. Song song với trang phục, mái tóc dài đen
                    tuyền, được duỗi thẳng cũng hỗ trợ Jennie có những giây phút
                    cháy hết mình trên sân khấu.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--20-737590.jpg")
                        .default
                    }
                    alt="11Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--21-488604.jpg")
                        .default
                    }
                    alt="12Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--22-103004.jpg")
                        .default
                    }
                    alt="13Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <p>
                    Quyến rũ, gợi cảm nhưng không phô phang mà trái lại, rất
                    sang trọng và thời thượng, bảo sao thỉnh thoảng fan vẫn tiếc
                    ngẩn ngơ khi ngắm nhìn những hình ảnh ngày xưa của cô nàng.
                  </p>

                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--23-921507.jpg")
                        .default
                    }
                    alt="14Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--24-750505.jpg")
                        .default
                    }
                    alt="15Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--25-360322.jpg")
                        .default
                    }
                    alt="16Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--26-124384.jpg")
                        .default
                    }
                    alt="17Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--27-066235.jpg")
                        .default
                    }
                    alt="18Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--28-006272.jpg")
                        .default
                    }
                    alt="19Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--29-328357.jpg")
                        .default
                    }
                    alt="20Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--30-275538.jpg")
                        .default
                    }
                    alt="21Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--31-490689.jpg")
                        .default
                    }
                    alt="22Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--32-934595.png")
                        .default
                    }
                    alt="23Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112719--33-934595.png")
                        .default
                    }
                    alt="24Jennie, Black Pink, Sao Han, Trang Phuc Trinh Dien, Outfit, Mac Dep, Idol, Kpop, "
                    note=""
                  />
                  <p>Ảnh: Sưu tầm</p>
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
