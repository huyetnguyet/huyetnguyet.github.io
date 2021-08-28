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
"timestamp": '28/08/2021 08:44 AM',
"title": 'Triệu Lệ Dĩnh và 2 lần gặp sự cố trang phục: Lúc tạo ra khoảnh khắc đẹp thổn thức, lúc bị "ném đá" không thương tiếc',
"description": 'Có thể nói đây là 2 sự cố trang phục đáng nhớ nhất của Triệu Lệ Dĩnh.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/trieu-le-dinh2-9521-1619503216-1629738867993870718151-16298976448131536415327.jpeg',
"alt": 'triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:44 AM',
"link": '/trieu-le-dinh-va-2-lan-gap-su-co-trang-phuc-luc-tao-ra-khoanh-khac-dep-thon-thuc-luc-bi-nem-da-khong-thuong-tiec',
"zcomponent": 'page_20210828084415',
"filepath": './20210828084415-trieu-le-dinh-va-2-lan-gap-su-co-trang-phuc-luc-tao-ra-khoanh-khac-dep-thon-thuc-luc-bi-nem-da-khong-thuong-tiec.js'
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
  'Triệu Lệ Dĩnh và 2 lần gặp sự cố trang phục: Lúc tạo ra khoảnh khắc đẹp thổn thức, lúc bị "ném đá" không thương tiếc';
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:44 AM";
const description =
  "Có thể nói đây là 2 sự cố trang phục đáng nhớ nhất của Triệu Lệ Dĩnh.";
const link =
  "trieu-le-dinh-va-2-lan-gap-su-co-trang-phuc-luc-tao-ra-khoanh-khac-dep-thon-thuc-luc-bi-nem-da-khong-thuong-tiec";
const tagparam = [
  "triệu lệ dĩnh",
  "sao Trung",
  "sao Hoa ngữ",
  "star style",
  "trang sức",
  "phụ kiện",
  "sự cố trang phục",
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

export default function page_20210828084415() {
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
                      Có thể nói đây là 2 <strong>sự cố trang phục</strong> đáng
                      nhớ nhất của <strong>Triệu Lệ Dĩnh</strong>.
                    </p>
                    <p>
                      Hồi tháng 4 năm nay, <strong>Triệu Lệ Dĩnh</strong> khiến
                      mạng xã hội Trung Quốc được phen bùng nổ với nhan sắc kiều
                      diễm tại sự kiện quảng bá cho thương hiệu đồng hồ
                      Longines. Nữ diễn viên mặc một bộ đầm trắng bồng xòe khoe
                      bả vai nhỏ nhắn, bộ váy đặc biệt ở chỗ đính thêm nhiều
                      nhành lá, tỏa ra xung quanh người Triệu Lệ Dĩnh, càng gợi
                      ra hình ảnh nàng tiên nhỏ xinh xắn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/trieu-le-dinh2-9521-1619503216-1629738867993870718151-16298976448131536415327.jpeg"
                      alt="1, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/img-bgt-2021-5e3d-knvsnuh4148331-1618829850-width700height917-16298976444521292329534.jpg"
                      alt="2, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />

                    <p>
                      Mỹ nhân họ Triệu tô điểm cho bộ đầm bằng một chiếc đồng hồ
                      dây da nâu và đôi khuyên tai đính đá màu đỏ sang trọng.
                      Nhưng không may trong lúc trò chuyện với MC, một bên
                      khuyên tai bỗng tuột ra, rơi trên xương quai xanh của{" "}
                      <strong>Triệu Lệ Dĩnh</strong>. Cô cũng không hề hoảng hốt
                      mà chỉ nhẹ nhàng cầm lấy khuyên tai để đeo lên lại.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/photo-1-1618590756677751925533-1-1629897644600862452055.gif"
                      alt="3, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/giphy-1-1618628207075267444690-16298976443871479520433.gif"
                      alt="4, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />

                    <p>
                      Ngay lập tức, đoạn video ngắn ghi lại khoảnh khắc vô tình
                      này nhanh chóng viral trên các trang mạng xã hội và diễn
                      đàn. Chiếc khuyên tai nằm ngay vị trí rất đẹp, trên xương
                      quai xanh nhỏ nhắn của <strong>Triệu Lệ Dĩnh</strong>, cho
                      ra đời bức ảnh khiến nhiều người xao xuyến. Bên cạnh những
                      lời tán thưởng cho nhan sắc thanh tú, ngọt ngào của cô,
                      netizen cũng dành nhiều lời khen cho cách ứng phó khi gặp
                      sự cố, rất bình tĩnh và điềm đạm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/photo-1-1618590780257433604819-1629897644752946975497.jpg"
                      alt="5, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/photo-1-16185907646881229603674-1629897644669532193434.jpg"
                      alt="6, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />

                    <p>
                      Tuy vậy, ngược về năm 2016, <strong>Triệu Lệ Dĩnh</strong>{" "}
                      cũng từng gặp <strong>sự cố trang phục</strong> trên sân
                      khấu nhưng kết quả lại không được suôn sẻ như hiện tại.
                      Hôm đó, cô đến tham dự tuyên truyền cho sự kiện như mọi
                      khi. Dĩnh bảo của thời đó gương mặt còn khá non nớt, phong
                      cách thời trang dĩ nhiên cũng không sang trọng như hiện
                      tại nhưng vẫn được coi là tạm ổn.
                    </p>
                    <p></p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cô diện bộ váy ôm thêu nổi hoa văn màu xanh, bên dưới lót
                      lớp vải nude, phối ngoài một tầng vải voan màu xanh nhạt
                      cùng tông dịu mắt, kết lại bằng đôi sandal cao gót. Dường
                      như lớp vải voan ở ngoài khá vướng chân, khiến người đẹp
                      di chuyển khó khăn nên các trợ lý phải liên tục ra sân
                      khấu hỗ trợ cô chỉnh sửa lại váy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/20160906010804933-16298987428701068342330.jpg"
                      alt="7, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/20160906010804683-1629897644044607566827.jpg"
                      alt="8, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />

                    <p>
                      Không chỉ có váy, trợ lý cũng phải giúp cô nàng chỉnh luôn
                      giày vì rõ ràng chúng rộng hơn size chân của cô kha khá.
                      Ngay trên sân khấu, trước mặt các khán giả và dàn khách
                      mời, trợ lý của nữ diễn viên phải loay hoay với bộ váy và
                      đôi giày khá lâu, ban đầu <strong>Triệu Lệ Dĩnh</strong>{" "}
                      còn lúng túng nhưng sau đó thì lấy lại được tinh thần tiếp
                      chuyện với MC.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/c090j49g00aj0003-16298976443021731955286.jpg"
                      alt="9, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/c090j3ap00aj0003-162989764411036902519.jpg"
                      alt="10, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/c090j3tv00aj0003-16298976442941043629208.jpg"
                      alt="11, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />

                    <p>
                      Sự việc này đã khiến <strong>Triệu Lệ Dĩnh</strong> nhận
                      về nhiều chê trách, fan cho rằng nữ diễn viên đã thiếu
                      chuyên nghiệp khi không chuẩn bị tốt trang phục, khiến bầu
                      không khí bị gián đoạn, mọi người ở đó cũng mất tập trung
                      khi trợ lý cứ liên tục ra vào sân khấu để chỉnh sửa trang
                      phục cho cô.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/c090j3nt00aj0003-1629897644157267491491.jpg"
                      alt="12, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/25/w020160906335968709294-1629897644817366705834.jpg"
                      alt="13, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,trang sức,phụ kiện,sự cố trang phục,"
                      note=""
                    />

                    <p>
                      May mắn là <strong>Triệu Lệ Dĩnh</strong> đã rút kinh
                      nghiệm và không để tình huống tương tự xảy ra nữa, duy chỉ
                      có chuyện mang giày rộng thì tới nay cô vẫn chưa cải thiện
                      được, chân nhỏ quá cũng khổ tâm thật.
                    </p>
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
