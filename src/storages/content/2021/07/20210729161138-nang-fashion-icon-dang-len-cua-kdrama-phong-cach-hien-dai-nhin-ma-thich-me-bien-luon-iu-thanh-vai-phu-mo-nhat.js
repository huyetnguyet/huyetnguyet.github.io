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
"timestamp": '29/07/2021 04:11 PM',
"title": 'Lâu lắm mới thấy 1 nữ phụ ăn mặc đến là duyên, chẳng chút mờ nhạt mà còn lấn át cả IU mới sợ!',
"description": 'Kang Han Na đang dần để lại ấn tượng về một nữ phụ sành điệu và nổi bật trong lòng khán giả.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/5/kanghan-nafull144064-16254838544811772504521.jpg',
"alt": 'Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:11 PM',
"link": '/nang-fashion-icon-dang-len-cua-kdrama-phong-cach-hien-dai-nhin-ma-thich-me-bien-luon-iu-thanh-vai-phu-mo-nhat',
"zcomponent": 'page_20210729161138',
"filepath": './20210729161138-nang-fashion-icon-dang-len-cua-kdrama-phong-cach-hien-dai-nhin-ma-thich-me-bien-luon-iu-thanh-vai-phu-mo-nhat.js'
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
  "Lâu lắm mới thấy 1 nữ phụ ăn mặc đến là duyên, chẳng chút mờ nhạt mà còn lấn át cả IU mới sợ!";
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/07/2021 04:11 PM";
const description =
  "Kang Han Na đang dần để lại ấn tượng về một nữ phụ sành điệu và nổi bật trong lòng khán giả.";
const link =
  "nang-fashion-icon-dang-len-cua-kdrama-phong-cach-hien-dai-nhin-ma-thich-me-bien-luon-iu-thanh-vai-phu-mo-nhat";
const tagparam = [
  "Kang Hana",
  "IU",
  "suzy",
  "hyeri",
  "sao Hàn",
  "phim Hàn",
  "drama",
  "Người tình ánh trăng",
  "khởi nghiệp",
  "Bạn Cùng Phòng Của Tôi Là Gumiho",
  "star style",
  "nữ phụ",
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

export default function page_20210729161138() {
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
                    Không phải là một diễn viên nổi tiếng, sự nghiệp từng có
                    giai đoạn chững lại khi rơi vào vụ kiện với công ty chủ
                    quản, Kang Han Na đang có những bước tiến chậm mà chắc trong
                    sự nghiệp của mình. Ngoài bộ phim{" "}
                    <strong>Bạn Cùng Phòng Của Tôi Là Gumiho</strong> đang phát
                    sóng, trước đó Han Na còn tham gia vào 2 bộ{" "}
                    <strong>drama</strong> nổi tiếng khác là{" "}
                    <strong>Người Tình Ánh Trăng</strong> và{" "}
                    <strong>Khởi Nghiệp</strong>. Nhờ ngoại hình ưa nhìn, đặc
                    biệt là khuôn mặt tròn nhỏ vừa đáng yêu, dễ thương nhưng
                    cũng không kém phần sắc sảo, lạnh lùng, Han Na nhiều lần
                    được nhận xét là "át vía" cả nữ chính.
                  </p>{" "}
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/5/kanghan-nafull144064-16254838544811772504521.jpg"
                    alt="1, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/1936598024680953478244101869087191671754240n-1625463883287157846760.jpg"
                    alt="2, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <p>
                    Đây đang là <strong>drama</strong> được đông đảo mọt phim
                    theo dõi nhờ nội dung cuốn hút và sự tương tác đáng yêu của
                    cặp đôi chính. Vào vai nàng cửu hồ ly Yang Hye Sun, Kang Han
                    Na nhận được nhiều chú ý nhờ ngoại hình sáng sủa và sang
                    chảnh. Ngoài những mẫu váy dài nữ tính, cô nàng Yang Hye Sun
                    còn tích cực lăng xê phong cách Preppy với set blazer và
                    chân váy, áo sơ mi, mini skirt, boot da cao qua cổ và băng
                    đô.{" "}
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/1929869771602718959938709211814415440718407n-1625463883163627353339.jpg"
                    alt="3, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/2022059271166236373023004710715659310883797n-162546388379661682230.jpg"
                    alt="4, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <p>
                    Preppy thường được nhớ tới như là thời trang đi học của hội
                    con nhà giàu, vậy nên khi đứng cạnh Lee Dam (
                    <strong>Hyeri</strong> thủ vai), một cô nàng ăn vận đơn
                    giản, bình thường với áo khoác denim, áo phông, quần jeans,
                    Yang Hye Sun nghiễm nhiên nổi bật hơn hẳn. Chưa kể mái tóc
                    dài, được uốn xoăn, chăm chút tỉ mỉ cũng giúp cô trội bật
                    hơn so với một Lee Dam để tóc ngắn đuôi vểnh.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/1978145411890401097758848829911163285059917n-1625463883415923149774.jpg"
                    alt="5, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/5/2013937121161374906842484356279917363154835n-16254638835241140998941.jpg"
                    alt="6, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/5/1972677345354806874617243389216546616424030n-16254638834211526152722.jpg"
                    alt="7, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <p>
                    Phân cảnh trong rạp chiếu phim cũng phần nào phản ánh được
                    thực trạng bị "át vía" của Lee Dam bởi Yang Hye Sun. Khuôn
                    mặt nhỏ nhắn, xinh đẹp cùng phong cách ăn mặc thời trang của
                    Hye Sun hoàn toàn nằm "chiếu trên" so với Lee Dam.{" "}
                  </p>
                  <p>
                    <strong>Người Tình Ánh Trăng</strong> chính là bộ{" "}
                    <strong>drama</strong> đưa Kang Han Na đến gần hơn với khán
                    giả Việt Nam. Trong phim, Kang Han Na vào vai nàng công chúa
                    Hwangbo Yeon Hwa độc ác và tâm cơ. Cô nàng là người chèn ép
                    Hae Soo (do <strong>IU</strong> thủ vai) đủ đường từ đầu
                    phim cho tới lúc gần kết phim. Tuy độc ác nhưng phần đông
                    khán giả vẫn thú nhận không thể ghét Yeon Hwa do cô quá đỗi
                    xinh đẹp. Tạo hình cổ trang của nhân vật công chúa Yeon Hwa
                    không chỉ được chăm chút với loạt trang phục thiết kế cầu
                    kỳ, màu sắc đa dạng mà còn ở kiểu tóc với loạt trâm cài đầu,
                    đính đá lộng lẫy.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/1d28fde1bf8a078141272cfdab2ea447-16254644708931168678262.jpg"
                    alt="8, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/ee6e09f2d6aa786f8f70e4b6f26db6d6-1625464470777632120487.jpg"
                    alt="9, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/kanghan-nafull74054-1625464470987237449926.jpg"
                    alt="10, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/base64-1625464948520417269241.png"
                    alt="11, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/cqgtcogumaattis-1625464809790807653334.jpg"
                    alt="12, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/b255b32e4d3b0bd2b8726d31a1a50616-1625464810088750058449.gif"
                    alt="13, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <p>
                    Trang phục luôn có màu sắc nổi bật, tóc thì luôn được vấn
                    cao, điểm xuyết đủ thứ phụ kiện, lại được trang điểm đậm và
                    sắc sảo hơn, bảo sao khán giả hay đùa dù <strong>IU</strong>{" "}
                    mới là nữ chính nhưng do tạo hình của cô quá hiền và đơn
                    giản nên lần nào đứng cạnh Kang Han Na trông IU cũng như
                    "cameo" của Kang Han Na.
                  </p>
                  <p></p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Trong số 3 bộ phim hôm nay, đây chính là bộ duy nhất Kang
                    Han Na không cướp mất vầng hào quang của nữ chính, âu cũng
                    bởi người đóng cùng không ai khác chính là "tình đầu quốc
                    dân" <strong>Suzy</strong>. Trong{" "}
                    <strong>Khởi Nghiệp</strong>, Kang Han Na vào vai Kwon In
                    Jae, chị ruột của Seo Dal Mi (do Suzy thủ vai). Lấy đề tài
                    những người trẻ khởi nghiệp, không riêng gì Kwon In Jae mà
                    các nhân vật khác đều có phong cách công sở khá đơn giản như
                    âu phục, sơ mi hay áo phông. Tuy vậy, nhân vật In Jae vẫn
                    nổi bật nhờ chọn các gam màu nổi như đỏ hoặc khéo chọn thiết
                    kế pha màu để tạo dấu ấn riêng.{" "}
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/12008867727250993910386688688659334516568127n-1625465041780910823835.jpg"
                    alt="14, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/1205398471853398730477801725192340177315048n-1625465042544502613891.jpg"
                    alt="15, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/1200442341922206223394832769938394400167176n-162546504228169301174.jpg"
                    alt="16, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/1199975683609578119489244205305338384666394n-16254650422751857245236.jpg"
                    alt="17, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <p>
                    Thế nhưng, vốn nổi tiếng với danh hiệu "nữ thần mặt mộc"
                    cùng khả năng lên đồ ổn áp, <strong>Suzy</strong> không hề
                    tỏ ra yếu thế trong những khung hình sánh đôi cùng Kang Han
                    Na. Thậm chí với tạo hình cột tóc thấp, diện suit đen, Suzy
                    lại càng chứng tỏ thần thái "không phải dạng vừa đâu" của
                    bản thân.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/1191891881657632018416537458504663731998265n-1625465042270949048822.jpg"
                    alt="18, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/12013743432164070117898464614404901355050534n-1625465042285452438195.jpg"
                    alt="19, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/5/start-up-rivalry-suzy-kang-han-na-1606358662-16254652207841480556624.jpg"
                    alt="20, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/5/start-up-rivalry-suzy-kang-han-na-1606358662-16254652207841480556624.jpg"
                    alt="21, Kang Hana,IU,suzy,hyeri,sao Hàn,phim Hàn,drama,Người tình ánh trăng,khởi nghiệp,Bạn Cùng Phòng Của Tôi Là Gumiho,star style,nữ phụ,"
                    note=""
                  />
                  <p>
                    Trong khi <strong>Suzy</strong> dễ dàng tạo thiện cảm với vẻ
                    ngoài trẻ trung, thanh thuần và trong trẻo thì Kang Han Na
                    lại hướng đến hình ảnh người phụ nữ hiện đại, độc lập và
                    sành điệu. Bên cạnh sức hút cá nhân, có thể thấy stylist khá
                    khéo léo. Nếu Han Na diện váy đỏ nổi bật thì chọn cho cô màu
                    son môi tông đất, nude trầm, còn Suzy với bộ suit xanh
                    pastel thì được tô son đỏ hồng tươi tắn, rạng rỡ hơn. Nhờ
                    vậy mà hai nhân vật không ai lấn át ai quá nhiều.
                  </p>
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
