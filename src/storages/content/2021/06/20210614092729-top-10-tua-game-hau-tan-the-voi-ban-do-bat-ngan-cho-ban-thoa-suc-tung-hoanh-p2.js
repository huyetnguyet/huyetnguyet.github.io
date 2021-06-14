import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '14/06/2021 09:27 AM',
"title": 'Top 10 tựa game hậu tận thế với bản đồ bạt ngàn cho bạn thỏa sức tung hoành (P.2)',
"description": 'Những tựa game cho anh em tha hồ giải trí.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16234995858851322117157.jpg',
"alt": 'Cong Dong Mang, Tin Tuc Game, Game, Game Thu, Sinh Ton, The Gioi Mo, ',
"category": 'games',
"date": '14/06/2021',
"time": '09:27 AM',
"link": '/top-10-tua-game-hau-tan-the-voi-ban-do-bat-ngan-cho-ban-thoa-suc-tung-hoanh-p2',
"zcomponent": 'page_20210614092729',
"filepath": './20210614092729-top-10-tua-game-hau-tan-the-voi-ban-do-bat-ngan-cho-ban-thoa-suc-tung-hoanh-p2.js'
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
  "Top 10 tựa game hậu tận thế với bản đồ bạt ngàn cho bạn thỏa sức tung hoành (P.2)";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "14/06/2021 09:27 AM";
const description = "Những tựa game cho anh em tha hồ giải trí.";
const link =
  "top-10-tua-game-hau-tan-the-voi-ban-do-bat-ngan-cho-ban-thoa-suc-tung-hoanh-p2";
const tagparam = [
  "cong-dong-mang",
  "tin-tuc-game",
  "game",
  "game-thu",
  "sinh-ton",
  "the-gioi-mo",
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

export default function page_20210614092729() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
                    Qua từng năm tháng thì những tựa <strong>game</strong> thế
                    giới mở càng có bản đồ rộng lớn và đồng thời bên trong cũng
                    ẩn chứa rất nhiều điều hay ho cho game thủ khám phá. Bên
                    cạnh những bối cảnh thành phố trù phú, hiện đại thì chúng ta
                    cũng không thiếu những tựa game lấy bối cảnh hậu tận thế
                    mang màu sắc hoang tàn, đầy ảm đạm. Sau đây là top 10 tựa
                    game hậu tận thế với bản đồ bạt ngàn cho bạn thỏa sức tung
                    hoành.
                  </p>
                  <h3>Subnautica – 128,72 km²</h3>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16234995858851322117157.jpg"
                    alt="Cong Dong Mang, Tin Tuc Game, Game, Game Thu, Sinh Ton, The Gioi Mo, "
                    note=""
                  />
                  <p>
                    Thường thì nhắc đến <strong>game</strong> hậu tận thế, chúng
                    ta sẽ không nghĩ đến tựa game bơi với cá Subnautica. Trò này
                    có bối cảnh tại một thế giới ngoài hành tinh mà phần lớn
                    toàn là nước. Sâu bên dưới sẽ là thảm thực vật đa dạng và
                    quần thể sinh vật phong phú. Tuy nhiên, theo cốt truyện hé
                    lộ thì những người sống trên hành tinh này đã bị diệt chủng
                    bởi một đợt đại dịch.
                  </p>
                  <p>
                    Trong vai một thành viên trong phi hành đoàn đâm xuống hành
                    tinh này, bạn sẽ phải tìm ra phương thuốc để chữa khỏi bệnh
                    dịch trước khi tìm cách rời khỏi nơi đây. Người chơi cần tìm
                    những món đồ công nghệ và một số thứ trong thiên nhiên để
                    xây dựng, sinh tồn, và khám phá những vực sâu trong
                    Subnautica.
                  </p>
                  <h3>DayZ – 231,8 km²</h3>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-1623499587610703202102.jpg"
                    alt="Cong Dong Mang, Tin Tuc Game, Game, Game Thu, Sinh Ton, The Gioi Mo, "
                    note=""
                  />
                  <p>
                    Không nhiều <strong>game</strong> thủ biết đến trò Arma II,
                    nhưng với bản mod zombie thì nó đã nhanh chóng thu hút được
                    lượng lớn fan trong cộng đồng. Từ thành công này, chúng ta
                    có một tựa game hoàn chỉnh mang tên DayZ. Game có bối cảnh
                    hậu tận thế tại Cộng hòa Chernarus thuộc Liên Xô cũ, sau khi
                    đợt dịch zombie tàn sát hầu hết loài người. Khác với những
                    tựa game cũng lấy đề tài zombie, DayZ có gameplay thực tế
                    hơn nhiều.
                  </p>
                  <p>
                    Bạn sẽ được tạo nhân vật cho riêng mình và cần phải đảm bảo
                    những yếu tố như đói, khát, bệnh tật, thương tích, máu và
                    thậm chí là nhiệt độ. Vì cả zombie lẫn những người chơi khác
                    đều có tai rất thính nên bạn cần phải tìm cách di chuyển sao
                    cho ít tạo ra tiếng động để tránh gây sự chú ý. Cũng chính
                    vì phải bò trườn nhiều nên bạn sẽ cảm thấy bản đồ trong{" "}
                    <strong>game</strong> lại càng rộng lớn hơn so với con số
                    trên kia.
                  </p>
                  <h3>Fallout 76 – gần 310 km²</h3>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-2-1623499589155281833385.jpg"
                    alt="Cong Dong Mang, Tin Tuc Game, Game, Game Thu, Sinh Ton, The Gioi Mo, "
                    note=""
                  />
                  <p>
                    Kể từ tựa <strong>game</strong> Fallout đầu tiên ra mắt thì
                    dòng game hậu tận thế này đã nổi tiếng với những bản đồ rộng
                    dã man đi hoài không hết. Qua nhiều tựa game, từ phong cách
                    top-down thời kỳ đầu đến đến định dạng 3D như hiện tại, tựa
                    game đã đưa người chơi đi khắp nước Mỹ. Câu chuyện của
                    Fallout 3 diễn ra ở Washington, D.C cho đến New Vegas ở
                    Nevada, Fallout 4 thì ở Massachusetts.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Tựa <strong>game</strong> mới nhất của dòng game là Fallout
                    76, lấy bối cảnh ở miền Tây Virginia 25 năm sau chiến tranh
                    hạt nhân. Mặc dù vấp phải nhiều phản ứng trái chiều khi
                    chuyển thành một tựa <strong>game thu</strong>ần online,
                    Fallout 76 vẫn mang đến cho bạn một bản đồ siêu rộng lớn,
                    trên 300km² để trải nghiệm.
                  </p>
                  <h3>Death Stranding – 1362 km²</h3>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-3-1623499588663713310602.jpg"
                    alt="Cong Dong Mang, Tin Tuc Game, Game, Game Thu, Sinh Ton, The Gioi Mo, "
                    note=""
                  />
                  <p>
                    Death Stranding – Siêu phẩm mới nhất của Hideo Kojima –
                    người đã khai sinh ra thể loại <strong>game</strong> hành
                    động lén lút với series Metal Gear. Đây Là một trong những
                    tựa game được đánh giá là có độ hoàn thiện cao nhất cả về
                    hình ảnh lẫn nội dung. Tựa game lấy bối viễn tưởng ở một
                    nước Mỹ hậu tận thế, khi thế giới mà chúng ta từng biết đã
                    thay đổi hoàn toàn, các sinh vật hoang dã đã gần như bị
                    tuyệt diệt và những thực thể hắc ám và bí ẩn bắt đầu xuất
                    hiện ở khắp nơi. Chúng tàng hình và chỉ để lại những dấu bàn
                    tay đầy ám ảnh khi đi qua.
                  </p>
                  <p>
                    Người chơi sẽ vào vai anh chàng "shipper" Sam Bridges trên
                    những chặng hành trình đầy khắc nghiệt, băng qua sông suối
                    núi đồi trên khắp nước Mỹ, đương đầu với thế lực siêu hình
                    để kết nối những người còn sống lại với nhau. Và chính vì
                    phần lớn thời lượng <strong>game</strong> bạn sẽ dùng để di
                    chuyển nên game cũng phải có cái map rộng dã man (1362 km²)
                    cho bạn tung hoành.
                  </p>
                  <h3>Fuel – 1440 km²</h3>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-4-1623499588148795521783.jpg"
                    alt="Cong Dong Mang, Tin Tuc Game, Game, Game Thu, Sinh Ton, The Gioi Mo, "
                    note=""
                  />
                  <p>
                    Đối với một tựa <strong>game</strong> thế giới mở hậu tận
                    thế thì trải nghiệm lái lái xe thường rất quan trọng. Đối
                    với một số tựa game như Mad Max và Rage thì việc lái xe
                    quanh những vùng đất cằn cỗi hoang tàn chính là một trong
                    những điểm nhấn lớn nhất. Fuel thì lại còn tiến xa hơn nữa,
                    đây là một tựa game đua xe lấy bối cảnh hậu tận thế, khi
                    phần lớn bề mặt Trái Đất đều đã bị mặt trời thiêu rụi.
                  </p>
                  <p>
                    Bạn sẽ vào vai một tay đua vô danh, lái xe vòng quanh những
                    khu vực còn sót lại của trái đất và tham gia vào những cuộc
                    đua sống còn. Trong lúc rảnh rỗi và không đua thì bạn sẽ có
                    cả một bản đồ siêu rộng khổng lồ đến 1440km² để tha hồ khám
                    phá.
                  </p>
                  <p>
                    Nguồn The <strong>Game</strong>r biên dịch GVN360
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
