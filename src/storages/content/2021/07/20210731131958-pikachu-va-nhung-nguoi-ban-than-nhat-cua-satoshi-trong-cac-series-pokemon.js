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
"timestamp": '31/07/2021 01:19 PM',
"title": 'Pikachu và những người bạn thân nhất của Satoshi trong các series Pokémon',
"description": 'Kể từ khi ra mắt, loạt Pokémon đã đưa người xem đắm chìm vào những cuộc phiêu lưu kỳ thú của nhân vật chính Satoshi trong thế giới rộng lớn. Và trong cuộc hành trình ấy chắc hẳn là sẽ không thể thiếu những người bạn thân thiết, cùng nhau vượt qua mọi gian nan, khó khăn.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-16277092247282014576557.jpg',
"alt": 'PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,',
"category": 'games',
"date": '31/07/2021',
"time": '01:19 PM',
"link": '/pikachu-va-nhung-nguoi-ban-than-nhat-cua-satoshi-trong-cac-series-pokemon',
"zcomponent": 'page_20210731131958',
"filepath": './20210731131958-pikachu-va-nhung-nguoi-ban-than-nhat-cua-satoshi-trong-cac-series-pokemon.js'
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
  "Pikachu và những người bạn thân nhất của Satoshi trong các series Pokémon";
const author = "MT";
const source = "Trí Thức Trẻ";
const timestamp = "31/07/2021 01:19 PM";
const description =
  "Kể từ khi ra mắt, loạt Pokémon đã đưa người xem đắm chìm vào những cuộc phiêu lưu kỳ thú của nhân vật chính Satoshi trong thế giới rộng lớn. Và trong cuộc hành trình ấy chắc hẳn là sẽ không thể thiếu những người bạn thân thiết, cùng nhau vượt qua mọi gian nan, khó khăn.";
const link =
  "pikachu-va-nhung-nguoi-ban-than-nhat-cua-satoshi-trong-cac-series-pokemon";
const tagparam = ["PIKACHU", "SATOSHI", "POKÉMON", "BẠN THÂN CỦA SATOSHI"];
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

export default function page_20210731131958() {
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
                      Chính những người bạn ấy ngày càng gắn bó và góp phần giúp
                      cho <strong>Satoshi</strong> trưởng thành hơn. Sau đây hãy
                      cùng nhau điểm mặt những người bạn thân nhất của Satoshi
                      trong <strong>Pokémon</strong> nhé!
                    </p>
                    <h5>10. Goh</h5>
                    <p>
                      Mở đầu danh sách lần này sẽ là Goh, người bạn đồng hành
                      mới nhất của <strong>Satoshi</strong>. So với anh bạn chí
                      cốt, Goh ban đầu là một người sống khá khép kín và rất ít
                      khi mở lòng mình với người khác.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-16277092247282014576557.jpg"
                      alt="1, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Nhưng khi cùng nhau trải qua nhiều cuộc hành trình cho đến
                      thời điểm hiện tại, Goh trở nên thân thiết với{" "}
                      <strong>Satoshi</strong> hơn và cả hai có không ít điểm
                      chung thú vị, qua đó tạo dựng nên tình bạn tốt đẹp.
                    </p>
                    <h5>9. May</h5>
                    <p>
                      Trong <strong>Pokémon</strong> Ruby and Sapphire,{" "}
                      <strong>Satoshi</strong> gặp được hai người bạn đồng hành
                      mới là May và em trai cô, Max tại khu vực Hoenn. Qua thời
                      gian, May dần trở thành một người bạn, người đồng đội đáng
                      tin cậy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-1627709227904595671160.jpg"
                      alt="2, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Không chỉ là bạn, May còn rất ngưỡng mộ và xem{" "}
                      <strong>Satoshi</strong> như một người chỉ dẫn, giúp cô
                      tiến bộ hơn trong những trận đấu <strong>Pokémon</strong>.
                    </p>
                    <h5>8. Toàn bộ lớp học ở Alola</h5>
                    <p>
                      Đến với Sun and Moon, <strong>Pokémon</strong> quyết định
                      làm mới mình với cuộc hành trình của{" "}
                      <strong>Satoshi</strong> đến với Alola xinh đẹp, và nhập
                      học tại một ngôi trường ở đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-2-16277092268551209197273.jpg"
                      alt="3, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Tại đây, <strong>Satoshi</strong> kết thân với toàn bộ các
                      thành viên trong lớp học, như Kiawe đầy nhiệt huyết,
                      Sophocles chính trực, Lana ủy điệu nhẹ nhàng và Mallow
                      năng động. Tất cả bọn họ đều cùng nhau trải qua những cuộc
                      phiêu lưu kỳ thú và học được nhiều bài học bổ ích về tình
                      bạn. Đặc biệt là khi series đến hồi kết, cả nhóm đã cùng
                      nhau bay lượn quanh máy bay để tiễn Satoshi trở về lại
                      Kanto.
                    </p>
                    <h5>7. Clemont</h5>
                    <p>
                      Clemont sẽ là cái tên tiếp theo góp mặt trong danh sách
                      lần này. Clemont rất ngưỡng mộ <strong>Satoshi</strong> từ
                      sự dũng cảm, đáng tin cậy và niềm đam mê dành cho{" "}
                      <strong>Pokémon</strong>. Mặc dù bản thân là người đứng
                      đầu của một nhà thi đấu và người bạn đồng hành thông minh
                      nhất nhóm, nhưng Clemont thường hay có cảm giác lo lắng và
                      tìm đến sự giúp đỡ từ Satoshi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-3-16277092289152090959995.jpg"
                      alt="4, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Cả hai đã liên tục giúp đỡ qua lại lẫn nhau, như khi{" "}
                      <strong>Satoshi</strong> hỗ trợ cho Clemont với những phát
                      minh của cậu.
                    </p>
                    <h5>6. Serena</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-4-1627709169699141046983.jpg"
                      alt="5, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Trường hợp của <strong>Satoshi</strong> và Serena lại đặc
                      biệt hơn những người bạn đồng hành khác. Trong khi đối với
                      Satoshi, Serena là một trong những người bạn thân nhất,
                      với cô thì lại còn hơn thế. Serena luôn có một tình cảm
                      rất lớn dành cho cậu. Và đến cuối series, Serena đã trao
                      cho Satoshi một nụ hôn, qua đó tạo nên một trong những
                      phân cảnh kinh điển nhất loạt anime{" "}
                      <strong>Pokémon</strong>.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong cuộc hành trình, cả hai đã có không ít những khoảnh
                      khắc đáng nhớ. Serena quả thực là một người bạn đồng hành
                      đáng tin cậy và rất quan tâm đến <strong>Satoshi</strong>.
                    </p>
                    <h5>5. Misty</h5>
                    <p>
                      Cô gái với phong cách tomboy đến từ thành phố Cerulean là
                      một trong hai người bạn đồng hành đầu tiên của{" "}
                      <strong>Satoshi</strong>. Cả hai bắt đầu tình bạn này kể
                      từ thời điểm khi mà Satoshi lấy xe đạp của cô để nhanh
                      chóng đưa <strong>Pikachu</strong> tới bệnh viện điều trị.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277091826821826668861.jpg"
                      alt="6, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Cùng nhau, Misty và <strong>Satoshi</strong> đã trải qua
                      rất nhiều cuộc hành trình thú vị, trận đấu cam go. Đôi khi
                      cả hai cũng có không ít những màn châm chọc, cà khịa lẫn
                      nhau, tạo nên phút giây vui vẻ.
                    </p>
                    <h5>4. Gary Oak</h5>
                    <p>
                      Gary Oak xuất hiện lần đầu trong series anime đầu tiên của{" "}
                      <strong>Pokémon</strong> và là cháu trai của giáo sư Oak.
                      Ban đầu cậu là một nhân vật ồn ào và có phần cao ngạo.
                      Nhưng qua thời gian và đặc biệt là ở phần Pokémon Journey
                      mới nhất, Gary đã trở trưởng thành, chín chắn hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277091838131168693329.jpg"
                      alt="7, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Gary vừa là bạn vừa là kỳ phùng địch thủ của{" "}
                      <strong>Satoshi</strong>, thúc đẩy nhau ngày càng tiến bộ
                      hơn. Cả hai luôn dành cho nhau sự tôn trọng và ngưỡng mộ
                      rất lớn.
                    </p>
                    <h5>3. Dawn</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-2-1627709185365507732392.jpg"
                      alt="8, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Xuất hiện từ <strong>Pokémon</strong> Black and White,
                      Dawn và <strong>Satoshi</strong> đã luôn thể hiện một tình
                      bạn khắn khít. Dawn luôn đứng ra động viên, cổ vũ tinh
                      thần cho Satoshi mỗi khi mà cậu bước vào trận đấu Pokémon
                      quan trọng. Dawn cũng sẽ quay trở lại để hội ngộ cùng với
                      người bạn thân trong phần Pokémon Journey.
                    </p>
                    <h5>2. Brock</h5>
                    <p>
                      Brock đã trở thành bạn thân, anh em tốt của{" "}
                      <strong>Satoshi</strong> kể từ thời điểm mà cả hai gặp
                      nhau tại series anime đầu tiên. Satoshi ngưỡng mộ Brock
                      bởi sự trưởng thành, thông thái và có kinh nghiệm từng
                      trải. Trong khi Brock lại ấn tượng với lòng quả cảm, tinh
                      thần nghĩa hiệp và quyết tâm từ Satoshi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-3-162770918435595970648.jpg"
                      alt="9, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Ngay sau khi mà series đầu tiên khép lại, Brock vẫn tiếp
                      tục cuộc hành trình với <strong>Satoshi</strong> thêm một
                      vài phần khác trước khi nói lời tạm biệt và đi theo hướng
                      riêng. Cả hai người cũng đã có dịp hội ngộ hội ngộ trong{" "}
                      <strong>Pokémon</strong> Sun and Moon.
                    </p>
                    <h5>1. Pikachu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-4-1627709184860137549838.jpg"
                      alt="10, PIKACHU,SATOSHI,POKÉMON,BẠN THÂN CỦA SATOSHI,"
                      note=""
                    />
                    <p>
                      Cuối cùng sẽ là cái tên gắn bó lâu nhất với{" "}
                      <strong>Satoshi</strong>, <strong>Pikachu</strong>.
                      Satoshi và <strong>Pokémon</strong> của mình đã trải qua
                      không ít cuộc phiêu lưu kỳ thú, từ series này cho tới
                      series khác. Ở họ có một mối liên kết vượt xa bất kỳ nhà
                      huấn luyện với Pokémon nào khác. Cả hai thực sự thấu hiểu
                      và quan tâm lẫn nhau khi có không ít những khoảnh khắc đã
                      chứng minh cho điều đó.
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
