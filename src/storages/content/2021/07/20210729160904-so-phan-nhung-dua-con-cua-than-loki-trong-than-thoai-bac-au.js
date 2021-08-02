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
"timestamp": '29/07/2021 04:09 PM',
"title": 'Số phận những đứa con của thần Loki trong thần thoại Bắc Âu',
"description": 'Trong thần thoại Bắc Âu, Loki là nhân vật độc đáo và khó hiểu khi vừa giúp đỡ vừa phá hoại các vị thần. Cuộc chiến Ragnarok cũng bắt nguồn từ Loki và những đứa con.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/the-children-of-loki-e28094-norse-mythology-explained-16250469800041162828921.jpg',
"alt": 'KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,',
"category": 'news',
"date": '29/07/2021',
"time": '04:09 PM',
"link": '/so-phan-nhung-dua-con-cua-than-loki-trong-than-thoai-bac-au',
"zcomponent": 'page_20210729160904',
"filepath": './20210729160904-so-phan-nhung-dua-con-cua-than-loki-trong-than-thoai-bac-au.js'
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
const title = "Số phận những đứa con của thần Loki trong thần thoại Bắc Âu";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:09 PM";
const description =
  "Trong thần thoại Bắc Âu, Loki là nhân vật độc đáo và khó hiểu khi vừa giúp đỡ vừa phá hoại các vị thần. Cuộc chiến Ragnarok cũng bắt nguồn từ Loki và những đứa con.";
const link = "so-phan-nhung-dua-con-cua-than-loki-trong-than-thoai-bac-au";
const tagparam = [
  "KHÁM PHÁ",
  "THẦN THOẠI",
  "THẦN THOẠI BẮC ÂU",
  "THOR",
  "LOKI",
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

export default function page_20210729160904() {
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
                  <p>
                    <strong>Thần thoại</strong> cho biết <strong>Loki</strong>{" "}
                    có 7 đứa con với hai người vợ và một con ngựa đực. Trong đó,
                    hai đứa con bình thường chỉ được nhắc đến sau sự kiện Loki
                    làm hại thần Balder, chúng liên quan trực tiếp đến hình phạt
                    mà Loki phải chịu. Tuy nhiên, tên của chúng thì hơi rắc rối
                    khi không thống nhất là Nari, Narfi hay Vali, song một điều
                    khá chắc chắn là chúng do Sigyn – người vợ đầu tiên của Loki
                    sinh ra.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/the-children-of-loki-e28094-norse-mythology-explained-16250469800041162828921.jpg"
                    alt="1, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,"
                    note=""
                  />
                  <p>
                    Một trong số hai đứa trẻ đã bị Odin biến thành sói và cắn
                    chết em trai mình. Ruột của đứa em xấu số được đem làm xích
                    trói <strong>Loki</strong> trên một tảng đá trong hang động.
                    Ngoài ra không có thêm miêu tả nào khác về cặp anh em, chúng
                    không nổi tiếng bằng những đứa con dưới đây của Loki.
                  </p>
                  <h5>
                    1. Sleipnir – Con trai của <strong>Loki</strong> và
                    Svathlifari
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/sleipnir-eight-legged-horse-of-odin-the-allfather-16250470043461043345747.png"
                    alt="2, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,"
                    note=""
                  />
                  <p>
                    Để gia cố lại Asgard, các vị thần đã thuê một tên khổng lồ
                    Jotnar xây dựng bức tường xung quanh lãnh địa.{" "}
                    <strong>Loki</strong> là người giúp các thần và tên khổng lồ
                    lập ra thỏa thuận. Theo đó, tên khổng lồ sẽ cố hoàn thành
                    công việc thật nhanh để cưới được nữ thần, điều mà các thần
                    không thể chấp nhận nổi và họ muốn hắn thất bại.
                  </p>
                  <p>
                    Khi chứng kiến tên khổng lồ có thể hoàn thành công việc đúng
                    hẹn, các vị thần đã dùng vũ lực đe dọa <strong>Loki</strong>
                    , khiến cho Loki phải nghĩ cách phá hoại công việc của gã
                    khổng lồ. Khi biết tên khổng lồ có một con ngựa thần chuyên
                    vận chuyển vật nặng, Loki bèn hóa thành một con ngựa cái ưa
                    nhìn nhằm làm phân tâm ngựa thần của tên khổng lồ. Kết quả
                    đúng như Loki dự tính, con ngựa thần đã đuổi theo ngựa cái,
                    khiến cho tên khổng lồ không thể xây xong tường đúng hạn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/sleipnir-eight-legged-horse-of-odin-the-allfather-2-1625047026215515981116.jpeg"
                    alt="3, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,"
                    note=""
                  />
                  <p>
                    Tuy nhiên, <strong>Loki</strong> – trong lốt ngựa cái – lại
                    không thoát được. Sau đó Loki có thai và sinh ra một con
                    ngựa tám chân có tên Sleipnir. Con ngựa này sau đó trở thành
                    chiến mã của thần Odin với khả năng đi trên đất liền, trên
                    biển và không khí cũng như ngao du giữa các cõi.
                  </p>
                  <h5>
                    2. Những đứa con của <strong>Loki</strong> và nữ khổng lồ
                    Angrbotha
                  </h5>
                  <p>
                    Những đứa con nổi tiếng nhất của <strong>Loki</strong> là
                    những đứa trẻ sinh ra trong cuộc hôn nhân với nữ khổng lồ
                    Angrbotha. Dù thơ Edda chỉ liệt kê con sói Fenrir là con của
                    Loki với Angrbotha, nhưng các bài thơ khác còn nhắc đến
                    Jormungand và Hel nữa.
                  </p>
                  <p>
                    Ban đầu những đứa trẻ được nuôi nấng ở Jotunheim, và khi các
                    thần Aesir biết về chúng, họ đã tiên tri về sự nguy hiểm lẫn
                    hiểm họa mà chúng đem lại. Nhưng có lẽ các vị thần e ngại
                    những đứa trẻ vì mẹ chúng thì ít mà vì cha chúng thì nhiều.
                  </p>
                  <p>
                    Để phòng ngừa hậu họa, thần Odin đã nghĩ ra những cách khác
                    nhau để xử trí chúng. Vị thần đưa Jormungandr xuống biển sâu
                    bao quanh Midgard (tên gọi của Trái Đất trong{" "}
                    <strong>thần thoại</strong> Bắc Âu). Hel xuống minh giới,
                    được trao quyền cai quản bất kỳ thứ gì được đưa đến thế giới
                    này và Fenrir bị xích lại.
                  </p>
                  <h5>Hel – Nữ thần minh giới</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/hel-e28094-goddess-of-the-underworld-16250470517771299565870-16250470715271939315852.jpeg"
                    alt="4, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,"
                    note=""
                  />
                  <p>
                    Hel, nữ thần cai quản thế minh giới hay thế giới Hel, là
                    nhân vật dữ tợn với vẻ ngoài nửa người sống nửa người chết.
                    Nàng thờ ơ với cả người sống lẫn người chết. Không có quá
                    nhiều miêu tả về Hel, nàng xuất hiện chủ yếu trong các tích
                    truyện kể về cái chết của thần quang minh Balder khi đồng ý
                    cho vị thần quay lại thế giới người sống nếu cả vũ trụ đều
                    khóc thương cho cái chết của thần.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Khi <strong>Loki</strong>, vị thần gián tiếp gây ra cái chết
                    cho Balder, không khóc thương, Hel đã giữ Balder ở lại minh
                    giới cho đến tận Ragnarok. Vai trò của Hel trong Ragnarok
                    vẫn khá mơ hồ, cũng không rõ liệu Hel còn sống sau sự kiện
                    này hay vẫn làm nhiệm vụ cai quản người chết.
                  </p>
                  <h5>Jormungandr – Mãng xà của Midgard</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/jormungandr-the-midgard-serpent-16250470891801444380834.png"
                    alt="5, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,"
                    note=""
                  />
                  <p>
                    Jormungandr, mãng xà ở Midgard, bị ném xuống biển lớn bao
                    quanh Midgard khi vẫn còn nhỏ. Cuối cùng, khi lớn lên thành
                    một mãng xà khổng lồ, Jormungandr uốn thân mình bao quanh
                    thế giới và tự cắn vào đuôi nó.
                  </p>
                  <p>
                    Dù có truyền thuyết kể rằng khi Jormungandr thả chiếc đuôi,
                    Ragnarok sẽ bắt đầu, nhưng vẫn có ít nhất hai lần
                    Jormungandr làm vậy trong những cuộc chạm trán với{" "}
                    <strong>Thor</strong>, khi nó nhô đầu ra khỏi làn nước trước
                    lúc Ragnarok diễn ra.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/jormungandr-the-midgard-serpent-and-thor-16250471415791056101728.png"
                    alt="6, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,"
                    note=""
                  />
                  <p>
                    Ở trận chiến cuối cùng, Jormungandr sẽ trồi lên từ biển cả
                    và phun nọc độc lên bầu trời. <strong>Thor</strong> và
                    Jormungandr sẽ đối đầu nhau, vị thần giết được mãng xà nhưng
                    lại bị trúng độc của nó. Sau khi bước đi 9 bước, Thor sẽ
                    chết.
                  </p>
                  <h5>Fenrir – Con sói</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/the-binding-of-wolf-fenrir-e28094-tyr--16250471640851590570563.jpeg"
                    alt="7, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,"
                    note=""
                  />
                  <p>
                    Fenrir là đứa con của <strong>Loki</strong> có liên quan đến
                    lời tiên tri khủng khiếp về cái chết của thần Odin. Ban đầu,
                    các vị thần giữ Fenrir ở lại cạnh họ để giám sát cẩn thận,
                    chỉ có thần Tyr đủ can đảm đến gần và cho con sói ăn. Tuy
                    nhiên, Fenrir lớn quá nhanh, giống như Jormungandr, nên các
                    vị thần quyết định rằng nó không thể ở lại Asgard nữa.
                  </p>
                  <p>
                    Thay vì để Fenrir đi tự do, họ quyết định xiềng nó lại bằng
                    những sợi xích. Ban đầu, các thần tạo ra một sợi xích chắc
                    chắn rồi đem đến chỗ Fenrir và nói với nó rằng muốn thử xem
                    sức mạnh của nó ra sao. Con sói biết các thần nói dối, nhưng
                    vẫn đồng ý để họ xiềng nó lại. Fenrir hơi gồng cơ, sợi xích
                    dễ dàng đứt lìa. Vì thế các thần lại chế ra sợi xích thứ
                    hai, chắc chắn gấp đôi so với sợi trước, nhưng vẫn không làm
                    khó được Fenrir.
                  </p>
                  <p>
                    Các vị thần càng thêm lo lắng, cuối cùng họ đến chỗ những
                    người lùn và yêu cầu những người lùn chế tác một sợi xích
                    chắc chắn nhất cửu giới bằng ma thuật. Những người lùn đồng
                    ý, họ tạo ra một tấm áo bằng 6 thứ là tiếng bước chân mèo,
                    râu của một người phụ nữ, rễ của núi, hơi thở của cá, gân
                    của một con gấu và nước dãi của một con chim.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/the-binding-of-wolf-fenrir-e28094-tyr-1-1-16250471837681966888681.jpeg"
                    alt="8, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,THOR,LOKI,"
                    note=""
                  />
                  <p>
                    Tấm áo ma thuật này được đưa đến chỗ Fenrir, nhưng con sói
                    ngay lập tức đánh hơi thấy điều bất thường, nó từ chối
                    choàng lên người nếu không có một vị thần đặt tay lên miệng
                    nó làm tin. Tất nhiên, chỉ có Tyr dám bước lên và đặt tay
                    vào miệng sói. Khi các thần phủ áo lên người Fenrir, nó cố
                    gắng thoát ra nhưng không thể, vậy là nó cắn lìa tay của
                    Tyr.
                  </p>
                  <p>
                    Fenrir bị đưa đến nơi vắng vẻ và xích vào một tảng đá. Miệng
                    nó bị cài một thanh kiếm nên không thể khép lại được, làm
                    nước dãi của nó chảy ra thành sông. Khi Ragnarok diễn ra, nó
                    sẽ được tự do. Fenrir chiến đấu với thần Odin, nó nuốt chửng
                    Odin trong trận chiến. Tuy nhiên, con trai của thần Odin là
                    Vidarr sẽ báo thù cho cha mình bằng cách dùng chiếc ủng đặc
                    biệt mở hàm Fenrir.
                  </p>
                  <p>
                    Chiếc ủng này được làm ra từ những mẩu da thừa mà con người
                    cắt ra từ giày của mình. Vì thế truyền thuyết nói rằng nếu
                    ai muốn giúp các thần thì hãy vứt những mẩu da thừa này đi.
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
