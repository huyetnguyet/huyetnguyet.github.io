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
"timestamp": '04/08/2021 06:56 PM',
"title": 'Gợi ý thực phẩm cần thiết để phát triển cơ bắp cho người tập thể hình',
"description": 'Để phát triển cơ bắp, bạn có thể lựa chọn một số thực phẩm giúp tăng cơ dưới đây!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/nhung-dieu-it-biet-ve-trung-ga-xong-khoi-han-quoc-dang-gay-sot-o-viet-nam-324992124719-1500777418-width600height380-16280716646241504815593.jpg',
"alt": 'phát triển cơ bắp,đảm bảo dinh dưỡng,chế độ ăn uống lành mạnh,chế độ tập luyện,ăn uống khoa học,tăng cơ bắp,',
"category": 'life',
"date": '04/08/2021',
"time": '06:56 PM',
"link": '/goi-y-thuc-pham-can-thiet-de-phat-trien-co-bap-cho-nguoi-tap-the-hinh',
"zcomponent": 'page_20210804185614',
"filepath": './20210804185614-goi-y-thuc-pham-can-thiet-de-phat-trien-co-bap-cho-nguoi-tap-the-hinh.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'life';
const categoryLink = '/life';
const title = 'Gợi ý thực phẩm cần thiết để phát triển cơ bắp cho người tập thể hình';
const author = 'JULIAN,';
const source = 'Pháp luật & Bạn đọc';
const timestamp = '04/08/2021 06:56 PM';
const description = 'Để phát triển cơ bắp, bạn có thể lựa chọn một số thực phẩm giúp tăng cơ dưới đây!';
const link = 'goi-y-thuc-pham-can-thiet-de-phat-trien-co-bap-cho-nguoi-tap-the-hinh';
const tagparam = ["phát triển cơ bắp","đảm bảo dinh dưỡng","chế độ ăn uống lành mạnh","chế độ tập luyện","ăn uống khoa học","tăng cơ bắp",];
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

export default function page_20210804185614() {
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
                  <div className="contentBodyLeft"><p>Cơ bắp cần thời gian dài để hình thành và phát triển. Do đó, chế độ ăn uống phù hợp và đúng đắn sẽ giúp bạn có cơ bắp như ý.</p>
<p>Tuyệt đối không nên quá tin tưởng và lạm dụng vào các loại thuốc đang được truyền miệng hoặc quảng cáo với tác dụng giúp tăng cơ. Các loại thuốc này có thể gây hại cho sức khoẻ nếu sử dụng không đúng cách.</p>
<p>Thực tế, quá trình để <strong>phát triển cơ bắp</strong> diễn ra một cách tự nhiên từ khi sinh ra đến khi trưởng thành và cơ thể hoàn chỉnh ở tuổi ngoài 20.</p>
<p>Sau đó, cơ bắp của cơ thể phát triển thêm do quá trình tập luyện và cơ bắp phát triển trong một thời gian dài trước đó. Do đó, không thể nhanh chóng có khối cơ to lớn sau một khoảng thời gian ngắn luyện tập dù có sử dụng thuốc hỗ trợ.</p>
<p>Dù cho quá trình tập luyện thể dục, thể thao có cường độ cao như thế nào đi chăng nữa nếu bỏ qua vấn đề dinh dưỡng của cơ thể thì <strong>phát triển cơ bắp</strong> vẫn không thể đạt được kết quả toàn diện.</p>
<p>Trong quá trình tập thể hình, việc <strong>đảm bảo dinh dưỡng</strong> là yếu tố quan trọng hàng đầu và đem tính quyết định thành công lên tới 70%. Vì vậy, có một <strong>chế độ ăn uống lành mạnh</strong> có tác dụng giúp bạn có cơ bắp như mong muốn.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/why-secretary-kim-2018-filming-location-episode-10-ggotge-maeul-koreandramaland-9-16280718591691782038429.jpg' alt='1, phát triển cơ bắp,đảm bảo dinh dưỡng,chế độ ăn uống lành mạnh,chế độ tập luyện,ăn uống khoa học,tăng cơ bắp,' note='Dinh dưỡng là yếu tố quan trọng hàng đầu và đem tính quyết định thành công giúp phát triển cơ bắp lên tới 70% (Ảnh Internet)'/>
<p>Đọc thêm bài viết: Protein là gì? Tác dụng của protein đối với sức khỏe và phân loại</p>
<p>Để có cơ bắp, không chỉ cần <strong>chế độ tập luyện</strong> kiên trì mà còn phải thay đổi chế độ <strong>ăn uống khoa học</strong>, lành mạnh. Một số thực phẩm có tác dụng <strong>phát triển cơ bắp</strong> hiệu quả được giới thiệu như sau:</p>
<p>Các loại trái cây và rau xanh là nền tảng chính trong tất cả các chế độ ăn lành mạnh của con người. Với rau xanh và trái cây sẽ giúp cơ thể nhận được chất xơ, vitamin và khoáng chất cần thiết.</p>
<p>Không những thế, trong rau xanh còn có chứa một lượng nhỏ chất đạm. Có thể lựa chọn một số loại rau xanh như: rau cải bó xôi, trái cây như quả bơ, khoai lang cũng giúp <strong>phát triển cơ bắp</strong> tốt.</p>
<p>Các loại thịt nạc cung cấp một lượng lớn chất đạm, trong đó cũng có nhiều axit amin tốt như leucin có chứa trong thịt bò và cá có tác dụng kích thích tăng trưởng cơ bắp, đồng thời còn giúp giảm tình trạng thoái hoá mô cơ.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/thit-nac-16280716095211958281889.jpg' alt='2, phát triển cơ bắp,đảm bảo dinh dưỡng,chế độ ăn uống lành mạnh,chế độ tập luyện,ăn uống khoa học,tăng cơ bắp,' note='Các loại thịt nạc cung cấp một lượng lớn chất đạm, trong đó cũng có nhiều axit amin tốt (Ảnh Internet)'/>
<RelationNewsInPage category={category} /><p>Ngoài ra, thịt nạc còn chứa nhiều dưỡng chất cần thiết khác như sắt có tác dụng vận chuyển oxy đến cơ và có tác dụng giúp nuôi dưỡng cơ bắp.</p>
<p>Thịt gà là thực phẩm không thể thiếu trong quá trình <strong>phát triển cơ bắp</strong>. Trong thịt gà có chứa nhiều sắt và kẽm còn giúp tăng cường miễn dịch.</p>
<p>Đọc thêm: Ức gà là gì? 9 giá trị dinh dưỡng của ức gà ai cũng nên biết</p>
<p>Các loại cá thì cá thu có chứa nguồn protein lớn, trong 100g cá thu có tới 63g protein. Trong khi đó, cá thu còn chứa rất nhiều vitamin A, vitamin E, vitamin E và các nguyên tố như sắt, calcium, magnesium,... cần thiết để <strong>phát triển cơ bắp</strong>.</p>
<p>Trứng là thực phẩm chứa tất cả các axit amin thiết yếu cần thiết. Người muốn <strong>tăng cơ bắp</strong> nên ăn trứng, mỗi ngày ăn 1 quả kể cả lòng đỏ.</p>
<p>Sữa là loại nước uống cung cấp cho cơ thể nhiều protein tốt.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/nhung-dieu-it-biet-ve-trung-ga-xong-khoi-han-quoc-dang-gay-sot-o-viet-nam-324992124719-1500777418-width600height380-16280716646241504815593.jpg' alt='3, phát triển cơ bắp,đảm bảo dinh dưỡng,chế độ ăn uống lành mạnh,chế độ tập luyện,ăn uống khoa học,tăng cơ bắp,' note='Trứng là thực phẩm chứa tất cả các axit amin thiết yếu cần thiết (Ảnh Internet)'/>
<p>Các loại hạt có chứa nhiều vitamin, chất chống oxy hoá. Đồng thời, các loại hạt còn chứa chất xơ, chất béo rất tốt cho <strong>phát triển cơ bắp</strong>.</p>
<p>Đậu là một nguồn tinh bột chất lượng cao, không chỉ vậy đậu còn giúp cung cấp cho cơ thể nhiều chất đạm, chất xơ, vitamin và chất chống oxy hoá.</p>
<p>Whey protein được biết đến là một trong những protein chính tìm thấy trong các sản phẩm sữa và là một trong những sản phẩm phụ được tách ra từ quá trình sản xuất phô mai.</p>
<p>Ngoài ra, whey protein còn được biết là một loại protein có giá trị sinh học cao hơn các loại thực phẩm khác. Tuy nhiên, hiện nay để mua được sản phẩm whey protein chính hãng, cần lựa chọn các cơ sở bán hàng uy tín và cẩn trọng trong quá trình sử dụng (tốt nhất nên nhận tư vấn từ huấn luyện viên trước khi dùng).</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/nhung-dieu-it-biet-ve-trung-ga-xong-khoi-han-quoc-dang-gay-sot-o-viet-nam-324992124719-1500777418-width600height380-16280716646241504815593.jpg' alt='4, phát triển cơ bắp,đảm bảo dinh dưỡng,chế độ ăn uống lành mạnh,chế độ tập luyện,ăn uống khoa học,tăng cơ bắp,' note=''/>
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
