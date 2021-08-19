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
"timestamp": '15/08/2021 04:04 PM',
"title": 'Thưởng 300 triệu cho anti-fan nếu như chấp nhận lộ mặt và xinh hơn mình, nữ streamer "siêu vòng một" bị chỉ trích vì chơi trội',
"description": 'Cô nàng streamer này tỏ ra khá hào phóng nhưng không kém phần cứng rắn với anti-fan.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-3-1629016213938230464243.jpg',
"alt": 'streamer,Siêu vòng một,antifan,',
"category": 'images',
"date": '15/08/2021',
"time": '04:04 PM',
"link": '/thuong-300-trieu-cho-anti-fan-neu-nhu-chap-nhan-lo-mat-va-xinh-hon-minh-nu-streamer-sieu-vong-mot-bi-chi-trich-vi-choi-troi',
"zcomponent": 'page_20210815160425',
"filepath": './20210815160425-thuong-300-trieu-cho-anti-fan-neu-nhu-chap-nhan-lo-mat-va-xinh-hon-minh-nu-streamer-sieu-vong-mot-bi-chi-trich-vi-choi-troi.js'
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
const title = 'Thưởng 300 triệu cho anti-fan nếu như chấp nhận lộ mặt và xinh hơn mình, nữ streamer "siêu vòng một" bị chỉ trích vì chơi trội';
const author = 'MẶT TRỨNG,';
const source = 'Pháp luật & Bạn đọc';
const timestamp = '15/08/2021 04:04 PM';
const description = 'Cô nàng streamer này tỏ ra khá hào phóng nhưng không kém phần cứng rắn với anti-fan.';
const link = 'thuong-300-trieu-cho-anti-fan-neu-nhu-chap-nhan-lo-mat-va-xinh-hon-minh-nu-streamer-sieu-vong-mot-bi-chi-trich-vi-choi-troi';
const tagparam = ["streamer","Siêu vòng một","antifan",];
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

export default function page_20210815160425() {
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

<p>Cô nàng <strong>streamer</strong> này tỏ ra khá hào phóng nhưng không kém phần cứng rắn với anti-fan.</p>
<p>Nhân vật chính trong câu chuyện lần này là Ran - một trong những người được coi là nữ thần gợi cảm của làng <strong>streamer</strong> tại Hàn Quốc. Sở hữu đôi gò bồng đảo siêu "khủng", thậm chí kích thước có khi còn phải xấp xỉ 1m, cô gái xinh đẹp này luôn là tâm điểm của sự chú ý trong mỗi lần xuất hiện. Tuy vậy, cũng phải thừa nhận rằng bản thân Ran cũng là một cái tên thường xuyên tạo ra những lùm xùm, tranh cãi và không hiểu vì một lý do nào đó mà nàng streamer này luôn có lượng anti-fan rất đông đảo.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-1629016209330281832610.jpg' alt='1, streamer,Siêu vòng một,antifan,' note='Ran - cô nàng streamer sở hữu vòng một ngoại cỡ'/>
<p>Tuy nhiên, đáng nói là cách phản ứng của Ran trước các anti-fan luôn ở mức không khoan nhượng. Bị chê là vòng một hack cheat, cô nàng tới thẳng bệnh viện chụp X-quang để chứng minh không hề dao kéo. Bị tố là chỉ biết dùng ngực để câu kéo fan, thậm chí còn bày tỏ sự hả hê khi cô nàng <strong>streamer</strong> vướng vào scandal bị quấy rối, Ran thậm chí còn lập hẳn danh sách để khởi kiện các anti-fan của mình. Nhiều người thậm chí còn không tin rằng nữ streamer làm thật, cho tới khi cô công bố danh sách anti-fan cụ thể đồng thời thắc mắc rằng tại sao đa số những người dùng ngôn từ quấy rối, đả kích mình lại là phụ nữ.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290162134311483146513.jpg' alt='2, streamer,Siêu vòng một,antifan,' note='Không hiểu vì lý do gì mà nàng streamer có rất nhiều anti-fan'/>
<p>Và thay vì lựa chọn phương án mềm mỏng, Ran luôn "đốp chát" thẳng thừng với anti</p>
<p>Dẫn chứng mới nhất thì có thể thấy như trong câu chuyện dưới đây, khi đang tranh cãi một vấn đề với người xem trên sóng, cô nàng bất ngờ nhận được tin nhắn mang hàm ý tiêu cực từ phía một người xem. Trong khi Ran bày tỏ sự không hài lòng thì càng bất ngờ hơn khi đối phương thẳng thừng "gạ kèo": "Bạn dám nói vậy khi gặp nhau ngoài đời không?".</p>
<RelationNewsInPage category={category} />
<p>Cô nàng <strong>streamer</strong> cũng khá bất ngờ khi bị "gạ kèo" thẳng thừng trên sóng</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-6-1629016213250628061417.jpg' alt='3, streamer,Siêu vòng một,antifan,' note='Và cũng đáp lại khá mạnh mẽ'/>
<p>Tất nhiên, với bản tính của mình, nữ <strong>streamer</strong> cũng không hề tỏ ra e ngại mà sẵn sàng nhận lời luôn, cho rằng nếu như cô nàng anti-fan kia dám để lộ mặt thật, mà gương mặt ấy phải xinh xắn hơn mình, Ran sẵn sàng bắn cho cô ta 1 triệu won (khoảng 20 triệu VND) như một món quà ra mắt. Dần dần, con số sau đó thậm chí còn được điều chỉnh lên thành 15 triệu won chỉ với hai điều kiện trên: lộ mặt thật và xinh hơn Ran.</p>
<p>Ran treo thưởng hẳn 300 triệu cho đối phương lộ mặt sau màn bị gạ "hẹn gặp ngoài đời"</p>
<p>Tuy nhiên, phía bên kia lại từ chối lời đề nghị "hấp dẫn" này khi cho rằng nếu lộ mặt thật, cuộc sống của mình sẽ rất nhanh bị hủy hoại bởi làn sóng công kích từ các fan của Ran và chỉ có "đần độn" thì mới làm như vậy. Câu chuyện cũng tới đây là kết thúc, thế nhưng không vì thế mà Ran thoát khỏi sự chỉ trích. Cụ thể, khá nhiều ý kiến cho rằng Ran tỏ ra tương đối hợm hĩnh, thậm chí là cậy tiền trong trường hợp này. Nhưng có lẽ cô nàng <strong>streamer</strong> cũng chẳng quá quan tâm. Bỏ 300 triệu ra cho anti-fan, đúng là chỉ có những cô nàng mạnh mẽ như Ran mới làm được.</p>
<p>Ảnh: Internet</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-3-1629016213938230464243.jpg' alt='4, streamer,Siêu vòng một,antifan,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-4-1629016213123357625944.jpg' alt='5, streamer,Siêu vòng một,antifan,' note=''/>
<ContentImage src='https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png' alt='6, streamer,Siêu vòng một,antifan,' note=''/>
<ContentImage src='https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png' alt='7, streamer,Siêu vòng một,antifan,' note=''/>
<ContentImage src='https://kenh14cdn.com/203336854389633024/2021/8/15/photo-2-1629016213062206805127.gif' alt='8, streamer,Siêu vòng một,antifan,' note=''/>
<ContentImage src='https://kenh14cdn.com/203336854389633024/2021/8/15/photo-5-16290162132001029692984.gif' alt='9, streamer,Siêu vòng một,antifan,' note=''/>


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
