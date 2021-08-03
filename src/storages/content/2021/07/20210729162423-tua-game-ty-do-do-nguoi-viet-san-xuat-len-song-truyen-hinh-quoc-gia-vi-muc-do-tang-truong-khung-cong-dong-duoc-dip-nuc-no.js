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
"timestamp": '29/07/2021 04:24 PM',
"title": 'Tựa game tỷ đô do người Việt sản xuất lên sóng truyền hình quốc gia vì mức độ tăng trưởng “khủng", cộng đồng được dịp nức nở',
"description": 'Axie Infinity đang trở thành hiện tượng công nghệ toàn cầu khi thu hút hàng trăm nghìn game thủ từ khắp nơi trên thế giới, giá trị vốn hóa lên tới tỷ đô.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-1-16272869695311005334810.jpg',
"alt": 'VTV,game,Axie Infinity,dự án game,2 tỷ usd,Đài truyền hình quốc gia,Nhà sáng lập,công ty công nghệ,nhà phát triển,giá trị vốn hóa,tổng giá trị,tỷ phú công nghệ,',
"category": 'tech',
"date": '29/07/2021',
"time": '04:24 PM',
"link": '/tua-game-ty-do-do-nguoi-viet-san-xuat-len-song-truyen-hinh-quoc-gia-vi-muc-do-tang-truong-khung-cong-dong-duoc-dip-nuc-no',
"zcomponent": 'page_20210729162423',
"filepath": './20210729162423-tua-game-ty-do-do-nguoi-viet-san-xuat-len-song-truyen-hinh-quoc-gia-vi-muc-do-tang-truong-khung-cong-dong-duoc-dip-nuc-no.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  'Tựa game tỷ đô do người Việt sản xuất lên sóng truyền hình quốc gia vì mức độ tăng trưởng “khủng", cộng đồng được dịp nức nở';
const author = "KAYLE,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:24 PM";
const description =
  "Axie Infinity đang trở thành hiện tượng công nghệ toàn cầu khi thu hút hàng trăm nghìn game thủ từ khắp nơi trên thế giới, giá trị vốn hóa lên tới tỷ đô.";
const link =
  "tua-game-ty-do-do-nguoi-viet-san-xuat-len-song-truyen-hinh-quoc-gia-vi-muc-do-tang-truong-khung-cong-dong-duoc-dip-nuc-no";
const tagparam = [
  "VTV",
  "game",
  "Axie Infinity",
  "dự án game",
  "2 tỷ usd",
  "Đài truyền hình quốc gia",
  "Nhà sáng lập",
  "công ty công nghệ",
  "nhà phát triển",
  "giá trị vốn hóa",
  "tổng giá trị",
  "tỷ phú công nghệ",
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

export default function page_20210729162423() {
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
                      Những ngày cuối tháng 7 này là khoảng thời gian mà tin vui
                      ập đến với nhóm sáng lập <strong>game</strong>{" "}
                      <strong>Axie Infinity</strong> khi mà tựa game này đang
                      trở thành hiện tượng toàn cầu với hàng trăm nghìn game thủ
                      từ khắp nơi trên thế giới. Tổng{" "}
                      <strong>giá trị vốn hóa</strong> của{" "}
                      <strong>dự án game</strong> tiền ảo này có những lúc đạt
                      tới 2,7 tỷ USD. Thành công này còn được bản tin của Chuyển
                      động 24h đăng tải, càng khiến cộng đồng game nức nở.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-1-16272869695311005334810.jpg"
                      alt="2, VTV,game,Axie Infinity,dự án game,2 tỷ usd,Đài truyền hình quốc gia,Nhà sáng lập,công ty công nghệ,nhà phát triển,giá trị vốn hóa,tổng giá trị,tỷ phú công nghệ,"
                      note=""
                    />
                    <p>
                      Tựa <strong>game</strong> do người Việt sáng tạo vượt mốc{" "}
                      <strong>2 tỷ USD</strong> - <strong>VTV</strong>24
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-3-16272869696371746171328.png"
                      alt="4, VTV,game,Axie Infinity,dự án game,2 tỷ usd,Đài truyền hình quốc gia,Nhà sáng lập,công ty công nghệ,nhà phát triển,giá trị vốn hóa,tổng giá trị,tỷ phú công nghệ,"
                      note=""
                    />
                    <p>
                      Theo như <strong>Đài truyền hình quốc gia</strong> đưa
                      tin, <strong>Axie Infinity</strong> là tựa{" "}
                      <strong>game</strong> Việt đang khiến cả thế giới "chao
                      đảo", giá trị game tăng chóng mặt 600% chỉ trong tháng 7.
                      Đặc biệt tăng mạnh từ ngày 7/7,{" "}
                      <strong>giá trị vốn hóa</strong> là 0,6 tỷ đô, một tuần
                      sau tăng gấp đôi và tính đến ngày 23/7 là 2,4 tỷ đô.
                    </p>
                    <p>
                      Lý giải sự cuốn hút <strong>Axie Infinity</strong>, được
                      biết đây là trò chơi có sự kết hợp giữa{" "}
                      <strong>game</strong> và tiền ảo, 2 chủ đề hết sức hấp
                      dẫn, đặc biệt với người trẻ. Trong game, bối cảnh là một
                      vũ trụ của các thú cưng (được gọi là các axie). Người chơi
                      sẽ điều khiển đội quân axie của mình để chiến đấu với
                      những người chơi khác và nhận về phần thưởng. Họ cũng có
                      thể lai tạo các axie để cho ra đời những nhân vật mới và
                      bán các axie đó để kiếm lời.
                    </p>
                    <p>
                      Bên cạnh đó, đồ họa đẹp và <strong>game</strong>play hấp
                      dẫn, phát triển trên nền tảng Blockchain nên người dùng có
                      thể trao đổi, mua bán các nhân vật với nhau và quy điểm
                      thưởng trong game ra tiền bằng việc bán cho các người chơi
                      khác. Chơi game nhưng vẫn kiếm được tiền, đó là lý do{" "}
                      <strong>Axie Infinity</strong> đang trở thành một hiện
                      tượng toàn cầu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-1-1627286967903452974596.png"
                      alt="1, VTV,game,Axie Infinity,dự án game,2 tỷ usd,Đài truyền hình quốc gia,Nhà sáng lập,công ty công nghệ,nhà phát triển,giá trị vốn hóa,tổng giá trị,tỷ phú công nghệ,"
                      note="Làng game chúc mừng sự thành công của nhà phát triển người Việt."
                    />
                    <p>
                      Thành công của tựa <strong>game</strong> cán mốc tỷ đô này
                      sẽ giúp Việt Nam có một <strong>tỷ phú công nghệ</strong>{" "}
                      đầu tiên là anh Nguyễn Thành Trung (1992), "cha đẻ" game
                      Việt hấp dẫn này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-2-16272869695861832427659.png"
                      alt="3, VTV,game,Axie Infinity,dự án game,2 tỷ usd,Đài truyền hình quốc gia,Nhà sáng lập,công ty công nghệ,nhà phát triển,giá trị vốn hóa,tổng giá trị,tỷ phú công nghệ,"
                      note=""
                    />
                    <p>
                      Trước khi sáng lập Sky Mavis và bắt tay vào gây dựng tựa{" "}
                      <strong>game</strong> <strong>Axie Infinity</strong>, tài
                      năng này chính là <strong>nhà sáng lập</strong> kiêm Giám
                      đốc công nghệ của Lozi - mạng xã hội chia sẻ địa điểm ăn
                      uống. Anh còn từng làm việc tại TrustSocial - nhà cung cấp
                      hồ sơ rủi ro tín dụng lớn nhất châu Á với hơn 1 tỷ người
                      dùng tại Ấn Độ, Indonesia, Việt Nam và Philippines. Là
                      nhân sự của Anduin Transactions - một{" "}
                      <strong>công ty công nghệ</strong> tài chính có trụ sở đặt
                      tại Mỹ.
                    </p>
                    <p>Ảnh: Internet</p>
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
