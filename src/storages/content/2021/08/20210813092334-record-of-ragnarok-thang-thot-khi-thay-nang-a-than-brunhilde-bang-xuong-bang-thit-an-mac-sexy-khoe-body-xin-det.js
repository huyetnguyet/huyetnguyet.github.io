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
"timestamp": '13/08/2021 09:23 AM',
"title": 'Record Of Ragnarok: Thảng thốt khi thấy nàng Á thần Brunhilde bằng xương bằng thịt, ăn mặc sexy khoe body xịn đét',
"description": 'Thế giới của Record Of Ragnarok có rất nhiều mỹ nhân xinh đẹp khiến các fan mê mệt.',
"src": 'https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/photo-1-1628738149922292971147.jpg',
"alt": 'SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,',
"category": 'images',
"date": '13/08/2021',
"time": '09:23 AM',
"link": '/record-of-ragnarok-thang-thot-khi-thay-nang-a-than-brunhilde-bang-xuong-bang-thit-an-mac-sexy-khoe-body-xin-det',
"zcomponent": 'page_20210813092334',
"filepath": './20210813092334-record-of-ragnarok-thang-thot-khi-thay-nang-a-than-brunhilde-bang-xuong-bang-thit-an-mac-sexy-khoe-body-xin-det.js'
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
const title = 'Record Of Ragnarok: Thảng thốt khi thấy nàng Á thần Brunhilde bằng xương bằng thịt, ăn mặc sexy khoe body xịn đét';
const author = 'Mẹ Sề';
const source = 'Pháp luật và bạn đọc';
const timestamp = '13/08/2021 09:23 AM';
const description = 'Thế giới của Record Of Ragnarok có rất nhiều mỹ nhân xinh đẹp khiến các fan mê mệt.';
const link = 'record-of-ragnarok-thang-thot-khi-thay-nang-a-than-brunhilde-bang-xuong-bang-thit-an-mac-sexy-khoe-body-xin-det';
const tagparam = ["SHUUMATSU NO VALKYRIE","RECORD OF RAGNAROK","BRUNHILDE","VALKYRIE","COSPLAY","COSER",];
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

export default function page_20210813092334() {
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

<p>Bên cạnh những đấu sĩ nhân - thần vai u thịt bắp, anime/manga <strong>Shuumatsu No <strong>Valkyrie</strong></strong> - <strong>Record Of Ragnarok</strong> cũng có không ít waifu khiến ai cũng phải ngất ngây. Một trong số đó chính là nàng Á thần <strong>Brunhilde</strong>.</p>
<p></p>
<p>Trong <strong>Record of Ragnarok</strong>, <strong>Brunhilde</strong> là chị cả của 13 chị em <strong>Valkyrie</strong>, đồng thời là nhân vật đề xuất tổ chức Ragnarok (cuộc chiến giữa 13 nhân loại mạnh nhất và 13 vị thần mạnh nhất nhằm quyết định số phận của con người trong 1000 năm). Đúng với vai trò người lãnh đạo, Brunhilde luôn đưa ra những quyết định vô cùng khó khăn hòng đem đến kết cục tốt nhất cho nhân loại. Sự mạnh mẽ cùng vẻ ngoài sắc sảo của Brunhilde đã khiến không ít khán giả mê cô như điếu đổ.</p>
<p>Bên cạnh đó, cũng có rất nhiều <strong>cosplay</strong>er đã quyết định tôn vinh nhân vật <strong>Brunhilde</strong> bằng cách cosplay cô ấy. Và khi <strong>Valkyrie</strong> bằng xương bằng thịt bước ra đời thật đều khiến người hâm mộ được phen trầm trồ vì quá xinh đẹp và quyến rũ. </p>
<p>Dưới đây là những hình ảnh <strong>cosplay</strong> nàng <strong>Brunhilde</strong> trong <strong>Record Of Ragnarok</strong> do <strong>coser</strong> Meenfox thể hiện đã khiến các fan rất hài lòng:</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/-16287374869571103891583.jpg' alt='1, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note='Meenfox là nữ coser xinh đẹp đến từ Thái Lan, sở hữu gương mặt xinh xắn và thân hình nuột nà, giúp cô dễ dàng hóa thân thành các nhân vật anime/manga/game.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/photo-1-16287386630361238344488.jpg' alt='2, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note='Coser người Thái Lan này rất nổi tiếng và có rất nhiều fan, các màn cosplay của cô nàng từ trước đến nay đều rất xuất sắc.'/>
<RelationNewsInPage category={category} />
<p>Ngoài nàng <strong>Brunhilde</strong>, Meenfox cũng từng thử sức hóa thân thành nữ thần sắc đẹp Aphrodite và nàng Eve cũng trong <strong>Record Of Ragnarok</strong> đấy nhé! Tất nhiên là 2 màn hóa thân này cũng cực kỳ gợi cảm, nóng bỏng và không có gì để chê hết.</p>
<p></p>
<p>Bên cạnh đó, Meenfox cũng rất chăm chỉ làm mới bản thân khi các nhân vật cô chọn <strong>cosplay</strong> rất đa dạng, cô cũng thử sức mình với các nhân vật trong rất nhiều bộ anime/manga/game đình đám khác. Cùng điểm qua thêm một số màn cosplay ấn tượng của cô nàng này nhé!</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628737524844911286563.jpg' alt='3, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note='Nàng Marine trong Hololive'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/-16287374869571103891583.jpg' alt='4, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note='Power Nurse (Fanart) trong Chainsaw man'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/-16287374947391090267154.jpg' alt='5, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note='Yoimiya trong Genshin Impact'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/photo-1-1628738149922292971147.jpg' alt='6, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/photo-1-16287381391952019818441.jpg' alt='7, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287383270331160763702.jpg' alt='8, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628738333999676045448.jpg' alt='9, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287383397211758492380.jpg' alt='10, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-162873837866624263310.jpg' alt='11, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628738384532721472452.jpg' alt='12, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287383929471377514570.jpg' alt='13, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287384267691829363294.jpg' alt='14, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628738432123878242637.jpg' alt='15, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628738437581655397035.jpg' alt='16, SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,BRUNHILDE,VALKYRIE,COSPLAY,COSER,' note=''/>


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
