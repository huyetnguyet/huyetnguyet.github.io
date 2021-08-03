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
"timestamp": '31/07/2021 01:18 PM',
"title": 'Địch Lệ Nhiệt Ba lên xe hoa trong phim đến tận 6 lần, là "cô dâu" của loạt mỹ nam đình đám nhất xứ Trung',
"description": 'Địch Lệ Nhiệt Ba từng làm đám cưới với Cao Vỹ Quang, Đặng Luân, Hoàng Cảnh Du và sắp tới là Dương Dương.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/2208188983412207008871718384330042314919955n-1626843797190593941880-1627205190130937966228.jpeg',
"alt": 'Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),',
"category": 'stars',
"date": '31/07/2021',
"time": '01:18 PM',
"link": '/dich-le-nhiet-ba-len-xe-hoa-trong-phim-den-tan-6-lan-la-co-dau-cua-loat-my-nam-dinh-dam-nhat-xu-trung',
"zcomponent": 'page_20210731131823',
"filepath": './20210731131823-dich-le-nhiet-ba-len-xe-hoa-trong-phim-den-tan-6-lan-la-co-dau-cua-loat-my-nam-dinh-dam-nhat-xu-trung.js'
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
  'Địch Lệ Nhiệt Ba lên xe hoa trong phim đến tận 6 lần, là "cô dâu" của loạt mỹ nam đình đám nhất xứ Trung';
const author = "THU TRANG,";
const source = "Trí Thức Trẻ";
const timestamp = "31/07/2021 01:18 PM";
const description =
  "Địch Lệ Nhiệt Ba từng làm đám cưới với Cao Vỹ Quang, Đặng Luân, Hoàng Cảnh Du và sắp tới là Dương Dương.";
const link =
  "dich-le-nhiet-ba-len-xe-hoa-trong-phim-den-tan-6-lan-la-co-dau-cua-loat-my-nam-dinh-dam-nhat-xu-trung";
const tagparam = [
  "Phim truyền hình",
  "phim trung quốc",
  "phim truyền hình trung quốc",
  "Em Là Niềm Kiêu Hãnh Của Anh",
  "Địch Lệ Nhiệt Ba",
  "Dương Dương",
  "hoàng cảnh du",
  "Đặng Luân",
  "Cao Vỹ Quang",
  "Hạnh Phúc Trong Tầm Tay (2020)",
  "Tam Sinh Tam Thế Thập Lý Đào Hoa",
  "Tam Sinh Tam Thế Chẩm Thượng Thư",
  "Hạnh Phúc Trong Tầm Tay",
  "Em Là Niềm Kiêu Hãnh Của Anh (2021)",
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

export default function page_20210731131823() {
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
                      Cách đây ít ngày, trailer bộ phim{" "}
                      <strong>Em Là Niềm Kiêu Hãnh Của Anh</strong> gây sốt với
                      cảnh <strong>Địch Lệ Nhiệt Ba</strong> nắm tay{" "}
                      <strong>Dương Dương</strong> bước vào lễ đường. Mỹ nữ Tân
                      Cương mặc váy cưới hai dây, khoe khéo vòng 1 tròn đầy bên
                      cạnh chú rể điển trai Dương Dương. Hai người còn trao nhau
                      nụ hôn nồng cháy trong đám cưới.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/22341647226912668078391167865031980407245242n-16272051285771289392835.jpg"
                      alt="1, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note="Hình ảnh trích từ trailer Em Là Niềm Kiêu Hãnh Của Anh"
                    />
                    <p>
                      Cư dân mạng nhanh chóng chỉ ra{" "}
                      <strong>Địch Lệ Nhiệt Ba</strong> rất có duyên với váy
                      cưới. Cô không ít lần lên xe hoa trong phim, dù là phim cổ
                      trang hay hiện đại. Dù là tạo hình nào, nữ diễn viên vẫn
                      gây sốt vì nhan sắc ấn tượng.
                    </p>
                    <p>
                      <strong>Địch Lệ Nhiệt Ba</strong> suýt kết hôn ngay tập 1{" "}
                      <strong>Hạnh Phúc Trong Tầm Tay</strong>. Bộ váy cưới đuôi
                      cá khiến cư dân mạng mê mẩn
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/2206679353412207175538364985130469212528864n-16268437970451582081921-1627205190129989250354.jpeg"
                      alt="2, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note="Đến cuối phim cô thực sự kết hôn với Hoàng Cảnh Du"
                    />
                    <p>
                      <strong>Địch Lệ Nhiệt Ba</strong> mặc hỉ phục đỏ, thành
                      thân với "hoàng đế" Đông Hoa trong Tam Sinh Tam Thế Thập
                      Lý Đào Hoa
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/9907205129761909091324902098843899287044096o-1589942567126199729616-1627205471970524241731.jpg"
                      alt="3, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note="Đến Tam Sinh Tam Thế Chẩm Thượng Tư, cô thực sự làm vợ Đông Hoa trong trang phục xanh quý tộc"
                    />
                    <p>
                      Cô cũng từng được <strong>Đặng Luân</strong> cầu hôn và có
                      đám cưới viên mãn trong Nghìn Lẻ Một Đêm
                    </p>
                    <p>Bình luận của cư dân mạng:</p>
                    <RelationNewsInPage category={category} />
                    <p>
                      - <strong>Địch Lệ Nhiệt Ba</strong> là cô dâu của em.
                    </p>
                    <p>- Dù vậy cô ấy vẫn chưa cưới tôi một lần nào.</p>
                    <p>
                      - <strong>Địch Lệ Nhiệt Ba</strong> xinh không chịu nỗi.
                      Muốn cong vẹo luôn.
                    </p>
                    <p>- Chờ cô dâu Kiều của chúng tui nha.</p>
                    <p>
                      - Cô dâu Kiều Tinh Tinh xinh đẹp của chàng kỹ sư hàng
                      không Vu Đồ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/2208188983412207008871718384330042314919955n-1626843797190593941880-1627205190130937966228.jpeg"
                      alt="4, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/b6ed-itvqcca4966781-158990714336769417302-1627205471972379958571.jpg"
                      alt="5, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/953c-itvqcca4966782-15899071433691048595995-16272054719721131002070.jpg"
                      alt="6, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/974548622976264349125146350747593694773248n-1589942567136647854124-16272054719731188138042.png"
                      alt="7, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/152947bandicam20200622144747843-16272056268121553089756-16272057001981711708252.jpg"
                      alt="8, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/tap-cuoi-hanh-phuc-trong-tam-tay-nhiet-ba-nhay-nhot-khieu-goi-ben-hoang-canh-du-dam-cuoi-dep-nhu-mo-1ad-5046245-16272056268031693609396-16272057239901125512359.png"
                      alt="9, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/tap-cuoi-hanh-phuc-trong-tam-tay-nhiet-ba-nhay-nhot-khieu-goi-ben-hoang-canh-du-dam-cuoi-dep-nhu-mo-260-5046245-16272056267941347283781-16272057423411204225080.png"
                      alt="10, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/22451991826912669711724332823609102233293409n-16272057838331700541629.jpg"
                      alt="11, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/22377211326912668745057764093206976217389148n-16272058303711622837139.jpg"
                      alt="12, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/3761993310304269771377371871850273488502784n-1627206067612265542324.jpg"
                      alt="13, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/376263031030426963804405265747485077536768n-1627206067613902343084.jpg"
                      alt="14, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/3767825110304269871377368761505478774620160n-16272060676151602797573.jpg"
                      alt="15, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/22422661326912670011724306543153998880439401n-16272060744741088885985.jpg"
                      alt="16, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Em Là Niềm Kiêu Hãnh Của Anh,Địch Lệ Nhiệt Ba,Dương Dương,hoàng cảnh du,Đặng Luân,Cao Vỹ Quang,Hạnh Phúc Trong Tầm Tay (2020),Tam Sinh Tam Thế Thập Lý Đào Hoa,Tam Sinh Tam Thế Chẩm Thượng Thư,Hạnh Phúc Trong Tầm Tay,Em Là Niềm Kiêu Hãnh Của Anh (2021),"
                      note=""
                    />
                    <p>Nguồn: Cbiz - Weibo Vtrans</p>
                    <p>Nguồn ảnh: Tổng hợp</p>
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
