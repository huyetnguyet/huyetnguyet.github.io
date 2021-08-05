import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "components/content";

import { Helmet } from "react-helmet";



/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '04/08/2021 06:58 PM',
"title": 'Dragon Ball Super: Tại sao Whis và các thiên thần khác không bao giờ trực tiếp chiến đấu?',
"description": 'Là một trong những sinh vật mạnh mẽ nhất trong Dragon Ball Super, Whis có thể giải quyết mọi vấn đề mà các anh hùng của chúng ta từng gặp phải - vậy tại sao anh ấy lại không?',
"src": '',
"alt": 'WHIS,THIÊN SỨ,DRAGON BALL SUPER,THIÊN THẦN,THẦN HỦY DIỆT,',
"category": 'games',
"date": '04/08/2021',
"time": '06:58 PM',
"link": '/dragon-ball-super-tai-sao-whis-va-cac-thien-than-khac-khong-bao-gio-truc-tiep-chien-dau',
"zcomponent": 'page_20210804185848',
"filepath": './20210804185848-dragon-ball-super-tai-sao-whis-va-cac-thien-than-khac-khong-bao-gio-truc-tiep-chien-dau.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'games';
const categoryLink = '/games';
const title = 'Dragon Ball Super: Tại sao Whis và các thiên thần khác không bao giờ trực tiếp chiến đấu?';
const author = 'ĐỨC KHƯƠNG';
const source = 'Trí thức trẻ';
const timestamp = '04/08/2021 06:58 PM';
const description = 'Là một trong những sinh vật mạnh mẽ nhất trong Dragon Ball Super, Whis có thể giải quyết mọi vấn đề mà các anh hùng của chúng ta từng gặp phải - vậy tại sao anh ấy lại không?';
const link = 'dragon-ball-super-tai-sao-whis-va-cac-thien-than-khac-khong-bao-gio-truc-tiep-chien-dau';
const tagparam = ["WHIS","THIÊN SỨ","DRAGON BALL SUPER","THIÊN THẦN","THẦN HỦY DIỆT",];
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

export default function page_20210804185848() {
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
              <div className="author">{author}</div> - Theo {source} | {timestamp}
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
                  <div className="contentBodyLeft"><p><strong>Whis</strong> và các <strong>Thiên thần</strong> đồng nghiệp của anh ta là một trong những sinh vật kỳ lạ nhất trong <strong>Dragon Ball Super</strong>. Mặc dù hoạt động với tư cách là người phục vụ cho <strong>Thần hủy diệt</strong>, thế nhưng họ lại có sức mạnh hơn các Thần hủy diệt rất nhiều. Sức mạnh của Goku và Vegeta có bước nhảy vọt trong Dragon Ball Super phần lớn là nhờ vào quá trình huấn luyện của họ, đặc biệt là dưới sự huấn luyện của Whis.</p>
<p><strong>Thiên thần</strong> của Vũ trụ 7 - <strong>Whis</strong> có khả năng hạ gục <strong>Thần hủy diệt</strong> Beerus chỉ bằng một nhát dao, làm người chết sống lại và thậm chí tự tua lại thời gian. Tuy nhiên, anh ta bị cấm chiến đấu hoặc can thiệp vào bất kỳ cuộc xung đột nào đang diễn ra liên tục trong vũ trụ của anh ta. Và dưới đây là lý do tại sao Thiên thần không thể tham gia vào những trận chiến trong vũ trụ của mình.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628047595270677866008.png' alt='1, WHIS,THIÊN SỨ,DRAGON BALL SUPER,THIÊN THẦN,THẦN HỦY DIỆT,' note='Các Thiên thần có đặc điểm chung là nước da xanh, tóc trắng, mắt tím và chiều cao thì khác nhau. Họ đều có các vầng hào quang xung quanh cổ, trang phục có phần giống Zeno nhưng hoa văn trên đó lại giống các Thần hủy diệt.'/>
<p>Các <strong>Thiên thần</strong> của <strong>Dragon Ball Super</strong> đóng vai trò là người cố vấn cho các vị <strong>Thần hủy diệt</strong>, dạy họ cách kiểm soát sức mạnh của sự hủy diệt. Tuy nhiên họ hoạt động dưới vai trò là người phục vụ cho các vị Thần hủy diệt, bởi vậy họ có nghĩa vụ cung cấp cho các vị Thần hủy diệt bất cứ thứ gì mà họ cần đến.</p>
<p>Những <strong>Thiên thần</strong> như <strong>Whis</strong> có thể sẽ không làm bất cứ điều gì trước những mối đe dọa đến vũ trụ, trừ khi được ra lệnh trực tiếp bởi <strong>Thần hủy diệt</strong> trong vũ trụ của họ. Tuy nhiên cũng có lúc họ bơ luôn các vị Thần hủy diệt để thực hiện những nhiệm vụ được giao khác.</p>
<p>Điều đó nói lên rằng, các <strong>Thiên thần</strong> không hoàn toàn tôn trọng <strong>Thần hủy diệt</strong> của họ. Họ phải tuân theo mệnh lệnh của Grand Priest, cha của tất cả các Thiên thần cũng như những người quyền năng nhất.</p>
<p>Trên thực tế Goku đã từng tận mắt chứng kiến và biết rằng sức mạnh của <strong>Whis</strong> thậm chí không là gì so với sức mạnh của Grand Priest.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280475963551265237932.jpeg' alt='2, WHIS,THIÊN SỨ,DRAGON BALL SUPER,THIÊN THẦN,THẦN HỦY DIỆT,' note='Các thiên thần thường không quan tâm đến mạng sống của người khác, điều này không có nghĩa là họ vô đạo đức, chỉ đơn giản đó không phải nhiệm vụ của họ. Như Whis cũng đã giúp quay ngược thời gian cứu lấy trái đất khi Golden Frieza hủy diệt nó, Whis cũng giúp Future Trunks tìm 1 dòng thời gian khác để định cư. Các thiên thần có xu hướng hài hước, vui tính, họ luôn có những lời nói dí dỏm trêu đùa các thần hủy diệt.'/>
<RelationNewsInPage category={category} /><p><strong>Whis</strong> hiếm khi thể hiện sự quan tâm hoặc thậm chí không quan tâm đến bất kỳ thứ gì khác ngoài thức ăn. Trong khi huấn luyện Goku và Vegeta, anh ấy không quá đầu tư vào việc huấn luyện, sẵn sàng bỏ mặc họ cho đến chết để tuân thủ Luật <strong>Thiên thần</strong>. Thật khó để đổ lỗi cho Whis vì sự tận tâm trung thành của anh ta, vì bất kỳ Thiên thần nào vi phạm điều đó sẽ bị Grand Priest xóa sổ ngay lập tức, ngay cả khi anh ta không có mặt.</p>
<p>Điều thú vị là khi <strong>Whis</strong> quay lại thời gian để khôi phục Trái Đất và cho Goku một khả năng mới để đánh bại Frieza nhưng anh ta không bị trừng phạt vì đã can thiệp. Trên thực tế Whis thực hiện điều này vì tin rằng đã tìm ra được lỗ hổng trong luật của Grand Priest bằng cách hành động vì lợi ích của bản thân, thay vì phục hồi Trái Đất để phục vụ nhân loại thì anh ta làm điều đó để phục vụ lợi ích của bản thân - có thể tiếp tục thưởng thức đồ ăn của Trái Đất nên anh ta không bị trừng phạt vì đã can thiệp.</p>
<p>Các <strong>Thiên thần</strong> dường như cũng được miễn Luật Thiên thần nếu họ đang hành động theo lệnh của <strong>Thần hủy diệt</strong>. Theo lệnh của Beerus, <strong>Whis</strong> đã từng giải cứu Goku và phần còn lại của Z-Fighters sau khi họ bị Moro đánh bại. Sau khi làm như vậy, Whis đã hài lòng để mặc cho những chiến binh khác đang hấp hối và phó mặc số phận của họ trước khi phát hiện ra đồng đội của mình - Merus.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-2-1628047597854425309284.jpg' alt='3, WHIS,THIÊN SỨ,DRAGON BALL SUPER,THIÊN THẦN,THẦN HỦY DIỆT,' note='Vì không chiến đấu nên các thiên thần không có các chiêu thức tấn công, tuy nhiên họ có năng lực sáng tạo rất tốt. Các thiên thần có thể tạo ra vật chất từ hư không, xây dựng các võ đài và quan sát mọi thứ trong vũ trụ qua cây trượng. Ngoài ra, ta thấy Whis còn…đỡ đẻ cho Bulma. Có thể thấy quyền năng của các thiên sứ thâm sâu vô cùng, đến lúc này vẫn chưa thấy hết khả năng của họ.'/>
<p>Merus trước đây từng là thành viên của Đội tuần tra thiên hà, thế nhưng Grand Priest đã cho phép anh ta thực hiện điều đó miễn là anh ta không sử dụng khả năng <strong>Thiên thần</strong> của mình theo bất kỳ cách nào. Tuy nhiên, Merus đã trở thành ví dụ điển hình về những gì xảy ra khi một Thiên thần vi phạm luật một cách vô cớ khi chiến đấu với Moro bằng toàn bộ sức mạnh của mình. Khi Merus chiến đấu, anh ta dần trở nên mờ ảo trước khi biến mất hoàn toàn.</p>
<p>Các <strong>Thiên thần</strong> thường được tự do hành động theo ý mình trong <strong>Dragon Ball Super</strong>, miễn là họ vẫn vô tư và không được can thiệp vào những gì đang diễn ra trong vũ trụ của họ. Mặc dù dường như họ cũng bị cấm sử dụng toàn bộ sức mạnh của mình ngay cả trong những bài huấn luyện đơn giản, điều mà <strong>Whis</strong> đã mắng Merus. Ngay cả khi bị Broly tấn công, Whis vẫn từ chối đánh trả - anh biết Grand Priest luôn theo dõi.</p>
                    </div>
                  <AdsHorizontal />
                </div></div>

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
