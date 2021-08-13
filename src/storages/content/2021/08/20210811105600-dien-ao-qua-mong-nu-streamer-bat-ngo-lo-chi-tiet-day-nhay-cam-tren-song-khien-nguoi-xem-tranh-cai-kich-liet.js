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
"timestamp": '11/08/2021 10:56 AM',
"title": 'Diện áo quá mỏng, nữ streamer bất ngờ lộ chi tiết đầy "nhạy cảm" trên sóng khiến người xem tranh cãi kịch liệt',
"description": 'Có lẽ cô nàng streamer cũng chỉ biết dở khóc dở cười vì mình lại là chủ đề tranh cãi như vậy.',
"src": '',
"alt": 'GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '11/08/2021',
"time": '10:56 AM',
"link": '/dien-ao-qua-mong-nu-streamer-bat-ngo-lo-chi-tiet-day-nhay-cam-tren-song-khien-nguoi-xem-tranh-cai-kich-liet',
"zcomponent": 'page_20210811105600',
"filepath": './20210811105600-dien-ao-qua-mong-nu-streamer-bat-ngo-lo-chi-tiet-day-nhay-cam-tren-song-khien-nguoi-xem-tranh-cai-kich-liet.js'
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
const title = 'Diện áo quá mỏng, nữ streamer bất ngờ lộ chi tiết đầy "nhạy cảm" trên sóng khiến người xem tranh cãi kịch liệt';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '11/08/2021 10:56 AM';
const description = 'Có lẽ cô nàng streamer cũng chỉ biết dở khóc dở cười vì mình lại là chủ đề tranh cãi như vậy.';
const link = 'dien-ao-qua-mong-nu-streamer-bat-ngo-lo-chi-tiet-day-nhay-cam-tren-song-khien-nguoi-xem-tranh-cai-kich-liet';
const tagparam = ["GÁI XINH","HOT GIRL","STREAMER","NỮ STREAMER","CỘNG ĐỒNG MẠNG",];
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

export default function page_20210811105600() {
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

<p>Những vụ tai nạn, những sự cố hớ hênh, những lần "lộ hàng" ngoài ý muốn dần dần đã trở thành nét văn hóa không thể thiếu trong khoảng 1-2 năm gần đây của làng <strong>streamer</strong> trên toàn thế giới. Đặc biệt tại Hàn Quốc, nơi mà nền công nghiệp streamer đang phát triển cực thịnh với sự ra đời của vô số những nền tảng và các cô nàng hot streamer xinh đẹp, mọi thứ dường như còn dần vượt ra ngoài tầm kiểm soát. Và khi mà dường như chẳng ai còn quá bận tâm tới các vụ tai nạn, hớ hênh nữa thì mới đây, Ellin - một <strong>nữ streamer</strong> xinh đẹp lại bất ngờ trở thành tâm điểm của những tranh cãi với một lý do mà chắc cô nàng cũng chỉ biết dở khóc dở cười khi tìm hiểu.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-1628080373639255893865.jpg' alt='1, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,' note='Ellin - cô nàng streamer xinh đẹp trong câu chuyện'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280803925441976784457.jpg' alt='2, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,' note='Đồng thời cũng khá nổi tiếng với vẻ ngoài quyến rũ, nhẹ nhàng của mình'/>
<p>Dành cho những ai chưa biết thì Ellin vốn là một nữ ca sĩ cựu thành viên nhóm nhạc Crayon Pop và đã chuyển sang công việc <strong>streamer</strong> trên Afreeca TV từ năm 2016 sau khi nhóm nhạc giải thể. Thực tế, cái tên Ellin cũng từng gây ra khá nhiều ồn ào trong quá khứ, đặc biệt là sau khi dính nghi án "lừa tình" người xem gần 20 tỷ cũng như làm nội dung tại một cửa hàng bán đồ chơi "người lớn". Tuy nhiên, mới đây thôi, cô nàng lại trở thành chủ đề gây tranh cãi vì một khoảnh khắc trên sóng livestream, nơi mà người xem chia làm hai phe để bàn luận xem có thật sự xảy ra sự cố không</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280808060951193362541.gif' alt='3, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,' note='Khoảnh khắc gây tranh cãi của Ellin đây'/>
<RelationNewsInPage category={category} />
<p>Theo đó, trong lần lên sóng mới nhất, với một chiếc áo mỏng manh trễ nải, cô nàng Ellin - trong khoảnh khắc cúi người xuống đã vô tình hé mở phần nào vòng một của mình. Khoảnh khắc này diễn ra rất nhanh, nhưng không hiểu sao lại rộ lên tin đồn rằng Ellin đã gặp "tai nạn" phát sóng. Tuy rằng chỉ số ít người đồng ý với quan điểm trên, và phần đông thì hoàn toàn không thấy có gì đáng nghi, thế nhưng nó cũng trở thành chủ đề tranh luận đầy sôi nổi. Cũng có ý kiến cho rằng đó là tấm lót ngực của cô nàng <strong>streamer</strong> mà thôi.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/16280812921482143281276-16280814321882004340040.jpg' alt='4, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,' note='Rất nhiều người cố tập trung nhìn nhưng vẫn chẳng nhận ra điều gì ở bức ảnh gif trên'/>
<p>Bản thân Eliin chắc cũng chẳng biết mình lại vô tình rơi vào cuộc tranh cãi oái oăm như này. Tuy nhiên, với việc cô nàng không phải nhận án phạt từ phía nền tảng thì dường như có thể vụ tai nạn này không được coi là cố ý hoặc chẳng phải là sự cố hớ hênh nữa. Và câu chuyện nên khép lại ở đây là được rồi.</p>


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
