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
"timestamp": '03/08/2021 11:12 AM',
"title": 'One Piece: Những bằng chứng rõ ràng nhất cho thấy Shanks có một đứa con, nhưng "ông chú" Tóc Đỏ lại bỏ bê đi "giải cứu thế giới"',
"description": 'Là một trong những nhân vật quan trọng trong One Piece, nhưng những thông tin về Shanks này lại rất ít được tiết lộ, đặc biệt là về đời tư của anh.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/avata-1627804270384233611899.jpg',
"alt": 'SHANKS TÓC ĐỎ,TỨ HOÀNG,SHANKS CÓ CON,LUFFY MŨ RƠM,CON CỦA MAKINO,ONE PIECE,',
"category": 'games',
"date": '03/08/2021',
"time": '11:12 AM',
"link": '/one-piece-nhung-bang-chung-ro-rang-nhat-cho-thay-shanks-co-mot-dua-con-nhung-ong-chu-toc-do-lai-bo-be-di-giai-cuu-the-gioi',
"zcomponent": 'page_20210803111216',
"filepath": './20210803111216-one-piece-nhung-bang-chung-ro-rang-nhat-cho-thay-shanks-co-mot-dua-con-nhung-ong-chu-toc-do-lai-bo-be-di-giai-cuu-the-gioi.js'
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
  'One Piece: Những bằng chứng rõ ràng nhất cho thấy Shanks có một đứa con, nhưng "ông chú" Tóc Đỏ lại bỏ bê đi "giải cứu thế giới"';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:12 AM";
const description =
  "Là một trong những nhân vật quan trọng trong One Piece, nhưng những thông tin về Shanks này lại rất ít được tiết lộ, đặc biệt là về đời tư của anh.";
const link =
  "one-piece-nhung-bang-chung-ro-rang-nhat-cho-thay-shanks-co-mot-dua-con-nhung-ong-chu-toc-do-lai-bo-be-di-giai-cuu-the-gioi";
const tagparam = [
  "SHANKS TÓC ĐỎ",
  "TỨ HOÀNG",
  "SHANKS CÓ CON",
  "LUFFY MŨ RƠM",
  "CON CỦA MAKINO",
  "ONE PIECE",
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

export default function page_20210803111216() {
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
                      Shanks là thuyền trưởng băng hải tặc Tóc Đỏ và là một
                      trong các <strong>Tứ Hoàng</strong>. Shanks cũng từng là
                      thành viên của băng Roger, nhóm hải tặc duy nhất chinh
                      phục thành công Grand Line. Shanks cũng chính là người đã
                      truyền cảm hứng cho hành trình làm Vua hải tặc của Luffy.
                      Là một nhân vật quan trọng trong{" "}
                      <strong>One Piece</strong> như thế nhưng đời tư của anh
                      lại không được nhắc đến nhiều. Đặc biệt là gia cảnh, bố mẹ
                      và gia đình đều còn là một điều bí ẩn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/avata-1627804270384233611899.jpg"
                      alt="1, SHANKS TÓC ĐỎ,TỨ HOÀNG,SHANKS CÓ CON,LUFFY MŨ RƠM,CON CỦA MAKINO,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Vì thế có rất nhiều giả thuyết xoay quanh về Shanks, một
                      trong số đó chính là việc anh có một đứa con. Vậy mọi việc
                      là như thế nào, chúng ta hãy cùng nhau đi tìm hiểu.
                    </p>
                    <p>
                      Chúng ta hãy quay lại trước timeskip tại quê hương của
                      Luffy có một nhân vật tên Makino, là cô gái làm việc tại
                      quán rượu ở làng Foosha Village. Cô chính là người bạn
                      thân thiết của Shanks, băng hải tặc Tóc Đỏ và Luffy. Hiền
                      hậu, tốt bụng, luôn ủng hộ Luffy, Makino dường như là một
                      trong những nhân vật nổi bật nhất ở làng Foosha.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/anh-1-16278042702841835739548.jpg"
                      alt="2, SHANKS TÓC ĐỎ,TỨ HOÀNG,SHANKS CÓ CON,LUFFY MŨ RƠM,CON CỦA MAKINO,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Nếu mọi người để ý thì sau khi Luffy có tiền thưởng
                      30.000.000 berry, các tờ báo đăng tin tức đã được chuyển
                      đến làng Foosha nơi Makino đang làm việc. Lúc này mọi
                      người đã reo hò rằng một công dân tại địa phương đã nổi
                      tiếng, và chúng ta đã thấy Makino xuất hiện trong bức ảnh.
                      Nhưng một điều ngạc nhiên rằng trên tay cô đang bế một đứa
                      trẻ. Và rất nhiều fan cho rằng đây chính là con của{" "}
                      <strong>Tứ Hoàng</strong> Shanks.
                    </p>
                    <p>
                      Trước đó tác giả Oda đã từng hé lộ một chút về thân phận
                      của đứa bé này. Trong SBS của <strong>One Piece</strong>{" "}
                      tập 63, tác giả Oda đã trả lời về đứa{" "}
                      <strong>con của Makino</strong> như thế này: "Có vẻ như
                      Makino đã trở thành một bà mẹ rồi đấy. Trông cô ấy thật
                      hạnh phúc. Cha của đứa bé có lẽ là NGƯỜI ẤY. Đúng rồi, chỉ
                      có thể là NGƯỜI ẤY mà thôi".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/anh-2-16278042702992127750782.png"
                      alt="3, SHANKS TÓC ĐỎ,TỨ HOÀNG,SHANKS CÓ CON,LUFFY MŨ RƠM,CON CỦA MAKINO,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Câu nói mập mờ của ông dường như chẳng nhắm vào ai, nhưng
                      lại hé lộ những chi tiết vô cùng đắt giá. "Người ấy"trong
                      câu nói của Oda thì không thể là nhân vật phụ, mà phải là
                      một nhân vật chính trong series <strong>One Piece</strong>
                      . Và nếu xét mối quan hệ của Makino cho đến thời điểm này
                      thì người "tình nghi" nhất chính là Shanks, anh là bạn
                      cũng như từng đến nơi ở của cô nhiều lần.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thêm nữa <strong>con của Makino</strong> có tóc màu đỏ,
                      màu tóc đặc trưng của Shanks. Mà màu tóc của Makino lại là
                      màu đen (hoặc xanh trong anime), vậy chắc hẳn rằng màu tóc
                      của đứa bé này được di truyền từ cha của nó rồi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/anh-7-1627804270362811055681.png"
                      alt="4, SHANKS TÓC ĐỎ,TỨ HOÀNG,SHANKS CÓ CON,LUFFY MŨ RƠM,CON CỦA MAKINO,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Nhưng đây mới là manh mối quan trọng nhất, bạn hãy nhìn
                      vào ảnh bìa của chapter 806 thì thấy tay của Makino có đeo
                      nhẫn. Điều này cho thấy cô đã kết hôn và đứa con này hoàn
                      toàn được mọi người công nhận. Bên cạnh đó thì tại ảnh bìa
                      chapter 838 có dòng chữ nhầm khẳng định Shanks đã có gia
                      đình. Liệu đây chỉ là sự trùng hợp ngẫu nhiên không, hay
                      đằng sau nó đều là ý đồ của tác giả?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/anh-4-16278042703321123939521.png"
                      alt="5, SHANKS TÓC ĐỎ,TỨ HOÀNG,SHANKS CÓ CON,LUFFY MŨ RƠM,CON CỦA MAKINO,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Hay chính tại tiêu đề của chapter 614 là "Lỡ làm rồi thì
                      thôi", kèm theo bức anh Makino ôm đứa bé. Có thể câu nói
                      này ám chỉ đến việc Shanks và Makino đã đi quá giới hạn
                      cho phép, vì đối với một hải tặc thì việc nay đây mai đó
                      là chuyện như cơm bữa vì vậy họ không hợp với 2 từ gia
                      đình. Đặc biệt là đối với một hải tặc nổi tiếng thì họ
                      không dám lấy vợ hay sinh con vì điều này ảnh hưởng rất
                      nhiều đến ước mơ của họ. Tuy nhiên nếu chẳng may có một
                      phút yếu lòng, gây "hậu quả" thì đành phải chấp nhận chứ
                      biết làm thế nào.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/anh-5-1627804270339370433904.png"
                      alt="6, SHANKS TÓC ĐỎ,TỨ HOÀNG,SHANKS CÓ CON,LUFFY MŨ RƠM,CON CỦA MAKINO,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Trên đây là những bằng chứng cho thấy Shanks có một đứa
                      con và chính là <strong>con của Makino</strong>. Bạn thấy
                      sao về vấn đề này, liệu có đúng là sự thật hay không? Nếu
                      đúng thì vì lý do gì mà suốt thời gian qua Shanks lại
                      không quan tâm gì đến con trai mình? Hãy cho chúng tôi
                      biết thêm suy nghĩ của các bạn về vấn đề này để chúng ta
                      cùng thảo luận nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/anh-6-16278042703571731492388.png"
                      alt="7, SHANKS TÓC ĐỎ,TỨ HOÀNG,SHANKS CÓ CON,LUFFY MŨ RƠM,CON CỦA MAKINO,ONE PIECE,"
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
