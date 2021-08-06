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
"timestamp": '06/08/2021 09:37 AM',
"title": 'Nữ YouTuber nóng bỏng vội vàng phân trần khi clip massage vòng 1 bị đánh cắp, ghép vào quảng cáo "bẩn"',
"description": 'Nữ YouTuber này khẳng định rằng việc massage chẳng giúp vòng 1 to lên chút nào và khuyên mọi người đừng để bị lừa.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-16282206429591662989066.jpg',
"alt": 'GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,',
"category": 'images',
"date": '06/08/2021',
"time": '09:37 AM',
"link": '/nu-youtuber-nong-bong-voi-vang-phan-tran-khi-clip-massage-vong-1-bi-danh-cap-ghep-vao-quang-cao-ban',
"zcomponent": 'page_20210806093759',
"filepath": './20210806093759-nu-youtuber-nong-bong-voi-vang-phan-tran-khi-clip-massage-vong-1-bi-danh-cap-ghep-vao-quang-cao-ban.js'
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
const title = 'Nữ YouTuber nóng bỏng vội vàng phân trần khi clip massage vòng 1 bị đánh cắp, ghép vào quảng cáo "bẩn"';
const author = 'A Đồi';
const source = 'Trí Thức Trẻ';
const timestamp = '06/08/2021 09:37 AM';
const description = 'Nữ YouTuber này khẳng định rằng việc massage chẳng giúp vòng 1 to lên chút nào và khuyên mọi người đừng để bị lừa.';
const link = 'nu-youtuber-nong-bong-voi-vang-phan-tran-khi-clip-massage-vong-1-bi-danh-cap-ghep-vao-quang-cao-ban';
const tagparam = ["GÁI XINH","HOT GIRL","YOUTUBER","NỮ YOUTUBER",];
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

export default function page_20210806093759() {
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
                  <p>Với sự phát triển như vũ bão của Internet, những streamer, <strong>YouTuber</strong> giờ đây có độ nổi tiếng chẳng hề thua kém những ngôi sao giải trí. Vì vậy mà hình ảnh, video liên quan tới các streamer, YouTuber có thể được tìm kiếm một cách quá dễ dàng ở thời điểm hiện tại. Tuy nhiên, điều này đôi khi lại gây ra không ít rắc rối cho chính những người làm nghề sáng tạo nội dung.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-1628220620325588347827.jpg' alt='1, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,' note='Misha - Nữ nhân vật chính trong câu chuyện'/>
<p>Đơn cử như trường hợp của nữ <strong>YouTuber</strong> - Misha khi một video của cô đã bị đánh cắp và khiến cô nàng gặp rắc rối không hề nhỏ. Theo chia sẻ của Misha thì cô nàng từng thực hiện một video massage vòng 1 để thử nghiệm xem việc này có giúp vùng ngực to hơn hay không. Video này đã được Misha thực hiện từ năm ngoái và cô cũng rút ra kết luận rằng việc massage chẳng giúp vòng 1 to lên chút nào.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628220633383423191369.jpg' alt='2, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,' note='Video massage vòng 1 của Misha đã được đăng tải từ năm ngoái nhưng nó vẫn bị kẻ gian đánh cắp'/>
<p>Mặc dù vậy video này lại bị đánh cắp và bị ghép vào những quảng cáo bất hợp pháp. Nhiều fan sau khi xem được những quảng cáo đó đã nghĩ rằng Misha hợp tác với các công ty này và quay sang chỉ trích cô nàng trên mạng xã hội. Điều này khiến cho Misha buộc phải lên tiếng phân trần rằng mình không hề liên quan tới những video bất hợp pháp đó và cô cũng chỉ là nạn nhân mà thôi. "Massage chẳng giúp vòng 1 to lên đâu, mọi người đừng để bị lừa" - Misha giải thích trên trang cá nhân.</p>
<p>Vào ngày hôm qua - 5/8, nữ <strong>YouTuber</strong> này đã phải khuyến cáo mọi người rằng đừng để bị lừa bởi những quảng cáo "bẩn" trên mạng xã hội</p>
<RelationNewsInPage category={category} />
<p>Nếu như các bạn chưa biết thì Misha là một cái tên cực kỳ hot trong làng <strong>YouTuber</strong> những năm vừa qua. Bên cạnh gương mặt xinh đẹp, vẻ ngoài nóng bỏng thì sự hấp dẫn của Misha còn tới từ nội dung độc đáo mà cô theo đuổi. Cụ thể thì Misha đang thực hiện các video hậu trường của những bộ phim 18+ do chính mình tham gia sản xuất. Chính vì theo đuổi nội dung đặc biệt này mà Misa đã sở hữu hơn 840 nghìn lượt đăng ký trên YouTube và sở hữu lượng fan vô cùng đông đảo.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-16282206517611996678271.jpg' alt='3, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,' note='Misha đã xây dựng được một lượng fan không hề nhỏ'/>
<p>Thiết nghĩ Misha cần phải có những biện pháp thực sự mạnh tay để bảo vệ hình ảnh cũng như các video của mình trong tương lai. Nếu không thì cô nàng sẽ gặp phải rất nhiều rắc rối không đáng có khi Misha tiếp tục bị ghép vào những quảng cáo bất hợp pháp.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/6/gai-16282207381481235339054.jpg' alt='4, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,' note='Cô nàng cần bảo vệ bản thân tốt hơn để tránh rơi vào những rắc rối không đáng có'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-16282206429591662989066.jpg' alt='5, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/6/gai1-1628220740970987459559.jpg' alt='6, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,' note=''/>
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
