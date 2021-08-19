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
"timestamp": '15/08/2021 04:07 PM',
"title": 'Những tựa game tưởng là kết thúc có hậu nhưng hóa ra toàn lừa',
"description": 'Cứ nghĩ kỹ đi là bạn sẽ hiểu vấn đề xảy ra là kỳ quặc và lắm vấn đề hơn nhiều so với tưởng tượng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-1-1629044886251622526273.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '15/08/2021',
"time": '04:07 PM',
"link": '/nhung-tua-game-tuong-la-ket-thuc-co-hau-nhung-hoa-ra-toan-lua',
"zcomponent": 'page_20210815160724',
"filepath": './20210815160724-nhung-tua-game-tuong-la-ket-thuc-co-hau-nhung-hoa-ra-toan-lua.js'
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
const title = "Những tựa game tưởng là kết thúc có hậu nhưng hóa ra toàn lừa";
const author = "DS";
const source = "Pháp luật và bạn đọc";
const timestamp = "15/08/2021 04:07 PM";
const description =
  "Cứ nghĩ kỹ đi là bạn sẽ hiểu vấn đề xảy ra là kỳ quặc và lắm vấn đề hơn nhiều so với tưởng tượng.";
const link = "nhung-tua-game-tuong-la-ket-thuc-co-hau-nhung-hoa-ra-toan-lua";
const tagparam = ["GAME"];
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

export default function page_20210815160724() {
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
                    <h5>1. Super Mario Bros.</h5>
                    <p>
                      Để cứu công chúa Peach thì Mario đã phải trải qua rất
                      nhiều gian truân và tiến đến lâu đài của Koopa. Vì thế nên
                      khi Mario giành chiến thắng trước King Koopa và những đứa
                      con của hắn ta trong Super Mario Bros. 3 và Super Mario
                      World thì <strong>game</strong> thủ đã vô cùng hân hoan vì
                      đã hoàn thành nhiệm vụ của mình, tận hưởng một kết thúc có
                      hậu cùng công chúa Peach.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-1-1629044886251622526273.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Nhưng nghĩ lại thì những đứa con của Koopa có tội tình gì
                      mà lại bị Koopa đưa ra đối đầu với Mario? Cho dù bị "nhồi
                      sọ" hay bị bắt buộc chiến đấu thì cũng đều không phải là
                      đối thủ của Mario, và đều phải chấp nhận số phận – bị
                      Mario xử nhanh gọn lẹ. Lẽ ra anh thợ sửa ống nước này phải
                      giải thoát cho những đứa trẻ này, hoặc là dạy cho tụi nó
                      một bài học rồi tống khứ chúng đi chỗ khác. Nhưng không,
                      Mario giết tụi nhỏ luôn, và cho nổ tung tòa lâu đài, sẵn
                      tiện chôn vùi bọn chúng dưới đống gạch đổ nát luôn. Xem ra
                      Mario không phải là một người thân thiện cho lắm nhỉ.
                    </p>
                    <h5>2. Heavy Rain</h5>
                    <p>
                      Heavy Rain có tới 7 kết thúc, trong đó 3 kết thúc là nhân
                      vật chính sẽ tự tử, và một vài kết thúc còn lại thì hung
                      thủ trong <strong>game</strong> vẫn sống nhởn nhơ ngoài
                      vòng pháp luật, nhưng trong đó lại có một kết thúc kha là
                      "lý tưởng". Với kết thúc này thì chúng ta sẽ thấy Ethan
                      cùng với Madison và con trai Shaun vừa được giải thoát
                      cùng nhau sống chung vui: khi mà hung thủ Scott đã bị giết
                      chết và Norman đột nhiên không còn là một con nghiện nữa.
                      Mọi thứ đều màu hồng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-16290447462801809111421.png"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      Nhưng sự thật lại không hẳn là như vậy. Bên cạnh việc
                      Ethan vẫn còn gặp phải những vấn đề về tâm lý thì với cái
                      chết của đứa con đầu lòng, rất khó để có thể tin rằng các
                      dịch vụ xã hội (social services) sẽ cho phép anh ta tiếp
                      tục chung sống với đứa con hiện tại của mình. Việc dẫn đứa
                      con ra công viên chơi một mình, trong khi chính bản thân
                      đang có vấn đề quả thực là khó thể nào tin được. Và cũng
                      chính vì sự vô tâm của Ethan mà đứa con đầu tiên của anh
                      ta phải bỏ mạng khi cả 2 lạc mất nhau trong một khu mua
                      sắm. Việc chăm sóc con cái một cách thoải mái, không bó
                      buộc là một chuyện; nhưng khi nó dẫn đến cái chết của đứa
                      con đầu lòng, và mém nữa thì đứa con thứ 2 phải bỏ mạng
                      thì lẽ ra Ethan phải bị tước quyền nuôi dạy con cái mới
                      đúng.
                    </p>
                    <h5>3. Streets of Rage</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-1-16290448588562040656574.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      {" "}
                      Streets of Rage có 2 kết thúc, một cái thì cứ phá đảo với
                      chế độ singleplayer là được, và đây được xem như là cái
                      kết có hậu. Còn cái kết thúc kia thì chỉ có thể xem được
                      khi chơi 2 người mà thôi. Khi anh em đối mặt với con trùm
                      cuối, hắn ta sẽ cho 2 nhân vật chính cơ hội để gia nhập
                      vào băng nhóm của hắn ta. Nếu một người đồng ý và một
                      người không đồng ý thì tên trùm sẽ cho 2 bạn… solo với
                      nhau đến chết nhằm chứng tỏ sự trung thành với hắn ta. Sau
                      khi solo xong thì bạn sẽ được đánh tay đôi tiếp với con
                      trùm cuối và nắm trong tay cả một đế chế, được mọi người
                      công nhận.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuy nhiên, khả năng cao là thời gian bạn nắm quyền sẽ
                      không được lâu vì thuộc hạ cũng chẳng còn bao nhiêu và
                      nhân vật chính của chúng ta sẽ phải tự thân bảo vệ đế chế
                      của mình. Nói chung là nó sẽ khiến tất cả nỗ lực của bản
                      thân, kể cả việc phản bội người bạn của mình, trở nên vô
                      nghĩa. Hoặc một diễn biến khác thì những đám lâu la phía
                      dưới sẽ nổi dậy và tìm cách "phế truất" rồi giết người sếp
                      mới này.{" "}
                    </p>
                    <h5>4. Uncharted 2</h5>
                    <p>
                      {" "}
                      Nathan Drake tiếp tục cuộc hành trình báo thù của mình khi
                      người bạn Elena xém bị mất mạng bởi một trái lựu đạn.
                      Drake đã đối đầu với Lazarevic – lúc này gần như là bất tử
                      sau khi uống nhựa cây Tree Of Life – và cuối cùng thì anh
                      cũng đã tìm ra cách tiêu diệt tên này: cứ để những giám hộ
                      của thành phố Shambhala xử lý hắn ta là được. Lazarevic
                      chết, Nathan và Elena hôn nhau, mặt trời lặn, mọi thứ đều
                      tốt đẹp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-1629044973440501611436.jpg"
                      alt="4, GAME,"
                      note=""
                    />
                    <p>
                      Nhưng cũng giống như nhân vật Indiana Jones, Nathan Drake
                      lại không thể bảo vệ được thứ mà đáng lẽ ra anh ta phải
                      bảo vệ. Lẽ ra Drake phải là người khám phá ra những cổ vật
                      và địa điểm mang tính lịch sử và bảo tồn nó, nhưng ngược
                      lại, anh ta đã khiến cho cây Tree Of Life banh chành và
                      kết quả là vương quốc Shambhala lộng lẫy cũng banh xác
                      luôn. Thay vì giúp những người dân nơi đây trốn thoát thì
                      Drake đã cho nổ tung mọi thứ và cứ thế đi về với người yêu
                      của mình.
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
