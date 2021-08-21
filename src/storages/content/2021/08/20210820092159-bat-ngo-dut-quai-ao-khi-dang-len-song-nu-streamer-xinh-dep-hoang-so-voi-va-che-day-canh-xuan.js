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
"timestamp": '20/08/2021 09:21 AM',
"title": 'Bất ngờ đứt quai áo khi đang lên sóng, nữ streamer xinh đẹp hoảng sợ, vội vã che đậy "cảnh xuân"',
"description": 'Thật khó để có thể lý giải tại sao chiếc quai áo của cô nàng streamer lại có thể đứt đơn giản như vậy.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628767767697197827880.gif',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,EUN-JI,',
"category": 'images',
"date": '20/08/2021',
"time": '09:21 AM',
"link": '/bat-ngo-dut-quai-ao-khi-dang-len-song-nu-streamer-xinh-dep-hoang-so-voi-va-che-day-canh-xuan',
"zcomponent": 'page_20210820092159',
"filepath": './20210820092159-bat-ngo-dut-quai-ao-khi-dang-len-song-nu-streamer-xinh-dep-hoang-so-voi-va-che-day-canh-xuan.js'
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
const title = 'Bất ngờ đứt quai áo khi đang lên sóng, nữ streamer xinh đẹp hoảng sợ, vội vã che đậy "cảnh xuân"';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '20/08/2021 09:21 AM';
const description = 'Thật khó để có thể lý giải tại sao chiếc quai áo của cô nàng streamer lại có thể đứt đơn giản như vậy.';
const link = 'bat-ngo-dut-quai-ao-khi-dang-len-song-nu-streamer-xinh-dep-hoang-so-voi-va-che-day-canh-xuan';
const tagparam = ["GÁI XINH","HOT GIRL","CỘNG ĐỒNG MẠNG","STREAMER","NỮ STREAMER","EUN-JI",];
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

export default function page_20210820092159() {
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

<p>Các chiêu trò của những nữ <strong>streamer</strong> đã và đang dần dần trở thành một xu hướng được rất nhiều người áp dụng. Có những vụ tai nạn tưởng chừng như vô tình nhưng lại đầy hữu ý, qua đó khiến cho tên tuổi của các cô nàng streamer bỗng chốc được nhắc tới rất nhiều và nổi như cồn chỉ sau một buổi phát sóng. Tuy nhiên, thế giới này không phải lúc nào cũng toàn những chiêu trò, mà đôi khi vẫn còn đó những vụ tai nạn "thật thà", không hề giả trân. Điển hình như lần lên sóng mới đây của <strong>Eun-ji</strong>, một <strong>nữ streamer</strong> xinh đẹp - người đang lo lắng trước viễn cảnh có thể nhận phải án phạt cấm kênh từ phía nền tảng.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287676205252012352569.jpg' alt='1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,EUN-JI,' note='Eun-ji, cô nàng streamer vừa trải qua tai nạn nhớ đời ngay trên sóng'/>
<p>Cụ thể, trong một lần đang livestream bằng điện thoại ngoài bãi biển, nữ <strong>streamer</strong> xinh đẹp này đã bất ngờ gặp phải một sự cố vô cùng xấu hổ. Vốn dĩ, bộ đồ bơi của <strong>Eun-ji</strong> cũng khá kín đáo, không tới nỗi hở hang như chiêu trò mà nhiều streamer khác thường làm. Thế nhưng, bằng một cách thần kỳ nào đó, khi cô nàng đang mải mê tâm sự, tương tác với người xem, một bên quai áo của bộ đồ bơi bất ngờ đứt phựt, rủ xuống và khiến cho bản thân Eun-ji cũng như cả chục nghìn người đang xem kênh cũng phải bất ngờ.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287677426361086176348.jpg' alt='2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,EUN-JI,' note='Xinh đẹp, gợi cảm, Eun-ji luôn có lượng người xem đông đảo'/>
<p>Còn đây là khoảnh khắc lộ "cảnh xuân" nhớ đời của cô nàng</p>
<p>Nhưng tính ra trong cái rủi cũng có cái may, vì ở tình huống ấy, <strong>Eun-ji</strong> đang trong tư thế ngả về phía sau thay vì cúi xuống camera để đọc tin nhắn như thường lệ. Do đó, mặc dù để lộ một ít "cảnh xuân", thế nhưng điểm mấu chốt, nhạy cảm của Eun-ji thì vẫn khá an toàn. Cũng phải nói tới phản ứng cực kỳ nhanh nhạy của cô nàng <strong>hot girl</strong> ngay lúc phát hiện ra sự cố. Cụ thể, nữ <strong>streamer</strong> này kịp thời quay ngang người, cùng lúc với việc dùng tay che chắn đôi gò bồng đảo của mình trước khi lách người ra khỏi camera và chỉnh đốn lại trang phục.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/page-16287674177821247236931.jpg' alt='3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,EUN-JI,' note='Cũng may là nàng hot girl đã phản ứng cực nhanh trước sự cố'/>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287699645541695184956.jpg' alt='4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,EUN-JI,' note='Không thì có lẽ câu chuyện của nữ streamer còn đi xa hơn nữa'/>
<p>Sự cố của <strong>Eun-ji</strong> nhanh chóng trở thành chủ đề bàn tán trên khắp các diễn đàn, mạng xã hội và được vô số người tranh luận. Tuy nhiên, khá bất ngờ khi lần này, số đông đều lên tiếng bảo vệ cho Eun-ji, đồng thời lên án chiếc quai áo phản chủ và hy vọng cô nàng không phải nhận một án phạt nào từ phía AfreecaTV.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/screenshot5-16287700955341923648248.png' alt='5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,EUN-JI,' note='Đa số các fan đều cho rằng Eun-ji đã gặp một sự cố vô tình'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/screenshot6-162877013657848719723.png' alt='6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,EUN-JI,' note='Cũng như hy vọng cô nàng streamer không phải chịu án phạt quá nặng'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628767767697197827880.gif' alt='7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,EUN-JI,' note=''/>


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
