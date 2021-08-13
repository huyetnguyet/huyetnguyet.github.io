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
"timestamp": '12/08/2021 05:32 PM',
"title": 'Top 4 bóng hồng "ngoài lạnh trong nóng" trong anime: Vẻ ngoài lạnh như băng nhưng vẫn khiến fan "tan chảy", đổ ầm ầm',
"description": 'Đây chính là 4 gương mặt khiến các khán giả hâm mộ anime phải đổ gục vì vẻ ngoài lạnh lùng cùng tính cách trái ngược của mình',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628767919213968256515.jpg',
"alt": 'GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,',
"category": 'games',
"date": '12/08/2021',
"time": '05:32 PM',
"link": '/top-4-bong-hong-ngoai-lanh-trong-nong-trong-anime-ve-ngoai-lanh-nhu-bang-nhung-van-khien-fan-tan-chay-do-am-am',
"zcomponent": 'page_20210812173242',
"filepath": './20210812173242-top-4-bong-hong-ngoai-lanh-trong-nong-trong-anime-ve-ngoai-lanh-nhu-bang-nhung-van-khien-fan-tan-chay-do-am-am.js'
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
  'Top 4 bóng hồng "ngoài lạnh trong nóng" trong anime: Vẻ ngoài lạnh như băng nhưng vẫn khiến fan "tan chảy", đổ ầm ầm';
const author = "Bủm";
const source = "Trí Thức Trẻ";
const timestamp = "12/08/2021 05:32 PM";
const description =
  "Đây chính là 4 gương mặt khiến các khán giả hâm mộ anime phải đổ gục vì vẻ ngoài lạnh lùng cùng tính cách trái ngược của mình";
const link =
  "top-4-bong-hong-ngoai-lanh-trong-nong-trong-anime-ve-ngoai-lanh-nhu-bang-nhung-van-khien-fan-tan-chay-do-am-am";
const tagparam = [
  "GAME MOBILE",
  "GAME ONLINE",
  "GAME DI ĐỘNG",
  "ANIME",
  "KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA",
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

export default function page_20210812173242() {
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
                      Nhắc đến <strong>anime</strong>, chắc chắn ai cũng sẽ nhớ
                      đến những mỹ nữ sở hữu nhan sắc ngọt ngào, tính cách nhẹ
                      nhàng và luôn bên cạnh nam chính trong mọi hành trình. Tuy
                      nhiên, vẫn có rất nhiều nhân vật nữ sở hữu vẻ ngoài mạnh
                      mẽ, lạnh lùng được đông đảo anh em say mê, đổ "đứ đừ" bởi
                      tính cách "ngoài lạnh trong nóng" vô cùng thu hút của
                      mình. Cùng điểm qua một số bóng hồng xinh đẹp trong anime
                      được các fan yêu thích nhất nhé!
                    </p>
                    <h5>Mikasa Ackerman – Attack on Titan</h5>
                    <p>
                      Mikasa Ackerman chính là một trong những nhân vật được yêu
                      thích bậc nhất của series Attack On Titan. Sở hữu dòng máu
                      Ackerman, sức mạnh phi thường tương đương với 1000 binh sĩ
                      thường cùng khả năng chiến đấu thượng thừa, Mikasa có thể
                      hạ gục những tên người khổng lồ chỉ trong nháy mắt, điều
                      mà ngay cả những người lính kì cựu chưa chắc đã làm được.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628767865074286998809.jpg"
                      alt="1, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287678867511452897164.png"
                      alt="2, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628767919213968256515.jpg"
                      alt="6, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <p>
                      Không chỉ vậy, gương mặt khả ái có phần lạnh lùng cùng mái
                      tóc ngắn cá tính cũng giúp Mikasa dễ dàng "hạ gục" các fan
                      hâm mộ. Tuy sở hữu vẻ ngoài mạnh mẽ là vậy nhưng khi đối
                      diện với Eren - người mà cô luôn dành tình cảm và sự quan
                      tâm đặc biệt thì Mikasa lại có những giây phút yếu lòng,
                      thẹn thùng trái ngược với Mikasa của mọi khi. Chính bởi sự
                      trái ngược đó mà Mikasa càng được fan của bộ truyện/phim
                      hâm mộ, yêu thích cuồng nhiệt hơn cả.
                    </p>
                    <h5>Boa Hancock - One Piece</h5>
                    <p>
                      Giống như Mikasa, Boa Hancock cũng là nhân vật nữ nổi
                      tiếng bậc nhất trong bộ <strong>anime</strong> huyền thoại
                      One Piece. Cô được fan hâm mộ ưu ái ca ngợi là người phụ
                      nữ đẹp nhất trong bộ truyện mà tác giả Oda tạo ra. Nữ
                      Hoàng Hải Tặc có ngoại hình đẹp "vạn người mê", số đo 3
                      vòng hoàn hảo nhưng lại sở hữu tính cách rất thú vị. Tuy
                      bên ngoài luôn tỏ vẻ kiêu ngạo và có phần ích kỷ nhưng sâu
                      thẳm bên trong lại là một người phụ nữ nhạy cảm, luôn lo
                      sợ và dễ bị tổn thương bởi quá khứ kinh hoàng của mình..
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628767935789280549859.jpg"
                      alt="7, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287679755641592191539.jpg"
                      alt="8, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628767951632504742155.jpg"
                      alt="9, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <p>
                      Ấy vậy mà sau khi gặp nam chính - Luffy, Boa Hancock bắt
                      đầu biết yêu, trở thành một cô gái si tình để từ đó xuất
                      hiện hàng loạt những khoảnh khắc "tấu hài" cười ra nước
                      mắt. Cho đến nay, Boa Hancock vẫn tiếp tục chinh phục hàng
                      triệu trái tim khán giả hâm mộ bởi vẻ đẹp và những khoảnh
                      khắc lạnh lùng của mình.
                    </p>
                    <h5>Erza Scarlet – Fairy Tail</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628767995863988306452.png"
                      alt="10, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287680041931589683945.jpg"
                      alt="11, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628768039300261067234.gif"
                      alt="12, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <p>
                      Erza Scarlet là nữ nhân vật chính của bộ{" "}
                      <strong>anime</strong> đình đám - Fairy Tail, cô là một
                      pháp sư cấp S và là nữ pháp sư mạnh nhất trong thế giới
                      của Fairy Tail. Sở hữu kỹ năng kiếm thuật tuyệt vời, Erza
                      được biết đến dưới cái tên "Nữ Hoàng Tiên Titania" và đã
                      nhiều lần một mình đánh bại những kẻ địch khó nhằn. Cô
                      cũng từng giữ chức vị Hội trưởng Đệ Thất của Fairy Tail
                      trong khoảng thời gian Makarov vắng mặt năm X792.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Là một cô gái trẻ với mái tóc dài đỏ rực, đôi mắt nâu cùng
                      thân hình cực kỳ nóng bỏng, Erza luôn tỏa ra sức hấp dẫn
                      khó cưỡng mỗi lần xuất hiện. Dẫu luôn tỏ ra vô cùng nghiêm
                      khắc và thường chỉ trích những hành vi và thói xấu của các
                      thành viên trong hội nhưng Erza cũng có những khoảnh khắc
                      cô trở nên yếu đuối, rơi nước mắt khi không thể bảo vệ
                      những người mình yêu thương. Nỗi lo ấy đã trở thành động
                      lực để Erza mạnh mẽ hơn, trở thành đệ nhất pháp sư như
                      hiện nay.
                    </p>
                    <h5>Kikyo (Inuyasha)</h5>
                    <p>
                      Trong InuYasha, Kikyo là kiếp trước của nữ chính - Kagome
                      và là một nữ pháp sư tài giỏi có khả năng phong ấn quái
                      vật vô cùng ấn tượng. Cô có nhiệm vụ bảo vệ Ngọc Tứ Hồn
                      trong thời Chiến Quốc và cũng là một trong ba người duy
                      nhất có khả năng thanh tẩy nó. Không chỉ tài giỏi mà Kikyo
                      còn sở hữu vẻ đẹp hoàn hảo, thần thái lạnh lùng cùng ánh
                      mắt sắc lẹm sẵn sàng hạ gục mọi ánh nhìn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/-16287681075151755500026.jpg"
                      alt="13, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628768091987456856946.jpg"
                      alt="14, GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,ANIME,KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,"
                      note=""
                    />
                    <p>
                      Kikyo chính là mối tình đầu khó quên của InuYasha, trước
                      khi cô chết thảm và tái sinh thành Kagome. Dẫu luôn muốn
                      tiêu diệt InuYasha sau khi được hồi sinh nhưng sâu thẳm
                      bên trong cô vẫn luôn dành tình cảm đặc biệt cho mối tình
                      đầu ấy.
                    </p>
                    <p>
                      Nếu cũng là fan hâm mộ của InuYasha,{" "}
                      <strong>Khuyển Dạ Xoa Truyền Kỳ - IP InuYasha</strong> -
                      tựa game duy nhất sở hữu độc quyền IP InuYasha tại Việt
                      Nam chính là lựa chọn bạn không nên bỏ qua. Đồ họa hiện
                      đại, sắc nét tới từng chi tiết cùng dàn nhân vật, Boss
                      được thiết kế bắt mắt, chuẩn 100% nguyên tác gốc của
                      Khuyển Dạ Xoa Truyền Kỳ - IP InuYasha sẽ một lần nữa đưa
                      bạn trở về với tuổi thơ, hòa mình cùng các nhân vật yêu
                      thích một thời. Không chỉ vậy, gameplay ấn tượng, mới lạ
                      chưa từng có khi cho phép người chơi hóa thân thành các
                      nhân vật của bộ truyện để thu thập ngọc Tứ Hồn cũng là một
                      điểm cộng vô cùng lớn, chắc chắn sẽ mang đến những trải
                      nghiệm không thể nào quên.
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
