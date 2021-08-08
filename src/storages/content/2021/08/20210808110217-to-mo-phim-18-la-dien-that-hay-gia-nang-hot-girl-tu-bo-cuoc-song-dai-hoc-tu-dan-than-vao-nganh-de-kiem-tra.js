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
"timestamp": '08/08/2021 11:02 AM',
"title": 'Tò mò phim 18+ là diễn thật hay giả, nàng hot girl từ bỏ cuộc sống đại học, tự dấn thân vào ngành để "kiểm tra"',
"description": 'Sau đó thì tất nhiên, cô nàng hot girl này cũng đã biết được kết quả thật sự là như thế nào.',
"src": '',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PHIM AV,PHIM 18+,AV,ARAI RIMA,',
"category": 'images',
"date": '08/08/2021',
"time": '11:02 AM',
"link": '/to-mo-phim-18-la-dien-that-hay-gia-nang-hot-girl-tu-bo-cuoc-song-dai-hoc-tu-dan-than-vao-nganh-de-kiem-tra',
"zcomponent": 'page_20210808110217',
"filepath": './20210808110217-to-mo-phim-18-la-dien-that-hay-gia-nang-hot-girl-tu-bo-cuoc-song-dai-hoc-tu-dan-than-vao-nganh-de-kiem-tra.js'
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
const title = 'Tò mò phim 18+ là diễn thật hay giả, nàng hot girl từ bỏ cuộc sống đại học, tự dấn thân vào ngành để "kiểm tra"';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '08/08/2021 11:02 AM';
const description = 'Sau đó thì tất nhiên, cô nàng hot girl này cũng đã biết được kết quả thật sự là như thế nào.';
const link = 'to-mo-phim-18-la-dien-that-hay-gia-nang-hot-girl-tu-bo-cuoc-song-dai-hoc-tu-dan-than-vao-nganh-de-kiem-tra';
const tagparam = ["GÁI XINH","HOT GIRL","CỘNG ĐỒNG MẠNG","PHIM AV","PHIM 18+","AV","ARAI RIMA",];
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

export default function page_20210808110217() {
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

<p>Mỗi cô nàng <strong>hot girl</strong> <strong>phim 18+</strong> thường có những lý do khác nhau khi lựa chọn gắn bó hoặc gia nhập vào ngành công nghiệp <strong>AV</strong> Nhật Bản này. Người thì muốn đổi đời, được nổi tiếng có thu nhập cao trong khi không ít các cô nàng lại có sẵn sở thích, đam mê. Tuy nhiên, để tìm được một người sẵn sàng từ bỏ tất cả chỉ vì sự "tò mò" như <strong>Arai Rima</strong> - một trong những nàng hot girl 18+ khá nổi tiếng thời gian gần đây thì lại là chuyện tương đối hiếm có.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/-16279075809431784909761.jpg' alt='1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PHIM AV,PHIM 18+,AV,ARAI RIMA,' note='Arai Rima - cô gái đầy thú vị'/>
<p>Chỉ cao 1m57, gương mặt không quá xinh xắn nhưng bù lại, <strong>Arai Rima</strong> sở hữu cho mình vòng một cực kỳ nóng bỏng và gợi cảm. Đó cũng là lý do chính khiến cho cô nàng bắt đầu được chú ý tới nhiều trong ngành công nghiệp <strong>phim <strong>AV</strong></strong> Nhật Bản. Tuy nhiên, điều mà người xem quan tâm nhất lại chính là lý do cô nàng quyết trở thành một <strong>hot girl</strong> <strong>phim 18+</strong>. Theo đó, Arai đã từng đỗ kỳ thi vào đại học, nhưng cô nàng cân nhắc: "Đó không phải là điều tôi muốn làm. Học 4 năm đại học là quá lãng phí". Và rồi Arai rời quê nhà đến Tokyo, nhưng không phải để học mà là làm việc trong một quán cafe.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/-162790801240987833747.jpg' alt='2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PHIM AV,PHIM 18+,AV,ARAI RIMA,' note='Đối với Arai, học 4 năm đại học là quá lãng phí'/>
<p>Để rồi tình cờ một hôm trong lúc xem <strong>phim 18+</strong> cùng bạn mình, Arai tỏ ra tương đối tò mò về hậu trường của một bộ phim. Cô nàng cũng rất phân vân, không nghĩ ra được các diễn viên ở đây đang đóng thật hay giả vờ. Bản thân Arai cũng thừa nhận đấy là lý do lớn nhất khiến cô nàng lựa chọn gia nhập vào ngành công nghiệp <strong>AV</strong> Nhật Bản. Cá nhân nàng <strong>hot girl</strong> không có quá nhiều hứng thú với các vấn đề "người lớn". Cô cũng thật thà cho rằng mình không biết gì về chuyện ấy trong suốt những năm trung học và chỉ có trải nghiệm đầu tiên khi đã 19 tuổi - rất muộn so với bạn bè xung quanh.</p>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/-16279080406235067268.jpg' alt='3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PHIM AV,PHIM 18+,AV,ARAI RIMA,' note='Trải nghiệm đầu tiên của Arai được cô nàng thừa nhận là quá muộn so với bạn bè'/>
<p>Và có lẽ nhiều người sẽ còn bất ngờ hơn khi Arai chia sẻ về "đối tượng" của mình. Cụ thể, cô đã quen bạn trai từ năm 17 tuổi, nhưng phải hai năm sau mới bắt đầu nghĩ tới "chuyện ấy" để cho cả hai có thể tập trung tối đa vào việc học. Phải tới khi quen người bạn trai thứ hai - một anh chàng lớn tuổi, giàu kinh nghiệm, Arai mới cảm thấy hứng thú hơn và bắt đầu nghĩ tới chuyện giải đáp sự tò mò của mình, gia nhập ngành công nghiệp <strong>AV</strong> Nhật Bản.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/-1627908240343822881344.jpg' alt='4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PHIM AV,PHIM 18+,AV,ARAI RIMA,' note='Theo Arai, cuộc sống hiện tại của cô chỉ dừng ở mức đủ ăn'/>
<p>Mặc dù giờ đây đã là một tên tuổi có tiếng, thế nhưng theo Arai cô vẫn sống rất tiết kiệm và thú vui là nhìn thấy tài khoản tiết kiệm tăng lên từng ngày. Ngay cả chi phí thời xưa từ quê lên Tokyo cũng là do cô nàng tự tích cóp. Arai chia sẻ mình sống không hề xa hoa, thậm chí là rất đơn giản nhưng cuộc sống cũng chỉ dừng ở mức đủ ăn thì chi phí thật sự quá đắt đỏ.</p>
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
