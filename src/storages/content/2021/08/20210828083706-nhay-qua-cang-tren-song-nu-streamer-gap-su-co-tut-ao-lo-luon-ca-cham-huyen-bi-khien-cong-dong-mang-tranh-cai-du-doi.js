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
"timestamp": '28/08/2021 08:37 AM',
"title": 'Nhảy quá "căng" trên sóng, nữ streamer gặp sự cố tụt áo, lộ luôn cả "chấm huyền bí" khiến cộng đồng mạng tranh cãi dữ dội',
"description": 'Rốt cục thì lỗi do cô nàng streamer hay chiếc áo phản chủ?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/99e3b5495cd52b0d15-16293526073241216977222.jpg',
"alt": 'GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CHEONGJU,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '28/08/2021',
"time": '08:37 AM',
"link": '/nhay-qua-cang-tren-song-nu-streamer-gap-su-co-tut-ao-lo-luon-ca-cham-huyen-bi-khien-cong-dong-mang-tranh-cai-du-doi',
"zcomponent": 'page_20210828083706',
"filepath": './20210828083706-nhay-qua-cang-tren-song-nu-streamer-gap-su-co-tut-ao-lo-luon-ca-cham-huyen-bi-khien-cong-dong-mang-tranh-cai-du-doi.js'
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
const title = 'Nhảy quá "căng" trên sóng, nữ streamer gặp sự cố tụt áo, lộ luôn cả "chấm huyền bí" khiến cộng đồng mạng tranh cãi dữ dội';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:37 AM';
const description = 'Rốt cục thì lỗi do cô nàng streamer hay chiếc áo phản chủ?';
const link = 'nhay-qua-cang-tren-song-nu-streamer-gap-su-co-tut-ao-lo-luon-ca-cham-huyen-bi-khien-cong-dong-mang-tranh-cai-du-doi';
const tagparam = ["GÁI XINH","HOT GIRL","STREAMER","NỮ STREAMER","CHEONGJU","CỘNG ĐỒNG MẠNG",];
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

export default function page_20210828083706() {
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

<p>Những màn vũ đạo nóng bỏng, những bộ trang phục hớ hênh đã trở thành các đề tài bất tận để nhiều cô nàng <strong>hot girl</strong>, <strong>streamer</strong> xinh đẹp mang tới vô số nội dung thú vị cho người xem. Tuy nhiên, nhảy múa mãi thì cũng chán, và đôi khi, thứ mà chúng ta chờ đợi lại chính là những tình huống vô ý "lộ hàng" hoặc các vụ tai nạn đầy nhạy cảm như trường hợp của <strong>Cheongju</strong> Jeong - một cô nàng streamer vô cùng xinh đẹp dưới đây.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/-16293509374861419676022.jpg' alt="1, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CHEONGJU,CỘNG ĐỒNG MẠNG," note='Cheongju Jeong - cái tên vô cùng xinh đẹp của làng streamer Hàn Quốc'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/6-16293509839911739702648.jpg' alt="2, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CHEONGJU,CỘNG ĐỒNG MẠNG," note='Vẻ ngoài như thiên thần giúp cô nàng sở hữu lượng fan hâm mộ đông đảo'/>
<p>Nổi tiếng với gương mặt thánh thiện, ngây thơ là vậy nhưng ít ai ngờ rằng, ở thời điểm ban đầu, <strong>Cheongju</strong> gần như không dám lộ mặt trên sóng và cô nàng cũng mang tới những luận điểm, vấn đề khá nhạy cảm thông qua giọng văn của mình. Có một điểm khá thú vị là tần suất lên sóng của Cheongju rất hạn chế, hay nói cách khác là không hề thường xuyên một chút nào nhưng lượng fan của cô vẫn không có dấu hiệu suy giảm. Chắc là vì những vụ tai nạn thường xuyên diễn ra như trường hợp dưới đây.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/19/0de93c78-fb11-495d-ad12-104d1e572d70-1629353740383763571792.gif' alt="3, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CHEONGJU,CỘNG ĐỒNG MẠNG," note='Màn tai nạn hớ hênh của cô nàng streamer'/>
<p>Theo đó, trong phiên lên sóng gần nhất, khi đang quá thoải mái phô diễn những màn vũ đạo của mình, Cheong-gu bất ngờ gặp một sự cố đầy nhạy cảm. Chẳng biết vì bản nhạc quá xung dẫn tới sự phấn khích hay do phần trang phục lỏng lẻo mà trong lúc đang nhún nhảy, "feel the beat", nàng <strong>streamer</strong> đã bất ngờ vô ý để tụt áo ngoài của mình, lộ ra bộ trang phục siêu siêu gợi cảm với chiếc áo nội y cũng tụt một nửa và phơi bày ngay điểm nhạy cảm của mình trước camera.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/19/page-16293518855172017570862-16293518996001135268209.jpg' alt="4, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CHEONGJU,CỘNG ĐỒNG MẠNG," note='Khoảnh khắc siêu hớ hênh của cô nàng streamer'/>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/8-16293521987421909541033.jpg' alt="5, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CHEONGJU,CỘNG ĐỒNG MẠNG," note='Cái tên Cheongju ngay lập tức trở nên hot trên MXH sau đó'/>
<p>Dẫu cho cũng nhận thức được vấn đề ngay sau đó, vội vàng kéo tay lên che chắn thế nhưng sự hớ hênh của <strong>Cheongju</strong> thì đã được lan truyền trên Internet với tốc độ chóng mặt ngay sau đó. Tuy nhiên, có vẻ như cô nàng cũng chẳng mấy để tâm vì như Cheongju thừa nhận, cô rất ít khi lên sóng. Và lý do cũng được nàng <strong>streamer</strong> đưa ra, đó là do mẹ chồng (Cheongju đã kết hôn cũng với một nam đồng nghiệp) thường xuyên ở nhà, và cô cũng chẳng có nhiều khoảng trống để thể hiện các màn vũ đạo hay những nội dung "nhạy cảm" của mình. Và lâu lâu mới có một lần tai nạn như thế này thôi.</p>
<p><strong>Cheongju</strong> chia sẻ mình không lên sóng thường xuyên là vì "mẹ chồng"</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/screenshot8-16293525358031266973465.png' alt="6, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CHEONGJU,CỘNG ĐỒNG MẠNG," note='Cô nàng cũng từng bị đồn đoán đụng chạm dao kéo khi lộ ảnh quá khứ kém xinh'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/99e3b5495cd52b0d15-16293526073241216977222.jpg' alt="7, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CHEONGJU,CỘNG ĐỒNG MẠNG," note=''/>


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
