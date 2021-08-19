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
"timestamp": '19/08/2021 12:52 PM',
"title": 'Record Of Ragnarok: Thổn thức ngắm nữ thần sắc đẹp Aphrodite phiên bản người Việt, tâm hồn đâu thua gì bản gốc',
"description": 'Nữ thần sắc đẹp Aphrodite trong Record Of Ragnarok đang rất được lòng các fan và giới cosplay.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290824948711447841222.jpg',
"alt": 'SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,',
"category": 'images',
"date": '19/08/2021',
"time": '12:52 PM',
"link": '/record-of-ragnarok-thon-thuc-ngam-nu-than-sac-dep-aphrodite-phien-ban-nguoi-viet-tam-hon-dau-thua-gi-ban-goc',
"zcomponent": 'page_20210819125221',
"filepath": './20210819125221-record-of-ragnarok-thon-thuc-ngam-nu-than-sac-dep-aphrodite-phien-ban-nguoi-viet-tam-hon-dau-thua-gi-ban-goc.js'
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
const title = 'Record Of Ragnarok: Thổn thức ngắm nữ thần sắc đẹp Aphrodite phiên bản người Việt, tâm hồn đâu thua gì bản gốc';
const author = 'Mẹ Sề';
const source = 'Pháp luật và bạn đọc';
const timestamp = '19/08/2021 12:52 PM';
const description = 'Nữ thần sắc đẹp Aphrodite trong Record Of Ragnarok đang rất được lòng các fan và giới cosplay.';
const link = 'record-of-ragnarok-thon-thuc-ngam-nu-than-sac-dep-aphrodite-phien-ban-nguoi-viet-tam-hon-dau-thua-gi-ban-goc';
const tagparam = ["SHUUMATSU NO VALKYRIE","NỮ THẦN SẮC ĐẸP APHRODITE","COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE","COSER","COSPLAY","HANA BUNNY",];
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

export default function page_20210819125221() {
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

<p>Bên cạnh những đấu sĩ nhân - thần vai u thịt bắp, anime/manga nổi đình nổi đám <strong>Shuumatsu No Valkyrie</strong> - Record Of Ragnarok cũng có không ít waifu khiến ai cũng phải ngất ngây. Nổi bật nhất trong số đó chính là <strong>nữ thần sắc đẹp Aphrodite</strong>. Điểm thu hút của nữ nhân này chính là nhan sắc lộng lẫy và vòng một ngoại cỡ cần có người nâng đỡ.</p>
<p>Hình ảnh quyến rũ của Aphrodite không chỉ khiến nhiều người mê mệt mà còn trở thành nguồn cảm hứng <strong>cosplay</strong> cho rất nhiều <strong>coser</strong>. Nhưng liệu các coser có thể hiện được "tâm hồn" bao la của nữ thần Aphrodite không? Xem ngay loạt ảnh cosplay Aphrodite của nữ coser <strong>Hana Bunny</strong> dưới đây để tìm đáp án nhé!</p>
<p>Ngoài phần nội dung hấp dẫn thì <strong>Shuumatsu No Valkyrie</strong> cũng có khá nhiều yếu tố khác khiến khán giả yêu thích. Đặc biệt trong số đó có hình ảnh "vòng một" to đến mức phải có người đỡ của <strong>nữ thần sắc đẹp Aphrodite</strong>.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290825206601128983311.jpg' alt='1, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note='Nữ thần sắc đẹp Aphrodite trong anime Record Of Ragnarok đang là nguồn cảm hứng cosplay của rất nhiều coser.'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-162908253382411729708-16290825464081131732004.jpg' alt='2, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note='Điểm nhấn của loạt ảnh cosplay này chính là tâm hồn của coser dường như sao y bản gốc vậy!'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629082559529802243874.jpg' alt='3, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note='Khi Aphrodite bằng xương bằng thịt bước ra đời thật đều khiến người hâm mộ được phen trầm trồ vì quá xinh đẹp và quyến rũ.'/>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-1629082604617649003859-16290826173591103141299.jpg' alt='4, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note='Chủ nhân của loạt ảnh cosplay này là nữ coser người Việt Hana Bunny, tên thật là Đinh Ngọc Thùy Dung, sinh năm 1990 hiện đang sinh sống tại Mỹ và là cosplayer chuyên nghiệp nổi tiếng.'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16290826622961623602045-16290826801601385682416.jpg' alt='5, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note='Hana Bunny là một cái tên không quá xa lạ đối với cộng đồng cosplay trên toàn thế giới. Sở hữu một khuôn mặt xinh xắn cùng thân hình siêu gợi cảm với 3 vòng chuẩn không cần chỉnh, Hana Bunny dễ dàng đốn tim người hâm mộ qua những bộ ảnh cosplay đậm chất khiêu gợi.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/cvvvv-16290828889701790758143.png' alt='6, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note='Là cosplayer chuyên nghiệp về mảng ero, cô nàng luôn đem đến những bộ ảnh khiến fan chết mê chết mệt.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/vccvv-16290828889802045388222.png' alt='7, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note='Và loạt ảnh cosplay nữ thần Aphrodite mà các bạn đang xem chính là minh chứng rõ nhất.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290824948711447841222.jpg' alt='8, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/ccc-1629082888999669820693.png' alt='9, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/16/ffff-1629082889008726516940-1629082925505749234300.png' alt='10, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/capture-1629082889033700744915.png' alt='11, SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSPLAY NỮ THẦN SẮC ĐẸP APHRODITE,COSER,COSPLAY,HANA BUNNY,' note=''/>


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
