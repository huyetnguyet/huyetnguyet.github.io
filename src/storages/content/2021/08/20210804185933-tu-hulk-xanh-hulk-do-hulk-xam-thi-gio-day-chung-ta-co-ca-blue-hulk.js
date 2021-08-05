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
"timestamp": '04/08/2021 06:59 PM',
"title": 'Từ Hulk xanh, Hulk đỏ, Hulk xám thì giờ đây chúng ta có cả Blue Hulk!',
"description": 'Hulk có màu xanh lá cây, đỏ, xám dường như đã quá quen thuộc với chúng ta, nhưng Blue Hulk lại là một điều khá mới mẻ là đây cũng là một trong những nhân vật mạnh mẽ nhất của Marvel.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628050244150335388129.jpg',
"alt": 'HULK,',
"category": 'news',
"date": '04/08/2021',
"time": '06:59 PM',
"link": '/tu-hulk-xanh-hulk-do-hulk-xam-thi-gio-day-chung-ta-co-ca-blue-hulk',
"zcomponent": 'page_20210804185933',
"filepath": './20210804185933-tu-hulk-xanh-hulk-do-hulk-xam-thi-gio-day-chung-ta-co-ca-blue-hulk.js'
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
  "Từ Hulk xanh, Hulk đỏ, Hulk xám thì giờ đây chúng ta có cả Blue Hulk!";
const author = "Đức Khương";
const source = "Tri Thức Trẻ";
const timestamp = "04/08/2021 06:59 PM";
const description =
  "Hulk có màu xanh lá cây, đỏ, xám dường như đã quá quen thuộc với chúng ta, nhưng Blue Hulk lại là một điều khá mới mẻ là đây cũng là một trong những nhân vật mạnh mẽ nhất của Marvel.";
const link =
  "tu-hulk-xanh-hulk-do-hulk-xam-thi-gio-day-chung-ta-co-ca-blue-hulk";
const tagparam = ["HULK"];
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

export default function page_20210804185933() {
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
                      Trong suốt sự nghiệp lâu dài của <strong>Hulk</strong>,
                      sức mạnh và tính cách của anh ta đã thay đổi nhiều lần.
                      Con vật khổng lồ da xanh mang tính biểu tượng thích đập
                      phá sẽ luôn là hóa thân nổi tiếng nhất của anh ta.
                    </p>
                    <p>
                      Từ Red <strong>Hulk</strong> của Thaddeus Ross đến Grey
                      Hulk bí ẩn, những Hulk và sắc thái của Bruce Banner có thể
                      có sự khác biệt nhất định, nhưng những Hulk này thường có
                      một số nhất quán về lý do tại sao chúng là một màu nhất
                      định. Tuy nhiên, Blue Hulk vẫn còn là khái niệm khá mới mẻ
                      với đa số mọi người, hãy cùng xem xét kỹ hơn từng nhân vật
                      được chiếu xạ Gamma để xem điều gì khiến họ có màu xanh
                      như vậy.
                    </p>
                    <h5>Captain Universe Hulk</h5>
                    <p>
                      Uni-Power là một sức mạnh vũ trụ xuất phát từ Lực lượng Bí
                      ẩn và được kết nối với Microverse. Đó là một lực lượng
                      liên kết với những cá nhân xứng đáng và ban tặng sức mạnh
                      vũ trụ thần thánh cho họ, cho phép họ trở thành Captain
                      Universe.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628050244150335388129.jpg"
                      alt="1, HULK,"
                      note=""
                    />
                    <p>
                      Captain Universe <strong>Hulk</strong> có thể là phiên bản
                      mạnh nhất của Blue Hulk từng tồn tại và anh ta được cho là
                      thời kỳ Hulk mạnh mẽ nhất. Khi Uni-Power vô hạn liên kết
                      với Bruce Banner, da của Hulk chuyển sang màu xanh lam rực
                      rỡ, ban cho anh ta sức mạnh của Captain Universe và sức
                      mạnh này còn lớn hơn cả sức mạnh của Hulk ban đầu.
                    </p>
                    <p>
                      Tất cả bắt đầu trong Captain Universe: Incredible{" "}
                      <strong>Hulk</strong> # 1 của Jay Faeber và Carlos Magno.
                      Sức mạnh của Uni-Power đã bị tổn hại mà không rõ lý do.
                      Khả năng tiếp cận kiến thức tức thời, vô hạn của nó đã bị
                      cản trở và nó không thể tự giải quyết vấn đề của mình. Vì
                      vậy, nó tìm kiếm một sinh vật có thể bù đắp cho tình trạng
                      suy yếu của nó.
                    </p>
                    <p>
                      Và đó cũng là lúc Bruce Banner xuất hiện. Uni-Power liên
                      kết với anh ta và kìm hãm sự biến đổi của{" "}
                      <strong>Hulk</strong> và hướng dẫn Banner đến chỗ những
                      nhà khoa học có thể giúp giải quyết bí ẩn của mình. Nhưng
                      khi họ bị tấn công, Uni-Power đã ban cho Hulk sức mạnh lớn
                      hơn để chống trả trước khi rời khỏi hiện trường trận
                      chiến. Mặc dù không tồn tại được bao lâu, nhưng với sức
                      mạnh của Uni-Power, Hulk đã trở thành một trong những hình
                      dạng mạnh nhất của anh ta khi anh ta được liên kết với sức
                      mạnh của Captain Universe.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>A-Bomb</h5>
                    <p>
                      Rick Jones là người được Bruce hứng thay vụ nổ gamma và
                      anh trở thành người bạn tốt nhất của Bruce, không những
                      vậy, Rick còn là một nhân vật quan trọng của Marvel và
                      được rất nhiều anh hùng khác tôn trọng. Rick từng tình
                      nguyện uống liều gamma và trở thành A-Bomb, một{" "}
                      <strong>Hulk</strong> với cơ thể màu xanh và gai góc hơn.
                      Trong bộ Immortal Hulk (2018) do Al Ewing viết, Rick bị
                      một tổ chức xấu xa hồi sinh và biến anh thành Abomination,
                      nhưng may mắn là anh đã trở lại hình thái bình thường.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280502479152142711340.jpg"
                      alt="2, HULK,"
                      note=""
                    />
                    <p>
                      Blue <strong>Hulk</strong> tiếp theo xuất hiện là Rick
                      Jones, người bạn đồng hành lâu năm của Marvel và là một
                      thiếu niên, người mà Bruce đã cứu khỏi bị kẹt trong một vụ
                      nổ gamma nhiều năm trước. Trong Hulk # 2 năm 2008 của Jeph
                      Loeb và Ed McGuinness, Rick đã bị M.O.D.O.K. và the Leader
                      bắt giữ, và sau đó đã tiến hành biến anh ta thành một sinh
                      vật màu xanh lam mới gần giống với Abomination vừa qua
                      đời. Anh ta giống như Hulk ban đầu, không thể giữ lại
                      nhiều ký ức của mình sau khi biến đổi. Điều này cùng với
                      tính khí nóng nảy đã khiến Rick trở nên cực kỳ nguy hiểm.
                    </p>
                    <p>
                      Tự gọi mình là A-Bomb, Rick tiếp tục chiến đấu với Red{" "}
                      <strong>Hulk</strong>, sử dụng sức mạnh mới của mình để
                      làm bị thương Red Hulk, điều mà trước đây nhân vật này
                      chưa từng làm được.
                    </p>
                    <p>
                      Đáng buồn thay, thời gian của Rick là một sinh vật được
                      trao sức mạnh từ tia gamma lại kết thúc khi{" "}
                      <strong>Hulk</strong> hoạt động dưới cái tên "Doc Green"
                      quyết định loại bỏ những người có sức mạnh dựa trên bức xạ
                      gamma. Mặc dù anh ta đã chiến đấu, A-Bomb cuối cùng đã bị
                      chế ngự và được tiêm một loại thuốc giải khiến anh ta trở
                      thành con người bình thường.
                    </p>
                    <h5>The Mighty Thorr</h5>
                    <p>
                      Anh hùng tiếp theo nhận được sức mạnh của Blue{" "}
                      <strong>Hulk</strong> và cũng là nhân vật mạnh nhất, chỉ
                      thua kém sức mạnh của sự pha trộn đặc biệt giữa Captain
                      Universe và Hulk vừa đề cập bên trên. Trong cốt truyện
                      "World War Hulks", the Leader đã truyền bức xạ gamma vào
                      một số anh hùng để biến họ thành những người lính cuồng nộ
                      vô tâm. Trong số đó có Thor, nhân vật này đã trở thành
                      phiên bản "Hulkified" và có tên The Mighty Thorr sau khi
                      bị biến đổi trong Hulk # 21 của Jeph Loeb và Ed
                      McGuinness.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-2-16280502480681187811572.jpg"
                      alt="3, HULK,"
                      note=""
                    />
                    <p>
                      Ở hình dạng mới này, Thor có tất cả sức mạnh ban đầu của
                      mình, nhưng cũng có thêm sức mạnh của{" "}
                      <strong>Hulk</strong> và tất cả những cơn thịnh nộ. Có vẻ
                      như bức xạ gamma đã có thêm tác dụng đối với tia chớp và
                      sấm sét mà Thor có thể gọi xuống, khiến da của anh ta trở
                      nên xanh lam và nhiễm điện. Tuy nhiên khi sử dụng sức mạnh
                      mới này, Thor chỉ có thể tồn tại trong vòng 24 giờ và sau
                      đó chính sức mạnh khủng khiếp này sẽ giết chết anh ta ngay
                      lập tức. May mắn thay, Bruce Banner đã sử dụng một cỗ máy
                      hút lượng bức xạ gamma dư thừa vào bản thân như một cách
                      để cứu bạn bè của mình.
                    </p>
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
