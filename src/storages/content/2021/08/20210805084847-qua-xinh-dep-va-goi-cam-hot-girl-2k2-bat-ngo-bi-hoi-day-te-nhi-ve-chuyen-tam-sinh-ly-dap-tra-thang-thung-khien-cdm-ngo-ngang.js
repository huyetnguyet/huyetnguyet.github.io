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
"timestamp": '05/08/2021 08:48 AM',
"title": 'Quá xinh đẹp và gợi cảm, hot girl 2k2 bất ngờ bị hỏi đầy tế nhị về chuyện tâm sinh lý, đáp trả thẳng thừng khiến CĐM ngỡ ngàng',
"description": 'Cô nàng hot girl đáp trả những bình luận khiếm nhã một cách vô cùng thông minh.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-1628067838542765184467.jpg',
"alt": 'HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,',
"category": 'images',
"date": '05/08/2021',
"time": '08:48 AM',
"link": '/qua-xinh-dep-va-goi-cam-hot-girl-2k2-bat-ngo-bi-hoi-day-te-nhi-ve-chuyen-tam-sinh-ly-dap-tra-thang-thung-khien-cdm-ngo-ngang',
"zcomponent": 'page_20210805084847',
"filepath": './20210805084847-qua-xinh-dep-va-goi-cam-hot-girl-2k2-bat-ngo-bi-hoi-day-te-nhi-ve-chuyen-tam-sinh-ly-dap-tra-thang-thung-khien-cdm-ngo-ngang.js'
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
const title = 'Quá xinh đẹp và gợi cảm, hot girl 2k2 bất ngờ bị hỏi đầy tế nhị về chuyện tâm sinh lý, đáp trả thẳng thừng khiến CĐM ngỡ ngàng';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '05/08/2021 08:48 AM';
const description = 'Cô nàng hot girl đáp trả những bình luận khiếm nhã một cách vô cùng thông minh.';
const link = 'qua-xinh-dep-va-goi-cam-hot-girl-2k2-bat-ngo-bi-hoi-day-te-nhi-ve-chuyen-tam-sinh-ly-dap-tra-thang-thung-khien-cdm-ngo-ngang';
const tagparam = ["HOT GIRL","SUNNA","WILSON NHẬT ANH","CỘNG ĐỒNG MẠNG","GÁI XINH",];
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

export default function page_20210805084847() {
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
                  <div className="contentBodyLeft"><p>Sở hữu nhan sắc xinh đẹp cũng như thân hình cực kỳ gợi cảm, cái tên <strong>Wilson Nhật Anh</strong> hay gần đây là <strong>Sunna</strong> từ lâu đã trở thành một trong những <strong>hot girl</strong> nhận được rất nhiều sự chú ý, quan tâm từ phía <strong>cộng đồng mạng</strong> Việt Nam. Sinh năm 2002, tức là năm nay mới tròn 19 tuổi, thế nhưng vẻ đẹp trưởng thành trước tuổi của Nhật Anh cô nàng lại cực kỳ thu hút và giúp cho hot girl này sở hữu lượng fan hâm mộ đông đảo. Cô nàng còn được biết tới như một trong những bạn thân nhất của Xoài Non - vợ của hot streamer Xemesis.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280671242811185595258.jpg' alt='1, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note='Wilson Nhật Anh - cô nàng hot girl đình đám'/>
<p>Không ai có thể phủ nhận sự nóng bỏng và xinh đẹp của cô nàng <strong>hot girl</strong> 2k2 này khi mà mặc dù chỉ mới 19 tuổi, thế nhưng <strong>Wilson Nhật Anh</strong> đã sở hữu số đo ba vòng lên tới 90-65-95 chẳng thua kém gì người mẫu. Tuy nhiên, đi kèm với sự nổi tiếng cũng là vô số những phiền toái xung quanh và một trong số đó, dễ thấy nhất chính là việc Wilson Nhật Anh thường xuyên phải nhận những tin nhắn có phần khiếm nhã, tiêu cực từ phía một bộ phận thiếu ý thức, văn hóa. Đáng chú ý, thay vì né tránh hay bỏ qua, cô nàng hot girl lại đáp trả một cách rất mạnh mẽ.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280673195721021267931-16280673760162042639787.jpg' alt='2, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note='Màn phản pháo khá mạnh mẽ của nàng hot girl trước lời comment khiếm nhã'/>
<p>Bên cạnh đó, cũng trong phần AMA này, cô nàng <strong>hot girl</strong> còn khẳng định luôn vòng một "khủng" của mình là tự nhiên, chưa hề trải qua dao kéo. Đây cũng là một trong những cách để cô nàng đáp trả lại vô số những bình luận, nghi vấn có phần thất thiệt trước đây về đôi gò bồng đảo ngoại cỡ của mình.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-1628067432835438745853.jpg' alt='3, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note='Wilson Nhật Anh rất tự tin với vòng một của mình'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280675287751984662581.jpg' alt='4, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note='Theo thời gian, cô nàng hot girl ngày càng trở nên cá tính, xinh đẹp và gợi cảm hơn'/>
<RelationNewsInPage category={category} /><p>Kể từ sau khi nổi tiếng cách đây 2 năm, theo thời gian, nhan sắc của cô nàng <strong>hot girl</strong> ngày càng thăng hạng. Bản thân <strong>Wilson Nhật Anh</strong> cũng rất thoải mái và cởi mở trong phong cách ăn mặc của mình, không ngại khoe sự gợi cảm, nóng bỏng của bản thân. Kể từ sau khi được Xemesis "mai mối" với bạn thân ViruSs, tên tuổi của Wilson Nhật Anh cũng được chú ý hơn rất nhiều. </p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280677181092066446483.jpg' alt='5, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note='Hình ảnh của Wilson Nhật Anh thời mới nổi tiếng'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280676562981406583760.jpg' alt='6, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note='Có thể thấy cô nàng ngày càng đằm thắm, quyến rũ'/>
<p>Hiện tại, cô nàng vẫn đang tập trung cho việc học và thỉnh thoảng nhận lời làm công việc người mẫu ảnh. Nàng <strong>hot girl</strong> 10x cũng từng tiết lộ ngay cả trong các buổi chụp hình, cô cũng luôn có người nhà đi cùng và công việc này giúp cô nàng có thu nhập ổn định.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-1628067838542765184467.jpg' alt='7, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-1628067854951648098252.jpg' alt='8, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280678859281097070238.jpg' alt='9, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-1628067934880906498314.jpg' alt='10, HOT GIRL,SUNNA,WILSON NHẬT ANH,CỘNG ĐỒNG MẠNG,GÁI XINH,' note=''/>
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
