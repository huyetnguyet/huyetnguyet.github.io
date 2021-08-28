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
"timestamp": '28/08/2021 08:34 AM',
"title": 'Bị anti mỉa mai vòng một "xệ" tới rốn, hot girl Hải Dương tức tối vén áo, phản pháo ngược lại bình luận khiếm nhã',
"description": 'Cô nàng hot girl này đang là tâm điểm sau liên tiếp những tình huống gây tranh cãi trong thời gian gần đây.',
"src": '',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,VÕ THỊ THU TRANG,',
"category": 'images',
"date": '28/08/2021',
"time": '08:34 AM',
"link": '/bi-anti-mia-mai-vong-mot-xe-toi-ron-hot-girl-hai-duong-tuc-toi-ven-ao-phan-phao-nguoc-lai-binh-luan-khiem-nha',
"zcomponent": 'page_20210828083452',
"filepath": './20210828083452-bi-anti-mia-mai-vong-mot-xe-toi-ron-hot-girl-hai-duong-tuc-toi-ven-ao-phan-phao-nguoc-lai-binh-luan-khiem-nha.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'images';
const categoryLink = '/images';
const title = 'Bị anti mỉa mai vòng một "xệ" tới rốn, hot girl Hải Dương tức tối vén áo, phản pháo ngược lại bình luận khiếm nhã';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:34 AM';
const description = 'Cô nàng hot girl này đang là tâm điểm sau liên tiếp những tình huống gây tranh cãi trong thời gian gần đây.';
const link = 'bi-anti-mia-mai-vong-mot-xe-toi-ron-hot-girl-hai-duong-tuc-toi-ven-ao-phan-phao-nguoc-lai-binh-luan-khiem-nha';
const tagparam = ["HOT GIRL","GÁI XINH","CỘNG ĐỒNG MẠNG","VÕ THỊ THU TRANG",];
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

export default function page_20210828083452() {
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
                  <div className="contentBodyLeft">

<p>Sở hữu vòng một lên tới hơn 1,1m, cô nàng nữ sinh Hải Dương từ chỗ là một cô gái bình thường bất ngờ trở thành một <strong>hot girl</strong>, hiện tượng mạng đáng chú ý. Thế nhưng suy cho cùng, điều này đôi khi lại không mang tới quá nhiều những điều tích cực dành cho <strong>Võ Thị Thu Trang</strong> - nhân vật chính trong câu chuyện. Sở dĩ nói vậy là vì, vòng một ngoại cỡ này lại mang tới những phiền toái không đáng có nhiều hơn thì phải.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/22/photo-1-16296080475871428709858.jpg' alt="1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,VÕ THỊ THU TRANG," note='Võ Thị Thu Trang - cô nàng hot girl nổi tiếng với vòng một ngoại cỡ'/>
<p>Cụ thể, việc bất ngờ trở nên nổi tiếng đã khiến cho nàng <strong>hot girl</strong> gặp phải vô số rắc rối trong cuộc sống. Từ việc bị soi mói quá đà về đời tư cho tới vô số những bình luận mang tính chỉ trích, lên án những màn khoe thân có phần gợi cảm và táo bạo quá đà của cô nàng. Thậm chí, trước áp lực dư luận, nàng hot girl còn từng phải tìm tới bác sĩ thực hiện phẫu thuật thu nhỏ ngực kết hợp hút mỡ bụng, đù để hút ra mỗi bên ngực khoảng 1,5 lít mỡ. Tuy nhiên, điều này cũng vẫn khiến Thu Trang tiếp tục gặp không ít chỉ trích.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/22/photo-1-16296083510241829341208.jpg' alt="2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,VÕ THỊ THU TRANG," note='Cô nàng hot girl thường xuyên gặp phải những chỉ trích, lùm xùm không đáng có'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/22/photo-1-1629608402647134993788.jpg' alt="3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,VÕ THỊ THU TRANG," note='Đặc biệt là với những màn khoe thân có phần hơi quá đà, nhạy cảm'/>
<p>Một trong những câu mỉa mai thường thấy nhất của anti-fan dành cho nàng <strong>hot girl</strong> chính là chế giễu vòng một của cô nàng có phần chảy xệ, kém hấp dẫn. Đáp lại, Thu Trang ngay lập tức đăng tải hình ảnh với góc chụp từ trên cao, không hề giấu diếm điểm nhạy cảm trên vòng một của mình. Nhưng khi mà những lời chỉ trích vẫn chưa dừng lại, mới đây, cô nàng lại tiếp tục có động thái thậm chí còn táo bạo hơn, đó là vén áo khoe vòng một khi gặp phải bình luận nói bộ ngực của cô nàng "xệ" tới rốn.</p>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/photo-1-16296086994811853677466.jpg' alt="4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,VÕ THỊ THU TRANG," note='Cô nàng hot girl lên tiếng đáp trả một cách rất thẳng thắn và mạnh mẽ'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/photo-1-16296087457091616404231.jpg' alt="5, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,VÕ THỊ THU TRANG," note='Cận cảnh màn khoe vòng một siêu khủng của cô nàng hot girl'/>
<p>Tất nhiên, màn khoe thân có phần phản cảm như thế này của nàng <strong>hot girl</strong> không hề được các fan đón nhận một cách nồng nhiệt. Thậm chí ở bên dưới, không ít ý kiến còn chỉ trích cô nàng vì việc ngày càng táo bạo, cố tình khoe ngực một cách quá đà. Nên nhớ, chỉ mới đây thôi, cô nàng cũng gặp phải những lùm xùm tương tự sau khi rao bán ảnh nóng trên web cá nhân.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/22/photo-1-16296090078551215895262.jpg' alt="6, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,VÕ THỊ THU TRANG," note='Võ Thị Thu Trang vẫn đang gặp phải rất nhiều bình luận chỉ trích'/>


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
