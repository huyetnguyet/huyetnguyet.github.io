import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:24 PM',
"title": 'Top 20 nhân vật có tiền truy nã cao nhất One Piece tính tới thời điểm hiện tại, Luffy còn thua 6 người này?',
"description": 'Cùng chúng tôi điểm qua 20 nhân vật có tiền truy nã cao nhất trong One Piece tính cho tới thời điểm hiện tại nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu1-16271926625831676502001.jpg',
"alt": 'ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,',
"category": 'games',
"date": '29/07/2021',
"time": '04:24 PM',
"link": '/top-20-nhan-vat-co-tien-truy-na-cao-nhat-one-piece-tinh-toi-thoi-diem-hien-tai-luffy-con-thua-6-nguoi-nay',
"zcomponent": 'page_20210729162410',
"filepath": './20210729162410-top-20-nhan-vat-co-tien-truy-na-cao-nhat-one-piece-tinh-toi-thoi-diem-hien-tai-luffy-con-thua-6-nguoi-nay.js'
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
  "Top 20 nhân vật có tiền truy nã cao nhất One Piece tính tới thời điểm hiện tại, Luffy còn thua 6 người này?";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:24 PM";
const description =
  "Cùng chúng tôi điểm qua 20 nhân vật có tiền truy nã cao nhất trong One Piece tính cho tới thời điểm hiện tại nhé!";
const link =
  "top-20-nhan-vat-co-tien-truy-na-cao-nhat-one-piece-tinh-toi-thoi-diem-hien-tai-luffy-con-thua-6-nguoi-nay";
const tagparam = [
  "ONE PIECE",
  "FAN ONE PIECE",
  "CỘNG ĐỒNG ONE PIECE",
  "TRUY NÃ ONE PIECE",
  "LUFFY MŨ RƠM",
  "TỨ HOÀNG KAIDO",
  "TỨ HOÀNG BIG MOM",
  "ARC WANO",
  "TỨ HOÀNG SHANKS",
  "GOL D. ROGER",
  "PHƯỢNG HOÀNG MARCO",
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

export default function page_20210729162410() {
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
                <div className="contentBody">
                  <p>
                    Trong <strong>One Piece</strong>, tiền truy nã của các nhân
                    vật là một trong những thông tin được các fan quan tâm nhất.
                    Nó là một trong những thước đo uy tín nhất để xác định sức
                    mạnh của một nhân vật. Cùng chúng tôi điểm qua top 20 nhân
                    vật có số tiền truy nã cao nhất One Piece và nhân vật chính
                    Luffy của chúng ta đang đứng thứ mấy nhé! Lưu ý là bảng xếp
                    hạng này được tính tới tháng 7/2021 dựa trên các nhân vật đã
                    được công bố mức tiền truy nã, không tính đến các hải tặc
                    chưa được tiết lộ. Tất cả các nhân vật này sẽ được tính theo
                    đồng tiền Beli trong bộ truyện One Piece.
                  </p>
                  <h5>Top 1 - Gol D. Roger</h5>
                  <p>Tiền truy nã: 5.564.800.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu1-16271926625831676502001.jpg"
                    alt="1, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    <strong>Gol D. Roger</strong> là người đầu tiên đạt được
                    danh hiệu Vua Hải Tặc, cũng là người đã khám phá được hòn
                    đảo Raftel và kho báu <strong>One Piece</strong> vĩ đại.
                    Roger là tượng đài hải tặc vĩ đại nhất mà đến nay chưa ai có
                    thể vượt qua. Cái chết của ông đã mở ra một thời đại hải tặc
                    mới huy hoàng. Tất cả mọi người đều lao ra biển nhằm khám
                    phá bí mật của kho báu One Piece được Roger nhắc đến trước
                    khi bị xử tử.
                  </p>
                  <h5>Top 2 - Tứ Hoàng Râu Trắng - Edward Newgate</h5>
                  <p>Tiền truy nã: 5.046.000.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu2-16271926746591505909747.jpg"
                    alt="2, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    Edward Newgate, biệt danh "Râu Trắng", từng là thuyền trưởng
                    của băng hải tặc Râu Trắng, được biết đến như "Người đàn ông
                    mạnh nhất thế giới", hay "Người đàn ông tới gần{" "}
                    <strong>One Piece</strong> nhất" sau cái chết của{" "}
                    <strong>Gol D. Roger</strong>. Râu Trắng cũng là một thành
                    viên của Tứ Hoàng cho đến khi tử trận trong cuộc cứu Ace ở
                    Marineford.
                  </p>
                  <h5>
                    Top 3 - <strong>Tứ Hoàng Kaido</strong> Bách Thú
                  </h5>
                  <p>Tiền truy nã: 4.611.100.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu3-16271926787911932945981.png"
                    alt="3, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    Có biệt danh là "Kaido bách thú" và được mệnh danh là "sinh
                    vật mạnh nhất thế giới", Kaido sở hữu sức mạnh của trái ác
                    quỷ hệ động vật Zoan. Trái ác quỷ hệ này cho phép người dùng
                    chuyển hóa thành 1 loại động vật nhất định hoặc chuyển hóa
                    dạng nửa người, nửa thú. Hiện tại hắn đang là phản diện
                    chính của <strong>arc Wano</strong>.
                  </p>
                  <h5>
                    Top 4 - <strong>Tứ Hoàng Big Mom</strong> - Charlotte Linlin
                  </h5>
                  <p>Tiền truy nã: 4.388.000.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu4-1627192682644909638436.jpg"
                    alt="4, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    Charlotte Linlin hay Big Mom, là thuyền trưởng của băng hải
                    tặc Big Mom và là thành viên nữ duy nhất của Tứ Hoàng. Bà ta
                    là nữ lãnh đạo của gia đình Charlotte và thống trị cả Totto
                    Land. Hiện tại Big Mom cũng đang có mặt tại Wano và cùng với
                    Kaido trở thành phản diện của arc này.
                  </p>
                  <h5>Top 5 - Tứ Hoàng Shanks Tóc Đỏ</h5>
                  <p>Tiền truy nã: 4.048.900.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu5-16271926909271584076761.jpg"
                    alt="5, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    Shanks là thuyền trưởng của băng hải tặc Tóc Đỏ một Tứ Hoàng
                    của Tân Thế Giới. Trong quá khứ, Shanks đã cản nắm đấm dung
                    nham của Akainu và đỡ đao của Râu Trắng - người đàn ông mạnh
                    nhất thế giới chỉ với một tay, điều này cho thấy Shanks rất
                    mạnh dù khả năng của anh vẫn chưa được thể hiện nhiều. Hiện
                    tại có nhiều giả thuyết liên quan đến ông chú bí ẩn này của
                    Luffy là một Thiên Long Tinh.
                  </p>
                  <h5>Top 6 - Râu Đen - Marshall D. Teach</h5>
                  <p>Tiền truy nã: 2.247.600.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu6-1627192698163750787659.png"
                    alt="6, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    "Râu Đen" Marshall D. Teach hay người ta thường gọi ông với
                    một cái tên thân mật là Râu Đen. Ông chính là đô đốc của
                    băng hải tặc râu đen và là một trong bốn vị hoàng đế vĩ đại
                    khi nắm trong tay sức mạnh của 2 trái ác quỷ. Theo nhiều giả
                    thuyết thì đây chính là trùm cuối, thách thức lớn nhất mà
                    Luffy phải vượt qua trong tương lai để có thể trở thành Vua
                    Hải Tặc.
                  </p>
                  <h5>Top 7 - Monkey D. Luffy</h5>
                  <p>Tiền truy nã: 1.500.000.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu7-16271927062151754865995.jpg"
                    alt="7, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    Monkey D. Luffy, còn được gọi là "
                    <strong>Luffy Mũ Rơm</strong>" là nhân vật chính của bộ
                    manga và anime <strong>One Piece</strong>. Cậu là người sáng
                    lập và thuyền trưởng của băng hải tặc Mũ Rơm ngày càng khét
                    tiếng và mạnh mẽ. Ước mơ cả đời của cậu là trở thành Vua Hải
                    Tặc bằng cách tìm ra kho báu huyền thoại được để lại bởi Vua
                    Hải Tặc quá cố <strong>Gol D. Roger</strong>. Cậu tin rằng
                    trở thành Vua Hải Tặc đồng nghĩa với việc có nhiều tự do
                    nhất trên thế giới. Hiện tại Luffy đang cùng đồng đội chống
                    lại liên minh 2 Tứ Hoàng là Kaido và Big Mom ở Wano quốc.
                  </p>
                  <h5>Top 8 - Phượng Hoàng Marco</h5>
                  <p>Tiền truy nã: 1.374.000.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/25/gu8-162719280037562442361.jpg"
                    alt="8, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    <strong>Phượng hoàng Marco</strong> là đội trưởng đội 1 của
                    băng hải tặc Râu Trắng. Lý do anh có biệt danh này là do
                    trái ác quỷ hệ Zoan thần thoại mà anh sở hữu có thể giúp anh
                    biến thân thành phượng hoàng theo ý mình. Sau cái chết của
                    Râu Trắng, Marco trở thành người chỉ huy các thành viên của
                    băng hải tặc này. Hiện tại thì Marco đang cùng Luffy chống
                    lại Kaido và Big Mom ở Wano quốc.
                  </p>
                  <h5>Top 9 – Queen Bệnh Dịch</h5>
                  <p>Tiền truy nã: 1.320.000.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu9-1627192710528135529633.jpg"
                    alt="9, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    Queen Bệnh Dịch là all-star của băng hải tặc bách thú. Hắn
                    là 1 trong 3 thuộc hạ thân tín nhất của{" "}
                    <strong>Tứ Hoàng Kaido</strong>. Hiện tại thì ngoài khả năng
                    tấu hài cực mạnh ra thì Queen chưa thể hiện được gì nhiều ở
                    Wano. Hy vọng anh chàng tóc vàng này sẽ có một trận chiến
                    mãn nhãn với Sanji, đầu bếp băng Mũ Rơm.
                  </p>
                  <h5>Top 10 - Charlotte Katakuri</h5>
                  <p>Tiền truy nã: 1.057.000.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/25/u10-1627192719771610624751.jpg"
                    alt="10, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <p>
                    Charlotte Katakuri là con trai thứ hai và là con thứ ba của
                    Gia đình Charlotte, anh trai sinh ba của Charlotte Daifuku
                    và Charlotte Oven. Anh là một trong ba tư lệnh ngọt của băng
                    hải tặc Big Mom cũng như Bộ trưởng Bột của Totto Land quản
                    lý đảo Komugi. Hiện tại Charlotte Katakuri được xem là nhân
                    vật mạnh thứ 2 băng <strong>Tứ Hoàng Big Mom</strong> và là
                    người có Haki quan sát có thể nhìn thấy cả được tương lai
                    gần.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>Top 11 – Jack Hạn Hán</h5>
                  <p>Tiền truy nã: 1.000.000.000</p>
                  <h5>Top 12 - Charlotte Smoothie</h5>
                  <p>Tiền truy nã: 932.000.000</p>
                  <h5>Top 13 - Charlotte Cracker</h5>
                  <p>Tiền truy nã: 860.000.000</p>
                  <h5>Top 14 - Charlotte Perospero</h5>
                  <p>Tiền truy nã: 700.000.000</p>
                  <h5>Top 15 - Tổng tham mưu quân cách mạng Sabo</h5>
                  <p>Tiền truy nã: 602.000.000</p>
                  <h5>Top 16 - Charlotte Snack</h5>
                  <p>Tiền truy nã: 600.000.000</p>
                  <h5>Top 17 -Little Oars Jr.</h5>
                  <p>Tiền truy nã: 550.000.000</p>
                  <h5>Top 18 - Portgas D. Ace</h5>
                  <p>Tiền truy nã: 550.000.000</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/gu12-16271926702231420363257.jpg"
                    alt="12, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUY NÃ ONE PIECE,LUFFY MŨ RƠM,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,ARC WANO,TỨ HOÀNG SHANKS,GOL D. ROGER,PHƯỢNG HOÀNG MARCO,"
                    note=""
                  />
                  <h5>Top 19 - Chinjao</h5>
                  <p>Tiền truy nã: 542.000.000</p>
                  <h5>Top 20 - Izo</h5>
                  <p>Tiền truy nã: 510.000.000</p>
                  <p>
                    Trên đây là top 20 nhân vật có tiền truy nã cao nhất{" "}
                    <strong>One Piece</strong> tính tới thời điểm hiện tại. Các
                    bạn nghĩ sao về danh sách này, hãy để lại ý kiến của mình
                    nhé!
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
