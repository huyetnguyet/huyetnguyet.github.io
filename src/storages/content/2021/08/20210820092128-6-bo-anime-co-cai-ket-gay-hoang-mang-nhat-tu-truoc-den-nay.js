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
"timestamp": '20/08/2021 09:21 AM',
"title": '6 bộ anime có cái kết gây hoang mang nhất từ trước đến nay',
"description": 'Không phải mọi manga và anime đều có một cái kết êm đẹp, chiều lòng khán giả.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/confusing-anime-endings-feature-1629252662239440709171.jpg',
"alt": 'ANIME,MANGA,ENDING,KHÁM PHÁ,',
"category": 'games',
"date": '20/08/2021',
"time": '09:21 AM',
"link": '/6-bo-anime-co-cai-ket-gay-hoang-mang-nhat-tu-truoc-den-nay',
"zcomponent": 'page_20210820092128',
"filepath": './20210820092128-6-bo-anime-co-cai-ket-gay-hoang-mang-nhat-tu-truoc-den-nay.js'
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
const title = "6 bộ anime có cái kết gây hoang mang nhất từ trước đến nay";
const author = "Jessie Mai";
const source = "Trí Thức Trẻ";
const timestamp = "20/08/2021 09:21 AM";
const description =
  "Không phải mọi manga và anime đều có một cái kết êm đẹp, chiều lòng khán giả.";
const link = "6-bo-anime-co-cai-ket-gay-hoang-mang-nhat-tu-truoc-den-nay";
const tagparam = ["ANIME", "MANGA", "ENDING", "KHÁM PHÁ"];
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

export default function page_20210820092128() {
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
                      Một series <strong>anime</strong>/<strong>manga</strong>{" "}
                      nổi tiếng và hấp dẫn đến đâu đôi khi cũng không tránh khỏi
                      những cú twist khiến khán giả quay xe không kịp. Một số
                      tác giả hoặc biên kịch anime/manga đã lựa chọn những kết
                      thúc rất khó hiểu, nếu chưa nói là gây hoang mang và khiến
                      nhiều người thất vọng. Nếu chưa nghĩ ra tựa anime nào có
                      những "cú lừa" ở phần cuối khiến bạn mệt mỏi, thì hãy{" "}
                      <strong>khám phá</strong> những cái tên dưới đây nhé!
                    </p>
                    <h5>1. Neon Genesis Evangelion</h5>
                    <p>
                      Kết thúc ban đầu của Neon Genesis Evangelion khiến cả fan
                      lẫn người qua đường đều khó hiểu. Shinji, người đang phải
                      chống chọi với cơn khủng hoảng hiện sinh của mình, nhận ra
                      rằng anh cần tới bạn bè và đoàn tụ với họ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/confusing-anime-endings-feature-1629252662239440709171.jpg"
                      alt="1, ANIME,MANGA,ENDING,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Những người bạn đứng vây quanh Shinji và chúc mừng anh,
                      nhưng không rõ cảnh tượng kỳ quái này có thực sự xảy ra
                      hay là do Shinji tưởng tượng.
                    </p>
                    <h5>2. Ghost in the Shell</h5>
                    <p>
                      <strong>Anime</strong> Ghost in the Shell lấy bối cảnh ở
                      một vũ trụ với những logic khoa học kiểu cyberpunk. Cả bộ{" "}
                      <strong>manga</strong> và bộ phim năm 1995 của Ghost in
                      the Shell đều xoay quanh một nhân vật phản diện có tên
                      Puppet Master. Section 9 cho rằng họ có thể đánh bại được
                      Puppet Master bằng cách hợp nhất hồn ma của hắn ta với
                      Kusanagi và có vẻ hiệu quả, nhưng Puppet Master không hoàn
                      toàn chết đi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/neon-genesis-evangelion-anime-show-ending-1629252682498686303722.jpg"
                      alt="2, ANIME,MANGA,ENDING,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Đó là một cái kết mơ hồ và chưa thỏa mãn được nhiều khán
                      giả. Có thể rằng Kusanagi đã tích hợp thành công Puppet
                      Master vào mình, hoặc cô trở thành một cơ thể mới cho hắn
                      ta.
                    </p>
                    <h5>3. Berserk</h5>
                    <p>
                      <strong>Manga</strong> Berserk vẫn tiếp tục phát triển,
                      nhưng <strong>anime</strong> đã kết thúc với một tình tiết
                      gây hoang mang. Griffith trở thành một vị thần bằng cách
                      hy sinh bạn bè của mình, sau đó tấn công tàn bạo một người
                      phụ nữ ngay trước mặt Guts.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/ghost-in-the-shell-1995-anime-1629252698267440761433.jpg"
                      alt="3, ANIME,MANGA,ENDING,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Một cảnh post-credit đã cho thấy Guts đã lên kế hoạch trả
                      thù cho điều này, nhưng cái kết trên vẫn quá khó hiểu, đột
                      ngột đến mức fan khó có thể quên được.
                    </p>
                    <h5>4. Fullmetal Achemist</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/berserk-guts-dragon-slayer-cropped-16292527108021466688007.jpg"
                      alt="4, ANIME,MANGA,ENDING,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Loạt <strong>anime</strong> của Fullmetal Alchemist ban
                      đầu khác rất nhiều so với <strong>manga</strong>, vì manga
                      vẫn chưa kết thúc ở thời điểm sản xuất anime. Nhà sản xuất
                      chỉ có thể "đoán" cái kết của Fullmetal Alchemist với
                      phong cách rất Game of Thrones.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Điều này dẫn đến một <strong>ending</strong> điên rồ,
                      trong đó Alphonse hy sinh bản thân vì Ed và Ed sau đó hy
                      sinh bản thân để đưa Alphonse trở lại. Thay vì chết, Ed
                      tới một vũ trụ song song. Đó hóa ra lại là thế giới thực
                      của chúng ta, khi Thế chiến 2 vẫn xảy ra.
                    </p>
                    <h5>5. FLCL</h5>
                    <p>
                      Chẳng có gì ngạc nhiên khi Gainax- studio đã mang đến
                      Evangelion và Gurren Lagann lại có một bộ{" "}
                      <strong>anime</strong> khác trong danh sách này. Một số
                      thành viên khác của Gainax sau này còn thành lập nên
                      Studio Trigger và cho ra mắt Kill La Kill, Promare nổi
                      tiếng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/fullmetal-alchemist-edward-elric-cropped-16292527296261415377481.jpg"
                      alt="5, ANIME,MANGA,ENDING,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Lấy cảm hứng từ công nghệ và người ngoài hành tinh, FLCL
                      mang đến một làn thế giới mới mẻ nhưng không kém phần mơ
                      hồ và hỗn loạn. Cái kết của FLCL cũng giống như nhiều bộ{" "}
                      <strong>anime</strong> của Gainax và Trigger – vô cùng khó
                      hiểu, hoang mang và khó giải thích bằng lời.
                    </p>
                    <h5>6. Akira</h5>
                    <p>
                      Akira chắc chắn là một trong những <strong>anime</strong>{" "}
                      movie được yêu thích nhất mọi thời đại. Nhưng kết thúc của
                      bộ anime này và thậm chí cả loạt <strong>manga</strong>{" "}
                      cũng khiến người xem không khỏi hụt hẫng. Anime đã kết
                      thúc bằng một vụ nổ theo đúng nghĩa đen, với lời tường
                      thuật của một nhân vật rằng thế giới mới đang đến.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/flcl-anime-cropped-1629252780956194598173.jpg"
                      alt="6, ANIME,MANGA,ENDING,KHÁM PHÁ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/akira-satellite-orbital-laser-attacks-tetsuo-1629252768376511705754.jpg"
                      alt="7, ANIME,MANGA,ENDING,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Sau đó là những ánh sáng và hình dạng lẫn lộn với nhau,
                      được hiểu là tàn tích của vụ nổ đang tạo nên một vũ trụ
                      mới.
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
