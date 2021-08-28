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
"timestamp": '28/08/2021 08:44 AM',
"title": '15 tựa game nhập vai "cày cuốc" miễn phí trên Steam (P2)',
"description": 'Nhiều game nhập vai miễn phí đang đợi bạn trên Steam.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-16299091925421354171177.jpg',
"alt": 'GAME NHẬP VAI,GAME MIỄN PHÍ,RUNESCAPE,GAME CÀY CUỐC,PHANTASY STAR ONLINE 2,TREE OF SAVIOR,',
"category": 'games',
"date": '28/08/2021',
"time": '08:44 AM',
"link": '/15-tua-game-nhap-vai-cay-cuoc-mien-phi-tren-steam-p2',
"zcomponent": 'page_20210828084423',
"filepath": './20210828084423-15-tua-game-nhap-vai-cay-cuoc-mien-phi-tren-steam-p2.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title = '15 tựa game nhập vai "cày cuốc" miễn phí trên Steam (P2)';
const author = "Real Madrid";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:44 AM";
const description = "Nhiều game nhập vai miễn phí đang đợi bạn trên Steam.";
const link = "15-tua-game-nhap-vai-cay-cuoc-mien-phi-tren-steam-p2";
const tagparam = [
  "GAME NHẬP VAI",
  "GAME MIỄN PHÍ",
  "RUNESCAPE",
  "GAME CÀY CUỐC",
  "PHANTASY STAR ONLINE 2",
  "TREE OF SAVIOR",
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

export default function page_20210828084423() {
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
                    <h5>RuneScape</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-16299091925421354171177.jpg"
                      alt="1, GAME NHẬP VAI,GAME MIỄN PHÍ,RUNESCAPE,GAME CÀY CUỐC,PHANTASY STAR ONLINE 2,TREE OF SAVIOR,"
                      note=""
                    />

                    <p>
                      <strong>RuneScape</strong> là một game thuộc thể loại nhập
                      vai MMORPG thiết kế gốc bằng ngôn ngữ Java, đến phiên bản
                      3 hiện tại đã sử dụng HTML 5 giúp chơi mượt hơn, vận hành
                      tốt hơn.
                    </p>
                    <p>
                      Bạn chính thức bắt đầu game tại một ngôi làng nhỏ, điều
                      đầu tiên mà bạn sẽ cảm thấy thú vị là tại đây có rất nhiều
                      NPC, ngoài một số NPC giao nhiệm vụ và bán hàng, bạn có
                      thể chọn tấn công và giết bất cứ NPC nào, từ quái vật,
                      chuột, chó, gà, bò… cả người cũng có thể giết. Mỗi một NPC
                      bị giết sẽ rơi ra một loại item khác nhau, bạn có thể bán
                      để lấy tiền mua trang thiết bị cho mình.
                    </p>
                    <p>
                      Đến với thế giới của <strong>RuneScape</strong> người chơi
                      sẽ dễ dàng mất phương hướng bởi vì một hệ thống map khổng
                      lồ, và 20 nghề nghiệp khác nhau để lựa chọn. Người chơi sẽ
                      dễ choáng ngợp trong thế giới mênh mông rộng lớn của game,
                      những cách đồng bao la bát ngát, những nông trại đàn đàn
                      gia súc, những ngôi mộ cổ bỏ hoang… Đây chính là thứ khiến
                      cho bất kỳ ai 'bập' vào Runescape đều không thể 'dứt' ra
                      nổi, đơn giản là quá thú vị.
                    </p>
                    <h5>Tree of Savior</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-1629909304973470382979.jpg"
                      alt="2, GAME NHẬP VAI,GAME MIỄN PHÍ,RUNESCAPE,GAME CÀY CUỐC,PHANTASY STAR ONLINE 2,TREE OF SAVIOR,"
                      note=""
                    />

                    <p>
                      <strong>Tree of Savior</strong> được xây dựng theo phong
                      cách thế giới mở (Open World). Chính vì vậy, các bản đồ
                      trong game đều được thiết kế khá lớn và chi tiết. Đặc
                      biệt, trong quá trình di chuyển trên bản đồ, người chơi
                      còn có thể khám phá và đánh bại những con Boss ẩn để tăng
                      điểm thành tựu cho bản thân cũng như kiếm tiền và vật
                      phẩm.
                    </p>
                    <p>
                      Cơ chế chiến đấu trong <strong>Tree of Savior</strong> là
                      sự kết hợp giữa cả target và non-target. Dẫu vậy, đa phần
                      thì người chơi sẽ chỉ cần click chuột vào mục tiêu, sau đó
                      bấm phím skill là nhân vật sẽ tự động tấn công mà không sợ
                      bị miss. Thậm chí, một số skill còn tự định hướng sẵn khá
                      tiện lợi, người chơi cũng không cần phải click chuột thật
                      chuẩn xác.
                    </p>
                    <h5>The Lord of the Rings Online</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-1629909305779789555953.jpg"
                      alt="3, GAME NHẬP VAI,GAME MIỄN PHÍ,RUNESCAPE,GAME CÀY CUỐC,PHANTASY STAR ONLINE 2,TREE OF SAVIOR,"
                      note=""
                    />

                    <p>
                      Mặc dù gặp phải nhiều rắc rối trong thời gian đầu hoạt
                      động với mô hình thu phi tháng, nhưng sau khi chuyển đổi
                      sang mô hình free-to-play, The Lord of the Rings Online đã
                      thu được rất nhiều thành công và tạo ra được một lượng
                      fanbase trung thành khá đông đảo. Một loạt các phiên bản
                      expansion như Mines of Moria, Siege of Mirkwood, Rise of
                      Isengard, Riders of Rohan đều đạt điểm đánh giá rất cao.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Điểm nổi bật nhất trong Lord of the Rings Online chính là
                      sự đa dạng trong gameplay. Trên đường đi, bạn sẽ phải đối
                      mặt với hơn 2.500 chủng loại quái vật, hơn 22.000 nhiệm vụ
                      để thực hiện, hơn 10.000 bảo bối để thu thập và nhiều chỗ
                      để khám phá.
                    </p>
                    <h5>Phantasy Star Online 2</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-16299094250721570379787.jpg"
                      alt="4, GAME NHẬP VAI,GAME MIỄN PHÍ,RUNESCAPE,GAME CÀY CUỐC,PHANTASY STAR ONLINE 2,TREE OF SAVIOR,"
                      note=""
                    />

                    <p>
                      <strong>Phantasy Star Online 2</strong> có lối chơi hành
                      động với cách điều khiển cơ bản dựa trên bàn phím, người
                      chơi sẽ sử dụng các phím WASD để di chuyển và lướt nhanh,
                      Space để nhảy trong khi các phím chuột dùng để tung các
                      đòn đánh (chuột trái cho đòn đánh cơ bản trong khi chuột
                      phải dùng để tung ra các skill đặc biệt). Tất nhiên cơ chế
                      combat của Phantasy Star Online 2 hoàn toàn là non-target.
                    </p>
                    <p>
                      Trong <strong>Phantasy Star Online 2</strong>, mỗi nhân
                      vật đều có thể cùng lúc trang bị tối đa 3 loại vũ khí khác
                      nhau và người chơi có thể thay đổi nhanh ngay trong trận
                      đánh bằng phím tắt (Shift). Tất nhiên, lúc này các đòn
                      đánh được tung ra cũng sẽ thay đổi. Địa hình đóng một yếu
                      tố nhất định trong combat, người chơi có thể lợi dụng các
                      đặc điểm về địa hình để tránh đòn, nhảy cao hơn...
                    </p>
                    <p>
                      Đồ họa của <strong>Phantasy Star Online 2</strong> mang
                      đậm phong cách Nhật Bản, có thể nói là khá đẹp mắt với các
                      màu sắc tươi sáng và nhiều đường nét thiết kế tinh tế. Tuy
                      nhiên do cơ chế đồ họa đã cũ nên các chi tiết nhỏ không
                      được chăm chút kỹ lưỡng cho lắm và các hiệu ứng cũng không
                      được lung linh như những sản phẩm mới ra mắt.
                    </p>
                    <h5>Conqueror's Blade</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-1629909797880531840447.png"
                      alt="5, GAME NHẬP VAI,GAME MIỄN PHÍ,RUNESCAPE,GAME CÀY CUỐC,PHANTASY STAR ONLINE 2,TREE OF SAVIOR,"
                      note=""
                    />

                    <p>
                      {" "}
                      Conqueror's Blade là một sự kết hợp hoàn hảo giữa dòng
                      chiến thuật thời gian thực và RPG hành động và có một cơ
                      chế tạo nhân vật cực kỳ chất lượng.
                    </p>
                    <p>
                      Nhìn nhận gameplay một cách khách quan, Conqueror's Blade
                      rất là vui nhộn. Bay nhảy khắp chiến trường và càn quét
                      vào các đơn vị lính khiến cho trò chơi này có cảm giác
                      không khác gì Dynasty Warriors. Thao tác bằng chuột trái
                      và những phím nóng cùng với rất nhiều vũ khí khác nhau có
                      thể tạo nên vô số chiến thuật.
                    </p>
                    <p>(Còn tiếp...)</p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

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
