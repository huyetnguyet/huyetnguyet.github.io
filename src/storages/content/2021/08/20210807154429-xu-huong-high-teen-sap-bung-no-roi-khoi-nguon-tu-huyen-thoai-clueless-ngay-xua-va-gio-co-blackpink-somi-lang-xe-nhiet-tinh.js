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
"timestamp": '07/08/2021 03:44 PM',
"title": 'Xu hướng high teen sắp bùng nổ rồi: Khởi nguồn từ huyền thoại Clueless ngày xưa và giờ có BLACKPINK, Somi lăng xê nhiệt tình',
"description": 'Dường như đây sẽ là phong cách làm mưa làm gió trong thời gian tới.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/tumblrbe1d056d31ad36418533bf69ce786e02bae8c4a2540-16283151099122001578213.gif',
"alt": 'somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,',
"category": 'stars',
"date": '07/08/2021',
"time": '03:44 PM',
"link": '/xu-huong-high-teen-sap-bung-no-roi-khoi-nguon-tu-huyen-thoai-clueless-ngay-xua-va-gio-co-blackpink-somi-lang-xe-nhiet-tinh',
"zcomponent": 'page_20210807154429',
"filepath": './20210807154429-xu-huong-high-teen-sap-bung-no-roi-khoi-nguon-tu-huyen-thoai-clueless-ngay-xua-va-gio-co-blackpink-somi-lang-xe-nhiet-tinh.js'
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
  "Xu hướng high teen sắp bùng nổ rồi: Khởi nguồn từ huyền thoại Clueless ngày xưa và giờ có BLACKPINK, Somi lăng xê nhiệt tình";
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "07/08/2021 03:44 PM";
const description =
  "Dường như đây sẽ là phong cách làm mưa làm gió trong thời gian tới.";
const link =
  "xu-huong-high-teen-sap-bung-no-roi-khoi-nguon-tu-huyen-thoai-clueless-ngay-xua-va-gio-co-blackpink-somi-lang-xe-nhiet-tinh";
const tagparam = [
  "somi",
  "Black Pink",
  "clueless",
  "star style",
  "sao Hàn",
  "thời trang trong phim",
  "high teen",
  "hot trends",
  "hot trends 2021",
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

export default function page_20210807154429() {
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
                      Dường như đây sẽ là phong cách làm mưa làm gió trong thời
                      gian tới.
                    </p>
                    <p>
                      Sau một thời gian dài chuẩn bị, <strong>Somi</strong> đã
                      chính thức quay lại làng nhạc Kpop bằng MV DUMB DUMB xịn
                      xò. Bên cạnh giai điệu bắt tai, điều làm fan mê nhất ở lần
                      comeback này của Somi chính là visual "bá cháy", không góc
                      chết cùng thân hình đáng mơ ước. Lần này, Somi chọn mốt{" "}
                      <strong>high teen</strong> làm phong cách chủ đạo, trong
                      đó outfit nổi bật nhất là set đồ kẻ sọc màu xanh, layer
                      cùng sơ mi crop top màu trắng, kết hợp với mái tóc vàng
                      sành điệu giúp Somi trở thành nàng "queen bee" chanh sả
                      của trường học.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/tumblrbe1d056d31ad36418533bf69ce786e02bae8c4a2540-16283151099122001578213.gif"
                      alt="1, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/tumblr0598ad01a453ebaad59248828c696932d1bc415d500-16283151098101688936242.gif"
                      alt="2, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <p>
                      Có lẽ vì quá thích outfit trên nên <strong>Somi</strong>{" "}
                      đặt thêm một bộ kiểu dáng tương tự chỉ khác mỗi màu. Tuy
                      nhiên với set đồ màu vàng thì Somi phối phụ kiện ở tay cầu
                      kỳ hơn một chút, cụ thể cô nàng đã phối thêm găng tay ren
                      đen để ấn tượng hơn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/tumblr9445097c35791ef53c7cf2c68d93361a261b5c49540-16283151098591689751819.gif"
                      alt="3, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/somi-khien-dan-tinh-gato-khi-duoc-ca-dan-producer-cua-cong-ty-thi-pham-cach-cua-cam-trai-dep-cuc-gat-trong-mv-322-5940935-1628315109709544199124.gif"
                      alt="4, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <p>
                      Chắc hẳn những ai yêu thời trang cũng không lạ gì với
                      combo áo sơ mi + gilet ô trám dáng rộng + tennis skirt
                      đúng không? Thay vì chọn một chiếc gilet len thông thường,{" "}
                      <strong>Somi</strong> tạo điểm nhấn bằng họa tiết ô trám
                      màu sắc đính sequin cho thêm phần nổi bật. Băng đô đính nơ
                      giữa đầu cũng là phụ kiện gắn liền với phong cách nữ sinh
                      Âu Mỹ thời thượng này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/tumblr70557f0637000bede64ffc378171f2739645603a540-1628315109954612956394.gif"
                      alt="5, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/jeonsomidumbdumbmvshooting17-16283151103171687966140.jpg"
                      alt="6, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/jeonsomidumbdumbmvshooting6-16283151101131822893443.jpg"
                      alt="7, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <p>
                      Tất nhiên cũng không thể bỏ qua những chiếc miniskirt
                      quyến rũ. Ngoài ra thì thời trang trong MV cũng phảng phất
                      xu hướng thịnh hành những năm 60 và 70 như họa tiết kẻ ô,
                      áo cổ lọ, màu sắc nổi bật... Fan đang dự đoán phong cách
                      này sẽ rục rịch khuấy đảo Kpop lần nữa vì ở{" "}
                      <strong>Somi</strong> hội tụ đủ thần thái và body chuẩn
                      chỉnh để "cân" đẹp style này, hệt như cách đàn chị cùng
                      nhà BLACKPINK đã làm trước đây.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      4 cô nàng BLACKPINK thực sự đã khiến mốt{" "}
                      <strong>high teen</strong> bùng nổ ở Kpop. Ngay từ những
                      ngày đầu ra mắt, outfit trình diễn của các thành viên đã
                      đậm chất nữ sinh học đường ngổ ngáo và nổi loạn. Tất rách,
                      tất lưới, áo crop top rách, chân váy kẻ sọc tối màu, găng
                      tay, nơ hay cà vạt được stylist mix&match xuyên suốt giai
                      đoạn mới ra mắt đến năm 2018. Trong lần tham gia Knowing
                      Brothers vào cuối năm ngoái, Hắc Hường vẫn diện đồng phục
                      nhóm theo phong cách high teen với tông màu chủ đạo là màu
                      xám, còn mỗi nàng thì biến tấu một chút để thể hiện cá
                      tính thời trang của bản thân.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/blackpink-3-1628315244078693210146.jpg"
                      alt="8, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/49119726-20170809-075346-356f235105ad27f7ee0743f7f71378cf-pink-style-kpop-groups600x600-16283152438991887503681.jpg"
                      alt="9, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/ded0g3uxyaab1sk-1628315243216627567546.jpg"
                      alt="10, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/cf36173c9fa2013c1ebc3f7bc9be2489-1628315243299890493747.jpg"
                      alt="11, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <p>
                      Trong 4 nàng thì có lẽ Jennie là người nổi bật nhất với
                      phong cách này, hễ nhắc đến style{" "}
                      <strong>high teen</strong> trong Kpop thì cái tên Jennie
                      sẽ được "nảy số" đầu tiên. Ngoài thần thái con nhà giàu,
                      hình thể với vòng eo cực nhỏ, đôi chân nuột nà và bờ vai
                      "móc treo" của Jennie cực kỳ hợp với những item "đinh" của
                      phong cách này như chân váy xếp li hay crop top. Cũng vì
                      quá hợp và nổi bật với phong cách này mà thời đó, Jennie
                      luôn bị gán mác được thiên vị chuyện ăn mặc hơn các thành
                      viên còn lại.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/download2b252812529-4cd2-16283152445881917080092.gif"
                      alt="12, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/deo0hq1v0aayne-15907754420482014498118-1628315244538336733682.jpg"
                      alt="13, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/9ea88333cbca0ad21e69b3aa578dbd45-15907754420301573184780-16283152442881595354236.jpg"
                      alt="14, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/bao-phu-nu-1138-1628315244299244849331.jpg"
                      alt="15, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <p>
                      Nhưng nhắc đến phong cách <strong>high teen</strong> mà bỏ
                      qua nàng Cher trong <strong>Clueless</strong> thì chắc
                      chắn là lỗi khó lòng dung thứ. Có thể nói Clueless chính
                      là bộ phim giúp cho phong cách này bùng nổ, set đồ vàng kẻ
                      sọc của Cher đến nay vẫn là nguồn cảm hứng bất tận và được
                      đông đảo cô gái tái hiện lại, tiêu biểu là MV Fancy của
                      rapper Iggy Azalea. Mỗi outfit của Cher đều gợi cho người
                      ta muốn mặc ngay lập tức để có được được sự sang chảnh,
                      kiêu kỳ và "fancy" như cô. Nàng nào yêu mến phong cách
                      high teen hoặc mới nhập môn thời trang thì không được bỏ
                      qua Clueless đâu nhé!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/5b1817905e48ec1e008b4569-750-563-1567104185-1628315398935836207012.jpg"
                      alt="16, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/1476969996-rexfeatures-5883440u-1628315398690565037241.jpg"
                      alt="17, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/rexfeatures5883440p1-1628315398639766825296.jpg"
                      alt="18, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/clueless-outfits-260792-1529322171184-image700x0c-162831539869369171834.jpg"
                      alt="19, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/08898c7f6a6310aedcdb4f6ba1658b21-1628315398601343553259.jpg"
                      alt="20, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/sub-buzz-10926-1591643908-6-16283153984431085820189.jpeg"
                      alt="21, somi,Black Pink,clueless,star style,sao Hàn,thời trang trong phim,high teen,hot trends,hot trends 2021,"
                      note=""
                    />
                    <p>Ảnh: Sưu tầm</p>
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
