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
"timestamp": '19/08/2021 12:54 PM',
"title": 'Vừa trở lại sau khi nhập viện, nữ streamer xinh đẹp nhún nhảy quá đà, ngã ngồi tới mức vô tình hớ hênh trên sóng',
"description": 'Trở lại sau khi điều trị trầm cảm, cô nàng streamer lại tiếp tục khiến người xem phải đỏ mặt.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287409430231741769721.gif',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,EDDYRIN,',
"category": 'images',
"date": '19/08/2021',
"time": '12:54 PM',
"link": '/vua-tro-lai-sau-khi-nhap-vien-nu-streamer-xinh-dep-nhun-nhay-qua-da-nga-ngoi-toi-muc-vo-tinh-ho-henh-tren-song',
"zcomponent": 'page_20210819125404',
"filepath": './20210819125404-vua-tro-lai-sau-khi-nhap-vien-nu-streamer-xinh-dep-nhun-nhay-qua-da-nga-ngoi-toi-muc-vo-tinh-ho-henh-tren-song.js'
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
const title = 'Vừa trở lại sau khi nhập viện, nữ streamer xinh đẹp nhún nhảy quá đà, ngã ngồi tới mức vô tình hớ hênh trên sóng';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '19/08/2021 12:54 PM';
const description = 'Trở lại sau khi điều trị trầm cảm, cô nàng streamer lại tiếp tục khiến người xem phải đỏ mặt.';
const link = 'vua-tro-lai-sau-khi-nhap-vien-nu-streamer-xinh-dep-nhun-nhay-qua-da-nga-ngoi-toi-muc-vo-tinh-ho-henh-tren-song';
const tagparam = ["GÁI XINH","HOT GIRL","CỘNG ĐỒNG MẠNG","NỮ STREAMER","STREAMER","EDDYRIN",];
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

export default function page_20210819125404() {
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

<p>Theo thời gian, trào lưu phát sóng trực tiếp, hay còn được biết tới với cái tên quen thuộc là livestream đang dần trở nên phổ biến tới mức ngay cả những người nổi tiếng cũng có xu hướng theo đuổi công việc này. Tuy nhiên, đôi khi các <strong>streamer</strong>, đặc biệt là <strong>nữ streamer</strong> vẫn thường tạo nên những khoảnh khắc đầy bất ngờ. Các vụ việc tích cực cũng có nhưng tiêu cực dường như lại áp đảo về số lượng. Và nổi tiếng nhất có lẽ là trường hợp đầy bẽ bàng của <strong>Eddyrin</strong>, khi mà chỉ vì một phút giây ngớ ngẩn để tự ngã trên sóng, cô nàng này bất ngờ gặp phải một tai nạn hớ hênh đầy khó đỡ. </p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628738773829604753551.jpg' alt='1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,EDDYRIN,' note='Eddyrin - cô nàng srteamer xinh đẹp trong câu chuyện'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628739922635319286749.jpg' alt='2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,EDDYRIN,' note='Cô nàng còn thường xuyên mời các hot girl khác tới lên sóng cùng'/>
<p>Vốn nổi tiếng bởi gương mặt xinh đẹp, thân hình gợi cảm và trên hết là điệu nhảy rung lắc vòng ba sở trường của mình, <strong>Eddyrin</strong> từ lâu đã xây dựng được cho bản thân một vị trí vững chắc với lượng fan đông đảo. Cô nàng lại càng đặc biệt được ưa thích hơn khi thường xuyên có những màn co-op chất lượng cùng các nữ đồng nghiệp xinh đẹp, gợi cảm khác. Tuy nhiên, cũng vì sự gợi cảm có phần quá đà của mình mà cô nàng <strong>streamer</strong> phải hứng chịu rất nhiều chỉ trích, tới mức phải nhập viện vì kiệt sức và trầm cảm. Những tưởng sau sự cố này, Eddyrin sẽ thay đổi. Thế nhưng không, ngay trong lần lên sóng mới đây, <strong>nữ streamer</strong> lại tiếp tục xảy ra vụ tai nạn "hớ hênh" còn nghiêm trọng hơn.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628740847080586272946.gif' alt='3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,EDDYRIN,' note='Cô nàng nổi tiếng với những màn lên sóng cực kỳ nóng bỏng'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287398072801028208011.gif' alt='4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,EDDYRIN,' note='Tuy nhiên, sự gợi cảm quá đà đôi khi lại khiến Eddyrin gặp phải những tai nạn khó đỡ'/>
<RelationNewsInPage category={category} />
<p>Theo đó, trong lần lên sóng mới nhất, trong lúc đang cố gắng điều chỉnh lại camera để tìm góc phù hợp, cô nàng <strong>streamer</strong> lùi dần và vướng phải một chiếc hộp được đặt giữa đường. Theo quán tính, <strong>Eddyrin</strong> ngay lập tức ngã ngửa ra đất và khoảnh khắc ấy, chiếc quần cực kỳ ngắn cũng như không kín đáo chút nào của cô nàng nhanh chóng lộ ra cảnh xuân đầy hớ hênh ngay trước mặt cả ngàn người xem.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287404661502072600770.gif' alt='5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,EDDYRIN,' note='Khoảnh khắc tai nạn đầy hớ hênh của Eddyrin'/>
<p>Hình ảnh này nhanh chóng trở thành chủ đề bàn tán sôi nổi từ phía <strong>cộng đồng mạng</strong>. Một số thì tỏ ra thương cảm cho <strong>Eddyrin</strong>, cũng như cho rằng đây chỉ là sự cố vô ý, bản thân <strong>nữ <strong>streamer</strong></strong> cũng đã phải chịu đau với cũ ngã cực kỳ tai hại ấy. Tuy nhiên, số khác thì lắc đầu ngán ngẩm, cho rằng cô nàng vẫn chứng nào tật nấy, chẳng có gì thay đổi sau ngần ấy thời gian điều trị và những chỉ trích.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287407518881715248563.gif' alt='6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,EDDYRIN,' note='Nhiều người cho rằng Eddyrin chẳng thay đổi gì, vẫn giữ phong cách gây tranh cãi như xưa'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287409430231741769721.gif' alt='7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,EDDYRIN,' note=''/>


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
