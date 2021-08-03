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
"timestamp": '31/07/2021 01:18 PM',
"title": 'Điểm lại 10 trend khai nguồn từ idol Hàn, đâu mới là xu hướng được lòng netizen nhất?',
"description": 'Toàn là các trend dễ học, dễ làm như này, bảo sao netizen nhà mình cứ tha hồ thử nghiệm mãi thôi.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/screen-shot-2019-01-19-at-42224-pm-15478903271781963938842-16277037921091345497149.png',
"alt": 'Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,',
"category": 'stars',
"date": '31/07/2021',
"time": '01:18 PM',
"link": '/diem-lai-10-trend-khai-nguon-tu-idol-han-dau-moi-la-xu-huong-duoc-long-netizen-nhat',
"zcomponent": 'page_20210731131802',
"filepath": './20210731131802-diem-lai-10-trend-khai-nguon-tu-idol-han-dau-moi-la-xu-huong-duoc-long-netizen-nhat.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Điểm lại 10 trend khai nguồn từ idol Hàn, đâu mới là xu hướng được lòng netizen nhất?";
const author = "HÀ TRẦN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "31/07/2021 01:18 PM";
const description =
  "Toàn là các trend dễ học, dễ làm như này, bảo sao netizen nhà mình cứ tha hồ thử nghiệm mãi thôi.";
const link =
  "diem-lai-10-trend-khai-nguon-tu-idol-han-dau-moi-la-xu-huong-duoc-long-netizen-nhat";
const tagparam = [
  "Makeup",
  "star style",
  "tóc của sao",
  "hot trend",
  "idol Hàn",
  "idol Kpop",
  "hot trends 2021",
];
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

export default function page_20210731131802() {
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
                      Nhắc đến cái nôi sản sinh ra hàng loạt xu hướng dẫn đầu
                      châu Á, hẳn là ai cũng nghĩ ngay đến Hàn Quốc với số lượng
                      idol cực "khủng". Từ tóc tai, <strong>makeup</strong> cho
                      đến trang phục, phụ kiện... các thần tượng xứ kim chi bao
                      giờ cũng là "trend-setter" hàng đầu. Và thế rồi, các nghệ
                      sĩ lẫn netizen Việt cứ thế mà "đu" theo ngon ơ.
                    </p>
                    <h5>1. Tóc ngắn tỉa layer - Wendy</h5>
                    <p>
                      Kiểu tóc lí tưởng trong lòng giới trẻ đến tận bây giờ hẳn
                      là tóc bob tỉa layer do cô nàng Wendy (Red Velvet) khai
                      phá. Không biết bao nhiêu salon tóc tại Việt Nam đã nhận
                      về bức ảnh dưới đây kèm theo câu nói: "Cô/Chú/Anh/Chị cứ
                      cắt cho em thế này là được". Vừa cá tính, trẻ trung lại
                      rất đỗi nịnh mặt, trendy, bảo sao tóc layer Wendy này hot
                      thế.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/screen-shot-2019-01-19-at-42224-pm-15478903271781963938842-16277037921091345497149.png"
                      alt="1, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/screen-shot-2019-01-19-at-42203-pm-1547890327174342351749-16277037922181563108860.png"
                      alt="2, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/screen-shot-2019-01-19-at-42104-pm-1547890327164158393378-1627703792356823236699.png"
                      alt="3, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />

                    <h5>2. Kẹp mái cả chùm - Jennie</h5>
                    <p>
                      Kể từ sau đợt quảng bá Solo, mốt kẹp mái theo Jennie bắt
                      đầu nở rộ. Thay vì chỉ sử dụng 1 - 2 chiếc kẹp đơn sắc, cô
                      nàng chơi nguyên 1 bộ 4 kẹp mỗi bên. Nhờ đó, mái tóc của
                      Jennie nhìn lung linh, sống động hơn hẳn.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/21888669612907344746816058495363868997823157n-16277057747651765961424.jpg"
                      alt="4, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/j4-1558512298898226211107-1627705774819560625866.jpg"
                      alt="5, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <h5>3. Giày đạp gót - G-Dragon</h5>
                    <p>
                      Bỗng dưng làm điều gì đó và nó tự động trở thành trend -
                      điều này quả thực đúng với G - Dragon. Uy tín thời trang
                      bậc nhất châu Á, cứ cái gì qua tay "anh Rồng" sau đó sẽ
                      trở nên phát sốt trong cộng đồng giới trẻ. Kiểu đi giày
                      đạp gót trông thì tưởng lười biếng mà lại cứ hút mắt, thời
                      trang theo cách không ai lí giải nổi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/21504557512907372846813245022728957672163732n-1627706920925637567916.jpg"
                      alt="6, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/giay-vans-dap-got-01-16277069209861105535091.jpg"
                      alt="7, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />

                    <h5>4. Kẹp nơ to bản - Jisoo</h5>
                    <p>
                      Được mỹ nhân YG lăng xê nhiệt tình từ sân khấu cho đến đời
                      thường, kẹp nơ to bản sau đó trở thành{" "}
                      <strong>hot trend</strong> gần như mọi nhà đều thử. Thay
                      vì kẹp ở sau gáy như bình thường, Jisoo chọn biến tấu bằng
                      cách kẹp ở 2 bên mai, mang đến hình ảnh vừa xinh xắn lại
                      thêm đôi phần mới lạ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/107523453272628114158682867049473598204477n-15946277340141207060819-16277075902701184854336.jpg"
                      alt="8, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/21972755112907357913481406355128339385150276n-1627707590326938292489.jpg"
                      alt="9, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />

                    <h5>
                      5. <strong>Makeup</strong> trái đào - Sulli
                    </h5>
                    <p>
                      Muốn trông thật đáng yêu, chúm chím, mời bạn thử ngay
                      trend trang điểm trái đào khơi nguồn từ Sulli. Nhuộm 1 màu
                      tóc hồng thật nổi, <strong>makeup</strong> mắt tối giản,
                      đánh má hồng thật hồng và tô son cùng tông, vậy là xong.
                      Diện mạo bạn giờ đây vừa hây hây lại vừa mơ màng, hút mắt
                      lắm luôn.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2182551445253224620405541190299792355661652n-1627707690385548324605.jpg"
                      alt="10, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/180533sulli-16277076904381617535070.jpg"
                      alt="11, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <h5>6. Quần jeans sặc sỡ - SNSD</h5>
                    <RelationNewsInPage category={category} />
                    <p>
                      Ngược về quá khứ khoảng 10 năm về trước là lúc mốt quần
                      jeans nhiều màu lên ngôi. Xanh, đỏ, tím, vàng, hồng...
                      không màu gì là 9 cô gái không dám thử. Và thế là nó hot
                      rần rần lên, người người, nhà nhà đổ xô đi tìm mẫu jeans
                      cạp trễ nổi thật nổi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-16277079513431571062457.jpg"
                      alt="12, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <h5>7. Crop top + jeans ống thụng - Lisa</h5>
                    <p>
                      Hot từ hè này qua hè khác, set đồ: crop top + jeans ống
                      thụng sau khi được Lisa khơi mào đã trở thành tôn chỉ mặc
                      đẹp của hội chị em. Khoe khéo eo thon, che khuyết điểm
                      thân dưới, "hack" chân dài thần sầu, cách mix đồ này hợp
                      lắm với các bạn dáng quả lê hay team bé người.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/21891018012908271980056666572041811089944605n-1627708321255710594230.jpg"
                      alt="13, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/photo-7-1586664935156138090328-1-e1602668074716-16277083213011070368651.jpg"
                      alt="14, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <h5>8. Nhuộm mái - Jennie</h5>
                    <p>
                      Vẫn là Jennie nhưng lần này cô nàng tái xuất với mốt tóc
                      tẩy 2 mái sáng màu sau How You Like That. Yên tâm là kiểu
                      mái này sẽ chơi được lâu lắm luôn, bởi sau khi nhuộm hồng,
                      tóc sẽ phai trở lại nền tẩy bạch kim, nhìn vẫn chất hơn
                      nước cất. Về đến Việt Nam, kiểu tóc này được các bạn trẻ
                      biến tấu, không chỉ hồng hay trắng, mái vàng, mái xanh
                      lá/xanh biển... đều có cả.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/jennie-tiep-tuc-dinh-phot-luoi-nhay-nhung-lan-nay-lai-la-su-ha-khac-e9003734-1627708629824110774776.jpg"
                      alt="15, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/jennie-blackpink-mat-toi-18-tieng-de-nhuom-mai-dau-highlight-huyen-thoai-1622535533-3-1627708629881551715023.jpg"
                      alt="16, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <h5>9. Tóc mullet - G-Dragon</h5>
                    <p>
                      Tóc mullet có đặc điểm: 2 bên đầu thường cắt ngắn hoặc cạo
                      bớt, tóc sau gáy được nuôi dài hướng ra sau và vuốt sang 2
                      bên. Và ông hoàng của kiểu tóc này xin được gọi tên
                      G-Dragon. Các nghệ sĩ Việt sau đó đua nhau chạy theo mốt
                      này, từ "người em sinh đôi" Sơn Tùng M-TP, rồi Noo Phước
                      Thịnh... cũng không nằm ngoài trào lưu này, và quả thực ai
                      cũng "bảnh" miễn bàn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/11888879310977321039545909130584964497893281oec1a0abb26714106bc98360e2ce856b71024x1024-1627704902822632702675.jpg"
                      alt="17, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/mullet-2-16277050213751895697635.jpg"
                      alt="18, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/noo-phuoc-thinh-gay-nao-loan-cdm-voi-kieu-toc-kha-banh-7d4c0f1d-1627709005953168895606.jpg"
                      alt="19, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />

                    <h5>10. Váy tennis - f(x)</h5>
                    <p>
                      Từ 2014, f(x) đã cực ưu ái chân váy tennis khi diện item
                      này với tần suất dày đặc trong đợt quảng bá ca khúc First
                      Love. Sau đó 2 năm, kiểu váy này trở thành cơn sốt tại
                      Hàn. Cho đến tận bây giờ, cứ hè đến là các chị em lại rủ
                      nhau lôi item này ra diện, vừa khoe chân dài lại trẻ trung
                      thấy rõ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-16277091309032004026960.jpg"
                      alt="20, Makeup,star style,tóc của sao,hot trend,idol Hàn,idol Kpop,hot trends 2021,"
                      note=""
                    />
                    <p>
                      Nào các anh, các chị, các em, các bạn, đối với mọi người,
                      xu hướng nào được ưa chuộng hơn cả tại Việt Nam?
                    </p>
                    <p>Ảnh: Internet</p>
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
