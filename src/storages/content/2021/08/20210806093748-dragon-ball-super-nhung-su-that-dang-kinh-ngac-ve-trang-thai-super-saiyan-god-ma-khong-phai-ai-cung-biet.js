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
"title": 'Dragon Ball Super: Những sự thật đáng kinh ngạc về trạng thái Super Saiyan God mà không phải ai cũng biết',
"description": 'Super Saiyan God là 1 trạng thái cực mạnh xuất hiện trong Dragon Ball Super.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/5/abg-1-16281455824961943368232.jpg',
"alt": 'DRAGON BALL,SUPER SAIYAN GOD,THẦN HỦY DIỆT,HÀNH TINH VEGETA,7 VIÊN NGỌC RỒNG,',
"category": 'games',
"date": '06/08/2021',
"time": '09:37 AM',
"link": '/dragon-ball-super-nhung-su-that-dang-kinh-ngac-ve-trang-thai-super-saiyan-god-ma-khong-phai-ai-cung-biet',
"zcomponent": 'page_20210806093748',
"filepath": './20210806093748-dragon-ball-super-nhung-su-that-dang-kinh-ngac-ve-trang-thai-super-saiyan-god-ma-khong-phai-ai-cung-biet.js'
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
const title = 'Dragon Ball Super: Những sự thật đáng kinh ngạc về trạng thái Super Saiyan God mà không phải ai cũng biết';
const author = 'SuSu';
const source = 'Trí Thức Trẻ';
const timestamp = '06/08/2021 09:37 AM';
const description = 'Super Saiyan God là 1 trạng thái cực mạnh xuất hiện trong Dragon Ball Super.';
const link = 'dragon-ball-super-nhung-su-that-dang-kinh-ngac-ve-trang-thai-super-saiyan-god-ma-khong-phai-ai-cung-biet';
const tagparam = ["DRAGON BALL","SUPER SAIYAN GOD","THẦN HỦY DIỆT","HÀNH TINH VEGETA","7 VIÊN NGỌC RỒNG",];
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

export default function page_20210806093748() {
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
                  <p><strong>Super Saiyan God</strong> xuất hiện lần đầu tiên trong series <strong>Dragon Ball</strong> Super. Chuyện là <strong>thần hủy diệt</strong> Beerus đã có 1 giấc mơ về Thần của người Saiyan và khi thức dậy, ông đã đi khắp vũ trụ 7 để tìm ra người đó nhưng không ai biết chút thông tin nào về người này cả.</p>
<p>Cuối cùng, dưới sự trợ giúp của Rồng thần, Goku đã có thể đạt tới sức mạnh Thần của người Saiyan thông qua 1 nghi thức với 5 người Saiyan có trái tim thuần khiết khác. Ở trạng thái này, trong <strong>Dragon Ball</strong> Z: Battle of Gods, Goku đã khiến cho Beerus phải dùng đến 70% sức mạnh để chiến đấu với anh. Có thể thấy đây là một trong những trạng thái mạnh nhất thế giới Dragon Ball.</p>
<p>Và dưới đây là 5 sự thật bất ngờ về <strong>Super Saiyan God</strong> mà có thể bạn chưa biết.</p>
<p><strong>Super Saiyan God</strong> hoạt động khác với Ki bình thường</p>
<p>Trở thành <strong>Super Saiyan God</strong> có nghĩa là người dùng sẽ có được luồng Ki thần thánh, một dạng Ki độc đáo khác với bình thường. Về hình dáng nó không chỉ có màu đỏ vì nó trông rất bắt mắt mà còn cho phép một người cảm nhận được Ki giống như của <strong>Thần hủy diệt</strong> Beerus. Người thường không thể nhìn thấy được ngay cả với giác quan của các chiến binh được huấn luyện tốt nhất. Một Super Saiyan God mới được biến đổi cũng trở nên "vô hình" đối với những người không thể cảm nhận được God Ki.</p>
<p><strong>Super Saiyan God</strong> có thể tái tạo cơ thể</p>
<p>Dòng máu Saiyan nổi tiếng trong việc hồi phục cơ thể. Tuy nhiên, giữa Đậu thần và khả năng chữa bệnh thì cơ thể của họ chỉ có thể tự chữa lành các vết thương cơ bản chứ không thể mọc ra các bộ phận như người Namekian. Còn hình dạng <strong>Super Saiyan God</strong> thì có thể tái tạo da bị tổn thương trong khi biến đổi. Điều này dẫn đến việc Goku có thể phục hồi hoặc chữa lành khỏi thiệt hại khi ở dạng mới này. Tuy nhiên việc chữa bệnh khi ở dạng Super Saiyan God sẽ tiêu tốn năng lượng, nghĩa là Goku càng phải chữa trị nhiều thì mức năng lượng của anh càng yếu đi.</p>
<p><strong>Super Saiyan God</strong> cho phép người dùng chiến đấu bên ngoài không gian</p>
<p>Người Saiyan có thể thực hiện rất nhiều chiến công không thể tin được như có thể đấm xuyên qua núi, chiến đấu với các vị thần và phá hủy các hành tinh. Nhưng dù mạnh thế nào đi nữa thì họ cũng chỉ là những phàm nhân, vẫn chịu những tác động của quy luật thời gian và vật lý.</p>
<RelationNewsInPage category={category} />
<p>Ví dụ như người Saiyan không thể thở trong môi trường bên ngoài vũ trụ. Họ cũng cần tàu vũ trụ để di chuyển giữa các hành tinh giống như hầu hết các loài khác. Tuy nhiên, <strong>Super Saiyan God</strong> đã phá vỡ giới hạn này. Khi Goku và Vegeta sử dụng hình thức này, họ có thể bay trong không gian miễn là duy trì được nó.</p>
<p><strong>Super Saiyan God</strong> cực kỳ nguy hiểm khi người dùng mất kiểm soát</p>
<p>Hình thức <strong>Super Saiyan God</strong> cho phép người dùng dự đoán vị trí mục tiêu sẽ tấn công, giúp họ có cơ hội đưa ra chiến lược phòng thủ. Đây là lý do tại sao trận chiến đầu tiên của Goku với Beerus, anh đã không bị trúng đòn nhiều. Tuy nhiên trạng thái này lại rất nguy hiểm khi sử dụng để tấn công, chúng ta đã thấy trong <strong>Dragon Ball</strong> Super lúc Goku và Beerus chiến đấu thì chỉ với một cú đấm có thể gây ra những thiệt hại lớn. Vì thế nếu Goku mất kiểm soát ở trạng thái này thì toàn bộ Trái Đất có thể bị tiêu diệt.</p>
<p><strong>Super Saiyan God</strong> là một phần lý do khiến <strong>hành tinh Vegeta</strong> bị hủy diệt</p>
<p>Bộ truyện tranh <strong>Dragon Ball</strong> Minus đã chỉnh sửa lại phần lớn truyền thuyết về Bảy viên ngọc rồng cũ. Và một trong những phần đáng ngạc nhiên là việc Frieza biết về truyền thuyết <strong>Super Saiyan God</strong> từ rất lâu. Chính vì thế hắn ta đã rất sợ hãi và quyết định cho nổ tung <strong>hành tinh Vegeta</strong> để tiêu diệt những hiểm họa sau này.</p>
<p>Đương nhiên, đây không phải là ý định ban đầu của manga <strong>Dragon Ball</strong> Z. Nhưng trong Dragon Ball Minus đã xây dựng nó như một phần quá khứ của Goku. Và trong Dragon Ball Super: Broly chúng ta đã được thấy rõ những hành động này.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/5/abg-1-16281455824961943368232.jpg' alt='1, DRAGON BALL,SUPER SAIYAN GOD,THẦN HỦY DIỆT,HÀNH TINH VEGETA,7 VIÊN NGỌC RỒNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/anh-2-16281457072761205435485.jpg' alt='2, DRAGON BALL,SUPER SAIYAN GOD,THẦN HỦY DIỆT,HÀNH TINH VEGETA,7 VIÊN NGỌC RỒNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/5/anh-3-162814558252217702314.jpg' alt='3, DRAGON BALL,SUPER SAIYAN GOD,THẦN HỦY DIỆT,HÀNH TINH VEGETA,7 VIÊN NGỌC RỒNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/4-16281457858631934700244.png' alt='4, DRAGON BALL,SUPER SAIYAN GOD,THẦN HỦY DIỆT,HÀNH TINH VEGETA,7 VIÊN NGỌC RỒNG,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/anh-5-1628145582541647758096.jpg' alt='5, DRAGON BALL,SUPER SAIYAN GOD,THẦN HỦY DIỆT,HÀNH TINH VEGETA,7 VIÊN NGỌC RỒNG,' note=''/>
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
