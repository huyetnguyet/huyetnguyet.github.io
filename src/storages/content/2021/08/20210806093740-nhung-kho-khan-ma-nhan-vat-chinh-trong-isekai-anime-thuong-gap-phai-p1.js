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
"title": 'Những khó khăn mà nhân vật chính trong isekai anime thường gặp phải (P.1)',
"description": 'Không phải lúc nào các nhân vật chính trong isekai anime cũng có cuộc sống suôn sẻ sau khi chuyển sinh',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/azusa-child-form-with-pills-1628152715274674158216.jpg',
"alt": 'ISEKAI,MANGA ANIME,ANIME,ISEKAI ANIME,',
"category": 'games',
"date": '06/08/2021',
"time": '09:37 AM',
"link": '/nhung-kho-khan-ma-nhan-vat-chinh-trong-isekai-anime-thuong-gap-phai-p1',
"zcomponent": 'page_20210806093740',
"filepath": './20210806093740-nhung-kho-khan-ma-nhan-vat-chinh-trong-isekai-anime-thuong-gap-phai-p1.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'games';
const categoryLink = '/games';
const title = 'Những khó khăn mà nhân vật chính trong isekai anime thường gặp phải (P.1)';
const author = 'Green';
const source = 'Trí Thức Trẻ';
const timestamp = '06/08/2021 09:37 AM';
const description = 'Không phải lúc nào các nhân vật chính trong isekai anime cũng có cuộc sống suôn sẻ sau khi chuyển sinh';
const link = 'nhung-kho-khan-ma-nhan-vat-chinh-trong-isekai-anime-thuong-gap-phai-p1';
const tagparam = ["ISEKAI","MANGA ANIME","ANIME","ISEKAI ANIME",];
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

export default function page_20210806093740() {
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
                  <p>Thực thế là việc chuyển sinh sang một thế giới mới, bỏ lại sau lưng cuộc sống quen thuộc hàng ngày, không phải chuyện dễ dàng. Khi ở trong thế giới mới, bạn sẽ phải học cách thích nghi lại mọi thứ từ đầu. Và chắc chắn rằng các nhân vật chính trong <strong>isekai</strong> <strong>anime</strong> sẽ là những người trải nghiệm điều này rõ hơn ai hết.</p>
<p>10. Đến thế giới mới nhân vật chính phải học hỏi mọi thứ từ đầu</p>
<p>Nhiều nhân vật chính trong <strong>isekai</strong> <strong>anime</strong> có khởi đầu khá yếu, không hiểu biết nhiều về thế giới họ mới chuyển sinh đến. Trong I’ve Been Killing Slimes For 300 Years And Maxed Out My Level, nhân vật chính Azusa phải ngay lập tức học hỏi mọi thứ liên quan đến nơi cô sinh sống, bắt đầu từ hệ thống tiền tệ hiện hành cho đến những quái vật thường xuất hiện ở ngoại ô.</p>
<p>Nếu nhân vật chính gặp may, họ sẽ có những người hướng dẫn thân thiện làm đồng hành, giúp giải thích mọi thứ về thế giới. Nếu không may lắm như Kirito, Asuna và nhân vật trong Sword Art Online, họ có thể phải vật lộn để sinh tồn ở thế giới này mà không biết cầu cứu ai.</p>
<p>9. Đi đâu cũng bị cuốn vào những drama tranh chấp</p>
<p>Nhiều thế giới <strong>isekai</strong> chìm trong những cuộc xung đột lớn. Điều này có thể ở cấp độ đất nước, hoặc có thể là lỗi lầm của chính thế giới này, đặc biệt nếu chúng có liên quan đến những boss nguy hiểm trong bóng tối hoặc các vị thần. Dù bằng cách nào đi chắc nữa thì nhân vật chính sẽ bị cuốn vào những xung đột này và đóng vai trò quan trọng, ảnh hưởng đến việc chấm dứt xung đột, bất kể nhân vật chính có muốn hay không.</p>
<p>Từ việc dọn dẹp các boss đến truy lùng kẻ chủ mưu thực sự trong Sword Art Online để dừng cuộc chiến rồng, nhân vật chính thường là người dọn dẹp tất cả những hỗn độn trong thế giới chuyển sinh. Tất nhiên, ngay cả khi họ không phải người chịu trách nhiệm cho các sự vụ lộn xộn nói trên.</p>
<p>8. Cứ nhân vật chính là sẽ dễ gây thù chuốc oán</p>
<p>Nhân vật chính thường sống với sức mạnh to lớn và trở thành người hùng một cách dễ dàng. Nhưng điều đó đồng nghĩa với việc kéo theo nhiều người đố kị. Một số kẻ thù sau này có thể trở thành đồng minh, song cũng không thiếu các đồng minh dễ dàng trở thành kẻ thù, tùy thuộc vào cách nhân vật chính hợp tác với ai.</p>
<RelationNewsInPage category={category} />
<p>Ngoài ra, nhiều kẻ thù muốn có sức mạnh hoặc khả năng mà nhân vật chính có, đôi khi còn vượt qua nhân vật chính hoàn toàn. Dù ở trường hợp nào thì điều này cũng sẽ đem lại cho nhân chính một kẻ thù xuyên suốt cả bộ truyện. Những kẻ thù này có thể khó đánh bại ở tầm địa phương cho đến ác nhân đe dọa đến sự tồn vong của thế giới.</p>
<p>7. Nhân vật chính có thể chuyển sinh thành sinh vật hoặc đồ vật không phải con người</p>
<p>Có không ít nhân vật chính trong <strong>isekai</strong> <strong>anime</strong> đã chuyển sinh thành nhện, máy bán hàng tự động hoặc slime và nhiều hình thức không phải con người khác. Điều này chắc chắn gây bất lợi cho họ, vì họ thường rơi vào những thế giới mà người dân không cần có slime hay nhện ở xung quanh. Ngoài ra, những sinh vật thụ động như thế này nhìn chung rất dễ bị tiêu diệt, chỉ cần bất cẩn đôi chút thì nhân vật chính sẽ mất mạng.</p>
<p>6. Được quá nhiều người theo đuổi</p>
<p>Đây có thể xem là đặc quyền nhưng cũng có thể trở thành điều phiền phức cho nhân vật chính. Việc có quá nhiều người theo đuổi đôi khi khiến cho tính cách của các nhân vật không được đào sâu, đồng thời nhân vật chính phải dành nhiều thời gian để vật lộn với những mối quan hệ này.</p>
<p>Bộ <strong>anime</strong> Kenja no Mago hiện nay là một trong số các anime có sự thay đổi trong cách xây dựng các mối tình đa phương, đồng thời cho các nhân vật thêm thời gian để phát triển bản thân thay vì chỉ quan tâm đến tình cảm.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/azusa-child-form-with-pills-1628152715274674158216.jpg' alt='1, ISEKAI,MANGA ANIME,ANIME,ISEKAI ANIME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/diseum-kenja-no-mago-cropped-16281527324801447790496.jpg' alt='2, ISEKAI,MANGA ANIME,ANIME,ISEKAI ANIME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/kenja-no-mago-august-shin-cropped-1628152749626165583053.jpg' alt='3, ISEKAI,MANGA ANIME,ANIME,ISEKAI ANIME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/that-time-i-got-reincarnated-as-a-slime-header-1628152768297345252417.jpg' alt='4, ISEKAI,MANGA ANIME,ANIME,ISEKAI ANIME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/kenja-no-mago-cecily-maria-cropped-16281527855651049015578.png' alt='5, ISEKAI,MANGA ANIME,ANIME,ISEKAI ANIME,' note=''/>
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
