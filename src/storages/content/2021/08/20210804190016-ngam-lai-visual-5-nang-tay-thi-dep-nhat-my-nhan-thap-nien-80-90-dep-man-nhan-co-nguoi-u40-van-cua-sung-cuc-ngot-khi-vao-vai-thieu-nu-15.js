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
"timestamp": '04/08/2021 07:00 PM',
"title": 'Ngắm lại visual 5 nàng Tây Thi đẹp nhất: Mỹ nhân thập niên 80 - 90 đẹp mãn nhãn, có người U40 vẫn "cưa sừng" cực ngọt khi vào vai thiếu nữ 15',
"description": 'Đây chính là những nàng Tây Thi để lại dấu ấn sâu đậm trong lòng khán giả bởi tạo hình xuất thần.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-1628042726013449816725.jpg',
"alt": 'Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,',
"category": 'news',
"date": '04/08/2021',
"time": '07:00 PM',
"link": '/ngam-lai-visual-5-nang-tay-thi-dep-nhat-my-nhan-thap-nien-80-90-dep-man-nhan-co-nguoi-u40-van-cua-sung-cuc-ngot-khi-vao-vai-thieu-nu-15',
"zcomponent": 'page_20210804190016',
"filepath": './20210804190016-ngam-lai-visual-5-nang-tay-thi-dep-nhat-my-nhan-thap-nien-80-90-dep-man-nhan-co-nguoi-u40-van-cua-sung-cuc-ngot-khi-vao-vai-thieu-nu-15.js'
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
  'Ngắm lại visual 5 nàng Tây Thi đẹp nhất: Mỹ nhân thập niên 80 - 90 đẹp mãn nhãn, có người U40 vẫn "cưa sừng" cực ngọt khi vào vai thiếu nữ 15';
const author = "CHÚ CÁ TRÊ X CHIM VÀNH KHEN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "04/08/2021 07:00 PM";
const description =
  "Đây chính là những nàng Tây Thi để lại dấu ấn sâu đậm trong lòng khán giả bởi tạo hình xuất thần.";
const link =
  "ngam-lai-visual-5-nang-tay-thi-dep-nhat-my-nhan-thap-nien-80-90-dep-man-nhan-co-nguoi-u40-van-cua-sung-cuc-ngot-khi-vao-vai-thieu-nu-15";
const tagparam = [
  "Tây Thi",
  "đồng lệ á",
  "Tưởng Cần Cần",
  "Tây Thi Bí Sử",
  "star style",
  "Makeup",
  "tạo hình nhân vật",
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

export default function page_20210804190016() {
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
                      Trong thời kỳ cổ đại Trung Quốc, <strong>Tây Thi</strong>{" "}
                      được mệnh danh là một trong tứ đại mỹ nhân, sở hữu nhan
                      sắc chim sa cá lặn. Cũng chính vì vậy mà nhân vật này luôn
                      là nguồn cảm hứng bất tận của các nhà làm phim Hoa ngữ
                      trong nhiều thập kỷ qua. Ở mỗi phiên bản, đạo diễn và nhà
                      sản xuất lại có những tiêu chí khác nhau đối với "nàng Tây
                      Thi" của mình. Cùng điểm lại 5 gương mặt tiếng tăm đã
                      giành được hào quang từ vai diễn này nhé.
                    </p>
                    <h5>Đổng Trí Chi (Tây Thi 1983)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-1628042726013449816725.jpg"
                      alt="1, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Nàng <strong>Tây Thi</strong> trong phiên bản phim năm
                      1983 được khán giả một thời nhận định là "như bước từ
                      trong tranh ra", đó là người đẹp Đổng Trí Chi. Thời điểm
                      vào vai, cô còn rất trẻ, chỉ mới 23 tuổi nhưng đã sở hữu
                      nét đẹp đằm thắm, đôi mắt long lanh biết nói và gương mặt
                      thanh thoát.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-16278172794551280982753.jpg"
                      alt="2, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-16278171692861915361780.jpg"
                      alt="3, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Tạo hình lông mày lá liễu thanh mảnh kiểu cổ điển, sống
                      mũi cao cùng đường nét gương mặt đậm nét Á đông, tóc bới,
                      trâm cài và chuỗi ngọc đeo trên đầu giúp nhân vật{" "}
                      <strong>Tây Thi</strong> do Đồng Trí Chi thủ vai ghi dấu
                      trong lòng khán giả với nét yêu kiều, mong manh đậm chất
                      thiếu nữ trong tranh.
                    </p>
                    <h5>Tưởng Cần Cần (Tây Thi 1995)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-1627981059163136562021.jpg"
                      alt="4, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Trước khi tham gia bộ phim truyền hình năm 1995 về{" "}
                      <strong>Tây Thi</strong>, <strong>Tưởng Cần Cần</strong>{" "}
                      đã là tên tuổi "nhẵn mặt" của làng phim cổ trang Hoa ngữ
                      bởi nét đẹp thần tiên thanh tao khó ai có được. Nàng Tây
                      Thi do Tưởng Cần Cần thủ vai ghi dấu với vẻ "thuần khiết
                      như nước, đẹp buồn như một giấc mộng".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-162798107063275478582.jpg"
                      alt="5, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-16279811677661047911836.jpg"
                      alt="6, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Người đẹp sở hữu làn da trắng hồng, đôi mắt sáng long
                      lanh, ánh nhìn luôn e ấp như ngân ngấn nước. Nét đẹp thanh
                      tú tựa ngọc nữ cộng thêm style <strong>makeup</strong>{" "}
                      tông cam siêu nhẹ nhàng đã giúp cô chiếm trọn tình cảm của
                      khán giả. Mặc dù <strong>Tây Thi</strong> đã được remake
                      lại nhiều bản, nhưng Tây Thi phiên bản năm 1995 với tạo
                      hình cổ điển có phần hương xưa, giản dị và kém lộng lẫy,{" "}
                      <strong>Tưởng Cần Cần</strong> vẫn luôn được nhận định là
                      nàng Tây Thi đẹp nhất màn ảnh.
                    </p>

                    <RelationNewsInPage category={category} />
                    <h5>Tào Dĩnh (Cổ Ngô Xuân Thu)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/1/photo-1-16278161407291327683828.jpg"
                      alt="7, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Năm 1997, Tào Dĩnh vào vai <strong>Tây Thi</strong> trong
                      bộ phim Cổ Ngô Xuân Thu khi nhan sắc đang ở giai đoạn đỉnh
                      cao nhất. Tuy nhân vật Tây Thi bị cho là ít đất diễn, song
                      tạo hình cùng sự thể hiện của người đẹp trong bộ phim này
                      vẫn để lại ấn tượng sâu sắc trong lòng công chúng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-1627817549434143297768.jpg"
                      alt="8, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-16278176164441176182167.jpg"
                      alt="9, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      <strong>Tây Thi</strong> Tào Dĩnh xuất hiện với tạo hình
                      sắc sảo, lông mày mảnh, điểm nhấn ở đôi mắt sâu với đường
                      kẻ mắt dài và đậm, phụ kiện đội đầu lộng lẫy cùng son môi
                      đỏ, Tào Dĩnh phác hoạ rõ nét nàng Tây Thi đoan trang nhưng
                      không kém phần đằm thắm. Được xem là "đệ nhất mỹ nhân cổ
                      trang", chẳng trách màn hoá thân của Tào Dĩnh lại yêu kiều
                      đến vậy.
                    </p>
                    <h5>Ổ Tĩnh Tĩnh (Tây Thi Bí Sử)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-16278216467131245094519.jpg"
                      alt="10, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-1627821606245976678763.jpg"
                      alt="11, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Với vẻ đẹp thanh tao, dù từng bị netizen la ó 1 thời khi
                      cho rằng không hợp vai, Ổ Tĩnh Tĩnh vẫn vào vai{" "}
                      <strong>Tây Thi</strong> một cách ngọt lịm trong bộ phim{" "}
                      <strong>Tây Thi Bí Sử</strong>. Trong phim, người đẹp
                      thường diện các trang phục có màu sắc thanh thuần, tươi
                      sáng như trắng, rực rỡ như vàng, đỏ... tạo nên nét dịu
                      dàng cho nhân vật.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627981782222248117369.jpg"
                      alt="12, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627981791642222437301.jpg"
                      alt="13, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627981515070782519757.jpg"
                      alt="14, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />

                    <p>
                      Đôi mắt ngấn lệ, mái mưa mong manh cùng kiểu tóc bới nửa
                      có phần trẻ trung hơn các phiên bản cũ, Ổ Tĩnh Tĩnh dễ
                      dàng ghi dấu trong lòng công chúng đương thời.
                    </p>
                    <h5>Đồng Lệ Á (Hoán Khê Sa)</h5>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627980780388437677469.gif"
                      alt="15, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      <strong>Đồng Lệ Á</strong> là cái tên gây sốc nhẹ vào thời
                      điểm cô nhận vai <strong>Tây Thi</strong> trong bộ phim
                      Hoán Khê Sa. Lúc này cô đã... 37 tuổi, trong khi nhân vật
                      mới chỉ là thiếu nữ chưa đầy 16. Khác với những tạo hình
                      Tây Thi có phần kín đáo trước đó, trang phục của Đồng Lệ Á
                      có khoảng hở vừa phải trước ngực, tạo nét tươi trẻ, quyến
                      rũ hơn cho <strong>tạo hình nhân vật</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-16279809004261746467746.jpg"
                      alt="16, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      <strong>Tạo hình nhân vật</strong> lộng lẫy với phụ kiện
                      dát vàng, trang phục và son môi tông đỏ đằm thắm, dù gây
                      nhiều tranh cãi ở thời điểm đó nhưng khó có thể phủ nhận,
                      nhan sắc khuynh thành của nàng "mỹ nhân Tân Cương" vẫn gây
                      thương nhớ với khán giả màn ảnh nhỏ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627980933501582920905.jpg"
                      alt="17, Tây Thi,đồng lệ á,Tưởng Cần Cần,Tây Thi Bí Sử,star style,Makeup,tạo hình nhân vật,"
                      note=""
                    />
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
