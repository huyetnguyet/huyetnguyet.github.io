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
"timestamp": '13/08/2021 09:25 AM',
"title": 'One Piece: "Ác quỷ" thức tỉnh bên trong Nico Robin chính là khả năng nguy hiểm nhất của băng Mũ Rơm?',
"description": 'Hình thức mới của Nico Robin trong chapter 1021 thực sự khiến các fan vô cùng phấn khích. Nhiều người cho rằng đây chính là khả năng thức tỉnh nguy hiểm nhất trong băng Mũ Rơm.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/anh-1-1628752426073133842083.png',
"alt": 'ONE PIECE,TRÁI ÁC QUỶ,NICO ROBIN,THỨC TỈNH TRÁI ÁC QUỶ,BLACK MARIA,TOBI ROPPO,',
"category": 'games',
"date": '13/08/2021',
"time": '09:25 AM',
"link": '/one-piece-ac-quy-thuc-tinh-ben-trong-nico-robin-chinh-la-kha-nang-nguy-hiem-nhat-cua-bang-mu-rom',
"zcomponent": 'page_20210813092517',
"filepath": './20210813092517-one-piece-ac-quy-thuc-tinh-ben-trong-nico-robin-chinh-la-kha-nang-nguy-hiem-nhat-cua-bang-mu-rom.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  'One Piece: "Ác quỷ" thức tỉnh bên trong Nico Robin chính là khả năng nguy hiểm nhất của băng Mũ Rơm?';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:25 AM";
const description =
  "Hình thức mới của Nico Robin trong chapter 1021 thực sự khiến các fan vô cùng phấn khích. Nhiều người cho rằng đây chính là khả năng thức tỉnh nguy hiểm nhất trong băng Mũ Rơm.";
const link =
  "one-piece-ac-quy-thuc-tinh-ben-trong-nico-robin-chinh-la-kha-nang-nguy-hiem-nhat-cua-bang-mu-rom";
const tagparam = [
  "ONE PIECE",
  "TRÁI ÁC QUỶ",
  "NICO ROBIN",
  "THỨC TỈNH TRÁI ÁC QUỶ",
  "BLACK MARIA",
  "TOBI ROPPO",
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

export default function page_20210813092517() {
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
                      <strong>One Piece</strong> chap 1021 thật sự chính là đất
                      diễn của Robin, nữ khảo cổ học xinh đẹp của băng Mũ Rơm.
                      Như chúng ta đã biết thì Robin được chính quyền thế giới
                      gọi với cái tên "đứa con của quỷ" và là một trong những
                      nhân vật được truy nã gắt gao nhất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/anh-1-1628752426073133842083.png"
                      alt="1, ONE PIECE,TRÁI ÁC QUỶ,NICO ROBIN,THỨC TỈNH TRÁI ÁC QUỶ,BLACK MARIA,TOBI ROPPO,"
                      note=""
                    />
                    <p>
                      Ngoài những kiến thức và tiềm năng đáng nể thì lần này tác
                      giả Oda đã khiến tất cả mọi người phải bất ngờ trước sức
                      mạnh mới của cô. Cụ thể mới đây trong trận chiến với{" "}
                      <strong>Black Maria</strong>, Robin đã triển khai hình
                      dạng Demonio Fleur để tạo ra một bản sao khổng lồ của
                      chính mình với rất nhiều cánh tay.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/anh-2-16287524260941196882939.png"
                      alt="2, ONE PIECE,TRÁI ÁC QUỶ,NICO ROBIN,THỨC TỈNH TRÁI ÁC QUỶ,BLACK MARIA,TOBI ROPPO,"
                      note=""
                    />
                    <p>
                      Có thể thấy Robin đã chiêu đãi độc giả bằng một cuộc chiến
                      rất sáng tạo dựa trên sức mạnh linh hoạt của mình. Robin
                      vận sức để dùng ra một đòn tấn công mới có tên là Mil
                      Fleur Gyojin Karate: Giganteum, những cánh tay khổng lồ
                      của Robin chưởng thẳng lên trần nhà, tạo ra những luồng
                      sóng xung kích khiến toàn bộ trần nhà sụp xuống. Những
                      viên đá vụn rơi xuống đã dập tắt ngọn lửa bên dưới và phá
                      hủy toàn bộ mạng nhện của <strong>Black Maria</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/anh-3-16287524805981456130172.png"
                      alt="3, ONE PIECE,TRÁI ÁC QUỶ,NICO ROBIN,THỨC TỈNH TRÁI ÁC QUỶ,BLACK MARIA,TOBI ROPPO,"
                      note=""
                    />
                    <p>
                      Sau đó Robin dường như đã giải phóng con quỷ bên trong của
                      mình, với hình dạng này cô trông giống như một con quỷ
                      hoàn chỉnh với răng nanh, sừng và thậm chí cả đôi cánh
                      lớn. Robin sau đó nắm lấy toàn bộ cơ thể của{" "}
                      <strong>Black Maria</strong> và sử dụng Grand Jacuzzi
                      Clutch vặn gãy cơ thể và khiến ả hộc máu. Các thuộc hạ của
                      Black Maria, những người nghe thấy tiếng hét của ả nhìn ra
                      từ bức tường băng mà Brook tạo ra đã vô cùng kinh hãi khi
                      thấy Robin trong trạng thái này.
                    </p>
                    <p>
                      Có thể nói trong số các <strong>Tobi Roppo</strong> đã
                      đụng độ với băng Mũ Rơm thì <strong>Black Maria</strong>{" "}
                      đã bị đánh bại một cách tàn bạo nhất. Robin thực sự trở
                      thành ác quỷ khi đối đầu với kẻ thù, bởi vì trong quá khứ
                      cô đã phải chịu rất nhiều đau thương và mất mát nên băng
                      Mũ Rơm chính là ngôi nhà mà cô phải bảo vệ.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bên cạnh đó như chúng ta đã biết trong băng Mũ Rơm có rất
                      nhiều nhân vật sở hữu những <strong>trái ác quỷ</strong>{" "}
                      vô cùng mạnh mẽ, thế nhưng có một trái vượt trội hơn tất
                      cả đó chính là Hana Hano no Mi của{" "}
                      <strong>Nico Robin</strong>. Đây là một trong những trái
                      ác quỷ mạnh mẽ nhất trong hệ Paramecia, nó cho phép bất kỳ
                      bộ phận của mình mọc ra như là những bông hoa.
                    </p>
                    <p>
                      Nhờ năng lực của <strong>trái ác quỷ</strong> này Robin có
                      khả năng tạo ra bất kỳ bộ phận nào trên cơ thể cô ở 1 bề
                      mặt nhất định ngoại trừ đá biển. Với khả năng này Robin có
                      thể nhanh chóng hạ gục nhiều đối thủ với những cánh tay
                      được mọc ra. Bởi vì chỉ có cô mới biết đâu là vị trí những
                      cánh tay xuất hiện nên đó chính là yếu tố bất ngờ khiến
                      đối phương không lường trước được, điều này khiến nó trở
                      thành một trái ác quỷ "bá đạo".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/anh-4-16287524261441979101118.jpg"
                      alt="4, ONE PIECE,TRÁI ÁC QUỶ,NICO ROBIN,THỨC TỈNH TRÁI ÁC QUỶ,BLACK MARIA,TOBI ROPPO,"
                      note=""
                    />
                    <p>
                      Thêm nữa chúng ta cũng thấy sự đa dạng và linh hoạt của{" "}
                      <strong>trái ác quỷ</strong> này. Chúng ta đã thấy Robin
                      sử dụng một số kỹ thuật khác nhau để chiến đấu, phòng thủ,
                      do thám…Khả năng "mọc" ra tay chân hay các bộ phận khác ở
                      trong bất kỳ hoàn cảnh nào là một điều vô cùng hữu ích.
                      Tất cả những điều này cho thấy trái ác quỷ Hana Hano no Mi
                      vô cùng linh hoạt và có khả năng rất lớn. Nếu trong tương
                      lai Robin có thể thức tỉnh được nó thì chắc chắn cô cũng
                      sẽ trở thành một ác quỷ trong chiến đấu mà bất kỳ đối thủ
                      nào cũng phải dè chừng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/anh-5-1628752426219749165279.jpg"
                      alt="5, ONE PIECE,TRÁI ÁC QUỶ,NICO ROBIN,THỨC TỈNH TRÁI ÁC QUỶ,BLACK MARIA,TOBI ROPPO,"
                      note=""
                    />
                    <p>
                      Từ những phân tích trên thì nói không quá khi nhiều người
                      cho rằng ác quỷ bên trong <strong>Nico Robin</strong>{" "}
                      chính là khả năng thức tỉnh nguy hiểm trong băng Mũ Rơm.
                      Cả nghĩa đen và bóng đều cho thấy cô thật sự nguy hiểm
                      trong trạng thái này. Đọc đến đây các bạn nghĩ sao về vấn
                      đề này, liệu có đồng ý với lập luận trên không? Hãy cho
                      chúng tôi biết thêm suy nghĩ của mọi người để chúng ta
                      cùng thảo luận nhé!
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
