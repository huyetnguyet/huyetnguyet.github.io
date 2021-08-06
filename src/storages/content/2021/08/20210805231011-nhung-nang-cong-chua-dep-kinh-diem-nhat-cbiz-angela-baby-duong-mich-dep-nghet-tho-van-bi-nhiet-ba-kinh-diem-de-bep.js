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
"timestamp": '05/08/2021 11:10 PM',
"title": 'Những nàng công chúa đẹp kinh diễm nhất Cbiz: Angela Baby - Dương Mịch đẹp nghẹt thở, vẫn bị Nhiệt Ba diễm lệ "đè bẹp"',
"description": 'Vẫn biết dàn mỹ nhân Cbiz sở hữu nhan sắc hoàn hảo, tuy nhiên khi nhìn vào những lần Angela Baby, Địch Lệ Nhiệt Ba, Triệu Lệ Dĩnh,... dạo bước thảm đỏ với váy công chúa, dân tình vẫn xuýt xoa vì quá kinh diễm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ba6-1627980978769306097484.jpeg',
"alt": 'Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,',
"category": 'stars',
"date": '05/08/2021',
"time": '11:10 PM',
"link": '/nhung-nang-cong-chua-dep-kinh-diem-nhat-cbiz-angela-baby-duong-mich-dep-nghet-tho-van-bi-nhiet-ba-kinh-diem-de-bep',
"zcomponent": 'page_20210805231011',
"filepath": './20210805231011-nhung-nang-cong-chua-dep-kinh-diem-nhat-cbiz-angela-baby-duong-mich-dep-nghet-tho-van-bi-nhiet-ba-kinh-diem-de-bep.js'
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
  'Những nàng công chúa đẹp kinh diễm nhất Cbiz: Angela Baby - Dương Mịch đẹp nghẹt thở, vẫn bị Nhiệt Ba diễm lệ "đè bẹp"';
const author = "NHÃ AN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "05/08/2021 11:10 PM";
const description =
  "Vẫn biết dàn mỹ nhân Cbiz sở hữu nhan sắc hoàn hảo, tuy nhiên khi nhìn vào những lần Angela Baby, Địch Lệ Nhiệt Ba, Triệu Lệ Dĩnh,... dạo bước thảm đỏ với váy công chúa, dân tình vẫn xuýt xoa vì quá kinh diễm.";
const link =
  "nhung-nang-cong-chua-dep-kinh-diem-nhat-cbiz-angela-baby-duong-mich-dep-nghet-tho-van-bi-nhiet-ba-kinh-diem-de-bep";
const tagparam = [
  "Dương Mịch",
  "Angela Baby",
  "Lưu Diệc Phi",
  "Triệu Lộ Tư",
  "triệu lệ dĩnh",
  "quan hiểu đồng",
  "Cúc Tịnh Y",
  "sao Hoa ngữ",
  "Mỹ nhân Hoa ngữ",
  "nhan sắc mỹ nhân Hoa ngữ",
  "Địch Lệ Nhiệt Ba",
  "mỹ nhân",
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

export default function page_20210805231011() {
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
                      Làng giải trí xứ Trung luôn tự hào sở hữu dàn{" "}
                      <strong>mỹ nhân</strong> tài sắc vẹn toàn. Nét đẹp khả ái,
                      dịu dàng và ngọt ngào của các nữ thần nhan sắc Cbiz khiến
                      hàng triệu trái tim "gục ngã". Đặc biệt, rất nhiều nghệ sĩ
                      chọn cho mình phong cách công chúa kẹo ngọt, tranh nhau
                      khoe visual tựa búp bê trong các sự kiện lớn nhỏ.
                    </p>
                    <p>
                      Nhìn lại những hình ảnh diện đầm công chúa xinh như bước
                      ra từ truyện cổ tích, thật khó lòng có thể chọn ai là nữ
                      hoàng nổi bật nhất với phong cách này.{" "}
                    </p>
                    <p>
                      Với kinh nghiệm "chinh chiến" nhiều thảm đỏ trong và ngoài
                      nước, <strong>Angela Baby</strong> luôn vô cùng nổi bật
                      với gương mặt hoàn mỹ, đẹp không tì vết. Chiếc đầm hồng
                      này đã biến bà xã Huỳnh Hiểu Minh trở thành{" "}
                      <strong>mỹ nhân</strong> xứ Trung có màn "chặt chém" xuất
                      sắc nhất thảm đỏ MAMA 2018
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ba7-16279809794601540900944.jpeg"
                      alt="1, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Cô nàng cực kỳ hợp với phong cách dịu dàng này. Không chỉ thần thái lẫn khí chất, những bộ cánh do Angela Baby chọn lựa đều cực kỳ hút mắt về độ sang chảnh và tinh tế"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ba8-1627980979497597356116.jpeg"
                      alt="2, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Với lợi thế body nhỏ nhắn, Baby chẳng ngại ngần diện những bộ đầm công chúa đồ sộ. Nhờ đây, cô nàng trở nên nhân vật nổi bật nhất thảm đỏ sự kiện từ thiện Harpers Bazaar 2019"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279821908761132378396.jpg"
                      alt="3, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Tạo hình xuất sắc khiến Angela Baby trở thành phiên bản đời thực của công chúa Belle trong bộ phim hoạt hình Người Đẹp Và Quái Vật. Nhiều bình luận cho rằng, vì Baby mặc chiếc đầm này rồi nên sau này dù ai có mặc nó đi chăng nữa, visual và độ ấn tượng cũng không thể nào bằng nữ diễn viên"
                    />
                    <p>
                      Đầu đội vương miện, diện váy bồng xoè, Baby chính là người
                      đẹp có visual xuất sắc nhất nhì showbiz mỗi lần "lên đồ"
                      với tạo hình công chúa
                    </p>
                    <p>
                      Bà mẹ 1 con <strong>Dương Mịch</strong> cũng chẳng chịu
                      kém cạnh cô bạn thân thiết. Visual "đỉnh chóp" của Dương
                      Mịch khiến cô nàng trở nên dịu dàng, quyến rũ đến mức say
                      đắm lòng người
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/dm2-16279810897021445725855.jpeg"
                      alt="4, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Những bộ đầm đẹp xuất sắc nhường này càng tôn lên vóc dáng mảnh mai, thần thái sang chảnh của người đẹp"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/dm8-16279810897111014977035.jpeg"
                      alt="5, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Người hâm mộ cũng để lại nhiều bình luận dành cho stylist của Dương Mịch rằng hãy để cô ấy diện thật nhiều váy công chúa vì hình ảnh dịu dàng, lộng lẫy"
                    />
                    <p>
                      Tại sự kiện Tinh Quang Đại Thưởng 2020, cô nàng có màn
                      "chặt chém" xuất sắc với bộ đầm công chúa siêu nổi bật
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279811995511384799505.jpeg"
                      alt="6, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Chị đẹp cứ thế này thì dân tình chỉ biết xuýt xoa trầm trồ mà thôi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/nb8-16279812526251170658002.jpeg"
                      alt="7, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Nói về tạo hình công chúa xuất sắc nhất, không thể không kể đến Địch Lệ Nhiệt Ba. Cô nàng và bộ đầm hoa hồng này gây bão Weibo suốt 1 thời gian dài vì quá diễm lệ"
                    />
                    <p>
                      Visual đỉnh cao của nàng công chúa Tân Cương khiến các fan
                      "xỉu up xỉu down"
                    </p>
                    <p>
                      Từng khoảnh khắc tại sự kiện Tinh Quang Đại Thưởng 2020
                      đều gây dấu ấn mạnh mẽ trong lòng người hâm mộ. Thậm chí,
                      có người còn cho rằng, Nhiệt Ba hoàn toàn lấn lướt{" "}
                      <strong>Angela Baby</strong> nhờ visual, tố Baby "bắt
                      chước" tạo hình váy công chúa khổng lồ kèm vương miện đội
                      đầu
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/nb-1627981301140926952444.jpeg"
                      alt="8, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Từ một cô nàng có tạo hình nhẹ nhàng, đơn giản và thuần khiết,..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/nb2-1627981301151758067885.jpeg"
                      alt="9, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="... Nhiệt Ba có màn lột xác xuất thần với loạt khoảnh khắc đẹp và bắt mắt nhường này đây"
                    />
                    <p>
                      So với nhiều <strong>mỹ nhân</strong>,{" "}
                      <strong>Lưu Diệc Phi</strong> lại là nhân vật ít khi "lên
                      đồ" với đầm công chúa nhất, vậy nhưng mỗi lần cô nàng chọn
                      cho mình phong cách này, dân tình đều phải nín thở vì quá
                      xuất sắc
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ldp6-16279818948011789705345.jpeg"
                      alt="10, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Hình ảnh đẹp nhất khiến nữ thần họ Lưu gây ấn tượng mạnh với truyền thông quốc tế đó chính là buổi ra mắt bộ phim Mulan tại Mỹ năm 2020"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ldp7-1627981894821510367388.jpeg"
                      alt="11, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Không chỉ váy công chúa mà cả visual của cô nàng đều cực kỳ hoàn hảo"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ldp3-16279818948371688156188.jpeg"
                      alt="12, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Dân tình đều đồng ý rằng, Lưu Diệc Phi nên chọn những trang phục dịu dàng, tôn lên nước da và sắc vóc như thế này hơn"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi sinh con và trở lại đường đua showbiz,{" "}
                      <strong>Triệu Lệ Dĩnh</strong> khiến dân tình choáng ngợp
                      bởi hình ảnh "lên hương" ngút ngàn
                    </p>
                    <p>
                      Không chỉ nhan sắc và khí chất, ngay cả cách chọn trang
                      phục dự sự kiện, cô nàng cũng "lên trình" hơn rất nhiều
                      với nhiều kiểu tạo hình choáng ngợp
                    </p>
                    <p>
                      Tưởng rằng bị chê nhiều lần vì quá "phèn", ai dè cô nàng
                      này lại bung xõa visual đỉnh cao như thế này khi được lên
                      đồ
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279816807491371594619.jpg"
                      alt="13, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Từ sang trọng tới dễ thương, những bộ đầm công chúa kiểu này làm tôn lên nét đẹp như baby của nữ diễn viên họ Triệu"
                    />
                    <p>
                      Trước khi bị phong sát, Trịnh Sảng từng có khoảng thời
                      gian "tung hoành" khắp các sự kiện lớn nhỏ. Nhờ chăm chút
                      hình ảnh mà hình ảnh của cô nàng trở nên cực kỳ ấn tượng
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ts7-16279817552691621528268.jpg"
                      alt="14, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Trịnh Sảng bị chê 1 màu nhưng lại ghi điểm mạnh trước công chúng trong những bộ đầm lộng lẫy. Đây có lẽ chính là thời kỳ đỉnh cao của nữ diễn viên thị phi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ts-162798175527697851914.jpeg"
                      alt="15, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Sở hữu nhan sắc thanh thuần, rõ ràng, tạo hình này làm nổi bật visual của cô nàng"
                    />
                    <p>
                      "<strong>Mỹ nhân</strong> trà xanh"{" "}
                      <strong>Triệu Lộ Tư</strong> từng có bộ ảnh khiến khắp cõi
                      mạng nức nở
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279818339011087454995.png"
                      alt="16, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Từ visual..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/tlt3-1627981408185123548901.jpg"
                      alt="17, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="... cho tới bộ váy, đặc biệt là cách tạo dáng, đều gợi liên tưởng tới hình ảnh công chúa trong toà lâu đài sang trọng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/tlt6-16279814082662144061220.jpeg"
                      alt="18, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Cô nàng thị phi siêu hợp với phong cách có chút bánh bèo nhưng vô cùng khả ái này"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/tlt5-1627981408275413400588.jpeg"
                      alt="19, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Không hề kém cạnh hội chị em, Cúc Tịnh Y cũng đã xây dựng cho mình hình ảnh công chúa đài các, siêu sang với những mẫu váy ấn tượng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/tlt2-162798140822861751113.jpg"
                      alt="20, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Nhân dịp sinh nhật, cô nàng chiêu đãi các fan bằng bộ ảnh đẹp tới nghẹt thở, vừa khoe nhan sắc vừa khoe được vòng 1 ngồn ngộn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/tlt4-16279814082871377391276.jpeg"
                      alt="21, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Quả thật, những bộ váy công chúa đã có công giúp nhan sắc cô nàng trở nên quyến rũ, cuốn hút hơn rất nhiều"
                    />
                    <p>
                      "<strong>Mỹ nhân</strong> 4000 năm" gây sốt với hình ảnh
                      trong trẻo, thanh thuần
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ctyy10-1627981555927173876543.jpeg"
                      alt="22, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Quan Hiểu Đồng là đối thủ đáng gờm trong cuộc đua tranh sắc vóc khốc liệt tại thảm đỏ các sự kiện"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ctyy2-1627981555943686110278.jpeg"
                      alt="23, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Cô nàng luôn chọn cho mình những bộ cánh nổi bật, khoe trọn vẹn lợi thé sắc vóc"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ctyy4-1627981555958600474325.jpeg"
                      alt="24, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="Từ công chúa trong sáng, ngây thơ..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ctyy3-16279815559751007094054.jpeg"
                      alt="25, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note="... cô nàng khiến dân tình á ố trầm trồ với bộ ảnh hoá thành công chúa bóng đêm sexy ngút ngàn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ba6-1627980978769306097484.jpeg"
                      alt="26, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ba19-1627980979995962884664.jpeg"
                      alt="27, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/dm-16279810896582038333623.jpeg"
                      alt="28, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279811190651692358698.jpg"
                      alt="29, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/nb14-1627981252662168185097.jpg"
                      alt="30, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/nb10-1627981252675636913414.jpeg"
                      alt="31, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ldp2-1627981894764444807436.jpeg"
                      alt="32, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/tld-1627981615157672069307.jpg"
                      alt="33, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/tld5-1627981615227664510766.jpeg"
                      alt="34, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279816556611928802807.jpg"
                      alt="35, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ts3-1627981755147474549417.png"
                      alt="36, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279817968191025367654.jpg"
                      alt="37, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/ctyy-1627981555880616957146.jpeg"
                      alt="38, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/qhd2-1627981964726430448477.png"
                      alt="39, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/qhd3-162798196473726765929.jpeg"
                      alt="40, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279820792841835376757.jpg"
                      alt="41, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-1627982059558761472242.jpg"
                      alt="42, Dương Mịch,Angela Baby,Lưu Diệc Phi,Triệu Lộ Tư,triệu lệ dĩnh,quan hiểu đồng,Cúc Tịnh Y,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,Địch Lệ Nhiệt Ba,mỹ nhân,"
                      note=""
                    />
                    <p>Nguồn ảnh: Weibo</p>
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
