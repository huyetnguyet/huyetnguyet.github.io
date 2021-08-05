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
"timestamp": '05/08/2021 08:46 AM',
"title": 'Đấu Trường Chân Lý: 3 đội hình xoay quanh Yasuo ở mùa 5.5 mà fan của "đấng" không thể bỏ qua',
"description": 'Nếu game thủ Đấu Trường Chân Lý sở hữu Yasuo từ sớm thì có thể hướng tới 1 trong 3 đội hình dưới đây.',
"src": '',
"alt": 'ĐẤU TRƯỜNG CHÂN LÝ,CẨM NANG ĐẤU TRƯỜNG CHÂN LÝ,RIOT GAMES,GAME,RIOT,TIN GAME,YASUO,LEE SIN,RIVEN,DRAVEN,RELL,JAX,KALISTA,',
"category": 'games',
"date": '05/08/2021',
"time": '08:46 AM',
"link": '/dau-truong-chan-ly-3-doi-hinh-xoay-quanh-yasuo-o-mua-55-ma-fan-cua-dang-khong-the-bo-qua',
"zcomponent": 'page_20210805084622',
"filepath": './20210805084622-dau-truong-chan-ly-3-doi-hinh-xoay-quanh-yasuo-o-mua-55-ma-fan-cua-dang-khong-the-bo-qua.js'
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
  'Đấu Trường Chân Lý: 3 đội hình xoay quanh Yasuo ở mùa 5.5 mà fan của "đấng" không thể bỏ qua';
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:46 AM";
const description =
  "Nếu game thủ Đấu Trường Chân Lý sở hữu Yasuo từ sớm thì có thể hướng tới 1 trong 3 đội hình dưới đây.";
const link =
  "dau-truong-chan-ly-3-doi-hinh-xoay-quanh-yasuo-o-mua-55-ma-fan-cua-dang-khong-the-bo-qua";
const tagparam = [
  "ĐẤU TRƯỜNG CHÂN LÝ",
  "CẨM NANG ĐẤU TRƯỜNG CHÂN LÝ",
  "RIOT GAMES",
  "GAME",
  "RIOT",
  "TIN GAME",
  "YASUO",
  "LEE SIN",
  "RIVEN",
  "DRAVEN",
  "RELL",
  "JAX",
  "KALISTA",
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

export default function page_20210805084622() {
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
                    <h5>
                      <strong>Yasuo</strong> - Thây Ma
                    </h5>
                    <p>
                      Sau khi mùa 5.5 của <strong>Đấu Trường Chân Lý</strong>{" "}
                      được cập nhật thì tộc Đồ Long đã bị xóa và khiến cho{" "}
                      <strong>Yasuo</strong> bị mất đi một lượng sát thương kỹ
                      năng không hề nhỏ. Để giải quyết vấn đề này thì các cao
                      thủ đã nghĩ tới việc kết hợp Yasuo với tộc Thây Ma để tận
                      dụng khả năng chống chịu, khống chế tốt của Thây Ma Biến
                      Dị và giúp "đấng" gây sát thương an toàn hơn. Với việc đã
                      có sẵn một unit Quân Đoàn - Thây Ma là{" "}
                      <strong>Kalista</strong>, sự kết hợp giữa Yasuo và chủng
                      tộc này càng trở nên hợp lý.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/yasuo-1628062638910885967815.jpg"
                      alt="1, ĐẤU TRƯỜNG CHÂN LÝ,CẨM NANG ĐẤU TRƯỜNG CHÂN LÝ,RIOT GAMES,GAME,RIOT,TIN GAME,YASUO,LEE SIN,RIVEN,DRAVEN,RELL,JAX,KALISTA,"
                      note="Đội hình Yasuo - Thây Ma hoàn chỉnh ở cấp 8"
                    />
                    <p>
                      Bên cạnh tộc Thây Ma thì bạn cũng cần phải hướng mốc 4 Ma
                      Sứ để đảm bảo rằng chủ lực <strong>Yasuo</strong> có đủ
                      khả năng chống chịu và lượng sát thương đầu ra. Bạn nên
                      mua càng nhiều Sejuani càng tốt khi vị tướng này sẽ đóng
                      vai trò chống chịu chính ở giai đoạn giữa trận. Với việc
                      sở hữu thêm hệ Đấu Sĩ ở mùa 5.5, Sejuani tỏ ra là quân cờ
                      chống chịu tốt nhất mà tộc Ma Sứ đang có ở thời điểm hiện
                      tại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/-1628062687684421449964.jpg"
                      alt="2, ĐẤU TRƯỜNG CHÂN LÝ,CẨM NANG ĐẤU TRƯỜNG CHÂN LÝ,RIOT GAMES,GAME,RIOT,TIN GAME,YASUO,LEE SIN,RIVEN,DRAVEN,RELL,JAX,KALISTA,"
                      note="Việc Sejuani có thêm hệ Đấu Sĩ càng khiến sự kết hợp giữa tộc Ma Sứ và Thây Ma trở nên mạnh mẽ hơn"
                    />
                    <h5>
                      <strong>Yasuo</strong> - Thiết Giáp
                    </h5>
                    <p>
                      Bên cạnh <strong>Yasuo</strong> thì một mảnh ghép quan
                      trọng của tộc Ma Sứ chính là <strong>Lee Sin</strong>. Với
                      kỹ năng gây sát thương mạnh trên diện rộng, có thêm hiệu
                      ứng giảm tốc độ đánh thì Lee Sin là unit chủ chốt để giúp{" "}
                      <strong>game</strong> thủ kiếm được chuỗi thắng. Với việc
                      đã có sẵn những chủ lực mạnh như Yasuo, Lee Sin, game thủ
                      có thể cải thiện sức chống chịu bằng cách thêm Nautilus,{" "}
                      <strong>Jax</strong>, <strong>Rell</strong> ở cuối trận để
                      có thêm lượng giáp không hề nhỏ từ tộc Thiết Giáp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/ma-su-16280628718901700424253.jpg"
                      alt="3, ĐẤU TRƯỜNG CHÂN LÝ,CẨM NANG ĐẤU TRƯỜNG CHÂN LÝ,RIOT GAMES,GAME,RIOT,TIN GAME,YASUO,LEE SIN,RIVEN,DRAVEN,RELL,JAX,KALISTA,"
                      note="Lợi thế của tộc Ma Sứ đó là Yasuo và Lee Sin có cùng giá tiền và game thủ có thể nâng cả 2 unit này lên 3 sao trong quá trình roll chậm"
                    />
                    <p>
                      Đương nhiên là vai trò của "đấng" trong đội hình này vẫn
                      là sát thương chủ lực. Việc bạn sử dụng những unit vừa lì
                      lợm, lại có khả năng san sẻ gánh nặng gây sát thương cho{" "}
                      <strong>Yasuo</strong> như <strong>Lee Sin</strong>,{" "}
                      <strong>Jax</strong> chỉ khiến đội hình này càng khó bị
                      khắc chế hơn mà thôi. Lời khuyên khi vận hành đội hình này
                      đó là <strong>game</strong> thủ nên tiết kiệm Xẻng Vàng
                      hoặc lấy Ấn Sát Thủ cho Lee Sin nếu như có thể. Việc Lee
                      Sin có thể tiếp làm mềm tuyến sau của đối thủ sẽ giúp cho
                      Yasuo "dọn dẹp" team địch vô cùng dễ dàng.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/yasuo1-1628062638906478973682.jpg"
                      alt="4, ĐẤU TRƯỜNG CHÂN LÝ,CẨM NANG ĐẤU TRƯỜNG CHÂN LÝ,RIOT GAMES,GAME,RIOT,TIN GAME,YASUO,LEE SIN,RIVEN,DRAVEN,RELL,JAX,KALISTA,"
                      note="Nếu bạn có Ấn Sát Thủ thì hãy đưa nó ngay cho Lee Sin"
                    />
                    <RelationNewsInPage category={category} />
                    <h5>
                      <strong>Yasuo</strong> - Quân Đoàn
                    </h5>
                    <p>
                      Đây được xem là dạng đội hình xoay quanh{" "}
                      <strong>Yasuo</strong> mang tính chất "full công" khi
                      team-comp này chỉ có một tướng chống chịu đúng nghĩa là
                      Sejuani. Đổi lại thì lượng sát thương mà Yasuo có thể gây
                      ra với team-comp này là vô cùng lớn khi có thêm lượng tốc
                      độ đánh không hề nhỏ từ hệ Quân Đoàn. Với tính chất mạo
                      hiểm của đội hình Yasuo - Quân Đoàn thì lời khuyên là bạn
                      chỉ nên hướng tới team-comp này khi không thể mua được các
                      unit Thiết Giáp, Thây Ma ở giữa trận.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/yasuo2-16280626389021779979436.jpg"
                      alt="5, ĐẤU TRƯỜNG CHÂN LÝ,CẨM NANG ĐẤU TRƯỜNG CHÂN LÝ,RIOT GAMES,GAME,RIOT,TIN GAME,YASUO,LEE SIN,RIVEN,DRAVEN,RELL,JAX,KALISTA,"
                      note="Đội hình Yasuo - Quân Đoàn mang tính mạo hiểm rất cao vì có rất ít tướng chống chịu"
                    />
                    <p>
                      Tuy nhiên đội hình <strong>Yasuo</strong> - Quân Đoàn hứa
                      hẹn sẽ trở thành một lối chơi cực kỳ hot ở bản 11.16 sắp
                      tới khi <strong>Riot</strong> ra tay làm lại hệ Quân Đoàn.
                      Cụ thể thì ở phiên bản sắp tới, hệ Quân Đoàn sẽ luôn luôn
                      cung cấp cho tướng khả năng hồi phục mà không cần phải
                      tung chiêu như hiện tại. Điều này giúp cho những tướng
                      Quân Đoàn như <strong>Riven</strong>, Yasuo,{" "}
                      <strong>Draven</strong> có thể trụ giao tranh tốt hơn mà
                      không quá phụ thuộc vào trang bị.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/5/24/-16218565504831136292115.jpg"
                      alt="6, ĐẤU TRƯỜNG CHÂN LÝ,CẨM NANG ĐẤU TRƯỜNG CHÂN LÝ,RIOT GAMES,GAME,RIOT,TIN GAME,YASUO,LEE SIN,RIVEN,DRAVEN,RELL,JAX,KALISTA,"
                      note="Tin vui cho hệ Quân Đoàn là nó sắp được Riot làm lại ở bản 11.16"
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
