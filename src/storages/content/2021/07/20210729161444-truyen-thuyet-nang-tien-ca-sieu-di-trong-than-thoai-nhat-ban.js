import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/07/2021 04:14 PM',
"title": 'Truyền thuyết nàng tiên cá siêu dị trong thần thoại Nhật Bản',
"description": 'Thần thoại Nhật Bản cũng có nàng tiên cá. Tuy nhiên, nàng tiên cá này không xinh đẹp, gợi cảm như thần thoại Hy Lạp mà vô cùng kì dị.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/7/magical-mermaids-16256640999882054863144.jpg',
"alt": 'KHÁM PHÁ,TIÊN CÁ,THẦN THOẠI,THẦN THOẠI NHẬT BẢN,',
"category": 'news',
"date": '29/07/2021',
"time": '04:14 PM',
"link": '/truyen-thuyet-nang-tien-ca-sieu-di-trong-than-thoai-nhat-ban',
"zcomponent": 'page_20210729161444',
"filepath": './20210729161444-truyen-thuyet-nang-tien-ca-sieu-di-trong-than-thoai-nhat-ban.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title = "Truyền thuyết nàng tiên cá siêu dị trong thần thoại Nhật Bản";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:14 PM";
const description =
  "Thần thoại Nhật Bản cũng có nàng tiên cá. Tuy nhiên, nàng tiên cá này không xinh đẹp, gợi cảm như thần thoại Hy Lạp mà vô cùng kì dị.";
const link = "truyen-thuyet-nang-tien-ca-sieu-di-trong-than-thoai-nhat-ban";
const tagparam = ["KHÁM PHÁ", "TIÊN CÁ", "THẦN THOẠI", "THẦN THOẠI NHẬT BẢN"];
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

export default function page_20210729161444() {
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
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
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
                    <p>
                      Ningyo, có nghĩa là người cá (ngoài ra còn có tên gọi khác
                      là gyojin hoặc hangyo-jin), là sinh vật trong truyện dân
                      gian Nhật Bản. Ningyo có thể so sánh với nàng{" "}
                      <strong>tiên cá</strong> trong các truyền thuyết phương
                      Tây. Tuy nhiên, dù cả hai đều gợi nhắc đến ý tưởng về sinh
                      vật nửa người nửa cá, thì giữa chúng vẫn rất khác biệt.
                    </p>
                    <p>
                      Nàng <strong>tiên cá</strong> trong truyền thuyết và{" "}
                      <strong>thần thoại</strong> phương Tây thường được miêu tả
                      là sinh vật đẹp đẽ, có sức mê hoặc, thường dẫn dụ đàn ông
                      vào chỗ chết. Thế nhưng trong truyện dân gian Nhật Bản,
                      ningyo không giống như vậy, không chỉ ở vẻ bề ngoài mà còn
                      là cách tương tác với con người.
                    </p>
                    <h5>Vẻ bề ngoài kì quặc</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/7/magical-mermaids-16256640999882054863144.jpg"
                      alt="1, KHÁM PHÁ,TIÊN CÁ,THẦN THOẠI,THẦN THOẠI NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Theo miêu tả trong các câu chuyện thì ningyo có vẻ ít
                      quyến rũ hơn <strong>tiên cá</strong> phương Tây. Người ta
                      nói rằng ningyo có nửa thân trên của khỉ và nửa thân dưới
                      của cá. Tuy nhiên, đó chưa phải là miêu tả kỳ quặc nhất về
                      ngoại hình của tiên cá Nhật Bản.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/a-ningyo-16256640809301483474741.jpg"
                      alt="2, KHÁM PHÁ,TIÊN CÁ,THẦN THOẠI,THẦN THOẠI NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Ở một số địa phương, người dân tin rằng ningyo hoàn toàn
                      không có thân người (thậm chí cả thân vượn cũng không).
                      Thay vào đó, chúng chỉ có một cái đầu giống người/vượn/bò
                      sát gắn liền với mình cá. Đôi khi, những cái đầu này được
                      miêu tả theo cách cũng không hề bình thường. Đầu ningyo có
                      hình thù dị dàng/mọc sừng/có răng nanh sắc như dao cạo.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Ngoài ra, còn có một loại ningyo được gọi là
                      amabie/amabiko. Loại ningyo này có một cái mỏ chim và từ
                      phần cổ trở xuống được bao phủ bởi vảy.
                    </p>
                    <h5>Những khả năng thần bí</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/amabie-16256641189701285044741.jpg"
                      alt="3, KHÁM PHÁ,TIÊN CÁ,THẦN THOẠI,THẦN THOẠI NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Tương truyền, ningyo có nhiều khả năng thần bí cũng như có
                      không ít khía cạnh ma thuật được gán cho chúng. Chẳng hạn
                      như chúng thường khóc ra ngọc trai. Ngoài ra có một số
                      ningyo, như amabie, theo lời đồn có thể đoán trước được
                      tương lai. Một câu chuyện được ghi nhận vào thế kỷ 19 kể
                      lại như sau: người ta đồn rằng amabie báo hiệu cho cả mùa
                      màng bội thu lẫn dịch bệnh. Bên cạnh đó, để tránh dịch
                      bệnh, người ta thường vẽ hình nó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/ningyo-from-toriyama-1625664142586606016738.jpg"
                      alt="4, KHÁM PHÁ,TIÊN CÁ,THẦN THOẠI,THẦN THOẠI NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Ngoài những loại ningyo như trên, còn có một số loại khác
                      hiền lành hơn, có thể biến hình và có khả năng quyến rũ,
                      lôi kéo đàn ông xuống biển.
                    </p>
                    <h5>Câu chuyện về nữ tu 800 tuổi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/shrine-in-fujinomiya-16256641824211728589911.jpg"
                      alt="5, KHÁM PHÁ,TIÊN CÁ,THẦN THOẠI,THẦN THOẠI NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Dù được đồn đại có nhiều quyền năng đặc biệt, nhưng khả
                      năng nổi tiếng nhất của ningyo là kéo dài tuổi thọ. Người
                      ta tin rằng chỉ cần ăn thịt ningyo thì sẽ sống bất tử,
                      hoặc chí ít là sống thọ. Xung quanh niềm tin này có vô số
                      câu chuyện khác nhau. Nổi tiếng nhất có thể kể đến là câu
                      chuyện Happyanku Bikuni (nghĩa là "Ni sư 800 tuổi").
                    </p>
                    <p>
                      Chuyện kể rằng ngày xửa ngày xưa có người đánh cá bắt được
                      ningyo. Anh ta mời bạn bè đến nhà để đãi một bữa ăn, nhưng
                      không tiết lộ cho họ biết họ sẽ được ăn thịt ningyo. Bạn
                      bè anh ta đều đoán được mình được chủ nhà mời ăn thịt
                      ningyo nên đều không đụng đũa. Dẫu vậy, cô con gái nhỏ của
                      người đánh cá lại ăn thịt. Vậy là đến năm 15 tuổi, cô bé
                      không lớn thêm nữa. Sau này cô bé trở thành một ni sư, đi
                      ngao du khắp mọi nơi rồi qua đời vào ở tuổi 800.
                    </p>
                    <h5>Câu chuyện về ningyo ở đền Tenshou-Kyousha</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/tenshou-kyousha-1625664235594109164614.jpg"
                      alt="6, KHÁM PHÁ,TIÊN CÁ,THẦN THOẠI,THẦN THOẠI NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Người Nhật xưa kia tin vào sự tồn tại của ningyo, thậm chí
                      họ có cả bằng chứng chứng minh sự tồn tại của nó. Hiện
                      nay, ở đền Tenshou-Kyousha tại Fujinomiya, còn lưu giữ một
                      thi thể được cho là của ningyo. Theo truyền thuyết, một
                      lần có vị hoàng tử gặp được ningyo. Sinh vật đang sắp
                      chết, khi nhìn thấy hoàng tử, nó kể cho ngài ta nghe về
                      việc ningyo sinh ra từ đâu. Vốn ningyo này là một ngư dân.
                      Vì lỡ xâm phạm vùng nước thiêng để đánh cá, anh ta bị
                      nguyền rủa rồi hóa thành ningyo.
                    </p>
                    <p>
                      Người ngư dân đã học được bài học thích đáng, thế nên anh
                      ta đề nghị vị hoàng tử hãy đưa thi thể của mình vào một
                      ngôi đền nào đó để trưng bày. Làm như vậy thì dân chúng
                      mỗi khi đến thăm đền, nhìn vào hình hài ningyo của anh ta
                      sẽ được nhắc nhở về cuộc sống thiêng liêng. Tuy nhiên, đây
                      có lẽ là mẫu vật <strong>tiên cá</strong> do người Nhật
                      tạo ra, giống với nàng tiên cá Fiji.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
