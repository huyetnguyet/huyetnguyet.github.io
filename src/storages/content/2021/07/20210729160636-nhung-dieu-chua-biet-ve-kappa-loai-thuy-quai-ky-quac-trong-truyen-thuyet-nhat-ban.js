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
"timestamp": '29/07/2021 04:06 PM',
"title": 'Những điều chưa biết về Kappa, loài thủy quái kỳ quặc trong truyền thuyết Nhật Bản',
"description": 'Câu chuyện về nguồn gốc của Kappa tuy rất đáng sợ nhưng cũng rất thú vị.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-162651927099224274309.jpg',
"alt": 'THỦY QUÁI,KAPPA,YÊU QUÁI,',
"category": 'news',
"date": '29/07/2021',
"time": '04:06 PM',
"link": '/nhung-dieu-chua-biet-ve-kappa-loai-thuy-quai-ky-quac-trong-truyen-thuyet-nhat-ban',
"zcomponent": 'page_20210729160636',
"filepath": './20210729160636-nhung-dieu-chua-biet-ve-kappa-loai-thuy-quai-ky-quac-trong-truyen-thuyet-nhat-ban.js'
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
  "Những điều chưa biết về Kappa, loài thủy quái kỳ quặc trong truyền thuyết Nhật Bản";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:06 PM";
const description =
  "Câu chuyện về nguồn gốc của Kappa tuy rất đáng sợ nhưng cũng rất thú vị.";
const link =
  "nhung-dieu-chua-biet-ve-kappa-loai-thuy-quai-ky-quac-trong-truyen-thuyet-nhat-ban";
const tagparam = ["THỦY QUÁI", "KAPPA", "YÊU QUÁI"];
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

export default function page_20210729160636() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <h5>
                    Hình dáng của <strong>thủy quái</strong> Kappa
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-162651927099224274309.jpg"
                    alt="1, THỦY QUÁI,KAPPA,YÊU QUÁI,"
                    note=""
                  />
                  <p>
                    {" "}
                    <strong>Thủy quái</strong> <strong>Kappa</strong> được biết
                    đến là loài sinh vật huyền thoại, không có thật, xuất hiện
                    nhiều trong văn hóa dân gian của Nhật Bản. Chúng được miêu
                    tả có ngoại hình chỉ như đứa trẻ nhỏ với vóc dáng gầy gò,
                    nhỏ bé.{" "}
                  </p>
                  <p>
                    Ngoài ra, <strong>Kappa</strong> sở hữu 1 chiếc mai cứng
                    trên lưng, giống như con rùa. Tuy nhỏ bé nhưng các chi của
                    Kappa đều vạm vỡ và miệng nhọn, da cứng như thằn lằn. Với
                    lớp da màu xanh quái dị, Kappa còn có thể thay đổi màu sắc
                    theo môi trường và 1 chiếc đĩa kỳ lạ ở trên đầu. Người ta
                    đồn rằng, cho đến khi nào vẫn còn nước trên chiếc đĩa đó thì
                    Kappa vẫn sở hữu sức mạnh muôn người khó địch.
                  </p>
                  <h5>Tính cách của Kappa</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-1626519445500105658949.jpg"
                    alt="2, THỦY QUÁI,KAPPA,YÊU QUÁI,"
                    note=""
                  />
                  <p>
                    <strong>Kappa</strong> được miêu tả là những sinh vật độc
                    ác, với một xu hướng nghịch ngợm quá đà và vô cùng bạo lực.
                    Chúng hay quấy rối người dân cũng như du khách và thách thức
                    người qua đường vào các trận đấu sumo theo sở thích của
                    mình. Nếu người thắng, họ sẽ được bình an ra đi, nhưng nếu
                    chẳng may không làm được thì cái giá phải trả chính là tính
                    mạng của bản thân.
                  </p>
                  <p>
                    Điểm đặc biệt của <strong>Kappa</strong> chính là cái đĩa
                    trên đầu. Nhờ vào chiếc đĩa, chúng sở hữu sức mạnh đags nể
                    và gần như không thể thua khi vẫn còn nước bên trong cái
                    đĩa. Thế nên, rất nhiều người đã bị thua trận và bị nó ăn
                    thịt, gây nên sự ám ảnh trong thời đại cổ xưa.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Dù vậy, không phải là không có cách thoát khỏi nó. Theo luật
                    chơi của sumo, trước mỗi khi trận đấu bắt đầu, 2 đấu thủ
                    phải cúi đầu chào nhau. Nếu nạn nhân bị{" "}
                    <strong>Kappa</strong> bắt có thể làm đổ hết nước trong cái
                    đĩa trên đầu thì nó sẽ trở nên yếu ớt vô cùng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-16265197618831057485760.jpg"
                    alt="3, THỦY QUÁI,KAPPA,YÊU QUÁI,"
                    note=""
                  />
                  <p>
                    Với tính tình thất thường, <strong>Kappa</strong> được miêu
                    tả là cư xử rất giống trẻ con. Nếu vào ngày đẹp trời, chúng
                    có thể òa khóc khi bị trêu chọc, cười vui khi được đối xử
                    tốt hoặc chuyên đầu têu những trò phá hoại, quấy nhiễu dân
                    làng. Tệ hơn nữa, chúng có thể tìm đến con người, giết chóc
                    chỉ để được ăn lá gan của họ.{" "}
                  </p>
                  <h5>"Thiên địch" của Kappa</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-2-16265192027401625598162.jpg"
                    alt="4, THỦY QUÁI,KAPPA,YÊU QUÁI,"
                    note=""
                  />
                  <p>
                    Trớ trêu thay, thứ khiến <strong>Kappa</strong> chết khiếp
                    lại vô cùng dễ dàng có thể tìm thấy - một quả dưa chuột.
                    Thật vậy, người Nhật cổ đại khi tiến đến khu sông nước một
                    mình và luôn nên đem theo 1 quả dưa chuột.
                  </p>
                  <p>
                    Lý do là bởi sở thích ăn uống khá kỳ lạ của loài{" "}
                    <strong>thủy quái</strong> này. Khác với ngoại hình đáng sợ,{" "}
                    <strong>Kappa</strong> lại thích các món ăn sạch sẽ, chẳng
                    hạn như trứng gà, táo xanh và đặc biệt là dưa chuột. Thậm
                    chí, Kappa sẵn sàng bỏ tất cả để có vài quả dưa chuột để
                    thỏa mãn đam mê. Chẳng vậy mà đến tận bây giờ, vẫn có nhiều
                    trẻ em khi đi bơi, tắm ở sông suối vẫn được người lớn dặn dò
                    nên mang theo mình 1 quả dưa chuột và thả xuống trước.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-3-16265192027861955581441.jpg"
                    alt="5, THỦY QUÁI,KAPPA,YÊU QUÁI,"
                    note=""
                  />
                  <p>
                    Mặc dù có ngoại hình hung dữ, xấu xí, đôi khi bạo lực và
                    quấy nhiễu dân làng nhưng <strong>Kappa</strong> cũng có một
                    mặt lương thiện. Theo truyền thuyết, chúng có tài năng tuyệt
                    vời đối với việc chữa bệnh cứu người, đặc biệt là xương.
                  </p>
                  <p>
                    Nếu một con <strong>Kappa</strong> bị bắt, nó sẽ cứu bệnh
                    giúp người bắt giữ để đổi lấy việc tự do. Đôi lúc, chúng
                    cũng thương xót những người khách bộ hành bị thương hoặc bị
                    bệnh mà chăm sóc họ vô điều kiện.
                  </p>
                  <p>
                    Cũng có thể vì thế mà <strong>Kappa</strong> đã trở thành
                    một trong những <strong>yêu quái</strong> - nhân vật dân
                    gian nổi tiếng nhất nhì trong văn hóa Nhật Bản. Chúng xuất
                    hiện từ trong thơ ca, tranh họa đến kịch nô Nhật hay thậm
                    chí cả trong phim ảnh.
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
