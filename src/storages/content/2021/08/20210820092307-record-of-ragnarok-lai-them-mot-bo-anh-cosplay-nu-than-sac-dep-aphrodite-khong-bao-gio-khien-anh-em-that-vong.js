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
"timestamp": '20/08/2021 09:23 AM',
"title": 'Record Of Ragnarok: Lại thêm một bộ ảnh cosplay "nữ thần sắc đẹp" Aphrodite không bao giờ khiến anh em thất vọng',
"description": 'Xem ngay loạt ảnh cosplay "nữ thần sắc đẹp" Aphrodite ở dưới đây để có những ngày ở nhà chống dịch không nhàm chán nhé anh em!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629440700077532207374.jpg',
"alt": 'APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,',
"category": 'images',
"date": '20/08/2021',
"time": '09:23 AM',
"link": '/record-of-ragnarok-lai-them-mot-bo-anh-cosplay-nu-than-sac-dep-aphrodite-khong-bao-gio-khien-anh-em-that-vong',
"zcomponent": 'page_20210820092307',
"filepath": './20210820092307-record-of-ragnarok-lai-them-mot-bo-anh-cosplay-nu-than-sac-dep-aphrodite-khong-bao-gio-khien-anh-em-that-vong.js'
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
const title = 'Record Of Ragnarok: Lại thêm một bộ ảnh cosplay "nữ thần sắc đẹp" Aphrodite không bao giờ khiến anh em thất vọng';
const author = 'Mẹ Sề';
const source = 'Pháp luật và bạn đọc';
const timestamp = '20/08/2021 09:23 AM';
const description = 'Xem ngay loạt ảnh cosplay "nữ thần sắc đẹp" Aphrodite ở dưới đây để có những ngày ở nhà chống dịch không nhàm chán nhé anh em!';
const link = 'record-of-ragnarok-lai-them-mot-bo-anh-cosplay-nu-than-sac-dep-aphrodite-khong-bao-gio-khien-anh-em-that-vong';
const tagparam = ["APHRODITE","COSPLAY","COSPLAY APHRODITE","RECORD OF RAGNAROK","SHUUMATSU NO VALKYRIE","NỮ THẦN SẮC ĐẸP APHRODITE","COSER",];
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

export default function page_20210820092307() {
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

<p><strong>Shuumatsu No Valkyrie</strong> - <strong>Record Of Ragnarok</strong> - Đại Chiến Nhân Thần là tựa manga/anime vô cùng đình đám thời gian gần đây. Shuumatsu No Valkyrie lấy nội dung về cuộc chiến giữa 13 nhân loại mạnh nhất và 13 vị thần mạnh nhất nhằm quyết định số phận của con người trong 1000 năm. Là một tác phẩm chiến đấu võ đài, Shuumatsu No Valkyrie đã khiến khán giả bằng những trận đối đầu vô cùng đẫm máu và hấp dẫn, đồng thời truyền tải không ít bài học nhân văn sâu sắc.</p>
<p>Ngoài phần nội dung hấp dẫn thì <strong>Shuumatsu No Valkyrie</strong> cũng có khá nhiều yếu tố khác khiến khán giả yêu thích. Đặc biệt trong số đó có hình ảnh "vòng một" to đến mức phải có người đỡ của nữ thần sắc đẹp <strong>Aphrodite</strong>. Hình ảnh quyến rũ của Aphrodite không chỉ khiến người xem mê mệt mà còn trở thành nguồn cảm hứng <strong>cosplay</strong> cho rất nhiều <strong>coser</strong>.</p>
<p>Nhưng liệu các <strong>coser</strong> có thể hiện được "tâm hồn" bao la của nữ thần <strong>Aphrodite</strong> không? Xem ngay loạt ảnh <strong>cosplay</strong> Aphrodite của nữ coser HaneAme dưới đây để tìm đáp án nhé!</p>
<p>"Vòng một" to đến mức phải có người đỡ của nữ thần sắc đẹp <strong>Aphrodite</strong> đã thu hút sự chú ý của nhiều người.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294407081191021423012.jpg' alt='1, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note='Điểm nhấn của loạt ảnh cosplay này chính là tâm hồn của coser dường như sao y bản gốc vậy!'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629440714659904150680.jpg' alt='2, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note='Khi Aphrodite bằng xương bằng thịt bước ra đời thật đều khiến người hâm mộ được phen trầm trồ vì quá xinh đẹp và quyến rũ.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-162944072021235661823.jpg' alt='3, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note='HaneAme đã mang đến một nữ thần sắc đẹp chuẩn không cần chỉnh...'/>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294407322541212463904.jpg' alt='4, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note='Hane Ame vốn là một người mẫu Đài Loan chuyên về cosplay, các loạt ảnh cosplay của cô nàng đều rất bắt mắt và được đầu tư chỉn chu.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294407381691987383821.jpg' alt='5, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note='Hane Ame đang hoạt động trên Facebook và Twitter, với nhiều tài khoản khác trên Instagram, Patreons và những kênh tương tự.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294407465181390045417.jpg' alt='6, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note='Là cosplayer chuyên nghiệp về mảng ero, cô nàng luôn đem đến những bộ ảnh khiến fan chết mê chết mệt.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294407520982011751136.jpg' alt='7, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note='Nữ thần sắc đẹp Aphrodite với tâm hồn nặng trĩu như thế này đã đủ khiến anh em hài lòng chưa?'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-162944077010790622203.jpg' alt='8, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note='Nói thêm để bạn biết, theo thần thoại Hy Lạp, APHRODITE được bình chọn là nữ thần xinh đẹp nhất, hơn cả HERA hay ATHENA đấy nhé! Nàng sở hữu vẻ đẹp nghiêng nước nghiêng thành và là nguồn cơn gây ra các cuộc tranh giành sát phạt giữa các vị thần trên đỉnh OLYMPUS.'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629440700077532207374.jpg' alt='9, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294407913131739746120.jpg' alt='10, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629440807916306140637.jpg' alt='11, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629440818360417270181.jpg' alt='12, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294408279371020000870.jpg' alt='13, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629440834960671343208.jpg' alt='14, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629440842180950918105.jpg' alt='15, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629440849355299244885.jpg' alt='16, APHRODITE,COSPLAY,COSPLAY APHRODITE,RECORD OF RAGNAROK,SHUUMATSU NO VALKYRIE,NỮ THẦN SẮC ĐẸP APHRODITE,COSER,' note=''/>


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
