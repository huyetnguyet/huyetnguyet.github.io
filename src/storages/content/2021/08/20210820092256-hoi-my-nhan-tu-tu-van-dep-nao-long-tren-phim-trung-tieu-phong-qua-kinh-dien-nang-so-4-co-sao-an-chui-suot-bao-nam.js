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
"timestamp": '20/08/2021 09:22 AM',
"title": 'Hội mỹ nhân tự tử vẫn đẹp nao lòng trên phim Trung: Tiểu Phong quá kinh điển, nàng số 4 cớ sao ăn chửi suốt bao năm?',
"description": 'Những mỹ nhân cổ trang như Tiểu Phong hay Tố Tố đều lựa chọn tự tử vì tình.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/1-1629432816450506734363.png',
"alt": 'Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,',
"category": 'stars',
"date": '20/08/2021',
"time": '09:22 AM',
"link": '/hoi-my-nhan-tu-tu-van-dep-nao-long-tren-phim-trung-tieu-phong-qua-kinh-dien-nang-so-4-co-sao-an-chui-suot-bao-nam',
"zcomponent": 'page_20210820092256',
"filepath": './20210820092256-hoi-my-nhan-tu-tu-van-dep-nao-long-tren-phim-trung-tieu-phong-qua-kinh-dien-nang-so-4-co-sao-an-chui-suot-bao-nam.js'
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
  "Hội mỹ nhân tự tử vẫn đẹp nao lòng trên phim Trung: Tiểu Phong quá kinh điển, nàng số 4 cớ sao ăn chửi suốt bao năm?";
const author = "THÀNH VŨ,";
const source = "Trí Thức Trẻ";
const timestamp = "20/08/2021 09:22 AM";
const description =
  "Những mỹ nhân cổ trang như Tiểu Phong hay Tố Tố đều lựa chọn tự tử vì tình.";
const link =
  "hoi-my-nhan-tu-tu-van-dep-nao-long-tren-phim-trung-tieu-phong-qua-kinh-dien-nang-so-4-co-sao-an-chui-suot-bao-nam";
const tagparam = [
  "Đông Cung",
  "Tiểu Phong",
  "Mỹ nhân Hoa ngữ",
  "Tam Sinh Tam Thế Thập Lý Đào Hoa",
  "Diên Hi Công Lược",
  "Chân Hoàn Truyện",
  "tần lam",
  "nhiệt y trát",
  "Bành Tiểu Nhiễm",
  "Dương Mịch",
  "Trường An Như Cố",
  "Trường An Như Cố (2021)",
  "Châu Sinh Như Cố",
  "Châu Sinh Như Cố (2021)",
  "Bạch Lộc",
  "phim cổ trang",
  "phim trung quốc",
  "phim Hoa ngữ",
  "Phim truyền hình",
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

export default function page_20210820092256() {
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
                      Những mỹ nhân cổ trang như <strong>Tiểu Phong</strong> hay
                      Tố Tố đều lựa chọn tự tử vì tình.
                    </p>
                    <p>
                      Tình yêu thời cổ có muôn vàn đau đớn và đắng cay, nhất là
                      đối với các nữ nhân trẻ tuổi. Nhiều nữ chính{" "}
                      <strong>phim cổ trang</strong> Hoa ngữ đã không có được
                      cái kết đẹp cùng người mình yêu, thậm chí lựa chọn việc tự
                      vẫn. Có người ra đi thảnh thơi, có người để lại nỗi ai oán
                      không dứt. Vậy ai mới là mỹ nhân đẹp nhất, gây rung động
                      lòng người nhất khi tự vẫn?
                    </p>
                    <h5>
                      1. <strong>Tiểu Phong</strong> - Đông Cung
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/honeycam-2021-08-20-10-47-48-16294328281471539200190.gif"
                      alt="8, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/1-1629432816450506734363.png"
                      alt="1, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/photo-1-1629432167654250767119.jpg"
                      alt="2, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <p>
                      Ở tập cuối của <strong>Đông Cung</strong>,{" "}
                      <strong>Tiểu Phong</strong> (
                      <strong>Bành Tiểu Nhiễm</strong>) quyết rút cạn nước mắt
                      khán giả khi quyết định tự vẫn. Lý Thừa Ngân (Trần Tinh
                      Húc) vì muốn giành chiến thắng trong trận chiến với Đan Xi
                      nên đã lừa gạt Tiểu Phong. Cuối cùng, chính tay Lý Thừa
                      Ngân giết chết ông ngoại Tiểu Phong, khiến mẹ nàng tự sát
                      rồi hại chết Cố Kiếm - sư phụ của Tiểu Phong. Nước mất,
                      người thân cũng ra đi, Tiểu Phong tìm đến con đường tự
                      sát, để lại Lý Thừa Ngân sống trong cô độc đến suốt đời.
                    </p>
                    <h5>
                      2. Tố Tố (Bạch Thiến) - Tam Sinh Tam Thế: Thập Lý Đào Hoa
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/photo-1-1629432121396397420879.gif"
                      alt="9, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/photo-1-162943213255918921931.jpg"
                      alt="3, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <p>
                      Tam Sinh Tam Thế: Thập Lý Đào Hoa từng mang đến một màn tự
                      tử đầy ám ảnh của nữ chính Tố Tố (
                      <strong>Dương Mịch</strong>). Trong phim, vì ấm ức sau khi
                      bị Dạ Hoa (Triệu Hựu Đình) hiểu lầm, móc mắt Tố Tố đưa cho
                      Tố Cẩm, Tố Tố đã nhảy đài Tru Tiên tự vẫn. Nàng lựa chọn
                      ra đi để chứng minh sự trong sạch, cũng như kết thúc một
                      cuộc tình đầy khổ đau và ai oán. Phân đoạn Dương Mịch nhắm
                      mắt buông xuôi, nhảy xuống Tru Tiên Đài được xây dựng đẹp
                      đến đau lòng. Ngay cả màu sắc trang phục đen - trắng của
                      cặp chính cũng thể hiện rõ sự tương phản, trái ngược và
                      đối địch nhau.
                    </p>
                    <h5>3. Ninh tần - Chân Hoàn Truyện</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/2-16294328164781136803037.png"
                      alt="4, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/3-16294328167141899943901.png"
                      alt="5, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/honeycam-2021-08-20-11-13-04-1629432821876459937899.gif"
                      alt="10, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <p>
                      Sau khi giúp Chân Hoàn (Tôn Lệ) hạ độc Ung Chính (Trần
                      Kiến Bân), Ninh tần (<strong>Nhiệt Y Trát</strong>) đã có
                      quyết định tự vẫn. Trong khi tân hoàng đế đang làm lễ đăng
                      cơ, Chân Hoàn sắp lên ngôi Thái hậu, Ninh tần đã lặng lẽ
                      kết liễu đời mình trong nụ cười mãn nguyện. Sau cùng, cô
                      đã bảo vệ được nữ nhân mà "crush" mình yêu thương vô hạn,
                      vì vậy cũng bỏ thế gian mà đi theo chàng. Bên cạnh Ninh
                      tần thì Hoán Bích cũng là nhân vật đã tự vẫn để đi theo
                      Doãn Lễ.
                    </p>
                    <h5>4. Phú Sát hoàng hậu - Diên Hi Công Lược</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/photo-1-1629431941337270201307.png"
                      alt="7, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/photo-1-1629431954556830422043.gif"
                      alt="11, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <p>
                      Cảnh tự vẫn trong <strong>Diên Hi Công Lược</strong> đã
                      gây nên làn sóng tranh cãi, chỉ trích kịch liệt dù được
                      xây dựng khá diễm lệ và đau thương. Vì không chịu nổi sức
                      nặng của ngôi hậu, Phú Sát Dung Âm (
                      <strong>Tần Lam</strong>) đã âm thầm lên mái cung, nhảy
                      lầu tự vẫn. Tuy đã khiến khán giả khóc hết nước mắt nhưng
                      cảnh phim này lại "nhận gạch đá" vì xuyên tạc lịch sử.
                      Nhiều ý kiến cho rằng việc phi tần tự tử là tội khi quân,
                      dẫn đến nhiều hậu quả cho gia tộc. Thậm chí đây lại là
                      hoàng hậu đương triều thì việc tự tử sẽ càng khó dung thứ
                      hơn nữa. Phú Sát Dung Âm cũng bị phê phán là một hoàng hậu
                      nhu nhược, thiếu khí chất mẫu nghi thiên hạ.
                    </p>
                    <h5>5. Thôi Thời Nghi - Trường An Như Cố</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/photo-1-16294318008111392213211.gif"
                      alt="12, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/photo-1-16294318084811125542813.gif"
                      alt="13, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/photo-1-1629431818037842229256.gif"
                      alt="14, Đông Cung,Tiểu Phong,Mỹ nhân Hoa ngữ,Tam Sinh Tam Thế Thập Lý Đào Hoa,Diên Hi Công Lược,Chân Hoàn Truyện,tần lam,nhiệt y trát,Bành Tiểu Nhiễm,Dương Mịch,Trường An Như Cố,Trường An Như Cố (2021),Châu Sinh Như Cố,Châu Sinh Như Cố (2021),Bạch Lộc,phim cổ trang,phim trung quốc,phim Hoa ngữ,Phim truyền hình,"
                      note=""
                    />
                    <p>
                      Trường Anh Như Cố lên sóng chưa lâu, cư dân mạng đã lan
                      truyền cảnh cô dâu Châu Sinh Thần (
                      <strong>Bạch Lộc</strong>) mặc váy tân nương tự sát giữa
                      trời mưa tuyết. Sau khi mất đi Châu Sinh Thần (Nhậm Gia
                      Luân), nàng không còn thiết sống và tìm đến cái chết để
                      đoàn tụ cùng chàng. Cư dân mạng bày tỏ sự xúc động trước
                      cảnh quay, còn khen ngợi vì hình ảnh có tính thẩm mỹ cao
                      và tâm trạng dễ động lòng của Bạch Lộc. Sau cùng cặp đôi{" "}
                      <strong>Trường An Như Cố</strong> sẽ có kết cục bi thảm,
                      nhưng đừng quên Nhất Sinh Nhất Thế sẽ nối tiếp và vẽ nên
                      "happy ending" cho họ đấy!
                    </p>
                    <p>
                      <strong>Trường An Như Cố</strong> lên sóng từ thứ Tư đến
                      thứ Sáu hằng tuần.
                    </p>
                    <p>Nguồn ảnh: Tổng hợp</p>
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
