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
"timestamp": '13/08/2021 10:39 PM',
"title": 'Sự thật rùng rợn về 100 đứa trẻ nằm trong lăng mộ của Từ Hi Thái Hậu, hé lộ tội ác gây phẫn nộ',
"description": 'Từ Hi Thái Hậu lúc sinh thời lo sợ bản thân gặp báo ứng vì những tội ác mà mình gây ra nên đã có quyết định độc ác khiến người đời căm phẫn.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-1-16288431430061464206998.jpg',
"alt": 'Từ Hi thái hậu,người phụ nữ quyền lực,phụ nữ quyền lực,triều đại nhà Thanh,Tần Thủy Hoàng,trường sinh bất lão,lao động khổ sai,',
"category": 'news',
"date": '13/08/2021',
"time": '10:39 PM',
"link": '/su-that-rung-ron-ve-100-dua-tre-nam-trong-lang-mo-cua-tu-hi-thai-hau-he-lo-toi-ac-gay-phan-no',
"zcomponent": 'page_20210813223932',
"filepath": './20210813223932-su-that-rung-ron-ve-100-dua-tre-nam-trong-lang-mo-cua-tu-hi-thai-hau-he-lo-toi-ac-gay-phan-no.js'
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
  "Sự thật rùng rợn về 100 đứa trẻ nằm trong lăng mộ của Từ Hi Thái Hậu, hé lộ tội ác gây phẫn nộ";
const author = "PHAN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "13/08/2021 10:39 PM";
const description =
  "Từ Hi Thái Hậu lúc sinh thời lo sợ bản thân gặp báo ứng vì những tội ác mà mình gây ra nên đã có quyết định độc ác khiến người đời căm phẫn.";
const link =
  "su-that-rung-ron-ve-100-dua-tre-nam-trong-lang-mo-cua-tu-hi-thai-hau-he-lo-toi-ac-gay-phan-no";
const tagparam = [
  "Từ Hi thái hậu",
  "người phụ nữ quyền lực",
  "phụ nữ quyền lực",
  "triều đại nhà Thanh",
  "Tần Thủy Hoàng",
  "trường sinh bất lão",
  "lao động khổ sai",
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

export default function page_20210813223932() {
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
                      <strong>Từ Hi Thái Hậu</strong> lúc sinh thời lo sợ bản
                      thân gặp báo ứng vì những tội ác mà mình gây ra nên đã có
                      quyết định độc ác khiến người đời căm phẫn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-1-16288431430061464206998.jpg"
                      alt="1, Từ Hi thái hậu,người phụ nữ quyền lực,phụ nữ quyền lực,triều đại nhà Thanh,Tần Thủy Hoàng,trường sinh bất lão,lao động khổ sai,"
                      note=""
                    />
                    <p>
                      <strong>Từ Hi Thái Hậu</strong> (1835 - 1908) được mệnh
                      danh là{" "}
                      <strong>
                        người <strong>phụ nữ quyền lực</strong>
                      </strong>{" "}
                      và tàn ác nhất lịch sử phong kiến của Trung Quốc.
                    </p>
                    <p>
                      Vốn là người nắm giữ cương vị tối cao trong nhiều năm ở{" "}
                      <strong>triều đại nhà Thanh</strong>, bà đã làm rất nhiều
                      chuyện hoang đường, sát hại chúng sinh, thay đổi hướng
                      phát triển và làm cho triều đại này dần bị diệt vong.
                    </p>
                    <p>
                      Mãi đến lúc chết, vì để thỏa mãn nguyện vọng cá nhân, bà
                      tiếp tục dày vò dân chúng lầm than, bắt 100 đứa trẻ chưa
                      đến 10 tuổi phải cùng chết theo mình dưới nấm mồ.
                    </p>
                    <p>
                      Các hoàng đế thời phong kiến xa xưa rất chú trọng trong
                      việc hậu sự sau khi chết. Vì thế, khi khai quật các lăng
                      mộ, người ta thường thấy vô số vàng bạc châu báu được chôn
                      cất cùng thi thể của các vị vua chúa.
                    </p>
                    <p>
                      <strong>Từ Hi Thái Hậu</strong> cũng không ngoại lệ, bà đã
                      chuẩn bị mộ huyệt cho mình từ rất sớm. Lăng mộ được xây
                      dựng hoành tráng, cơ quan mật thất trùng trùng, hàng nghìn
                      hàng vạn vật phẩm quý báu xa hoa được dự trữ sẵn để làm
                      vật bồi táng.
                    </p>
                    <p>
                      Không giống như <strong>Tần Thủy Hoàng</strong> (vị bạo
                      chúa dành cả đời để tìm cách{" "}
                      <strong>trường sinh bất lão</strong>),{" "}
                      <strong>Từ Hi Thái Hậu</strong> nhận thức được con người
                      không thể chống lại mệnh trời, đồng thời bà cũng lo sợ bản
                      thân bị gặp báo ứng vì những tội ác mình đã gây ra lúc
                      sinh thời và bị ma quỷ đày đoạ sau khi chết.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-2-16288431453801712134669.jpg"
                      alt="2, Từ Hi thái hậu,người phụ nữ quyền lực,phụ nữ quyền lực,triều đại nhà Thanh,Tần Thủy Hoàng,trường sinh bất lão,lao động khổ sai,"
                      note=""
                    />

                    <p>
                      Sau khi tìm ra biện pháp giải quyết từ các quan đại thần
                      và đạo sĩ cao tay, bà ra lệnh bắt 100 đứa trẻ ở các hộ dân
                      lành và buộc chúng phải tham gia xây dựng lăng mộ cho bà.
                      Nguyên nhân là vì cho rằng trẻ nhỏ là những sinh linh
                      thuần khiết sạch sẽ nhất, có tác dụng thanh tẩy lăng mộ,
                      không cho ma quỷ lại gần.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trước hành động này, dân chúng phẫn nộ vì hành vi bắt
                      người vô cớ của triều đình nhưng không thể phản kháng vì
                      sợ bị liên lụy đến tính mạng. Những đứa trẻ bị bắt đi{" "}
                      <strong>lao động khổ sai</strong> dần dần không chịu nổi
                      và chết đi.
                    </p>
                    <p>
                      Khi lăng mộ hoàn thành, số trẻ sống sót chỉ đếm trên đầu
                      ngón tay và rồi cũng trở thành vật bồi táng cho{" "}
                      <strong>Từ Hi Thái Hậu</strong> để mãi mãi đi theo hầu hạ
                      và xua đuổi tà ma cho bà.
                    </p>
                    <p>
                      <strong>Từ Hi Thái Hậu</strong> đến lúc chết cũng sợ mình
                      gặp báo ứng. Vốn dĩ thế gian quả là một vòng luân hồi.
                      Không phải ma quỷ, mà chính là con người đã đến quấy rối
                      lăng mộ khiến bà không được toại nguyện.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-3-16288431448691590860781.jpg"
                      alt="3, Từ Hi thái hậu,người phụ nữ quyền lực,phụ nữ quyền lực,triều đại nhà Thanh,Tần Thủy Hoàng,trường sinh bất lão,lao động khổ sai,"
                      note=""
                    />
                    <p>
                      Đến năm 1928, băng trộm mộ Tôn Điện Anh đã lật tung khu mộ
                      của <strong>Từ Hi Thái Hậu</strong> và "cuỗm" đi hết toàn
                      bộ châu báu bên trong, ngay cả thi thể của vị hoàng hậu
                      quyền lực bậc nhất cũng bị chà đạp ngổn ngang bên cạnh và
                      bị lột sạch quần áo cùng mũ đội quý giá. Từ đó, sự thật về
                      100 đứa trẻ mất tích và những thi hài trẻ con xuất hiện
                      trong mộ Từ Hi Thái Hậu cũng được hé lộ.
                    </p>
                    <p>
                      Mãi đến những năm 80, các chuyên gia khảo cổ một lần nữa
                      khai quật lại lăng mộ của <strong>Từ Hi Thái Hậu</strong>{" "}
                      mới phát hiện bên trong hoàn toàn trống không, chỉ còn lại
                      thi thể lăn lóc không ngay ngắn. Đội chuyên gia tiến hành
                      khử độc trừ bụi, xử lí thi thể của bà. Đến đây, Từ Hi Thái
                      Hậu mới chính thức được an nghỉ.
                    </p>
                    <p>(Nguồn: Sohu, 163)</p>
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
